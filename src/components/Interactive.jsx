import React from "react";
import {
  AnimateFromBottom,
  AnimateFromInside,
  AnimateFromLeft,
  AnimateFromRight,
  AnimateFromTop,
} from "../common/ScrollFadeIn";
import trade1 from "../assets/png/trade1.png";
import trade2 from "../assets/png/trade2.png";
import trade3 from "../assets/png/trade3.png";
import correct from "../assets/svg/correct.svg";
import Button from "../common/Button";

const Interactive = () => {
  return (
    <div className="bg-[#070A07] flex flex-col items-center gap-16 px-10 py-14 w-full">
      <AnimateFromBottom>
        <h2 className="font-extrabold text-[80px] leading-[96px] text-white text-center">
          Interactive <span className="text-[#C0FF73]">Dashboards</span>
        </h2>
      </AnimateFromBottom>

      <div className="flex w-full  px-60 justify-between items-center">
        {/* Left Section (Text) */}
        <AnimateFromLeft>
          <div className="flex flex-col flex-1 gap-6 items-start max-w-xl">
            <p className="font-normal text-[20px] leading-7 text-white/60">
              All the market action, summarized and delivered in a concise
              dashboard built for peak trading performance.
            </p>

            {[
              "Scan buzzing stocks and sectors with actionable insights.",
              "Includes volume shockers, heatmaps, trending stocks, top gainers and much more.",
              "Track sector rotation in real time, with sub-sector level institution grade data.",
              "Step into the future of institutional trading with unparalleled software innovation and cutting edge technology.",
            ].map((text, index) => (
              <p
                key={index}
                className="flex items-center gap-3 font-medium text-[20px] leading-7 text-white"
              >
                <img
                  className="w-16 h-16 object-contain"
                  src={correct}
                  alt="Check"
                />
                {text}
              </p>
            ))}
          </div>
        </AnimateFromLeft>

        {/* Right Section (Images) */}
        <div className="flex w-1/2 gap-4 justify-end items-center">
          <div className="flex flex-col gap-4">
            <AnimateFromTop>
              <img
                className="object-cover"
                src={trade1}
                alt="Trade Example 1"
              />
            </AnimateFromTop>
            <AnimateFromBottom>
              <img
                className="object-cover"
                src={trade2}
                alt="Trade Example 2"
              />
            </AnimateFromBottom>
          </div>
          <div className="flex items-center pb-6">
            <AnimateFromRight>
              <img
                className="object-cover"
                src={trade3}
                alt="Trade Example 3"
              />
            </AnimateFromRight>
          </div>
        </div>
      </div>
      <AnimateFromInside>
        <Button name="Start Trading" />
      </AnimateFromInside>
    </div>
  );
};

export default Interactive;
