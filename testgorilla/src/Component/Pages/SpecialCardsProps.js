import React from 'react'
import SpecialCardsTest from './SpecialCardsTest'
import './SpecialCardsTest.css'

const SpecialCardsProps = () => {
  return (
    <div className='container'>
       <div className='row'>
           <div className='col-md-4 p-3'>
          <SpecialCardsTest
             userTitle="Popular"
             head="Culture Add"
             description="This culture add test assesses how a candidate’s values and behaviors align with your organization values and the behaviors that would make your ideal hire successful in a specific role, based on a customized survey you fill out."
          />
           </div>
           <div className='col-md-4 p-3'>
          <SpecialCardsTest
             userTitle="Popular"
             head="JavaScript (coding): entry-level algorithms"
             description="This coding test assesses a candidate's ability to program a small algorithm in JavaScript, testing their basic programming skills. This test will help you identify developers with the most essential JavaScript skills."
          />
           </div>
           <div className='col-md-4 p-3'>
          <SpecialCardsTest
             userTitle="Popular"
             head="Motivation"
             description="Rooted in Oldham & Hackman’s Job Characteristics Model, the job preferences test measures the extent to which your candidates' expectations align with your job offer, based on a customized survey that you and the candidate both fill out."
          />
           </div>
           <div className='col-md-4 p-3'>
          <SpecialCardsTest
          className="cardBgColor"
             userTitle="New Test"
             head="Warehouse Picker"
             description="This warehouse picker test evaluates a candidate’s ability to plan, execute, and verify warehouse picking activities. This screening test can ensure that you hire a warehouse picker able to perform duties reliably and accurately."
          />
           </div>
           <div className='col-md-4 p-3'>
          <SpecialCardsTest
             userTitle="New Test"
             head="Polish (proficient/C1)"
             description="The Polish (proficient/C1) test evaluates candidates’ knowledge of Polish language at the C1 level of the CEFR framework. This test will help you hire employees who can participate in demanding professional and social conversations in Polish."
          />
           </div>
           <div className='col-md-4 p-3'>
          <SpecialCardsTest
             userTitle="New Test"
             head="Account Management"
             description="This account management test evaluates a candidate’s ability to effectively serve and expand accounts. This test will help you hire account management experts who increase revenue while building and maintaining strategic relationships for your business."
          />
           </div>
       </div>
    </div>
  )
}

export default SpecialCardsProps