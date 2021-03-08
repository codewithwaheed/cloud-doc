import React from "react";
import PatientReviewSec from "./components/PatientReview";

import BookingDiv from "./BookingDiv";
import ProfileDetaiDiv from "./components/ProfileDetaiDiv";
import "./components/profilePage.css";
import ProfileExtraDetail from "./ProfileExtraDetail";
import FaqSec from "./components/FaqSec";
export default function ProfilePage() {
  return (
    <div className="headerPadding">
      <div className="container-fluid px-0">
        <div className="row basicRow  px-4 profileSec">
          <ProfileDetaiDiv />
          <div className="col-md-4">
            <BookingDiv />
          </div>

          <div className="col-md-8 col-sm-12">
            <ProfileExtraDetail />
            <PatientReviewSec />
            <FaqSec />
          </div>
        </div>
      </div>
    </div>
  );
}
