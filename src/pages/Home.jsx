import Input from "../components/Input";
import Items from "../components/Items";
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdMic } from 'react-icons/io';
import { AiTwotoneSetting } from 'react-icons/ai';

const Home = () => {
  return (
    <div>
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
        </div>
        <div className="right">
          <IoMdMic />
          <AiTwotoneSetting className="setupWheel" />
        </div>
      </header>
      <Input />
      <Items />
    </div>
  );
}

export default Home;

// Path: src/pages/Home.jsx