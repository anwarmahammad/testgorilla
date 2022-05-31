import React, { useState } from 'react'
import TestLibrary from './TestLibrary'
import './TestLoadMoreBtn.css'

const TestProps = () => {
  const [data,setData]=useState(false)
   const direction =(e)=>{
     e.preventDefault ()
     setData(true)
   }
   const [data1,setData1]=useState(true)
    // const hidden= (e)=>{
    //   e.preventDefault()
    //   setData1(false)
    // }

    const changeHolder=(e)=>{
      setData(true)
      setData1(false)
     
    }

  return (
    <div className='container'>
       <div className='row p-3'>
          <div className='col-md-4 p-3'>
          <TestLibrary
    title="Content strategy"
    paragraph="This content strategy test evaluates a candidate’s ability to resonate with the right audience and grow qualified traffic that converts through content. This hiring test will help you hire content marketers who are skilled in strategic thinking."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="PHP (coding): intermediate-level algorithms"
    paragraph="This PHP test evaluates candidates' coding skills through a short coding assignment. The test requires candidates to write code that meets certain requirements, and candidates can run their code to test if the result matches their expectations."
    duration="30 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Kubernetes"
    paragraph="The Kubernetes test evaluates a candidate’s ability to deploy, configure, administer, and troubleshoot Kubernetes based on real-world scenarios. This test will help you identify candidates with strong Kubernetes admin skills."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="ASP.NET (including ASP.NET Core)"
    paragraph="This ASP.NET test evaluates a candidate's technical knowledge of the ASP.NET framework and their ability to create web applications and services. This test helps you identify developers who are well-versed in the ASP.NET framework and use it effectively."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Customer service"
    paragraph="This customer service test evaluates a candidate’s ability to respond to customer issues in an appropriate manner. This test will help you identify candidates who take a customer-centric approach to problem resolution to deliver the best service."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Terraform"
    paragraph="This Terraform test evaluates candidates’ technical knowledge of Terraform. This test will help you identify engineers who are well-versed in Terraform and able to use it effectively as a tool to implement infrastructure as code."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="React Native"
    paragraph="This React Native test evaluates candidates’ knowledge of the React Native framework. This test will help you hire React Native developers who can create, update, and maintain your Reach Native apps."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Exploratory data analysis"
    paragraph="This exploratory data analysis (EDA) test evaluates a candidate's ability to understand and statistically interpret data to derive actionable insight. This hiring test helps you identify candidates well versed in EDA and various statistical analyses."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Flutter"
    paragraph="This Flutter test evaluates candidates’ skills and knowledge in developing apps using the Flutter framework. This test will help you hire developers who are skilled in Flutter and can create and improve code to get the desired outcomes."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Microsoft Excel (General)"
    paragraph="This Microsoft Excel test evaluates a candidate’s ability to read and interpret Excel spreadsheets, perform basic calculations, and manipulate tables. This test will help you hire candidates who can use Excel as part of the Microsoft Office suite."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Google Docs"
    paragraph="This Google Docs test evaluates candidates’ technical knowledge of the software and their ability to create documents for both print and web. This test helps you identify document creators who are well-versed in Google Docs and use it effectively."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="SQLite (coding): intermediate-level querying"
    paragraph="This SQLite coding test evaluates candidates' skills in creating a query on a database with medium complexity. It immerses the candidate in a realistic scenario, and solving it requires intermediate SQLite querying skills."
    duration="30 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Salesforce CRM"
    paragraph="The Salesforce customer relationship management (CRM) test evaluates candidates’ familiarity with the basic concepts and standard functionality of Salesforce CRM. This test will help you hire candidates who have experience using Salesforce in their roles."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="REST API"
    paragraph="This REST API test will evaluate a candidate’s technical knowledge and ability to follow generally accepted REST API standards, both for creating and implementing a RESTful API. This hiring test helps you identify engineers who can build scalable APIs."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Google Docs"
    paragraph="This Google Docs test evaluates candidates’ technical knowledge of the software and their ability to create documents for both print and web. This test helps you identify document creators who are well-versed in Google Docs and use it effectively"
    duration="10 mins"
    />
    </div>
    
     {/* Load more cards starts here */}
     {data1 ?(
    <div className='text-center'>
       <button className='load-more-btn' onClick={changeHolder}>Load More</button>
    </div>
     ):("")}
    {data ? (
      <div className='row'>
     <div className='col-md-4 p-3'>
    <TestLibrary
    title="TypeScript (coding): intermediate-level algorithms"
    paragraph="This TypeScript coding test assesses candidates' ability to program intermediate-level algorithms, evaluating their skills in Typescript. This test will help you identify mid-level developers with 2-3 years of experience in the programming language."
    duration="10 mins"
    />
    </div>
    
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Facebook Advertising"
    paragraph="The Facebook advertising test evaluates candidates’ skills and in setting up and managing Facebook advertising campaigns that deliver ROI. This test will help you hire Facebook advertising experts who can increase your audience and conversions."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Node.Js"
    paragraph="The Node.js test evaluates candidates’ knowledge and skills in Node.js API and assesses their use of best practices and architectural vision related to Node.js development. This test will help you identify candidates with practical experience in Node.js."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Account Payable"
    paragraph="This test evaluates candidates’ skills in identifying, recording, and managing accounts payable. The test helps you identify accountants that have the required skills to deal with accounting matters related to accounts payable."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Negotiation"
    paragraph="This negotiation test evaluates candidates’ ability to negotiate in a business context to achieve positive results and close favorable deals. This test will help you hire strong negotiators who can advance your business interests."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Geometric dimensioning & tolerancing (GD&T)"
    paragraph="This GD&T test evaluates a candidate’s ability to understand drawings using the language of Geometric Dimensioning and Tolerancing. It evaluates the applicant's knowledge of GD&T principles, concepts, and practices with the current ASME Y14.5 Standards."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Intermediate math"
    paragraph="The intermediate math test evaluates candidates’ ability to solve math equations and problems involving fractions, decimals, percentages, ratios, and time calculations. This test will help you identify candidates you can work well with numbers."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Numerical reasoning"
    paragraph="This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="C# (coding): entry-level algorithms"
    paragraph="This C# coding test assesses candidates' ability to program a small algorithm in C#, testing their basic programming skills. Using a short and straightforward coding task, this test helps you identify developers with the most essential C# skills."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Problem Solving"
    paragraph="This problem solving test evaluates candidates' ability to define problems and analyze data and textual information to make correct decisions. This test helps you identify candidates who use analytical skills to evaluate and respond to complex situations.
    "
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="English (intermediate/B1)"
    paragraph="The English (intermediate/B1) test evaluates a candidate’s English proficiency at the B1 level of the CEFR framework. This test will help you hire employees who can communicate in English on subjects commonly encountered at work and in everyday life."
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="C# (coding): data structures"
    paragraph="This C# coding test evaluates candidates' abilities with data structures. The test gives candidates 30 minutes to solve a problem leveraging C# language constructs. This test will help you hire mid-level C# developers.
    "
    duration="10 mins"
    />
    </div>
    <div className='col-md-4 p-3'>
    <TestLibrary
    title="Attention to detail (visual)"
    paragraph="This attention to detail test evaluates’ candidates ability to pay attention to visual details and information. This test helps you identify candidates who can pay close attention to visual cues and can handle visual material carefully and thoroughly.
    "
    duration="10 mins"
    />
    </div>
    </div>
          ):("")}
       </div>
    </div>
  )
}

export default TestProps