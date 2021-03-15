import React, { Component } from "react";
import Header from "./components/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PatientLoginPage from "./Pages/PatientLogin/PatientLoginPage";
import SingupPage from "./Pages/PatientLogin/SingupPage";
import DoctorLogin from "./Pages/DoctorLogin/DoctorLogin";
import ForgetPasswordPage from "./Pages/DoctorLogin/ForgetPasswordPage";
import BookAndReviewPage from "./Pages/BookAndReview/BookAndReviewPage";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/patient/login" component={PatientLoginPage} />
        <Route path="/patient/signup" component={SingupPage} />
        <Route path="/doctor/login" component={DoctorLogin} />
        <Route path="/auth/forget" component={ForgetPasswordPage} />
        <Route path="/booking/review-booking" component={BookAndReviewPage} />

        <Footer />
      </div>
    );
  }
}
