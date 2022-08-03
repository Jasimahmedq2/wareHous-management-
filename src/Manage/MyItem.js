import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import MyItems from './MyItems';
import { toast } from 'react-toastify';


const MyItem = () => {
  const [user] = useAuthState(auth)
  const [product, setProduct] = useState([]);
  console.log(product)

  useEffect(() => {
    const LoadData = async () => {
      const email = user.email;
      const url = `https://serene-beyond-86297.herokuapp.com/order?email=${email}`
      const { data } = await axios.get(url)
      setProduct(data)

    }
    LoadData()
  }, [user])


  const handleDelete = (id) => {
    const proceed = window.confirm('are you sure delete this product?')
    if (proceed) {
      const url = `https://serene-beyond-86297.herokuapp.com/order/${id}`
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          const newProduct = product.filter(manage => manage._id !== id)
          setProduct(newProduct)
          toast('deleted successful')

        })
    }
  }



  return (
    <div>
      <h1>My all Product: {product.length}</h1>
      <div className='row g-5'>
        {
          product.map(pro => <MyItems
            key={pro._id}
            pro={pro}
            handleDelete={handleDelete}
          ></MyItems>)
        }
      </div>
    </div>
  );
};

export default MyItem;