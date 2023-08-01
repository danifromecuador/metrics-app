import { useSelector} from 'react-redux';
import { fetchItems } from '../redux/items/itemsSlice';
import Item from './Item';
import '../styles/Items.css'

const Items = () => {
  const items = useSelector((state) => state.items);

  return (
    <div className='items'>
      {items.map((item, index) => (
        <Item
          id={index} // Use the index as the unique identifier, as the 'id' in the original array might not be unique
          city={item.city}
          airQuality={item.components.co} // Adjust this based on your data structure in the Redux store
          key={index}
        />
      ))}
    </div>
  );
}

export default Items;

// Path: src/components/Items.jsx