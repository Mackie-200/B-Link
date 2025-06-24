import React from 'react'
import {Link } from "react-router-dom"
import { FaBars, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="flex items">
            <div className="row">
                <div className="col-sm-6 col-lg-3 col-md-3  centerItems">
                    <div className="footerlogo">
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 col-md-3  centerItems">
                 <div className="footerlinks">
                  <h4>Quick Links</h4>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Handyman</Link>
                    <Link>Companies</Link>
                 </div>
                </div>
                <div className="col-sm-6 col-lg-3 col-md-3  centerItems">
              <div className="footerlinks">
                  <h4>Handyman</h4>
                    <Link>Plumber</Link>
                    <Link>Eletrician</Link>
                    <Link>Builder</Link>
                 </div>
                </div>
                <div className="col-sm-6 col-lg-3 col-md-3  centerItems">
               <div className="footerlinks">
                  <h4>Companies</h4>
                    <Link>Construction Companies</Link>
                    <Link>Electrical Specialists</Link>
                    <Link>Plumber Specialists</Link>
                    <Link>Builder Specialists</Link>
                 </div>
                </div>
            </div>
        </div>
        <div className="copyright row">
         <div className="col-md-4">
           <p>www.buildlink@gmail.com</p>
         </div>
         <div className="col-md-4 socialsFooter">
     <div className="socialIcon">
      <p> <a href="https://linkedin.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin style={{ fontSize: "24px", color: "#0077b5", cursor: "pointer" }} />
                    </a></p>
       <p>linkedin</p>
     </div>
      <div className="socialIcon">
      <p>  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter style={{ fontSize: "24px", color: "#1DA1F2", cursor: "pointer" }} />
                    </a></p>
       <p>instagram</p>
     </div>
     <div className="socialIcon">
      <p>    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram style={{ fontSize: "24px", color: "#E1306C", cursor: "pointer" }} />
                    </a></p>
       <p>twitter</p>
     </div>
    <div className="socialIcon">
      <p>  <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook style={{ fontSize: "24px", color: "#1877f2", cursor: "pointer" }} />
                    </a></p>
       <p>facebook</p>
     </div>
         </div>
         <div className="col-md-4"></div>
        </div>
      
    </div>
  )
}

export default Footer
