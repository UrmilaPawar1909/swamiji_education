import React from 'react';
import './Openademataccount.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from './Demetimage/Dementaccount.jpeg';

function Openademataccount() {
  return (
    <>
    <Navbar/>
    <div className='dement-container'>
      <img src={Image} className='demet-image'/>
    </div>
    <Footer/>
    </>
  )
}

export default Openademataccount