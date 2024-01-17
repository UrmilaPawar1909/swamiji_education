import "./Navbar.css"
import { Link } from "react-router-dom";
import img1 from "./sklogo.jpeg"

export default function Navbar() {

    return (

         <nav className="Navbar navbar-expand-lg mt-0">
            <div className="container-fluid">



    <div className="navbar">
            
            <img src={img1} className="brand-logo"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item fw-medium ">
            <Link className="nav-link fs-4 ms-3" to="/">Home</Link>
            </li>
            <li className="nav-item fw-medium">
            <Link className="nav-link fs-4 ms-3" to="/about">About Us</Link>
            </li>
            <li className="nav-item fw-medium">
            <Link className="nav-link fs-4 ms-3" to="/training">Training</Link>
            </li>
            <li className="nav-item fw-medium">
            <Link className="nav-link fs-4 ms-3" to="/opendemataccount">Open a Demat Account</Link>
            </li>
            <li className="nav-item fw-medium">
            <Link className="nav-link fs-4 ms-3" to="/review">Review</Link>
            </li>
            <li className="nav-item fw-medium">
            <Link className="nav-link fs-4 ms-3" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item fw-medium">
            <Link className="nav-link fs-4 ms-3" to="/contact">Contact Us</Link>
            </li>
            </ul>
            </div>
           

        </div>
        </div>
        </nav>
    
    )
}