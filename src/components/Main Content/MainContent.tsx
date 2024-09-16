// src/components/MainContent.tsx

import React, { useState } from "react";
import BarChartComponent from "../BarChart/BarChartComponent";
import BarChartComponentTwo from "../BarChart/BarChartComponentTwo";
import BarChartComponentThree from "../BarChart/BarChartComponentThree";
import BarChartComponentFour from "../BarChart/BarChartComponentFour";
import InfoCollapsible from "./InfoCollapsible";
import "./MainContent.css";

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1); // Tracks active tab

  return (
    <main className="main-content-bg">
      <div className="main-main-content">

        {/* Tab navigation */}
        <div className="main-tabs">
          <button 
            className={activeTab === 1 ? "main-tab active" : "main-tab"} 
            onClick={() => setActiveTab(1)}
          >
            Agricultural Forecast
          </button>
          <button 
            className={activeTab === 2 ? "main-tab active" : "main-tab"} 
            onClick={() => setActiveTab(2)}
          >
            Monthly Sum of FOB
          </button>
          <button 
            className={activeTab === 3 ? "main-tab active" : "main-tab"} 
            onClick={() => setActiveTab(3)}
          >
            Yearly Commodities
          </button>
          <button 
            className={activeTab === 4 ? "main-tabed active" : "main-tabed"} 
            onClick={() => setActiveTab(4)}
          >
            Yearly FOB
          </button>
        </div>

        {/* Content for each tab */}
        <div className="main-tab-content">
          {activeTab === 1 && (
            <>
              <BarChartComponentThree />
              <div className="col-in">
                <InfoCollapsible />
              </div>
            </>
          )}
          {activeTab === 2 && <BarChartComponent />}
          {activeTab === 3 && <BarChartComponentTwo />}
          {activeTab === 4 && <BarChartComponentFour />}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
