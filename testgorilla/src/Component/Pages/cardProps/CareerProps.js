import React, { useState } from 'react'
import CareerCard from './CareerCard'
import './Careercard.css'

const CareerProps = () => {
    const[flow,setFlow]=useState(false)
    const[flow1,setFlow1]=useState(true)

    const route = (e)=>{
        e.preventDefault ()
        setFlow(true)
        setFlow1(false)
    }
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-4">
            <CareerCard name="Financial Controller"
            content="General & administrative"
            para="100% Remote" />

          </div>
          <div className="col-sm-4 mb-5">
            <CareerCard name="Senior Frontend Engineer" 
            content="Engineering"
            para="100% Remote"/>
          </div>
          <div className="col-sm-4">
            <CareerCard name="Senior QA Engineer-autom" 
             content="Engineering"
             para="100% Remote"/>
          </div>
    
          <div className="col-sm-4">
            <CareerCard name="Social Media Specialist" 
             content="Marketing"
             para="100% Remote"/>
          </div>

          <div className="col-sm-4">
            <CareerCard name="Senior Backend Engineer" 
             content="Engineering"
             para="100% Remote"/>
          </div>


          <div className="col-sm-4 mb-5">
            <CareerCard name="Test Developer Specialist " 
             content="Test Development"
             para="100% Remote"/>
          </div>

          <div className="col-sm-4">
            <CareerCard name=" Project Manager" 
             content="Marketing"
             para="100% Remote"/>
          </div>

          <div className="col-sm-4">
            <CareerCard name="Senior Data Analyst" 
             content="Product"
             para="100% Remote"/>
          </div>


          <div className="col-sm-4 mb-5">
            <CareerCard name="Senior Product Designer" 
             content="Product"
             para="100% Remote"/>
          </div>
        </div>
        { flow1 ? (
        <div className='text-center'>
        <button type='button' onClick={route} className='btn-lg careercardbtn mb-5'>Load More</button>
        </div>
        ):("")}
        {flow ? (
        <div className='row'>
            <div className='col-sm-4'>
                <CareerCard name="SEO Contact Writer"
                content="Marketing"
                para="100% Remote" />
            </div>
            <div className='col-sm-4 mb-5'>
                <CareerCard name="Backend Engineer"
                content="Engineering"
                para="100% Remote" />
            </div>
            

        </div>
        ) : ("")}
      </div>
    </div>
  )
}

export default CareerProps
