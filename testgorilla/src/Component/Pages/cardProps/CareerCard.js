import React from 'react'


const CareerCard = (props) => {
  return (
    <div>
      <div className='card'>
          <div className='card-body careercardstyl'>
              <h4>{props.name}</h4>
              <p><i class="fas fa-building"></i> {props.content}</p>
              <p><i class="fas fa-book-open"></i> {props.para}</p>
              <div className='text-right'>
              <button className='btn careercardbtncre text-left'>Details</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default CareerCard
