import React from "react";

const Blog = () => {
  return (
    <div className="Blog">
      <div className="blogHead">
        <h1 className="blogHead1">
          I want to learn about
          <span>
            <select class="blogHeaddropdown">
              <option selected> everything</option>
              <option> Hiring $ Recruiting </option>
              <option> Human Resourses</option>
              <option> Pre employment </option>
              <option> Remote Hiring</option>
              <option> Test Gorilla</option>
            </select>
          </span>
        </h1>
      </div>

      <div className="blog-card">
        <div>
          <div className="row blogRow mt-5">
            <div className="col-md-4 m-auto leftcard1">
              <div className="card cardl1 ">
                <img
                  src="https://www.testgorilla.com/wp-content/uploads/2022/05/essential-hard-and-soft-skills-for-java-developers.jpg.webp"
                  className="img-fluid"
                  alt=""
                ></img>
                <a href="" className="head1">
                  29 essential hard and soft skills for java developers
                </a>
                <p>
                  Are you looking for a developer with exceptional Java skills?
                </p>
              </div>
            </div>
            <div className=" col-md-4 rightcard1">
              <div className="card   cardr1 mt-5">
                <img
                  src="https://www.testgorilla.com/wp-content/uploads/2022/05/accounts-payable-interview-questions.jpg.webp"
                  className="img-fluid"
                  alt=""
                ></img>
                <a href="" className="head1">
                  25 accounts payable interview questions
                </a>
                <p>
                  Are you looking for an easy way to hire an accounts payable
                  expert for your team?
                </p>
              </div>
            </div>

            <div className="row blogRow">
              <div className="col-md-4 m-auto leftcard1">
                <div className="card cardl1 ">
                  <img
                    src="https://www.testgorilla.com/wp-content/uploads/2022/05/71_Ruby_on_Rails_interview_questions_to_ask_developers.jpg.webp"
                    className="img-fluid"
                    alt=""
                  ></img>
                  <a href="" className="head1">
                  71 Ruby on Rails interview questions to ask developers
                  </a>
                  <p>
                  Do you need an expert Ruby on Rails developer for your organization?
                  </p>
                </div>
              </div>
              <div className="col-md-4 rightcard1">
                <div className="card cardr1 ">
                  <img
                    src="https://www.testgorilla.com/wp-content/uploads/2022/05/Basic_knowledge_of_Adobe_Photoshop.jpg.webp"
                    className="img-fluid"
                    alt=""
                  ></img>
                  <a href="" className="head1">
                  Basic knowledge of Adobe Photoshop
                  </a>
                  <p>
                  When someone mentions Adobe Photoshop do you immediately think of those unintentionally
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-auto leftcard1">
              <div className="card cardl1 ">
                <img
                  src="https://www.testgorilla.com/wp-content/uploads/2022/05/Your_recruitment_teams_guide_to_salesforce_skills.jpeg.webp"
                  className="img-fluid"
                  alt=""
                ></img>
                <a href="" className="head1">
                Your recruitment team's guide to Salesforce skills
                </a>
                <p>
                More than 150,000 businesses are using Salesforce. In 2022, it has a 19.8% share of the customer relationship                </p>
              </div>
            </div>
            <div className=" col-md-4 rightcard1">
              <div className="card   cardr1 mt-5">
                <img
                  src="https://www.testgorilla.com/wp-content/uploads/2022/05/How_to_develop_leadership_skills_in_your_workplace-01.jpg.webp"
                  className="img-fluid"
                  alt=""
                ></img>
                <a href="" className="head1">
                How to develop leadership skills in your workplace                </a>
                <p>
                Are good leaders born, or can they be made? Does an effective leadership and management test exist?
                </p>
              </div>
            </div>
            <div className="col-md-4 m-auto leftcard1">
              <div className="card cardl1 ">
                <img
                  src="https://www.testgorilla.com/wp-content/uploads/2022/04/How_TestGorilla_transformed_Digital_Cares_hiring_process.jpg.webp"
                  className="img-fluid"
                  alt=""
                ></img>
                <a href="" className="head1">
                How TestGorilla transformed Digital Care's hiring process
                </a>
                <p>
                Digital Care is a South African business process outsourcing (BPO) company working with large 
                </p>
              </div>
            </div>
            <div className=" col-md-4 rightcard1">
              <div className="card   cardr1 mt-5">
                <img
                  src="https://www.testgorilla.com/wp-content/uploads/2022/04/How_TestGorilla_reduced_time_to_hire_for_SiddhiSai_Web_Solutions.jpg.webp"
                  className="img-fluid"
                  alt=""
                ></img>
                <a href="" className="head1">
                How TestGorilla reduced time to hire for SiddhiSai Web Solutions
                </a>
                <p>
                SiddhiSai Web Solutions is a software development company providing web and mobile development services
                </p>
              </div>
            </div>
            <div className="col-md-4 m-auto leftcard1">
              <div className="card cardl1 ">
                <img
                  src="https://www.testgorilla.com/wp-content/uploads/2022/05/100_SEO_interview_questions_to_hire_an_SEO_professional.jpg.webp"
                  className="img-fluid"
                  alt=""
                ></img>
                <a href="" className="head1">
                100+ SEO interview questions to hire an SEO professional
                </a>
                <p>
                How critical is SEO for your enterprise?
                </p>
              </div>
            </div>
            <div className=" col-md-4 rightcard1 bcrdlast">
              <div className="card   cardr1 mt-5 ">
                <img
                  src="https://www.testgorilla.com/wp-content/uploads/2022/04/Estrin_Legal_Staffing_makes_more_placements_faster_with_TestGorilla.jpg.webp"
                  className="img-fluid"
                  alt=""
                ></img>
                <a href="" className="head1">
                Estrin Legal Staffing makes more placements faster with TestGorilla
                </a>
                <p>
                Estrin Legal Staffing is an L.A.-based company that provides staffing services for legal roles nationwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
