import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Item.css';

const Item = ({ city, carbonMonoxide, ozone }) => {
  return (
    <Link to={`/details/${city}`} className="item">
      <h2>{city}</h2>
      <p>Carbon Monoxide Concentration: {carbonMonoxide}</p>
      <p>Ozone Concentration: {ozone}</p>
    </Link>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  carbonMonoxide: PropTypes.number.isRequired,
  ozone: PropTypes.number.isRequired,
};

export default Item;

// Path: src/components/Item.jsx