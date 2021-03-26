import React, { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import { InputDiv } from "../PatientLogin/PatientLoginPage";
import CustomChecks from "../ProfilePage/components/CustomChecks";
import AddPhoneNumber from "./components/AddPhoneNumber";
import { Link } from "react-router-dom";
import "./components/BookAndReview.css";
import EditAppointment from "./components/EditAppointment";
import WhoSeeingDoctor from "./components/WhoSeeingDoctor";
export default function BookAndReviewPage() {
  const reasonData = [
    { value: "inlness", text: "illness" },
    { value: "consulation", text: "Genrel Consultation" },
  ];

  const [appointmentDate, setAppointmentDate] = useState(new Date());

  return (
    <div className="headerPadding bg-light bookAndReview">
      <ProfileHeader />
      <div className="bg-light">
        <div className="reviewRow">
          <div className="title">Review and book</div>
          <WhoSeeingDoctor />
          <AddPhoneNumber />
          <div className="inputDiv">
            <label className="label">What's the reason for your visit?</label>
            <CustomSelect selected="illness" options={reasonData} />
          </div>
          <div className="inputDiv">
            <label className="label">
              Have you seen Monica Martinez before?
            </label>
            <CustomChecks
              value1="I'm a new patient"
              value2="I've seen this doctor before"
            />
            <EditAppointment defaultValue={appointmentDate} />
            <InputDiv
              label="Notes for the doctor's office (optional)"
              textArea
            />
            <CheckTerms />
            <Link to="/booking/review-booking-loading">
              <button className=" loginBtn signUpButton mt-5 mb-5">
                Book appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProfileHeader = () => {
  return (
    <div className="bg-white w-100 ">
      <div className="headerProfileSec">
        <div>
          <img src="/images/searchProfile.png" className="profileImg"></img>
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
  );
};

const CheckTerms = ({}) => {
  const [active, setactive] = useState(false);
  return (
    <div
      onClick={() => {
        setactive(!active);
      }}
      className="d-flex patientSignUp p-0"
    >
      <div className={active ? "circle circleActive" : "circle"}></div>
      <div>
        I certify that the insurance or payment selected is the one that I will
        be using when I see this medical professional, and that I have read and
        agree to the Cloud doc{" "}
        <span className="textBlue poppinsSb pointer">terms of use</span>.
      </div>
    </div>
  );
};
