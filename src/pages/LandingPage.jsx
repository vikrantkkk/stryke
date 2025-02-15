import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Trade from "../components/Trade";
import Hot from "../components/Hot";
import Interactive from "../components/Interactive";
import AutoPilot from "../components/AutoPilot";
import Features from "../components/Features";
import Comprehensive from "../components/Comprehensive";
import Artificial from "../components/Artificial";
import Membership from "../components/Membership";
import Super from "../components/Super";
import Plans from "../components/Plans";

const LandingPage = () => {
  return (
    <MainLayout>
      <div id="home">
        <Hero />
      </div>
      <Works />
      <Trade />
      <div id="features">
        <Features />
      </div>
      <Comprehensive />
      <div id="a.i news">
        <Artificial />
      </div>
      <Membership />
      <div id="reviews">
        <Super />
      </div>
      <div id="pricing">
        <Plans />
      </div>
    </MainLayout>
  );
};

export default LandingPage;
