import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'



const Navbarlogin = () => {
 
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <a class="navbar-brand lgnavhead" href="#">
          L M S
          </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link lgnavitem" href="#">
                My Assessments <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link lgnavitem" href="#">
                My Candidates
              </a>
            </li>
            <li class="nav-item  ">
              <a class="nav-link lgnavitem" href="#">
                Tests
              </a>
            </li>
            <button className="btn btnnavlg">Talk to product advisor </button>
            <Link to=''> <button className="btn btnnavlg2">Upgrade Now</button></Link>
            <button className="btn ">Login</button>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbarlogin
