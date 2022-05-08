import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Registerd.css'

const Registerd = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error, 
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  
  const handleEmail = event => {
    setEmail(event.target.value);
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }
const handleName = event => {
  setName(event.target.value)
}
const handleEmailVarification = () => {
  sendEmailVerification(auth.currentUser)
  .then(()=>{
    console.log('send email')
  })
}
  const handleSubmiteForm = event => {
    event.preventDefault()

    createUserWithEmailAndPassword(email, password)
    handleEmailVarification()
  }

  const handleLogin = () => {
    navigate('/login')
  }
  
  let errorElement; 
 if(error){
   errorElement = <p className='text-danger text-center'>error: {error?.message}</p>
 }
 const location = useLocation();
 const from = location.state?.from?.pathname || "/";

     if (user) {
         navigate(from, {replace: true });
     }
 
  return (

    <form onSubmit={handleSubmiteForm}>
      {errorElement}
     
      <div className='w-50 mx-auto mt-5'>
      <div className="mb-3">
       
       <input onBlur={handleName} type="text" className="form-control" id="exampleInputPassword1" placeholder='enter your name'/>
       </div>
      <div className="mb-3">
      <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your email' required/>
    </div>
    <div className="mb-3">
       
      <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder='password' required/>
      </div>
      
       <p>already have a account? <span className='registerd-btn text-danger' onClick={handleLogin}>login</span></p>
      <button className='btn btn-primary'>Registerd</button>
      </div>
      </form>
  
  );
};
export default Registerd