import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
      <Link to="/" className="return-arrow">
        return
      </Link>
      <h1>HEADER</h1>
    </header>
  );
}
export default Header;

// Path: src/components/Header.jsx