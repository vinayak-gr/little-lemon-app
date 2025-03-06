import React, { useState } from "react";
import logo from "./assets/logo.jpg"
import "./App.css";

function Nav() {
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return( 
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/"><img src={logo} alt="logo" className="logo" width="150px"></img></a>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservation">Reservation</a></li>
                <li><a href="/orderOnline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        
        </nav>
    );
  }
  
  export default Nav;