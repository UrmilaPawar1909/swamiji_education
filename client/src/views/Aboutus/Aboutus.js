import React from 'react';
import './Aboutus.css';
import Img from './AboutImg/sklogo.jpeg';
import Img1 from '../Home/Img/stockmarketimg1.jpg';
import Img2 from '../Openademataccount/Demetimage/Dementaccount.jpeg';
import Img3 from '../Home/Img/stockmarketimg3.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Aboutus() {
  return (
    <>
    <Navbar/>
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Img1}  className='d-block w-100 h-400'/>
    </div>
    <div class="carousel-item">
      <img src={Img2} className='d-block w-100 h-400'/>
    </div>
    <div class="carousel-item">
      <img src={Img1} className='d-block w-100 h-400 '/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <div className='about-container'>
    <h1 className='skheading'>SK Education & Investment Hub...🎯</h1>
   </div>
   <div class="row">
            <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
                
                <div class="col-md-5 ">

                    <img src={Img}
                        class="ms-md-5 d-block justify-content-center h-md-100 w-75 offset-1"/>


                </div>
                <div class="col-md-5 mt-md-5 ms-4">
                    <h1 class="fw-bolder fs-1 ">Download your shows <br/>to watch offline</h1>
                    <p> Save your favourites easily and always have something to watch.</p>

                </div>

            </div>
        
        </div>
        <hr/>
        <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
                <div class="col-md-5 mt-md-5 ms-4">
                    <h1 class="fw-bolder fs-1 ">Download your shows <br/>to watch offline</h1>
                    <p> Save your favourites easily and always have something to watch.</p>

                </div>
                <div class="col-md-5 ">

                    <img src={Img}
                        class="ms-md-5 d-block justify-content-center h-md-100 w-75 offset-1"/>


                </div>

            </div>
            <hr className='mt-3'/>
     <Footer/>
    </>
   
  )
}

export default Aboutus