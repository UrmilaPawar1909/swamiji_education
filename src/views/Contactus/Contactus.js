import React from 'react';
import './Contactus.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import StockImg1 from '../Home/Img/stockmarketimg1.jpg';
import LocationImg from './img/location-img.jpg';

function Contactus() {
  return (<>
    <Navbar />
    <div className='contact-container'>
      <h2 className='main-heading'>Contact Details<br />.......</h2>
      <div class="row">
        <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
          <div class="col-md-5 mt-md-5 ms-4">
            <h1 class="fw-bolder fs-1 ">Get In Touch </h1>
            <p> Have in query? or want to know more? <br />Contact us and we will be happy to help.</p>
            <div className='location-container'>
              <div className='location-logo'>
                <img src={LocationImg} width={70}/>
              </div>
              <div className='location-description'>
                <p className='address-title'>Our Address</p>
                <p>Unit 421, 4th floor, Goodwill Square Mall, Dhanori, Pune</p>
              </div>
            </div>
          </div>

          <div class="col-md-5 ">

            <img src={StockImg1}
              class="ms-md-5 d-block justify-content-center h-md-100 w-75 offset-1" />


          </div>

        </div>
        <hr className='mt-3' />
      </div>

    </div>
    <Footer />

  </>
  )

}

export default Contactus