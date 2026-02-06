"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import AnimatedBar from "@/components/Home/AnimatedBar";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { ArrowRightCircle, Target, Users, Zap } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Animation
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
      });

      // Story Section Animation
      gsap.from(".story-section", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center overflow-x-hidden bg-[#252525] min-h-screen font-cal-sans text-white">
      <Navbar />

      {/* --- Hero Section --- */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background mimic from Home */}
        <div
          className="w-full h-full absolute opacity-20"
          style={{ backgroundImage: "url('/herobg.png')", backgroundSize: "cover" }}
        ></div>
        <div className="w-full h-full absolute bg-black/40"></div>

        <h1 className="hero-text z-10 text-5xl lg:text-9xl font-extrabold uppercase text-[#8CFF12] leading-[0.9] text-center select-none px-4">
          We Are <br /> Sellaura
        </h1>
        {/* Stroke Text Effect */}
        <h1
          className="hero-text absolute z-0 text-5xl lg:text-9xl uppercase text-transparent leading-[0.9] text-center select-none px-4 top-[52%] lg:top-[51%]
          [-webkit-text-stroke:1px_#8CFF12] opacity-30"
        >
          We Are <br /> Sellaura
        </h1>
        
        <p className="hero-text z-10 mt-8 text-center max-w-2xl px-6 text-sm lg:text-lg text-gray-300 font-sans font-light leading-relaxed">
          Empowering the next generation of digital creators to build, scale, and thrive in the modern economy.
        </p>
      </div>

      <AnimatedBar />

      {/* --- Our Story (Styled like WhatAreWe) --- */}
      <div className="story-section w-full py-20 lg:py-32 flex items-center justify-center flex-col gap-10">
        <div className="w-65 h-12 border-2 border-[#8CFF12] rounded-full flex p-1">
          <h1 className="w-[90%] flex items-center justify-center bg-gray-300/30 text-white rounded-full">
            Our Story
          </h1>
          <h2 className="w-[20%] h-full flex items-center justify-center text-[#8CFF12]">
            01
          </h2>
        </div>

        <h1 className="w-[90%] lg:w-[70%] text-2xl lg:text-5xl text-center relative leading-normal lg:leading-tight">
          <span className="uppercase text-transparent leading-[0.9] text-center select-none [-webkit-text-stroke:1px_#8CFF12]">
            Sellaura was born
          </span>{" "}
          from a simple idea: digital ownership should be effortless. We saw creators struggling with complex tools and fragmented platforms.
          <br /><br />
          We built an ecosystem where <span className="text-[#8CFF12]">innovation meets simplicity</span>. 
          Today, we are more than a marketplace; we are a community of dreamers, designers, and developers turning pixels into profit.
        </h1>
      </div>

      {/* --- Mission & Values (Card Grid) --- */}
      <div className="w-full py-10 flex items-center justify-center bg-[#252525]">
        <div className="w-full max-w-7xl h-full flex flex-col justify-center p-6 gap-10">
            <div className="w-full flex items-center justify-between border-b border-gray-700 pb-6">
                 <div className="flex gap-2 items-center">
                    <LiaStarOfLifeSolid className="text-[#8CFF12]" size={35} />
                    <h1 className="uppercase text-3xl lg:text-5xl font-bold">Our Core Values</h1>
                 </div>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Value Card 1 */}
                <ValueCard 
                    icon={<Target size={30} />} 
                    title="Creator First" 
                    desc="We prioritize the needs of our creators above all else. Your success is our success, and we build tools to make your journey smoother." 
                />
                
                {/* Value Card 2 */}
                <ValueCard 
                    icon={<Zap size={30} />} 
                    title="Radical Innovation" 
                    desc="We don't settle for the status quo. We are constantly pushing boundaries to bring high-fidelity tech and design to the masses." 
                />

                {/* Value Card 3 */}
                <ValueCard 
                    icon={<Users size={30} />} 
                    title="Community Led" 
                    desc="Sellaura isn't just software; it's a network. We foster connection, collaboration, and shared growth among our users." 
                />
            </div>
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div className="w-full py-20 px-4 flex items-center justify-center">
        <div className="w-full max-w-7xl h-[400px] rounded-xl flex items-center relative overflow-hidden group border border-[#8CFF12]/30">
            <div
              className="w-full h-full absolute rounded-xl scale-100 group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: 'url("/herobg.png")', backgroundSize: "cover", backgroundPosition: "center" }}
            ></div>
            <div className="w-full h-full bg-black/70 absolute rounded-xl" />
            
            <div className="w-full flex lg:flex-row flex-col px-10 z-5 text-white h-full relative items-center justify-between">
              <div className="flex flex-col gap-4 max-w-2xl">
                <h1 className="text-xl font-bold text-[#8CFF12] uppercase tracking-widest">
                  Join the revolution
                </h1>
                <h3 className="text-4xl lg:text-6xl uppercase leading-none">Ready to Start?</h3>
                <p className="text-gray-300">Join thousands of creators who are already selling their digital products on Sellaura.</p>
              </div>
              
              <Link
                href={"/signup"}
                className="mt-8 lg:mt-0 px-8 py-4 bg-[#8CFF12] text-black font-bold text-xl hover:bg-white transition-colors duration-300 flex items-center gap-3"
              >
                Become a Creator <ArrowRightCircle size={25} />
              </Link>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Helper Component for consistency
const ValueCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="w-full relative flex flex-col bg-[#181818] p-8 border border-white/5 hover:border-[#8CFF12] transition-colors duration-300 group">
        <div className="w-16 h-16 bg-[#252525] rounded-full flex items-center justify-center mb-6 border border-gray-700 group-hover:bg-[#8CFF12] transition-colors duration-300">
            <div className="text-white group-hover:text-black transition-colors duration-300">
                {icon}
            </div>
        </div>
        <h1 className="text-2xl font-bold mb-4 uppercase text-white">{title}</h1>
        <p className="font-thin leading-7 text-gray-400">
            {desc}
        </p>
    </div>
);