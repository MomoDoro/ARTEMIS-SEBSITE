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
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.`}
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