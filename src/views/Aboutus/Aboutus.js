import React from 'react';
import './Aboutus.css';
import Img from './AboutImg/sklogo.jpeg'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Aboutus() {
  return (
    <>
    <Navbar/>
    <div className='about-container'>
    <h1 className='skheading'>SK Education & Investment Hub...🎯</h1>
    <img src={Img} className='skimage' />
    <div className='main-container'>
     <div className='container-child'>
      <img src={Img} className='child-container-image'/>
     </div>
     <div className='container-child'>
      <h1 className='heading-2'> Welcome to SK Education & Investment Hub...🤝!!</h1>
      <p className='heading-info'>As the CEO at ‘Power of Stocks’ Subasish oversees the business, and overall development. He also handles strategic planning, marketing, finance management, and digital growth. 
Prior to his entrepreneurial debut, he was an equity research analyst and an active trader covering all aspects of market, in his previous role. </p>
     </div>
    </div>
    <div className='main-container'>
     <div className='container-child'>
      <h1 className='heading-2'>Our Expert...!</h1>
      <p className='heading-info'>As the CEO at ‘Power of Stocks’ Subasish oversees the business, and overall development. He also handles strategic planning, marketing, finance management, and digital growth. 
Prior to his entrepreneurial debut, he was an equity research analyst and an active trader covering all aspects of market, in his previous role. </p>
<button className='button'> Read More </button>
     </div>
     <div className='container-child'>
      <img src={Img} className='child-container-image'/>
     </div>
    </div>
    </div>
     <Footer/>
    </>
   
  )
}

export default Aboutus