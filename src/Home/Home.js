import React from 'react';
import Banner from '../Banner/Banner'
import Header from '../Header/Header';
import Items from '../Items/Items';
import 'animate.css'
import WhyUse from '../WhyUse/WhyUse';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
     <Items></Items> 
     <WhyUse></WhyUse>    
    </div>
  );
};

export default Home;