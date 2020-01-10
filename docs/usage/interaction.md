# Functions

## Herding Functions


### particle.herdingfunctions.Garnier(u, h=6)
Herding function of Garnier et al. (2019)


### particle.herdingfunctions.smooth(u)
Smooth herding function


### particle.herdingfunctions.step(u, beta=1)
Discontinuous herding function


### particle.herdingfunctions.zero(u)
No herding occurs

## Interaction Functions


### particle.interactionfunctions.Garnier(x_i_, L=6.283185307179586)
Interaction function of Garnier et al. (2019)


### particle.interactionfunctions.gamma(x_i_, gamma=0.1, L=6.283185307179586)
Variable cutoff indicator interaction


### particle.interactionfunctions.indicator(x_i_, L=6.283185307179586)
Particles interact up to a hard cut off


### particle.interactionfunctions.smoothed_indicator(x, a=0.5)
An indicator function with a softer cutoff


### particle.interactionfunctions.uniform(x_i_)
All particles interact with every other particle


### particle.interactionfunctions.zero(x_i_)
No interaction between particles
