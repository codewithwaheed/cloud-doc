import React, { useState } from "react";
import HeaderSideBar from "./HeaderSideBar";
export default function Header() {
  const [active, setHandleActive] = useState(false);

  //   close sideBar
  const closeSideBar = () => {
    setHandleActive(false);
  };

  //   main return
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-transparent bg-transparent">
        <a className="navbar-brand" href="#">
          <img src="/images/logoWhite.png" className="logo" alt="logo"></img>{" "}
          <img
            src="/images/logoWhiteText.png"
            className="logoText d-none d-sm-inline"
            alt="logo"
          ></img>{" "}
        </a>
        {/* HeaderSideBar Component*/}
        <HeaderSideBar activeSideBar={active} closeSideBar={closeSideBar} />

        {/* SideBarButton */}
        <div className="d-inline d-md-none">
          <div
            onClick={() => setHandleActive(!active)}
            className={
              active ? " navaBarButton activeSideBar " : "navaBarButton"
            }
          >
            <div className="navBarLine navBarLine1"></div>
            <div className="navBarLine navBarLine2"></div>
            <div className="navBarLine navBarLine3"></div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          <button className=" btnLogin" type="button">
            Login/Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}
