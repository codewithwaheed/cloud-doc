import React from "react";
import BookingCalender from "./components/BookingCalender";

export default function BookingDiv() {
  return (
    <div>
      <div className="bookingDiv">
        <div className="secTitle">Book an appointment for free</div>

        <div className="inputDiv">
          <lable className="lable">What's the reason for your visit?</lable>
          <select className="input" defaultValue="illness">
            <option value="illness">illness</option>
            <option value="Genrel Consultation">Genrel Consultation</option>
          </select>
        </div>
        <div className="inputDiv">
          <lable className="lable">
            Has the patient seen this doctor before?
          </lable>
          <div className="d-flex">
            <div className="radioDiv">
              <input
                type="radio"
                id="no"
                name="gender"
                value="no"
                defaultChecked
              />
              <label className="radioLable" htmlFor="no">
                No
              </label>
            </div>
            <div className="radioDiv">
              <input type="radio" id="yes" name="gender" value="yes" />
              <label className="radioLable" htmlFor="yes">
                Yes
              </label>
            </div>
          </div>
        </div>
        <div className="inputDiv">
          <lable className="lable">Choose the type of appointment</lable>
          <div className="d-flex">
            <div className="radioDiv">
              <input
                type="radio"
                id="person"
                name="videoR"
                value="person"
                defaultChecked
              />
              <label className="radioLable" htmlFor="person">
                In-person
              </label>
            </div>
            <div className="radioDiv">
              <input type="radio" id="video" name="videoR" value="video" />
              <label className="radioLable" htmlFor="video">
                Video visit
              </label>
            </div>
          </div>
        </div>
        <div className="inputDiv">
          <lable className="lable">Select an available time</lable>
          <BookingCalender />
        </div>

        <button className="bookingBtn">Continue Booking</button>
      </div>
    </div>
  );
}
