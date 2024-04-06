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
                <p class="text-uppercase account-text fs-3 fw-bold"> what is a demat account</p>
              <br/>
              <p fs-5 account-second-text  >A Demat (short for Dematerialized) is an electronic account used to hold and manage investments like Stocks, Bonds, Mutual Funds in a digital format. Just as you need to have a bank account to deposit your money and earn interest, you need to open a Demat account to buy or sell financial securities such as Stocks, Mutual Funds, Equity Traded Funds (ETFs), SGBs and more. When you buy stocks or shares, they will get credited to your account.

When you sell the stocks or shares you have purchased, they will get debited from your account.<br/>

By opening a Demat account, you do not need to transfer your share certificates physically to the buyer. You need to link your bank account with your Demat account, through which you can easily buy and sell shares. It does not only save your time, but it also reduces the transaction cost.</p>
    
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