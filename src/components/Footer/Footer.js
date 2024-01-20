import "./Footer.css";
import { Link } from 'react-router-dom';
import showToast from 'crunchy-toast';
import GmailImg from "./Img/gmail (1).png";

import  Instalogo from "./Img/instagram (3).png";
import Facebook from "./Img/facebook.png";
import Location from "./Img/google-maps.png";
import Telegram from "./Img/telegram.png";




function Footer()
{
  
  return(

    <>
    <footer className="mainfooter footer" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
        <b> <p className="text-center fs-5 ">&copy; 2024, SK Education & Investment Hub. All Rights Reserved. </p></b>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">
                <b>
                <a className="ms-1 fs-5">Disclamer<span className="ms-1">|</span></a>
                <a className="ms-1 fs-5">Terms and condition<span className="ms-1">|</span></a>
                <a className="ms-1 fs-5">Cancellation<span className="ms-1">|</span></a>
                <a className="ms-1 fs-5">Refund Policy<span className="ms-1">|</span></a>
                </b>
              </p>
            </div>
          </div>
          <section id="social-media">
          
          <div class="social-icons ">
            <a href="#"><img src={GmailImg}/></a>
            <a href="https://www.instagram.com/sk_education_82?igsh=eXdkYm1vczdsYTRs"><img src={Instalogo}/></a>
            <a href="#"><img src={Facebook}/></a>
            <a href="#"><img src={Location}/></a>
            <a href="#"><img src={Telegram}/></a>
           
            </div>
            
          </section>
        </div>
      </div>
    </footer>
    
    </>
  )
  
}

export default Footer
          