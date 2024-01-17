import React from 'react';
import './Aboutus.css';
import Img from './AboutImg/sklogo.jpeg'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Aboutus() {
  return (
    <>
    <Navbar/>
    <h1 className='skheading'>SK Education & Investment Hub...🎯</h1>
    <img src={Img} className='skimage' />
     <Footer/>
    </>
   
  )
}

export default Aboutus