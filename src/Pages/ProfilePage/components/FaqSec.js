import React, { useState } from "react";

export default function FaqSec() {
  const faqData = [
    {
      title: "How soon can I make an appointment with Dr. Monica Martinez?",
      text:
        "Generally, Dr. Monica Martinez has appointments available on Zocdoc within 1 week. You can see Dr. Martinez's earliest availability on Zocdoc and make an appointment online.",
    },
    {
      title: "Is Dr. Monica Martinez accepting new patients?",
      text:
        "Dr. Monica Martinez generally accepts new patients on Zocdoc. You can see Dr. Martinezs earliest availability on Zocdoc and schedule an appointment online.",
    },
    {
      title: "Can I make an appointment with Dr. Monica Martinez online?",
      text:
        "Yes, you can make an appointment online with Dr. Martinez using Zocdoc. It’s simple, secure, and free.",
    },
  ];
  return (
    <div className=" faqSec">
      <div className="title">Frequently asked questions</div>
      {faqData.map((item, index) => {
        return <QuestionComponent {...item} key={index} />;
      })}
    </div>
  );
}

const QuestionComponent = ({ title, text }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setActive(!active);
        }}
        className="qestionDiv"
      >
        <span>{title}</span>
        <img
          src={active === true ? "/images/minus.png" : "/images/plus.png"}
          className="img pointer"
        ></img>
      </div>

      {active && <div className="text mb-4 mt-3">{text}</div>}
    </>
  );
};
