"use client";
import React from "react";
import Navbar from "./Navbar";
import { ArrowRightCircle, Mouse } from "lucide-react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../ui/avatar";
import { useMediaQuery } from "react-responsive";
const TopSellers = [
  { avatar: "https://github.com/shadcn.png", fallback: "CN" },
  { avatar: "https://github.com/maxleiter.png", fallback: "LR" },
  { avatar: "https://github.com/evilrabbit.png", fallback: "ER" },
  { avatar: "https://github.com/evilrabbit.png", fallback: "ER" },
];
function HeroSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return !isMobile ? (
    <div className="relative w-full h-screen flex flex-col items-center overflow-hidden font-cal-sans bg-cover bg-center">
      <div
        className="w-full h-full absolute"
        style={{ backgroundImage: "url('/herobg.png')" }}
      ></div>
      <div className="w-full h-full absolute bg-black"></div>
      <Navbar className="bg-black/40 backdrop-blur-xl"/>
      <div className="relative w-full h-full flex items-center justify-center">
        <h1 className="text-primary absolute z-10 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[320px] font-extrabold uppercase leading-[1] tracking-wide text-center select-none px-4">
          Digital <br /> Products
        </h1>
        {/* <img
          src="/hero_person.png"
          alt="Hero"
          className="relative z-10 h-[99%] object-contain translate-y-3"
        /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none w-32 h-32 sm:w-64 sm:h-64 md:w-[600px] md:h-[600px] lg:w-[1000px] lg:h-[1000px] xl:w-[1200px] xl:h-[1200px]"
        >
          <source src="/videohero.webm" type="video/webm" />
        </video>

        <h1
          className="absolute z-30 text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[330px] uppercase text-transparent leading-[0.9] text-center select-none px-4
          [-webkit-text-stroke:1px_#00e400]"
        >
          Digital <br /> Products
        </h1>
        <Mouse
          size={20}
          className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 text-white animate-bounce w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10"
        />
        <div className="absolute right-4 sm:right-6 md:right-12 lg:right-18 md:rotate-12 w-64 sm:w-64 md:w-70 top-32 sm:top-40 md:top-45 flex flex-col gap-3 sm:gap-4 md:gap-5">
          <p className="text-white leading-6 sm:leading-7 md:leading-8 text-sm sm:text-base">
            Discover the future of digital commerce with our curated collection
            of premium items and exclusive offerings.
          </p>

          <button className="uppercase w-fit border-2 py-2 px-3 sm:py-3 sm:px-4 border-primary cursor-pointer text-white flex items-center gap-2 text-xs sm:text-sm md:text-base">
            discover products
            <ArrowRightCircle size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
        <div className="absolute right-4 sm:right-6 md:right-12 lg:right-18 left-4 sm:left-6 md:left-12 w-64 sm:w-64 md:w-70 top-32 sm:top-40 md:top-45 flex flex-col gap-3 sm:gap-4 md:gap-5 items-center">
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-12">
            <AvatarGroup className="grayscale">
              {TopSellers.map((seller, idx) => (
                <Avatar
                  key={idx}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                >
                  <AvatarImage
                    src={seller.avatar || "/placeholder.svg"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>{seller.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
          </div>
          <div className="border-b-2 border-primary w-[60%]" />
          <h2 className="w-[65%] uppercase text-white text-xs font-bold text-center">
            we display the Top 4 Sellers of our platform each month
          </h2>
        </div>
      </div>
    </div>
  ) : (
    <MobileHeroSection />
  );
}

export default HeroSection;

const MobileHeroSection = () => {
  return (
    <div className="w-full h-screen bg-[#252525] flex items-center justify-center relative font-cal-sans">
      <Navbar />
      <h1 className="absolute z-10 text-7xl font-extrabold uppercase text-[#8CFF12] leading-[1] tracking-wide text-center select-none px-4">
        Digital <br /> Products
      </h1>
      <video autoPlay loop muted playsInline className="pointer-events-none ">
        <source src="/videohero.webm" type="video/webm" />
      </video>
      <h1
        className="absolute z-30 text-7xl uppercase text-transparent leading-[0.9] text-center select-none px-4
          [-webkit-text-stroke:1px_#8CFF12]"
      >
        Digital <br /> Products
      </h1>
      <Mouse
        size={20}
        className="absolute bottom-30 text-white animate-bounce w-10 h-10"
      />
    </div>
  );
};
