import React from 'react'
import './SpecialCardsTest.css'

const SpecialCardsTest = (props) => {
  return (
    <div className='shadow'>
    <div className="cardBgColor p-3">
    <i class="fa fa-users user-icon text-white">  {props.userTitle}</i>
    </div>
    <div>
        <div className='content-div'>
           <h3 className='special-card-heading pt-3'>{props.head}</h3>
           <p className='special-card-para pt-3'>{props.description}</p>
           <div className='special-clock-btn-container pb-3 pt-3'>
             <p><i class="fa fa-stopwatch special-stopwatch"></i>30 min</p>
             <button className='special-button'>Details</button>
           </div>
        </div>
    </div>
    </div>
  )
}

export default SpecialCardsTest