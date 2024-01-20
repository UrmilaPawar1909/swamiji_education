import React from 'react';
import './Openademataccount.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from './Demetimage/demethome.png';
import DemetImg1 from './Demetimage/bgremove.png'

function Openademataccount() {
  return (
    <>
    <Navbar/>
    <div class="row">
            <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
                
                <div class="col-md-5 ">

                    <img src={DemetImg1}
                        class="ms-md-5 d-block justify-content-center h-md-100 w-75 offset-1"/>


                </div>
                <div class="col-md-5  ms-4">
                <div className='open-account-container'>
                  <h1 className='account-title'>Open a Demet Account</h1>
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
            <hr className='mt-3'/>
        </div>
    <div className='row'>
          <img src={Image} className='img-fluid  max-width:100% height:auto' alt='Responsive image' />
      </div>

    <Footer/>
    </>
  )
}

export default Openademataccount