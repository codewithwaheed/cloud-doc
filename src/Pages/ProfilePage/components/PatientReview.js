import React from "react";
import Rating from "../../../components/Rating/Rating";
import ReviewCard from "./reviewCard";

export default function PatientReviewSec() {
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
    <div>
      <div className="secDiv">
        <div className="title">Patient reviews</div>
        <div className="text">
          All reviews have been submitted by patients after seeing the provider.
        </div>

        <div>
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
          <div
            className="flexBetweenCenter d-none d-md-flex"
            style={{ maxWidth: "70%" }}
          >
            <div>
              {" "}
              <div className="subTitle">Overall rating</div>
              <div className="d-flex">
                <Rating
                  sizeClass={"profileStar"}
                  color="#EECE00"
                  borderColor="#EECE00"
                  readOnly
                  fixRating="5"
                />
                <span className="ratingText ml-2">5.00</span>
              </div>
            </div>
            <div>
              {" "}
              <div className="subTitle">Wait time</div>
              <div className="d-flex">
                <Rating
                  sizeClass={"profileStar"}
                  color="#EECE00"
                  borderColor="#EECE00"
                  readOnly
                  fixRating="4"
                />
                <span className="ratingText ml-2">4.00</span>
              </div>
            </div>
            <div>
              {" "}
              <div className="subTitle">Bedside manner</div>
              <div className="d-flex">
                <Rating
                  sizeClass={"profileStar"}
                  color="#EECE00"
                  borderColor="#EECE00"
                  readOnly
                  fixRating="5"
                />
                <span className="ratingText ml-2">5.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row reviewSearchDiv">
          <div className="col-md-5 col-sm-12">
            <div className="title" style={{ fontSize: "18px" }}>
              37 reviews
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="row">
              <div className="col-6 ">
                <select className="reviewSelect" defaultValue="newest">
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="topRated">Top rated</option>
                  <option value="lowestRated">Lowest rated</option>
                </select>
              </div>
              <div className="col-6 ">
                <div className="sDiv">
                  <img
                    src="/images/searchIcon.png"
                    className="img"
                    alt="searech"
                  ></img>
                  <input
                    className="searchInput"
                    type="text"
                    placeholder="Search"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {" "}
          {reviewData.map((item) => {
            const { name, text, rating, date, verified, videoVisit } = item;
            return (
              <ReviewCard
                name={name}
                text={text}
                rating={rating}
                date={date}
                verified={verified}
                videoVisit={videoVisit}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
