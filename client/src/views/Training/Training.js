import React from 'react';
import './Training.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Training() {
  return (
    <>
    <Navbar/>
    <div className='training-container'>
      <h1 className='main-title'>Paid Training<br/> ........ </h1>
      <div className='about-course'>
        <h3 className='sub-title'>Who can take this course?</h3>
        <ul>
        <li className='mt-4 ms-3'>Students</li>
        <li className='ms-3'>Traders/ Investor</li>
        <li className='ms-3'>Dealers</li>
        <li className='ms-3'>Businessmen & Women</li>
        <li className='ms-3'>Employees Working In Stock Market And Financial Fields</li>
        <li className='ms-3'>In fact, anyone who is passionate about share market.</li>
        </ul>
      </div>
        </div>
    <Footer/>
    </>
  )
}

export default Training