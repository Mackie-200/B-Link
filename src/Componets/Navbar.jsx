import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../Componets/pictures/built.png';

import { MdAccountCircle } from "react-icons/md";
import "./Navbar.css";
import { FaBars, FaSearch } from 'react-icons/fa';

const NavBar = () => {
    const [hamon, setHam] = useState(false);
    const [active, setactive] = useState(true);

    return (
        <div>
            {/* Phone Navbar */}
            <div className="phonenav">
                <div className="top">
                    <div className="logo">
                        <div className="logoitems">
                            <img src={logo} alt="Built Logo" />
                        </div>
                    </div>
                    <FaBars
                        onClick={() => setHam(!hamon)}
                        style={{ fontSize: "24px", cursor: "pointer" }}
                    />
                </div>
                <div className={!hamon ? "phoneLinks" : "phoneLinks showLinks"}>
                    <Link to="/" style={{color: active ? "orange" : "black"}}>Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/companies">Companies</Link>
                    <Link to="/handyman">Handyman</Link>
                </div>
            </div>

            
            <div className="largeLaptops">
                <div className="logoitems">
                    <img src={logo} alt="Built Logo" />
                </div>
                <div className="links">
                    <Link style={{color: active ? "orange" : "black"}} to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/companies">Companies</Link>
                    <Link to="/handyman">Handyman</Link>
                </div>
                <div className="social-icons">
                   
                  
                  
                
                </div>
                <div className="search-profile-group">
                    <div className="search">
                      <FaSearch style={{ fontSize: "24px", color: "#E1306C", cursor: "pointer" }} />
                        <input type="search" placeholder="Search" />
                    </div>
                    <MdAccountCircle
                        className="profile-icon"
                        style={{ fontSize: "24px", color: "#555", cursor: "pointer" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default NavBar;


