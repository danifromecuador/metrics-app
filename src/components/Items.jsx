import { useSelector } from 'react-redux';
import Item from './Item';
import '../styles/Items.css';
import { fetchItems } from '../redux/items/itemsSlice';


const fetchItemsData = async () => {
  try {
    await fetchItems();
  } catch (error) {
    console.log(error);
  }
};

const Items = () => {
  const items = useSelector((state) => state.items);
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