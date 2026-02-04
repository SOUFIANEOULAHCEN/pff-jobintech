import { ArrowRightCircle, CircleArrowOutUpRight } from "lucide-react";
import React from "react";
import { LiaStarOfLifeSolid } from "react-icons/lia";
function WhatWeDo() {
  const Cards = [
    {
      title: "PRODUCT STRATEGY & LAUNCH.",
      description:
        "From idea to launch, we help you define, package, and position your digital products for maximum impact and sales.",
      img: "./Card1.png",
    },
    {
      title: "PLATFORM & STORE SETUP.",
      description:
        "Beautiful, optimized storefronts that showcase your digital products downloads, courses, templates, and more seamlessly.",
      img: "./Card2.png",
    },
    {
      title: "MARKETING & AUDIENCE GROWTH.",
      description:
        "Grow your audience and boost sales with targeted campaigns, email marketing, and conversion-focused strategies.",
      img: "./Card3.png",
    },
  ];

  return (
    <div className="w-full h-[250vh] lg:h-[120vh] relative bottom-12 bg-[#252525] flex items-center justify-center text-white font-cal-sans">
      <div className="w-full max-w-350 h-[90%] flex flex-col justify-center p-3 gap-15">
        <div className="w-full flex">
          <div className="lg:w-[30%] h-full lg:flex hidden justify-start gap-2">
            <LiaStarOfLifeSolid className="text-[#8CFF12]" size={45} />
            <h1 className="uppercase text-xl mt-2">What We Do</h1>
          </div>
          <div className="w-full h-full flex items-center">
            <h1 className="text-2xl lg:text-5xl font-bold">
              YOUR GATEWAY TO CREATING, SELLING, AND GROWING DIGITAL PRODUCTS.
            </h1>
          </div>
          <div className="lg:w-[20%] hidden h-full lg:flex items-end justify-end">
            <button className="uppercase w-fit border-2 py-3 px-4 border-[#8CFF12] cursor-pointer text-white flex items-center gap-2 font-bold">
              All Service
              <ArrowRightCircle />
            </button>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-3">
          {Cards.map((card, idx) =>
            idx !== 1 ? (
              <div
                key={idx}
                className="w-full relative flex flex-col bg-[#181818] p-6"
              >
                <div className="w-full flex gap-3 border-b py-3 border-border">
                  <h1 className="w-[80%] text-3xl font-bold">{card.title}</h1>
                  <div className="w-18 h-18 bg-[#8CFF12] rounded-full flex items-center justify-center">
                    <CircleArrowOutUpRight size={30} className="text-black" />
                  </div>
                </div>
                <div className="w-full flex flex-col pt-4 gap-4">
                  <p className="font-thin leading-7">{card.description}</p>
                  <div className="w-full h-88">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={idx}
                className="w-full relative flex flex-col bg-blue-600 p-6"
              >
                <div className="w-full flex flex-col pt-6 gap-4">
                  <div className="w-full h-88">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-3 border-b py-3 border-border">
                  <h1 className="w-[80%] text-3xl font-bold">{card.title}</h1>
                  <div className="w-18 h-18 bg-[#8CFF12] rounded-full flex items-center justify-center">
                    <CircleArrowOutUpRight size={30} className="text-black" />
                  </div>
                </div>
                <p className="font-thin leading-7 mt-3">{card.description}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
