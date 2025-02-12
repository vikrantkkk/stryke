import React, { useState } from "react";
import {
  AnimateFromBottom,
  AnimateFromInside,
  AnimateFromLeft,
  AnimateFromRight,
  AnimateFromTop,
} from "../common/ScrollFadeIn";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import apple from "../assets/svg/apple.svg";
import playstore from "../assets/svg/playstore.svg";
import halfiphone from "../assets/png/halfiphone.png";

const Plans = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col gap-16 px-10 py-14 w-full">
      <AnimateFromBottom>
        <h2 className="font-extrabold text-[80px] leading-[96px] text-white text-center">
          Pricing <span className="text-[#C0FF73]">Plans</span>
        </h2>
      </AnimateFromBottom>
      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal text-[18px] leading-7 text-center">
          We empower a new generation of traders and investors with world-class
          technology, institution-grade education, and <br /> professional
          research services.
        </p>
      </AnimateFromInside>
      <AnimateFromInside>
        <div className="relative flex justify-between items-center border border-[#FFFFFF4D]/[0.3] p-1 rounded-l-md">
          <button
            className={`font-medium text-[20px] leading-6 text-white px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${
              isMonthly ? "bg-[#131513] shadow-md" : "bg-transparent"
            }`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly Billing
          </button>
          <button
            className={`font-medium text-[20px] leading-6 text-white px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${
              !isMonthly ? "bg-[#131513]  shadow-md" : "bg-transparent"
            }`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly Billing
          </button>
          <p className="absolute -bottom-8 right-0 font-medium text-[20px] leading-6 bg-[#DF484D] text-white px-2 py-1 rounded-b-md">
            Most Popular
          </p>
          <p className="absolute border-t border-l border-r border-[#FFFFFF4D]/[0.3] -top-8 right-0 font-medium text-[20px] leading-6  text-white px-2 py-1 rounded-t-md">
            30% Off
          </p>
        </div>
      </AnimateFromInside>
      <div className="flex justify-center items-start gap-16 px-10 w-full">
        {/* Hindi Card */}
        <AnimateFromLeft>
          <div
            className="flex flex-col justify-center items-center gap-8 rounded-3xl p-8 w-full max-w-md text-white border border-[rgba(255,255,255,0.3)]"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                         radial-gradient(165.78% 61.11% at -58.33% -47.79%, rgba(1, 10, 0, 0.41) 0%, rgba(255, 255, 255, 0) 100%)`,
            }}
          >
            <div className="flex flex-col justify-center items-start gap-3">
              <h2 className="font-medium text-[26px] leading-8 text-[#70FBC8]">
                Hindi
              </h2>
              <p className="font-normal text-[14px] leading-4 text-[#FFFFFFCC]/[0.8]">
                Designed for serious traders and investors who want to become
                full-time traders.
              </p>
              <div className="flex justify-center items-end gap-2">
                <p className="font-bold text-[38px] leading-12 text-[#FFFFFF]">
                  ₹ 19,999
                </p>
                <p className="font-normal text-[14px] leading-4 text-[#FFFFFFCC]/[0.8] pb-2">
                  Inclusive of 18% GST
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-4 w-full">
              <p className="text-start font-semibold text-[18px] leading-6">
                Includes:
              </p>
              {/* List of features with correct bold formatting */}
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Super Trader Course with{" "}
                  <span className="font-bold">
                    Live & Pre-Recorded Sessions
                  </span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Access to 10+ Institutional Trading Strategies
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  <span className="font-bold">
                    Daily Trading & Investing Signals
                  </span>{" "}
                  in Cash, F&O, Commodities Segment
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Daily Watchlist, Stock Research, and{" "}
                  <span className="font-bold">Assistance with Trade Buddy</span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Daily <span className="font-bold">LIVE Trading</span> with
                  SEBI <span className="font-bold">Registered Experts</span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Complimentary Access to{" "}
                  <span className="font-bold">StockWiz Trading App</span>{" "}
                  (Launching July 2024)
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  <span className="font-bold">Lifetime</span> Doubt Support
                </p>
              </div>
            </ul>
            <div className="w-full">
              <button className="border-white border text-white px-6 py-3 rounded-xl font-medium cursor-pointer w-full">
                Buy Now
              </button>
            </div>
          </div>
        </AnimateFromLeft>

        {/* English Card (similar structure) */}
        <AnimateFromRight>
          <div
            className="flex flex-col justify-center items-center gap-8 rounded-3xl p-8 w-full max-w-md text-white border border-[rgba(255,255,255,0.3)]"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                         radial-gradient(165.78% 61.11% at -58.33% -47.79%, rgba(1, 10, 0, 0.41) 0%, rgba(255, 255, 255, 0) 100%)`,
            }}
          >
            <div className="flex flex-col justify-center items-start gap-3">
              <h2 className="font-medium text-[26px] leading-8 text-[#70FBC8]">
                English
              </h2>
              <p className="font-normal text-[14px] leading-4 text-[#FFFFFFCC]/[0.8]">
                Designed for serious traders and investors who want to become
                full-time traders.
              </p>
              <div className="flex justify-center items-end gap-2">
                <p className="font-bold text-[38px] leading-12 text-[#FFFFFF]">
                  ₹ 19,999
                </p>
                <p className="font-normal text-[14px] leading-4 text-[#FFFFFFCC]/[0.8] pb-2">
                  Inclusive of 18% GST
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-4 w-full">
              <p className="text-start font-semibold text-[18px] leading-6">
                Includes:
              </p>
              {/* List of features with correct bold formatting */}
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Super Trader Course with{" "}
                  <span className="font-bold">
                    Live & Pre-Recorded Sessions
                  </span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Access to 10+ Institutional Trading Strategies
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  <span className="font-bold">
                    Daily Trading & Investing Signals
                  </span>{" "}
                  in Cash, F&O, Commodities Segment
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Daily Watchlist, Stock Research, and{" "}
                  <span className="font-bold">Assistance with Trade Buddy</span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Daily <span className="font-bold">LIVE Trading</span> with
                  SEBI <span className="font-bold">Registered Experts</span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  Complimentary Access to{" "}
                  <span className="font-bold">StockWiz Trading App</span>{" "}
                  (Launching July 2024)
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal text-[16px] leading-6">
                  <span className="font-bold">Lifetime</span> Doubt Support
                </p>
              </div>
            </ul>
            <div className="w-full">
              <button className="border-white border text-white px-6 py-3 rounded-xl font-medium cursor-pointer w-full">
                Buy Now
              </button>
            </div>
          </div>
        </AnimateFromRight>
      </div>
      <AnimateFromInside>
        <div className="relative w-[1216px] h-auto rounded-2xl overflow-hidden p-[1px]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl z-0"></div>
          <div className="flex justify-center items-start relative w-full h-full bg-[#131513] rounded-2xl z-10 px-20 pt-20">
            <div className="w-[70%] flex flex-col justify-start items-start gap-12">
              <div className="flex flex-col items-start gap-4">
                <AnimateFromTop>
                  <p className="font-extrabold text-[50px] leading-[60x] text-[#FFFFFF]">
                    Download Our App
                  </p>
                </AnimateFromTop>
                <AnimateFromInside>
                  <p className="font-normal text-[18px] leading-7 text-[#FFFFFF]/[0.6]">
                    Download Stryke now to start connecting with like-minded
                    people <br /> and enjoy a seamless social experience!
                  </p>
                </AnimateFromInside>
              </div>
              <div className="flex gap-10">
                <AnimateFromLeft>
                  <div className="relative flex justify-center items-center gap-2 rounded-full py-3 px-8 before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:[border-image-source:linear-gradient(270.82deg,rgba(255,255,255,0.1)_2.68%,#ffffff_33.24%,rgba(255,255,255,0.1)_99.29%)] before:[border-image-slice:1] before:pointer-events-none">
                    <img
                      className="w-4 h-4  rounded-full"
                      src={apple}
                      alt="apple"
                    />

                    <p className="text-white font-bold text-[16px] leading-6">
                      App Store
                    </p>
                  </div>
                </AnimateFromLeft>
                <AnimateFromRight>
                  <div className="relative flex justify-center items-center gap-2 rounded-full py-3 px-8 before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:[border-image-source:linear-gradient(270.82deg,rgba(255,255,255,0.1)_2.68%,#ffffff_33.24%,rgba(255,255,255,0.1)_99.29%)] before:[border-image-slice:1] before:pointer-events-none">
                    <img
                      className="w-4 h-4 rounded-full"
                      src={playstore}
                      alt="playstore"
                    />
                    <p className="text-white font-bold text-[16px] leading-6">
                      Google Play
                    </p>
                  </div>
                </AnimateFromRight>
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-between">
              <AnimateFromLeft>
                <img className="" src={halfiphone} alt="halfiphone" />
              </AnimateFromLeft>
            </div>
          </div>
        </div>
      </AnimateFromInside>
    </div>
  );
};

export default Plans;
