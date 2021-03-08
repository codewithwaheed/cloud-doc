import React from "react";

export default function ProfileExtraDetail() {
  return (
    <>
      <div className="secDiv mt-4">
        <div className="title">About Dr. Monica Martinez</div>
        <div className="text">
          As a family medicine physician, I am dedicated to providing acute and
          chronic care, with a focus on preventive medicine. My goal is to
          partner with my patients and provide a holistic approach to their plan
          of care. I look forward to serving patients of all ages
        </div>
      </div>
      <div className="secDiv">
        <div className="title">Office location</div>
        <div className="locationTextDiv">
          <img
            src="/images/videoChat.png"
            alt="videoIcon"
            className="img"
          ></img>
          <span>
            Dr. Monica Martinez, MD also offers online video visits for patients
          </span>
        </div>
        <div className="row mt-4">
          <div className="col-md-8 col-sm-12">
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
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="mt-4">
              <div
                className="title"
                style={{ fontSize: "15px", fontFamily: "poppinsSb" }}
              >
                Houston Methodist Primary Care Group Katy MOB 1
              </div>
              <div className="text">14211 FM 2920 Rd Tomball, TX 77377</div>
            </div>
          </div>
        </div>
      </div>
      <div className="secDiv">
        <div className="title">Education and background</div>
        <div className="subTitle">Specialties</div>
        <div className="text">Family Physician</div>
        <div className="text">Primary Care Doctor</div>
        <div className="subTitle">Practice names</div>
        <div className="text textDarkBlue pointer">
          Houston Methodist Primary Care Group Katy MOB 1
        </div>
        <div className="subTitle">Hospital affiliations</div>
        <div className="text  ">Houston Methodist Willowbrook Hospital</div>
        <div className="subTitle">Board certifications</div>
        <div className="text  ">American Board of Family Medicine</div>
        <div className="subTitle">Education and training</div>
        <div className="text  ">
          Medical School - Texas A&M University, Doctor of Medicine
        </div>
        <div className="text  ">
          Memorial Hermann, Residency in Family Medicine
        </div>
        <div className="subTitle">Languages spoken</div>
        <div className="text  ">English</div>
        <div className="text  ">Spanish</div>
        <div className="subTitle">Provider's gender</div>
        <div className="text  ">Male</div>
        <div className="subTitle">NPI number</div>
        <div className="text  ">1730527375</div>
      </div>
    </>
  );
}
