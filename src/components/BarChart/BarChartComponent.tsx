// src/BarChartComponent.tsx
import React, { useState } from 'react';
import {  
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
} from 'recharts';
import "./BarChartComponent.css"
import { useYear } from '../Main Content/YearContext';
import CustomTooltip from './CustomTooltip';

type YearlyData = {
  [year: number]: { name: string; Actual: number; Predicted: number; mae: number; rmse: number; mape: number; imageUrl: string; }[];
};

const yearlyData: YearlyData = {
  2015: [
    { name: 'Banana', Actual: 657870072,  Predicted: 195477911.93, mae: 38532680.00624238, rmse: 44877708.621181525, mape: 63.761608567670514, imageUrl: 'assets/Images/2015 Banana.jfif'},
    { name: 'Crude Oil', Actual: 410457282,  Predicted: 295079178.82, mae: 21804326.532248285, rmse: 23323423.403623346, mape: 100.7853504454341, imageUrl: 'assets/Images/2015 Crude Oil.jfif' },
    { name: 'Refined Oil', Actual: 381964099,  Predicted: 148588473.58, mae: 19447968.78485198, rmse: 21530539.825569574, mape: 58.09129153285612, imageUrl: 'assets/Images/2015 Refined Oil.jfif' },
    { name: 'Pineapple', Actual:  344826935,  Predicted: 552272937.85, mae: 17287166.904156536, rmse: 18575794.52096802, mape: 73.89131550485911, imageUrl: 'assets/Images/2015 Pineapples.jfif' },
    { name: 'V. Coconut Oil', Actual: 279912645,  Predicted: 30139997.21, mae: 20814387.315883007, rmse: 25260095.927213214, mape: 91.4204354705258, imageUrl: 'assets/Images/2015 Virgin Coconut.jfif' },
    { name: 'Tunas', Actual: 224081771,  Predicted: 137977031.93, mae: 7210521.417747314, rmse: 8408008.206663975, mape: 35.62589774543824, imageUrl: 'assets/Images/2015 Tuna Container.jfif' },
    { name: 'Desiccated', Actual: 16005129,  Predicted: 74402636.80, mae: 7137388.266755617, rmse: 7885657.422492863, mape: 51.28671945960198, imageUrl: 'assets/Images/2015 Desiccated Coconut.jfif' },
    { name: 'Carageenan', Actual: 137760353,  Predicted: 125207484.75, mae: 3256293.8222584524, rmse: 3927958.5049439925, mape: 44.93870721009798, imageUrl: 'assets/Images/2015 Carageenan.jfif' },
    { name: 'Other', Actual: 127448067,  Predicted: 49615502.47, mae: 6486047.044518679, rmse: 6981771.999050326, mape: 60.406188115686575, imageUrl: 'assets/Images/2015 Other.jfif' },
    { name: 'Fresh Pineapple', Actual: 126170584,  Predicted: 127101298.81, mae: 2829770.069471584, rmse: 3541602.559970594, mape: 31.23640339536331, imageUrl: 'assets/Images/2015 Fresh Pineapples.jfif' }
  ],
  /*2016: [
    { name: 'Apples', Actual: 4000,  Predicted: 13000, Amount: 1600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Bananas', Actual: 7000,  Predicted: 33000, Amount: 3100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Cherries', Actual: 9500,  Predicted: 54000, Amount: 2600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Dates', Actual: 11000,  Predicted: 65000, Amount: 600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Elderberries', Actual: 62000,  Predicted: 53000, Amount: 7600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Figs', Actual: 21000,  Predicted: 44000, Amount: 1100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Grapes', Actual: 46000,  Predicted: 47000, Amount: 2100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Honeydew', Actual: 24000,  Predicted: 46000, Amount: 3600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Indian Fig', Actual: 13000,  Predicted: 56000, Amount: 12600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Jackfruit', Actual: 23000,  Predicted: 34000, Amount: 18100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' }
  ],
  2017: [
    { name: 'Apples', Actual: 5000,  Predicted: 14000, Amount: 1700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Bananas', Actual: 8000,  Predicted: 34000, Amount: 3200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Cherries', Actual: 10000,  Predicted: 55000, Amount: 2700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Dates', Actual: 12000,  Predicted: 66000, Amount: 700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Elderberries', Actual: 64000,  Predicted: 54000, Amount: 7700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Figs', Actual: 22000,  Predicted: 45000, Amount: 1200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Grapes', Actual: 47000,  Predicted: 48000, Amount: 2200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Honeydew', Actual: 25000,  Predicted: 47000, Amount: 3700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Indian Fig', Actual: 14000,  Predicted: 57000, Amount: 12700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Jackfruit', Actual: 24000,  Predicted: 35000, Amount: 18200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' }
  ],
  2018: [
    { name: 'Apples', Actual: 6000,  Predicted: 15000, Amount: 1800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Bananas', Actual: 9000,  Predicted: 35000, Amount: 3300000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Cherries', Actual: 10500,  Predicted: 56000, Amount: 2800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Dates', Actual: 13000,  Predicted: 67000, Amount: 800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Elderberries', Actual: 66000,  Predicted: 55000, Amount: 7800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Figs', Actual: 23000,  Predicted: 46000, Amount: 130000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Grapes', Actual: 48000,  Predicted: 49000, Amount: 2300000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Honeydew', Actual: 26000,  Predicted: 48000, Amount: 3800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Indian Fig', Actual: 15000,  Predicted: 58000, Amount: 12800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Jackfruit', Actual: 25000,  Predicted: 36000, Amount: 18300000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' }
  ],
  2019: [
    { name: 'Apples', Actual: 7000,  Predicted: 16000, Amount: 1900000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Bananas', Actual: 10000,  Predicted: 36000, Amount: 3400000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Cherries', Actual: 11000,  Predicted: 57000, Amount: 2900000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Dates', Actual: 14000,  Predicted: 68000, Amount: 900000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Elderberries', Actual: 68000,  Predicted: 56000, Amount: 7900000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Figs', Actual: 24000,  Predicted: 47000, Amount: 1400000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Grapes', Actual: 49000,  Predicted: 50000, Amount: 2400000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Honeydew', Actual: 27000,  Predicted: 49000, Amount: 3900000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Indian Fig', Actual: 16000,  Predicted: 59000, Amount: 12900000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Jackfruit', Actual: 26000,  Predicted: 37000, Amount: 18400000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' }
  ],
  2020: [
    { name: 'Apples', Actual: 8000,  Predicted: 17000, Amount: 2000000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Bananas', Actual: 11000,  Predicted: 37000, Amount: 3500000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Cherries', Actual: 11500,  Predicted: 58000, Amount: 3000000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Dates', Actual: 15000,  Predicted: 69000, Amount: 1000000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Elderberries', Actual: 70000,  Predicted: 57000, Amount: 8000000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Figs', Actual: 25000,  Predicted: 48000, Amount: 1500000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Grapes', Actual: 50000,  Predicted: 51000, Amount: 2500000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Honeydew', Actual: 28000,  Predicted: 50000, Amount: 4000000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Indian Fig', Actual: 17000,  Predicted: 60000, Amount: 13000000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Jackfruit', Actual: 27000,  Predicted: 38000, Amount: 18500000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' }
  ],*/
  2021: [
    { name: 'Copra', Actual: 9.28802e8,  Predicted: 2102904338.19, mae: 9.784183134918572e7, rmse: 9.95064409251799e7, mape: 136.34788988818104, imageUrl: 'assets/Images/2022/plot_3.svg'},
    { name: 'Cavendish', Actual: 8.77846e8,  Predicted: 1887145414.64, mae: 8.410830672019704e7, rmse: 8.613446559760495e7, mape: 117.67482811794903, imageUrl: 'assets/Images/2022/plot_4.svg' },
    { name: 'Desiccated CCN', Actual: 4.00108e8,  Predicted: 581884520.15, mae: 1.514801017913282e7, rmse: 1.5344316344313443e7, mape: 48.02657191043202, imageUrl: 'assets/Images/2022/plot_5.svg' },
    { name: 'Fish', Actual:  3.26446e8,  Predicted: 172717345.42, mae: 1.2810681631496014e7, rmse: 1.3877210521401094e7, mape: 45.08230318422424, imageUrl: 'assets/Images/2022/plot_6.svg' },
    { name: 'Pineapples', Actual: 2.92236e8,  Predicted: 343486154.31, mae: 5.110989409929796e6, rmse: 5.912872292863579e6, mape: 23.325360264918434, imageUrl: 'assets/Images/2022/plot_7.svg' },
    { name: 'Other', Actual: 2.78419e8,  Predicted: 763889.11, mae: 2.3137935990641456e7, rmse: 2.8486564151615642e7, mape: 98.69209558479054, imageUrl: 'assets/Images/2022/plot_8.svg' },
    { name: 'Cigarettes', Actual: 2.58174e8,  Predicted: 211218682.83, mae: 4.876853781793996e6, rmse: 5.4057394091623565e6, mape: 22.309194374148912, imageUrl: 'assets/Images/2022/plot_9.svg' },
    { name: 'Mucilages', Actual: 2.05404e8,  Predicted: 436104082.65, mae: 1.922504588761154e7, rmse: 1.9937908236534305e7, mape: 115.9544207738297, imageUrl: 'assets/Images/2022/plot_10.svg' },
    { name: 'R. Coconut', Actual: 1.98194e8,  Predicted: 366409156.61, mae: 1.4017939050755816e7, rmse: 1.4659203570580088e7, mape: 102.13157297667921, imageUrl: 'assets/Images/2022/plot_11.svg' },
    { name: 'Cont. Pineapples', Actual: 1.92151e8,  Predicted: 162612645.30, mae: 1.445788737113966e7, rmse: 1.6320239244185014e7, mape: 180.64968525151713, imageUrl: 'assets/Images/2022/plot_12.svg' }
  ],
  2022: [
    { name: 'Copra', Actual: 1.36838e9,  Predicted: 412219045.00, mae: 7.967985033315127e7, rmse: 8.777977111627242e7, mape: 67.98548236144569, imageUrl: 'assets/Images/2023/plot_1.svg'},
    { name: 'Banana', Actual: 1.0848e9,  Predicted: 979282088.20, mae: 9.125348027670648e6, rmse: 1.1044409668164177e7, mape: 9.641937292944462, imageUrl: 'assets/Images/2023/plot_2.svg' },
    { name: 'Desiccated CCN', Actual: 3.69361e8,  Predicted: 207816850.04, mae: 1.3462038746571077e7, rmse: 1.4508419587735487e7, mape: 42.52038255438056, imageUrl: 'assets/Images/2023/plot_3.svg' },
    { name: 'RBD Coconut', Actual:  3.39898e8,  Predicted: 50344496.97, mae: 2.412948758609575e7, rmse: 2.8480728968241166e7, mape: 76.41806367923745, imageUrl: 'assets/Images/2023/plot_4.svg' },
    { name: 'Pineapple', Actual: 3.29633e8,  Predicted: 354497377.87, mae: 2.165697901687249e6, rmse: 2.482443743558296e6, mape: 8.160102454326509, imageUrl: 'assets/Images/2023/plot_5.svg' },
    { name: 'Mucilages', Actual: 2.54196e8,  Predicted: 222908160.60, mae: 2.650140496138046e6, rmse: 4.010707558432186e6, mape: 11.130859000109337, imageUrl: 'assets/Images/2023/plot_6.svg' },
    { name: 'Cont. Pineapple', Actual: 2.50504e8,  Predicted: 74489877.56, mae: 1.4667847370353388e7, rmse: 1.5556287323773436e7, mape: 68.83941727688497, imageUrl: 'assets/Images/2023/plot_7.svg' },
    { name: 'Fish', Actual:  2.48479e8,  Predicted: 254047153.42, mae: 3.224284856339304e6, rmse: 3.8632725734096174e6, mape: 16.45122069891549, imageUrl: 'assets/Images/2023/plot_8.svg' },
    { name: 'Cigarrettes', Actual:  2.31579e8,  Predicted: 301832778.92, mae: 5.880179109681609e6, rmse: 6.910702004762504e6, mape: 35.201939844751664, imageUrl: 'assets/Images/2023/plot_9.svg' },
    { name: 'R. Coconut', Actual: 2.23903e8,  Predicted: 78030577.09, mae: 1.4070798551510468e7, rmse: 1.941624783459522e7, mape: 70.70767201609071, imageUrl: 'assets/Images/2023/plot_10.svg' }
  ]
  /*2023: [
    { name: 'Apples', Actual: 11000,  Predicted: 20000, Amount: 2300000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Bananas', Actual: 14000,  Predicted: 40000, Amount: 3800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Cherries', Actual: 13000,  Predicted: 61000, Amount: 3300000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Dates', Actual: 18000,  Predicted: 72000, Amount: 1300000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Elderberries', Actual: 76000,  Predicted: 60000, Amount: 8300000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Figs', Actual: 28000,  Predicted: 51000, Amount: 1800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Grapes', Actual: 53000,  Predicted: 54000, Amount: 2800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Honeydew', Actual: 31000,  Predicted: 53000, Amount: 4300000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Indian Fig', Actual: 20000,  Predicted: 63000, Amount: 13300000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Jackfruit', Actual: 30000,  Predicted: 41000, Amount: 18800000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' }
  ]*/
};

