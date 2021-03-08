import React, { Component } from "react";
import Header from "./components/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/profile" component={ProfilePage} />

        <Footer />
      </div>
    );
  }
}
