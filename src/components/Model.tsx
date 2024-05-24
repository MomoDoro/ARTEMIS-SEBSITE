// src/components/Model.tsx

import React, { useEffect } from "react";
import "./Model.css";

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component is mounted
      }, []);

  return (
    <main className="model-main-content">
        <div className="model-header-container">
            <div className="model-header">
                <h1>
                    MODEL
                </h1>
            </div>
            <div className="model-desc" style={{ whiteSpace: 'pre-line' }}>
                {`In the context of the Bayesian time series model you provided, phi_1, phi_2, and sigma are parameters of the model that are inferred from the data. Here’s what each of these parameters represents:

                    phi_1 and phi_2:

                    These are the autoregressive (AR) coefficients of your time series model. In an AR(2) model, the value of the time series at time t (i.e., X[t]) is modeled as a linear combination of its previous two values (X[t-1] and X[t-2]), plus some noise.
                    Mathematically, the model is:
                    𝑋
                    [
                    𝑡
                    ]
                    =
                    𝜙
                    1
                    ⋅
                    𝑋
                    [
                    𝑡
                    −
                    1
                    ]
                    +
                    𝜙
                    2
                    ⋅
                    𝑋
                    [
                    𝑡
                    −
                    2
                    ]
                    +
                    𝜖
                    𝑡
                    X[t]=ϕ 
                    1
                    ​
                    ⋅X[t−1]+ϕ 
                    2
                    ​
                    ⋅X[t−2]+ϵ 
                    t
                    ​
                    
                    where 
                    𝜖
                    𝑡
                    ϵ 
                    t
                    ​
                    is normally distributed noise with mean 0 and standard deviation 
                    𝜎
                    σ.
                    During the sampling process, the posterior distributions of phi_1 and phi_2 are estimated. This means the model is trying to find the most likely values of these coefficients given the data, along with the uncertainty around these estimates.
                    sigma:

                    This represents the standard deviation of the noise term 
                    𝜖
                    𝑡
                    ϵ 
                    t
                    ​
                    in the model. It captures the variability in the time series that is not explained by the linear relationship with its past values.
                    In the context of your model, it is sampled from an Exponential distribution with a mean of 1 (as specified by sigma ~ Exponential(1)).
                    The value of sigma tells you how much random variation there is around the predicted values of X[t].
                    Interpretation of Sampling Values and Iterations:
                    Sampling Values:

                    Each sample in the chain represents a possible set of values for phi_1, phi_2, and sigma that is consistent with the observed data. The collection of these samples forms the posterior distribution for each parameter.
                    For instance, phi_1 might have a posterior mean around some value with a certain spread (standard deviation), indicating the range of likely values for phi_1 given the data.
                    Iterations:

                    Each iteration in the sampling process is an update to the estimates of phi_1, phi_2, and sigma based on the data and the previous estimates. The sampler (e.g., NUTS in your case) explores the parameter space to build a representative set of samples from the posterior distribution.
                    The more iterations you run, the more accurate and stable your posterior estimates will be, provided the sampler has converged properly.
                    Practical Example:
                    Let's say your sampling process gives you the following mean estimates and standard deviations for the parameters after convergence:

                    phi_1: mean = 0.8, std = 0.1
                    phi_2: mean = -0.3, std = 0.1
                    sigma: mean = 0.5, std = 0.05
                    This means:

                    On average, phi_1 is estimated to be 0.8, indicating that the value of the series one step back has a strong positive influence on the current value.
                    On average, phi_2 is estimated to be -0.3, indicating that the value of the series two steps back has a smaller negative influence on the current value.
                    The standard deviation of the noise (sigma) is around 0.5, suggesting moderate variability in the series not explained by the AR(2) structure.
                    Summary of the Model's Function:
                    Priors:

                    phi_1 and phi_2 are drawn from a Normal(0, 1) prior, indicating no initial preference for their values.
                    sigma is drawn from an Exponential(1) prior, indicating a prior belief that the noise standard deviation is around 1 but can vary.
                    Likelihood:

                    The observed data is modeled as being generated from the AR(2) process described, with phi_1 and phi_2 governing the relationship between consecutive observations and sigma representing the noise.
                    Posterior Sampling:

                    The sampler explores the possible values of phi_1, phi_2, and sigma that could explain the observed data, building a distribution of likely parameter values (the posterior).
                    This Bayesian approach gives you not just point estimates but full distributions for your parameters, allowing you to quantify uncertainty and make probabilistic predictions.`}
            </div>
        </div>
    </main>
  );
};

export default About;