import React from "react";
import aditya from "../assets/png/aditya.png";
import reviewelipse from "../assets/png/reviewelipse.png";
import { AnimateFromBottom } from "../common/ScrollFadeIn";

const cardData = Array(6).fill({
  title: "Nav Shaikh",
  description:
    "The app is fairly new and has decent stability. I have the VIP, and in the long run, it's going to get better with customer feedback. Since the app is money sensitive, it has to be tested before any feature is released, as people will always try to find faults and cry over it. If anyone is finding it expensive, there are other people charging the same without the app and without any support in any way. People are impatient and need instant results for the money spent without putting in effort.",
  image: aditya,
});

const Super = () => {
  const continuousCards = [...cardData, ...cardData];

  return (
    <div className="bg-[#070A07] flex flex-col gap-16 px-10 py-14 w-full relative z-10 overflow-hidden">
      <AnimateFromBottom>
        <h2 className="font-extrabold text-[80px] leading-[96px] text-white text-center">
          Hear it up From Super
        </h2>
      </AnimateFromBottom>
      <div className="flex flex-col gap-8">
        <div className="animate-marquee overflow-hidden">
          <div className="flex justify-center gap-10 w-full px-60">
            {continuousCards.map((feature, index) => (
              <div
                key={index}
                style={{ width: "350px", flexShrink: 0 }}
                className="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-sm border border-[#58FF290F] bg-[linear-gradient(206deg,#0E1712_-41.83%,#040404_98.64%)] min-w-lg"
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
                  <p className="font-light text-[16px] leading-6 text-white/70">
                    November 4, 2024
                  </p>
                </div>
                <p className="font-normal text-[14px] leading-5 text-white">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-marquee1 overflow-hidden">
          <div className="flex justify-center gap-10 w-full px-60">
            {continuousCards.map((feature, index) => (
              <div
                key={index}
                style={{ width: "350px", flexShrink: 0 }}
                className="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-sm border border-[#58FF290F] bg-[linear-gradient(206deg,#0E1712_-41.83%,#040404_98.64%)] min-w-lg"
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
                  <p className="font-light text-[16px] leading-6 text-white/70">
                    November 4, 2024
                  </p>
                </div>
                <p className="font-normal text-[14px] leading-5 text-white">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        className="absolute -top-40 right-0 -z-10"
        src={reviewelipse}
        alt="reviewelipse"
      />
    </div>
  );
};

export default Super;
