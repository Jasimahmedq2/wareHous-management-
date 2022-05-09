import React from 'react';
import errorImage from '../image/2488756.jpg'

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <img className='w-100 mx-auto' src={errorImage} alt="" />
    </div>
  );
};

export default NotFound;