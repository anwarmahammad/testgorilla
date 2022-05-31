import React, { useState, useEffect } from "react";

const Talktosales = () => {
  const initialValues = {
    Wname: "",
    fname: "",
    lname: "",
    job: "",
    company: "",
    planning: "",
    tracking: "",
  };
  const [inputValues, setInputValue] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation(inputValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(inputValues);
    }
  }, [formErrors]);

  const validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.Wname) {
      errors.Wname = "Please complete this required field";
    } else if (!regex.test(values.Wname)) {
      errors.Wname = "This is not a valid email format!";
    }
    if (!values.fname) {
      errors.fname = "Please complete this required field";
    }
    if (!values.lname) {
      errors.lname = "Please complete this required field";
    }
    if (!values.job) {
      errors.job = "Please complete this required field";
    }
    if (!values.company) {
      errors.company = "Please complete this required field";
    }
    if (!values.planning) {
      errors.planning = "Please select an option from the dropdown menu.";
    }
    if (!values.tracking) {
      errors.tracking = "Please select an option from the dropdown menu.";
    }

    return errors;
  };

  return (
    <div className="background-sales">
      <h1 className="tsheading">Sign up for a free 30-minute live demo</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="card talktosales m-5 p-5">
            <div>
              
              <input
                className="input1 form-control"
                type="email"
                id="Wname"
                name="Wname"
                value={inputValues.Wname}
                placeholder="Work email address*"
                onChange={handleChange}
              />
          
              <p style={{ color: "red", fontSize: "10px" }}>
                {formErrors.Wname}
              </p>
            </div>
            <div className="row ">
              <div className="col-sm-6">
                <input
                  className="input2 form-control "
                  type="text"
                  id="fname"
                  name="fname"
                  value={inputValues.fname}
                  placeholder="First name:"
                  onChange={handleChange}
                />
                <p style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.fname}
                </p>
              </div>
              <div className="col-sm-6">
                <input
                  className="input3 form-control "
                  type="text"
                  id="lname"
                  name="lname"
                  value={inputValues.lname}
                  placeholder="Last name:"
                  onChange={handleChange}
                />
                <p style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.lname}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <input
                  className="input4 form-control "
                  type="text"
                  id="job"
                  name="job"
                  value={inputValues.job}
                  placeholder="Job function*"
                  onChange={handleChange}
                />
                <p style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.job}
                </p>
              </div>
              <div className="col-sm-6">
                <input
                  className="input5 form-control "
                  type="text"
                  id="company"
                  placeholder="Company name*"
                  name="company"
                  value={inputValues.company}
                  onChange={handleChange}
                />
                <br />
                <p style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.company}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label className="input">
                  How many people are you planning to hire next year?*
                </label>
              </div>
              <div className="col-sm-6">
                <select
                  className="drop1 form-control "
                  type="select"
                  name="planning"
                  value={inputValues.planning}
                  onChange={handleChange}
                >
                  <option>Please Select</option>
                  <option>Less than 5</option>
                  <option>Between 5 and 10</option>
                  <option>Between 11 and 20</option>
                  <option>Between 21 and 250</option>
                  <option>Between 250 and 1000</option>
                  <option>More than 1000</option>
                </select>

                <p style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.planning}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label className="input">
                  Do you have an Applicant Tracking System (ATS)?
                </label>
              </div>
              <div className="col-sm-6">
                <select
                  className="drop2 form-control"
                  type="select"
                  name="tracking"
                  value={inputValues.tracking}
                  onChange={handleChange}
                >
                  <option>unknown</option>
                  <option>Avature</option>
                  <option>BambooHR</option>
                  <option>BullHorn</option>
                  <option>Greenhouse</option>
                  <option>Homerun</option>
                  <option>iCIMS</option>
                  <option>JazzHR</option>
                  <option>Jobvite</option>
                  <option>lever</option>
                  <option>Manatal</option>
                  <option>None</option>
                  <option>other</option>
                  <option>Recrutiee</option>
                  <option>SmartRecruitee</option>
                  <option>Workday</option>
                </select>
                <p style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.tracking}
                </p>
              </div>
            </div>
            <p className="mt-5">
              TestGorilla needs the contact information you provide to us to
              contact you about our products and services. You may unsubscribe
              from these communications at any time. For information on how to
              unsubscribe, as well as our privacy practices and commitment to
              protecting your privacy, please review our Privacy Policy.
            </p>

            <button
              type="submit"
              id="submit-button"
              className="btn btn-primary next"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Talktosales;


