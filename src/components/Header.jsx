import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdMic } from 'react-icons/io';
import { AiTwotoneSetting } from 'react-icons/ai';
import '../styles/Header.css'

const Header = () => {
  let hide = false;
  return (
    <header>
      <div className="left">
        <Link to="/" className="return-arrow">
        <IoIosArrowBack />
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
          <IoMdMic />
          <AiTwotoneSetting className="setupWheel" />
      </div>
    </header>
  );
}
export default Header;

// Path: src/components/Header.jsx