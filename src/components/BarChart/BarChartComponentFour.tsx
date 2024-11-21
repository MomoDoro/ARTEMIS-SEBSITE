import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
} from 'recharts';
import "./BarChartComponent.css"

interface ChartData {
    name: string;
    FOB: number;
}

const abbreviateNumber = (num: number) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const BarChartComponentTwo: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [dataType, setDataType] = useState<string>('Exports');

  const fetchChartData = async (url: string) => {
    try {
      const response = await axios.get(url);
      const rawData = response.data;
      
      const formattedData: ChartData[] = Object.keys(rawData).map((year) => ({
        name: year,
        FOB: rawData[year]["FREE_ON_BOARD"],
      }));
      
      setChartData(formattedData);
    } catch (error) {
      console.error("Error fetching the chart data", error);
    }
  };

  useEffect(() => {
    fetchChartData('/assets/JSON/exports_fob_sum_2015-2023.json');
  }, []);

  const handleExportButtonClick = () => {
    setDataType('Exports');
    fetchChartData('/assets/JSON/exports_fob_sum_2015-2023.json');
  };

  const handleImportButtonClick = () => {
    setDataType('Imports');
    fetchChartData('/assets/JSON/imports_fob_sum_2015-2023.json');
  };

  return (
    <div className="main-graph-container">
      <div className="main-graph-content">

        <div className="graph_container">
          <div className='main-graph-name'>
            Yearly Sum of FOB (Free On Board)
          </div>

          <div className="main-graph-dropdowns">

            <div className="main-buttons-container">
              <button 
                className={`export-button ${dataType === 'Exports' ? 'highlight' : ''}`} 
                onClick={handleExportButtonClick}
                >
                Agricultural Exports
              </button>
              <button 
                className={`import-button ${dataType === 'Imports' ? 'highlight' : ''}`} 
                onClick={handleImportButtonClick}
                >
                Agricultural Imports
              </button>
            </div>

          </div>

          <div className="chart-wrapper">
          <ResponsiveContainer >
            <BarChart
              data={chartData}
              margin={{
                top: 5, right: 30, left: 37, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />  
              <YAxis tickFormatter={abbreviateNumber}/>
              <Tooltip />
              <Legend />
              <Bar dataKey="FOB" fill="#70aae0" activeBar={<Rectangle fill="#3a4491" stroke="blue" />} />      
            </BarChart>
          </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponentTwo;
