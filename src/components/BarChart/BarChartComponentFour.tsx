// src/BarChartComponentFour.tsx
import React, { useState } from 'react';
import {  
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts';
import "./BarChartComponent.css"

const data = [
    { name: 'Jan', FOB: 554995776.0},
    { name: 'Feb', FOB: 561616256.0},
    { name: 'Mar', FOB: 578406016.0},
    { name: 'Apr', FOB: 561731136.0},
    { name: 'May', FOB: 576838976.0},
    { name: 'June', FOB: 577391104.0},
    { name: 'July', FOB: 581194496.0},
    { name: 'Aug', FOB: 547682688.0},
    { name: 'Sep', FOB: 575466432.0},
    { name: 'Oct', FOB: 554355072.0},
    { name: 'Nov', FOB: 567071232.0},
    { name: 'Dec', FOB: 570720128.0},
  ]

const data2 = [
    { name: 'Jan', FOB: 4327805952.0},
    { name: 'Feb', FOB: 4266018816.0},
    { name: 'Mar', FOB: 4152986880.0},
    { name: 'Apr', FOB: 4238802688.0},
    { name: 'May', FOB: 4320183808.0},
    { name: 'June', FOB: 4399496192.0},
    { name: 'July', FOB: 4357776384.0},
    { name: 'Aug', FOB: 4278739200.0},
    { name: 'Sep', FOB: 4237145088.0},
    { name: 'Oct', FOB: 4328439808.0},
    { name: 'Nov', FOB: 4167225600.0},
    { name: 'Dec', FOB: 4185681920.0},
  ]

const BarChartComponentFour: React.FC = () => {
  const [chartData, setChartData] = useState(data);
  const [dataType, setDataType] = useState<string>('Exports');

  const handleExportButtonClick = () => {
    setChartData(data);
    setDataType('Exports');
  };

  const handleImportButtonClick = () => {
    setChartData(data2);
    setDataType('Imports');
  };

  return (
    <div className="main-graph-container">
      <div className="main-graph-content">

          <div className="main-graph-dropdowns">
            <div className="main-buttons-container">
              <button className="export-button" onClick={handleExportButtonClick}>Exports</button>
              <button className="import-button" onClick={handleImportButtonClick}>Imports</button>
            </div>

            <div className="data-type">{dataType}:</div> 

          </div>

        <div className="graph_container">
          <div className='main-graph-name'>
            2024 Prediction
          </div>
          <ResponsiveContainer width="100%" height={600}>
            <AreaChart
              data={chartData}
              margin={{
                top: 5, right: 30, left: 30, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />  
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="FOB" fill="#39bdcc" stroke="#4D72B8"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponentFour;