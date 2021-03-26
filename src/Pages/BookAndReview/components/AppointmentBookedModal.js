import React from "react";

export default function AppointmentBookedModal({ onClose }) {
  return (
    <div onClick={onClose} className="mainModal appointmentBooked">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="patientModalDiv"
      >
        <div className="w-100" onClick={onClose}>
          <img
            src="/images/close.png"
            className="float-right pointer"
            style={{ width: "15px" }}
          ></img>
        </div>
        <div className="flexCenter mb-3">
          <img src="/images/bookCalender.svg"></img>
          <div className="title ml-2 mb-0" style={{ fontSize: "22px" }}>
            Your appointment is booked
          </div>
        </div>

        <div className="text mb-3">
          Your appointment has been sent for confirmation to the office of Dr.
          Smith Look out for an email shortly for confirmation.
        </div>
        <div className="">
          <div
            className="headerProfileSec mt-1 mb-3 bg-light"
            style={{ justifyContent: "flex-start" }}
          >
            <div>
              <img
                src="/images/searchProfile.png"
                className="profileImg"
                style={{ width: "70px" }}
              ></img>
            </div>
            <div>
              <div className="name">Dr. Smith</div>
              <div className="text">Tomorrow, Mar 15 - 4:00 pm CDT</div>
              <div className="text textLight">
                14211 FM 2920 Rd, Ste 110TomballTX77377
              </div>
            </div>
          </div>
        </div>
        <div className="getStartedDiv">
          <img className="logo" src="/images/logoCare.svg" alt="logoCare"></img>
          <div className="title mt-2 mb-0 " style={{ fontSize: "15px" }}>
            Stay well with The Cloud Doc
          </div>
          <div className="text mt-2">
            We can help you remember when you're due for an appointment, store
            your insurance information and medical history, and find the perfect
            doctor from the thousands on our platform.
          </div>

          <button
            onClick={() =>
              (window.location.href = "https://cloud-doc-doc.herokuapp.com/")
            }
            className=" loginBtn signUpButton mt-3"
          >
            Get Started
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
