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
    <div className="bg-[#070A07] flex justify-center items-center flex-col gap-6 px-10 py-14 w-full">
      <AnimateFromBottom>
        <div className="relative flex justify-center items-center gap-2 rounded-full border border-transparent before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:bg-gradient-to-r before:from-white/5 before:via-white/40 before:to-white/5 before:p-[1px]">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <img
              className="w-10 h-10 border-2 border-white rounded-full"
              src={avatar}
              alt="User 1"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full"
              src={avatar1}
              alt="User 2"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full"
              src={avatar2}
              alt="User 3"
            />
          </div>
          <p className="text-white p-2 font-medium text-[18px] leading-7">
            Trusted by 50,000 Users.
          </p>
        </div>
      </AnimateFromBottom>

      <AnimateFromBottom>
        <p className="font-bold text-[50px] leading-[60px] text-white text-center">
          Unlock The Power Of <br /> Institutional Stock Trading.
        </p>
      </AnimateFromBottom>

      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal text-[18px] leading-7 text-center">
          Get ready to witness the biggest revolution in the history of retail
          trading. Trade like <br /> the professionals with a click of a button.
        </p>
      </AnimateFromInside>

      <AnimateFromInside>
        <div className="rounded-2xl bg-[#141514] w-[1216px] h-[732px] relative">
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
        <Button name="Start Trading" />
      </AnimateFromInside>
      <div className="relative flex w-full justify-center items-center">
        <AnimateFromLeft>
          <img className="max-w-full h-auto" src={mobile2} alt="mobile" />
        </AnimateFromLeft>
        <AnimateFromBottom>
          <div className="relative top-20">
            <img className=" max-w-full h-auto" src={mobile1} alt="mobile1" />
            <div className="flex gap-4 absolute -top-20  left-10 w-full">
              <AnimateFromLeft>
                <div className="flex justify-center items-center gap-1 border border-white rounded-full py-2 px-4">
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
                </div>
              </AnimateFromLeft>
              <AnimateFromRight>
                <div className=" flex justify-center items-center gap-1 border bg-white border-white rounded-full py-2 px-4">
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
                </div>
              </AnimateFromRight>
            </div>
          </div>
        </AnimateFromBottom>
        <AnimateFromRight>
          <img className="max-w-full h-auto" src={mobile} alt="mobile2" />
        </AnimateFromRight>
      </div>
      <div className="bg-[#070A07] flex justify-center items-center flex-col w-screen relative top-10">
        <div
          className=" w-full flex justify-center items-center flex-col px-60 py-6"
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
                    <img className="max-w-full" src={moon} alt="moon" />
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
                      className="max-w-full"
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
                    <img className="max-w-full" src={star} alt="star" />
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
                    <img className="max-w-full" src={traingle} alt="traingle" />
                  </span>
                </div>
                <span className="text-white font-normal text-[14px] leading-6">
                  Registered
                </span>
              </div>
            </AnimateFromInside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
