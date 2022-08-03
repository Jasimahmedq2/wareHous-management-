import { useNavigate } from 'react-router';
import './Item.css'

const Item = ({ item }) => {
  const {_id, name,image, quantity, price, index, description} = item;
  const navigate = useNavigate()
  

  const stockItem = (id) => {
    navigate(`/inventory/${id}`)
  }
  return (
    <div className=' col-12 col-md-6 col-lg-4 animate__animated animate__slideInLeft items-container'>
      <img  src={image} alt="" />
     <p>{}</p>
      <p>quantity: {quantity}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{index}</p>
      <p>{name}</p>
      <button onClick={() => stockItem(_id)} className='btn btn-primary btn-service'>stock</button>
    </div>
  );
};

export default Item;