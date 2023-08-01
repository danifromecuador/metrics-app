import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Item.css';

const Item = ({ id, city, country, airQuality }) => {
  return (
    <Link to={`/details/${id}`} className="item">
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