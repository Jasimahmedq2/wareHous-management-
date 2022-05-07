import React from 'react';
import './Item.css'

const Item = ({ item }) => {
  const { name,image, quantity, price, } = item;
  return (
    <div className=' col-12 col-md-6 col-lg-4 animate__animated animate__slideInLeft items-container'>
      <img  src={image} alt="" />
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{price}</p>
      <button className='btn btn-primary btn-service'>somthin</button>
    </div>
  );
};

export default Item;