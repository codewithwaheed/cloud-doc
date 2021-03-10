import React from "react";
import Rating from "../../../components/Rating/Rating";
export default function ProfileDetaiDiv() {
  return (
    <>
      <div className="col-md-8">
        <div className="header">
          <img
            src="/images/searchProfile.png"
            className="profile"
            alt="profile"
          ></img>
          <div className="nameSec ml-3">
            <div className="name">Dr.Smith</div>
            <div className="subTitle">
              Primary Care Doctor, Family Physician
            </div>
            <div className="placeText">Texas</div>
            <div className="tabSec d-none d-md-flex">
              <div className="tab">
                <img className="icon" src="/images/inPerson.png"></img>
                <span>In-person visits</span>
              </div>
              <div className="tab">
                <img className="icon" src="/images/videoChat.png"></img>
                <span>Video visits</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tabSec d-flex d-md-none">
          <div className="tab">
            <img className="icon" src="/images/inPerson.png"></img>
            <span>In-person visits</span>
          </div>
          <div className="tab">
            <img className="icon" src="/images/videoChat.png"></img>
            <span>Video visits</span>
          </div>
        </div>
        <hr className="divider"></hr>
        <div className="titleBg d-inline d-md-none">
          What patients are saying
        </div>
        <div className="reviewSeC mt-1 pt-3 d-flex d-md-none">
          <div className="overAll">
            <div className="text title">Overall rating</div>
            <div className="ratingNumber">5.00</div>
            <Rating
              sizeClass={"profileStar"}
              color="#EECE00"
              borderColor="#EECE00"
              readOnly
              fixRating="5"
            />
            <div className="text textDarkBlue reviewText mt-2">37 reviews</div>
          </div>
          <div className="reviewFlexM">
            <div>
              <div className="text title">Average wait time</div>
              <div className="d-flex">
                <div className="text mr-1">4.00</div>
                <Rating
                  sizeClass={"profileStar2"}
                  color="#EECE00"
                  borderColor="#EECE00"
                  readOnly
                  fixRating="4"
                />
              </div>
            </div>
            <div className="">
              <div className="text title">Bedside manner</div>
              <div className="d-flex">
                <div className="text mr-1">5.00</div>
                <Rating
                  sizeClass={"profileStar2"}
                  color="#EECE00"
                  borderColor="#EECE00"
                  readOnly
                  fixRating="5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="detailTabSec">
          <div className="detailTab">
            <img className="icon mt-1" src="/images/done.svg"></img>
            <div className="ml-3">
              <div className="title">Highly recommended</div>
              <div className="text">
                100% of patients gave this doctor 5 stars
              </div>
            </div>
          </div>
          <div className="detailTab">
            <img className="icon mt-1" src="/images/clock.svg"></img>
            <div className="ml-3">
              <div className="title">Excellent wait time</div>
              <div className="text">
                92% of patients waited less than 30 minutes
              </div>
            </div>
          </div>
          <div className="detailTab">
            <img className="icon mt-1" src="/images/lamp.svg"></img>
            <div className="ml-3">
              <div className="title">New patient appointments</div>
              <div className="text">
                Appointments available for new patients on Zocdoc
              </div>
            </div>
          </div>
        </div>
        <div className="reviewSeC ">
          <div className="overAll d-none d-md-block">
            <div className="text title">Overall rating</div>
            <div className="ratingNumber">5.00</div>
            <Rating
              sizeClass={"profileStar"}
              color="#EECE00"
              borderColor="#EECE00"
              readOnly
              fixRating="5"
            />
            <div className="text textDarkBlue reviewText mt-2">37 reviews</div>
          </div>
          <div className="recentReviews">
            <div className="text title">Recent reviews</div>
            <div>
              <div className="text desc">
                The staff and Dr. Martinez were wonderful. I felt listened to
                and comfortable. Dr. Martinez was thorough and kind. I feel like
                I have found an excellent primary care doctor in Dr. Martinez!
              </div>
              <div className="reviewDateDiv">
                <div className="reviewText">
                  <span>Jessica W</span>
                  <span className="ml-2">February 5, 2021</span>
                </div>
                <span className="d-flex ml-2">
                  <span>Video visit</span>
                </span>
              </div>
            </div>
            <div>
              <div className="text desc">
                She was amazing ! Very personable , goes the extra mile ! Really
                refreshing to have her for my new pcp
              </div>
              <div className="reviewDateDiv">
                <div className="reviewText">
                  <span>Jessica W</span>
                  <span className="ml-2">February 5, 2021</span>
                </div>
                <span className="flexCenter ml-2">
                  <img className="videoIcon" src="/images/videoChat.png"></img>
                  <span>Video visit</span>
                </span>
              </div>
            </div>
            <button className="primaryBtn seeAllBtn">Read All Reviews</button>
          </div>
        </div>
      </div>
    </>
  );
}
