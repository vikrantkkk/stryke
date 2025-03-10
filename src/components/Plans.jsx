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
import halfiphone1 from "../assets/png/halfiphone1.png";
import downloadelipse from "../assets/png/downloadelipse.png";
import clippath from "../assets/png/clippath.png";
import clippath1 from "../assets/png/clippath1.png";
import priceelipse from "../assets/png/priceelipse.png";
import pricetitleelipse from "../assets/png/pricetitleelipse.png";

const Plans = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col md:gap-16 gap-6 px-4 py-14 w-full relative z-10">
      <AnimateFromBottom>
        <h2 className="md:font-extrabold font-bold md:text-[80px] text-[28px] md:leading-[96px] leading-[34px] text-white text-center">
          Pricing <span className="text-[#C0FF73]">Plans</span>
        </h2>
      </AnimateFromBottom>
      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal md:text-[18px] text-[12px] md:leading-7 leading-5 text-center">
          We empower a new generation of traders and investors with world-class
          technology, institution-grade education, and <br /> professional
          research services.
        </p>
      </AnimateFromInside>
      <AnimateFromInside>
        <div className="relative flex justify-between md:my-0 my-6 items-center border border-[#FFFFFF4D]/[0.3] p-1 rounded-l-md">
          <button
            className={`font-medium md:text-[20px] text-[12px] md:leading-6 leading-4 text-white md:px-4 px-10 py-2 rounded-md cursor-pointer transition-all duration-300 ${
              isMonthly ? "bg-[#131513] shadow-md" : "bg-transparent"
            }`}
            onClick={() => setIsMonthly(true)}
          >
            <span className="md:block hidden">Monthly Billing</span>{" "}
            <span className="md:hidden">Monthly</span>
          </button>
          <button
            className={`font-medium md:text-[20px] text-[12px] md:leading-6 leading-4 text-white md:px-4 px-10 py-2 rounded-md cursor-pointer transition-all duration-300 ${
              !isMonthly ? "bg-[#131513]  shadow-md" : "bg-transparent"
            }`}
            onClick={() => setIsMonthly(false)}
          >
            <span className="md:block hidden">Yearly Billing</span>{" "}
            <span className="md:hidden">Yearly</span>
          </button>
          <p className="absolute md:-bottom-8 -bottom-6 right-0 font-medium md:text-[20px] text-[12px] md:leading-6 leading-4 bg-[#DF484D] text-white px-2 py-1 rounded-b-md">
            Most Popular
          </p>
          <p className="absolute border-t border-l border-r border-[#FFFFFF4D]/[0.3] md:-top-8 -top-6 right-0 font-medium md:text-[20px] text-[12px] md:leading-6 leading-4  text-white px-2 py-1 rounded-t-md">
            30% Off
          </p>
        </div>
      </AnimateFromInside>
      <div className="flex md:flex-row flex-col justify-center items-start md:gap-16 gap-6 md:px-10 w-full">
        {/* Hindi Card */}
        <AnimateFromLeft>
          <div className="flex flex-col justify-center items-center gap-8 rounded-3xl md:p-8 p-4 w-full md:w-md text-white border border-[rgba(255,255,255,0.3)] cursor-pointer relative group hover:border-[#08DC83]">
            <div className="flex flex-col justify-center items-start gap-3">
              <h2 className="font-medium md:text-[26px] text-[20.5px] md:leading-8 leading-6 text-[#70FBC8]">
                Hindi
              </h2>
              <p className="md:block hidden font-normal text-[14px] leading-4 text-[#FFFFFFCC]/[0.8]">
                Designed for serious traders and investors who want to become
                full-time traders.
              </p>
              <div className="flex justify-center items-end gap-2">
                <p className="font-bold md:text-[38px] text-[28px] md:leading-12 leading-8 text-[#FFFFFF]">
                  ₹ 19,999
                </p>
                <p className="font-normal md:text-[14px] text-[12px] leading-4 text-[#FFFFFFCC]/[0.8] pb-2">
                  Inclusive of 18% GST
                </p>
              </div>
              <p className="md:hidden font-normal md:text-[14px] text-[12px] text-[#FFFFFFCC]/[0.8]">
                Designed for serious traders and investors who want to become
                full-time traders.
              </p>
            </div>
            <ul className="flex flex-col gap-4 w-full">
              <p className="text-start font-semibold md:text-[18px] text-[14px] md:leading-6 leading-4">
                Includes:
              </p>
              {/* List of features with correct bold formatting */}
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
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
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
                  Access to 10+ Institutional Trading Strategies
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
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
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
                  Daily Watchlist, Stock Research, and{" "}
                  <span className="font-bold">Assistance with Trade Buddy</span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
                  Daily <span className="font-bold">LIVE Trading</span> with
                  SEBI <span className="font-bold">Registered Experts</span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
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
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
                  <span className="font-bold">Lifetime</span> Doubt Support
                </p>
              </div>
            </ul>
            <div className="w-full">
              <button className="border-white border text-white px-6 py-3 rounded-xl font-medium cursor-pointer w-full">
                Buy Now
              </button>
            </div>
            <img
              className="absolute left-0 bottom-0 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              src={priceelipse}
              alt="priceelipse"
            />
          </div>
        </AnimateFromLeft>

        {/* English Card (similar structure) */}
        <AnimateFromRight>
          <div
            className="flex flex-col justify-center items-center gap-8 rounded-3xl md:p-8 p-4  md:w-md text-white border border-[rgba(255,255,255,0.3)] cursor-pointer relative group hover:border-[#08DC83]"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                         radial-gradient(165.78% 61.11% at -58.33% -47.79%, rgba(1, 10, 0, 0.41) 0%, rgba(255, 255, 255, 0) 100%)`,
            }}
          >
            <div className="flex flex-col justify-center items-start gap-3">
              <h2 className="font-medium md:text-[26px] text-[20.5px] md:leading-8 leading-6 text-[#70FBC8]">
                English
              </h2>
              <p className="md:block hidden font-normal text-[14px] leading-4 text-[#FFFFFFCC]/[0.8]">
                Designed for serious traders and investors who want to become
                full-time traders.
              </p>
              <div className="flex justify-center items-end gap-2">
                <p className="font-bold md:text-[38px] text-[28px] md:leading-12 leading-8 text-[#FFFFFF]">
                  ₹ 19,999
                </p>
                <p className="font-normal md:text-[14px] text-[12px] text-[#FFFFFFCC]/[0.8] pb-2">
                  Inclusive of 18% GST
                </p>
              </div>
              <p className="md:hidden font-normal md:text-[14px] text-[12px] text-[#FFFFFFCC]/[0.8]">
                Designed for serious traders and investors who want to become
                full-time traders.
              </p>
            </div>
            <ul className="flex flex-col gap-4 w-full">
              <p className="text-start font-semibold md:text-[18px] text-[14px] md:leading-6 leading-4">
                Includes:
              </p>
              {/* List of features with correct bold formatting */}
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
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
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
                  Access to 10+ Institutional Trading Strategies
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
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
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
                  Daily Watchlist, Stock Research, and{" "}
                  <span className="font-bold">Assistance with Trade Buddy</span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
                  Daily <span className="font-bold">LIVE Trading</span> with
                  SEBI <span className="font-bold">Registered Experts</span>
                </p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-white"
                />
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
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
                <p className="font-normal md:text-[18px] text-[14px] md:leading-6 leading-5">
                  <span className="font-bold">Lifetime</span> Doubt Support
                </p>
              </div>
            </ul>
            <div className="w-full">
              <button className="border-white border text-white px-6 py-3 rounded-xl font-medium cursor-pointer w-full">
                Buy Now
              </button>
            </div>
            <img
              className="absolute left-0 bottom-0 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              src={priceelipse}
              alt="priceelipse"
            />
          </div>
        </AnimateFromRight>
      </div>
      <AnimateFromInside>
        <div className="md:block hidden relative w-[1216px] h-auto rounded-3xl overflow-hidden p-[1px]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl z-0"></div>
          <div className="flex justify-center items-start relative w-full h-full bg-[#070A07] rounded-3xl z-10 px-20 pt-20 ">
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
                  <button className="cursor-pointer relative flex justify-center items-center gap-2 rounded-full py-3 px-8 border border-[#FFFFFF33]/[0.7]">
                    <img
                      className="w-4 h-4  rounded-full"
                      src={apple}
                      alt="apple"
                    />

                    <p className="text-white font-bold text-[16px] leading-6">
                      App Store
                    </p>
                  </button>
                </AnimateFromLeft>
                <AnimateFromRight>
                  <button className="cursor-pointer relative flex justify-center items-center gap-2 rounded-full py-3 px-8 border  border-[#FFFFFF33]/[0.7] shadow-md">
                    <img
                      className="w-4 h-4 rounded-full"
                      src={playstore}
                      alt="playstore"
                    />
                    <p className="text-white font-bold text-[16px] leading-6">
                      Google Play
                    </p>
                  </button>
                </AnimateFromRight>
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-between">
              <AnimateFromLeft>
                <img className="z-10" src={halfiphone} alt="halfiphone" />
              </AnimateFromLeft>
            </div>
            <img
              className="absolute bottom-0 -z-10"
              src={clippath}
              alt="clippath"
            />
            <img
              className="absolute top-0 right-0 -z-10"
              src={downloadelipse}
              alt="downloadelipse"
            />
          </div>
        </div>
        <div className="md:hidden block relative w-full h-auto rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl z-0"></div>
          <div className="flex justify-center items-center relative w-full bg-[#070A07] rounded-3xl z-10 px-4 pt-4">
            <div className="w-full flex flex-col justify-center items-center gap-12">
              <div className="flex flex-col items-start gap-8">
                <p className="font-extrabold md:text-[50px] text-[28px] md:leading-[60x] leading-[33px] text-[#FFFFFF]">
                  Download Our App
                </p>
                <AnimateFromInside>
                  <p className="font-normal md:text-[18px] text-[14px] md:leading-7 leading-[22px] text-[#FFFFFF]/[0.6]">
                    Download Stryke now to start connecting with like-minded
                    people <br /> and enjoy a seamless social experience!
                  </p>
                </AnimateFromInside>
                <div className="flex w-full gap-4 items-center justify-center">
                  <AnimateFromLeft>
                    <button className="cursor-pointer w-full px-4 flex justify-center items-center gap-2 rounded-full p-2 border border-[#FFFFFF33]/[0.7]">
                      <img
                        className="w-4 h-4 rounded-full"
                        src={apple}
                        alt="apple"
                      />
                      <p className="text-white font-bold text-[16px] leading-[22px]">
                        App Store
                      </p>
                    </button>
                  </AnimateFromLeft>
                  <AnimateFromRight>
                    <button className="cursor-pointer w-full px-4 flex justify-center items-center gap-2 rounded-full p-2 border border-[#FFFFFF33]/[0.7]">
                      <img
                        className="w-4 h-4 rounded-full"
                        src={playstore}
                        alt="playstore"
                      />
                      <p className="text-white font-bold text-[16px] leading-6">
                        Google Play
                      </p>
                    </button>
                  </AnimateFromRight>
                </div>
                <div className="flex flex-col flex-1 items-center justify-between">
                  <AnimateFromLeft>
                    <img className="z-10" src={halfiphone1} alt="halfiphone1" />
                  </AnimateFromLeft>
                </div>
              </div>
            </div>

            <img
              className="absolute bottom-0 -z-10"
              src={clippath1}
              alt="clippath1"
            />

            <img
              className="absolute top-0 right-0 -z-10"
              src={downloadelipse}
              alt="downloadelipse"
            />
          </div>
        </div>
      </AnimateFromInside>
      <img
        className="absolute top-0 w-full -z-10"
        src={pricetitleelipse}
        alt="pricetitleelipse"
      />
    </div>
  );
};

export default Plans;
