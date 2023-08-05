import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterItems } from '../redux/items/itemsSlice'; // Import the filterItems action
// import '../styles/Input.css';


const Input = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    dispatch(filterItems({ input: inputValue }));
  };

  return (
    <div className="inputContainer">
      <input type="text" placeholder="Search city..." value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

export default Input;

// Path: src/components/Input.jsx