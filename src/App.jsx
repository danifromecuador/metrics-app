import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import './App.css'

// import obtainGeoCode from './redux/items/obtainGeoCode'


function App() {
  // obtainGeoCode("quito")
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:itemId" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
