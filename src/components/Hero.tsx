// src/components/Hero.tsx

import React from "react";
import { Link } from 'react-router-dom';
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="lol">
          <div className="header-overlay">
            <h1>
              Import and Export Forecasting
            </h1>
          </div>
          <div className="hero-desc" style={{ whiteSpace: 'pre-line' }}>
            {`Welcome to Artemis, where precision meets prediction in the realm of global trade. 
              Our platform leverages cutting-edge Bayesian neural network technology to forecast the 
              values of import and export products with unparalleled accuracy.


              Whether you're a seasoned trader or a budding entrepreneur, our intuitive interface and 
              sophisticated algorithms empower you to make informed decisions in the dynamic world of 
              international commerce. Join us and unlock the future of trade forecasting today.`}
          </div>
          <Link to="/About" className="more">LEARN MORE</Link>
        </div>
        
        <div className="logo-side">
          <div className="logo"></div>
        </div>

      </div>
    </header>
  );
};

export default Hero;