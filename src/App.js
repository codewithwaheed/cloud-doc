import React, { Component } from "react";
import Header from "./components/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route path="/search" component={SearchPage} />

        <Footer />
      </div>
    );
  }
}
