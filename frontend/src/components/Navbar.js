import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to="">Home</Link></li>
                <li className="nav-item"><Link to="">Breakdowns</Link></li>
                <li className="nav-item"><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>    
    );
};

export default Navbar;