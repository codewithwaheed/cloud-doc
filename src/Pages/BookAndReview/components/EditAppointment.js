import { format as formatDate } from "date-fns";
import React, { useState } from "react";
import BookingCalender from "../../ProfilePage/components/BookingCalender";

export default function EditAppointment({ defaultValue }) {
  const [activeClander, setactiveClander] = useState(false);
  const [currentDate, setCurrentDate] = useState(defaultValue);

  return (
    <div className="editAppointment">
      <div className="inputDiv">
        <label className="label">Appointment Time</label>
        {activeClander ? (
          <BookingCalender
            selected={currentDate}
            onSelect={(v) => {
              setCurrentDate(v);
              setactiveClander(false);
            }}
            hideHeader
          />
        ) : (
          <div style={{ position: "relative" }}>
            <input
              className="textInput"
              defaultValue={formatDate(currentDate, "PPpp")}
              disabled
            ></input>
            <div
              onClick={() => setactiveClander(true)}
              className="editBtn textBlue"
            >
              edit
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
