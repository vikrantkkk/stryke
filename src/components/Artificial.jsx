import React from "react";
import { AnimateFromBottom, AnimateFromInside } from "../common/ScrollFadeIn";
import bajaj from "../assets/png/bajaj.png";
import bajaj1 from "../assets/png/bajaj1.png";
import bajaj2 from "../assets/png/bajaj2.png";
import paytm from "../assets/png/paytm.png";
import artificialelipse from "../assets/png/artificialelipse.png";
import magicpen from "../assets/svg/magicpen.svg";
import { SvgIcon } from "../utils/SvgIcons";
import Button from "../common/Button";

const Artificial = () => {
  const cards = [
    {
      description:
        "IndiaMART InterMESH shares are trading higher after Sacchitanand Uttekar of Tradebulls Securities issued a Buy call for a target price of ₹2,840 and a stop loss at ₹2,660.",
      image: bajaj,
      price: 228.46,
      change: 2.41,
      percentage: 1.07,
      date: "09 July 2024 | 02:43 PM",
      companyShort: "Indiamart",
      companyFull: "Indiamart Intermesh Limited",
    },
    {
      description:
        "JBM Auto shares are trading higher after Zee Business reported that the Indian Army will procure 113 zero-emission electric buses.",
      image: bajaj1,
      price: 312.89,
      change: -5.32,
      percentage: -1.67,
      date: "09 July 2024 | 11:15 AM",
      companyShort: "JBMA",
      companyFull: "JBM AUTO Co.",
    },
    {
      description:
        "One 97 Communications shares are trading lower. According to Moneycontrol, the Labour commissioner has summoned Paytm management over alleged layoffs.",
      image: paytm,
      price: 189.75,
      change: 3.25,
      percentage: 1.72,
      date: "08 July 2024 | 04:10 PM",
      companyShort: "PAYTM",
      companyFull: "One 97 Communications Limited",
    },
    {
      description:
        "Ashok Leyland shares are trading higher after Zee Business reported that the Indian Army will procure 113 zero-emission electric buses.",
      image: bajaj2,
      price: 412.55,
      change: -7.45,
      percentage: -1.85,
      date: "07 July 2024 | 12:00 PM",
      companyShort: "ASHOKLEY",
      companyFull: "Ashok Leyland Ltd.",
    },
    {
      description:
        "IndiaMART InterMESH shares are trading higher after Sacchitanand Uttekar of Tradebulls Securities issued a Buy call for a target price of ₹2,840 and a stop loss at ₹2,660.",
      image: paytm,
      price: 259.99,
      change: 1.89,
      percentage: 0.73,
      date: "06 July 2024 | 09:45 AM",
      companyShort: "INDIAMART",
      companyFull: "Indiamart Intermesh Limited",
    },
  ];

  return (
    <div className="bg-[#070A07] flex justify-center items-center flex-col gap-16 px-10 pt-14 pb-60 w-full overflow-hidden relative">
      <AnimateFromBottom>
        <h2 className="font-extrabold text-[50px] text-white text-center leading-[1.2]">
          Leverage The Power Of{" "}
          <span className="text-[#C0FF73]">Artificial Intelligence</span>
        </h2>
      </AnimateFromBottom>
      <AnimateFromInside>
        <p className="text-[#FFFFFF99]/[0.6] font-normal text-[18px] leading-7 text-center">
          Experience AI-powered insights and automation at its finest.
        </p>
      </AnimateFromInside>

      {/* Half Circle Card Layout */}
      <AnimateFromBottom>
        <div className="relative top-20 w-full flex justify-center items-end">
          {cards.map((card, index) => {
            const positions = [
              "translate-y-[90%] -translate-x-[90%] rotate-[-45deg]",
              "translate-y-[5%] -translate-x-[45%] rotate-[-15deg]",
              "translate-y-[-15%] rotate-0",
              "translate-y-[5%] translate-x-[45%] rotate-[15deg]",
              "translate-y-[90%] translate-x-[90%] rotate-[45deg]",
            ];

            const isPositive = card.change > 0;
            const arrowIcon = isPositive ? "greenArrow" : "redArrow";
            const textColor = isPositive ? "text-[#26BC0D]" : "text-[#FF0000]";

            return (
              <div
                key={index}
                className={`relative bg-gradient-to-b flex  flex-col gap-4 from-[#0E1712] to-[#040404] text-white p-3 w-72 rounded-xl transform transition-all duration-300 hover:scale-105 mx-2 ${positions[index]}
                shadow-[ -15px_28px_54.3px_0px_#00000040]
                border-gradient
              `}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex justify-center items-start gap-2">
                    <img
                      src={card.image}
                      alt={card.image}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <div>
                      <p className="font-medium text-[14px] leading-4 text-[FFFFFF]">
                        {card.companyShort}
                      </p>
                      <p className="font-normal text-[10px] leading-3 text-[FFFFFF]/[0.4]">
                        {card.companyFull}
                      </p>
                      <p className="font-normal text-[12px] leading-4 text-[FFFFFF]/[0.7]">
                        {card.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-start flex-col gap-2">
                    <p className="font-medium text-[14px] leading-4 text-[FFFFFF]">
                      ₹{card.price.toFixed(2)}
                    </p>
                    <p
                      className={`flex justify-center items-center font-medium text-[8px] leading-[10px] ${textColor}`}
                    >
                      <SvgIcon name={arrowIcon} size={20} />
                      <span>
                        ₹{card.change.toFixed(2)} ({card.percentage.toFixed(2)}
                        %)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center flex-col">
                  <p className="font-normal text-[12px] leading-4 text-white">
                    {card.description}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="flex items-center justify-center gap-2 font-medium text-[10px] leading-4 text-white">
                    <span>
                      <img
                        src={magicpen}
                        alt="AI Research"
                        className="object-cover rounded-full"
                      />
                    </span>{" "}
                    Ai Research
                  </p>
                  <button className="font-medium text-[10px] leading-4 text-white p-2 cursor-pointer rounded-full">
                    Trade Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </AnimateFromBottom>
      <div className="relative top-40">
        <AnimateFromInside>
          <Button name="Get Started" />
        </AnimateFromInside>
      </div>
      <iframe
        src={
          "https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ARELIANCE%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AHDFCBANK%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ATATAMOTORS%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ABHARTIARTL%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AZOMATO%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AICICIBANK%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ADLF%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AINFY%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AJINDALSTEL%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%2C%22utm_source%22%3A%22www.stockwiz.in%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.stockwiz.in%2F%22%7D"
        }
        style={{
          width: "100%",
          height: "50px",
          border: "none",
          overflow: "hidden",
          position: "relative",
          top: 200,
        }}
        scrolling="no"
        allowtransparency="true"
        frameBorder="0"
      ></iframe>
      <img
        className="absolute right-0 -bottom-20"
        src={artificialelipse}
        alt="artificialelipse"
      />
    </div>
  );
};

export default Artificial;