const BarChartComponent: React.FC = () => {
  const { selectedYear, setSelectedYear } = useYear();
  const data = yearlyData[selectedYear];
  const [showPopup, setShowPopup] = useState(false);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="main-graph-container">
      <div className="main-graph-content">
        <div className="main-graph-dropdowns">
          <div className="main-graph-left">
            <div className="year">Year:</div>
            <select className="year-dropdown" value={selectedYear} onChange={handleYearChange}>
              <option value={2015}>2015</option>
              {/*<option value={2016}>2016</option>
              <option value={2017}>2017</option>
              <option value={2018}>2018</option>
              <option value={2019}>2019</option>
              <option value={2020}>2020</option>*/}
              <option value={2021}>2021</option>
              <option value={2022}>2022</option>
              {/*<option value={2023}>2023</option>*/}
            </select>
          </div>

          <div className="main-prediction">Predicting: {selectedYear + 1}</div>

          <div className="main-graph-right">
            <div className="curr">Currency:</div>
            <select className="curr-dropdown" defaultValue="USD">
              <option value="USD">USD</option>
              <option value="PHP">PHP</option>
              <option value="EUR">EURO</option>
            </select>
          </div>

        {selectedYear === 2022 && (
            <button className="overall-data-button" onClick={handleButtonClick}>Overall Data</button>
          )}
        </div>

        <div className="graph_container">
          <ResponsiveContainer width="100%" height={600}>
            <BarChart
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="Actual" fill="#7EEDC5" activeBar={<Rectangle fill="#53b8ae" stroke="blue" />} />
              <Bar dataKey="Predicted" fill="#4D72B8" activeBar={<Rectangle fill="#3a4491" stroke="blue" />} />      
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-window" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>Close</button>
            <div className='popup-desc'>
                <p>┌ Info: Found initial step size<br />
                └ ϵ = 9.313225746154786e-11<br />
                MAPE: 12.29%<br />
                MSE: 7108662956097680.00<br />
                RMSE: 84312887.25</p>
            </div>
            <div className="popup-image">
              <img src="assets/Images/2022/plot_1.svg" alt="Overall Data" />
            </div>
          </div>
        </div>
      )}
      </div>

  );
};

export default BarChartComponent;