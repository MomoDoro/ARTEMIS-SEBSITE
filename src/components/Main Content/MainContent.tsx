// src/components/MainContent.tsx

import React, { useEffect } from "react";
import "./MainContent.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdError } from "react-icons/md";
/*import { VscError } from "react-icons/vsc";
import { BiError } from "react-icons/bi";*/
import BarChartComponent from "../BarChart/BarChartComponent";
import { useYear } from "./YearContext";
import BarChartComponentTwo from "../BarChart/BarChartComponentTwo";
import BarChartComponentThree from "../BarChart/BarChartComponentThree";
import BarChartComponentFour from "../BarChart/BarChartComponentFour";

const MainContent: React.FC = () => {
  const { percentages } = useYear();

  useEffect(() => {
    window.scrollTo(0, 0);
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
              <h1 className="main-accurate-no">{percentages.accuracy}</h1>
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
            <h1 className="main-inaccurate-no">{percentages.error}</h1>
            <div className="main-inaccurate" style={{ whiteSpace: 'pre-line' }}>
              {`Error 
                Percentage`}
            </div>
          </div>
          {/*<div className="main-acc-divider-line"></div>*/}

          {/*<div className="main-mean-container">
            <div className="main-mean-icon">
              <VscError />
            </div>
            <h1 className="main-mean-no">{percentages.rmse}</h1>
            <div className="main-mean" style={{ whiteSpace: 'pre-line' }}>
              {`Root Mean 
                Squared Error`}
            </div>
          </div>
          <div className="main-acc-divider-line"></div>

          <div className="main-absolute-container">
            <div className="main-absolute-icon">
              <BiError />
            </div>
            <h1 className="main-absolute-no">{percentages.mape}</h1>
            <div className="main-absolute" style={{ whiteSpace: 'pre-line' }}>
              {`Mean Absolute 
                Percentage Error`}
            </div>
          </div>*/}
        </div>

        <BarChartComponent />

        <BarChartComponentTwo />

        <BarChartComponentThree />

        <BarChartComponentFour />

        <div className="main-con-matrix">
          <img src="assets/Images/Actual.png" alt="Actual Data" />
        </div>

      </div>
    </main>
  );
};

export default MainContent;
