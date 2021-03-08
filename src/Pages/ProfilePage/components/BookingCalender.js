import {
  format as formatDate,
  addDays,
  isSameDay,
  subDays,
  isEqual,
} from "date-fns";
import React, { useState } from "react";

export default function BookingCalender() {
  const [currentDate, setcurrentDate] = useState(new Date());
  const [controllerDate, setControllerDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const timeSlotsData = [
    {
      date: currentDate,
      timeSlots: [
        currentDate.setHours(1, 30, 0, 0),
        currentDate.setHours(2, 30, 0, 0),
        currentDate.setHours(3, 30, 0, 0),
        currentDate.setHours(4, 30, 0, 0),
        currentDate.setHours(5, 30, 0, 0),
      ],
    },
    {
      date: addDays(currentDate, 1),
      timeSlots: [
        addDays(currentDate.setHours(22, 30, 0, 0), 1),
        addDays(currentDate.setHours(23, 30, 0, 0), 1),
        addDays(currentDate.setHours(3, 30, 0, 0), 1),
        addDays(currentDate.setHours(4, 30, 0, 0), 1),
        addDays(currentDate.setHours(5, 30, 0, 0), 1),
      ],
    },
    {
      date: addDays(currentDate, 2),
      timeSlots: [
        addDays(currentDate.setHours(1, 30, 0, 0), 2),
        addDays(currentDate.setHours(2, 30, 0, 0), 2),
        addDays(currentDate.setHours(3, 30, 0, 0), 2),
        addDays(currentDate.setHours(4, 30, 0, 0), 2),
      ],
    },
    {
      date: addDays(currentDate, 3),
      timeSlots: [
        addDays(currentDate.setHours(1, 30, 0, 0), 3),
        addDays(currentDate.setHours(2, 30, 0, 0), 3),
        addDays(currentDate.setHours(3, 30, 0, 0), 3),
        addDays(currentDate.setHours(4, 30, 0, 0), 3),
        addDays(currentDate.setHours(5, 30, 0, 0), 3),
      ],
    },
    {
      date: addDays(currentDate, 4),
      timeSlots: [
        addDays(currentDate.setHours(1, 30, 0, 0), 4),
        addDays(currentDate.setHours(2, 30, 0, 0), 4),
        addDays(currentDate.setHours(3, 30, 0, 0), 4),
        addDays(currentDate.setHours(4, 30, 0, 0), 4),
      ],
    },
  ];

  // next days
  const NextDays = () => {
    if (isSameDay(controllerDate, addDays(currentDate, 8))) return;
    setControllerDate(addDays(controllerDate, 4));
  };
  // previous days
  const PreviousDays = () => {
    if (isSameDay(currentDate, controllerDate)) return;
    setControllerDate(subDays(controllerDate, 4));
  };
  //   set SelectedDate
  const SetSelectedDate = (date) => {
    setSelectedDate(date);
  };

  //   render Days
  const renderDays = () => {
    var CloneDate = controllerDate;

    const dayArr = [1, 2, 3, 4];
    return dayArr.map((item) => {
      if (item !== 1) CloneDate = addDays(CloneDate, 1);
      var monthName = formatDate(CloneDate, "LLL");
      var dayName = formatDate(CloneDate, "ccc");
      var date = formatDate(CloneDate, "d");
      return (
        <div key={item} className="itemDiv">
          <div className="dayText" style={{ fontFamily: "poppins" }}>
            {dayName}
          </div>
          <div className="dayText">
            {monthName} {date}
          </div>
        </div>
      );
    });
  };

  const renderTimeSlots = (timeSlots) => {
    return (
      <div>
        {timeSlots.map((item) => {
          return (
            <div
              onClick={() => SetSelectedDate(item)}
              className={
                isEqual(selectedDate, item) ? "slots slotsActive" : "slots"
              }
            >
              {" "}
              {formatDate(item, "p")}
            </div>
          );
        })}
      </div>
    );
  };
  const renderSlots = () => {
    var cloneDate = controllerDate;
    var count = 0;
    return timeSlotsData.map((item, index) => {
      if (count > 3) return;
      if (index !== 0) cloneDate = addDays(cloneDate, 1);

      if (isSameDay(item.date, cloneDate)) {
        count++;

        return renderTimeSlots(item.timeSlots);
      }

      return;
    });
  };

  //   main return
  return (
    <div>
      <div className="bookingCalenderDiv">
        <div className="header">
          <span> 14211 FM 2920 Rd, Ste 110, Tomball, TX 77377</span>
        </div>
        <div className="calenderController">
          <img
            onClick={PreviousDays}
            src="/images/arrowLeft.png"
            className={
              isSameDay(controllerDate, currentDate)
                ? "arrowImg opacityHalf"
                : "arrowImg"
            }
          ></img>
          {renderDays()}
          <img
            onClick={NextDays}
            src="/images/arrowRight.png"
            className={
              isSameDay(controllerDate, addDays(currentDate, 8))
                ? "arrowImg opacityHalf"
                : "arrowImg"
            }
          ></img>
        </div>
        <div className="innerCalender">{renderSlots()}</div>
      </div>
    </div>
  );
}
