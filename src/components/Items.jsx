import { useSelector } from 'react-redux';
import Item from './Item';
import '../styles/Items.css';

const Items = () => {
  const cities = useSelector((state) => state.cities.filteredItems);
  const { loading, error } = useSelector((state) => state.cities);

  return (
    <div className='items'>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : error ? (
        <div className='error'>Error occurred while fetching data.</div>
      ) : (
        cities.map((item, index) => (
          <Item
            id={index}
            city={item.city}
            carbonMonoxide={item.components.co}
            ozone={item.components.o3}
            key={index}
          />
        ))
      )}
    </div>
  );
}

export default Items;



// Path: src/components/Items.jsx