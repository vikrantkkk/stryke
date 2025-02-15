import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
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

// Variants for fade and slide animations
const fadeVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Trade = () => {
  const { scrollY } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);

  // Use the viewport height as the threshold for each section.
  // (Note: window.innerHeight is used here. For SSR safety, you may need additional checks.)
  const sectionHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  // Listen to scroll changes using Framer Motion's hook.
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Calculate the active section based on scroll offset.
    const newSection = Math.floor(latest / sectionHeight) % sections.length;
    setCurrentSection(newSection);
  });

  return (
    <div className="bg-[#070A07] flex flex-col items-center gap-16 py-14 w-full relative">
      {/* Animated Title */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`title-${currentSection}`}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="font-extrabold text-[80px] leading-[96px] text-white text-center">
            {sections[currentSection].title}
          </h2>
        </motion.div>
      </AnimatePresence>

      <div className="flex w-full px-60 justify-between items-center h-96">
        {/* Description & Points */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSection}`}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="flex flex-col flex-1 gap-6 items-start max-w-xl">
              <p className="font-normal text-[20px] leading-7 text-white/60">
                {sections[currentSection].description}
              </p>
              {sections[currentSection].points.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 font-medium text-[20px] leading-7 text-white"
                >
                  <img
                    className="w-16 h-16 object-contain"
                    src={correct}
                    alt="Check"
                  />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Images */}
        <div className="flex w-1/2 gap-4 justify-end items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`images-${currentSection}`}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <motion.img
                className="object-cover"
                src={trade1}
                alt="Trade Example 1"
              />
              <motion.img
                className="object-cover"
                src={trade2}
                alt="Trade Example 2"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`trade3-${currentSection}`}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex items-center pb-6"
            >
              <motion.img
                className="object-cover"
                src={trade3}
                alt="Trade Example 3"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Button */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`button-${currentSection}`}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button name="Start Trading" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Element */}
      <img className="absolute right-0" src={tradelipse} alt="tradelipse" />
    </div>
  );
};

export default Trade;
