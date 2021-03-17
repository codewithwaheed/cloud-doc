import React from "react";

export default function EducationBackground() {
  return (
    <div className="educationSec w-100">
      <div className="secTitle text-center">Education and background</div>

      <div className="flexBetweenCenter eduFlex">
        <div className="eduCard">
          <div className="title">Specialties</div>
          <div className="text">Family Physician</div>
          <div className="text">Primary Care Doctor</div>
          <img src="/images/medal.svg" className="img"></img>
        </div>
        <div className="eduCard">
          <div className="title">Practice names</div>
          <div className="text">Houston Methodist</div>
          <div className="text">Primary Care Group </div>
          <div className="text">Katy MOB 1 </div>
          <img src="/images/medal.svg" className="img"></img>
        </div>
        <div className="eduCard">
          <div className="title">Hospital affiliations</div>
          <div className="text">Family Physician</div>
          <div className="text">Willowbrook</div>
          <div className="text">Hospital</div>
          <img src="/images/medal.svg" className="img"></img>
        </div>
        <div className="eduCard">
          <div className="title">Board certifications</div>
          <div className="text">American Board of</div>
          <div className="text">Family Medicine</div>

          <img src="/images/medal.svg" className="img"></img>
        </div>
      </div>

      <div className="eduAndTrain educationBg">
        <div className="centerDiv">
          <div className="flexCenter">
            <img src="/images/eduCap.svg" alt="edu"></img>
            <span className="title mb-0 ml-2">Education and training</span>
          </div>
        </div>
        <div className="text text-center">
          Medical School - Texas A&M University, Doctor of Medicine
        </div>
        <div className="text text-center">
          Medical School - Texas A&M University, Doctor of Medicine
        </div>
      </div>
      <div className="flexBetweenCenter mt-3">
        <div className="eduCard eduCard2">
          <div className="title">Languages spoken</div>
          <div className="text">English</div>
          <div className="text">Spanish</div>
          <img src="/images/language.svg" className="img"></img>
        </div>
        <div className="eduCard eduCard2">
          <div className="title">NPI number</div>
          <div className="text">1730527375</div>
          <img src="/images/eduNumber.svg" className="img"></img>
        </div>
      </div>
    </div>
  );
}
