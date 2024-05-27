// src/BarChartComponentThree.tsx
import React, { useState } from 'react';
import {  
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts';
import "./BarChartComponent.css"

type YearlyData = {
  [year: number]: { name: string; FOB: number;}[];
};

const yearlyData: YearlyData = {
2015: [
    { name: 'Jan', FOB: 353213484.0},
    { name: 'Feb', FOB: 423102593.0},
    { name: 'Mar', FOB: 590833142.0},
    { name: 'Apr', FOB: 389282881.0},
    { name: 'May', FOB: 466925852.0},
    { name: 'June', FOB: 454724903.0},
    { name: 'July', FOB: 468342203.0},
    { name: 'Aug', FOB: 428253601.0},
    { name: 'Sep', FOB: 386561725.0},
    { name: 'Oct', FOB: 368750581.0},
    { name: 'Nov', FOB: 344870123.0},
    { name: 'Dec', FOB: 326926964.0},
],
2016: [
    { name: 'Jan', FOB: 366712424.0},
    { name: 'Feb', FOB: 401172946.0},
    { name: 'Mar', FOB: 368162887.0},
    { name: 'Apr', FOB: 327599117.0},
    { name: 'May', FOB: 326518993.0},
    { name: 'June', FOB: 425464725.0},
    { name: 'July', FOB: 467993171.0},
    { name: 'Aug', FOB: 447244713.0},
    { name: 'Sep', FOB: 488506267.0},
    { name: 'Oct', FOB: 530566915.0},
    { name: 'Nov', FOB: 502858902.0},
    { name: 'Dec', FOB: 502823300.0},
],
2017: [
    { name: 'Jan', FOB: 560352048.0},
    { name: 'Feb', FOB: 469252080.0},
    { name: 'Mar', FOB: 548985020.0},
    { name: 'Apr', FOB: 527198081.0},
    { name: 'May', FOB: 619532518.0},
    { name: 'June', FOB: 567967600.0},
    { name: 'July', FOB: 547851946.0},
    { name: 'Aug', FOB: 689738824.0},
    { name: 'Sep', FOB: 525433933.0},
    { name: 'Oct', FOB: 653937975.0},
    { name: 'Nov', FOB: 510778239.0},
    { name: 'Dec', FOB: 358476358.0},
],
2018: [
    { name: 'Jan', FOB: 505496637.0},
    { name: 'Feb', FOB: 430276743.0},
    { name: 'Mar', FOB: 549949749.0},
    { name: 'Apr', FOB: 487330896.0},
    { name: 'May', FOB: 547790364.0},
    { name: 'June', FOB: 537171853.0},
    { name: 'July', FOB: 499761085.0},
    { name: 'Aug', FOB: 516226669.0},
    { name: 'Sep', FOB: 511159614.0},
    { name: 'Oct', FOB: 569534918.0},
    { name: 'Nov', FOB: 505731530.0},
    { name: 'Dec', FOB: 457414591.0},
],
2019: [
    { name: 'Jan', FOB: 495748427.0},
    { name: 'Feb', FOB: 434228130.0},
    { name: 'Mar', FOB: 603876406.0},
    { name: 'Apr', FOB: 594772464.0},
    { name: 'May', FOB: 621220137.0},
    { name: 'June', FOB: 615372637.0},
    { name: 'July', FOB: 591119608.0},
    { name: 'Aug', FOB: 524257681.0},
    { name: 'Sep', FOB: 558978844.0},
    { name: 'Oct', FOB: 601302091.0},
    { name: 'Nov', FOB: 487647220.0},
    { name: 'Dec', FOB: 548530885.0},
],
2020: [
    { name: 'Jan', FOB: 542405647.0},
    { name: 'Feb', FOB: 516783364.0},
    { name: 'Mar', FOB: 571356420.0},
    { name: 'Apr', FOB: 418809061.0},
    { name: 'May', FOB: 532778393.0},
    { name: 'June', FOB: 546770510.0},
    { name: 'July', FOB: 490864135.0},
    { name: 'Aug', FOB: 505661191.0},
    { name: 'Sep', FOB: 570637486.0},
    { name: 'Oct', FOB: 561371765.0},
    { name: 'Nov', FOB: 496969549.0},
    { name: 'Dec', FOB: 445556989.0},
],
2021: [
    { name: 'Jan', FOB: 474229894.0},
    { name: 'Feb', FOB: 498879814.0},
    { name: 'Mar', FOB: 592148856.0},
    { name: 'Apr', FOB: 527648803.0},
    { name: 'May', FOB: 500203435.0},
    { name: 'June', FOB: 577043925.0},
    { name: 'July', FOB: 606925702.0},
    { name: 'Aug', FOB: 609416254.0},
    { name: 'Sep', FOB: 596929437.0},
    { name: 'Oct', FOB: 579181437.0},
    { name: 'Nov', FOB: 634416068.0},
    { name: 'Dec', FOB: 623885289.0},
],
2022: [
    { name: 'Jan', FOB: 567197456.0},
    { name: 'Feb', FOB: 670214837.0},
    { name: 'Mar', FOB: 716301435.0},
    { name: 'Apr', FOB: 717058380.0},
    { name: 'May', FOB: 741095977.0},
    { name: 'June', FOB: 676821345.0},
    { name: 'July', FOB: 648478556.0},
    { name: 'Aug', FOB: 637473896.0},
    { name: 'Sep', FOB: 575235503.0},
    { name: 'Oct', FOB: 551683924.0},
    { name: 'Nov', FOB: 498408138.0},
    { name: 'Dec', FOB: 498735470.0},
],
2023: [
    { name: 'Jan', FOB: 475145821.0},
    { name: 'Feb', FOB: 469044144.0},
    { name: 'Mar', FOB: 607320948.0},
    { name: 'Apr', FOB: 477955697.0},
    { name: 'May', FOB: 604782335.0},
    { name: 'June', FOB: 533133975.0},
    { name: 'July', FOB: 578168269.0},
    { name: 'Aug', FOB: 520876317.0},
    { name: 'Sep', FOB: 515061913.0},
    { name: 'Oct', FOB: 568926185.0},
    { name: 'Nov', FOB: 510919223.0},
    { name: 'Dec', FOB: 548074456.0},
],
};

const yearlyImport: YearlyData = {
2015: [
    { name: 'Jan', FOB: 901675866.1100000143},
    { name: 'Feb', FOB: 866223611.0},
    { name: 'Mar', FOB: 857712890.7699999809},
    { name: 'Apr', FOB: 870421381.8899999857},
    { name: 'May', FOB: 752185787.3899999857},
    { name: 'June', FOB: 741335002.2899999619},
    { name: 'July', FOB: 799517809.6100000143},
    { name: 'Aug', FOB: 660837596.3600000143},
    { name: 'Sep', FOB: 648688777.0499999523},
    { name: 'Oct', FOB: 797831082.0},
    { name: 'Nov', FOB: 831543025.5},
    { name: 'Dec', FOB: 851874776.0},
],
2016: [
    { name: 'Jan', FOB: 738725119.9400000572},
    { name: 'Feb', FOB: 719654745.0299999714},
    { name: 'Mar', FOB: 911883698.0199999809},
    { name: 'Apr', FOB: 848594056.9800000191},
    { name: 'May', FOB: 976706934.0},
    { name: 'June', FOB: 813458227.0},
    { name: 'July', FOB: 846245310.0},
    { name: 'Aug', FOB: 883090695.0},
    { name: 'Sep', FOB: 860401600.0},
    { name: 'Oct', FOB: 899454753.0},
    { name: 'Nov', FOB: 880447863.0},
    { name: 'Dec', FOB: 851730185.0},
],
2017: [
    { name: 'Jan', FOB: 904258761.9300000668},
    { name: 'Feb', FOB: 856909036.1799999475},
    { name: 'Mar', FOB: 923505573.7799999714},
    { name: 'Apr', FOB: 798055527.2599999905},
    { name: 'May', FOB: 992455713.9700000286},
    { name: 'June', FOB: 863388537.9700000286},
    { name: 'July', FOB: 912558407.6900000572},
    { name: 'Aug', FOB: 1084412137.3800001144},
    { name: 'Sep', FOB: 870585003.5499999523},
    { name: 'Oct', FOB: 870551799.9299999475},
    { name: 'Nov', FOB: 955441902.3899999857},
    { name: 'Dec', FOB: 956994116.2300000191},
],
2018: [
    { name: 'Jan', FOB: 1140709707.0},
    { name: 'Feb', FOB: 821380908.0},
    { name: 'Mar', FOB: 948139583.0},
    { name: 'Apr', FOB: 1080425681.0},
    { name: 'May', FOB: 1086135087.0},
    { name: 'June', FOB: 1119717809.0},
    { name: 'July', FOB: 1013479604.0},
    { name: 'Aug', FOB: 1156274396.0},
    { name: 'Sep', FOB: 1286020415.0},
    { name: 'Oct', FOB: 1246712574.0},
    { name: 'Nov', FOB: 1240309474.0},
    { name: 'Dec', FOB: 1000596853.0},
],
2019: [
    { name: 'Jan', FOB: 1285524922.0},
    { name: 'Feb', FOB: 917969990.0},
    { name: 'Mar', FOB: 1239857863.0},
    { name: 'Apr', FOB: 1111803708.0},
    { name: 'May', FOB: 1211539521.0},
    { name: 'June', FOB: 937747500.0},
    { name: 'July', FOB: 1172103943.0},
    { name: 'Aug', FOB: 1070665892.0},
    { name: 'Sep', FOB: 1225348622.0},
    { name: 'Oct', FOB: 1177740037.0},
    { name: 'Nov', FOB: 1188109091.0},
    { name: 'Dec', FOB: 993373959.0},
],
2020: [
    { name: 'Jan', FOB: 1086756259.0},
    { name: 'Feb', FOB: 895022521.0},
    { name: 'Mar', FOB: 1051172939.0},
    { name: 'Apr', FOB: 386070000.0},
    { name: 'May', FOB: 1095897509.0},
    { name: 'June', FOB: 1179813646.0},
    { name: 'July', FOB: 1077340865.0},
    { name: 'Aug', FOB: 1147966021.0},
    { name: 'Sep', FOB: 1370885979.0},
    { name: 'Oct', FOB: 1178441766.0},
    { name: 'Nov', FOB: 1001202578.0},
    { name: 'Dec', FOB: 1105573681.0},
],
2021: [
    { name: 'Jan', FOB: 1072736097.0},
    { name: 'Feb', FOB: 987178667.0},
    { name: 'Mar', FOB: 1234115885.0},
    { name: 'Apr', FOB: 1195086705.0},
    { name: 'May', FOB: 1290127474.0},
    { name: 'June', FOB: 1392040992.0},
    { name: 'July', FOB: 1251240427.0},
    { name: 'Aug', FOB: 1346669384.0},
    { name: 'Sep', FOB: 1486661663.0},
    { name: 'Oct', FOB: 1333064111.0},
    { name: 'Nov', FOB: 1276960372.0},
    { name: 'Dec', FOB: 1497037615.0},
],
2022: [
    { name: 'Jan', FOB: 1507010860.0},
    { name: 'Feb', FOB: 1382058594.0},
    { name: 'Mar', FOB: 1507555120.0},
    { name: 'Apr', FOB: 1536804030.0},
    { name: 'May', FOB: 1542772989.0},
    { name: 'June', FOB: 1666531921.0},
    { name: 'July', FOB: 1649300027.0},
    { name: 'Aug', FOB: 1842518580.0},
    { name: 'Sep', FOB: 1590071618.0},
    { name: 'Oct', FOB: 1535392332.0},
    { name: 'Nov', FOB: 1626078883.0},
    { name: 'Dec', FOB: 1541357040.0},
],
2023: [
    { name: 'Jan', FOB: 11115144862.0},
    { name: 'Feb', FOB: 9152623190.0},
    { name: 'Mar', FOB: 11781829165.0},
    { name: 'Apr', FOB: 9846702949.0},
    { name: 'May', FOB: 11126809526.0},
    { name: 'June', FOB: 10836144032.0},
    { name: 'July', FOB: 10465955854.0},
    { name: 'Aug', FOB: 10925237858.0},
    { name: 'Sep', FOB: 10383437569.0},
    { name: 'Oct', FOB: 10856286743.0},
    { name: 'Nov', FOB: 11092839033.0},
    { name: 'Dec', FOB: 10124387373.0},
  ]
};

const BarChartComponentThree: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2015);
  const [data, setData] = useState<YearlyData>(yearlyData);
  const [dataType, setDataType] = useState<string>('Exports');

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  const handleExportButtonClick = () => {
    setData(yearlyData);
    setDataType('Exports');
  };

  const handleImportButtonClick = () => {
    setData(yearlyImport);
    setDataType('Imports');
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

          {/*<div className="main-graph-right">
            <div className="curr">Currency:</div>
            <select className="curr-dropdown" defaultValue="USD">
              <option value="USD">USD</option>
              <option value="PHP">PHP</option>
              <option value="EUR">EURO</option>
            </select>
          </div>*/}

          <div className="main-buttons-container">
              <button className="export-button" onClick={handleExportButtonClick}>Exports</button>
              <button className="import-button" onClick={handleImportButtonClick}>Imports</button>
          </div>

          <div className="data-type">{dataType}:</div> 

        </div>

        <div className="graph_container">
          <div className='main-graph-name'>
            Monthly Sum of FOB (Free On Board)
          </div>
          <ResponsiveContainer width="100%" height={600}>
            <AreaChart
              data={data[selectedYear]}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="FOB" fill="#42acc9" stroke="#4D72B8"/>      
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponentThree;