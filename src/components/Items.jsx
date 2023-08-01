import { useSelector } from 'react-redux';
import Item from './Item';
import '../styles/Items.css';

const Items = () => {
  const items = useSelector((state) => state.items.slice(0, 8)); // Slice the array to get the first 8 cities

  return (
    <div className='items'>
      {items.map((item, index) => (
        <Item
          id={index}
          city={item.city}
          carbonMonoxide={item.components.co}
          ozone={item.components.o3}
          key={index}
        />
      ))}
    </div>
  );
}

export default Items;


// Path: src/components/Items.jsx