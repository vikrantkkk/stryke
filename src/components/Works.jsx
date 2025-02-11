import React from "react";
import iphone15 from "../assets/png/iphone15.png";
import {
  AnimateFromBottom,
  AnimateFromLeft,
  AnimateFromRight,
} from "../common/ScrollFadeIn";

const Works = () => {
  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col gap-16 px-10 py-14 w-full">
      <AnimateFromBottom>
        <p className="font-extrabold text-[80px] leading-[96px] text-white">
          How It <span className="text-[#C0FF73]">Works?</span>
        </p>
      </AnimateFromBottom>
      <div className="flex justify-center items-center flex-col gap-40 w-full px-60">
        <div className="flex justify-between items-center w-full rounded-xl px-20">
          <AnimateFromLeft>
            <div className="border border-[#292929] flex flex-col  gap-4 p-6 rounded-xl w-lg">
              <p className="font-extrabold text-[20px] leading-6 text-[#C0FF73]">
                Step 1: Connect Your Broker
              </p>
              <p className="font-normal text-[18px] leading-7 text-[#FFFFFF99]/[0.6]">
                Easily integrate your broker to execute <br /> trades seamlessly
                in a single click.
              </p>
            </div>
          </AnimateFromLeft>
          <AnimateFromRight>
            <div className="flex-shrink-0">
              <img
                className="object-cover"
                src={iphone15}
                alt="iphone15"
              />
            </div>
          </AnimateFromRight>
        </div>

        <div className="flex justify-between items-center w-full rounded-xl px-20">
          <AnimateFromLeft>
            <div className="flex flex-col w-full gap-12">
              <div className="border border-[#292929] flex flex-col  gap-4 p-6 rounded-xl w-lg">
                <p className="font-extrabold text-[20px] leading-6 text-[#C0FF73]">
                  Step 1: Connect Your Broker
                </p>
                <p className="font-normal text-[18px] leading-7 text-[#FFFFFF99]/[0.6]">
                  Easily integrate your broker to execute <br /> trades
                  seamlessly in a single click.
                </p>
              </div>
              <div className="border border-[#292929] flex flex-col  gap-4 p-6 rounded-xl w-lg">
                <p className="font-extrabold text-[20px] leading-6 text-[#C0FF73]">
                  Step 2: Execute Signals Instantly
                </p>
                <p className="font-normal text-[18px] leading-7 text-[#FFFFFF99]/[0.6]">
                  Join the community of likeminded peopleJ oin the community of
                  likeminded people
                </p>
              </div>
            </div>
          </AnimateFromLeft>

          <AnimateFromRight>
            <div className="flex-shrink-0">
              <img
                className="object-cover"
                src={iphone15}
                alt="iphone15"
              />
            </div>
          </AnimateFromRight>
        </div>

        <div className="flex justify-between items-center w-full rounded-xl px-20">
          <AnimateFromLeft>
            <div className="flex flex-col w-full gap-12">
              <div className="border border-[#292929] flex flex-col w-1/2 gap-4 p-6 rounded-xl min-w-lg">
                <p className="font-extrabold text-[20px] leading-6 text-[#C0FF73]">
                  Step 1: Connect Your Broker
                </p>
                <p className="font-normal text-[18px] leading-7 text-[#FFFFFF99]/[0.6]">
                  Easily integrate your broker to execute <br /> trades
                  seamlessly in a single click.
                </p>
              </div>
              <div className="border border-[#292929] flex flex-col w-1/2 gap-4 p-6 rounded-xl min-w-lg">
                <p className="font-extrabold text-[20px] leading-6 text-[#C0FF73]">
                Step 2: Execute Signals Instantly
                </p>
                <p className="font-normal text-[18px] leading-7 text-[#FFFFFF99]/[0.6]">
                Join the community of likeminded peopleJ oin the community of likeminded people
                </p>
              </div>
              <div className="border border-[#292929] flex flex-col w-1/2 gap-4 p-6 rounded-xl min-w-lg">
                <p className="font-extrabold text-[20px] leading-6 text-[#C0FF73]">
                Step 3: Sit Back & Relax!
                </p>
                <p className="font-normal text-[18px] leading-7 text-[#FFFFFF99]/[0.6]">
                 Join the community of likeminded peopleJ oin the community of likeminded people
                </p>
              </div>
            </div>
          </AnimateFromLeft>

          <AnimateFromRight>
            <div className="flex-shrink-0">
              <img
                className="object-cover"
                src={iphone15}
                alt="iphone15"
              />
            </div>
          </AnimateFromRight>
        </div>
      </div>
    </div>
  );
};

export default Works;
