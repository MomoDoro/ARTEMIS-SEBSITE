import React, { useState, useRef } from "react";
import "./InfoCollapsible.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const InfoCollapsible: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null); // To reference the content height

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };


  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <>
          <div className="import2023" style={{ whiteSpace: 'pre' }}>
                {`explained_variance: 0.1337
R2:     0.118
MAE:   0.3784
MSE:   0.26763906
MAPE: 53.67%
RMSE:  0.5173

                        precision  |  recall  |  f1-score  |  support

High imports        0.83           1.00        0.91             10
Low imports         0.00           0.00       0.00            2
Accuracy                                               0.83            12
Macro avg           0.42           0.50        0.45             12
Weighted avg      0.69           0.83       0.76              12`}
          </div>
          <img src="assets/Images/Imports2023.png" alt="Imports2023" />
          </>
        );
      case 2:
        return (
          <>
          <div className="exports2024" style={{ whiteSpace: 'pre' }}>
                {`explained_variance: 0.0054
R2:     -1.4229
MAE:   0.4427
MSE:   0.4427
MAPE: 37.73%
RMSE:  0.5171

                        precision  |  recall  |  f1-score  |  support

High exports       1.00           1.00        1.00             24
Accuracy                                              1.00            24
Macro avg           1.00           1.00        1.00             24
Weighted avg      1.00           1.00       1.00              24`}
          </div>
          <img src="assets/Images/Exports2024.png" alt="Exports2024" />
          </>
        );
      case 3:
        return (
          <>
          <div className="imports2024" style={{ whiteSpace: 'pre' }}>
            {`explained_variance: -0.4316
R2:     -3.277
MAE:   0.7431
MSE:   0.76523479
MAPE: 52.84%
RMSE:  0.8748

                        precision  |  recall  |  f1-score  |  support

High imports       1.00           1.00        1.00             12
Accuracy                                              1.00            12
Macro avg           1.00           1.00        1.00             12
Weighted avg      1.00           1.00       1.00              12`}
          </div>
          <img src="assets/Images/Imports2024.png" alt="Imports2024" />
          </>
        );
      default:
        return (
          <>
          <div className="export2023" style={{ whiteSpace: 'pre' }}>
            {`explained_variance: 0.0621
R2:     -1.3836
MAE:   0.4527
MSE:   0.27518573
MAPE: 35.58%
RMSE:  0.5246

                        precision  |  recall  |  f1-score  |  support

High exports       1.00           1.00        1.00             36
Accuracy                                              1.00            36
Macro avg           1.00           1.00        1.00             36
Weighted avg      1.00           1.00       1.00              36`}
          </div>
          <img src="assets/Images/Exports2024.png" alt="Exports2024" />
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
      <div
        ref={contentRef}
        className="info-content"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
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