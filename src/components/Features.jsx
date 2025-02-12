import React from "react";
import { AnimateFromBottom, AnimateFromInside } from "../common/ScrollFadeIn";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "Real-Time Alerts",
      description:
        "Get instant notifications about the latest market movements.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Investing Ideas",
      description:
        "In fermentum facilisi volutpat dui feugiat tempus odio luctus. Tincidunt libero pellentesque blandit vitae pellentesque consequat pellentesque.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Smart Money Scans",
      description:
        "In fermentum facilisi volutpat dui feugiat tempus odio luctus. Tincidunt libero pellentesque blandit vitae pellentesque consequat pellentesque.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "A.I Powered News",
      description:
        "In fermentum facilisi volutpat dui feugiat tempus odio luctus. Tincidunt libero pellentesque blandit vitae pellentesque consequat pellentesque.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "Heatmaps",
      description:
        "In fermentum facilisi volutpat dui feugiat tempus odio luctus. Tincidunt libero pellentesque blandit vitae pellentesque consequat pellentesque.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      title: "Built In Risk Manager",
      description:
        "In fermentum facilisi volutpat dui feugiat tempus odio luctus. Tincidunt libero pellentesque blandit vitae pellentesque consequat pellentesque.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col gap-16 px-10 py-14 w-full">
      <AnimateFromBottom>
        <h2 className="font-extrabold text-[80px] leading-[96px] text-white text-center">
          Power-Packed <span className="text-[#C0FF73]">Features</span>
        </h2>
      </AnimateFromBottom>
      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal text-[18px] leading-7 text-center">
          We help traders catch the biggest moves in the hottest stocks before
          everyone else. Our secret sauce? Cutting edge <br /> research and
          revolutionary technology to keep our users ahead of the rest.
        </p>
      </AnimateFromInside>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-60">
        {featuresData.map((feature) => (
          <AnimateFromInside key={feature.id}>
            <div
              className="flex flex-col cursor-pointer items-start gap-4 p-6 rounded-2xl shadow-2xs
            border-[1px] border-[#58FF290F] bg-[linear-gradient(206deg,#0E1712_-41.83%,#040404_98.64%)]
            transition-all duration-300 hover:border
            hover:border-image-[linear-gradient(0deg,rgba(88,255,41,0.06),rgba(88,255,41,0.06)),linear-gradient(238.28deg,#58FF29_0%,rgba(88,255,41,0.241987)_11.61%,rgba(88,255,41,0)_89.58%)]
            hover:border-image-slice-[1] box-border
            hover:shadow-[1px_-1px_1px_1px_rgba(88,255,41,0.35),-1px_2px_3px_0px_rgba(88,255,41,0.1)]"
            >
              <h3 className="font-semibold text-[22px] leading-7 text-white">
                {feature.title}
              </h3>
              <p className="font-normal text-[14px] leading-5 text-white">
                {feature.description}
              </p>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 rounded-xl object-cover"
              />
            </div>
          </AnimateFromInside>
        ))}
      </div>
    </div>
  );
};

export default Features;
