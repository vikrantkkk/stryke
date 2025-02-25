import React from "react";
import {
  AnimateFromBottom,
  AnimateFromInside,
  AnimateFromLeft,
  AnimateFromRight,
} from "../common/ScrollFadeIn";
import one from "../assets/png/1.png";
import two from "../assets/png/2.png";
import three from "../assets/png/6.png";
import four from "../assets/png/4.png";
import five from "../assets/png/5.png";
import tradingelipse from "../assets/png/tradingelipse.png";
import Button from "../common/Button";

const Comprehensive = () => {
  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col md:gap-16 gap-6 py-14 w-full relative">
      <AnimateFromBottom>
        <h2 className="md:font-extrabold font-bold md:text-[50px] text-[28px] md:leading-[96px] leading-10 text-white text-center">
          India's Most <span className="text-[#C0FF73]">Comprehensive</span>
          Trading Platform
        </h2>
      </AnimateFromBottom>
      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal md:text-[18px] text-[12px] md:leading-7 leading-5 text-center">
          We combine research with technology and human intelligence to
          supercharge your trading and investing journey.
        </p>
      </AnimateFromInside>
      <div className="flex justify-center items-center w-full gap-4 md:px-60">
        <AnimateFromLeft>
          <img className="object-cover" src={one} alt="one" />
        </AnimateFromLeft>  
        <AnimateFromLeft>
          <img className="object-cover" src={two} alt="two" />
        </AnimateFromLeft>
        <AnimateFromInside>
          <img className="object-cover" src={three} alt="three" />
        </AnimateFromInside>
        <AnimateFromRight>
          <img className="object-cover" src={four} alt="four" />
        </AnimateFromRight>
        <AnimateFromRight>
          <img className="object-cover" src={five} alt="five" />
        </AnimateFromRight>
      </div>
      <AnimateFromInside>
        <Button name="Get Started" />
      </AnimateFromInside>
      <img
        className="absolute right-0 -bottom-72"
        src={tradingelipse}
        alt="tradingelipse"
      />
    </div>
  );
};

export default Comprehensive;
