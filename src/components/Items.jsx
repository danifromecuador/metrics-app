import Item from './Item';
import array from './array';
import '../styles/Items.css'

const Items = () => {
  console.log(array);
  return (
    <div className='items'>
      <Item array={array}/>
      <Item array={array}/>
      <Item array={array}/>
      <Item array={array}/>
      <Item array={array}/>
    </div>
  );
}

export default Items;