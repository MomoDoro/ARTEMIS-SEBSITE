// src/components/HomeScreen.tsx

import React from "react";
import "./HomeScreen.css";
import Navigator from "./Navigator";
import Hero from "./Main Content/Hero";
import MainContent from "./Main Content/MainContent";
import { Footer } from "./Footer";
import { YearProvider } from "./Main Content/YearContext";

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
