import React from "react";
import PatientReviewSec from "./components/PatientReview";

import BookingDiv from "./BookingDiv";
import ProfileDetaiDiv from "./components/ProfileDetaiDiv";
import "./components/profilePage.css";
import AboutDetails from "./components/AboutDetails";
import EducationBackground from "./components/EducationBackground";
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
          <AboutDetails />
          <EducationBackground />
          <PatientReviewSec />
          <FaqSec />
        </div>
      </div>
    </div>
  );
}
