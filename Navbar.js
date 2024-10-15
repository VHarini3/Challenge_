import './Navbar.css';  
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home" target="_blank" rel="noopener noreferrer">Home</a></li>
                <li><a href="#about" target="_blank" rel="noopener noreferrer">About</a></li>
                <li><a href="#services" target="_blank" rel="noopener noreferrer">Services</a></li>
                <li><a href="#contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;


