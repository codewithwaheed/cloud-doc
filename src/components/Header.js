import React, { useState, useEffect } from "react";
import HeaderSideBar from "./HeaderSideBar";
import { withRouter, Link } from "react-router-dom";
function Header(props) {
  // sideBar state
  const [active, setHandleActive] = useState(false);
  // const transparent Bg state
  const [transparent, setTransparent] = useState(false);
  // const active login Bg state
  const [activeLogin, setActiveLogin] = useState(false);
  // path name value
  const { location } = props;
  const path = location.pathname;

  //   close sideBar
  const closeSideBar = () => {
    setHandleActive(false);
  };

  // check if the path changes then transparent navBar
  useEffect(() => {
    if (path === "/") {
      setTransparent(true);
      document.addEventListener("scroll", () => {
        var scrollValue = window.scrollY;

        if (scrollValue > 100) setTransparent(false);
        else setTransparent(true);
      });
    }
    return () => {};
  }, [path]);

  //   main return
  return (
    <div>
      <nav
        className={
          transparent === true
            ? "navbar navbar-expand-md navbar-light bg-transparent"
            : "navbar navbar-expand-md navbar-light bg-navColor"
        }
      >
        <Link className="navbar-brand" to="/">
          <img
            src={transparent ? "/images/logoWhite.png" : "/images/logoBlue.png"}
            className="logo"
            alt="logo"
          ></img>
        </Link>
        {/* HeaderSideBar Component*/}
        <div className=" d-inline d-md-none">
          <HeaderSideBar activeSideBar={active} closeSideBar={closeSideBar} />
        </div>

        {/* SideBarButton */}
        <div className="d-inline d-md-none">
          <div
            onClick={() => setHandleActive(!active)}
            className={
              active ? " navaBarButton activeSideBar " : "navaBarButton"
            }
          >
            <div
              className={
                transparent
                  ? "navBarLine navBarLineActive navBarLine1"
                  : "navBarLine navBarLine1"
              }
            ></div>
            <div
              className={
                transparent
                  ? "navBarLine navBarLineActive navBarLine2"
                  : "navBarLine navBarLine2"
              }
            ></div>
            <div
              className={
                transparent
                  ? "navBarLine navBarLineActive navBarLine3"
                  : "navBarLine navBarLine3"
              }
            ></div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className={transparent ? "nav-link textWhite" : "nav-link"}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={transparent ? "nav-link textWhite" : "nav-link"}
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className={transparent ? "nav-link textWhite" : "nav-link"}
                href="#"
              >
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <a
                className={transparent ? "nav-link textWhite" : "nav-link"}
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="loginBtnDiv">
            <button
              onClick={() => setActiveLogin(!activeLogin)}
              className=" btnLogin"
              type="button"
            >
              Login/Sign Up
            </button>
            {activeLogin && (
              <div
                onClick={() => setActiveLogin(false)}
                className="loginDropDown"
              >
                <div className="flexCenter item">
                  <div className="title">Patients</div>
                  <Link to="/patient/login">
                    <div className="text">Log In</div>
                  </Link>
                  <Link to="/patient/signup">
                    <div className="text">Sign up</div>
                  </Link>
                </div>
                <div className="flexCenter item">
                  <div className="title">Doctors</div>
                  <Link to="/doctor/login">
                    <div className="text">Log In</div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default withRouter(Header);
