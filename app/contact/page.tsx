"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import gsap from "gsap";

export default function ContactPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for the content
      gsap.from(".anim-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="w-full flex flex-col items-center overflow-x-hidden bg-[#252525] min-h-screen font-cal-sans">
      <Navbar />

      {/* --- Simple Hero --- */}
      <div className="w-full h-[40vh] flex flex-col items-center justify-center mt-20 relative">
         <h1 className="anim-item text-5xl lg:text-8xl text-white uppercase z-10 text-center">
            Get In <span className="text-transparent [-webkit-text-stroke:1px_#8CFF12]">Touch</span>
         </h1>
         <p className="anim-item text-gray-400 mt-4 text-center max-w-lg px-4 font-sans font-light">
            Have a question, a project, or just want to say hello? We’d love to hear from you.
         </p>
      </div>

      <div className="w-full max-w-7xl px-6 pb-24 flex flex-col lg:flex-row gap-12">
        
        {/* --- Left Column: Contact Info --- */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="anim-item w-full border-t border-[#8CFF12] pt-6">
                <h2 className="text-3xl text-white uppercase mb-6 flex items-center gap-2">
                    <LiaStarOfLifeSolid className="text-[#8CFF12]" /> Contact Info
                </h2>
                
                <div className="flex flex-col gap-8">
                    <InfoItem 
                        icon={<MapPin size={20}/>} 
                        label="Visit Us" 
                        text={<>123 Rue de la Kasbah <br/>Ouarzazate, 47900 Morocco</>} 
                    />
                    <InfoItem 
                        icon={<Mail size={20}/>} 
                        label="Email Us" 
                        text="sellaura@info.com" 
                    />
                    <InfoItem 
                        icon={<Phone size={20}/>} 
                        label="Call Us" 
                        text="+212 592162661" 
                    />
                </div>
            </div>

          
        </div>

        {/* --- Right Column: Form --- */}
        <div className="anim-item w-full lg:w-2/3 bg-[#181818] p-8 lg:p-12 rounded-xl border border-white/5 relative shadow-xl">
            {/* Background Decoration */}
            <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                <img src="/S_Icon.png" className="w-32 h-32 object-contain" alt="" />
            </div>

            <h2 className="text-3xl text-white uppercase mb-8">Send a Message</h2>

            <form className="flex flex-col gap-6 font-sans">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FormInput label="Full Name" placeholder="John Doe" type="text" />
                    <FormInput label="Email Address" placeholder="john@example.com" type="email" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Subject</label>
                    <select className="w-full bg-[#252525] border border-gray-700 p-4 text-white focus:outline-none focus:border-[#8CFF12] transition-colors rounded-lg appearance-none cursor-pointer hover:border-gray-500">
                        <option>General Inquiry</option>
                        <option>Support</option>
                        <option>Partnership</option>
                        <option>Report an Issue</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Message</label>
                    <textarea 
                        rows={6}
                        placeholder="How can we help you?"
                        className="w-full bg-[#252525] border border-gray-700 p-4 text-white focus:outline-none focus:border-[#8CFF12] transition-colors rounded-lg placeholder:text-gray-600 resize-none hover:border-gray-500"
                    ></textarea>
                </div>

                <button 
                    type="button" 
                    className="w-fit mt-4 px-8 py-4 bg-[#8CFF12] hover:bg-white hover:text-black text-black font-bold uppercase tracking-wide transition-all duration-300 flex items-center gap-2 rounded-sm"
                >
                    Send Message <Send size={18} />
                </button>
            </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Helper Components for Cleaner Code
const InfoItem = ({ icon, label, text }: { icon: any, label: string, text: React.ReactNode }) => (
    <div className="group">
        <h3 className="text-gray-500 text-xs uppercase mb-1 tracking-widest">{label}</h3>
        <div className="flex items-start gap-3 text-white text-xl group-hover:text-[#8CFF12] transition-colors duration-300">
            <div className="mt-1 shrink-0 text-[#8CFF12] group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <p className="leading-snug">{text}</p>
        </div>
    </div>
);

const FormInput = ({ label, placeholder, type }: { label: string, placeholder: string, type: string }) => (
    <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">{label}</label>
        <input 
            type={type} 
            placeholder={placeholder}
            className="w-full bg-[#252525] border border-gray-700 p-4 text-white focus:outline-none focus:border-[#8CFF12] transition-colors rounded-lg placeholder:text-gray-600 hover:border-gray-500"
        />
    </div>
);