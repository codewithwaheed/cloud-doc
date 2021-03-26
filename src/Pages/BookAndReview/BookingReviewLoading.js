import React, { useState } from "react";
import AppointmentBookedModal from "./components/AppointmentBookedModal";
export default function BookingReviewLoading() {
  const [bookModal, setbookModal] = useState(true);
  return (
    <div className="headerPadding bg-light bookLoading">
      {bookModal && (
        <AppointmentBookedModal onClose={() => setbookModal(false)} />
      )}
      <div className="header">
        <div className="flexCenter">
          <img src="/images/logoBlueHead.svg" className="logo" alt="logo"></img>
          <div className="ml-3">
            <div className="title">We're booking your appointment </div>
            <div className="text">This should take a few seconds </div>
          </div>
        </div>
      </div>
      <div className="contentFlex">
        <div>
          <div className="title">Thanks for choosing cloud doc</div>
          <div className="text">
            Please Wait while we finish booking your appointment
          </div>
        </div>
      </div>
    </div>
  );
}
