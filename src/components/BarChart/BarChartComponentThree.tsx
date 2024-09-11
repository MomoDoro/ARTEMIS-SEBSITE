import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts';
import "./BarChartComponent.css";

const BarChartComponentFour: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [dataType, setDataType] = useState<string>('Exports');
  const [selectedYear, setSelectedYear] = useState<number>(2024); 

  const mapData = (data: any[], key: string) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return data.map(item => ({
      name: months[item.Month - 1],
      [key]: item.FREE_ON_BOARD || item.Predictions,
    }));
  };

  const fetch2024Data = async () => {
    const url = dataType === 'Exports' 
      ? '/src/JSON/exports_fob_predictions_2024.json' 
      : '/src/JSON/imports_fob_predictions_2024.json';
    try {
      const response = await axios.get(url);
      const mappedData = mapData(response.data, 'Predictions');
      setChartData(mappedData);
    } catch (error) {
      console.error("Error fetching 2024 data:", error);
    }
  };

  const fetch2023Data = async () => {
    try {
      const predictionsUrl = dataType === 'Exports' 
        ? '/src/Predictions/exports 2023/exports_fob_predictions_2024.json' 
        : '/src/Predictions/imports 2023/imports_fob_predictions_2024.json';

      const actualsUrl = dataType === 'Exports' 
        ? '/src/JSON Spec/exports_fob_2023.json' 
        : '/src/JSON Spec/imports_fob_2023.json';

      const [predictionsResponse, actualsResponse] = await Promise.all([
        axios.get(predictionsUrl),
        axios.get(actualsUrl)
      ]);

      const predictionsData = mapData(predictionsResponse.data, 'Predictions');
      const actualsData = mapData(actualsResponse.data, 'Actuals');

      const combinedData = predictionsData.map((predictionItem, index) => ({
        ...predictionItem,
        Actuals: actualsData[index]?.Actuals || 0,
      }));

      setChartData(combinedData);
    } catch (error) {
      console.error("Error fetching 2023 data:", error);
    }
  };

  useEffect(() => {
    if (selectedYear === 2024) {
      fetch2024Data();
    } else if (selectedYear === 2023) {
      fetch2023Data();
    }
  }, [selectedYear, dataType]);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  const handleExportButtonClick = () => {
    setDataType('Exports');
  };

  const handleImportButtonClick = () => {
    setDataType('Imports');
  };

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

  return (
    <div className="main-graph-containerd">
      <div className="main-graph-content">
        <div className="main-graph-dropdowns">
            <div className="main-graph-left">
              <div className="year">Year:</div>
              <select className="year-dropdown" value={selectedYear} onChange={handleYearChange}>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
              </select>
            </div>
        
          <div className="main-buttons-container">
            <button 
            className={`export-button ${dataType === 'Exports' ? 'highlight' : ''}`} 
            onClick={handleExportButtonClick}
            >
              Exports
            </button>
            <button 
            className={`import-button ${dataType === 'Imports' ? 'highlight' : ''}`} 
            onClick={handleImportButtonClick}
            >
              Imports
            </button>
          </div>
        </div>

        <div className="graph_container">
          <div className='main-graph-name'>
            {selectedYear} Forecast
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
              <YAxis tickFormatter={abbreviateNumber}/>
              <Tooltip  />
              {selectedYear === 2023 && (
                <Area type="monotone" dataKey="Actuals" fill="rgba(145,203,230, 0.35)" stroke="rgba(34, 97, 87, 1)" activeDot={{ r: 5 }}/>
              )}
              <Area dataKey="Predictions"  fill="#91cbe6" stroke="#4D72B8" activeDot={{ r: 8 }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponentFour;
