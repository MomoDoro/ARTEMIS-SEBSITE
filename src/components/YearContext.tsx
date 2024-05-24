// src/YearContext.tsx

import React, { createContext, useState, useContext } from 'react';

interface YearContextType {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  percentages: Percentages;
}

interface Percentages {
  accuracy: string;
  error: string;
  rmse: string;
  mape: string;
}

const initialPercentages: Percentages = {
  accuracy: '00.00%',
  error: '00.00%',
  rmse: '13.00%',
  mape: '10.00%',
};

const yearlyPercentages: Record<number, Percentages> = {
  2015: { accuracy: '00.00%', error: '00.00%', rmse: '13.00%', mape: '10.00%' },
  2016: { accuracy: '88.00%', error: '12.00%', rmse: '11.00%', mape: '9.00%' },
  2017: { accuracy: '90.00%', error: '10.00%', rmse: '8.00%', mape: '5.00%' },
  2018: { accuracy: '86.00%', error: '14.00%', rmse: '12.00%', mape: '7.00%' },
  2019: { accuracy: '87.00%', error: '13.00%', rmse: '10.00%', mape: '6.00%' },
  2020: { accuracy: '89.00%', error: '11.00%', rmse: '9.00%', mape: '8.00%' },
  2021: { accuracy: '00.00%', error: '00.00%', rmse: '7.00%', mape: '4.00%' },
  2022: { accuracy: '00.00%', error: '12.29%', rmse: '6.00%', mape: '3.00%' },
  2023: { accuracy: '00.00%', error: '00.00%', rmse: '5.00%', mape: '2.00%' },
};

const YearContext = createContext<YearContextType>({
  selectedYear: 2015,
  setSelectedYear: () => {},
  percentages: initialPercentages,
});

export const YearProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState<number>(2015);
  const [percentages, setPercentages] = useState<Percentages>(initialPercentages);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setPercentages(yearlyPercentages[year]);
  };

  return (
    <YearContext.Provider value={{ selectedYear, setSelectedYear: handleYearChange, percentages }}>
      {children}
    </YearContext.Provider>
  );
};

export const useYear = () => useContext(YearContext);
