import React, { useState } from 'react'
import CareerProps from './cardProps/CareerProps'

const Careers = () => {
  const [value, setValue] = useState(true)
  const [value1, setValue1] = useState(false)
  const [value2, setValue2] = useState(false)
  const [value3, setValue3] = useState(false)
  const [value4, setValue4] = useState(false)
  const [value5, setValue5] = useState(false)

  const [data, setData] = useState(true)
  const [data1, setData1] = useState(true)
  const [data2, setData2] = useState(true)
  const [data3, setData3] = useState(true)
  const [data4, setData4] = useState(true)
  const [data5, setData5] = useState(true)

  const direction = (e) => {
    e.preventDefault()
    setValue(true)
    setValue1(false)
    setValue2(false)
    setValue3(false)
    setValue4(false)
    setValue5(false)

    setData(true)
    setData1(true)
    setData2(true)
    setData3(true)
    setData4(true)
    setData5(true)
  }
  const direction1 = (e) => {
    e.preventDefault()
    setValue(false)
    setValue1(true)
    setValue2(false)
    setValue3(false)
    setValue4(false)
    setValue5(false)

    setData(false)
    setData1(false)
    setData2(true)
    setData3(true)
    setData4(true)
    setData5(true)
  }
  const direction2 = (e) => {
    e.preventDefault()
    setValue(false)
    setValue1(false)
    setValue2(true)
    setValue3(false)
    setValue4(false)
    setValue5(false)

    setData(false)
    setData1(true)
    setData2(false)
    setData3(true)
    setData4(true)
    setData5(true)
  }
  const direction3 = (e) => {
    e.preventDefault()
    setValue(false)
    setValue1(false)
    setValue2(false)
    setValue3(true)
    setValue4(false)
    setValue5(false)

    setData(false)
    setData1(true)
    setData2(true)
    setData3(false)
    setData4(true)
    setData5(true)
  }
  const direction4 = (e) => {
    e.preventDefault()
    setValue(false)
    setValue1(false)
    setValue2(false)
    setValue3(false)
    setValue4(true)
    setValue5(false)

    setData(false)
    setData1(true)
    setData2(true)
    setData3(true)
    setData4(false)
    setData5(true)
  }
  const direction5 = (e) => {
    e.preventDefault()
    setValue(false)
    setValue1(false)
    setValue2(false)
    setValue3(false)
    setValue4(false)
    setValue5(true)

    setData(false)
    setData1(true)
    setData2(true)
    setData3(true)
    setData4(true)
    setData5(false)
  }
  return (
    <div>
      <div className="row Career">
        <div className="col-md-6 CareerTest">
          <h1 className="ProductHiring">Join us. From anywhere.</h1>
          <p className="Productpara1">
            At TestGorilla, we’re building a global team of amazing people who
            want to change the way companies hire. If you’re curious, ambitious,
            and ready to grow your career with us, we’d love to meet you!
          </p>
          <button className="btn Productbtn1">See Jobs</button>
        </div>
        <div className="col-md-6 Productimg1">
          <img
            src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/man-jobs.png"
            className="prodimg1 "
          ></img>
        </div>
      </div>
      <br />
      <div className="row text-center">
        <div className="col-sm-12">
          <h2 className="Careertext">
            Our team is currently working from these countries
          </h2>
          <img
            src="https://www.testgorilla.com/wp-content/uploads/2022/01/map_names.png.webp"
            className="Careerimg2"
          ></img>
        </div>
      </div>
      <br />
      <div className="Container careercont">
        <div className="row">
          <div className="col-sm-12">
            <h4 className="Careertextvalue">What we value</h4>
            <p className="Careertparavalue">
              We believe great work comes from a great work environment and a
              strong set of values. Find out what's important to us and see if
              we're a good fit for you.
            </p>
          </div>

          <div className="col-sm-6 ">
            {data ? (
              <div className="card  d-flex careerbtncard p-2">
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction}>
                    <i class="bi bi-arrow-up-left-circle-fill careericonclr"></i>
                  </button>{' '}
                  Being bold
                </h3>
              </div>
            ) : (
              <h3 className='careertexhtags'>
                {' '}
                <button className="btn careerbtnicon" onClick={direction}>
                  <i class="bi bi-plus-circle Careericon1 "></i>
                </button>{' '}
                Being bold
              </h3>
            )}

            {data1 ? (
              <div>
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction1}>
                    <i class="bi bi-plus-circle Careericon1 "></i>
                  </button>{' '}
                  Supporting each other
                </h3>
              </div>
            ) : (
              <div className="card  d-flex careerbtncard p-2">
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction1}>
                    <i class="bi bi-shield-fill-exclamation careericonclr"></i>
                  </button>{' '}
                  Supporting each other
                </h3>
              </div>
            )}

            {data2 ? (
              <div>
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction2}>
                    <i class="bi bi-plus-circle Careericon1 "></i>
                  </button>{' '}
                  Taking ownership of our work
                </h3>
              </div>
            ) : (
              <div className="card  d-flex careerbtncard p-2">
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction2}>
                    <i class="bi bi-chat-dots-fill careericonclr"></i>
                  </button>{' '}
                  Taking ownership of our work
                </h3>
              </div>
            )}

            {data3 ? (
              <div>
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction3}>
                    <i class="bi bi-plus-circle Careericon1 "></i>
                  </button>{' '}
                  Striving for excellence
                </h3>
              </div>
            ) : (
              <div className="card  d-flex careerbtncard p-2">
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction3}>
                    <i class="bi bi-star-fill  careericonclr"></i>
                  </button>{' '}
                  Striving for excellence
                </h3>
              </div>
            )}

            {data4 ? (
              <div>
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction4}>
                    <i class="bi bi-plus-circle Careericon1 "></i>
                  </button>{' '}
                  Doing the right thing
                </h3>
              </div>
            ) : (
              <div className="card  d-flex careerbtncard p-2">
                {' '}
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction4}>
                    <i class="bi bi-hand-thumbs-up-fill  careericonclr"></i>
                  </button>{' '}
                  Doing the right thing
                </h3>
              </div>
            )}

            {data5 ? (
              <div>
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction5}>
                    <i class="bi bi-plus-circle Careericon1 "></i>
                  </button>{' '}
                  Respecting our differences
                </h3>
              </div>
            ) : (
              <div className="card careerbtncard p-2">
                {' '}
                <h3 className='careertexhtags'>
                  {' '}
                  <button className="btn careerbtnicon" onClick={direction5}>
                    <i class="bi bi-bookmark-fill careericonclr"></i>
                  </button>{' '}
                  Respecting our differences
                </h3>
              </div>
            )}
          </div>
          <div className="col-sm-6">
            {value ? (
              <div>
                <p className="Careerpara2">
                  <b>What this means:</b> Fully embracing our ambition. Daring
                  to create new things. Always believing in our vision and
                  learning from any missteps.
                </p>
                <h6 className="Careerpara2">
                  <b>How can I apply this?</b>
                </h6>
                <li className="Careerpara2">
                  Think BIG, without restraints—even if the idea seems
                  impossible at first.
                </li>
                <li className="Careerpara2">
                  Have the courage to propose "crazy" ideas and discuss them
                  openly. Never hide your creativity!
                </li>
                <li className="Careerpara2">
                  Adapt to situations and find solutions along the way, rather
                  than being frozen by fear and waiting to have a "perfect plan"
                  before taking the first step.
                </li>
              </div>
            ) : (
              ' '
            )}

            {value1 ? (
              <div>
                <p className="Careerpara2">
                  <b>What this means:</b> Bringing a positive attitude to our
                  work. Helping each other when we get stuck. Challenging each
                  other in constructive ways. And of course, celebrating our
                  wins together!
                </p>
                <h6 className="Careerpara2">
                  <b>How can I apply this?</b>
                </h6>
                <li className="Careerpara2">
                  Always ask “How can I help?” when you see a challenge or
                  problem.
                </li>
                <li className="Careerpara2">
                  Propose solutions, don't oppose ideas.
                </li>
                <li className="Careerpara2">
                  Be proud of your colleagues' work and offer new ways to build
                  on their ideas.
                </li>
              </div>
            ) : (
              ''
            )}

            {value2 ? (
              <div>
                <p className="Careerpara2">
                  <b>What this means:</b> Owning the outcome of our work and
                  doing whatever is necessary to improve it—including listening
                  to feedback and asking for help when we need it.
                </p>
                <h6 className="Careerpara2">
                  <b>How can I apply this?</b>
                </h6>
                <li className="Careerpara2">
                  Make decisions to move projects forward independently. Don't
                  wait for approval on every step.
                </li>
                <li className="Careerpara2">
                  At the same time, understand the shared ownership of a
                  long-term vision and know when you need to bring things to the
                  team for discussion.
                </li>
                <li className="Careerpara2">
                  Use feedback to improve and stay open to new ideas.
                </li>
              </div>
            ) : (
              ''
            )}

            {value3 ? (
              <div>
                <p className="Careerpara2">
                  <b>What this means:</b> Holding ourselves to high standards
                  and working hard to grow our skills.
                </p>
                <h6 className="Careerpara2">
                  <b>How can I apply this?</b>
                </h6>
                <li className="Careerpara2">
                  Look for ways to improve every day—and stay curious to learn!
                </li>
                <li className="Careerpara2">
                  Deliver work that you're truly proud of and never just settle
                  for "good enough.”
                </li>
                <li className="Careerpara2">
                  Follow the 80/20 principle—never let perfectionism slow you
                  down.
                </li>
              </div>
            ) : (
              ''
            )}

            {value4 ? (
              <div>
                <p className="Careerpara2">
                  <b>What this means:</b> We’re straight shooters and we live by
                  our word. Honesty and trust are vital to us. We treat each
                  other, our customers, and our collaborators with respect and
                  empathy.
                </p>
                <h6 className="Careerpara2">
                  <b>How can I apply this?</b>
                </h6>
                <li className="Careerpara2">
                  Always keep the interests of your team in mind.
                </li>
                <li className="Careerpara2">
                  Use your authority and position to do what’s best for everyone
                  in each situation.
                </li>
                <li className="Careerpara2">
                  Always advise customers on the best solution that fits their
                  needs. Never try to sell them something they don't need.
                </li>
              </div>
            ) : (
              ''
            )}

            {value5 ? (
              <div>
                <p className="Careerpara2">
                  <b>What this means:</b> We all have different ways of living
                  and working, and we embrace that. We learn to respect our
                  differences and accommodate each other’s styles and
                  preferences while balancing them with our own.
                </p>
                <h6 className="Careerpara2">
                  <b>How can I apply this?</b>
                </h6>
                <li className="Careerpara2">
                  Set your own expectations and boundaries around work and
                  respect those of others.
                </li>
                <li className="Careerpara2">
                  Consider how others like to work and what they need from you
                  to work at their best.
                </li>
                <li className="Careerpara2">
                  Take care of yourself so you can take care of business. Your
                  well-being is important to us and should always be important
                  to you.
                </li>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div>
        <h3 className='careerhtagjob'>Job openings</h3>
        <div className='careerinconpostion'>
        <from >
          <div className='form-group careerform'>
        <input className='careerinput' placeholder='Search '/>
        <select className='input-field-right'>
           <option>All Departments</option>
           <option>Engineering</option>
           <option>General & administrative</option>
           <option>International Expansion</option>
           <option>Marketing</option>
           <option>Product</option>
           <option>Test Development</option>
         </select>
         <select className='input-field-right'>
           <option>All Job Location</option>
           <option>100% Remote</option>
           
         </select>
        </div>
        </from>
        </div>
        <CareerProps />
      </div>
    </div>
  )
}

export default Careers
