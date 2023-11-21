import { useState } from 'react';
import React from 'react';
import Marquee from './Marquee';
import ControlledCarousel from './carossel';
import Footer from './footer';
import './carossel.css'



function Home() {
  return (
    <>
    <Marquee/>
     <ControlledCarousel/>
    <Footer
    />
    </>
    
  );
}

export default Home;