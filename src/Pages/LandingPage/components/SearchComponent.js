import React from "react";

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
              src="/images/searchIcon.png"
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
              src="/images/markerIcon.png"
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
                src="/images/searchIcon.png"
              ></img>
            </div>
            <input
              className="input"
              placeholder="Conditions, Procedures, Doctors"
            ></input>
          </div>
          <div className="divider"></div>

          <div className="inputDivD">
            <div>
              <img
                className="icon"
                alt="icon"
                src="/images/markerIcon.png"
              ></img>
            </div>
            <input
              className="input"
              placeholder="City, State or Zip Code"
            ></input>
          </div>
        </div>
        <button className="searchBtn">Search</button>
      </div>
    </div>
  );
}
