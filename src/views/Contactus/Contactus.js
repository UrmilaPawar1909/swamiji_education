import React from 'react';
import './Contactus.css';
import Navbar  from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Contactus() {
  return (<>
  <Navbar/>
    <div className='contact-container'>
      <h2>Contact Details</h2>
      <p>Get In Touch</p>
    </div>
    <Footer/>

    </>
  )
  
}

export default Contactus