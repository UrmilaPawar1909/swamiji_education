import React from 'react';
import './Openademataccount.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from './Demetimage/demethome.png';
import DemetImg1 from './Demetimage/demet-horizontal.jpg';
import From from '../../components/Form/From';

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
                <From/>

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