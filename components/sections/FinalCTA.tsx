"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="w-full py-24 px-6 md:px-10 lg:px-16 bg-white border-t border-[rgba(4,52,14,0.1)] flex flex-col justify-center items-center gap-8">
      {/* Header Content */}
      <ScrollReveal variant="fadeUp">
      <div className="flex flex-col items-center gap-4 w-full text-center px-4">
        <h2 className="text-[24px] sm:text-[32px] md:text-4xl text-[#001407] font-bold font-['Inter']">
          Ready to Transform Your Client Communication?
        </h2>
        <p className="text-[14px] md:text-lg text-[#001407] font-normal font-['Inter'] mt-2 max-w-[700px]">
          Join hundreds of solo creators and micro-business owners who are saving time and growing their businesses with Aisha.
        </p>
      </div>
      </ScrollReveal>

      {/* Buttons */}
      <ScrollReveal variant="fadeUp" delay={0.2}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-[70px] px-6 md:px-10 py-[5px] mt-4 w-full max-w-4xl">
        {/* See plans button */}
        <button className="w-full sm:w-[286px] h-[60px] bg-[#001407] rounded-[24px] flex justify-center items-center hover:bg-opacity-90 transition-colors">
          <span className="text-[#D2FF00] text-[20px] md:text-[24px] font-medium font-['Roboto']">
            See plans
          </span>
        </button>

        {/* View dashboard button */}
        <button className="w-full sm:w-[286px] h-[60px] bg-transparent border-[3px] border-[#001407] rounded-[24px] flex justify-center items-center gap-3 hover:bg-gray-50 transition-colors">
          <div className="w-6 h-6 relative flex justify-center items-center">
            <Image 
              src="/Icons/Clock.svg" 
              alt="Clock Icon" 
              width={24} 
              height={24} 
            />
          </div>
          <span className="text-[#001407] text-[20px] md:text-[24px] font-medium font-['Roboto']">
            View dashboard
          </span>
        </button>
      </div>
      </ScrollReveal>
    </section>
  );
}
