import React from "react";
import Rating from "../../../components/Rating/Rating";

export default function reviewCard(props) {
  const { rating = 5, text, date, verified, videoVisit, name } = props;
  return (
    <div className="reviewCard">
      <Rating
        sizeClass={"profileStar"}
        color="#EECE00"
        borderColor="#EECE00"
        readOnly
        fixRating={rating}
      />
      <div className="reviewText">{text}</div>
      <div className="flexCenter mt-2">
        <span className="reviewDetailText">{date}</span>
        <span className="reviewDetailText">-</span>
        <span className="reviewDetailText">{name}</span>
        <span className="reviewDetailText">-</span>
        <span className="reviewDetailText">
          {verified ? " Verified patient" : "Unverifid patient"}
        </span>
        <span className="reviewDetailText">-</span>
        {videoVisit && (
          <span className="flesCenter reviewDetailText">
            <img src="/images/videoChat.png" style={{ width: "20px" }}></img>{" "}
            Video Visit
          </span>
        )}
      </div>
    </div>
  );
}
