import React from "react";

export default function Footer() {
  return (
    <div className="footerBg">
      <div className="basicLandingRow footer footerPadding">
        <div className="footerFlex">
          <div className="footerItem">
            <img
              className="logo"
              src="/images/footerLogo.png"
              alt="footerLogo"
            ></img>
            <div className="text">
              Book appointments with the best Doctors and Specialists such as
              Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc.
              And Online Doctor Video Consultations all across Pakistan
              conveniently.
            </div>
          </div>
          <div className="footerItem">
            <div className="footerTitle">About Us</div>
            <div className="footerLink">Our Mission & Values</div>
            <div className="footerLink">Transformation</div>
            <div className="footerLink">Diversity is our Specialty</div>
            <div className="footerLink">Reports</div>
          </div>
          <div className="footerItem">
            <div className="footerTitle">Our Services </div>
            <div className="footerLink">Pharmacy</div>
            <div className="footerLink">Dental Services</div>
            <div className="footerLink">Lungs Diseases</div>
            <div className="footerLink">Radiology</div>
          </div>
          <div className="footerItem">
            <div className="footerTitle">Our Services </div>
            <div className="footerLink">Pharmacy</div>
            <div className="footerLink">Dental Services</div>
            <div className="footerLink">Lungs Diseases</div>
            <div className="footerLink">Radiology</div>
          </div>
        </div>
      </div>
      <div className="copyRightDiv">
        <span className="pr-3">
          © Copyright 2020 by Cloud All rights reserved.
        </span>
        <div className="flexCenter">
          <img
            src="/images/fb.png"
            alt="social"
            className="socialImg socialFb"
          ></img>
          <img
            src="/images/twitter.png"
            alt="social"
            className="socialImg"
          ></img>
          <img src="/images/insta.png" alt="social" className="socialImg"></img>
        </div>
      </div>
    </div>
  );
}
