import React from 'react';
import { useState, useEffect } from 'react';
import Item from '../Item/Item';


const Items = () => {
  const [Items, setItems] = useState([])
  
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setItems(data))
  },[])
  return (
    <div>
      <p>item quantity: {Items.length}</p>
      {
        Items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
      }
    </div>
  );
};

export default Items;