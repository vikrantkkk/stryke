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
    description:
      "Dive deep into comprehensive market data for informed decision-making",
    image: learn,
    position: "translate-y-[25%] -translate-x-[15%] rotate-[-15deg]",
    width: "w-[80%]",
  },
  {
    title: "Live Trading Stream",
    description:
      "Safeguard your sensitive financial information with state-of-the-art encryption",
    image: stream,
    position: "translate-y-[25%] -translate-x-[15%] rotate-[-5deg]",
    width: "w-[50%]",
  },
];

const cards1 = [
  {
    title: "Priority Customer Support",
    description:
      "Seamlessly share ideas, strategies, and insights with fellow traders",
    image: support,
    position: "translate-y-[25%] -translate-x-[25%] rotate-[5deg]",
    width: "w-[50%]",
  },
  {
    title: "Lightning Fast Trading Signals",
    description:
      "Dive deep into comprehensive market data for informed decision-making",
    image: signals,
    position: "translate-y-[25%] translate-x-[25%] rotate-[-5deg]",
    width: "w-[80%]",
  },
];

const Card = ({ title, description, image, position, width }) => (
  <div
    className={`relative bg-gradient-to-b flex flex-col justify-start gap-4 from-[#0E1712] to-[#040404] text-white p-3 rounded-xl transform transition-all duration-300 hover:scale-105 mx-2 shadow-[ -15px_28px_54.3px_0px_#00000040] border-gradient ${position} ${width}`}
  >
    <div className="text-start">
      <p className="font-normal text-[12px] leading-4">{title}</p>
    </div>
    <div className="text-start">
      <p className="font-normal text-[12px] leading-4">{description}</p>
    </div>
    <img
      src={image}
      alt={title}
      className="w-18 h-18 object-cover rounded-full mx-auto"
    />
  </div>
);

const Membership = () => {
  return (
    <div className="bg-[#070A07] flex flex-col items-center gap-16 px-10 py-14 w-full">
      <AnimateFromBottom>
        <h2 className="font-extrabold text-[50px] leading-[96px] text-white text-center">
          Membership <span className="text-[#C0FF73]">Highlights</span>
        </h2>
      </AnimateFromBottom>
      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal text-[18px] leading-7 text-center">
          Everything you need to become a Super Trader.
        </p>
      </AnimateFromInside>

      <div className="grid grid-cols-2 gap-10 w-full max-w-5xl">
        <AnimateFromBottom>
          <div className="flex flex-col items-center">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </AnimateFromBottom>
        <AnimateFromBottom>
          <div className="flex flex-col items-center">
            {cards1.map((card, index) => (
              <Card key={index} {...card} />
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
