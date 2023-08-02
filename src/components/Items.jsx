import { useSelector } from 'react-redux';
import Item from './Item';
import '../styles/Items.css';

const Items = () => {
  const cities = useSelector((state) => state.cities.items);
  // console.log("cities", cities);
  return (
    <div className='items'>
      {cities.map((item, index) => (
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