import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import StockImg1 from './Img/stockmarketimg1.jpg';
import StockImg2 from '../Openademataccount/Demetimage/demet-account 1024x513.jpg';
import StockImg3 from '../Openademataccount/Demetimage/demet.jpeg';
import DemetImg from '../Openademataccount/Demetimage/homedemetmain.jpg';
import DemetHorizontal from '../Openademataccount/Demetimage/demetsmallimage.jpg';
import demet1 from '../Openademataccount/Demetimage/33.jpg'

function Home() {
  return (
    <>
      <Navbar />
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={demet1}  className='d-block w-100 h-400'/>
    </div>
    <div class="carousel-item">
      <img src={StockImg2} className='d-block w-100 h-400'/>
    </div>
    <div class="carousel-item">
      <img src={StockImg3} className='d-block w-100 h-400 '/>
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
<div>

        <h1 className='event-heading '>Welcome to Swamiji Education & Investment Hub...!<br />.......</h1>
        <div class="row">
            <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
                <div class="col-md-5 mt-md-5 ms-4">
                    <h1 class="fw-bolder fs-1 ">Download your shows <br/>to watch offline</h1>
                    <p> Save your favourites easily and always have something to watch.</p>

                </div>
                <div class="col-md-5 ">

                    <img src={StockImg1}
                        class="ms-md-5 d-block justify-content-center h-md-100 w-75 offset-1"/>


                </div>

            </div>
            <hr className='mt-3'/>
        </div>
        <div class="row">
            <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
                
                <div class="col-md-5 ">

                    <img src={StockImg1}
                        class="ms-md-5 d-block justify-content-center h-md-100 w-75 offset-1"/>


                </div>
                <div class="col-md-5 mt-md-5 ms-4">
                    <h1 class="fw-bolder fs-1 ">Download your shows <br/>to watch offline</h1>
                    <p> Save your favourites easily and always have something to watch.</p>

                </div>

            </div>
        
        </div>
        
        <div className='row mt-5 shadow-lg' >
          <img src={DemetImg} className='object-fit-fill border rounded  '/>
      </div>
      <p class="fs-1 text-dark text-center pt-2 fm">Reviews...</p>


      </div>

      <Footer />
    </>
  )
}

export default Home