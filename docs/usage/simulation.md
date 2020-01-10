# Particle Simulation

This is something I want to say that is not in the docstring.


### particle.simulate.CL2(x, L=6.283185307179586)
Centered L2 discrepancy

Calculate the squared centred L2 discrepancy for quantifying uniformity.


* **Parameters**

    
    * **x** – vector containing particle positions at a given time


    * **L** – domain length, float



* **Returns**

    the CL2 discrepancy at this time, float



* **Return type**

    CL2


Adapted from [https://stackoverflow.com/questions/50364048/python-removing-multiple-for-loops-for-faster-calculation-centered-l2-discrepa](https://stackoverflow.com/questions/50364048/python-removing-multiple-for-loops-for-faster-calculation-centered-l2-discrepa)


### particle.simulate.calculate_interaction(x_curr, v_curr, phi, L, denominator='Full')
Calculate interaction term of the full particle system


* **Parameters**

    
    * **x_curr** – np.array of current particle positions


    * **v_curr** – np.array of current particle velocities


    * **phi** – interaction function


    * **L** – domain length, float


    * **denominator** – string corresponding to scaling by the total number of


    * **or the number of particles that are interacting with each particle** (*particles*) – 



* **Returns**

    vector containing the interaction at the current

        time step for each particle




* **Return type**

    interaction_vector


See also: :py:mod:’~particle.interactionfunctions’


### particle.simulate.run_full_particle_system(particles=100, D=1, initial_dist_x=None, initial_dist_v=None, interaction_function='Zero', dt=0.1, T_end=100, herding_function='Step', L=6.283185307179586, denominator='Full', well_depth=None, gamma=0.1)
Full Particle model

Calculates the solution of the space-inhomogeneous particle model using an
Euler-Maruyama scheme.


* **Parameters**

    
    * **particles** (*int*) – Number of particles to simulate.


    * **D** (*float*) – Diffusion coefficient denoted sigma in equation.


    * **initial_dist_x** (*string**, **array_like*) – The initial positions of the particles.


    * **initial_dist_v** (*string**, **array_like*) – The initial velocities of the particles.


    * **dt** (*float*) – Time step to be use in E-M scheme.


    * **T_end** (*float*) – Time point at which to end simulation.


    * **herding_function** (*string*) – Choice of herding function.


    * **L** (*float*) – Domain length, must be positive.


    * **Denominator** (*string*) – Either “Full” or “Garnier”, scales the interaction term
    by either the number of particles each particle is interacting with or the
    total number of particles in the system.



* **Returns**

    Times at which velocities were calculated (only used for

        plotting).

    x (array): Positions of each particle at every timestep.
    v (array): Velocities of each particle at every timestep.




* **Return type**

    t (array)


Usage:

    t,x,v = run_full_particle_system()

See also: `interactionfunctions`, `herdingfunctions`, `calculate_interaction()`


### particle.simulate.run_hom_particle_system(particles=100, D=1, initial_dist_v=None, dt=0.1, T_end=1, herding_function='Step', well_depth=None, gamma=0.1)
Space-Homogeneous Particle model

Calculates the solution of the space-homogeneous particle model using an
Euler-Maruyama scheme.


* **Parameters**

    
    * **particles** – Number of particles to simulate, int.


    * **D** – Diffusion coefficient denoted sigma in equation, float.


    * **initial_dist_v** – String corresponding to dictionary item or array containing
    initial velocities of particles.


    * **dt** – Time step to be use in Euler-Maruyama scheme, float.


    * **T_end** – Time point at which to end simulation, float.


    * **herding_function** – String corresponding to dictionary item.


    * **well_depth** – float to be passed to the Garnier herding function.


    * **gamma** – float to be passed to the gamma interaction function



* **Returns**

    array of times at which velocities were calculated (only used for

        plotting).

    v: array containing velocities of each particle at every timestep.

    Typical Usage:

        t,v = run_hom_particle_system()




* **Return type**

    t


See also: :py:mod:’~particle.interactionfunctions’, :py:mod:’~particle.herdingfunctions’
