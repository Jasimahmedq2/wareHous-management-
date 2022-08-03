import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm, reset } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../firebase.init';


const AddItem = () => {
  const [user] = useAuthState(auth)
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = data =>{
    console.log(data)
    const url = 'https://serene-beyond-86297.herokuapp.com/order';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
    console.log(result)
    toast('Add A New product')
    reset()
    })
  }


  return (
    <div className='w-50 mx-auto'>
      <h1>Add New Item</h1>


     <div>
     <form onSubmit= {handleSubmit(onSubmit)}>
      <input className='mt-3' placeholder='product Name' {...register("name", { required: true})}  />
      <br />
      <input className='mt-3' placeholder='product description' {...register("description", { required: true})} />
      <br />
      <input className='mt-3' placeholder='price' type="number" {...register("price")} />
      <br />
      <input className='mt-3' placeholder='quantity' type="number" {...register("quantity")} />
      <br />
      <input className='mt-3' placeholder='product image' {...register("image", { required: true})} />
      <br />

      <input className='mt-3' readOnly value={user.email} type="email" {...register("email")} />
      <br />



      <input className='mt-3' type="submit" />
    </form>
     </div>



    </div>
  );
};

export default AddItem;