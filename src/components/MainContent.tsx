// src/components/MainContent.tsx

import React, { useEffect } from "react";
import "./MainContent.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdError } from "react-icons/md";
import  BarChartComponent  from "./BarChartComponent";

const MainContent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component is mounted
  }, []);

  return (
    <main className="main-content-bg">
      <div className="main-main-content">
        
        <div className="main-precent-container">

          <div className="main-accurate-container-wrap"> 
            <div className="main-accurate-container"> 
              <div className="main-accurate-icon">
                <IoIosCheckmarkCircle />
              </div>
              <h1 className="main-accurate-no">
                85.00%
              </h1>
              <div className="main-accurate" style={{ whiteSpace: 'pre-line' }}>
                {`Accuracy 
                Percentage`}
              </div>
            </div>
            <div className="main-acc-divider-line"></div>
          </div>

          <div className="main-inaccurate-container"> 
              <div className="main-inaccurate-icon">
                <MdError />
              </div>
              <h1 className="main-inaccurate-no">
                15.00%
              </h1>
              <div className="main-inaccurate" style={{ whiteSpace: 'pre-line' }}>
                {`Error 
                Percentage`}
              </div>
            </div>

        </div>

        <div className="main-graph-container">
          <div className="main-graph-content">

            <div className="main-graph-dropdowns">
              <div className="main-graph-left">
                <div className="year">Year:</div>
                <select className="year-dropdown" defaultValue={2023}>
                  <option value={2015}>2015</option>
                  <option value={2016}>2016</option>
                  <option value={2017}>2017</option>
                  <option value={2018}>2018</option>
                  <option value={2019}>2019</option>
                  <option value={2020}>2020</option>
                  <option value={2021}>2021</option>
                  <option value={2022}>2022</option>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                  <option value={2026}>2026</option>
                </select>
              </div>

              <div className="main-graph-right">
                <div className="curr">Currency:</div>
                <select className="curr-dropdown" defaultValue="USD">
                  <option value="USD">USD</option>
                  <option value="PHP">PHP</option>
                  <option value="EUR">EURO</option>
                </select>
              </div>
            </div>

            <div className="graph_container">
              <BarChartComponent />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;