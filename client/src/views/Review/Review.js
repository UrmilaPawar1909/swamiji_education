import React from 'react';
import './Review.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
function Review() {
  return (
    <>
    <Navbar/>
    <div className='review-container'>
     <h1 className='heading-text mt-3'>Reviews⚜ </h1>
     <hr/>
      </div>
  <Footer/>
  </>
  )
}

export default Review