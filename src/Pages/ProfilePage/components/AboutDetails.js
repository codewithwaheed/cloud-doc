import React from "react";

export default function AboutDetails() {
  return (
    <div className="aboutSec">
      <div className="contentSec">
        <img src="/images/aboutContent.svg"></img>
        <div className="title">About Dr. Monica Martinez</div>
        <div className="text">
          As a family medicine physician, I am dedicated to providing acute and
          chronic care, with a focus on preventive medicine. My goal is to
          partner with my patients and provide a holistic approach to their plan
          of care. I look forward to serving patients of all ages
        </div>
      </div>

      <div className="contentSec">
        <div className="title">Clinic location</div>
        <div className="offerBg">
          <img src="/images/videoIconAbout.svg"></img>
          <span>
            Dr. Monica Martinez, MD also offers online video visits for patients
          </span>
        </div>
        <div>
          <iframe
            width="100%"
            height={300}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&height=300&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          />
        </div>
        <div className="title mb-1 mt-3" style={{ fontSize: "12px" }}>
          Houston Methodist Primary Care Group Katy MOB 1
        </div>
        <div className="text" style={{ fontSize: "12px" }}>
          14211 FM 2920 Rd Tomball, TX 77377
        </div>
      </div>
    </div>
  );
}
