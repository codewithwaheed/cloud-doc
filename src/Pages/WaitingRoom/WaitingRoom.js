import React from "react";
import "./components/waitingRoom.css";
export default function WaitingRoom() {
  return (
    <div className="container-fluid headerPadding  ">
      <div className="row basicRow waitingRoom px-0">
        <div className="col-md-6 col-sm-12">
          <div className="videoDiv">
            <div>
              <div className="title">
                Your provider cannot start the video visit until you have
                enabled your camera and microphone.
              </div>
              <div className="centerFlex">
                <button
                  style={{ width: "80%" }}
                  className=" loginBtn signUpButton mt-5"
                >
                  Enable camera and microphone
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className=" flexCenter header">
            <img
              src="/images/searchProfile.png"
              alt="profile"
              className="img"
            ></img>
            <div className="ml-2">
              <div className="waitingText">Waiting room of</div>
              <div className="name">Dr. Sohan Varma, MD</div>
              <div className="workText">Doctor</div>
            </div>
          </div>
          <div className="flexBetweenCenter detailsDiv">
            <div className="item">
              <div className="title">Patient</div>
              <div className="text"> Sohan Varma</div>
            </div>
            <div className="item">
              <div className="title">Appointment time</div>
              <div className="text"> 9:00 ETD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
