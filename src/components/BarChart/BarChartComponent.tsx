import React, { useState, useEffect } from 'react';
import {  
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts';
import axios from 'axios';
import "./BarChartComponent.css";

type MonthlyData = {
  name: string;
  FOB: number;
};

type YearlyData = {
  [year: number]: MonthlyData[];
};

const BarChartComponentThree: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2015);
  const [exportData, setExportData] = useState<YearlyData>({});
  const [importData, setImportData] = useState<YearlyData>({});
  const [data, setData] = useState<YearlyData>({});
  const [dataType, setDataType] = useState<string>('Exports');

  useEffect(() => {
    
    // Fetch exports data
    axios.get('/assets/JSON/exports_fob_monthly_sum_2015-2023.json')
      .then(response => {
        const formattedData: YearlyData = {};
        response.data.forEach((item: any) => {
          const { Year, Month, FREE_ON_BOARD } = item;
          if (!formattedData[Year]) {
            formattedData[Year] = [];
          }
          formattedData[Year].push({ name: new Date(Year, Month - 1).toLocaleString('default', { month: 'short' }), FOB: FREE_ON_BOARD });
        });
        setExportData(formattedData);
        if (dataType === 'Exports') {
          setData(formattedData);
        }
      })
      .catch(error => console.error('Error fetching export data:', error));

    // Fetch imports data
    axios.get('/assets/JSON/imports_fob_monthly_sum_2015-2023.json')
      .then(response => {
        const formattedData: YearlyData = {};
        response.data.forEach((item: any) => {
          const { Year, Month, FREE_ON_BOARD } = item;
          if (!formattedData[Year]) {
            formattedData[Year] = [];
          }
          formattedData[Year].push({ name: new Date(Year, Month - 1).toLocaleString('default', { month: 'short' }), FOB: FREE_ON_BOARD });
        });
        setImportData(formattedData);
        if (dataType === 'Imports') {
          setData(formattedData);
        }
      })
      .catch(error => console.error('Error fetching import data:', error));
  }, [dataType]);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  const handleExportButtonClick = () => {
    setData(exportData);
    setDataType('Exports');
  };

  const handleImportButtonClick = () => {
    setData(importData);
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
    <div className="main-graph-container">
      <div className="main-graph-content">
        <div className="main-graph-dropdowns">
          <div className="main-graph-left">
            <div className="year">Year:</div>
            <select className="year-dropdown" value={selectedYear} onChange={handleYearChange}>
              <option value={1997}>1997</option>
              <option value={1998}>1998</option>
              <option value={1999}>1999</option>
              <option value={2000}>2000</option>
              <option value={2001}>2001</option>
              <option value={2002}>2002</option>
              <option value={2003}>2003</option>
              <option value={2004}>2004</option>
              <option value={2005}>2005</option>
              <option value={2006}>2006</option>
              <option value={2007}>2007</option>
              <option value={2008}>2008</option>
              <option value={2009}>2009</option>
              <option value={2010}>2010</option>
              <option value={2011}>2011</option>
              <option value={2012}>2012</option>
              <option value={2013}>2013</option>
              <option value={2014}>2014</option>
              <option value={2015}>2015</option>
              <option value={2016}>2016</option>
              <option value={2017}>2017</option>
              <option value={2018}>2018</option>
              <option value={2019}>2019</option>
              <option value={2020}>2020</option>
              <option value={2021}>2021</option>
              <option value={2022}>2022</option>
              <option value={2023}>2023</option>
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
            Monthly Sum of FOB (Free On Board)
          </div>
          <ResponsiveContainer width="100%" height={600}>
            <AreaChart
              data={data[selectedYear]}
              margin={{
                top: 10, right: 30, left: 20, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={abbreviateNumber}/>
              <Tooltip />
              <Area /*type="monotone"*/ dataKey="FOB" fill="#91cbe6" stroke="#4D72B8"/>      
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};


export default BarChartComponentThree;
