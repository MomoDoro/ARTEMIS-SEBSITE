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
                {`explained_variance: 0.147
R2:     0.1268
MAE:   0.3634
MSE:   0.26496015
MAPE: 53.68%
RMSE:  0.5147

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
                {`explained_variance: 0.0101
R2:     -0.898
MAE:   0.4879
MSE:   0.39349259
MAPE: 35.43%
RMSE:  0.6273

                        precision  |  recall  |  f1-score  |  support

High exports       1.00           1.00        1.00             36
Accuracy                                              1.00            36
Macro avg           1.00           1.00        1.00             36
Weighted avg      1.00           1.00       1.00              36`}
          </div>
          <img src="assets/Images/Exports2024.png" alt="Exports2024" />
          </>
        );
      case 3:
        return (
          <>
          <div className="imports2024" style={{ whiteSpace: 'pre' }}>
            {`explained_variance: -0.1599
R2:     -2.8952
MAE:   0.7134
MSE:   0.69692155
MAPE: 51.01%
RMSE:  0.8348

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
            {`explained_variance: 0.1191
R2:     -1.7353
MAE:   0.4895
MSE:   0.3157811
MAPE: 37.67%
RMSE:  0.5619

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