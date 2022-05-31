import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
const Backtologin = () => {
  return (
    <div>
      <div className="container backtologin">
        <div className="row card backtologinborder">
          <div className="m-auto  text-center ">
            <form>
              <img className="imag1 mt-5" src="\img\LOGO.svg" width="70%"></img>
              <div className="ui divider mt-5"></div>
              <h3>Reset Your Password</h3>
              <div className="ui form">
                <div className="field">
                  <input
                    type="text"
                    name="email"
                    className="form-control mt-5"
                    placeholder="Enter Email *"
                  />
                </div>

                <button className="btn btn-info  mt-4">
                  send Reset Link
                </button>

                <div className="mt-4">
                  <Link to='/login' className="Backto">
                    Go Back to Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backtologin;
