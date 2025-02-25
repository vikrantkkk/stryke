import React from "react";
import { AnimateFromBottom, AnimateFromInside } from "../common/ScrollFadeIn";
import learn from "../assets/svg/learn.svg";
import stream from "../assets/svg/stream.svg";
import support from "../assets/svg/support.svg";
import signals from "../assets/svg/correct.svg";
import Button from "../common/Button";

const cards = [
  {
    title: "Learn From The Basics",
    description: "Dive deep into comprehensive market data for informed decision-making",
    image: learn,
    position: "md:translate-y-[25%] md:-translate-x-[15%] md:rotate-[-15deg]",
    width: "md:w-[70%]",
  },
  {
    title: "Live Trading Stream",
    description: "Safeguard your sensitive financial information with state-of-the-art encryption",
    image: stream,
    position: "md:translate-y-[25%] md:-translate-x-[15%] md:rotate-[-5deg]",
    width: "md:w-[50%]",
  },
];

const cards1 = [
  {
    title: "Priority Customer Support",
    description: "Seamlessly share ideas, strategies, and insights with fellow traders",
    image: support,
    position: "md:translate-y-[25%] md:-translate-x-[25%] md:rotate-[5deg]",
    width: "md:w-[50%]",
  },
  {
    title: "Lightning Fast Trading Signals",
    description: "Dive deep into comprehensive market data for informed decision-making",
    image: signals,
    position: "md:translate-y-[25%] md:translate-x-[25%] md:rotate-[-5deg]",
    width: "md:w-[70%]",
  },
];
const cards2 = [
  {
    title: "Learn From The Basics",
    description: "Dive deep into comprehensive market data for informed decision-making",
    image: learn,
    position: "md:translate-y-[25%] md:-translate-x-[15%] md:rotate-[-15deg]",
    width: "md:w-[70%]",
  },
  {
    title: "Live Trading Stream",
    description: "Safeguard your sensitive financial information with state-of-the-art encryption",
    image: stream,
    position: "md:translate-y-[25%] md:-translate-x-[15%] md:rotate-[-5deg]",
    width: "md:w-[50%]",
  },
];

const cards3 = [
  {
    title: "Priority Customer Support",
    description: "Seamlessly share ideas, strategies, and insights with fellow traders",
    image: support,
  },
  {
    title: "Lightning Fast Trading Signals",
    description: "Dive deep into comprehensive market data for informed decision-making",
    image: signals,
  },
];


const Membership = () => {
  return (
    <div className="bg-[#070A07] flex flex-col items-center md:gap-16 gap-6 py-14 w-full">
      <AnimateFromBottom>
        <h2 className="md:font-extrabold font-bold md:text-[50px] text-[28px] md:leading-[96px] leading-[38px] text-white text-center">
          Membership <span className="text-[#C0FF73]">Highlights</span>
        </h2>
      </AnimateFromBottom>
      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal md:text-[18px] text-[12px] md:leading-7 leading-5 text-center">
          Everything you need to become a Super Trader.
        </p>
      </AnimateFromInside>

      <div className="hidden md:grid grid-cols-2 gap-10 w-full px-60">
        <AnimateFromBottom>
          <div className="flex flex-col items-center">
            {cards.map((card, index) => (
              <div key={index} className={`relative bg-gradient-to-b flex flex-col justify-start gap-4 from-[#0E1712] to-[#040404] text-white p-3 rounded-xl transform transition-all duration-300 md:hover:scale-105 mx-2 shadow-[ -15px_28px_54.3px_0px_#00000040] border-gradient ${card.position} ${card.width}`}>
                <div className="text-start">
                  <p className="font-normal text-[12px] leading-4">{card.title}</p>
                </div>
                <div className="text-start">
                  <p className="font-normal text-[12px] leading-4">{card.description}</p>
                </div>
                <div className="flex justify-end">
                  <img src={card.image} alt={card.title} className="w-18 h-18 object-cover rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </AnimateFromBottom>
        <AnimateFromBottom>
          <div className="flex flex-col items-center">
            {cards1.map((card, index) => (
              <div key={index} className={`relative bg-gradient-to-b flex flex-col justify-start gap-4 from-[#0E1712] to-[#040404] text-white p-3 rounded-xl transform transition-all duration-300 md:hover:scale-105 shadow-[ -15px_28px_54.3px_0px_#00000040] border-gradient ${card.position} ${card.width}`}>
                <div className="text-start">
                  <p className="font-normal text-[12px] leading-4">{card.title}</p>
                </div>
                <div className="text-start">
                  <p className="font-normal text-[12px] leading-4">{card.description}</p>
                </div>
                <div className="flex justify-end">
                  <img src={card.image} alt={card.title} className="w-18 h-18 object-cover rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </AnimateFromBottom>
      </div>

      <div className="md:hidden gap-4 flex justify-center items-center">
      <AnimateFromBottom>
          <div className="flex flex-col gap-4 items-center">
            {cards2.map((card, index) => (
              <div key={index} className={`relative bg-gradient-to-b flex flex-col justify-start gap-1 h-32 w-44 from-[#0E1712] to-[#040404] text-white p-2 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-[ -15px_28px_54.3px_0px_#00000040] border-gradient`}>
                <div className="text-start">
                  <p className="font-semibold text-[10px] leading-3">{card.title}</p>
                </div>
                <div className="text-start">
                  <p className="font-normal text-[8px] leading-3 text-[#FFFFFFB2]/70">{card.description}</p>
                </div>
                <div className="flex justify-end">
                  <img src={card.image} alt={card.title} className="w-14 h-14 object-cover rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </AnimateFromBottom>
        <AnimateFromBottom>
          <div className="flex flex-col  gap-4 items-center">
            {cards3.map((card, index) => (
              <div key={index} className={`relative bg-gradient-to-b flex flex-col justify-start gap-1 h-32 w-32 from-[#0E1712] to-[#040404] text-white p-2 rounded-xl transform transition-all duration-300 hover:scale-105  shadow-[ -15px_28px_54.3px_0px_#00000040] border-gradient`}>
                <div className="text-start">
                  <p className="font-semibold text-[10px] leading-3">{card.title}</p>
                </div>
                <div className="text-start">
                  <p className="font-normal text-[8px] leading-3 text-[#FFFFFFB2]/70">{card.description}</p>
                </div>
                <div className="flex justify-end">
                  <img src={card.image} alt={card.title} className="w-10 h-10 object-cover rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </AnimateFromBottom>
      </div>

      <div className="mt-10">
        <AnimateFromInside>
          <Button name="Get Started" />
        </AnimateFromInside>
      </div>
    </div>
  );
};

export default Membership;
