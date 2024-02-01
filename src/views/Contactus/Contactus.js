import React from 'react';
import './Contactus.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import StockImg1 from '../Home/Img/stockmarketimg1.jpg';
import LocationImg from './img/location-img.jpg';
import GmailImg from './img/gmail.png';
import ContactImg from './img/contact.png';

function Contactus() {
  return (<>
    <Navbar />
    <div className='contact-container'>
      <h2 className='main-heading '>Contact Details☎</h2>
      <hr/>
      <div class="row">
        <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
          <div class="col-md-5 mt-md-5 ms-4">
            <h1 class="fw-bolder fs-1 ">Get In Touch </h1>
            <p> Have in query? or want to know more? <br />Contact us and we will be happy to help.</p>
            <div className='location-container'>
              <div className='location-logo'>
                <img src={LocationImg} width={70} className='image'/>
              </div>
              <div className='location-description'>
                <p className='address-title fs-2 text-danger'>Our Address</p>
                <p>Unit 421, 4th floor, Goodwill Square Mall, Dhanori, Pune</p>
              </div>
            </div>
            <div className='email-container '>
              <div className='email-logo'>
                <img src={GmailImg} width={70} className='image'/>
              </div>
              <div className='email-description'>
                <p className='email-title fs-2 text-danger'>E-mail</p>
                <a> skeducationandinvestmenthub82@gmail.com </a>
              </div>
            </div>
            <div className='contact-container '>
              <div className='contact-logo'>
                <img src={ContactImg} width={70} className='image'/>
              </div>
              <div className='contact-description'>
                <p className='contact-title fs-2 text-danger'>Contact </p>
                <a> 9226985252 </a>
              </div>
            </div>
          </div>

          <div class="col-md-5 form-container ">

          <div class="col-md-5  ms-4">
                <div className='contact-form-container'>
                  <h1 className='form-title'>Ready to get started?</h1>
                  <div className='input-container'>
                    <label className='input-label'>Name:</label>
                    <input type='text'
                    placeholder='Enter Your Name'
                    className='input-field'/>

                  </div>
                  <div className='input-container'>
                    <label className='input-label'>Mobile No:</label>
                    <input type='text'
                    placeholder='Enter Your Mobile No.'
                    className='input-field'/>

                  </div>
                  <div className='input-container'>
                    <label className='input-label'>Email</label>
                    <input type='email'
                    placeholder='Enter Your Email'
                    className='input-field'/>

                  </div>
                  <button type='button' className='btn-submit'>Submit</button>

                </div>
                </div>
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