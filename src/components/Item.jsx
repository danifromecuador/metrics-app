/* eslint-disable-next-line */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ id, city, carbonMonoxide, ozone, handleOnClick }) => {  
  return (
    <Link to={`/details/${city}`} className="item" onClick={handleOnClick} id={id}>
      <h2 className='home-city-name'>{city}</h2>
      <div className="home-city-details">
        <p className='home-detail'>Carbon Monoxide Concentration: {carbonMonoxide}</p>
        <p className='home-detail'>Ozone Concentration: {ozone}</p>
      </div>
    </Link>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  carbonMonoxide: PropTypes.number.isRequired,
  ozone: PropTypes.number.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Item;

// Path: src/components/Item.jsx