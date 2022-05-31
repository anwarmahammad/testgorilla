import React from "react";
import ReactPlayer from "react-player"
const WatchVideo = () => {
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row champion_bg">
          <div className="col-md-6 champion_img">
            <img
              className="img-fluid"
              src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/people-conection-1.png"
            />
          </div>
          <div className="col-md-6 champion_content">
            <h2 className="champion_heading">
              Champion a <br></br> data-driven HR culture.
            </h2>
            <p className="champion-para">
              We rank your applicants according to test scores certified by our
              experts. This means your HR team can rely on good data to make
              important decisions – and not just their gut feeling.
            </p>
            <p className="champion-para">
              With TestGorilla, you’ll lead the shift to a more professional and
              data-focused HR culture in your company.
            </p>
            <div className="champion_button">
              <button className="btn champion_btn">Learn More</button>
            </div>
          </div>
          <div className="col-md-6 champion_img-hidden">
            <img
              className="img-fluid"
              src="https://3rhv048ivse2zy4er2sbddh1-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/people-conection-1.png"
            />
          </div>
        </div>
      </div>
      <div className="col-md-8 text-center m-auto player">
        <h2 className="talent_heading">
          Watch what TestGorilla can do for you
        </h2>
      </div>
      <div className=" col-sm-8 m-auto text-center mt-5">
        <ReactPlayer
          url="https://youtu.be/rF5Yor08uGw"
          width="100%"
          height="550px"
          className="react-player"
          controls={true}
          playing
          playIcon={
            <button className="player_button">
              <i class="fas fa-play"></i>
            </button>
          }
          light="https://img.freepik.com/free-photo/happy-smiling-woman-working-laptop-computer-while-sitting-floor-with-legs-crossed-pointing-finger-away_255757-2942.jpg?w=740"
        />
      </div>
      <div className="row talent_row_bg">
        <div className="col-md-10 m-auto text-center">
          <h2 className="talent_heading">
            Top talent is priceless. We make finding it affordable.
          </h2>
        </div>
        <div className="col-sm-8 m-auto text-center">
          <div className="talent_para">
            <p>
              A time-consuming screening process costs you a lot. Painful
              mis-hires cost you much, much more. With TestGorilla, you avoid
              all of this and see a huge return on investment every single year.
            </p>
            <p>Start screening with us today on our free plan.</p>
          </div>
          <div>
            <button className="btn talent-btn">Talk to us</button>
            <button className="btn talent-signup-btn">
              SignUp free <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;


















