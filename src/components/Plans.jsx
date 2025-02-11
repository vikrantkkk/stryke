import React from "react";
import { AnimateFromBottom } from "../common/ScrollFadeIn";

const Plans = () => {
  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col gap-16 px-10 py-14 w-full">
      <AnimateFromBottom>
        <h2 className="font-extrabold text-[80px] leading-[96px] text-white text-center">
          Pricing <span className="text-[#C0FF73]">Plans</span>
        </h2>
      </AnimateFromBottom>
    </div>
  );
};

export default Plans;
