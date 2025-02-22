import React from "react";
import {
  AnimateFromBottom,
  AnimateFromInside,
  AnimateFromLeft,
  AnimateFromRight,
} from "../common/ScrollFadeIn";
import Button from "../common/Button";
import avatar from "../assets/png/avatar.png";
import avatar1 from "../assets/png/avatar1.png";
import avatar2 from "../assets/png/avatar2.png";
import mobile from "../assets/png/mobile.png";
import mobile1 from "../assets/png/mobile1.png";
import mobile2 from "../assets/png/mobile2.png";
import playstore from "../assets/png/playstore.png";
import star from "../assets/svg/star.svg";
import moon from "../assets/svg/moon.svg";
import traingle from "../assets/svg/traingle.svg";
import rectangle from "../assets/svg/rectangle.svg";
import apple from "../assets/png/apple.png";
import video from "../assets/video/video.mp4";

const Hero = () => {
  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col gap-6 md:py-14 py-6 w-full">
      <AnimateFromBottom>
        <div className="relative flex justify-center items-center gap-1 rounded-full border md:p-1 border-[#FFFFFF33]/[0.7] md:w-auto w-full">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <img
              className="w-10 h-10  rounded-full"
              src={avatar}
              alt="User 1"
            />
            <img
              className="w-10 h-10  rounded-full"
              src={avatar1}
              alt="User 2"
            />
            <img
              className="w-10 h-10  rounded-full"
              src={avatar2}
              alt="User 3"
            />
          </div>
          <p className="text-white p-2 font-normal md:text-[18px] text-[14px] leading-7">
            Trusted by 50,000 Users.
          </p>
        </div>
      </AnimateFromBottom>

      <AnimateFromBottom>
        <p className="md:font-extrabold font-bold md:text-[50px] text-[28px] md:leading-[60px] leading-[33px] text-white text-center">
          Unlock The Power Of <br /> Institutional Stock Trading.
        </p>
      </AnimateFromBottom>

      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal text-[18px]  leading-7  text-center md:block hidden">
          Get ready to witness the biggest revolution in the history of retail
          trading. Trade like <br /> the professionals with a click of a button.
        </p>
        <p className="text-[#FFFFFF99]/[0.6] font-normal md:text-[18px] text-[12px] md:leading-7 leading-5 text-center md:hidden block">
          Get ready to witness the biggest revolution in the history of retail
          trading. Trade like the professionals with a click of a button.
        </p>
      </AnimateFromInside>

      <AnimateFromInside>
        <div className="rounded-2xl bg-[#141514] md:w-[1216px] w-[353px] md:h-[732px] h-[253px] relative">
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            src={video}
            type="video/mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </AnimateFromInside>
      <AnimateFromInside>
        <Button name="Start Trading" className="md:h-auto h-[50px]" />
      </AnimateFromInside>
      <div className="flex justify-between w-full md:hidden px-4">
        <AnimateFromLeft>
          <button className="w-[166px] h-[50px] cursor-pointer flex justify-center items-center gap-1 border bg-white border-white rounded-full py-2 px-4">
            <img className="w-8 h-8  rounded-full" src={apple} alt="apple" />
            <div className="flex flex-col">
              <p className="text-black font-normal text-[10px] leading-[10px]">
                Download on the
              </p>
              <p className="text-black font-bold text-[16px] leading-6">
                App Store
              </p>
            </div>
          </button>
        </AnimateFromLeft>
        <AnimateFromRight>
          <button className="w-[166px] h-[50px] flex cursor-pointer justify-center items-center gap-1 border border-white rounded-full py-2 px-4">
            <img
              className="w-8 h-8 rounded-full"
              src={playstore}
              alt="playstore"
            />
            <div className="flex flex-col">
              <p className="text-white font-normal text-[10px] leading-[10px]">
                Download on the
              </p>
              <p className="text-white font-bold text-[16px] leading-6">
                App Store
              </p>
            </div>
          </button>
        </AnimateFromRight>
      </div>
      <div className="relative flex w-full justify-center items-center">
        <AnimateFromLeft>
          <img className="w-full h-auto" src={mobile2} alt="mobile" />
        </AnimateFromLeft>
        <AnimateFromBottom>
          <div className="relative md:top-20 top-10">
            <img className="w-full h-auto" src={mobile1} alt="mobile1" />
            <div className="gap-4 absolute -top-20  left-10 w-full md:flex hidden">
              <AnimateFromLeft>
                <button className="cursor-pointer flex justify-center items-center gap-1 border bg-white border-white rounded-full py-2 px-4">
                  <img
                    className="w-8 h-8  rounded-full"
                    src={apple}
                    alt="apple"
                  />
                  <div className="flex flex-col">
                    <p className="text-black font-normal text-[10px] leading-[10px]">
                      Download on the
                    </p>
                    <p className="text-black font-bold text-[16px] leading-6">
                      App Store
                    </p>
                  </div>
                </button>
              </AnimateFromLeft>
              <AnimateFromRight>
                <button className="flex cursor-pointer justify-center items-center gap-1 border border-white rounded-full py-2 px-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={playstore}
                    alt="playstore"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-normal text-[10px] leading-[10px]">
                      Download on the
                    </p>
                    <p className="text-white font-bold text-[16px] leading-6">
                      App Store
                    </p>
                  </div>
                </button>
              </AnimateFromRight>
            </div>
          </div>
        </AnimateFromBottom>
        <AnimateFromRight>
          <img className="max-w-full h-auto" src={mobile} alt="mobile2" />
        </AnimateFromRight>
      </div>
      <div
        className="w-full md:flex hidden justify-center items-center flex-col  px-40 py-6 relative top-10"
        style={{
          borderWidth: "1px 0px 1px 0px",
          borderStyle: "solid",
          borderImageSource:
            "radial-gradient(24.27% 24.27% at 50% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
          borderImageSlice: 1,
        }}
      >
        <div className="flex justify-between items-center w-full">
          <AnimateFromInside>
            <div className="flex justify-center items-center flex-col">
              <div className="flex items-center justify-center">
                <span className="bg-gradient-to-r relative left-10 font-bold text-[42px] leading-[50px] from-[#1D870B] via-[#66D6AD] to-[#13B5E8] bg-clip-text text-transparent">
                  20K +
                </span>
                <span>
                  <img
                    className="max-w-full relative right-4"
                    src={moon}
                    alt="moon"
                  />
                </span>
              </div>
              <span className="text-white font-normal text-[14px] leading-6">
                Satisfied Clients
              </span>
            </div>
          </AnimateFromInside>
          <AnimateFromInside>
            <div className="border-l border border-[#FFFFFF33]/[0.2] h-20"></div>
          </AnimateFromInside>
          <AnimateFromInside>
            <div className="flex justify-center items-center flex-col pl-6">
              <div className="flex items-center justify-center">
                <span className="bg-gradient-to-r relative left-10 font-bold text-[42px] leading-[50px] from-[#FFCC69] to-[#FF2222] bg-clip-text text-transparent">
                  5m/s
                </span>
                <span>
                  <img
                    className="max-w-full relative right-4"
                    src={rectangle}
                    alt="rectangle"
                  />
                </span>
              </div>
              <span className="text-white font-normal text-[14px] leading-6">
                Lightning Fast Executions
              </span>
            </div>
          </AnimateFromInside>
          <AnimateFromInside>
            <div className="border-l border border-[#FFFFFF33]/[0.2] h-20"></div>
          </AnimateFromInside>
          <AnimateFromInside>
            <div className="flex justify-center items-center flex-col pl-6">
              <div className="flex items-center justify-center">
                <span className="bg-gradient-to-r relative left-10 font-bold text-[42px] leading-[50px] from-[#1D870B] via-[#66D6AD] to-[#13B5E8] bg-clip-text text-transparent">
                  4.6/5+
                </span>
                <span>
                  <img
                    className="max-w-full relative right-4"
                    src={star}
                    alt="star"
                  />
                </span>
              </div>
              <span className="text-white font-normal text-[14px] leading-6">
                Avg Rating
              </span>
            </div>
          </AnimateFromInside>
          <AnimateFromInside>
            <div className="border-l border border-[#FFFFFF33]/[0.2] h-20"></div>
          </AnimateFromInside>
          <AnimateFromInside>
            <div className="flex justify-center items-center flex-col pl-6">
              <div className="flex items-center justify-center">
                <span className="relative left-10 font-bold text-[42px] leading-[50px] text-white bg-clip-text">
                  SEBI
                </span>
                <span>
                  <img
                    className="max-w-full relative right-4 -top-2"
                    src={traingle}
                    alt="traingle"
                  />
                </span>
              </div>
              <span className="text-white font-normal text-[14px] leading-6">
                Registered
              </span>
            </div>
          </AnimateFromInside>
        </div>
      </div>
      <div
        className="w-full md:hidden flex justify-center items-center flex-col  relative top-10 pb-10 pt-6"
        style={{
          borderWidth: "1px 0px 1px 0px",
          borderStyle: "solid",
          borderImageSource:
            "radial-gradient(24.27% 24.27% at 50% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
          borderImageSlice: 1,
        }}
      >
        <div className="grid grid-cols-2 gap-6 rounded-lg text-white max-w-lg relative">
          {/* Individual Vertical and Horizontal dividers with gap in the center */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
            {/* Left vertical pipe */}
            <div className="absolute left-1/2 top-0 h-[45%] w-0.5 bg-[#FFFFFF33]/[0.2] transform -translate-x-1/2"></div>
            <div className="absolute left-1/2 bottom-0 h-[45%] w-0.5 bg-[#FFFFFF33]/[0.2] transform -translate-x-1/2"></div>
            {/* Top horizontal pipe */}
            <div className="absolute top-1/2 left-0 w-[45%] h-0.5 bg-[#FFFFFF33]/[0.2] transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[45%] h-0.5 bg-[#FFFFFF33]/[0.2] transform -translate-y-1/2"></div>
          </div>

          {/* Individual stats */}
          <div className="flex flex-col justify-center items-center">
            <span className="bg-gradient-to-r font-bold text-[24px] leading-7 from-[#1D870B] via-[#66D6AD] to-[#13B5E8] bg-clip-text text-transparent">
              20K +
            </span>
            <p className="font-normal text-[10px] leading-4">
              Satisfied Clients
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span className="bg-gradient-to-r font-bold text-[24px] leading-7 from-[#FFCC69] to-[#FF2222] bg-clip-text text-transparent">
              5m/s
            </span>
            <p className="font-normal text-[10px] leading-4">
              Lightning Fast Executions
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span className="bg-gradient-to-r font-bold text-[24px] leading-7 from-[#1D870B] via-[#66D6AD] to-[#13B5E8] bg-clip-text text-transparent">
              4.6/5+
            </span>
            <p className="font-normal text-[10px] leading-4">Avg Rating</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-[24px] leading-7 text-white bg-clip-text">
              SEBI
            </span>
            <p className="font-normal text-[10px] leading-4">Registered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
