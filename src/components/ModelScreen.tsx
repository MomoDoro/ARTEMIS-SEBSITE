// src/components/ModelScreen.tsx

import React from "react";
import "./ModelScreen.css"; 
import {Footer} from "./Footer"; 
import Navigator from "./Navigator"; 
import Model from "./Model";

const ModelScreen: React.FC = () => {
  return (
    <div>
      {/* Navigator */}
      <Navigator />

      {/* Main Content */}
      <Model />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ModelScreen;
