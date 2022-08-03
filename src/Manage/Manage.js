import React from 'react';
import ManageCart from './ManageCart'
import useProduCt from '../Hook/useProduct';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Manage = () => {

 const [product, setProduct] = useProduCt();


  const handleDelete = (id) => {
    const proceed = window.confirm('are you sure delete this product?')
    if (proceed) {
      const url = `https://serene-beyond-86297.herokuapp.com/item/${id}`
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
  <div className='row mt-5 g-4'>



    {
      product.map(manage => <ManageCart key={manage._id}
      manage={manage}
      handleDelete={handleDelete}
      ></ManageCart>)
    }
    <Link to='/addItem'><button className='btn btn-primary'>Add New Item</button></Link>
  </div>

    
  );
};

export default Manage;