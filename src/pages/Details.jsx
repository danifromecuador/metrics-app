import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdMic } from 'react-icons/io';
import { AiTwotoneSetting } from 'react-icons/ai';
import '../styles/Details.css'

const Details = () => {
  const { city } = useParams();
  const items = useSelector((state) => state.cities.items);
  const selectedArrayItem = items.find((item) => item.city === city);

  useEffect(() => {
  }, [city]);
  if (!selectedArrayItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-page">
      <header>
        <div className="left">
          <Link to="/" className="return-arrow">
            <IoIosArrowBack />
          </Link>
        </div>
        <div className="center">
          <h1 className="h2-title">City Details</h1>
        </div>
        <div className="right">
          <IoMdMic />
          <AiTwotoneSetting className="setupWheel" />
        </div>
      </header>
      <div className="details">
        <h2>{selectedArrayItem.city}</h2>
        <div className="details-container">
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
    </div>
  );
};

export default Details;

// Path: src/pages/Home.jsx