// src/components/MainContent.tsx

import React, { useEffect } from "react";
import "./MainContent.css";
import BarChartComponent from "../BarChart/BarChartComponent";
import BarChartComponentTwo from "../BarChart/BarChartComponentTwo";
import BarChartComponentThree from "../BarChart/BarChartComponentThree";
import BarChartComponentFour from "../BarChart/BarChartComponentFour";
import InfoCollapsible from "./InfoCollapsible";

const MainContent: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-content-bg">
      <div className="main-main-content">

        <BarChartComponentThree />
        
        <div className="col-in">
          <InfoCollapsible />
        </div>

        <BarChartComponent />

        <BarChartComponentTwo />

        <BarChartComponentFour />

        {/*<div className="main-con-matrix">
          <div className='main-graph-name'>
            Confusion Matrix
          </div>
          <img src="assets/Images/Actual.png" alt="ConfusionMatrix" />
        </div>*/}

      </div>
    </main>
  );
};

export default MainContent;
