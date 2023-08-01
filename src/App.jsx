import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchItems } from './redux/items/itemsSlice';
import Home from './pages/Home'
import Details from './pages/Details'
import './App.css'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:city" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
