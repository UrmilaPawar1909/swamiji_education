import React from 'react';
import './Contactus.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import StockImg1 from '../Home/Img/stockmarketimg1.jpg';      
import LocationImg from './img/location-img.jpg'  ;
import GmailImg from './img/gmail.png';
import ContactImg from './img/contact.png';
import From  from '../../components/Form/From';
 
function Contactus(){
  return (
  <>
    <Navbar />

      <h2 className='main-heading mt-4 '> <b> Contact Details☎ </b></h2>
      <hr/>
      <div className='contact-container'>
      <div class="row">
        <div class="col-md-12 d-md-flex mt-2 justify-content-center ">
          <div class="col-md-5 mt-md-5 ms-4">
            <h1 class="fw-bolder fs-1 ">Get In Touch </h1>
            <p className='mt-4 text-secondary'> <b>Have in query? or want to know more? <br/> Contact us and we will be happy to help...!</b></p>
            <hr/>
            <div className='location-container mt-4'>
              <div className='location-logo'>
                <img src={LocationImg} width={70} className='image' />
              </div>
              <div className='location-description'>
                <p className='address-title fs-2 text-danger mt-2'>  ● <b>Our Address</b></p>
                <p className='fs-5 text-primary '> Unit 421, 4th floor, Goodwill Square Mall, Dhanori,Pune</p>
              </div>
            </div>
            <div className='email-container mt-4 '>
              <div className='email-logo'>
                <img src={GmailImg} width={70} className='image'/>
              </div>
              <div className='email-description'>
                <p className='email-title fs-2 text-danger mt-2'>  ● <b> E-mail</b></p>
                <p><a className='fs-5 design-text'> skeducationandinvestmenthub82@gmail.com </a></p>
              </div>
            </div>
            <div className='contact-container mt-4'>
              <div className='contact-logo'>
                <img src={ContactImg} width={70} className='image'/>
              </div>
              <div className='contact-description'>
                <p className='contact-title fs-2 text-danger mt-2'>  ● <b>Contact</b>  </p>
                <a className='fs-5 design-text'> +91-9226985252 </a>
              </div>
            </div>
          </div>

          

            
                <From/>

        </div>
        <hr className='mt-3' />
      </div>

    </div>
    <Footer />

  </>
  )
}



export default Contactus