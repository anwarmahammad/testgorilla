import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  
  return (
    <div>
      
           <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <Link to='/' onClick={scrollToTop} className="navbar-brand navk1" >L M S</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item ">
        <Link to='/product'  onClick={scrollToTop} className="nav-link navk2"  >Product tour <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link to='/science'  onClick={scrollToTop} className="nav-link  navk2" >Science</Link>
      </li>
      <li className="nav-item ">
        <Link to='/test'  onClick={scrollToTop} className="nav-link navk2" >Test library</Link>
      </li><li className="nav-item " >
        <Link to='/pricing'  onClick={scrollToTop} className="nav-link navk2"  >Pricing</Link>
      </li><li className="nav-item ">
        <Link to='/login'   onClick={scrollToTop} className="nav-link navk2" >Login</Link>
      </li>
      <li className="nav-item ">
        <Link to='/request'  onClick={scrollToTop} className="nav-link  navbtn1" >Request Demo</Link>
      </li>
      <Link to='/signup'  onClick={scrollToTop} ><button className='btn  navbtn' > Sign up free  <i class="fas fa-angle-right "></i> </button></Link>
    </ul>
   
  </div>
</nav>
    </div>
  )
}

export default Navbar
