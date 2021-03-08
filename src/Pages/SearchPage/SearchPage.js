import React from "react";
import SearchComponent from "../LandingPage/components/SearchComponent";
import ResultSec from "./components/ResultSec";
import SearchFilter from "./components/SearchFilter";
import "./components/searchPage.css";
export default function SearchPage() {
  return (
    <div className="headerPadding">
      <div className="basicRow">
        <SearchComponent mainStyle={{ height: "50px", marginTop: "0" }} />
        <SearchFilter />
        <ResultSec />
      </div>
    </div>
  );
}
