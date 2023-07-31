import Header from "../components/Header";
import array from "../components/array";


const Details = () => {
  console.log(array);
  return (
    <div>
      <Header />
      <div className="item">
        <h2>{array[2].city}</h2>
        <h3>{array[2].country}</h3>
        <p>{array[2].airQuality}</p>
      </div>
    </div>
  );
}

export default Details;

// Path: src/pages/Details.jsx