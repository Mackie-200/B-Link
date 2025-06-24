import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Companies from './pages/Companies';
import Handyman from './pages/Handyman';
import AboutUs from './pages/AboutUs';
import NavBar from './Componets/NavBar';
import Footer from './Componets/footer';

const App = () => {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/companies" element={<Companies/>}></Route>
        <Route path="/handyman" element={<Handyman/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
