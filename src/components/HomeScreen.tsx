// src/components/HomeScreen.tsx

import React from "react";
import "./HomeScreen.css";
import Navigator from "./Navigator";
import Hero from "./Hero";
import MainContent from "./MainContent";
import { Footer } from "./Footer";
import { YearProvider } from "./YearContext";

const HomeScreen: React.FC = () => {
  return (
    <div>
        <Navigator />

        <Hero />

        <YearProvider>
          <MainContent />
        </YearProvider>

        <Footer />
    </div>
  );
};

export default HomeScreen;
