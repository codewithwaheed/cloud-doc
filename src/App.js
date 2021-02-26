import React, { Component } from "react";
import Header from "./components/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={LandingPage} />

        <Footer />
      </div>
    );
  }
}
