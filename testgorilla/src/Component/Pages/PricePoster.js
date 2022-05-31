import React from "react";
import "./Pricing.css";

const PricePoster = () => {
  return (
    <div>
      <div className="container-fluid mt-5 mb-5">
        <div className="row poster_row">
          <div className="col-md-6  col-sm-12 order-lg-0 order-sm-1 order-md-1 poster_margin">
            <img
              className="img-fluid poster_img"
              src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/woman-smiling.png"
            />
          </div>
          <div className="col-md-6 col-sm-12 order-lg-1 order-sm-0 order-md-0 poster_margin1">
            <div className="row">
              <div className="col-2 ">
                <i class="fas fa-quote-left poster_icon pr-1"></i>
              </div>
              <div className="col-10 ">
                <p className="poister_content">
                  We receive 100’s of applications each year and struggled to
                  select the best ones efficiently and without bias. With
                  TestGorilla we now automate our candidate screening based on
                  job skills and fit. It saves us so much time and good
                  candidates love to showcase their talent!
                </p>
                <p className=""><strong>Hillary</strong>, Head of Global Recruiting, AKG International</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePoster;
