import React, { useState, useEffect } from "react";
import logo from "../assets/png/logo.png";
import halflogo from "../assets/png/halflogo.png";
import logo1 from "../assets/svg/logo.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import { AnimateFromLeft, AnimateFromRight, AnimateFromTop } from "../common/ScrollFadeIn";

const navItems = [
  "Home",
  "Features",
  "A.I News",
  "Reviews",
  "Pricing",
  "Download",
];

const Header = () => {
  const [activeId, setActiveId] = useState("");
  const headerHeight = 50; 

  const handleScroll = () => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase()));
    sections.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          setActiveId(navItems[index].toLowerCase());
        }
      }
    });
  };

  const handleInitialLoad = () => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase()));
    sections.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          setActiveId(navItems[index].toLowerCase());
        }
      }
    });
  };

  useEffect(() => {
    handleInitialLoad(); 
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-gradient-to-b from-[#090A09] to-[#0F170F] sticky top-0 z-50">
      <nav className="mx-auto flex items-center justify-between p-5">
        <AnimateFromLeft>
          <div className="flex items-center justify-center flex-col gap-1">
            <a href="/" className="flex items-center">
              <img src={logo} alt="MyBrand Logo" className="h-7" />
            </a>
            <p className="text-white font-medium text-[14px] leading-4 md:block hidden">
              A Unit of Stockwiz Group
            </p>
          </div>
        </AnimateFromLeft>

        <AnimateFromTop>
          <div className=" justify-center items-center gap-x-4 pl-2 rounded-full border border-[#FFFFFF33]/[0.7] md:flex hidden">
            <img src={halflogo} alt="MyBrand Logo" className="" />
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`px-4 py-3 rounded-full text-white bg-transparent hover:bg-white hover:text-black transition cursor-pointer ${
                  activeId === item.toLowerCase() ? "!bg-white !text-black font-semibold" : ""
                }`}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                <span className="font-medium text-[18px] leading-6">{item}</span>
              </button>
            ))}
          </div>
        </AnimateFromTop>

        <AnimateFromRight>
          <div className="flex gap-6 items-center justify-center">
            <img src={logo1} alt="MyBrand Logo" className="md:block hidden"/>
            <img src={whatsapp} alt="WhatsApp" className="h-[24px] w-[24px] md:mt-4" />
          </div>
        </AnimateFromRight>
      </nav>
    </header>
  );
};

export default Header;
