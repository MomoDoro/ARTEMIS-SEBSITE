// src/BarChartComponentTwo.tsx
import React, { useState } from 'react';
import {  
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
} from 'recharts';
import "./BarChartComponent.css"

const data = [
    { name: '2015', FOB: 5001788052},
    { name: '2016', FOB: 5155624360},
    { name: '2017', FOB: 6579504622},
    { name: '2018', FOB: 6117844649},
    { name: '2019', FOB: 6677054530},
    { name: '2020', FOB: 6199964510},
    { name: '2021', FOB: 6820908914},
    { name: '2022', FOB: 7498704917},
    { name: '2023', FOB: 6409409283},
];

const data2 = [
    { name: '2015', FOB: 9579847605.9699993134},
    { name: '2016', FOB: 10230393186.9699993134},
    { name: '2017', FOB: 10989116518.2600002289},
    { name: '2018', FOB: 13139902091.0},
    { name: '2019', FOB: 13531785048.0},
    { name: '2020', FOB: 12576143764.0},
    { name: '2021', FOB: 15362919392.0},
    { name: '2022', FOB: 18927451994.0},
    { name: '2023', FOB: 127707398154.0},
];

const BarChartComponentTwo: React.FC = () => {
  const [chartData, setChartData] = useState(data);
  const [dataType, setDataType] = useState<string>('Exports');

  const handleExportButtonClick = () => {
    setDataType('Exports');
    setChartData(data);
  };

  const handleImportButtonClick = () => {
    setDataType('Imports');
    setChartData(data2);
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
            Yearly Sum of FOB (Free On Board)
          </div>
          <ResponsiveContainer width="100%" height={600}>
            <BarChart
              data={chartData}
              margin={{
                top: 5, right: 30, left: 30, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />  
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="FOB" fill="#5189c9" activeBar={<Rectangle fill="#3a4491" stroke="blue" />} />      
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponentTwo;
