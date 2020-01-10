# Plotting

This is something I want to say that is not in the docstring.


### particle.plotting.anim_pos_vel_hist(t, _x, v, window=1, L=6.283185307179586, mu_v=1, variance=1.4142135623730951, framestep=1)
Animate position and velocity histograms

Produces an animation object with histograms of positions and velocities of
particles across a window.


* **Parameters**

    
    * **t** – Time data, 1d array


    * **_x** – Particle position data, array


    * **v** – Particle velocity data, array


    * **window** – Time across which the density should be approximated, between 0 and T,
    float


    * **L** – Length of the domain


    * **mu_v** – Expected mean of the velocity stationary distribution, float


    * **variance** – Expected variance of the velocity stationary distribution, float (>0)


    * **framestep** – The number of frames the animation should jump,
    integer greater than 1



* **Returns**

    Animation object



* **Return type**

    ani



### particle.plotting.anim_torus(t, _x, v, L=6.283185307179586, mu_v=1, variance=1.4142135623730951, framestep=1, pos_panel=None, vel_panel=None, subsample=None)
Animate the particles on the torus

Produces an animation of the particles moving on the torus, as well as two panels.
One contains two plots using position data, the other using the velocity data.
Panels can be either histograms (density estimates) or particle trajectories.


* **Parameters**

    
    * **t** – 


    * **_x** – 


    * **L** – 


    * **mu_v** – 


    * **variance** – 


    * **framestep** – 


    * **pos_panel** – 


    * **vel_panel** – 


    * **subsample** – 



* **Returns**

    


* **Return type**

    ani


See also: update_torus, plot_pos_hist, plot_vel_hist, update_pos_hist,
update_pos_line, update_vel_hist, update_vel_line


### particle.plotting.plot_avg_vel_CL2(avg_ax, cl2_ax, t, x, v, xi, ymax=None)
Plot average velocity and centered L2 discrepancy

Produces a figure showing average velocity and CL2 discrepancy. Calculates CL2,
so can be slow


* **Parameters**

    
    * **avg_ax** – Axes object on which to plot avg velocity


    * **cl2_ax** – Axes object on which to plot calculated CL2 discrepancy


    * **t** – Time data, array


    * **x** – Position data , array


    * **v** – Velocity data, array


    * **xi** – Solution to compatibility equation (usually 1 or -1)


    * **ymax** – Optional, enforces y axis limit on CL2 plot



* **Returns**

    Axes object with plot
    cl2_ax: Axes object with plot



* **Return type**

    avg_ax



### particle.plotting.plot_pos_hist(position_ax, position_time_ax, x)
Plotting pos histogram


### particle.plotting.plot_pos_line(position_ax, position_time_ax, t, x)
Plots the position trajectories


### particle.plotting.plot_vel_hist(vel_ax, vel_time_ax, v, mu_v, variance)
Plotting vel histogram


### particle.plotting.plot_vel_line(vel_ax, vel_time_ax, t, x)
Plots the velocity trajectories


### particle.plotting.update_pos_hist(i, x, framestep, patches_x, patches_x_time)
Update position histograms


### particle.plotting.update_pos_line(i, t, x, framestep, pos_lines)
Update position trajectories


### particle.plotting.update_torus(i, t, x, v, framestep, pos_points, neg_points)
Update particles positions on torus plot


### particle.plotting.update_vel_hist(i, v, framestep, patches_v, patches_v_time)
Update velocity histograms


### particle.plotting.update_vel_line(i, t, v, framestep, vel_lines)
Update velocity trajectories
