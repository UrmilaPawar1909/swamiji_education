import "./Navbar.css"
import { Link } from "react-router-dom";
import img1 from "./sklogo.jpeg"

export default function Navbar() {

    return (
        <div className="navbar">
            
            <img src={img1} className="brand-logo"/>
            <a className="nav-menu" to="/">Home</a>

            <a className="nav-menu" to="/Hotel">About Us</a>
            <a className="nav-menu" to="/flight">Training</a>
            <a className="nav-menu" to="/attraction">Open a Demat Account</a>
            <a className="nav-menu" to="/CarRental">Review</a>
            <a className="nav-menu" to="/login">Gallery</a>
            <a className="nav-menu" to="/register">Contact Us</a>
           

        </div>
    )
}