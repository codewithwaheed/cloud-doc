import React, { useState } from "react";
import { InputDiv } from "../../PatientLogin/PatientLoginPage";

export default function AddPhoneNumber() {
  const [active, setActive] = useState(false);
  return (
    <div>
      {active && <AddPhoneNumberModal onClose={() => setActive(false)} />}
      <div className="inputDiv">
        <label className="label">
          Phone number where the doctor can contact you
        </label>
        <div className="inputStyle py-0">
          <div onClick={() => setActive(true)} className="actionText">
            Add Phone Number
          </div>
        </div>
      </div>
    </div>
  );
}

const AddPhoneNumberModal = ({ onClose, callBack }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {};
  return (
    <div onClick={onClose} className="mainModal">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="patientModalDiv"
      >
        <div className="w-100" onClick={onClose}>
          <img
            src="/images/close.png"
            className="float-right pointer"
            style={{ width: "15px" }}
          ></img>
        </div>
        <div className="title mb-1">Verify your phone number</div>
        <div className="text mb-3">
          We'll send a PIN to this number right away
        </div>
        <InputDiv />
        <div>
          <button
            onClick={handleContinue}
            className=" loginBtn signUpButton mb-2"
          >
            Text me with PIN
          </button>
          <button
            onClick={handleContinue}
            className=" loginBtn loginButton mb-2"
          >
            Call me with PIN
          </button>
        </div>
      </div>
    </div>
  );
};
