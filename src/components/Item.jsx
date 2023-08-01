import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchItems } from '../redux/items/itemsSlice.js';
import '../styles/Item.css';

const Item = ({ id, city, country, airQuality }) => {
  const dispatch = useDispatch();
  
  const onClick = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <Link to={`/details/${id}`} className="item" onClick={onClick}>
      <h2>{city}</h2>
      <h3>{country}</h3>
      <p>{airQuality}</p>
    </Link>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  airQuality: PropTypes.string.isRequired,
};

export default Item;

// Path: src/components/Item.jsx