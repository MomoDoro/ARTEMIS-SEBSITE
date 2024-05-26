// src/BarChartComponent.tsx
import React, { useState } from 'react';
import {  
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
} from 'recharts';
import "./BarChartComponent.css"
import { useYear } from '../Main Content/YearContext';
import CustomTooltip from './CustomTooltip';

type YearlyData = {
  [year: number]: { name: string; FOB: number;}[];
};

const yearlyData: YearlyData = {
  2015: [
    { name: 'Banana', FOB: 657870072},
    { name: 'Crude Oil', FOB: 410457282},
    { name: 'Refined Oil', FOB: 381964099},
    { name: 'Pineapple', FOB:  344826935},
    { name: 'V. Coconut Oil', FOB: 279912645},
    { name: 'Tunas', FOB: 224081771},
    { name: 'Desiccated', FOB: 16005129},
    { name: 'Carageenan', FOB: 137760353},
    { name: 'Other', FOB: 127448067},
    { name: 'Fresh Pineapple', FOB: 126170584}
  ],
  2016: [
    { name: 'Banana', FOB: 730363504.0},
    { name: 'Crude Oil', FOB: 668322333.0},
    { name: 'Pineapple', FOB: 369102397.0},
    { name: 'Refined Oil', FOB: 309551383.0},
    { name: 'Fresh Pineapple', FOB: 237632810.0},
    { name: 'Desiccated', FOB: 210039130.0},
    { name: 'Carageenan', FOB: 185676973.0},
    { name: 'Tunas', FOB: 155988207.0},
    { name: 'Other', FOB: 114677802.0},
    { name: 'Other', FOB: 102012771.0}
  ],
  2017: [
    { name: 'Banana', FOB: 1128578780.0},
    { name: 'Crude Oil', FOB: 977174573.0},
    { name: 'Refined Oil', FOB: 439259434.0},
    { name: 'Tunas', FOB: 363666214.0},
    { name: 'Desiccated', FOB: 340825184.0},
    { name: 'Pineapples', FOB: 274474656.0},
    { name: 'Sugar Cane', FOB: 203551435.0},
    { name: 'Fresh Pineapple', FOB: 199212825.0},
    { name: 'Other', FOB: 156151561.0},
    { name: 'Yllwfin Tunas', FOB: 136761705.0}
  ],
  2018: [
    { name: 'Cvnd. Banana', FOB: 1249479741.0},
    { name: 'Crude Oil', FOB: 608768639.0},
    { name: 'Other', FOB: 438083626.0},
    { name: 'Desiccated', FOB: 338414845.0},
    { name: 'Tunas', FOB: 324228815.0},
    { name: 'Refined Oil', FOB: 304476532.0},
    { name: 'Other', FOB: 270388191.0},
    { name: 'Pineapple', FOB: 193103995.0},
    { name: 'Fresh Pineapple', FOB: 183112231.0},
    { name: 'Other', FOB: 166628133.0}
  ],
  2019: [
    { name: 'Cvnd. Banana', FOB: 1849781412.0},
    { name: 'Crude Oil', FOB: 582029922.0},
    { name: 'Other', FOB: 379956626.0},
    { name: 'Tunas', FOB: 355985283.0},
    { name: 'Fresh Pineapple', FOB: 344583999.0},
    { name: 'Other', FOB: 300830088.0},
    { name: 'Desiccated', FOB: 256752525.0},
    { name: 'Semi-Refined', FOB: 203854039.0},
    { name: 'Other', FOB: 196481155.0},
    { name: 'Refined Oil', FOB: 195187523.0}
  ],
  2020: [
    { name: 'Cvnd. Banana', FOB: 1577524302.0},
    { name: 'Copra', FOB: 547931711.0},
    { name: 'Fish', FOB: 343717655.0},
    { name: 'Pineapple', FOB: 311281423.0},
    { name: 'Cigarettes', FOB: 273168408.0},
    { name: 'Coconut', FOB: 260739635.0},
    { name: 'Cont. Pineapple', FOB: 239889729.0},
    { name: 'Mucilages', FOB: 164321303.0},
    { name: 'Copra', FOB: 136534106.0},
    { name: 'Other', FOB: 133670804.0}
  ],
  2021: [
    { name: 'Copra', FOB: 9.28802e8},
    { name: 'Cavendish', FOB: 8.77846e8},
    { name: 'Desiccated CCN', FOB: 4.00108e8},
    { name: 'Fish', FOB:  3.26446e8},
    { name: 'Pineapples', FOB: 2.92236e8},
    { name: 'Other', FOB: 2.78419e8},
    { name: 'Cigarettes', FOB: 2.58174e8},
    { name: 'Mucilages', FOB: 2.05404e8},
    { name: 'R. Coconut', FOB: 1.98194e8},
    { name: 'Cont. Pineapple', FOB: 1.92151e8}
  ],
  2022: [
    { name: 'Copra', FOB: 1.36838e9},
    { name: 'Banana', FOB: 1.0848e9},
    { name: 'Desiccated CCN', FOB: 3.69361e8},
    { name: 'RBD Coconut', FOB:  3.39898e8},
    { name: 'Pineapple', FOB: 3.29633e8},
    { name: 'Mucilages', FOB: 2.54196e8},
    { name: 'Cont. Pineapple', FOB: 2.50504e8},
    { name: 'Fish', FOB:  2.48479e8},
    { name: 'Cigarrettes', FOB:  2.31579e8},
    { name: 'R. Coconut', FOB: 2.23903e8}
  ],
  2023: [
    { name: 'Cavendish', FOB: 1206446454.0},
    { name: 'Copra', FOB: 740193323.0},
    { name: 'Pineapples', FOB: 353872057.0},
    { name: 'Cigarretes', FOB: 301631891.0},
    { name: 'Coconuts', FOB: 247176967.0},
    { name: 'Mucilages', FOB: 243550345.0},
    { name: 'Fish', FOB: 234415441.0},
    { name: 'Cont. Pineapple', FOB: 207253374.0},
    { name: 'Copra', FOB: 135530641.0},
    { name: 'Copra', FOB: 105320631.0}
  ]
};

