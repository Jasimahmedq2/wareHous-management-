import React from 'react';
import Banner from '../Banner/Banner'
import Items from '../Items/Items';
import 'animate.css'
import WhyUse from '../WhyUse/WhyUse';
import Clint from '../Clint/Clint';
import './Home.css'
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className='body-bg'>
      <Banner></Banner>
     <Items></Items> 
     <WhyUse></WhyUse>
     <Clint></Clint> 
     <Footer></Footer>   
    </div>
  );
};

export default Home;