import "./Navbar.css"
import { Link } from "react-router-dom";
import img1 from "./sklogo.jpeg"

export default function Navbar() {

    return (
        <div className="navbar">
            
            <img src={img1} className="brand-logo"/>
            <Link className="nav-menu" to="/">Home</Link>

            <Link className="nav-menu" to="/about">About Us</Link>
            <Link className="nav-menu" to="/training">Training</Link>
            <Link className="nav-menu" to="/opendemataccount">Open a Demat Account</Link>
            <Link className="nav-menu" to="/review">Review</Link>
            <Link className="nav-menu" to="/gallery">Gallery</Link>
            <Link className="nav-menu" to="/contact">Contact Us</Link>
           

        </div>
    )
}