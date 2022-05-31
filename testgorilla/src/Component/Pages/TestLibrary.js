import React from 'react'
import './TestLibrary.css';

const TestLibrary = (props) => {
  return (
   
   <div className='shadow'>
   <div className='pt-5'>
   <div className='test-box-inner-div p-3 m-2 mt-3'>
       <h3 className='test-card-heading mt-5'>{props.title}</h3>
       <p className='test-card-para mt-3 mb-5'>{props.paragraph}</p>
       <div className='test-clock-btn-container'>
       <p><i class="fa fa-stopwatch test-stopwatch"></i>30 min</p>
       <button className='test-button'>Details</button>
       </div>
   </div>
   </div>
  </div>
  )
}

export default TestLibrary