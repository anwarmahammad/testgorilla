import React, { useState, useEffect } from "react";

const Contact = () => {
  const initialValues = {
    email: "",
    fname: "",
    lname: "",
    textarea: "",
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

    if (!values.email) {
      errors.email = "Please complete this required field";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.fname) {
      errors.fname = "Please complete this required field";
    }
    if (!values.lname) {
      errors.lname = "Please complete this required field";
    }
    if (!values.textarea) {
      errors.textarea = "Please complete this required field";
    }

    return errors;
  };

  return (
    <div className="contact">
      <div className="contact-heading ml-5 ">
        <i class="fas fa-envelope contact-heading-icon"> </i>
        <span className="Cname">Contact</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="card Contactcard m-5 p-5">
            <h2 className="mt-3 mb-5">
              We'll reply via email within one business day.
            </h2>
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
            <div>
              <input
                className="input1 form-control"
                type="email"
                id="email"
                name="email"
                value={inputValues.email}
                placeholder="Work email address*"
                onChange={handleChange}
              />
              <p style={{ color: "red", fontSize: "10px" }}>
                {formErrors.email}
              </p>
            </div>
            <div>
              <label>How can we Help?</label>
              <textarea
                className="form-control Textarea1"
                name="textarea"
                value={inputValues.textarea}
                onChange={handleChange}
                rows={6}
                placeholder="The more information you Provide, the better we can Help You..."
              ></textarea>
              <p style={{ color: "red", fontSize: "12px" }}>
                {formErrors.textarea}
              </p>
            </div>

            <button
              type="submit"
              id="submit-button"
              className="btn btn-success next  mt-5"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
