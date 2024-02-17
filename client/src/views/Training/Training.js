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
        <p>Experiance is not necessary. Even if you have never bought a stock before, you will learn the best way to trade and invest in the stock market with as little risk as possible. </p>
      </div>
      <div class="row">
            <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
                
                <div class="col-md-5 ">

                    <img 
                        class="ms-md-5 d-block justify-content-center h-md-100 w-75 offset-1"/>
                </div>
                <div class="col-md-5 mt-md-5 ms-4">
                    <h1 class="fw-bolder fs-1 ">A complete Trading course <br/></h1>
                    <p> Save your favourites easily and always have something to watch.</p>

                </div>

            </div>
        
        </div>
        </div>
    <Footer/>
    </>
  )
}

export default Training