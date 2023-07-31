import Item from './Item';
import array from './array';
import '../styles/Items.css'

const Items = () => {
  return (
    <div className='items'>
      {array.map((item, index) => {
        return (
          <Item id={item.id} city={item.city} country={item.country} airQuality={item.airQuality} key={index} />
        )
      })}
    </div>
  );
}

export default Items;

// Path: src/components/Items.jsx