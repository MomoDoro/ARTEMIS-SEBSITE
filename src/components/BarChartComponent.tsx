// src/BarChartComponent.tsx
import React from 'react';
import {  
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
} from 'recharts';
import "./BarChartComponent.css"
import { useYear } from './YearContext';
import CustomTooltip from './CustomTooltip';

type YearlyData = {
  [year: number]: { name: string; Actual: number; Predicted: number; Amount: number; mae: number; rmse: number; mape: number; description: string; imageUrl: string; }[];
};

const yearlyData: YearlyData = {
  2015: [
    { name: 'Banana', Actual: 657870072,  Predicted: 195477911.93, Amount: 1500000, mae: 38532680.00624238, rmse: 44877708.621181525, mape: 63.761608567670514, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Banana.jfif'},
    { name: 'Crude Oil', Actual: 410457282,  Predicted: 295079178.82, Amount: 3000000, mae: 21804326.532248285, rmse: 23323423.403623346, mape: 100.7853504454341, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Crude Oil.jfif' },
    { name: 'Refined Oil', Actual: 381964099,  Predicted: 148588473.58, Amount: 2500000, mae: 19447968.78485198, rmse: 21530539.825569574, mape: 58.09129153285612, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Refined Oil.jfif' },
    { name: 'Pineapple', Actual:  344826935,  Predicted: 552272937.85, Amount: 500000, mae: 17287166.904156536, rmse: 18575794.52096802, mape: 73.89131550485911, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Pineapples.jfif' },
    { name: 'V. Coconut Oil', Actual: 279912645,  Predicted: 30139997.21, Amount: 7500000, mae: 20814387.315883007, rmse: 25260095.927213214, mape: 91.4204354705258, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Virgin Coconut.jfif' },
    { name: 'Tunas', Actual: 224081771,  Predicted: 137977031.93, Amount: 1000000, mae: 7210521.417747314, rmse: 8408008.206663975, mape: 35.62589774543824, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Tuna Container.jfif' },
    { name: 'Desiccated', Actual: 16005129,  Predicted: 74402636.80, Amount: 2000000, mae: 7137388.266755617, rmse: 7885657.422492863, mape: 51.28671945960198, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Desiccated Coconut.jfif' },
    { name: 'Carageenan', Actual: 137760353,  Predicted: 125207484.75, Amount: 3500000, mae: 3256293.8222584524, rmse: 3927958.5049439925, mape: 44.93870721009798, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Carageenan.jfif' },
    { name: 'Other', Actual: 127448067,  Predicted: 49615502.47, Amount: 12500000, mae: 6486047.044518679, rmse: 6981771.999050326, mape: 60.406188115686575, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Other.jfif' },
    { name: 'Fresh Pineapple', Actual: 126170584,  Predicted: 127101298.81, Amount: 18000000, mae: 2829770.069471584, rmse: 3541602.559970594, mape: 31.23640339536331, description: 'Description for Apples in 2015', imageUrl: 'assets/Images/2015 Fresh Pineapples.jfif' }
  ]
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
  ],
  2021: [
    { name: 'Apples', Actual: 9000,  Predicted: 18000, Amount: 2100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Bananas', Actual: 12000,  Predicted: 38000, Amount: 3600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Cherries', Actual: 12000,  Predicted: 59000, Amount: 3100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Dates', Actual: 16000,  Predicted: 70000, Amount: 1100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Elderberries', Actual: 72000,  Predicted: 58000, Amount: 8100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Figs', Actual: 26000,  Predicted: 49000, Amount: 1600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Grapes', Actual: 51000,  Predicted: 52000, Amount: 2600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Honeydew', Actual: 29000,  Predicted: 51000, Amount: 4100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Indian Fig', Actual: 18000,  Predicted: 61000, Amount: 13100000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Jackfruit', Actual: 28000,  Predicted: 39000, Amount: 18600000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' }
  ],
  2022: [
    { name: 'Apples', Actual: 10000,  Predicted: 19000, Amount: 2200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Bananas', Actual: 13000,  Predicted: 39000, Amount: 3700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Cherries', Actual: 12500,  Predicted: 60000, Amount: 3200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Dates', Actual: 17000,  Predicted: 71000, Amount: 1200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Elderberries', Actual: 74000,  Predicted: 59000, Amount: 8200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Figs', Actual: 27000,  Predicted: 50000, Amount: 1700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Grapes', Actual: 52000,  Predicted: 53000, Amount: 2700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Honeydew', Actual: 30000,  Predicted: 52000, Amount: 4200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Indian Fig', Actual: 19000,  Predicted: 62000, Amount: 13200000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' },
    { name: 'Jackfruit', Actual: 29000,  Predicted: 40000, Amount: 18700000, description: 'Description for Apples in 2015', imageUrl: 'path_to_image' }
  ],
  2023: [
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

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
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
              <option value={2020}>2020</option>
              <option value={2021}>2021</option>
              <option value={2022}>2022</option>
              <option value={2023}>2023</option>*/}
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
              <Bar dataKey="Predicted" fill="#4D72B8" activeBar={<Rectangle fill="#3a4491" stroke="blue" />} />
              <Bar dataKey="Actual" fill="#7EEDC5" activeBar={<Rectangle fill="#53b8ae" stroke="blue" />} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default BarChartComponent;
