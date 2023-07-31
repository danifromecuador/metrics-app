import { Link } from 'react-router-dom';
import '../styles/Item.css'

const Item = ({id, city, country, airQuality}) => {
  const onClick = (event) => {
    console.log(event.currentTarget);
  };

  return (
    <Link to={`/details/${id}`} className="item">
      <h2>{city}</h2>
      <h3>{country}</h3>
      <p>{airQuality}</p>
    </Link>
  );
}

export default Item;

// Path: src/components/Item.jsx