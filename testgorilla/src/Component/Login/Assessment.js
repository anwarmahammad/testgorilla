import React from 'react'
import ReactPlayer from 'react-player'

const Assessment = () => {
  return (
    <div>
      <div className='container'>
  <div className='row mt-5'>
    <div className='col-sm-6'>
      <h3 className='navhtagtext'>My Assessments</h3>
      <button className='mt-5 btn-lg lgactivehmbtn'>Active</button>
      <button className=' mt-5  btn-lg lgactivehmbtn2'>Archived</button>
    </div>
    <div className='col-sm-6 text-right'>
      <button className=' btn-lg lgactivehmbtn3'><i class="fas fa-plus-circle"></i> Create new Assessments</button>
    </div>
  </div>
  <div className='row mt-5'>
      <div className='col-sm-2'></div>
      <div className='col-sm-8'>
          <ReactPlayer width='100%'  url='https://www.youtube.com/watch?v=7sDY4m8KNLc' 
          light='https://app.testgorilla.com/assets/product_tour_thumbnail.png' />
      </div>
      <div className='col-sm-2'></div>
  </div>
</div>

    </div>
  )
}

export default Assessment
