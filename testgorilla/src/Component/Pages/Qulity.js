import React from "react";


const Employer = () => {
  return (
    <div >
       <div style={{overflowX:'hidden'}} className='container-fluid'>
   <div className='row quality-time-container p-5'>
     <div className='col-md-6 col-sm-12'>
         <h1 className='quality-heading mt-5 mb-5'>Quality time for
quality candidates.</h1>
<p className='quality-para'>Boom. No more time wasted on screening CVs and pre-qualifying interviews.</p>
<p className='quality-para'>We automatically grade and rank your candidates. In the time it takes to savor a cup of coffee, you can watch video responses to custom questions.
</p>
<p className='quality-para'>Our screening process automation lets you focus on the best people for the job.</p>
     </div>
     <div className='col-md-6 col-sm-12 mt-5'>
       <img className='img-fluid' src='\img\quality-img.png'/>
     </div>
   </div>
   <div className='row p-5'>
      <div className='col-sm-12 col-md-6'>
          <img className='img-fluid' src='\img\man-percent.png'/>
      </div>
      <div className='col-sm-12 col-md-6'>
         <h1 className='quality-heading mt-5'>Say goodbye to
unconscious bias.</h1>
<p className='quality-para'>Diverse teams perform better.</p>
<p className='quality-para'>With TestGorilla, you give all applicants an equal, unbiased opportunity to showcase themselves.</p>
<p className='quality-para'>This ensures you get the best talent from all walks of life.</p>
      </div>
   </div>
  <div className='row'>
     <div className='col-md-6 col-sm-12 offer-container p-5'>
        <h1 className='offer-heading mt-5'>Offer a positive
candidate experience.</h1>
<p className='offer-para'>Good candidates appreciate good screening tests.</p>
<p className='offer-para'>Our professional, well-designed tests serve as an extension of your brand and personality.</p>
<p className='offer-para'>Your applicants get the motivation and engagement they need to truly shine.</p>
     </div>
     <div className='col-md-6 col-sm-12 offer-second-container p-5 text-center'>
         <img className='offer-second-img m-5 img-fluid' src='\img\offer-second-container-img.png'/>
     </div>
  </div>
</div>
    </div>
  );
};

export default Employer;
