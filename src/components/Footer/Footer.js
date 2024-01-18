import "./Footer.css"
import { Link } from 'react-router-dom'
import showToast from 'crunchy-toast'
import MapImg from "./Img/google-maps.png"
import GmailImg from "./Img/gmail (1).png"
import ContactImg from "./Img/telephone-call.png"



function Footer()
{
  
  return(

    <>
    <footer className="mainfooter footer" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <p className="text-center">&copy; 2024, SK Education & Investment Hub. All Rghts Reserved. </p>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">
                <a className="ms-1">Disclamer<span className="ms-1">|</span></a>
                <a className="ms-1">Terms and condition<span className="ms-1">|</span></a>
                <a className="ms-1">Cancellation<span className="ms-1">|</span></a>
                <a className="ms-1">Refund Policy<span className="ms-1">|</span></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    </>
  )
  
}

export default Footer
          