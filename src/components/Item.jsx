import '../styles/Item.css'

const Item = ({id, city, country, airQuality}) => {
  const onClick = (event) => {
    console.log(event.currentTarget);
  };

  return (
    <div className="item" id={id} onClick={onClick}>
      <h2>{city}</h2>
      <h3>{country}</h3>
      <p>{airQuality}</p>
    </div>
  );
}

export default Item;