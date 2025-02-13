import React, { useState, useEffect } from "react";
import {
  AnimateFromBottom,
  AnimateFromLeft,
  AnimateFromTop,
  AnimateFromRight,
  AnimateFromInside,
} from "../common/ScrollFadeIn";
import trade1 from "../assets/png/trade1.png";
import trade2 from "../assets/png/trade2.png";
import trade3 from "../assets/png/trade3.png";
import tradelipse from "../assets/png/tradelipse.png";
import correct from "../assets/svg/correct.svg";
import Button from "../common/Button";

const sections = [
  {
    title: (
      <>
        Powerful <span className="text-gradient">Trade Ideas</span>
      </>
    ),
    description:
      "Get real-time trading and investing signals curated by SEBI registered professionals in equity, futures, options, and commodities.",
    points: [
      "Powered by proprietary institutional trading strategies.",
      "Lightning-fast trade executions with assisted risk management and position sizing.",
      "A.I-powered trade management tools to maximize your winning trades.",
      "Intuitive trading cockpit with mind-blowing data-backed insights.",
    ],
  },
  {
    title: (
      <>
        Discover <span className="text-gradient">Hot Stocks</span>
      </>
    ),
    description:
      "Track smart money moves, hottest stocks, trending sectors to stay ahead of everyone else.",
    points: [
      "Capture the biggest and the strongest moves all day, everyday.",
      "In built institutional screeners and scanners to find hidden gems.",
      "Best in class research insights by SEBI registered professionals.",
      "Identify multibagger investing opportunities.",
    ],
  },
  {
    title: (
      <>
        Interactive <span className="text-gradient">Dashboards</span>
      </>
    ),
    description:
      "All the market action, summarized and delivered in a concise dashboard built for peak trading performance.",
    points: [
      "Scan buzzing stocks and sectors with actionable insights.",
      "Includes volume shockers, heatmaps, trending stocks, top gainers and much more.",
      "Track sector rotation in real time, with sub-sector level institution grade data.",
      "Step into the future of institutional trading with unparalleled software innovation and cutting edge technology.",
    ],
  },
  {
    title: (
      <>
        Trade On <span className="text-gradient">Autopilot Mode</span>
      </>
    ),
    description:
      "Introducing India's first fully automated risk and position management system. Now sit back, relax and let your co-pilot manage your trades.",
    points: [
      "Optimize your trades and investments by our A.I powered risk manager, to keep you protected at all times.",
      "One click, that's all you need. No need to track the markets all day, your co-pilot is at your service.",
      "Get powerful insights about your active and closed trades, another industry first feature.",
      "Leverage technology and data to achieve peak performance trading.",
    ],
  },
];

const Trade = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="bg-[#070A07] flex flex-col items-center gap-16  py-14 w-full relative">
      {/* Title with animation delay */}
      <div key={`title-${currentSection}`} className="w-full">
        <AnimateFromBottom>
          <h2 className="font-extrabold text-[80px] leading-[96px] text-white text-center">
            {sections[currentSection].title}
          </h2>
        </AnimateFromBottom>
      </div>

      <div className="flex w-full px-60 justify-between items-center">
        {/* Left Section - Description and Points */}
        <div key={`content-${currentSection}`} className="w-full">
          <AnimateFromLeft>
            <div className="flex flex-col flex-1 gap-6 items-start max-w-xl">
              <p className="font-normal text-[20px] leading-7 text-white/60">
                {sections[currentSection].description}
              </p>

              {sections[currentSection].points.map((text, index) => (
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
        </div>

        {/* Right Section - Images */}
        <div className="flex w-1/2 gap-4 justify-end items-center">
          <div key={`images-${currentSection}`} className="flex flex-col gap-4">
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

      {/* Button with delay */}
      <div key={`button-${currentSection}`}>
        <AnimateFromInside style={{ animationDelay: "2.5s" }}>
          <Button name="Start Trading" />
        </AnimateFromInside>
      </div>
      <img
        className="absolute right-0"
        src={tradelipse}
        alt="tradelipse"
      />
    </div>
  );
};

export default Trade;
