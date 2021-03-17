import React from "react";
import { Link } from "react-router-dom";
import "./components/login.css";
export default function PatientLoginPage() {
  return (
    <div className="headerPadding bg-light">
      <div className="loginRow">
        <div>
          <Link to={"/patient/signup"}>
            <button className=" loginBtn signUpButton">
              Sign up with email
            </button>
          </Link>

          <div className="orText">or</div>
          <div className="title">Log in with email</div>
          <InputDiv placeholder="email address" />
          <InputDiv placeholder="password" />
          <button className="loginBtn loginButton">Login</button>
          <Link to="/auth/forget">
            <div className=" pointer textBlue text-center poppinsSb my-3">
              Forget your password ?
            </div>
          </Link>
          <Link to="/doctor/login">
            <div className=" pointer textBlue text-center poppinsSb my-3">
              Provider login
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const InputDiv = ({
  placeholder,
  label,
  onChange,
  defaultValue,
  textArea,
}) => {
  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  };
  return (
    <div className="inputDiv">
      {label && <label className="label">{label}</label>}
      {textArea ? (
        <textarea
          onChange={handleChange}
          className="inputStyle"
          placeholder={placeholder}
          defaultValue={defaultValue}
          rows={3}
        ></textarea>
      ) : (
        <input
          onChange={handleChange}
          className="textInput"
          placeholder={placeholder}
          defaultValue={defaultValue}
        ></input>
      )}
    </div>
  );
};
