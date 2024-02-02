import "./Navbar.css"
import { Link } from "react-router-dom";
import img1 from "./sklogo.jpeg"

export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg mt-0">
            <div className="container-fluid">



                <Link className="navbar-brand" to="/"><img className="nav-brand-img brand-logo " src={img1} /></Link>


                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2  my-lg-0" >
                        <li className="nav-item fw-medium ">
                            <Link className="nav-link nav-menu fs-4 ms-3" to="/">Home</Link>
                        </li>
                        <li className="nav-item fw-medium">
                            <Link className="nav-link nav-menu fs-4 ms-3" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item fw-medium">
                            <Link className="nav-link nav-menu fs-4 ms-3" to="/training">Training</Link>
                        </li>
                        <li className="nav-item fw-medium">
                            <Link className="nav-link nav-menu fs-4 ms-3" to="/opendemataccount">Open a Demat Account</Link>
                        </li>
                        <li className="nav-item fw-medium">
                            <Link className="nav-link nav-menu fs-4 ms-3" to="/review">Review</Link>
                        </li>
                        <li className="nav-item fw-medium">
                            <Link className="nav-link nav-menu fs-4 ms-3" to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item fw-medium">
                            <Link className="nav-link nav-menu fs-4 ms-3" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>


            </div>
        
        </nav >
    
    )
}