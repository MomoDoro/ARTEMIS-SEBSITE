// src/BarChartComponent.tsx
import React from 'react';
import {  
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
} from 'recharts';

const data = [
  { name: 'Apples', Amount: 1500000 },
  { name: 'Bananas', Amount: 3000000 },
  { name: 'Cherries', Amount: 2500000 },
  { name: 'Dates', Amount: 500000 },
  { name: 'Elderberries', Amount: 7500000 },
  { name: 'Figs', Amount: 1000000 },
  { name: 'Grapes', Amount: 2000000 },
  { name: 'Honeydew', Amount: 3500000 },
  { name: 'Indian Fig', Amount: 12500000 },
  { name: 'Jackfruit', Amount: 18000000 }
];

const BarChartComponent: React.FC = () => (
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
      <Tooltip />
      <Legend />
      <Bar dataKey="Amount" fill="#4D72B8" activeBar={<Rectangle fill="#7EEDC5" stroke="blue" />} />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
