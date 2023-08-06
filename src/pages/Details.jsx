/* eslint-disable-next-line */
import React from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdMic } from 'react-icons/io';
import { AiTwotoneSetting } from 'react-icons/ai';

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
      <header className="details-page-header">
        <div className="left">
          <Link to="/" className="return-arrow">
            <IoIosArrowBack />
          </Link>
        </div>
        <div className="center">
          <div className="h2-title">City Details</div>
        </div>
        <div className="right">
          <IoMdMic />
          <AiTwotoneSetting className="setupWheel" />
        </div>
      </header>
      <div className="details">
        <div className="details-city-header">
          <div className="details-city-name">{selectedArrayItem.city}</div>
          <div>Carbon Monoxide: {selectedArrayItem.components.co}</div>
        </div>

        <div className="details-container">
          <p className="detail-name">carbon monoxide:</p> <p className="detail-name left">{selectedArrayItem.components.co}</p>
          <p className="detail-name">nitrogen monoxide:</p> <p className="detail-name left"> {selectedArrayItem.components.no}</p>
          <p className="detail-name">nitrogen dioxide:</p> <p className="detail-name left"> {selectedArrayItem.components.no2}</p>
          <p className="detail-name">ozone:</p> <p className="detail-name left"> {selectedArrayItem.components.o3}</p>
          <p className="detail-name">sulphur dioxide:</p> <p className="detail-name left"> {selectedArrayItem.components.so2}</p>
          <p className="detail-name">pm2.5:</p> <p className="detail-name left"> {selectedArrayItem.components.pm2_5}</p>
          <p className="detail-name">pm10:</p> <p className="detail-name left"> {selectedArrayItem.components.pm10}</p>
          <p className="detail-name">ammonia:</p> <p className="detail-name left"> {selectedArrayItem.components.nh3}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;

// Path: src/pages/Home.jsx