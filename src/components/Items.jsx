import Item from './Item';
import array from './array';

const Items = () => {
  console.log(array);
  return (
    <div>
      <Item array={array}/>
    </div>
  );
}

export default Items;