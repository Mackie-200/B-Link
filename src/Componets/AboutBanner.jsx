import React from 'react'
import "./AboutBanner.css"
const  AboutBanner= () => {
  return (
   <div className="aboutbanner">
   <div className="overlay">
     <h1>Your <span>Trusted</span> Partner in <span>Quality</span> Construction!</h1>
    <p>"At BuildLink, we are passionate about transforming spaces and delivering quality craftsmanship. With a commitment to excellence and customer satisfaction, our journey began with a vision to provide reliable handyman services. Let us help you build your dreams!"</p>
    <div className="orange">
        <button className="btn">
           Get Started 
        </button>
        <p> -></p>
    </div>
   </div>
    
   </div>
  )
}

export default AboutBanner
