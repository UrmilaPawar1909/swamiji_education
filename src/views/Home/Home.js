import React from 'react';
import './Home.css';
import Navbar  from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div>
    <Navbar/>
    <div className='home-container' >Home</div>
    <Footer/>
    </div>
  )
}

export default Home