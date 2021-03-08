import React from "react";

export default function FiveStarDoctor() {
  return (
    <div className="lightBg">
      <div className="basicLandingRow fiveStarPage ">
        <div className="mainFlex">
          <div className="contentSec">
            <div className="basicLandingTitle">Are you a five-star doctor?</div>
            <div className="titleSub">
              Sign-up to reach millions of patients.
            </div>
            <div className="point">
              <div className="pointCircle"></div>Get more appointments through
              online bookings
            </div>
            <div className="point">
              <div className="pointCircle"></div>Create and view patient records
              from anywhere
            </div>
            <div className="point">
              <div className="pointCircle"></div>Manage your schedule
              efficiently
            </div>

            <img
              src="/images/fiveStar.svg"
              className="img d-inline d-md-none mt-3"
              alt="fiveStar"
            ></img>

            <div className="mobileCenter">
              <button className="primaryBtn btnJoin">Join Now</button>
            </div>
          </div>
          <div className="imgSec">
            <img
              src="/images/fiveStar.svg"
              className="img d-none d-md-inline"
              alt="fiveStar"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
