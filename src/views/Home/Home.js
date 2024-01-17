import React from 'react';
import './Home.css';
import Navbar  from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <div className='home-container' >
      <h1 className='heading-1'>Home</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Home