import React from "react";
import { AnimateFromBottom, AnimateFromInside } from "../common/ScrollFadeIn";
import aditya from "../assets/png/aditya.png";

const cardData = Array(6).fill({
  title: "Nav Shaikh",
  description:
    "The app is fairly new and has decent stability. I have the VIP, and in the long run, it's going to get better with customer feedback. Since the app is money sensitive, it has to be tested before any feature is released, as people will always try to find faults and cry over it. If anyone is finding it expensive, there are other people charging the same without the app and without any support in any way. People are impatient and need instant results for the money spent without putting in effort.",
  image: aditya,
});

const Super = () => {
  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col gap-16 px-10 py-14 w-full">
      <AnimateFromBottom>
        <h2 className="font-extrabold text-[80px] leading-[96px] text-white text-center">
          Hear it up From Super
        </h2>
      </AnimateFromBottom>

      {/* Parent Div 1 (First 3 Cards) */}
      <div className="flex justify-center gap-10 w-full px-60">
        {cardData.slice(0, 3).map((feature, index) => (
          <AnimateFromInside key={index}>
            <div
              className="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-sm 
              border-[1px] border-[#58FF290F] bg-[linear-gradient(206deg,#0E1712_-41.83%,#040404_98.64%)]"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-medium">{feature.title}</p>
                    <div className="text-[#09B316] text-lg">★ ★ ★ ★ ★</div>
                  </div>
                </div>
                <p className="font-light text-[16px] leading-6 text-[#FFFFFF]/[0.7]">
                  November 4, 2024
                </p>
              </div>
              <p className="font-normal text-[14px] leading-5 text-white">
                {feature.description}
              </p>
            </div>
          </AnimateFromInside>
        ))}
      </div>

      {/* Parent Div 2 (Next 3 Cards) */}
      <div className="flex justify-center gap-10 w-full px-60">
        {cardData.slice(3, 6).map((feature, index) => (
          <AnimateFromInside key={index}>
            <div
              className="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-sm 
              border-[1px] border-[#58FF290F] bg-[linear-gradient(206deg,#0E1712_-41.83%,#040404_98.64%)]"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-medium">{feature.title}</p>
                    <div className="text-[#09B316] text-lg">★ ★ ★ ★ ★</div>
                  </div>
                </div>
                <p className="font-light text-[16px] leading-6 text-[#FFFFFF]/[0.7]">
                  November 4, 2024
                </p>
              </div>
              <p className="font-normal text-[14px] leading-5 text-white">
                {feature.description}
              </p>
            </div>
          </AnimateFromInside>
        ))}
      </div>
    </div>
  );
};

export default Super;
