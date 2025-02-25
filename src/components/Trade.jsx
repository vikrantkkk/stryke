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
  const [isMobile, setIsMobile] = useState(false);
  const headerHeight = 20;
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');

  // Update isMobile state when window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total height based on whether it's mobile or desktop
  const totalHeight = isMobile 
    ? Math.max(100, sections.length * 120) // Even more space for mobile sections
    : (sections.length + 1) * 100; // Original height for desktop

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const wrapperHeight = wrapperRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Determine scroll direction
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollTop(currentScrollTop);
      
      // If we're scrolled to the component
      if (wrapperRect.top <= headerHeight && wrapperRect.bottom > 0) {
        // Calculate how far we've scrolled into the component
        const scrollProgress = -(wrapperRect.top - headerHeight);
        const totalScrollableHeight = wrapperHeight - windowHeight;
        const scrollPercentage = Math.min(1, Math.max(0, scrollProgress / totalScrollableHeight));
        
        // Different behavior for mobile and desktop
        let newSection;
        
        if (isMobile) {
          // For mobile: much higher thresholds, require almost complete scroll before changing
          // When scrolling down, we want to hold longer before changing section
          if (scrollDirection === 'down') {
            // These thresholds are much higher - meaning you need to scroll much more to change section
            const thresholds = [0.20, 0.48, 0.75, 0.95]; // Very high thresholds - will show almost all content
            
            for (let i = 0; i < sections.length; i++) {
              if (scrollPercentage < thresholds[i] || i === sections.length - 1) {
                newSection = i;
                break;
              }
            }
          } else {
            // When scrolling up, we can change a bit earlier
            const thresholds = [0.10, 0.38, 0.65, 0.85]; 
            let found = false;
            
            for (let i = sections.length - 1; i >= 0; i--) {
              if (scrollPercentage <= thresholds[i]) {
                newSection = i;
                found = true;
              }
            }
            
            if (!found) {
              newSection = 0;
            }
          }
        } else {
          // Original desktop calculation
          const sectionScrollLength = windowHeight;
          newSection = Math.min(
            Math.max(0, Math.floor(scrollProgress / sectionScrollLength)),
            sections.length - 1
          );
        }
        
        if (newSection !== undefined && newSection !== currentSection) {
          setCurrentSection(newSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    
    // Add a small timeout to ensure scroll handler runs after initial render
    const timeout = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [currentSection, isMobile, lastScrollTop]);

  return (
    <div
      ref={wrapperRef}
      className="relative bg-[#070A07]"
      style={{ height: `${totalHeight}vh` }}
    >
      <div
        ref={containerRef}
        className="sticky top-0 left-0 w-full min-h-screen flex items-center p-8"
      >
        <div className="flex flex-col items-center w-full gap-8 md:gap-16">
          {/* Title */}
          <div key={`title-${currentSection}`} className="w-full mt-8 md:mt-0">
            <AnimateFromBottom key={`anim-title-${currentSection}`}>
              <h2 className="md:font-extrabold font-bold text-[28px] md:text-[80px] leading-8 md:leading-[96px] text-white text-center md:px-0">
                {sections[currentSection].title}
              </h2>
            </AnimateFromBottom>
          </div>

          <div className="flex flex-col md:flex-row w-full md:px-60 justify-between items-center">
            {/* Mobile Layout  */}
            <div className="flex flex-col w-full gap-6 md:hidden">
              <AnimateFromLeft key={`anim-desc-${currentSection}`}>
                <p className="font-normal text-[14px] leading-5 text-white/60 text-center">
                  {sections[currentSection].description}
                </p>
              </AnimateFromLeft>

              <div className="flex justify-center items-center gap-3">
                <div className="flex flex-col gap-3 w-[30%]">
                  <AnimateFromTop key={`anim-img1-${currentSection}`}>
                    <img
                      className="w-full object-cover rounded-lg"
                      src={trade1}
                      alt="Trade Example 1"
                    />
                  </AnimateFromTop>
                  <AnimateFromBottom key={`anim-img2-${currentSection}`}>
                    <img
                      className="w-full object-cover rounded-lg"
                      src={trade2}
                      alt="Trade Example 2"
                    />
                  </AnimateFromBottom>
                </div>
                <div className="flex-1">
                  <AnimateFromRight key={`anim-img3-${currentSection}`}>
                    <img
                      className="object-cover rounded-lg"
                      src={trade3}
                      alt="Trade Example 3"
                    />
                  </AnimateFromRight>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {sections[currentSection].points.map((text, index) => (
                  <AnimateFromLeft key={`anim-point-${currentSection}-${index}`} delay={index * 0.1}>
                    <p
                      className="flex items-center gap-2 font-medium text-[16px] leading-6 text-white"
                    >
                      <img
                        className="w-6 h-6 object-contain" 
                        src={correct}
                        alt="Check"
                      />
                      {text}
                    </p>
                  </AnimateFromLeft>
                ))}
              </div>
            </div>

            {/* Desktop Layout - Preserved Exactly as Original */}
            <div className="hidden md:flex w-full">
              <div key={`content-${currentSection}`} className="w-full">
                <AnimateFromLeft key={`anim-desk-desc-${currentSection}`}>
                  <div className="flex flex-col flex-1 gap-6 items-start max-w-xl">
                    <p className="font-normal text-[20px] leading-7 text-white/60">
                      {sections[currentSection].description}
                    </p>
                    {sections[currentSection].points.map((text, index) => (
                      <p
                        key={`desk-point-${index}`}
                        className="flex items-center gap-3 font-medium text-[20px] leading-7 text-white"
                      >
                        <img
                          className="w-6 h-6 object-contain"
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
                  <AnimateFromTop key={`anim-desk-img1-${currentSection}`}>
                    <img
                      className="object-cover"
                      src={trade1}
                      alt="Trade Example 1"
                    />
                  </AnimateFromTop>
                  <AnimateFromBottom key={`anim-desk-img2-${currentSection}`}>
                    <img
                      className="object-cover"
                      src={trade2}
                      alt="Trade Example 2"
                    />
                  </AnimateFromBottom>
                </div>
                <div className="flex items-center pb-6">
                  <AnimateFromRight key={`anim-desk-img3-${currentSection}`}>
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