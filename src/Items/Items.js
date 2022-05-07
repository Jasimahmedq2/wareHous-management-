import React from 'react';
import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import 'animate.css'
import './Items.css'


const Items = () => {
  const [Items, setItems] = useState([])
  
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setItems(data))
  },[])
  return (
    <div className='row items-container'>
      {
        Items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
      }
    </div>
     
  );
};

export default Items;