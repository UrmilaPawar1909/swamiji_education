import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import StockImg1 from './Img/stockmarketimg1.jpg';
import StockImg2 from './Img/stockmarketimg2.webp';
import StockImg3 from './Img/stockmarketimg3.jpeg';

function Home() {
  return (
    <>
      <Navbar />
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={StockImg1} class="d-block  w-100"  />
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <img src={StockImg2} class="d-block w-100" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={StockImg3} class="d-block w-100" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
      </div>

      <Footer />
    </>
  )
}

export default Home