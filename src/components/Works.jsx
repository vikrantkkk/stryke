import React from "react";
import { motion } from "framer-motion";
import iphone15 from "../assets/png/iphone15.png";
import workelipse from "../assets/png/workelipse.png";
import {
  AnimateFromBottom,
  AnimateFromLeft,
  AnimateFromRight,
} from "../common/ScrollFadeIn";


const Works = () => {
  return (
    <div className="bg-[#070A07] flex flex-col items-center gap-16 py-14 w-full relative">
      <AnimateFromBottom>
        <h2 className="md:font-extrabold font-bold md:text-[80px] text-[28px] md:leading-[96px] leading-8 text-white text-center">
          How It <span className="text-[#C0FF73]">Works?</span>
        </h2>
      </AnimateFromBottom>
      <div className="bg-[#070A07] flex w-full">
        {/* Left Section with Scrollable Cards */}
        <div className="w-1/2 flex justify-center items-center flex-col relative">
          {/* Card 1 */}
          <motion.div
            className="h-screen flex flex-col justify-center gap-4 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimateFromLeft>
              <div className="border border-[#292929] flex flex-col gap-4 p-6 rounded-xl w-lg justify-center">
                <p className="font-extrabold text-[20px] leading-6 text-[#C0FF73]">
                  Step 1: Connect Your Broker
                </p>
                <p className="font-normal text-[18px] leading-7 text-[#FFFFFF99]/[0.6]">
                  Easily integrate your broker to execute trades seamlessly in a
                  single click.
                </p>
              </div>
            </AnimateFromLeft>
          </motion.div>


          {/* Card 2 */}
          <motion.div
            className="h-screen flex flex-col justify-center gap-4 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimateFromLeft>
              <div className="flex flex-col w-full gap-12">
                <div className="border border-[#292929] flex flex-col gap-4 p-6 rounded-xl w-lg">
                  <p className="font-extrabold text-[20px] leading-6 text-[#C0FF73]">
                    Step 2: Execute Signals Instantly
                  </p>
                  <p className="font-normal text-[18px] leading-7 text-[#FFFFFF99]/[0.6]">
                    Join the community of like-minded people.
                  </p>
                </div>
              </div>
            </AnimateFromLeft>
          </motion.div>


          {/* Card 3 */}
          <motion.div
            className="h-screen flex flex-col justify-center gap-4 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimateFromLeft>
              <div className="flex flex-col w-full gap-12">
                <div className="border border-[#292929] flex flex-col gap-4 p-6 rounded-xl w-lg">
                  <p className="font-extrabold text-[20px] leading-6 text-[#C0FF73]">
                    Step 3: Sit Back & Relax!
                  </p>
                  <p className="font-normal text-[18px] leading-7 text-[#FFFFFF99]/[0.6]">
                    Enjoy the benefits of automated trading with no stress.
                  </p>
                </div>
              </div>
            </AnimateFromLeft>
          </motion.div>
        </div>


        {/* Right Section with Fixed Image */}
        <div className="w-1/2 sticky top-10 h-screen flex justify-center items-center">
          <AnimateFromRight>
            <motion.img
              className="object-cover max-h-[80%] rounded-lg"
              src={iphone15}
              alt="iphone15"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimateFromRight>


          {/* Ellipse in Right Section - Positioned Right-Middle */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50">
            <img src={workelipse} alt="Work Ellipse" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Works;
