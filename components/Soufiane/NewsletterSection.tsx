"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 px-4 md:px-20 lg:px-36">
      {/* Container with soft blue tint and high border radius */}
      <div className="w-full bg-primary/10 rounded-[2.5rem] px-12 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text Content */}
          <div className="text-left">
            <h3 className="text-3xl font-bold text-[#1a1d23] mb-4">
              Stay in the loop
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Get the latest products and creator tips directly in your
              <br className="hidden md:block" /> inbox.
            </p>
          </div>

          {/* Form Content - Styled to match the unified input look */}
          <div className="w-full max-w-md relative flex items-center ">
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full pl-6 pr-32 py-5 rounded-full bg-white border-none text-foreground placeholder:text-muted-foreground/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              />
              <Button 
                className="absolute right-2 top-3 bg-[#1a1d23] text-white hover:bg-[#1a1d23]/90 px-8 rounded-full font-semibold transition-all"
              >
                Subscribe
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;