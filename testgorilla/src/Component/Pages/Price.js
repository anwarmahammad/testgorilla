import React from "react";
import "./Pricing.css";
import { useState, useCallback } from "react";
import Modal from "react-modal";
import PriceTable from "./PriceTable";
import PricePoster from "./PricePoster";
import OnclickChange from "./OnclickChange";

const Price = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const openSecondModal = useCallback(() => setIsOpenSecond(true), []);
  const closeSecondModal = useCallback(() => setIsOpenSecond(false), []);

  const [isOpenThird, setIsOpenThird] = useState(false);
  const openThirdModal = useCallback(() => setIsOpenThird(true), []);
  const closeThirdModal = useCallback(() => setIsOpenThird(false), []);

  return (
    <div>
      <div>
      <div className="container">
      <div className="mt-5">
      <h2 className="text-center">Pick a plan that works for you</h2>
    </div>
        <div className="row mt-5 pricing_row">
          <div className=" col-xl-3 col-md-6 col-sm-12 p-2 card_col">
            <div className="pricing_card">
              <div className="card">
                <div className="card-head head_color p-2">
                  <h3 className="price_head">Free</h3>
                  <p className="pricing_para">
                    A great way to get going with TestGorilla
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="price_money">
                  <h4>₹0 / month</h4>
                  <h5>Free forever</h5>
                </div>
                <hr className="mt-5"></hr>
                <div>
                  <h5>Assessments</h5>
                  <p pricing_para>Unlimited</p>
                  <p className="mt-3 pricing_para">
                    You can use each assessment for 60 days
                  </p>
                  {/* hidden part */}
                  <div className="invisible hidden_style">
                    <span className="pricing_para pt-5">
                      
                      You can use each assessment for 60 days 60 60 days
                    </span>
                    <button className="btn">click</button>
                  </div>
                  {/* hidden part end */}
                </div>
                <hr></hr>
                <div className="row">
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon"></i>
                  </span>
                  <p className="col-10 pricing_para">Unlimited candidates</p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon  pt-3"></i>
                  </span>
                  <p className=" col-10 pricing_para pt-3">
                    5 tests per assessment
                  </p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    1 custom questions per assessment
                  </p>
                </div>
                <hr></hr>
                <div>
                  <button className="btn price_btn btn-block">
                    Sign up free
                  </button>
                </div>
                <hr></hr>
                <div className="row">
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className="col-10 pricing_para">
                    10 free tests in the test library, including all personality
                    tests
                  </p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    Custom question types: essay, multiple-choice
                  </p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    Try all premium features internally among account users (up
                    to 5)
                  </p>
                  {/* hidden part */}
                  <div className="invisible hidden_style ">
                    <span className="col-2">
                      <i class="fas fa-plus price_icon"></i>
                    </span>
                    <p className=" col-10 pricing_para">
                      PDF reports of candidates
                    </p>
                    <span className="col-2">
                      <i class="fas fa-plus price_icon"></i>
                    </span>
                    <p className=" col-10 pricing_para">ATS integrations</p>
                    <p className=" col-10 pricing_para">Advanced user rights</p>
                    <p className=" col-10 pricing_para m-0">
                      Advanced user rights
                    </p>
                    <p className=" col-10 pricing_para m-0">
                      Advanced user rights
                    </p>
                    <p className=" col-10 pricing_para m-0">
                      Advanced user rights
                    </p>
                    {/* <p className=" col-10 pricing_para">Advanced user rights</p> */}
                  </div>
                  {/* end hidden part */}
                </div>
                <hr className="mt-5"></hr>
                <div className="m-auto text-center">
                  <button className="btn text-success">See all features</button>
                </div>
              </div>
            </div>
          </div>

          {/* second card */}
          <div className=" col-xl-3 col-md-6 col-sm-12 p-2 card_col">
            <div className="pricing_card">
              <div className="card">
                <div className="card-head head_color p-2">
                  <h3 className="price_head">Pay as you go</h3>
                  <p className="pricing_para">
                    For businesses that hire occasionally and want flexibility
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="price_money">
                  <h4>₹1,600 / month</h4>
                  <h5>Billed at ₹19,200 per year</h5>
                </div>
                <hr className="mt-3"></hr>
                <div>
                  <h5>Assessments</h5>
                  <div className="row">
                    <p className="col-6 pricing_para">Included</p>
                    <p className="col-6 pricing_para">1 per year</p>
                    <p className="col-6 pricing_para">Additional</p>
                    <p className="col-6 pricing_para">₹10,000 each</p>
                    <p className="mt-3 pricing_para">
                      You can use each assessment for 60 days
                    </p>
                    <button className="btn text-success" onClick={openModal}>
                      See examples
                    </button>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className="col-10 pricing_para">
                    100 candidates per year + ₹80 per additional candidate
                  </p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">5 tests per assessment</p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    5 custom questions per assessmen
                  </p>
                </div>
                <hr></hr>
                <div>
                  <button className="btn price_btn btn-block">Buy now</button>
                </div>
                <hr></hr>
                <div className="row">
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className="col-10 pricing_para">
                    All 213 tests in the test library
                  </p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    Custom question types: video, essay, multiple-choice, and
                    file upload
                  </p>
                  {/* hidden part */}
                  <div className="invisible hidden_style">
                    <span className="col-1">
                      <i class="fas fa-plus price_icon"></i>
                    </span>
                    <p className=" col-10 pricing_para">
                      PDF reports of candidates
                    </p>
                    <span className="col-2">
                      <i class="fas fa-plus price_icon"></i>
                    </span>
                    <p className=" col-10 pricing_para">ATS integrations</p>
                    <span className="col-2">
                      <i class="fas fa-plus price_icon"></i>
                    </span>
                    <p className=" col-10 pricing_para">Advanced user rights</p>
                    <p className=" col-10 pricing_para">Advanced user rights</p>
                    <p className=" col-10 pricing_para">Advanced user rights</p>
                    <p className=" col-10 pricing_para">Advanced user rights</p>
                  </div>
                  {/* end hidden part */}
                </div>
                <hr className="mt-5"></hr>
                <div className="m-auto text-center">
                  <button className="btn text-success">See all features</button>
                </div>
              </div>
            </div>
          </div>
          {/* third card */}
          <div className=" col-xl-3 col-md-6 col-sm-12 p-2 card_col">
            <div className="pricing_card">
              <div className="card">
                <div className="card-head head_color p-2">
                  <h3 className="price_head">Scale</h3>
                  <p className="pricing_para">
                    For growing businesses who want all features and
                    customization
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="price_money">
                  <h4>₹19,000 / month</h4>
                  <h5>Billed at ₹228,000 per year</h5>
                </div>
                <hr className="mt-3"></hr>
                <div>
                  <h5>Assessments</h5>
                  <div className="row">
                    <p className="col-6 pricing_para">Included</p>
                    <p className="col-6 pricing_para">15 per year</p>
                    <p className="col-6 pricing_para">Additional</p>
                    <p className="col-6 pricing_para">₹8,000 each</p>
                    <p className="mt-3 pricing_para">
                      You can use each assessment for 60 days
                    </p>
                    <button
                      className="btn text-success"
                      onClick={openSecondModal}
                    >
                      See examples
                    </button>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className="col-10 pricing_para">
                    1,500 candidates per year + ₹60 per additional candidate
                  </p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">5 tests per assessment</p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    10 custom questions per assessmen
                  </p>
                </div>
                <hr></hr>
                <div>
                  <button className="btn price_btn btn-block">Buy now</button>
                </div>
                <hr></hr>
                <div className="row">
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className="col-10 pricing_para">
                    Everything in Pay as you go plus:
                  </p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    Qualifying questions (disqualified candidates are free of
                    charge)
                  </p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    Unique invitation links per source
                  </p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    Welcome video for candidates
                  </p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">Your own custom tests</p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    Custom coding questions
                  </p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    PDF reports of candidates
                  </p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">ATS integrations</p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">Advanced user rights</p>
                </div>
                <hr className="mt-5"></hr>
                <div className="m-auto text-center">
                  <button className="btn text-success">See all features</button>
                </div>
              </div>
            </div>
          </div>
          {/* fourth card */}
          <div className=" col-xl-3 col-md-6 col-sm-12 p-2 card_col">
            <div className="pricing_card">
              <div className="card">
                <div className="card-head head_color p-2">
                  <h3 className="price_head">Business</h3>
                  <p className="pricing_para">
                    For businesses with high-volume hiring needs
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="price_money">
                  <h4>₹125,000 / month</h4>
                  <h5>Billed at ₹1,500,000 per year</h5>
                </div>
                <hr className="mt-3"></hr>
                <div>
                  <h5>Assessments</h5>
                  <div className="row">
                    <p className="col-6 pricing_para">Included</p>
                    <p className="col-6 pricing_para">125 per year</p>
                    <p className="col-6 pricing_para">Additional</p>
                    <p className="col-6 pricing_para">₹6,500 each</p>
                    <p className="mt-3 pricing_para">
                      You can use each assessment for 60 days
                    </p>
                    <button
                      className="btn text-success"
                      onClick={openThirdModal}
                    >
                      See examples
                    </button>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className="col-10 pricing_para">
                    12,500 candidates per year + ₹50 per additional candidate
                  </p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">5 tests per assessment</p>
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    20 custom questions per assessment
                  </p>
                </div>
                <hr></hr>
                <div>
                  <button className="btn price_btn btn-block">Buy now</button>
                </div>
                <hr></hr>
                <div className="row">
                  <span className="col-2">
                    <i class="fas fa-check-circle price_icon "></i>
                  </span>
                  <p className="col-10 pricing_para">
                    Everything in Scale plus:
                  </p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    API access for custom integrations
                  </p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    Onboarding training program
                  </p>
                  <span className="col-2">
                    <i class="fas fa-plus price_icon"></i>
                  </span>
                  <p className=" col-10 pricing_para">
                    Customer and candidate support SLA
                  </p>
                  {/* hidden part */}
                  <div className="invisible hidden_style">
                    <span className="col-1">
                      <i class="fas fa-plus price_icon"></i>
                    </span>
                    <p className=" col-10 pricing_para">
                      PDF reports of candidates
                    </p>
                    <span className="col-1">
                      <i class="fas fa-plus price_icon"></i>
                    </span>
                    <p className=" col-10 pricing_para">ATS integrations</p>
                    <span className="col-1">
                      <i class="fas fa-plus price_icon"></i>
                    </span>
                    <p className=" col-10 pricing_para">Advanced user rights</p>
                    <p className=" col-10 pricing_para">Advanced user rights</p>
                  </div>
                  {/* end hidden part */}
                </div>
                <hr className="mt-5"></hr>
                <div className="m-auto text-center">
                  <button className="btn text-success">See all features</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modals */}
        {/* first modal */}
        <Modal
          contentLabel="My dialog"
          className="Brand-modal Brand-modal-color"
          overlayClassName="Brand-modal-overlay"
          closeTimeoutMS={500}
          isOpen={isOpen}
          onRequestClose={closeModal}
        >
          <i
            className="fas fa-times Brand-modal-Button Button_color"
            onClick={closeModal}
          ></i>
          <div className="modal-heading p-3">
            <h3>Examples for Pay as you go plan</h3>
            <h5>Example 1</h5>
            <p className="pricing_para">
              A company hires 3 new people during a year for 3 different job
              roles. For each role, they create 1 assessment (with 5 tests and a
              few custom questions). The first assessment is included in the
              yearly plan. The additional 2 assessments are billed at ₹10,000
              each in the months they are created.
            </p>
            <p className="pricing_para">
              In total, 120 candidates take these 3 assessments. The first 100
              are included in the annual plan. The next 20 are billed at ₹80
              each in the months in which those last 20 candidates take their
              assessment.
            </p>
            <h5>Example 2</h5>
            <p className="pricing_para">
              A company is looking for 3 new customer service agents. They
              create 1 assessment for this job opening (with 5 tests and 5
              custom questions). This uses 1 assessment credit. 100 candidates
              apply for the job and are invited to take the assessment. 90 of
              them start the assessment, with 85 candidates completing it in
              full. Therefore, a total of 90 candidate credits are used.
            </p>
          </div>
        </Modal>

        {/* second modal */}
        <Modal
          contentLabel="My dialog"
          className="Brand-modal Brand-modal-color"
          overlayClassName="Brand-modal-overlay"
          closeTimeoutMS={500}
          isOpen={isOpenSecond}
          onRequestClose={closeSecondModal}
        >
          <i
            className="fas fa-times Brand-modal-Button"
            onClick={closeSecondModal}
          ></i>
          <div className="modal-heading p-3">
            <h3>Examples for Scale plan</h3>
            <h5>Example 1</h5>
            <p className="pricing_para">
              A company hires 20 new people during a year for 20 different job
              roles. For each role, they create 1 assessment (with typically 4-5
              tests and a few custom questions). The first 15 assessments are
              included in the yearly plan. The additional 5 assessments are
              billed at ₹8,000 each in the months they are created.
            </p>
            <p className="pricing_para">
              n total, 900 qualified candidates complete these 20 assessments.
              Therefore, there are no additional candidate charges, as this
              falls within the annual allowance of 1,500 candidates.
            </p>
            <h5>Example 2</h5>
            <p className="pricing_para">
              A company is looking for 3 new customer service agents. They
              create 1 assessment for this job opening (with 5 tests and 10
              custom questions), which uses 1 assessment credit. 110 candidates
              apply for the job and are invited to take the assessment. 100 of
              them respond to the invitation, but 10 of those candidates are
              disqualified based on the qualifying questions. The remaining 90
              candidates start the assessment, with 85 candidates completing it
              in full. In this case, a total of 90 candidate credits are used.
            </p>
          </div>
        </Modal>
        {/* third modal */}
        <Modal
          contentLabel="My dialog"
          className="Brand-modal Brand-modal-color"
          overlayClassName="Brand-modal-overlay"
          closeTimeoutMS={500}
          isOpen={isOpenThird}
          onRequestClose={closeThirdModal}
        >
          <i
            className="fas fa-times Brand-modal-Button Button_color"
            onClick={closeThirdModal}
          ></i>
          <div className="modal-heading p-3">
            <h3>Examples for Business plan</h3>
            <h5>Example 1</h5>
            <p className="pricing_para">
              A company hires 200 new people during one year for 140 different
              job roles. For each role, they create 1 assessment (with typically
              4-5 tests and a few custom questions). The first 125 assessments
              are included in the yearly plan. The additional 15 assessments are
              billed at ₹6,500 each in the months they are created.
            </p>
            <p className="pricing_para">
              In total, 10,000 qualified candidates take these 140 assessments.
              Therefore, there are no additional candidate charges, as this
              falls within the annual allowance of 12,500 candidates.
            </p>
            <h5>Example 2</h5>
            <p className="pricing_para">
              A company is looking for 20 new customer service agents. They
              create 1 assessment for this job opening (with 5 tests and 10
              custom questions). This uses 1 assessment credit. 800 candidates
              apply for the job and are invited to take the assessment. 750 of
              them respond to the invitation, but 100 of those candidates are
              disqualified based on the qualifying questions. The remaining 650
              candidates start the assessment, with 600 completing it in full.
              Therefore, a total of 650 candidate credits are used.
            </p>
          </div>
        </Modal>
      </div>
      <PriceTable />
      <PricePoster />
      <OnclickChange />
     
      </div>
    </div>
  );
};

export default Price;
