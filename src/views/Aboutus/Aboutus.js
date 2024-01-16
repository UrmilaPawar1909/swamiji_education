import React from 'react';
import './Aboutus.css';
import Img from './AboutImg/sklogo.jpeg'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Aboutus() {
  return (
    <>
    <Navbar/>
    <div>Aboutus</div>
    <h1>SK Education & Investment Hub...🎯</h1>
    <img src={Img} class="Skimg" />
     <Footer/>
    </>
   
  )
}

export default Aboutus