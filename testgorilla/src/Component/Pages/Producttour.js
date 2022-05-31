import React, { useState } from 'react'
import './Home.css'

const Producttour = () => {
  const [perfect, setPerfect] = useState(true)
  const [tests, setTests] = useState(false)
  const [personal, setPersonal] = useState(false)

  const [Fcontent, setFcontent] = useState(true)
  const [tcontent, setTcontent] = useState(true)
  const [pcontent, setPcontent] = useState(true)

  const direction = (e) => {
    e.preventDefault()
    setPerfect(true)
    setTests(false)
    setPersonal(false)


    setFcontent(true)
    setTcontent(true)
    setPcontent(true)
  }
  const direction2 = (e) => {
    e.preventDefault()
    setPerfect(false)
    setTests(true)
    setPersonal(false)

    setFcontent(false)
    setTcontent(false)
    setPcontent(true)
  }
  const direction3 = (e) => {
    e.preventDefault()
    setPerfect(false)
    setTests(false)
    setPersonal(true)

    setFcontent(false)
    setTcontent(true)
    setPcontent(false)
  }
  return (
    <div>
      <div className="row Product">
        <div className="col-md-6 ProductTest">
          <h1 className="ProductHiring">Hiring made easy.</h1>
          <p className="Productpara1">
            TestGorilla provides you with the best tools to screen your
            candidates so you can make better, faster, and easier hiring
            decisions.
          </p>
          <button className="btn Productbtn1">Get started</button>
          <button className=" btn Productbtn2">Watch demo</button>
        </div>
        <div className="col-md-6 Productimg1">
          <img
            src="https://www.testgorilla.com/wp-content/uploads/2020/03/il1@2x-min-e1631817087255.png.webp"
            className="prodimg1 "
          ></img>
        </div>
      </div>
      <br />
      <div className="Product2">
        <h1 className="Productnumber">1.</h1>

        <h1 className="Productcontent">
          Create high-quality assessments, fast.
        </h1>
        <p className="Productpara2">
          Building assessments is a breeze with TestGorilla. Get started with
          these simple steps.
        </p>

        <div className="row">
          <div className="col-sm-6">
            {Fcontent ? (
              <div className="card d-flex Productorgan">
                <div>
                  <button className="btnicon" onClick={direction}>
                  <i class="bi bi-file-earmark-play-fill producticon"></i>

                  </button>
                </div>
                <div>
                  <h3 className="Productcontent2">
                    Pick the perfect assessment name
                  </h3>
                  <p className="Productpara3">
                  Organize and optimize your assessment by choosing a distinct
                  name and job role.Creating a unique and detailed name allows
                  you to easily keep track of assessments. Selecting a job role
                  lets us recommend the most relevant tests.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <button className="btnicon" onClick={direction}>
                  <i class="bi bi-plus-circle Producticon1"></i>
                </button>
                <h3 className="Productcontent2">
                  Pick the perfect assessment name
                </h3>
                <p className="Productpara3">
                  Organize and optimize your assessment by choosing a distinct
                  name and job role.
                </p>
              </div>
            )}

            {tcontent ? (
              <div>
                <button className="btnicon" onClick={direction2}>
                  <i class="bi bi-plus-circle Producticon2"></i>
                </button>

                <h3 className="Productcontent2">
                  Select the tests that work for you
                </h3>
                <p className="Productpara3">
                  Explore our test library and find the best tests for any job
                  role.
                </p>
              </div>
            ) : (
              <div className="card d-flex Productorgan">
                <div>
                  <button className="btnicon" onClick={direction2}>
                  <i class="bi bi-file-earmark-play-fill producticon"></i>

                  </button>
                </div>
                <div>
                  <h3 className="Productcontent2">
                    {' '}
                    Select the tests that work for you
                  </h3>
                  <p className="Productpara3">
                    Search for specific tests and view test recommendations from
                    us. Click on a test to get an in-depth description and live
                    preview.
                  </p>
                </div>
              </div>
            )}

            {pcontent ? (
              <div>
                <button className="btnicon " onClick={direction3}>
                  <i class="bi bi-plus-circle Producticon2"></i>
                </button>

                <h3 className="Productcontent2">
                  Get personal with your own custom questions
                </h3>
                <p className="Productpara3 mb-5">
                  Get personal with your own custom questionsVideo responses
                  from your candidates give unique insight into their
                  personality.
                </p>
              </div>
            ) : (
              <div className="card Productorgan">
                <div>
                  <button className="btnicon " onClick={direction3}>
                  <i class="bi bi-file-earmark-play-fill producticon"></i>
                  </button>
                </div>
                <div>
                  {' '}
                  <h3 className="Productcontent2">
                    {' '}
                    Get personal with your own custom questions
                  </h3>
                  <p className="Productpara3 mb-5">
                    Video responses from your candidates give unique insight
                    into their personality. Candidates can also answer your
                    custom questions using long-form text, file upload or
                    multiple choice it's all up to you. Save time by re-using
                    your favorite custom questions from previous assessments.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="col-sm-6 Productcreimg">
            {perfect ? (
              <img
                src="https://www.testgorilla.com/wp-content/uploads/2020/04/il2_1@2x-e1631817639259.png.webp"
                width="80%"
              ></img>
            ) : (
              ''
            )}
            {tests ? (
              <img
                src="https://www.testgorilla.com/wp-content/uploads/2020/03/il2_2-1.png.webp"
                width="80%"
                height="80%"
              ></img>
            ) : (
              ''
            )}
            {personal ? (
              <img
                src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/il2_3@2x.png"
                width="80%"
              ></img>
            ) : (
              ''
            )}
          </div>
        </div>
        {/* <div className='row'>
        {perfect ? (
          <div>
        <div className='card'>
        <div className='col-sm-6'>
         
        <h3  className='Productcontent2'> Pick the perfect assessment name</h3>
        <p className='Productpara3'>Organize and optimize your assessment by choosing a distinct name and job role.

              Creating a unique and detailed name allows you to easily keep track of assessments. Selecting a job role lets us
               recommend the most relevant tests.</p>
               </div>
        </div>
        <div className='col-sm-6 Productcreimg' >
        <img src='https://www.testgorilla.com/wp-content/uploads/2020/04/il2_1@2x-e1631817639259.png.webp' width='80%'></img>

        </div>
      
         
         </div>
         ) : ( "")}
       </div> */}
      </div>

      {/* <div className='row'>
        <div className='col-sm-6 '>
          
         
        <button  className='btnicon' onClick={direction2}><i class="bi bi-plus-circle Producticon1"></i> </button>
        <h3  className='Productcontent2'> Select the tests that work for you</h3>
        <p className='Productpara3'>Explore our test library and find the best tests for any job role.</p>
        
       
        </div>
        {tests ? (
        <div className='col-sm-6'>
          <img src='https://www.testgorilla.com/wp-content/uploads/2020/03/il2_2-1.png.webp'width='80%'></img>
        </div>
         ) : ( "")}
        
      </div>

        

      <div className='row'>
        <div className='col-sm-6'>
        <button   className='btnicon' onClick={direction3}><i class="bi bi-plus-circle Producticon1"></i> </button>
        <h3  className='Productcontent2'> Get personal with your own custom questions</h3>
        <p className='Productpara3'>Get personal with your own custom questionsVideo responses from your candidates give unique insight into their personality.</p>
       
        </div>
        {personal ? (
        <div className='col-sm-6'>
          <img src='https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/il2_3@2x.png'width='80%'></img>
        </div>
        ) : ( "")} */}
      {/* </div>
      </div> */}

      <div className="row Product3">
        <div className="col-md-6 ">
          <img
            src="https://www.testgorilla.com/wp-content/uploads/2020/03/il3@2x-min-e1631817702186.png.webp"
            className="prodimg2 "
          ></img>
        </div>
        <div className="col-md-6 Product4">
          <h1 className="Productnumber2">2.</h1>
          <h1 className="ProductInvate">Invite candidatesyour way.</h1>
          <p className="Productpara4">
            Connect with candidates by sending email invites directly from
            TestGorilla or straight from your ATS. Have a long list of
            candidates? Easily send multiple invites with a single click. Or
            have candidates sign up by sharing a direct link.
          </p>
        </div>
      </div>

      <div className="Product2">
        <h1 className="Productnumber">3.</h1>

        <h1 className="Productcontent">
          Analyze and decide on the best candidates.
        </h1>
        <p className="Productpara2">
          Watch the results roll in and discover your strongest candidates with
          TestGorilla’s easy-to-read output reports.
        </p>

        <div className="row">
          <div className="col-sm-6">
          {Fcontent ? (
            <div className='card d-flex Productorgan1'>
            <div>
            <button className="btnicon" onClick={direction}>
            <i class="bi bi-person-video Production2"></i>
            </button>
            </div>
            <div>
            <h3 className="Productcontent2"> Real-time assessment results</h3>
            <p className="Productpara3">
              Review every single assessment status at a glance.
              See stats for each assessment, including how many candidates have started or finished and when the latest activity took place.
            </p>
            </div>
            </div>
             ) : (<div><button className="btnicon" onClick={direction}>
             <i class="bi bi-plus-circle Producticon1"></i>{' '}
           </button>
           <h3 className="Productcontent2"> Real-time assessment results</h3>
           <p className="Productpara3">
             Review every single assessment status at a glance.
           </p></div> )}



            {tcontent ? (
              <div>
            <button className="btnicon" onClick={direction2}>
              <i class="bi bi-plus-circle Producticon1"></i>
            </button>
            <h3 className="Productcontent2">
             
              Compare your candidates instantly
            </h3>
            <p className="Productpara3">
              See your candidates ranked right away when you click on an
              assessment.
            </p>
            </div>
             ): ( <div className='card d-flex Productorgan1'><div><button className="btnicon" onClick={direction2}>
            <i class="bi bi-person-video Production2"></i>
           </button></div><div><h3 className="Productcontent2">
             
             Compare your candidates instantly
           </h3>
           <p className="Productpara3">
             See your candidates ranked right away when you click on an
             assessment.You can also organize candidates based on ratings, alphabetical order, latest activity or custom responses.
           </p></div></div>)}

           {pcontent ? ( 
           <div>

            <button className="btnicon" onClick={direction3}>
              <i class="bi bi-plus-circle Producticon1"></i>
            </button>
            <h3 className="Productcontent2">
              
              Go in-depth with a candidate review
            </h3>
            <p className="Productpara3">
              Know your candidates from every angle by exploring detailed
              reports and watching their personalized videos.
            </p>
            </div>
            ) : (<div className='card d-flex Productorgan1'><div><button className="btnicon" onClick={direction3}>
            <i class="bi bi-person-video Production2"></i>
          </button></div><div><h3 className="Productcontent2">
              
              Go in-depth with a candidate review
            </h3>
            <p className="Productpara3">
              Know your candidates from every angle by exploring detailed
              reports and watching their personalized videos.Review a candidate's test scores and answers to your custom questions. Watch their video
             responses to meet the person behind the resume. Record your own personal notes about a candidate that only you can see.
            </p></div></div> )}
          </div>

          <div className="col-sm-6 Productcreimg">
            {perfect ? (
              <img
                src="https://www.testgorilla.com/wp-content/uploads/2020/03/il4_1-e1631817743604.png.webp"
                width="80%"
              ></img>
            ) : (
              ''
            )}
            {tests ? (
              <img
                src="https://www.testgorilla.com/wp-content/uploads/2020/03/il4_2.png.webp"
                width="80%"
              ></img>
            ) : (
              ''
            )}
            {personal ? (
              <img
                src="https://www.testgorilla.com/wp-content/uploads/2020/04/il4_3@2x-version-2.png.webp"
                width="80%"
              ></img>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <br />
      <div className="row Productmore1">
        <h2 className="ProductMore">
          More reasons businesses are choosing TestGorilla.
        </h2>

        <div className="row Productioncontent5">
          <div className="col-sm-3">
            <img src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/PRODUCT_TOUR_ICON_SURPRISINGY.svg"></img>
            <h5 className="Productmore1">Surprisingly simple</h5>
            <p>
              We’ve designed it so anyone can easily create assessments, add
              custom questions, rank candidates, export custom CSV files and
              more.
            </p>
          </div>
          <div className="col-sm-3">
            <img src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/PRODUCT_TOUR_ICON_BEST-VALUE.svg"></img>
            <h5 className="Productmore1">Incredible value</h5>
            <p>
              We make professional assessments affordable for everyone and
              streamline the hiring process for any size business.
            </p>
          </div>
          <div className="col-sm-3">
            <img src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/PRODUCT_TOUR_ICON_POSITIVE-BRAND.svg"></img>
            <h5 className="Productmore1">Positive candidate experience</h5>
            <p>
              No accounts necessary for candidates taking your assessment.
              Utilize your logo to leave a lasting brand impression.
            </p>
          </div>
          <div className="col-sm-3">
            <img src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/PRODUCT_TOUR_ICON_CHEAT.svg"></img>
            <h5 className="Productmore1">Cheating prevention</h5>
            <p>
              View automatic snapshots of candidates as they’re being tested.
              Receive alerts if a candidate exits full-screen mode.
            </p>
          </div>

          <div className="col-sm-3 Productioncontnt6">
            <img src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/PRODUCT_TOUR_ICON_UPLOAD.svg"></img>
            <h5 className="Productmore1">Flexible file uploads</h5>
            <p>
              Allow candidates to upload key documents such as a CV or
              portfolio.
            </p>
          </div>
          <div className="col-sm-3 Productioncontnt6">
            <img src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/PRODUCT_TOUR_ICON_STELLAR.svg"></img>
            <h5 className="Productmore1">Stellar support</h5>
            <p>
              Get answers to your questions, fast. Our team is always here to
              help.
            </p>
          </div>
          <div className="col-sm-3 Productioncontnt6">
            <img src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/PRODUCT_TOUR_ICON_SMARTER.svg"></img>
            <h5 className="Productmore1">Smarter integration</h5>
            <p>
              Native integration with major ATS like Greenhouse, Lever,
              SmartRecruiters and JazzHR.
            </p>
          </div>
          <div className="col-sm-3 Productioncontnt6">
            <img src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/PRODUCT_TOUR_ICON-18.svg"></img>
            <h5 className="Productmore1">Mobile-friendly features</h5>
            <p>
              Optimized for all platforms. Build and review assessments on the
              go. Let candidates showcase their talents on any device.
            </p>
          </div>
        </div>
      </div>
      <div className="ProductCount9">
        <div className="col-sm-12">
          <h4 className="ProductContent7">Reinvent your hiring process.</h4>
          <p className="Productpara7">
            Start using TestGorilla today, or talk to us about
          </p>
          <p className="Productpara8">
            {' '}
            your hiring challenges to discover how we can help.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 m-auto text-center ">
            <button className="btn Productbtn3">Free demo</button>
            <button className="btn Productbtn4 ">
              {' '}
              Get started <i class="fas fa-angle-right "></i>
            </button>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Producttour
