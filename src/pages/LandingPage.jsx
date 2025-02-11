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
      <Hero />
      <Works />
      <Trade />
      <Hot />
      <Interactive />
      <AutoPilot />
      <Features />
      <Comprehensive />
      <Artificial />
      <Membership />
      <Super />
      <Plans/>
    </MainLayout>
  );
};

export default LandingPage;
