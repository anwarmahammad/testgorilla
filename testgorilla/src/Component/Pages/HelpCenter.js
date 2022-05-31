import React from 'react'

const HelpCenter = () => {
  return (
    <div>
      <div className='overflow'>
         <section class="top-nav helpcentertopnav">
        <div className='text-dark'>
          Logo Here
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' for="menu-toggle">
        <div className='menu-button'></div>
      </label>
        <ul className="menu helpcentermenu">
          <li className='text-dark'>English</li>
          <li className='text-dark'>Login</li>
          <li className='text-dark'>Contact us</li>
        </ul>
      </section>
      <div className='head-input-container pb-5'>
      <div className='how-can-help-input-bg-container'>
          <h1 className='how-can-help-head'>How can we help you?</h1>
      </div>
      <div className='d-flex flex-row justify-content-center mb-3'>
          <input placeholder='Search for answers' className='bg-white input-field form-control'/>
      </div>
      </div>
      <div className='container pb-5'>
         <div className='row mt-5'>
            <div className='col-lg-4 ccc col-sm-12'>
                <div className='text-center shadow-box p-3 pt-5 mt-3 bg-white'>
                <div className='mt-2'>
                   <img className='card-icon' src='https://help.testgorilla.com/hubfs/User,Profile.5-1.png'/>
                </div>
                <h1 className='card-heading'>For Customers</h1>
                <p className='card-description'>Everything about making assessments, inviting candidates, reviewing results, account and billing changes, ATS integrations, and free trials</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-12'>
                <div className='text-center shadow-box p-3 pt-5 mt-3 bg-white'>
                <div className='mt-2'>
                   <img className='card-icon' src='https://help.testgorilla.com/hubfs/User,Profile.5-1.png'/>
                </div>
                <h1 className='card-heading'>For Customers</h1>
                <p className='card-description'>Everything about making assessments, inviting candidates, reviewing results, account and billing changes, ATS integrations, and free trials</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-12'>
                <div className='text-center shadow-box p-3 pt-5 mt-3 bg-white'>
                <div className='mt-2'>
                   <img className='card-icon' src='https://help.testgorilla.com/hubfs/User,Profile.5-1.png'/>
                </div>
                <h1 className='card-heading'>For Customers</h1>
                <p className='card-description'>Everything about making assessments, inviting candidates, reviewing results, account and billing changes, ATS integrations, and free trials</p>
                </div>
            </div>
         </div>
      </div>
 <hr></hr>
      <div className='container-fluid bg-white mt-5'>
          <div className='row'>
              <div className='col-4 text-center'>
                  <p>Help Center</p>
              </div>
              <div className='col-4 text-center'>
                  <p className='text-success'>Log in</p>
              </div>
              <div className='col-4 text-center'>
                  <p className='text-success'>Contact us</p>
              </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default HelpCenter
