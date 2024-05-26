// src/CustomTooltip.tsx
import "./CustomTooltip.css"

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const { name, FOB} = payload[0].payload;
      return (
        <div className="custom-tooltip">

            <div className="custom-name">
                <p>{`Name: ${name}`}</p>
            </div>

            <div className="custom-actual">
                <p>{`Free On Board: ${FOB}`}</p>
            </div>
          
          {/*{imageUrl && <img src={imageUrl} alt="Description" style={{ width: '450px', height: '250px', }} />}*/}
        </div>
      );
    }
  
    return null;
  };

export default CustomTooltip;