const yearlyImport: YearlyData = {
  2015: [
    { name: 'Other', FOB: 1023093732.0},
    { name: 'Oil-cake and other solid residues, whether or not ground or in the form of pellets, resulting from the extraction of soya- Bean oil. | Oil-cake and other solid residues, whether or not ground or in the form of pellets, resulting from the extraction of soya bean oil.', FOB: 830455157.0},
    { name: 'Other | Used as feed', FOB: 438841997.0},
    { name: 'Other', FOB:  339214169.0},
    { name: 'Not containing added sugar or other sweetening matter, in powder form | A. In containers of gross weight 20 kgs or more', FOB: 315880760.0},
    { name: 'Of palm kernel olein, refined, bleached and deodorised (RBD)', FOB: 312864871.0},
    { name: 'Boneless', FOB: 299101368.0},
    { name: 'Other | Upon prior certification of the NEDA that rice shortage', FOB: 258900380.0},
    { name: 'Preparations to be used as raw material in preparing composite concentrates', FOB: 201789682.0},
    { name: 'Preparations with a basis of extracts, essences or concentrates or with a basis of coffee | B.  Out-Quota', FOB: 175546919.0}
  ],
  2016: [
    { name: 'Other', FOB: 1056203164.0},
    { name: 'Oil-cake and other solid residues, whether or not ground or in the form of pellets, resulting from the extraction of soya- Bean oil. | Oil-cake and other solid residues, whether or not ground or in the form of pellets, resulting from the extraction of soya bean oil.', FOB: 974406419.0},
    { name: 'Of palm kernel olein, refined, bleached and deodorised (RBD)', FOB: 497131440.0},
    { name: 'Other | Used as feed', FOB: 481374670.0},
    { name: 'Other', FOB: 400395023.0},
    { name: 'Not containing added sugar or other sweetening matter, in powder form | A. In containers of gross weight 20 kgs or more', FOB: 333473749.0},
    { name: 'Boneless', FOB: 309350090.0},
    { name: 'Preparations to be used as raw material in preparing composite concentrates', FOB: 202223028.0},
    { name: 'Other | Upon prior certification of the NEDA that rice shortage', FOB: 190076570.0},
    { name: 'Preparations with a basis of extracts, essences or concentrates or with a basis of coffee | B.  Out-Quota', FOB: 189421004.0}
  ],
  2017: [
    { name: 'Other', FOB: 953188863.0},
    { name: 'Oil-cake and other solid residues, whether or not ground or in the form of pellets, resulting from the extraction of soya- Bean oil. | Oil-cake and other solid residues, whether or not ground or in the form of pellets, resulting from the extraction of soya bean oil.', FOB: 903987377.0},
    { name: 'Of palm kernel olein, refined, bleached and deodorised (RBD)', FOB: 649542726.0},
    { name: 'Other | Used as feed', FOB: 491711062.0},
    { name: 'Other', FOB: 412408619.0},
    { name: 'Boneless', FOB: 353927255.0},
    { name: 'Not containing added sugar or other sweetening matter, in other form | A. In containers of gross weight 20 kgs or more', FOB: 323177049.0},
    { name: 'Preparations with a basis of extracts, essences or concentrates or with a basis of coffee | A.  In-Quota', FOB: 231109765.0},
    { name: 'Preparations to be used as raw material in preparing composite concentrates', FOB: 191606159.0},
    { name: 'Not more than 5% broken', FOB: 183927628.0}
  ],
  2018: [
    { name: 'Other', FOB: 1142442827.0},
    { name: 'Used as feed', FOB: 818568958.0},
    { name: 'Other', FOB: 760403099.0},
    { name: 'Other', FOB: 678810259.0},
    { name: 'Of palm kernel olein, refined, bleached and deodorised (RBD)', FOB: 484396016.0},
    { name: 'B. Out-Quota', FOB: 430295453.0},
    { name: 'Not more than 5% broken', FOB: 417668364.0},
    { name: 'Boneless', FOB: 399701960.0},
    { name: 'In containers of a gross weight of 20 kg or more', FOB: 349799577.0},
    { name: 'Semi-milled or wholly milled rice, whether or not polished or glazed', FOB: 269400397.0}
  ],
  2019: [
    { name: 'Other', FOB: 1072876852.0},
    { name: 'Used as feed', FOB: 873226767.0},
    { name: 'Other', FOB: 778097359.0},
    { name: 'Not more than 5% broken', FOB: 712896739.0},
    { name: 'Other', FOB: 614940341.0},
    { name: 'B. Out-Quota', FOB: 566047819.0},
    { name: 'Of palm kernel olein, refined, bleached and deodorised (RBD)', FOB: 490083183.0},
    { name: 'In containers of a gross weight of 20 kg or more', FOB: 451928654.0},
    { name: 'Boneless', FOB: 376315496.0},
    { name: 'Other', FOB: 264911497.0}
  ],
  2020: [
    { name: 'Other', FOB: 921335629.0},
    { name: 'Other', FOB: 811095451.0},
    { name: 'Used as Feed', FOB: 622824234.0},
    { name: 'Not more than 5% broken', FOB: 612038143.0},
    { name: 'Of palm kernel olein, refined, bleached and deodorised (RBD)', FOB: 596909596.0},
    { name: 'Other', FOB: 547298928.0},
    { name: 'In containers of a gross weight of 20 kg or more', FOB: 516088925.0},
    { name: 'B.  Out-Quota', FOB: 481133509.0},
    { name: 'Boneless', FOB: 345769688.0},
    { name: 'Other', FOB: 252403066.0}
  ],
  2021: [
    { name: 'Other', FOB: 1452405808.0},
    { name: 'Other :  |  - - Other :  |  - - - Fit for human consumption :  |  - - - - Other', FOB: 987454488.0},
    { name: 'Semi-milled or wholly milled rice, whether or not polished or glazed :  |  - - Other :  |  - - - Other :  |  Other, not more than 5% broken', FOB: 777021659.0},
    { name: 'Other :  |  - - Other :  |  - - - Other :  |  - - - - Other  |  Used as feed', FOB:  751994697.0},
    { name: 'Inedible mixtures or preparations of vegetable fats or oils or of fractions of different fats or oils :  |  - - Of the fruit of the oil palm or of palm kernels  |  Of palm kernel olein, refined, bleached and deodorised (RBD)', FOB: 583469220.0},
    { name: 'Boneless', FOB: 479473731.0},
    { name: 'In powder, granules or other solid forms, of a fat content, by weight, not exceeding 1.5% :  |  - - Not containing added sugar or other sweetening matter :  |  - - - In containers of a net weight of 20 kg or more', FOB: 441191949.0},
    { name: 'Extracts, essences and concentrates, of coffee, and preparations with a basis of these extracts, essences or concentrates or with a basis of coffee :  |  - - Preparations with a basis of extracts, essences or concentrates or with a basis of coffee :  |  - - - Other :  |  - - - - Coffee preparation with a basis of ground roasted coffee containing added sugar,whether or not containing creamer :  |  - - - - - B. Out-Quota', FOB: 369336572.0},
    { name: 'Other :  |  - - Fractions of refined oil :  |  - - - Liquid fractions :  |  - - - - Other, with iodine value 55 or more but less than 60  |  RBD', FOB: 303243519.0},
    { name: 'Apples', FOB: 259428170.0}
  ],
  2022: [
    { name: 'Copra', FOB: 1889196150.0},
    { name: 'Other :  |  - - Other :  |  - - - Fit for human consumption :  |  - - - - Other', FOB: 1275785285.0},
    { name: 'Other :  |  - - Other :  |  - - - Other :  |  - - - - Other  |  Used as feed', FOB: 1080775566.0},
    { name: 'Semi-milled or wholly milled rice, whether or not polished or glazed :  |  - - Other :  |  - - - Other :  |  Other, not more than 5% broken', FOB:  792968649.0},
    { name: 'Other :  |  - - Fractions of refined oil :  |  - - - Liquid fractions :  |  - - - - Other, with iodine value 55 or more but less than 60  |  RBD', FOB: 748922119.0},
    { name: 'In powder, granules or other solid forms, of a fat content, by weight, not exceeding 1.5% :  |  - - Not containing added sugar or other sweetening matter :  |  - - - In containers of a net weight of 20 kg or more', FOB: 679691359.0},
    { name: 'Boneless', FOB: 580127829.0},
    { name: 'Extracts, essences and concentrates, of coffee, and preparations with a basis of these extracts, essences or concentrates or with a basis of coffee :  |  - - Preparations with a basis of extracts, essences or concentrates or with a basis of coffee :  |  - - - Other :  |  - - - - Coffee preparation with a basis of ground roasted coffee containing added sugar,whether or not containing creamer :  |  - - - - - B. Out-Quota', FOB:  416752892.0},
    { name: 'Frozen :  |  - -\u00a0Other :  |  - - - B. Out-Quota', FOB:  353925298.0},
    { name: 'Semi-milled or wholly milled rice, whether or not polished or glazed :  |  - - Other :  |  - - - Other :  |  Other, more than 10% but not more than 25% broken', FOB: 291460402.0}
  ],
  2023: [
    { name: 'Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations not elsewhere specified or included, containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than those containing biodiesel and other than waste oils :  |  - - Other :  |  - - - Diesel fuel; fuel oils :  |  - - - - Fuel oils  |  Gas oils', FOB: 4884232769.0},
    { name: 'Materials and accessories for the manufacture of semiconductor devices  |  - - Other  |  Others', FOB: 4101085034.0},
    { name: 'Crude petroleum oils', FOB: 3963459252.0},
    { name: 'Coal, whether or not pulverised, but not agglomerated :  |  - - Other coal', FOB: 3192602963.0},
    { name: 'Electronic integrated circuits :  |  - -Other  |  Other', FOB: 2871103554.0},
    { name: 'Other', FOB: 2733724453.0},
    { name: 'Electronic integrated circuits :  |  - -Other  |  Wafers and discs, electrically circuit-programmed, whether or not coated on one side with gold or aluminium', FOB: 2733174667.0},
    { name: 'Copper ores and concentrates.  |  Concentrates', FOB: 2704528996.0},
    { name: 'Materials and accessories for the manufacture of semiconductor devices  |  - - Dice and wafer, of any material ', FOB: 2614589453.0},
    { name: 'Other vehicles, with only spark-ignition internal combustion reciprocating piston engine :  |  - -  Of a cylinder capacity exceeding \n1,000 cc but not exceeding 1,500 cc :  |  - - -  Other :  |  - - - -  Other motor cars (including station wagons and sports cars, but not including vans) :  |  - - - - -  Other  |  New ', FOB: 1715311649.0}
  ]
};

const BarChartComponent: React.FC = () => {
  const { selectedYear, setSelectedYear } = useYear();
  const [data, setData] = useState(yearlyData);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  const handleExportButtonClick = () => {
    setData(yearlyData);
  };

  const handleImportButtonClick = () => {
    setData(yearlyImport);
  };

  return (
    <div className="main-graph-container">
      <div className="main-graph-content">
        <div className="main-graph-dropdowns">
          <div className="main-graph-left">
            <div className="year">Year:</div>
            <select className="year-dropdown" value={selectedYear} onChange={handleYearChange}>
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

          <div className="main-graph-right">
            <div className="curr">Currency:</div>
            <select className="curr-dropdown" defaultValue="USD">
              <option value="USD">USD</option>
              <option value="PHP">PHP</option>
              <option value="EUR">EURO</option>
            </select>
          </div>

          <div className="main-buttons-container">
              <button className="export-button" onClick={handleExportButtonClick}>Exports</button>
              <button className="import-button" onClick={handleImportButtonClick}>Imports</button>
          </div>

        </div>

        <div className="graph_container">
          <div className='main-graph-name'>
            Top 10 Commodities Per Year
          </div>
          <ResponsiveContainer width="100%" height={600}>
            <BarChart
              data={data[selectedYear]}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="FOB" fill="#4D72B8" activeBar={<Rectangle fill="#3a4491" stroke="blue" />} />      
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;