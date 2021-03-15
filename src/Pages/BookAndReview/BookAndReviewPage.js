import React from "react";
import CustomSelect from "../../components/CustomSelect";
import { InputDiv } from "../PatientLogin/PatientLoginPage";
import CustomChecks from "../ProfilePage/components/CustomChecks";
import "./components/BookAndReview.css";
export default function BookAndReviewPage() {
  const reasonData = [
    { value: "inlness", text: "illness" },
    { value: "consulation", text: "Genrel Consultation" },
  ];
  return (
    <div className="headerPadding bg-light bookAndReview">
      <ProfileHeader />
      <div className="bg-light">
        <div className="reviewRow">
          <div className="title">Review and book</div>
          <div className="inputDiv">
            <label className="label">Who will be seeing the doctor?</label>
            <div className></div>
          </div>
          <InputDiv label="Phone number where the doctor can contact you" />

          <div className="inputDiv">
            <label className="label">What's the reason for your visit?</label>
            <CustomSelect selected="illness" options={reasonData} />
          </div>
          <div className="inputDiv">
            <label className="label">
              Have you seen Monica Martinez before?
            </label>
            <CustomChecks value1="I'm a new patient" value2="" />
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
