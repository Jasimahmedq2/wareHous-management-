import React from 'react';
import './Item.css'

const Item = ({ item }) => {
  const { name, image, quantity, price, supplier, } = item;
  return (
      <div className='mt-5 item-container row'> 
        <div className='item-child col-lg-6'>

          <img src={image} alt="" />
          <h3>{name}</h3>
          <h4>{quantity}</h4>
          <p>{price}</p>
          <p>{supplier}</p>
        </div>
      </div>
  );
};

export default Item;