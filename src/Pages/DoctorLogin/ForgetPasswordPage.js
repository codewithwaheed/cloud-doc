import React from "react";
import { InputDiv } from "../PatientLogin/PatientLoginPage";

export default function ForgetPasswordPage() {
  return (
    <div className="headerPadding bg-light">
      <div className="forgetRow">
        <div className="title">Create a new password</div>
        <div className="text">
          We'll email you a link to make a brand new password.
        </div>
        <div>
          <InputDiv label="Email" />
        </div>
        <button className="btnPrimary contBtn">Continue</button>
      </div>
    </div>
  );
}
