import React, { useState, useEffect } from "react";
import HeaderSideBar from "./HeaderSideBar";
import { withRouter } from "react-router-dom";
function Header(props) {
  // sideBar state
  const [active, setHandleActive] = useState(false);
  // const transparent Bg state
  const [transparent, setTransparent] = useState(false);
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
    return () => {
      setTransparent(false);
    };
  }, []);

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
        <a className="navbar-brand" href="#">
          <img src="/images/logoWhite.png" className="logo" alt="logo"></img>{" "}
        </a>
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
export default withRouter(Header);
