import React from "react";
import ChooseDoctor from "./components/ChooseDoctor";
import FiveStarDoctor from "./components/FiveStarDoctor";
import "./components/landingPage.css";
import LandingSlider from "./components/LandingSlider";
import MedicalSpecialities from "./components/MedicalSpecialities";
import PatientReview from "./components/PatientReview";
import ProviderSec from "./components/ProviderSec";
import StepsSection from "./components/StepsSection";
export default function LandingPage() {
  return (
    <div>
      <LandingSlider />
      <ChooseDoctor />
      <MedicalSpecialities />
      <StepsSection />
      <ProviderSec />
      <FiveStarDoctor />
      <PatientReview />
    </div>
  );
}
