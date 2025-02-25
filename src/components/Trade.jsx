import React, { useState, useEffect, useRef } from "react";
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
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const isMobile = window.innerWidth < 768; // md breakpoint
  const totalHeight = isMobile
    ? sections.length * 100
    : (sections.length + 1) * 100;
  const headerHeight = 20;

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const scrollProgress = -(wrapperRect.top - headerHeight);
      const sectionHeight = window.innerHeight;

      if (wrapperRect.top <= headerHeight) {
        const sectionIndex = Math.floor(scrollProgress / sectionHeight);
        const newSection = Math.min(
          Math.max(0, sectionIndex),
          sections.length - 1
        );

        if (newSection !== currentSection) {
          setCurrentSection(newSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <div
      ref={wrapperRef}
      className="relative bg-[#070A07]"
      style={{ height: `${totalHeight}vh` }}
    >
      <div
        ref={containerRef}
        className="sticky top-20 left-0 w-full min-h-[calc(100vh-80px)] flex items-center py-8 md:px-0 px-4 md:py-0"
      >
        <div className="flex flex-col items-center w-full gap-8 md:gap-16">
          {/* Title */}
          <div key={`title-${currentSection}`} className="w-full">
            <AnimateFromBottom>
              <h2 className="md:font-extrabold font-bold text-[28px] md:text-[80px] leading-8 md:leading-[96px] text-white text-center  md:px-0">
                {sections[currentSection].title}
              </h2>
            </AnimateFromBottom>
          </div>

          <div className="flex flex-col md:flex-row w-full md:px-60 justify-between items-center">
            {/* Mobile Layout */}
            <div className="flex flex-col w-full gap-6  md:hidden">
              <AnimateFromLeft>
                <p className="font-normal text-[14px] leading-5 text-white/60 text-center">
                  {sections[currentSection].description}
                </p>
              </AnimateFromLeft>

              <div className="flex justify-center items-center gap-3 ">
                <div className="flex flex-col gap-3 w-[30%]">
                  <AnimateFromTop>
                    <img
                      className="w-full object-cover rounded-lg"
                      src={trade1}
                      alt="Trade Example 1"
                    />
                  </AnimateFromTop>
                  <AnimateFromBottom>
                    <img
                      className="w-full object-cover rounded-lg"
                      src={trade2}
                      alt="Trade Example 2"
                    />
                  </AnimateFromBottom>
                </div>
                <div className="flex-1">
                  <AnimateFromRight>
                    <img
                      className="object-cover  rounded-lg"
                      src={trade3}
                      alt="Trade Example 3"
                    />
                  </AnimateFromRight>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {sections[currentSection].points.map((text, index) => (
                  <p
                    key={index}
                    className="flex items-center gap-2 font-medium text-[16px] leading-6 text-white"
                  >
                    <img
                      className="w-16 h-16 object-"
                      src={correct}
                      alt="Check"
                    />
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Desktop Layout - Preserved Exactly as Original */}
            <div className="hidden md:flex w-full">
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

              <div className="flex w-1/2 gap-4 justify-end items-center">
                <div
                  key={`images-${currentSection}`}
                  className="flex flex-col gap-4"
                >
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
          </div>

          {/* Button */}
    
            <AnimateFromInside>
              <Button name="Start Trading" />
            </AnimateFromInside>
         
        </div>

        <img
          className="absolute right-0 hidden md:block"
          src={tradelipse}
          alt="tradelipse"
        />
      </div>
    </div>
  );
};

export default Trade;
