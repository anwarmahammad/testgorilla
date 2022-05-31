import React from 'react'
import './Home.css'
import WatchVideo from './WatchVideo'
import Qulity from './Qulity'

const Home = () => {
  return (
    <div>
     <div className='main-div '>
    <div className='row Homerow'>
        <div className='col-sm-12 col-md-6 test-gorilla-works-container p-5 '>
            <h1 className='test-gorilla-heading'>TestGorilla works.</h1>
            <h1 className='test-gorilla-heading'>CVs don't.</h1>
            <p className='our-screening-para mt-3'>Our screening tests identify the best candidates and make your hiring decisions faster, easier, and bias-free.</p>
            <button className='see-pricing-button btn-lg  ' id='sbtn'>See Pricing</button>
            <button className='request-demo-button btn-lg '>Request demo</button>
            <div className='d-flex flex-row mt-3'>
                <div>
                    <img className='img-fluid' src='https://www.testgorilla.com/wp-content/uploads/2022/03/G2_TestGorilla.png.webp'/>
                </div>
                <div>
                  <p className='our-screening-para'>Rated #1 in pre-employment testing Top 5 in fastest growing software</p>
                </div>
            </div>
        </div>

        <div className='col-sm-12 col-md-6 sophia-bg'>
            <img className='sophia-img' src='https://www.testgorilla.com/wp-content/uploads/2020/05/il1@2x-min-e1631817056302.png.webp'/>
        </div>
    </div>
    <div className='companies-container p-5'>
       <h1 className='five-thousand-companies-heading'>Join the 5000+ companies replacing CVs with TestGorilla</h1>
     <div className='container'>
     <div className='row'>
         <div className='col-md-2 text-center m-auto'>
            <img className='company-logo img-fluid' src='\img\Majorel_Logo.png'/>
         </div>
         <div className='col-md-2 text-center m-auto'>
            <img className='company-logo img-fluid' src='\img\HM_logo.png'/>
         </div>
         <div className='col-md-2 text-center m-auto'>
            <img className='company-logo img-fluid' src='\img\technicolor-logo.png'/>
         </div>
         <div className='col-md-2 text-center m-auto'>
            <img className='company-logo img-fluid' src='\img\HM_logo.png'/>
         </div>
         <div className='col-md-2 text-center m-auto'>
            <img className='company-logo img-fluid' src='\img\technicolor-logo.png'/>
         </div>
      </div>
     </div>
    </div>
    <div className='row crystal-ball-bg p-5'>
      <div className='col-md-6 col-sm-12'>
        <img className='w-100' src='\img\ill2_new@4x-e1631817152428.png'/>
      </div>
      <div className='col-md-6 col-sm-12'>
          <h1 className='crystal-bal-heading'>A crystal ball for job success.</h1>
          <p className='crystal-bal-para'>Predict real-world job performance using our library of 213 scientifically validated tests.</p>
          <p className='crystal-bal-para'>Test candidates for job-specific skills like coding or digital marketing, as well as more general skills like critical thinking.</p>
          <p className='crystal-bal-para'>Our unique personality and value tests allow you to get to know your applicants as real people – not just pieces of paper.</p>
          <button className='crystal-button btn-lg'>See tests</button>
      </div>
    </div>
    </div>
    <Qulity/>
    <WatchVideo/>
    </div>
  )
}

export default Home
