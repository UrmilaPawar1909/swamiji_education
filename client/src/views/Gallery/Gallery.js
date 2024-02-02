import React from 'react';
import './Gallery.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
function Gallery() {
  return (
    <>
    <Navbar/>
    <div className='gallery-container'>
      <h1 className='text-heading mt-3'>Gallery📸</h1>
      <hr/>
      </div>
    <Footer/>
    </>
  )
}

export default Gallery