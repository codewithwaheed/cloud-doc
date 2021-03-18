import React from "react";
import Rating from "../../../components/Rating/Rating";

export default function reviewCard(props) {
  const { rating = 5, text, videoVisit, title } = props;
  return (
    <div className="reviewCard">
      <div className="title mb-3 mt-2">{title}</div>
      <Rating
        sizeClass={"profileStar"}
        color="#6BCAE2"
        borderColor="#6BCAE2"
        readOnly
        fixRating={rating}
      />
      <div className="reviewText mb-3">{text}</div>

      {videoVisit && (
        <span className="flesCenter  reviewDetailText">
          <img
            src="/images/videoChat.png"
            style={{ width: "30px", marginRight: "10px" }}
          ></img>
          Video Visit
        </span>
      )}
    </div>
  );
}
