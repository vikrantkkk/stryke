import React from "react";
import logofooter from "../assets/svg/logofooter.svg";
import verified from "../assets/svg/verified.svg";
import whatsapp1 from "../assets/svg/whatsapp1.svg";
import hour from "../assets/svg/hour.svg";
import call from "../assets/svg/call.svg";
import email from "../assets/svg/email.svg";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import youtube from "../assets/svg/youtube.svg";
import linkedin from "../assets/svg/linkedin.svg";
import {
  AnimateFromBottom,
  AnimateFromLeft,
  AnimateFromRight,
} from "../common/ScrollFadeIn";

const Footer = () => {
  return (
    <footer className="bg-[#070A07]  flex justify-center items-center flex-col px-10 w-full">
      <div className="flex justify-between items-center border px-32 py-6 w-screen                   relative  gap-2 rounded-full  before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:[border-image-source:linear-gradient(270.82deg,rgba(255,255,255,0.1)_2.68%,#ffffff_33.24%,rgba(255,255,255,0.1)_99.29%)] before:[border-image-slice:1] before:pointer-events-none">
        <AnimateFromBottom>
          <div className="flex flex-col justify-start items-start gap-8">
            <div className="flex flex-col justify-start items-start gap-4">
              <img className="" src={logofooter} alt="logofooter" />
              <p className="font-light text-[14px] leading-6 text-[#FFFFFF]">
                Welcome to India's largest SEBI registered <br /> trading &
                investing platform. We offer <br /> education, advisory &
                research services.
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 bg-[#FFFFFF05] p-4 rounded-xl">
              <img className="" src={verified} alt="verified" />
              <div className="flex flex-col items-start justify-start">
                <p className="font-light text-[14px] leading-4 text-[#FFFFFF]">
                  SEBI Registered Research Analyst
                </p>
                <p className="font-medium text-[16px] leading-5 text-[#FFFFFF]">
                  INH000013925
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4 bg-[#FFFFFF05] p-4 rounded-xl">
              <p className="font-medium text-[16px] leading-5 text-[#FFFFFF]">
                Compliance Info
              </p>
              <p className="font-normal text-[14px] leading-4 text-[#FFFFFF]/[0.6]">
                Compliance Officer:
                <span className="font-medium text-[16px] leading-5 text-[#FFFFFF]">
                  {" "}
                  Parang Mehta
                </span>
              </p>
              <p className="font-normal text-[14px] leading-4 text-[#FFFFFF]/[0.6]">
                Number:
                <span className="font-medium text-[16px] leading-5 text-[#FFFFFF]">
                  {" "}
                  +91-8949800532
                </span>
              </p>
              <p className="font-normal text-[14px] leading-4 text-[#FFFFFF]/[0.6]">
                Email:
                <span className="font-medium text-[16px] leading-5 text-[#FFFFFF]">
                  {" "}
                  parang@stockwiz.in
                </span>
              </p>
            </div>
          </div>
        </AnimateFromBottom>
        <AnimateFromBottom>
          <div className="flex flex-col justify-start items-start gap-8">
            <p className="font-semibold text-[18px] leading-5 text-[#FFFFFF]">
              Quick Links
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              About Us
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Membership
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Features
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              FAQs
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Blogs
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Investor Charter
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Complaints
            </p>
          </div>
        </AnimateFromBottom>
        <AnimateFromBottom>
          <div className="flex flex-col justify-start items-start gap-8">
            <p className="font-semibold text-[18px] leading-5 text-[#FFFFFF]">
              Company
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Disclaimer
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Grievance Policy
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              SEBI Scores
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Terms & Conditions
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Privacy Policy
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Refund Policy
            </p>
            <p className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Careers
            </p>
          </div>
        </AnimateFromBottom>
        <AnimateFromBottom>
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="font-semibold text-[18px] leading-5 text-[#FFFFFF]">
              Contact Us
            </p>
            <div className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Call Us:
              <div className="flex gap-2 mt-2">
                <img className="" src={call} alt="call" />
                <p className="font-medium text-[16px] leading-5 text-[#FFFFFF]/[0.8] ">
                  +91 - 8949800532{" "}
                  <span className="border-l border-[#FFFFFF4D] mx-2"></span>
                  +91 - 9664221723
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start border-t border-[#FFFFFF4D] w-12 "></div>
            <div className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Working Hours:
              <div className="flex gap-2 mt-2">
                <img className="" src={hour} alt="hour" />
                <p className="font-medium text-[16px] leading-5 text-[#FFFFFF]/[0.8]">
                  10:00 am to 9:00 pm (Mon - Sun)
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start border-t border-[#FFFFFF4D] w-12 "></div>
            <div className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Whatapp Us:
              <div className="flex gap-2 mt-2">
                <img className="" src={whatsapp1} alt="whatsapp1" />
                <p className="font-medium text-[16px] leading-5 text-[#FFFFFF]/[0.8]">
                  +91 - 8949800532
                </p>
              </div>
              <div className="flex gap-2 mt-2">
                <img className="" src={whatsapp1} alt="whatsapp1" />
                <p className="font-medium text-[16px] leading-5 text-[#FFFFFF]/[0.8]">
                  +91 - 9664221723
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start border-t border-[#FFFFFF4D] w-12 "></div>
            <div className="font-normal text-[16px] leading-4 text-[#FFFFFF]/[0.6]">
              Email Us:
              <div className="flex gap-2 mt-2">
                <img className="" src={email} alt="email" />
                <p className="font-medium text-[16px] leading-5 text-[#FFFFFF]/[0.8]">
                  help@stockwiz.in
                </p>
              </div>
            </div>
          </div>
        </AnimateFromBottom>
      </div>
      <div className="flex justify-between items-center px-32 py-4 w-screen">
        <AnimateFromLeft>
          <p className="font-normal text-[14px] leading-4 text-[#FFFFFF]">
            Copyright ©2023 Stockwiz. All rights reserved.
          </p>
        </AnimateFromLeft>
        <AnimateFromRight>
          <div className="flex justify-center items-center gap-2">
            <img className="" src={facebook} alt="facebook" />
            <img className="" src={linkedin} alt="linkedin" />
            <img className="" src={instagram} alt="instagram" />
            <img className="" src={youtube} alt="youtube" />
            <img className="" src={twitter} alt="twitter" />
          </div>
        </AnimateFromRight>
      </div>
    </footer>
  );
};

export default Footer;
