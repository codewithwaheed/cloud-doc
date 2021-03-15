import React from "react";
import { Link } from "react-router-dom";
import { InputDiv } from "../PatientLogin/PatientLoginPage";

export default function DoctorLogin() {
  return (
    <div className="headerPadding bg-light">
      <div className="loginRow">
        <div>
          <div className="title">Log in with email</div>
          <InputDiv placeholder="email address" />
          <InputDiv placeholder="password" />
          <button className="loginBtn signUpButton">Login</button>
          <Link to="/auth/forget">
            <div className=" pointer textBlue text-center poppinsSb my-3">
              Forget your password ?
            </div>
          </Link>

          <Link to="/patient/login">
            <div className=" pointer textBlue text-center poppinsSb my-3">
              parent login
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
