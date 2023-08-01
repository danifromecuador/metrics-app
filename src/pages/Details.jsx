import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import array from "../components/array";
import '../styles/Details.css'


const Details = () => {
  const items = useSelector((state) => state.items);
  const { itemId } = useParams();
  const selectedArrayItem = items.find((item) => item.id.toString() === itemId);

  if (!selectedArrayItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="details-page">
      <Header />
      <div className="details">
        <h2>{selectedArrayItem.city}</h2>
        <h3>{selectedArrayItem.country}</h3>
        <p>{selectedArrayItem.airQuality}</p>
      </div>
    </div>
  );
};

export default Details;

// Path: src/pages/Details.jsx