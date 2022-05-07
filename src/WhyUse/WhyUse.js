import React from 'react';
import './WhyUse.css'
import 'animate.css'

const WhyUse = () => {
  return (
    <div className='container description-body'>
      <h2 className='description-title animate__animated animate__lightSpeedInLeft'><span className='text-primary'>Wh</span>y You Will Use Our Services<span className='text-primary'>??</span></h2>
      <h5 className='description-details animate__animated animate__lightSpeedInRight'>
        You can have a storage space your production facility, but your stock volume can outgrow it during your busy months. In this case, getting a warehouse space will make the most sense. You want your goods to be safe from damage and theft.

        Basically, a warehouse is great for storing surplus goods, which customers and clients don't need immediately.

        Most companies usually produce goods in anticipation of demand. This means they’ll need adequate storage for their surplus goods until their customers and clients start putting in orders
      </h5>
    </div>
  );
};

export default WhyUse;