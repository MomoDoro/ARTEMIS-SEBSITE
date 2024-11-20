// src/components/Hero.tsx

import React from "react";
import { Link } from 'react-router-dom';
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="lol">
          <div className="header-overlay" style={{ whiteSpace: 'pre-line' }}>
            {`
              Import and 
              Export Forecasting
            `}
          </div>
          <div className="hero-desc" style={{ whiteSpace: 'pre-line' }}>
            {`Welcome to AgriStats, where precision meets prediction in the realm of global trade. 
              Our platform leverages Long Short-Term Memory (LSTM) technology to forecast   
              the values of import and export products with unparalleled accuracy.


              Whether you're a seasoned trader or a budding entrepreneur, our intuitive interface and 
              sophisticated algorithms empower you to make informed decisions in the dynamic world of 
              international commerce. Join us and unlock the future of trade forecasting today.`}
          </div>
          <Link to="/About" className="more">LEARN MORE</Link>
        </div>
        
        <div className="logo-side">
          <div className="logo"></div>
          <div className="logo_two"></div>
          <div className="logo_three"></div>
        </div>

      </div>
    </header>
  );
};

export default Hero;