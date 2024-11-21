// src/BarChartComponent.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import "./BarChartComponent.css"
import CustomTooltip from './CustomTooltip';

// Define types for the data
interface CommodityData {
  name: string;
  FOB: number;
}

interface YearlyData {
  [year: string]: CommodityData[];
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

const BarChartComponent: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2015);
  const [data, setData] = useState<{ Exports: YearlyData; Imports: YearlyData }>({ Exports: {}, Imports: {} });
  const [dataType, setDataType] = useState<'Exports' | 'Imports'>('Exports');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exportsResponse = await axios.get('/assets/JSON/exports_top10_commodities_per_year.json');
        const importsResponse = await axios.get('/assets/JSON/imports_top10_commodities_per_year.json');
        
        const formatData = (data: any): YearlyData => {
          const formattedData: YearlyData = {};
          Object.keys(data).forEach(year => {
            formattedData[year] = data[year].map((item: any) => ({
              name: item['COMMODITY_DESCRIPTION'],  // Removed truncation
              FOB: item['FREE_ON_BOARD'],
            }));
          });
          return formattedData;
        };

        setData({
          Exports: formatData(exportsResponse.data),
          Imports: formatData(importsResponse.data),
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className="main-graph-container">
      <div className="main-graph-content">

        <div className="graph_container">
          <div className='main-graph-name'>
            Top 10 Commodities Per Year
          </div>

          <div className="main-graph-dropdowns">
            <div className="main-graph-left">
              <div className="year">Year:</div>
              <select className="year-dropdown" value={selectedYear} onChange={handleYearChange}>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
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
          <ResponsiveContainer>
            <BarChart
              data={data[dataType]?.[selectedYear] || []}
              margin={{
                top: 5, right: 30, left: 30, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                tick={false}  // Hide the default ticks
                label={{ value: 'C O M M O D I T I E S', position: 'insideBottomCenter'}}  // Centered label
              />
              <YAxis tickFormatter={abbreviateNumber} />
              <Tooltip content={<CustomTooltip />} />
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

export default BarChartComponent;
