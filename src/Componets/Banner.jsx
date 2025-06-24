import React from 'react'
import "./Banner.css"
const Banner = () => {
  return (
   <div className="banner">
   <div className="overlay">
     <h1>Get <span>Quality</span> Service from <span>verified</span> Experts!</h1>
    <p>"Welcome to BuildLink! We turn your vision into reality  with our skilled handyman services.From quick repairs to full renovations ,our experienced team prioritizes quality and customer satisfaction.Let us handle the heavy lifting-contact us today for a free consultation!"</p>
    <div className="orange">
        <button className="btn">
           Connect
        </button>
        <p> -></p>
    </div>
   </div>
    
   </div>
  )
}

export default Banner
