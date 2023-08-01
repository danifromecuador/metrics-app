import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import '../styles/Details.css'


const Details = () => {
  const items = useSelector((state) => state.items);
  const { city } = useParams();
  const selectedArrayItem = items.find((item) => item.city === city);

  return (
    <div className="details-page">
      <Header />
      <div className="details">
        <h2>{selectedArrayItem.city}</h2>
        <div className="details-container">      
      </div>
          <p>carbon monoxide {selectedArrayItem.components.co}</p>
          <p>nitrogen monoxide {selectedArrayItem.components.no}</p>
          <p>nitrogen dioxide {selectedArrayItem.components.no2}</p>
          <p>ozone {selectedArrayItem.components.o3}</p>
          <p>sulphur dioxide {selectedArrayItem.components.so2}</p>
          <p>pm2.5 {selectedArrayItem.components.pm2_5}</p>
          <p>pm10 {selectedArrayItem.components.pm10}</p>
          <p>ammonia {selectedArrayItem.components.nh3}</p>
      </div>
    </div>
  );
};

export default Details;

// Path: src/pages/Details.jsx