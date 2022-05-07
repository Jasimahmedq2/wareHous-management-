import React from 'react';
import Banner from '../Banner/Banner'
import Header from '../Header/Header';
import Items from '../Items/Items';
import 'animate.css'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
     <Items></Items>     
    </div>
  );
};

export default Home;