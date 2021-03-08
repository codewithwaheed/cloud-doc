import React from "react";

export default function ChooseDoctor() {
  return (
    <div className=" basicLandingRow chooseDoctor ">
      <div className="mainFlex">
        <div className="doctorCard">
          <img
            src="/images/cloudDoctor.svg"
            alt="cloudDoctor"
            className="docImg"
          ></img>
          <div className="content">
            <div className="title">The Cloud doc</div>
            <div className="text">
              Video Consultations with Top Specialists in{" "}
              <span className="poppinsSb">Rs. 500</span>
            </div>
            <button className="btnBook blueBg mt-4 mt-sm-2">
              Book an Appointment
            </button>
          </div>
        </div>
        <div className="doctorCard mr-0">
          <img
            src="/images/onlineDoc.svg"
            alt="cloudDoctor"
            className="docImg"
          ></img>
          <div className="content">
            <div className="title">Doctors online now</div>
            <div className="text">
              Instant Video Consultation with Top Doctors
            </div>
            <button className="btnBook greenBg">Start Consulting</button>
          </div>
        </div>
      </div>
    </div>
  );
}
