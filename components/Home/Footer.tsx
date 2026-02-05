"use client";
import gsap from "gsap/all";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const sliderRef = useRef(null);
  const date = new Date();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: "-50%",
      duration: 50,
      ease: "none",
      repeat: -1,
    });
  }, []);
  return !isMobile ? (
    <footer className="w-full h-screen bg-[#252525] font-cal-sans flex flex-col">
      <div className="w-full h-[50%] flex p-10">
        <div className="w-[25%] h-full flex flex-col gap-3">
          <div className="w-full h-[35%]">
            <img
              src="/landing_logo.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <h1 className="text-white font-bold uppercase">contact us</h1>
            <p className="text-gray-400/40 text-xl">
              123 Rue de la Kasbah Ouarzazate <br /> 47900 Morocco
            </p>
          </div>
          <div className="flex flex-col w-full gap-2">
            <h1 className="text-white font-bold uppercase">contact us</h1>
            <p className="text-gray-400/40 font-thin text-xl">+212 592162661</p>
          </div>
        </div>
        <div className="w-[25%] h-full flex flex-col gap-3 justify-center">
          <div className="w-full flex items-center">
            <h1 className="text-4xl text-[#8CFF12] uppercase">Pages</h1>
          </div>
          {[
            "Home",
            "About us",
            "Our Service",
            "Portfolio",
            "FAQs",
            "Contact us",
          ].map((label, idx) => (
            <Link
              key={idx}
              href={`#`}
              className="text-lg text-neutral-600 hover:text-[#8CFF12]"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="w-[25%] h-full flex flex-col gap-3 justify-center">
          <div className="w-full flex items-center">
            <h1 className="text-4xl text-[#8CFF12] uppercase">Contact with us</h1>
          </div>
          {[
            { label: "Facebook", icon: FaFacebook },
            { label: "Github", icon: FaGithub },
            { label: "Linkedin", icon: FaLinkedin },
            { label: "Behance", icon: FaBehance },
            { label: "Dribble", icon: FaDribbble },
            { label: "X Twitter", icon: FaXTwitter },
          ].map((label, idx) => (
            <Link
              key={idx}
              href={`#`}
              className="text-neutral-600 hover:text-[#8CFF12] flex gap-2 items-center text-xl"
            >
              <label.icon className="text-[#8CFF12]" />
              {label.label}
            </Link>
          ))}
        </div>
        <div className="w-[25%] h-full flex flex-col gap-3 justify-center">
          <div className="w-full flex items-start justify-start gap-2">
            <h1 className="text-5xl text-white">+212 592162661</h1>
            <h3 className="text-xl text-neutral-500 w-[10%]">phone number</h3>
          </div>
          <div className="w-full flex items-start justify-start gap-2">
            <h1 className="text-5xl text-white">sellaura@info.com</h1>
            <h3 className="text-xl text-neutral-500 w-[10%]">Email Adresse</h3>
          </div>
          <p className="text-neutral-400 text-sm mt-4">
            Sellaura is your trusted platform for high-quality digital products.
            We curate and deliver innovative digital solutions designed to
            enhance your business and unlock new possibilities.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden h-[40%]">
        <div className="w-max flex whitespace-nowrap" ref={sliderRef}>
          <p
            className="mx-8 text-[330px]  uppercase text-transparent leading-[0.9] text-center select-none
          [-webkit-text-stroke:4px_#8CFF12]"
          >
            Weekly picks from the world’s best creators
          </p>
          <p
            className="mx-8 text-[330px]  uppercase text-transparent leading-[0.9] text-center select-none
          [-webkit-text-stroke:4px_#8CFF12]"
          >
            Weekly picks from the world’s best creators
          </p>
        </div>
      </div>

      <div className="w-full h-[10%] px-10 flex justify-between relative items-center">
        <div className="w-full border-t border-neutral-600 absolute top-0 left-0" />
        <h2 className="text-lg text-[#8CFF12] font-vend-sans font-thin">
          sellaura - @{date.getFullYear() - 1} - {date.getFullYear()} All rights
          reserved
        </h2>
        <div className="text-lg text-[#8CFF12] flex items-center justify-center gap-3">
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Terms of service</Link>
        </div>
      </div>
    </footer>
  ) : (
    <MobileFooter />
  );
}

export default Footer;

const MobileFooter = () => {
  const date = new Date();
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: "-50%",
      duration: 50,
      ease: "none",
      repeat: -1,
    });
  }, []);
  return (
    <footer className="bg-[#252525] pt-15 w-full flex flex-col font-cal-sans">
      <div className="w-full py-4 flex items-center justify-center h-[15vh]">
        <img
          src="./landing_logo.png"
          className="w-full object-cover h-full"
          alt=""
        />
      </div>
      <div className="w-full flex items-center justify-center p-4 flex-col gap-3">
        <h1 className="text-3xl uppercase text-white">Contact us</h1>
        <p className="text-neutral-400 text-sm w-[60%] text-center">
          123 Rue de la Kasbah Ouarzazate 47900 Morocco
        </p>
      </div>
      <div className="w-full flex items-center justify-center p-4 flex-col gap-3">
        <h1 className="text-3xl uppercase text-white">Contact us</h1>
        <p className="text-neutral-400 text-sm w-[60%] text-center">
          +212 592162661
        </p>
      </div>
      <div className="w-full flex items-center justify-center p-4 flex-col gap-3">
        <h1 className="text-3xl uppercase text-[#8CFF12]">Pages</h1>
        {[
          "Home",
          "About us",
          "Our Service",
          "Portfolio",
          "FAQs",
          "Contact us",
        ].map((label, idx) => (
          <Link
            key={idx}
            href={`#`}
            className="text-sm text-neutral-500 hover:text-[#8CFF12]"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="w-full flex items-center justify-center p-4 flex-col gap-3">
        <h1 className="text-3xl uppercase text-[#8CFF12] tracking-tight">
          Contact with us
        </h1>
        <div className="w-[35%] flex flex-col justify-start gap-1">
          {[
            { label: "Facebook", icon: FaFacebook },
            { label: "Github", icon: FaGithub },
            { label: "Linkedin", icon: FaLinkedin },
            { label: "Behance", icon: FaBehance },
            { label: "Dribble", icon: FaDribbble },
            { label: "X Twitter", icon: FaXTwitter },
          ].map((label, idx) => (
            <Link
              key={idx}
              href={`#`}
              className="text-neutral-500 hover:text-[#8CFF12] flex gap-3 items-center text-xl"
            >
              <label.icon className="text-[#8CFF12]" />
              {label.label}
            </Link>
          ))}
        </div>
        <div className="w-full h-full flex flex-col gap-3 justify-center items-center py-3">
          <div className="w-full flex items-start justify-center gap-2">
            <h1 className="text-4xl text-white">+212 592162661</h1>
          </div>
          <div className="w-full flex items-start justify-center gap-2">
            <h1 className="text-3xl text-white">sellaura@info.com</h1>
          </div>
          <p className="text-neutral-400 text-sm mt-4 w-[90%] text-center">
            Sellaura is your trusted platform for high-quality digital products.
            We curate and deliver innovative digital solutions designed to
            enhance your business and unlock new possibilities.
          </p>
        </div>
        <div className="w-full overflow-hidden h-[40%]">
          <div className="w-max flex whitespace-nowrap" ref={sliderRef}>
            <p
              className="mx-8 text-[330px]  uppercase text-transparent leading-[0.9] text-center select-none
          [-webkit-text-stroke:4px_#8CFF12]"
            >
              Weekly picks from the world’s best creators
            </p>
            <p
              className="mx-8 text-[330px]  uppercase text-transparent leading-[0.9] text-center select-none
          [-webkit-text-stroke:4px_#8CFF12]"
            >
              Weekly picks from the world’s best creators
            </p>
          </div>
        </div>
        <div className="w-full h-[8vh] px-10 flex flex-col justify-between relative items-center border-t pt-2">
          <h2 className="text-sm text-neutral-400">
            sellaura - @{date.getFullYear() - 1} - {date.getFullYear()} All
            rights reserved
          </h2>
          <div className="text-sm text-neutral-400 flex items-center justify-center gap-3">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
