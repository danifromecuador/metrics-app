const Item = ({array}) => {
  return (
    <div>
      {array.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.city}</h1>
            <p>{item.airQuality}</p>
          </div>
        );
      })}
    </div>    
  );
}

export default Item;