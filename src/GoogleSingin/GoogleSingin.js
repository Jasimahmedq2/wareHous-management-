import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import google from '../image/google.png'
import './GoogleSingin.css'

const GoogleSingin = () => {
  const navigate = useNavigate()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
 
  if(user){
    navigate('/home')
  }
  if(loading){
    return <p>loading...</p>
  }
  let errorFind;
  if(error){
  errorFind = <p className='text-center text-danger'>error: {error?.message}</p>
  }
  return (
    <div className='w-50 mx-auto mt-3'>
      <button className='bg-info  style-btn ' onClick={() => signInWithGoogle()}>
        <img className='google-logo' src={google} alt="" />
        <span className='ms-2'>google singup</span></button>
      {errorFind}
    </div>
  );
};

export default GoogleSingin