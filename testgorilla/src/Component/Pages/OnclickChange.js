import React, { useState } from "react";
import "./Pricing.css";

const OnclickChange = () => {
  const [change, setChange] = useState(true);
  const changeContent = () => {
    setChange(false);
  };
  const RechangeContent = () => {
    setChange(true);
  };
  // first col second row
  const [thirdCont, setThirdCont] = useState(true);
  const changeThirdCont = () => {
    setThirdCont(false);
  };
  const RechangeThirdCont = () => {
    setThirdCont(true);
  };
  // first col third row
  const [FcTrCont, setFcTrCont] = useState(true);
  const changeFcTrCont = () => {
    setFcTrCont(false);
  };
  const RechangeFcTrCont = () => {
    setFcTrCont(true);
  };
  // first col fourth row
  const [FcFrCont, setFcFrCont] = useState(true);
  const changeFcFrCont = () => {
    setFcFrCont(false);
  };
  const RechangeFcFrCont = () => {
    setFcFrCont(true);
  };

  // second col
  const [SecondCont, setSecondCont] = useState(true);
  const changeSecondCont = () => {
    setSecondCont(false);
  };
  const RechangeSecondCont = () => {
    setSecondCont(true);
  };

  // second col second row
  const [SrScCont, setSrScCont] = useState(true);
  const changeSrScCont = () => {
    setSrScCont(false);
  };
  const RechangeSrScCont = () => {
    setSrScCont(true);
  };

  // second col third row
  const [ScTrCont, setScTrCont] = useState(true);
  const changeScTrCont = () => {
    setScTrCont(false);
  };
  const RechangeScTrCont = () => {
    setScTrCont(true);
  };

  // second col fourth row
  const [ScFrCont, setScFrCont] = useState(true);
  const changeScFrCont = () => {
    setScFrCont(false);
  };
  const RechangeScFrCont = () => {
    setScFrCont(true);
  };

  return (
    <div>
      <div className="container ">
        <div className="row  mb-5">
          <div className="col-md-6 m-0 mt-3">
            {change ? (
              <button
                className="d-flex  btn-block onchange_btn"
                onClick={changeContent}
              >
                <div className="m-3">
                  <i class="bi bi-question-diamond-fill change_icon"></i>
                </div>
                <div className="m-3">
                
                  <h5 className="change_heading text-left mt-3">How do I get started?</h5>
                </div>
              </button>
            ) : (
              <div className="card borders">
                <button
                  className="btn-block rechange_btn"
                  onClick={RechangeContent}
                >
                  <div className="d-flex">
                    <div className="m-3">
                      <i class="bi bi-question-diamond-fill change_icon"></i>
                    </div>
                    <div className=" text-left m-3">
                      <h5 className="change_heading">How do I get started?</h5>
                      <p className="change_para">
                        Choose a plan above that’s right for you. We’ll ask for
                        a few basic details, then you’re good to go!
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}
            {/* first col second row------- */}
            {thirdCont ? (
              <button
                className="d-flex  btn-block onchange_btn mt-3"
                onClick={changeThirdCont}
              >
                <div className="m-3">
                  <i class="bi bi-question-diamond-fill change_icon"></i>
                </div>
                <div className="m-3">
                  {" "}
                  <h5 className="change_heading text-left mt-3">
                    What payment methods do you accept?
                  </h5>
                </div>
              </button>
            ) : (
              <div className="card borders mt-3 ">
                <button
                  className="btn-block rechange_btn"
                  onClick={RechangeThirdCont}
                >
                  <div className="d-flex">
                    <div className="m-3">
                      <i class="bi bi-question-diamond-fill change_icon"></i>
                    </div>
                    <div className=" text-left m-3">
                      <h5 className="change_heading">What payment methods do you accept?</h5>
                      <p className="change_para">
                        We accept payment through all major credit cards and
                        PayPal.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}
            {/* first col third row */}
            {FcTrCont ? (
              <button
                className="d-flex  btn-block onchange_btn mt-3"
                onClick={changeFcTrCont}
              >
                <div className="m-3">
                  <i class="bi bi-question-diamond-fill change_icon"></i>
                </div>
                <div className="m-3">
                 
                  <h5 className="change_heading text-left mt-3">
                    Is TestGorilla easy to use?
                  </h5>
                </div>
              </button>
            ) : (
              <div className="card borders mt-3 ">
                <button
                  className="btn-block rechange_btn"
                  onClick={RechangeFcTrCont}
                >
                  <div className="d-flex">
                    <div className="m-3">
                      <i class="bi bi-question-diamond-fill change_icon"></i>
                    </div>
                    <div className="m-3  text-left">
                      <h5 className="change_heading">Is TestGorilla easy to use?</h5>
                      <p className="change_para">
                        Yes! We’ve specifically designed TestGorilla to be easy
                        and intuitive for anyone to use. We’ll also guide you
                        through your first steps so you can start creating an
                        assessment right away.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}
            {/* first col fourth row */}
            {FcFrCont ? (
              <button
                className="d-flex  btn-block onchange_btn mt-3"
                onClick={changeFcFrCont}
              >
                <div className="m-3">
                  <i class="bi bi-question-diamond-fill change_icon"></i>
                </div>
                <div className="m-3">
                 
                  <h5 className=" change_heading text-left mt-3">
                    What's the difference between an assessment and a test?
                  </h5>
                </div>
              </button>
            ) : (
              <div className="card borders mt-3 ">
                <button
                  className="btn-block rechange_btn"
                  onClick={RechangeFcFrCont}
                >
                  <div className="d-flex">
                    <div className="m-3">
                      <i class="bi bi-question-diamond-fill change_icon"></i>
                    </div>
                    <div className="m-3">
                      <h5 className=" change_heading text-left">
                        What's the difference between an assessment and a test?
                      </h5>
                      <p className="text-left change_para">
                        An assessment is the total package of tests and custom
                        questions that you put together to evaluate your
                        candidates. Each individual test within an assessment is
                        designed to test something specific, such as a job skill
                        or language. An assessment can consist of up to 5 tests
                        and 20 custom questions. You can have candidates respond
                        to your custom questions in several ways, such as with a
                        personalized video.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
          {/* second col content */}
          <div className="col-md-6 mt-3">
            {SecondCont ? (
              <button
                className="d-flex  btn-block onchange_btn"
                onClick={changeSecondCont}
              >
                <div className="m-3">
                  <i class="bi bi-question-diamond-fill change_icon"></i>
                </div>
                <div className="m-3">
                  
                  <h5 className=" change_heading mt-3 text-left">
                    Can I integrate TestGorilla with our ATS?
                  </h5>
                </div>
              </button>
            ) : (
              <div className="card borders ">
                <button
                  className="btn-block rechange_btn"
                  onClick={RechangeSecondCont}
                >
                  <div className="d-flex">
                    <div className="m-3">
                      <i class="bi bi-question-diamond-fill change_icon"></i>
                    </div>
                    <div className="m-3 text-left">
                      <h5 className="change_heading">Can I integrate TestGorilla with our ATS?</h5>
                      <p className="change_para">
                        We offer native integration with ATS like Greenhouse,
                        Lever, SmartRecruiters, and JazzHR. We’re currently
                        working on building native integration with all other
                        major ATS. Please contact us for more details or
                        specific integration requests.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}
            {/* second col second row */}
            {SrScCont ? (
              <button
                className="d-flex  btn-block onchange_btn mt-3"
                onClick={changeSrScCont}
              >
                <div className="m-3">
                  <i class="bi bi-question-diamond-fill change_icon"></i>
                </div>
                <div className="m-3">
                  <h5 className="change_heading mt-3 text-left">
                    How does TestGorilla protect my data?
                  </h5>
                </div>
              </button>
            ) : (
              <div className="card borders mt-3">
                <button
                  className="btn-block rechange_btn"
                  onClick={RechangeSrScCont}
                >
                  <div className="d-flex">
                    <div className="m-3">
                      <i class="bi bi-question-diamond-fill change_icon"></i>
                    </div>
                    <div className="m-3 text-left">
                      <h5 className="change_heading">How does TestGorilla protect my data?</h5>
                      <p className="change_para">
                        TestGorilla is hosted by Amazon Web Services (AWS) on
                        secure servers located in Ireland. The AWS
                        infrastructure is designed to be one of the most secure
                        computing environments in the world. Additionally, we
                        have our own strict security protocols and make daily
                        backups of all your data. As a data processor, we are
                        fully GDPR compliant.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}
            {/* second col third row */}
            {ScTrCont ? (
              <button
                className="d-flex  btn-block onchange_btn mt-3"
                onClick={changeScTrCont}
              >
                <div className="m-3">
                  <i class="bi bi-question-diamond-fill change_icon"></i>
                </div>
                <div className="m-3">
                  <h5 className="change_heading mt-3 text-left">
                    What type of support do you offer?
                  </h5>
                </div>
              </button>
            ) : (
              <div className="card borders mt-3">
                <button
                  className="btn-block rechange_btn"
                  onClick={RechangeScTrCont}
                >
                  <div className="d-flex">
                    <div className="m-3">
                      <i class="bi bi-question-diamond-fill change_icon"></i>
                    </div>
                    <div className="m-3  text-left">
                      <h5 className="change_heading">What type of support do you offer?</h5>
                      <p className="change_para">
                        Our team is always here to help you. After you sign up,
                        we’ll reach out to guide you through the first steps of
                        setting up your TestGorilla account. If you have any
                        further questions, you can contact our support team via
                        email and chat. We also offer detailed guides in our
                        extensive Help center. Help center
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}

            {/* second col fourth row */}
            {ScFrCont ? (
              <button
                className="d-flex  btn-block onchange_btn mt-3"
                onClick={changeScFrCont}
              >
                <div className="m-3">
                  <i class="bi bi-question-diamond-fill change_icon"></i>
                </div>
                <div className="m-3">
                  <h5 className="change_heading mt-3 text-left">
                  I have more questions.
                  </h5>
                </div>
              </button>
            ) : (
              <div className="card borders mt-3">
                <button
                  className="btn-block rechange_btn"
                  onClick={RechangeScFrCont}
                >
                  <div className="d-flex">
                    <div className="m-3">
                      <i class="bi bi-question-diamond-fill change_icon"></i>
                    </div>
                    <div className="m-3 text-left">
                      <h5 className="change_heading">I have more questions.</h5>
                      <p className="change_para">
                      Please search our Help & Inspiration Center or contact us.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnclickChange;
