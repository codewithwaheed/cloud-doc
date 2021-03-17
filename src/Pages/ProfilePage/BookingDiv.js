import React, { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import BookingCalender from "./components/BookingCalender";
import CustomChecks from "./components/CustomChecks";
import { withRouter } from "react-router-dom";
function BookingDiv(props) {
  const reasonData = [
    { value: "inlness", text: "illness" },
    { value: "consulation", text: "Genrel Consultation" },
  ];

  const [selectedDate, setselectedDate] = useState(null);

  const handleContinueBooking = () => {
    if (!selectedDate) {
      return;
    }
    props.history.push("/booking/review-booking");
  };

  return (
    <div>
      <div className="bookingDiv">
        <div className="secTitle">Book an appointment for free</div>

        <div className="inputDiv">
          <lable className="lable">What's the reason for your visit?</lable>
          <CustomSelect options={reasonData} selected="illness" />
        </div>
        <div className="inputDiv">
          <lable className="lable">
            Has the patient seen this doctor before?
          </lable>
          <CustomChecks value1="No" value2="Yes" />
        </div>
        <div className="inputDiv">
          <lable className="lable">Choose the type of appointment</lable>
          <CustomChecks value1="In-person" value2="Video visit" />
        </div>
        <div className="inputDiv">
          <lable className="lable">Select an available time</lable>
          <BookingCalender onSelect={(date) => setselectedDate(date)} />
        </div>

        <button onClick={handleContinueBooking} className="bookingBtn">
          Continue Booking
        </button>
      </div>
    </div>
  );
}
export default withRouter(BookingDiv);
