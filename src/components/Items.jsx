/* eslint-disable-next-line */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import { filterItems } from '../redux/items/itemsSlice';

const Items = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.filteredItems);
  const { loading, error } = useSelector((state) => state.cities);

  const handleOnClick = () => {
    dispatch(filterItems({ input: '' }));
  };


  return (
    <div className='items' data-testid='items-container'>
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
            handleOnClick={handleOnClick}
            key={index}
          />
        ))
      )}
    </div>
  );
}

export default Items;

// Path: src/components/Items.jsx