import React, { Component } from "react";
import Header from "./components/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./components/Footer";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}
