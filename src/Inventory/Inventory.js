import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Inventory = () => {
  const { id } = useParams()
  const [item, setItem] = useState([]);

  console.log(item.quantity)

  const [quantityNum, setQuantityNum] = useState(item?.quantity)


  useEffect(() => {
    const url = `https://serene-beyond-86297.herokuapp.com/item/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [])


  const handleQuantityDelivered = () => {
    if (quantityNum > 0) {
      setQuantityNum(id => id - 1)
    }


    fetch(`https://serene-beyond-86297.herokuapp.com/item/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quantityNum)
    })
      .then(res => res.json())
      .then(data => {
        console.log('success :', data)
      })
      .catch((error) => {
        console.error('error:', error)
      })
  }


  return (
    <div>
     <div>
     <img src={item.image} alt="" />
      <p>{item.quantity}</p>   
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.index}</p>
      <p>{item.name}</p>
      <button disabled className='btn btn-primary' onClick={() => handleQuantityDelivered(id)}>delivered</button>
     </div>
     <div className='mt-5'>
     <Link to='/manage'><button className='btn btn-primary'>Manage all product</button></Link>

     </div>

    </div>
  );

};

export default Inventory;