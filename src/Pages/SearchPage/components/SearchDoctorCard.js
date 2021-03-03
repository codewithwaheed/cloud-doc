import React from "react";

export default function SearchDoctorCard() {
  return (
    <div className="searchDoctorCard">
      <div className=" header">
        <div className="flexCenter">
          <img
            src="/images/searchProfile.png"
            className="profile  mr-md-4"
          ></img>
          <div className="">
            <div className="name">Dr.Smith</div>
            <div className="text">Neurologist</div>
            <div className="text">MBBS, FCPS (Neurology)</div>

            <div className="flexCenter skillFlex">
              <div className="skill">
                <img src="/images/clockIcon.png" className="icon"></img>
                <div>
                  <div className="title">Under 15 Min </div>
                  <div className="text">Wait Time</div>
                </div>
              </div>
              <div className="skill">
                <img src="/images/lamp.png" className="icon"></img>
                <div>
                  <div className="title">9 Years </div>
                  <div className="text">Experience</div>
                </div>
              </div>
              <div className="skill">
                <img src="/images/done.png" className="icon"></img>
                <div>
                  <div className="title"> 100%</div>
                  <div className="text">Satisfied Patients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btnSec">
          <button className="primaryBtn btnVideo">Video Consultation</button>
          <button className="primaryBtn btnBook mt-3">Book Appointment</button>
        </div>
      </div>
      <div className="textBg">
        “Very good. I felt like I was speaking with a friend and not a doctor
        but a very insightful friend.”
      </div>
      <div className="flexCenter">
        <div className="presentDiv">
          <div className="flexCenter alignStart flexNowrap  mb-3">
            <img src="/images/placeholder1.png" className="icon"></img>
            <span className="text mb-0 ml-2">
              WoodStreet Health Clinic, 15 Dallas, Texas
            </span>
          </div>
          <div className="centerDiv">
            <div className="flexCenter ">
              <div className="greenCircle"></div>
              <span className="availableText">Available Today</span>
            </div>
          </div>
        </div>
        <div className="presentDiv ml-0 ml-md-4">
          <div className="flexCenter alignStart flexNowrap mb-3">
            <img src="/images/placeholder1.png" className="icon"></img>
            <span className="text mb-0 ml-2">
              WoodStreet Health Clinic, 15 Dallas, Texas
            </span>
          </div>
          <div className="centerDiv">
            <div className="flexCenter">
              <div className="greenCircle"></div>
              <span className="availableText">Available Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
