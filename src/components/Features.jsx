import React from "react";
import { AnimateFromBottom, AnimateFromInside } from "../common/ScrollFadeIn";
import rightelipse from "../assets/png/rightelipse.png";
import leftelipse from "../assets/png/leftelipse.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "Real-Time Alerts arts",
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

  const sliderSettingsMobile = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };

  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col md:gap-16 gap-6  py-14 w-full relative z-10">
      <AnimateFromBottom>
        <h2 className="md:font-extrabold font-bold md:text-[80px] text-[28px] md:leading-[96px] leading-8 text-white text-center">
          Power-Packed <span className="text-[#C0FF73]">Features</span>
        </h2>
      </AnimateFromBottom>
      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal md:text-[18px] text-[12px] md:leading-7 leading-5 text-center md:px-0 px-4">
          We help traders catch the biggest moves in the hottest stocks before
          everyone else. Our secret sauce? Cutting edge <br /> research and
          revolutionary technology to keep our users ahead of the rest.
        </p>
      </AnimateFromInside>

      <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-40">
        {featuresData.map((feature) => (
          <AnimateFromInside key={feature.id}>
            <div
              className="flex flex-col cursor-pointer items-start gap-4 p-6 rounded-2xl shadow-2xs
        border-[1px] border-[#58FF290F] bg-[linear-gradient(206deg,#0E1712_-41.83%,#040404_98.64%)]
        transition-all duration-300 hover:border
        hover:border-image-[linear-gradient(0deg,rgba(88,255,41,0.06),rgba(88,255,41,0.06)),linear-gradient(238.28deg,#58FF29_0%,rgba(88,255,41,0.241987)_11.61%,rgba(88,255,41,0)_89.58%)]
        hover:border-image-slice-[1] box-border
        hover:shadow-[1px_-1px_1px_1px_rgba(88,255,41,0.35),-1px_2px_3px_0px_rgba(88,255,41,0.1)]
        h-full"
            >
              <h3 className="font-semibold text-[22px] leading-7 text-white">
                {feature.title}
              </h3>
              <p className="font-normal text-[14px] leading-5 text-white flex-grow">
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

      <div className="block md:hidden w-full px-4">
        <Slider {...sliderSettingsMobile}>
          {featuresData.map((feature) => (
            <div key={feature.id} className="p-4">
              <div className="flex flex-col cursor-pointer items-start gap-4 p-6 rounded-2xl shadow-2xs border border-[#58FF290F] 
                bg-[linear-gradient(206deg,#0E1712_-41.83%,#040404_98.64%)] transition-all duration-300 hover:border hover:shadow-lg h-full">
                <h3 className="font-semibold md:text-[22px] text-[20px] md:leading-7 leading-6 text-white">{feature.title}</h3>
                <p className="font-normal md:text-[14px] text-[12px] md:leading-5 leading-4 text-white flex-grow">{feature.description}</p>
                <img src={feature.image} alt={feature.title} className="w-full h-40 rounded-xl object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <img
        className="absolute right-0 -bottom-2 -z-10"
        src={rightelipse}
        alt="rightelipse"
      />
      <img
        className="absolute left-0 -bottom-2 -z-10"
        src={leftelipse}
        alt="leftelipse"
      />
    </div>
  );
};

export default Features;
