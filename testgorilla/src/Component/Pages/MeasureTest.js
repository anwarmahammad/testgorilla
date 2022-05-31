import React from 'react'
import './MeasureTest.css'
import SpecialCardsProps from './SpecialCardsProps'
import TestProps from './TestProps'


const MeasureTest = () => {
  return (
   <div>
    <div className='text-center'>
        <h1 className='test-measure-heading'>Measure your candidates<br/> on job skills, personality and fit</h1>
    </div>
     <div className='container'>
     <div className='row input-container'>
         <div className='col-sm-12 col-md-6'>
         <input type="text" class="icon-rtl input-field-left" placeholder="Search anything here"></input>
         
         </div>
         <div className='col-sm-12 ml-auto col-md-6'>
         <select className='input-field-right'>
           <option>Job role</option>
           <option>Full Stack Developer</option>
           <option>Frontend Developer</option>
           <option>Backend Developer</option>
           <option>.Net Developer</option>
           <option>Reactjs Developer</option>
           <option>Node.js Developer</option>
         </select>

         <select className='input-field-right'>
           <option>Test type</option>
           <option>Cognitive ability</option>
           <option>Language</option>
           <option>Personality & culture</option>
           <option>Programming skills</option>
           <option>Role specific skills</option>
           <option>Situation judgement</option>
         </select>
        
         </div>
        
     </div>
     </div>
     <SpecialCardsProps/>
     <TestProps/>
   </div>
  )
}

export default MeasureTest