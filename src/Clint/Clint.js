import React from 'react';
import image1 from '../image/pic-1.png'
import image2 from '../image/pi-2.png'
import image3 from '../image/pic-3.png'
import image4 from '../image/pic-4.png'
import image5 from '../image/pic-5.png'
import image6 from '../image/pic-6.png'
import './Clint.css'

const Clint = () => {
  return (
    <div className='my-5'>
      <h2>Our Clients</h2>
    <div className='row'>
    <div className='col-6 col-md-4 col-lg-4 image-container w-50 mx-auto my-5 '>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>  
    </div>
    </div>
  );
};

export default Clint;