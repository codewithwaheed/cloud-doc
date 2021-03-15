import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomChecks from "../ProfilePage/components/CustomChecks";
import { InputDiv } from "./PatientLoginPage";

export default function SingupPage() {
  return (
    <div className="headerPadding bg-light">
      <div className="patientSignUp">
        <div className="title">Create an account</div>
        <Link to="/patient/login">
          <div className=" pointer textBlue  poppinsSb mt-2 mb-5">
            Already have one? Log in.
          </div>
        </Link>
        <InputDiv label="Enter Your Email" />
        <InputDiv label="Confirm your email" />
        <InputDiv
          label="Create a password"
          placeholder="At least 8 charachters long"
        />
        <div className="inputDiv">
          <label className="label">Your name</label>
          <div className="flexCenter">
            <input
              className="textInput"
              placeholder="First"
              style={{ width: "50%" }}
            ></input>
            <input
              className="textInput"
              placeholder="Last"
              style={{ width: "50%" }}
            ></input>
          </div>
        </div>
        <div className="inputDiv">
          <label className="label">Date of birth</label>
          <div className="d-flex">
            <input className="textInput" maxLength="2" placeholder="MM"></input>
            <input className="textInput" maxLength="2" placeholder="DD"></input>
            <input
              className="textInput"
              maxLength="4"
              placeholder="YYYY"
            ></input>
          </div>
        </div>
        <div className="inputDiv">
          <label className="label">Sex</label>
          <CustomChecks value1="Male" value2="Femail" />
        </div>

        <div className="my-4">
          <CheckTerms />
        </div>

        <button className=" loginBtn signUpButton mb-5">
          Save and continue
        </button>
      </div>
    </div>
  );
}

const CheckTerms = ({}) => {
  const [active, setactive] = useState(false);
  return (
    <div
      onClick={() => {
        setactive(!active);
      }}
      className="d-flex"
    >
      <div className={active ? "circle circleActive" : "circle"}></div>
      <div>
        I have read and accept Zocdoc's
        <span className="textBlue poppinsSb "> Terms of Use</span> and
        <span className="textBlue poppinsSb"> Privacy Policy.</span>
      </div>
    </div>
  );
};
