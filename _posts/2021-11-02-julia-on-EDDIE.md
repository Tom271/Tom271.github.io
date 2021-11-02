---
layout: post
title:  "Using Julia on EDDIE at University of Edinburgh"
author: tom
categories: [HPC]
image: assets/images/julia_repl.png
comments: false
---
> TL;DR : `module load roslin/julia/1.5.3`

For my next project during my PhD, I've decide to use the programming language [Julia](https://julialang.org/). Although it is much faster than Python, my usual language, there are still a few simulation I want to run that will take a lot of time. Previously I've used [EDDIE, the HPC cluster](https://www.ed.ac.uk/information-services/research-support/research-computing/ecdf/high-performance-computing) at the University of Edinburgh when I needed a little more computing power, or when I expect simulations to take a while and don't want to brick my laptop. I've written previously about using MATLAB and Python on EDDIE, but now I need to work out how to get Julia working. This process will work for any language you want to see if is available on the cluster.

As usual, first of all you'll have to [sign into the UoE VPN](https://www.ed.ac.uk/information-services/computing/desktop-personal/vpn), and `ssh` into the cluster. To find out whether the module exists, we can use `module available`.
This spits out a whole load of text showing everything available on the cluster.
First up we see our old friends MATLAB, Python and R.
![module_available output]({{ site.baseurl }}/assets/images/module_available.png)
Scrolling further down we see that Julia is listed in a folder belonging to the [Roslin Institute](https://www.ed.ac.uk/roslin). The most obvious thing to try here is `module load julia`, but that won't work. Instead we have to be more specific on the path, using
```bash
module load roslin/julia/1.5.3
```
This is the most recent version available. Alternatively to sifting through all available modules ourselves,  we can use
```bash
module available 2>&1 | grep julia
```
and this will do the hard work for us, listing only the modules with names including Julia.

After running the load command, we can start up a Julia REPL as normal by just typing `julia`.

![Julia REPL on EDDIE]({{ site.baseurl }}/assets/images/julia_repl.png)
