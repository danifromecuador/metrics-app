import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  let hide = false;
  return (
    <header>
      <div className="left">
        <Link to="/" className="return-arrow">
          &lt;
        </Link>
        <div className="year">
          2022
        </div>
      </div>
      <div className="center">
        <h1 className='h1-title'>Air Pollution App</h1>
        <h2 className="h2-title hide">City Details</h2>
      </div>
      <div className="right">
        <div className="microphone">micro</div>
        <div className="configuration">config</div>
      </div>
    </header>
  );
}
export default Header;

// Path: src/components/Header.jsx