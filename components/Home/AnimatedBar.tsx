"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaStarOfLife } from "react-icons/fa";

function AnimatedBar() {
  const barRef = useRef(null);

  const categories = [
    "Online Courses & Webinars",
    "Templates (Canva, Notion, Web)",
    "Printables (planners, worksheets)",
    "Software & Plugins",
    "Audio & Music",
    "Digital Art & Graphics",
    "Stock Media",
    "Memberships",
    "Apps",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee", {
        xPercent: -50,
        ease: "linear",
        duration: 20,
        repeat: -1,
      });
    }, barRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={barRef}
      className="relative w-full h-25 flex items-center overflow-hidden bg-primary rotate-1 bottom-6 z-20 font-cal-sans"
    >
      <div className="flex w-max marquee">
        {categories.map((cat, idx) => (
          <div className="flex items-center" key={`first-${idx}`}>
            <span className="px-8 text-4xl font-semibold uppercase whitespace-nowrap">
              {cat}
            </span>
            <FaStarOfLife size={25} />
          </div>
        ))}

        {categories.map((cat, idx) => (
          <div key={`second-${idx}`}>
            <span
              className="px-8 text-4xl font-semibold uppercase whitespace-nowrap"
            >
              {cat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedBar;
