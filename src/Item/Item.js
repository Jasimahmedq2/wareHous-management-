import React from 'react';
import { useNavigate } from 'react-router';
import './Item.css'

const Item = ({ item }) => {
  const {_id, name,image, quantity, price, index, description,itemname} = item;
  const navigate = useNavigate()

  const stockItem = (_id) => {
    navigate('/inventory')
  }
  return (
    <div className=' col-12 col-md-6 col-lg-4 animate__animated animate__slideInLeft items-container'>
      <img  src={image} alt="" />
     <p>{itemname}</p>
      <p>{quantity}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{index}</p>
      <p>{name}</p>
      <button onClick={()=>stockItem(_id)} className='btn btn-primary btn-service'>stock</button>
    </div>
  );
};

export default Item;