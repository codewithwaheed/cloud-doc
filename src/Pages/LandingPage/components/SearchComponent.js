import React from "react";
import { Link } from "react-router-dom";
export default function SearchComponent(props) {
  const { mainStyle, inputStyle } = props;
  return (
    <div className="searchDiv">
      {/* mobile search */}
      <div className="mainInputDiv d-block d-md-none">
        <div className="inputDiv">
          <div>
            <img
              className="iconM"
              alt="icon"
              src="/images/searchIcon.svg"
            ></img>
          </div>
          <input
            className="inputM"
            placeholder="Conditions, Procedures, Doctors"
          ></input>
        </div>
        <div className="inputDiv pt-4">
          <div>
            <img
              className="iconM"
              alt="icon"
              src="/images/markerIcon.svg"
            ></img>
          </div>
          <input
            className="inputM "
            placeholder="City, State or Zip Code"
          ></input>
        </div>

        <button className="searchBtnM">Search</button>
      </div>

      {/* desktop search */}
      <div className="mainSearchDiv  d-none d-md-flex" style={mainStyle}>
        <div className="searchSec" style={inputStyle}>
          <div className="inputDivD">
            <div>
              <img
                className="icon"
                alt="icon"
                src="/images/searchIcon.svg"
              ></img>
            </div>
            <input
              className="input"
              placeholder="Conditions, Procedures, Doctors"
            ></input>
          </div>

          <div className="inputDivD">
            <div className="divider"></div>
            <div>
              <img
                className="icon"
                alt="icon"
                src="/images/markerIcon.svg"
              ></img>
            </div>
            <input
              className="input"
              placeholder="City, State or Zip Code"
            ></input>
          </div>
        </div>

        <button style={{ height: "100" }} className="searchBtn">
          <Link to="/search">Search</Link>
        </button>
      </div>
    </div>
  );
}
