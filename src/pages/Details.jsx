import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../redux/items/itemsSlice';

import Header from '../components/Header';
import '../styles/Details.css';

const Details = () => {
  const dispatch = useDispatch();
  const { city } = useParams();

  useEffect(() => {
    // Fetch the data and wait for it to complete before rendering the component
    const fetchData = async () => {
      try {
        await dispatch(fetchItems());
      } catch (error) {
        // Handle errors if necessary
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, city]);

  const items = useSelector((state) => state.cities.items);
  const selectedArrayItem = items.find((item) => item.city === city);

  // Render loading or error state if needed
  if (!selectedArrayItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-page">
      <Header />
      <div className="details">
        <h2>{selectedArrayItem.city}</h2>
        <div className="details-container">
          {/* Render the details */}
          <p>carbon monoxide {selectedArrayItem.components.co}</p>
          <p>nitrogen monoxide {selectedArrayItem.components.no}</p>
          <p>nitrogen dioxide {selectedArrayItem.components.no2}</p>
          <p>ozone {selectedArrayItem.components.o3}</p>
          <p>sulphur dioxide {selectedArrayItem.components.so2}</p>
          <p>pm2.5 {selectedArrayItem.components.pm2_5}</p>
          <p>pm10 {selectedArrayItem.components.pm10}</p>
          <p>ammonia {selectedArrayItem.components.nh3}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;

// Path: src/pages/Details.jsx