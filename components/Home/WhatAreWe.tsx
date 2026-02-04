import React from "react";

function WhatAreWe() {
  return (
    <div className="bg-[#252525] w-full h-[70vh] flex items-center justify-center flex-col font-cal-sans">
      <h1 className="w-[80%] text-2xl lg:text-6xl text-white text-center relative lg:leading-20">
        <span className="uppercase text-transparent leading-[0.9] text-center select-none px-3 rounded-xl rotate-x-10 [-webkit-text-stroke:2px_#8CFF12]">
          &ldquo;We are the platform,
        </span>{" "}
        for creators, innovators, and storytellers. We empower you to launch,{" "}
        <span className="mx-28"></span>{" "}
        <img
          className="w-53 h-8 lg:w-56 lg:h-14 object-cover rounded-full absolute right-0 bottom-48 lg:right-55 lg:top-24"
          src="https://cdn.shopify.com/s/files/1/0070/7032/files/shopify_digital_products.jpg?v=1585847416"
          alt=""
        />{" "}
        market, and sell your digital products. <span className="uppercase text-transparent leading-[0.9] text-center select-none [-webkit-text-stroke:2px_theme(colors.white)]"> From ebooks to courses,{" "}
        we provide the seamless tools </span>  and global audience to turn
        your <span>passion</span> into a <span>thriving business.</span>
      </h1>
      <div className="flex gap-2 items-center justify-center">
            
      </div>
    </div>
  );
}

export default WhatAreWe;
