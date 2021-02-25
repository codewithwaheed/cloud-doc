import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HeaderSideBar extends Component {
  render() {
    const { activeSideBar } = this.props;
    return (
      <div
        className={
          activeSideBar ? "headerSideBar headerSideBarActive" : "headerSideBar"
        }
      >
        <div className="sideBarItemDiv">
          <button className="primaryBtn btnSignUp">Sign Up</button>
          <button className="primaryBtn btnLogin">Login</button>
          <div
            onClick={() => {
              this.props.closeSideBar();
            }}
            className="sideBarItem"
          >
            Home
          </div>
          <div
            onClick={() => {
              this.props.closeSideBar();
            }}
            className="sideBarItem"
          >
            About Us
          </div>
          <div
            onClick={() => {
              this.props.closeSideBar();
            }}
            className="sideBarItem"
          >
            Doctors
          </div>
          <div
            onClick={() => {
              this.props.closeSideBar();
            }}
            className="sideBarItem"
          >
            Contact Us
          </div>
        </div>
      </div>
    );
  }
}
