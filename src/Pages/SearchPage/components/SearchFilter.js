import React from "react";

export default function SearchFilter() {
  return (
    <div className="searchFilter">
      <div className="d-flex">
        <div className="filterDiv">Video consultion </div>
        <div className="filterDiv">Availability </div>
      </div>
      <div className="flexCenter mt-3 mt-md-0">
        <div className="titleText">Sort by:</div>
        <div className="filterSelect ml-3">
          <span>Relevance</span>{" "}
          <img src="/images/arrowDown.png" className="ml-3"></img>
        </div>
      </div>
    </div>
  );
}
