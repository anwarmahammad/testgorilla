
import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
const Cookiepolicy = () => {
 


  return (
    <div className='back-bg' >
      

     

{/* text start */}
{/* this is a first row--------------------------------------------------------------------------------- */}
<div className="row justify-content-center margins-top">
  <div className="col-md-4">
  <div className="border-0 mb-3 col-md-9 padding-top ">
  <Link
              to="/Salaries"
              type="button"
              className="border-0 btn card d-flex justify-content-between  border-bottom-0 pt-3 pb-2 headers atm-2   radius-btn1  "
            >
              <p className="text-left ">Terms of use <i class="fas fa-greater-than greater-padding ml-2 "></i></p>
              
            </Link>

            <Link
              to="/Privac"
              type="button"
              className="border-0 btn card justify-content-between   border-top-0 border-bottom-0 pt-3 pb-2 headers radius-btn atm-2"
            >
              <p className="text-left "> Privacy policy <i class="fas fa-greater-than greater-padding  "></i></p>
            </Link>
            <Link
              to="/Cookies"
              type="button"
              className="border-0 btn card  justify-content-between border-top-0 pt-3 pb-2 headers over-button radius-btn2 atm-2"
            >
              <p className="text-left "> Cookie policy  <i class="fas fa-greater-than greater-padding  "></i></p>
            </Link>
  </div>
  </div>
  
  <div className="col-md-6 col-9 mt-3">
<h2 className="Terms-head">Cookie Policy</h2>
<br/>

<p>Thank you for visiting www.testgorilla.com (“Website”). This cookie notice applies to the Website, any third party website (e.g. YouTube and Facebook) and applications accessed or used through such websites or platforms which are operated by or on behalf of TestGorilla (“TestGorilla Site”).
<br/>
<br/>
By using a TestGorilla Site, you are consenting to our use of cookies and other tracking technology in accordance with this notice. If you do not agree to our use of cookies and other tracking technology in this way, you should set your browser settings accordingly or not use the TestGorilla Site. If you disable cookies that we use, this may impact your user experience while on the TestGorilla Site.
<br/>
<br/>
When using a mobile device to connect to the internet, you should also refer to the privacy notice of the specific App you are using to understand its specific data collection practices.</p>
  </div>

</div>

{/* this is a second row--------------------------------------------------------------------------------- */}


<div className="row justify-content-center">
  <div className="col-4"></div>
  <div className="col-md-6 col-9">
      

<div className='d-flex'>
<h4 className="Terms-head number-bg">1. </h4>
<h4 className="Terms-head ml-2">What are cookies?</h4>
</div>
<br/>

<p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
<br/>
<br/>
See below for details on what information is collected by cookies and how we use that information. For more information about the kind of data we collect, please read our Privacy Policy.</p>
  </div>
</div>


{/* this is a 3rd row--------------------------------------------------------------------------------- */}

<div className="row justify-content-center">
  <div className="col-4"></div>
  <div className="col-md-6 col-9">
<div className='d-flex'>
<h4 className="Terms-head number-bg">2. </h4>
<h4 className="Terms-head ml-2">How and why does TestGorilla use them?</h4>
</div>
<br/>

<p>TestGorilla uses cookies to gain a better understanding of how visitors use this website. Cookies help us tailor TestGorilla website to your personal needs, to improve their user-friendliness, gain customer satisfaction feedback on our websites (through designated partners) and to communicate to you elsewhere on the web. To enable this, some cookies are applied when you enter our site.
<br/>
<br/>
TestGorilla keeps all the information collected from cookies in a format that is not personally identifiable. TestGorilla cookies located on your computer do not retain your name or your IP address.</p>
  </div>
</div>
  
{/* this is a 4rth row--------------------------------------------------------------------------------- */}

<div className="row justify-content-center">
  <div className="col-4"></div>
  <div className="col-md-6 col-9">
<div className='d-flex'>
<h4 className="Terms-head number-bg">3. </h4>
<h4 className="Terms-head ml-2">What type of cookies does TestGorilla use?</h4>
</div>
<br/>

<p>These are cookies that are set up to improve the functionality of the website. For example, cookies that remember the content you previously viewed on this website or the email address and password you provided when registering during an earlier visit to this website. Using Functional cookies may allow us to serve you content tailored to your interests and save you the time of having to re-register or re-enter information when you re-visit this website or try to access certain subscription-only sections. We may also use Cookies to lockout underage users from certain activities.</p>
  </div>
</div>
 

{/* this is a 5th row--------------------------------------------------------------------------------- */}

<div className="row justify-content-center">
  <div className="col-4"></div>
  <div className="col-md-6 col-9">
<div className='d-flex'>
<h4 className="Terms-head number-bg">5. </h4>
<h4 className="Terms-head ml-2">How can I change my cookie settings?</h4>
</div>
<br/>

<p>Please ensure that your computer setting reflects whether you are happy to accept cookies or not. You can set your browser to warn you before accepting cookies, or you can simply set it to refuse them, although you may not have access to all the features of this website if you do so. See your browser ‘help’ button for how you can do this. You do not need to have cookies on to use or navigate through many parts of the TestGorilla Site. Remember that if you use different computers in different locations, you will need to ensure that each browser is adjusted to suit your cookie preferences.
<br/>
<br/>
To delete the cookies and all information gathered, and otherwise change your cookie settings please click the following link.</p>
  </div>
</div>




    </div>
  )
}

export default Cookiepolicy