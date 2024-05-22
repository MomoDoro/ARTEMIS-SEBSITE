// src/components/AboutScreen.tsx

import React from "react";
import "./AboutScreen.css"; 
import {Footer} from "./Footer"; 
import Navigator from "./Navigator"; 
import About from "./About";

const AboutScreen: React.FC = () => {
  return (
    <div>
      {/* Navigator */}
      <Navigator />

      {/* Main Content */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutScreen;
