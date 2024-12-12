import React, { useState } from "react";
import "./InfoCollapsible.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const InfoCollapsible: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <>
            <div className="info-container-wrap">

              <div className="info-exp-container">
                <h1 className="info-exp-container-no">0.147</h1>
                <div className="info-exp" style={{ whiteSpace: 'pre-line' }}>
                {`Explained 
                Variance`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.1268</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`R2`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.3634</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MAE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.26496015</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MSE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">53.68%</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MAPE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.5147</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`RMSE`}
                </div>
              </div>

            </div>

            <div className="info-confuse">Confusion Matrix</div>
            <div className="info-confuse-desc">
              This matrix illustrates the model's classification performance. Diagonal cells indicate correctly classified true positive predictions, while off-diagonal cells represent false positives and false negatives where predictions didn’t match actual values. A strong model displays high values along the diagonal, with more intense colors highlighting better performance and accurate classification. This matrix is essential for identifying areas to improve model accuracy.
            </div>

            <img src="assets/Images/Imports2023.png" alt="Imports2023" />
            <div className="info-note">
              Note: For the forecasted imports of 2023, we applied 2017-2022 data using php/usd exchange data, crude oil prices, and inflation rate.
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="info-container-wrap">

              <div className="info-exp-container">
                <h1 className="info-exp-container-no">-0.0924</h1>
                <div className="info-exp" style={{ whiteSpace: 'pre-line' }}>
                {`Explained 
                Variance`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">-0.4838</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`R2`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.2955</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MAE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no"> 0.11332763</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MSE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">33.67%</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MAPE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.3366</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`RMSE`}
                </div>
              </div>

            </div>

            <div className="info-confuse">Confusion Matrix</div>
            <div className="info-confuse-desc">
              This matrix illustrates the model's classification performance. Diagonal cells indicate correctly classified true positive predictions, while off-diagonal cells represent false positives and false negatives where predictions didn’t match actual values. A strong model displays high values along the diagonal, with more intense colors highlighting better performance and accurate classification. This matrix is essential for identifying areas to improve model accuracy.
            </div>

            <img src="assets/Images/Exports2024.png" alt="Exports2024" />
            <div className="info-note">
              Note: For the forecasted Exports of 2024, we applied 2003-2023 data using php/usd exchange data, crude oil prices, and inflation rate.
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="info-container-wrap">

              <div className="info-exp-container">
                <h1 className="info-exp-container-no">0.008</h1>
                <div className="info-exp" style={{ whiteSpace: 'pre-line' }}>
                {`Explained 
                Variance`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">-0.8786</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`R2`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.3522</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MAE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.16089387</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MSE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">44.49%</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MAPE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.4011</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`RMSE`}
                </div>
              </div>

            </div>

            <div className="info-confuse">Confusion Matrix</div>
            <div className="info-confuse-desc">
              This matrix illustrates the model's classification performance. Diagonal cells indicate correctly classified true positive predictions, while off-diagonal cells represent false positives and false negatives where predictions didn’t match actual values. A strong model displays high values along the diagonal, with more intense colors highlighting better performance and accurate classification. This matrix is essential for identifying areas to improve model accuracy.
            </div>

            <img src="assets/Images/Imports2024.png" alt="Imports2024" />
            <div className="info-note">
              Note: For the forecasted imports of 2024, we applied 2018-2023 data using php/usd exchange data, crude oil prices, and inflation rate.
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="info-container-wrap">

              <div className="info-exp-container">
                <h1 className="info-exp-container-no">0.1191</h1>
                <div className="info-exp" style={{ whiteSpace: 'pre-line' }}>
                {`Explained 
                Variance`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">-1.7353</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`R2`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.4895</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MAE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.3157811</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MSE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">37.67%</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`MAPE`}
                </div>
              </div>

              <div className="info-r-container">
                <h1 className="info-r-container-no">0.5619</h1>
                <div className="info-r" style={{ whiteSpace: 'pre-line' }}>
                {`RMSE`}
                </div>
              </div>

            </div>

            <div className="info-confuse">Confusion Matrix</div>
            <div className="info-confuse-desc">
              This matrix illustrates the model's classification performance. Diagonal cells indicate correctly classified true positive predictions, while off-diagonal cells represent false positives and false negatives where predictions didn’t match actual values. A strong model displays high values along the diagonal, with more intense colors highlighting better performance and accurate classification. This matrix is essential for identifying areas to improve model accuracy.
            </div>

            <img src="assets/Images/Exports2023.png" alt="Exports2023" />
            <div className="info-note">
              Note: For the forecasted exports of 2023, we applied 1997-2022 data using php/usd exchange data, crude oil prices, and inflation rate.
            </div>
          </>
        );
    }
  };

  return (
    <div className="collapsible-container">
      <button className="collapsible" onClick={toggleCollapse}>
        {isOpen ? "Hide miscellaneous information" : "Show miscellaneous information"}
        {isOpen ? <AiOutlineMinus className="icon" /> : <AiOutlinePlus className="icon" />}
      </button>
      <div className={`info-content ${isOpen ? "open" : ""}`}>
        <div className="tab-container">
          <button className={`tab ${activeTab === 0 ? "active" : ""}`} onClick={() => setActiveTab(0)}>
            Exports 2023
          </button>
          <button className={`tab ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>
            Imports 2023
          </button>
          <button className={`tab ${activeTab === 2 ? "active" : ""}`} onClick={() => setActiveTab(2)}>
            Exports 2024
          </button>
          <button className={`tab ${activeTab === 3 ? "active" : ""}`} onClick={() => setActiveTab(3)}>
            Imports 2024
          </button>
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default InfoCollapsible;
