import React from "react";
import Rating from "../../../components/Rating/Rating";
import ReviewCard from "./reviewCard";

export default function PatientReviewSec() {
  const user = [
    {
      id: "1",
      name: "John Doe",
      verified: true,
      date: "09/01/2021",
      img: "/images/reviewProfile1.png",
    },
    {
      id: "2",
      name: "Shane Star",
      verified: false,
      date: "09/01/2021",
      img: "/images/reviewProfile2.png",
    },
    {
      id: "3",
      name: "David John",
      verified: false,
      date: "09/01/2021",
      img: "/images/reviewProfile3.png",
    },
  ];
  const reviewData = [
    {
      rating: "5",
      text:
        "The staff and Dr. Martinez were wonderful. I felt listened to and comfortable. Dr. Martinez was thorough and kind. I feel like I have found an excellent primary care doctor in Dr. Martinez!",
      date: "February 5, 2021",
      verified: true,
      name: "Cynthia W.",
      videoVisit: true,
    },
    {
      rating: "4",
      text:
        "She was amazing ! Very personable , goes the extra mile ! Really refreshing to have her for my new pcp",
      date: "February 5, 2021",
      verified: true,
      name: "Jessica W.",
      videoVisit: false,
    },
    {
      rating: "5",
      text: "Great visit and I didn’t feel rushed at all.",
      date: "December 23, 2020",
      verified: false,
      name: "Marla E.",
      videoVisit: true,
    },
  ];
  return (
    <>
      <div className="patientReviewDiv">
        <div className="flexCenter header">
          <div className="secTitle">Patient reviews</div>
          <div className="arrowIcon">
            <img src="/images/arrowLeft1.png" alt="arrow"></img>
          </div>
          <div className="arrowIcon">
            <img src="/images/arrowRight1.png" alt="arrow"></img>
          </div>
        </div>
        <div className="patientFlex">
          <div className="userSec">
            {user.map((item, index) => {
              return (
                <div key={index} className="userItem">
                  <img src={item.img} className="profile"></img>
                  <div>
                    <div className="name">{item.name}</div>
                    <div className="dateText">{item.date}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="reviewSec"></div>
        </div>
      </div>
    </>
  );
}
