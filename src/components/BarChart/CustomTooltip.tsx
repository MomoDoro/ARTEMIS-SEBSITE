// src/CustomTooltip.tsx
import "./CustomTooltip.css"

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const { name, Actual, Predicted, mae, rmse, mape, imageUrl } = payload[0].payload;
      return (
        <div className="custom-tooltip">

            <div className="custom-name">
                <p>{`Name: ${name}`}</p>
            </div>

            <div className="custom-actual">
                <p>{`Actual: ${Actual}`}</p>
            </div>

            <div className="custom-predicted">
                <p>{`Predicted: ${Predicted}`}</p>
            </div>

            <div className="custom-mae">
                <p>{`MAE: ${mae}`}</p>
            </div>

            <div className="custom-rmse">
                <p>{`RMSE: ${rmse}`}</p>
            </div>

            <div className="custom-mape">
                <p>{`MAPE: ${mape}%`}</p>
            </div>
          
          {imageUrl && <img src={imageUrl} alt="Description" style={{ width: '450px', height: '250px', }} />}
        </div>
      );
    }
  
    return null;
  };

export default CustomTooltip;
