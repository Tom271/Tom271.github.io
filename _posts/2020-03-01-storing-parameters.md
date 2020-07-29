---
layout: post
title:  "Saving Simulation Data and Parameters Efficiently"
author: tom
categories: [Python]
image: assets/images/yaml_screenshot.png
comments: false
---

UPDATE (25/07/20): It seems my initial search for packages that do this was not hitting the right keywords. I've since found there are [quite a few out there!](https://gist.github.com/mnarayan/d33ea8a13c9d5da7c4d0) For now, I'm still using a version based on what's below.


During my work on particle systems, I have spent a lot of time simulating trajectories of particles using different parameters and initial conditions. Until now, I'd been either running a new simulation every time, or saving individual datasets with filenames like `GammaFullScaling04`,  or other incomprehensible strings made by concatenating parameter values. As the amount of data has increased, this has become untenable, so I've been spending some time recently coming up with a better way.  This problem is not unique to my situation, I imagine many scientists are in a similar position! After some googling, I couldn't find any clear method. After a chat with [a data engineering friend of mine](https://sebstrug.com/) he suggested looking into `.yaml` files as a way to store parameters.

There are two main problems I needed to solve:

1. How can I associate a parameter set with a data file?
2. How can I retrieve the data file quickly when I want to use it again?

These themselves are associated with the two obvious parts of data storage: reading and writing. Each of these poses their own questions. My current data pipeline is as follows:

![data flowchart]({{ site.baseurl }}/assets/images/data_flowchart.svg)


This probably raises more questions than it answers but hopefully what follows will answer them.

## Writing Data: Storage Format

The data comes from the simulation as two large matrices (on the order of 100 columns and 1000 rows.).  The simplest way to store data in Python is using the [Pickle](https://docs.python.org/3/library/pickle.html) module. This module is very easy to use, and can be used to store *any* Python object. Such flexibility wasn't really required here, I knew a lot about the type of data coming in (as I was generating it myself). As an easy method, this is what I was using for the past 6 months. However after having a look around, it seems [Pickle is not the best way](https://www.benfrederickson.com/dont-pickle-your-data/). This prompted me to look into other alternatives. The typical way in most science seems to be using a `.csv` file. This has a few benefits: it is widely supported, readable and [still beats many more modern methods](https://towardsdatascience.com/the-best-format-to-save-pandas-data-414dca023e0d). Two relatively new formats on the scene are [feather](https://blog.rstudio.com/2016/03/29/feather/) and [parquet](https://arrow.apache.org/docs/python/parquet.html). These are attractive as they allow for smaller file sizes,  faster read/write speed and support across more languages. After reading around, I settled on using feather to store data.

## Writing Data: Storing Parameter Sets

Previously, I'd remember which parameter sets generated what data by naming the file with a list of parameters, or having a file tree where each folder had a parameter choice. Obviously, this is not the best way. Looking for a data set usually meant guessing what order the parameters were saved in and lots of clicking. Now I use a `.yaml` file. This is a way of storing what is effectively a large Python dictionary, which can be read in using [`pyyaml`](https://pypi.org/project/PyYAML/). The keys of the dictionary are the filenames of the data, and the values are also dictionaries that contain parameter sets.  File names were randomly generated using [`coolname`](https://pypi.org/project/coolname/) . Any random string can be used, but not all of them will be as amusing.

![yaml_screenshot]({{ site.baseurl }}/assets/images/yaml_screenshot.PNG)

The first step is to read in the `.yaml` file:

```python
try:
	with open(file_path + filename + ".yaml", "r") as file:
		history = yaml.safe_load(file)
except Exception as e:
	print("Error reading the config file")
```

Now we have a dictionary called `history` containing all the previously ran parameter sets. This can be searched to see if it contains the parameter set you're currently interested in:

```python
for name in history.keys():
    if parameters.items() == history[name].items():
        print("Given parameters are exact match of existing set:")
        filename = name
```

So we iterate through the keys (filenames) in the history and see if there is an exact match to the parameter set. For my parameters, I'm also interested if a subset has been ran:

```python
elif parameters.items() <= history[name].items():
  print(
      "Given parameters are subset of existing set, additional parameters are:"
  )
  additional_parameters = {
      k: history[name][k] for k in set(history[name]) - set(parameters)
  }
  print(additional_parameters)
  filename = name
```

Finally, for some parameters the value may not matter as much. For example, say I want to run a simulation with a parameter set for 20 seconds. If I've already ran the same set for 50 seconds, there is not much point in re-simulating—instead the first 20 seconds of the old data should be retrieved. This is very much dependent on what your parameters mean and should be done on a case-by-case, parameter-by-parameter basis.

If the parameter set has not been ran before, it needs to be added to the `.yaml` file:

```python
filename = coolname.generate_slug(4)
with open(file_path + filename + ".yaml", "w") as file:
    # Add parameters and name to dictionary
	history.update({filename: parameters})
    # Update the yaml file
    yaml.dump(history, file)
```

## Writing Data: Simulating and Storing

Simulating is as simple as passing the dictionary to the simulation function:

```python
x, v = ParticleSystem(**parameters).get_trajectories()
```

The `**` unpacks the dictionary as keywords arguments (like `**kwargs`). Here, `x,v` are large [NumPy](https://numpy.org/) arrays. To store these arrays, I convert them to a [Pandas](https://pandas.pydata.org/) dataframe before saving them using [Feather](https://github.com/wesm/feather)—in fact, this is now built in to Pandas using the `to_feather` function. To save using Feather, column names must be strings.

```python
import pandas as pd
position_df = pd.DataFrame(x)
velocity_df = pd.DataFrame(v)

# Map column names to strings
position_df.columns = position_df.columns.map(str)
velocity_df.columns = velocity_df.columns.map(str)

velocity_df.to_feather(filepath + filename + "_v")
position_df.to_feather(filepath + filename + "_x")
```

So now we have a data file saved, named using a random string that is stored in the `.yaml` file!

## Reading Data: Searching the YAML

To retrieve a data set, first create a dictionary of the parameters:

```python
parameters={
    "T_end": [20]
}
```

Then we search the YAML file to see if any simulations match this parameter set:

```python
for name in history.keys():
	if parameters.items() == history[name].items():
 		print("Given parameters are exact match of existing set:")
        filename = name
	elif parameters.items() <= history[name].items():
		print(
                "Given parameters are subset of existing set, additional parameters are:"
            )
		additional_parameters = {
        	k: history[name][k] for k in set(history[name]) ^ set(parameters)
            }
		print(additional_parameters)
        filename = name

if filename is None:
	print("Could not find matching parameter set")
```

Finally to read the data in:

```python
try:
	test_data = pickle.load(open(file_path + filename, "rb"))
except FileNotFoundError as e:
	print("Could not find file {}".format(filename))
parameters = history.get(filename)
x, v = test_data["Position"], test_data["Velocity"]
```

So now the two Numpy arrays have been retrieved!

-----

This is one way to store parameters and data, but I'd be interested in hearing your ways! Are there glaring errors here? Get in touch!

Questions I still have include:

- When the `.yaml` file gets too big, searching for a parameter set takes longer and longer: is there a quicker way of searching? Or of splitting the `.yaml`?
- Is Feather the best format to use here?

## Useful Links

- [Don't Pickle Your Data](https://www.benfrederickson.com/dont-pickle-your-data/)
- [Best format for pd DataFrame](https://towardsdatascience.com/the-best-format-to-save-pandas-data-414dca023e0d)
- [Parquet Pandas docs](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_parquet.html#pandas.DataFrame.to_parquet)
- [Feather](https://blog.rstudio.com/2016/03/29/feather/)
- [Difference between Parquet and Feather](https://stackoverflow.com/questions/48083405/what-are-the-differences-between-feather-and-parquet)
