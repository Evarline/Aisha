import React from "react";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="w-full py-24 px-4 md:px-8 bg-white border-t border-[rgba(4,52,14,0.1)] flex flex-col justify-center items-center gap-8">
      {/* Header Content */}
      <div className="flex flex-col items-center gap-4 w-full text-center px-4">
        <h2 className="text-[32px] md:text-4xl text-[#001407] font-bold font-['Inter'] whitespace-nowrap">
          Ready to Transform Your Client Communication?
        </h2>
        <p className="text-[16px] md:text-lg text-[#001407] font-normal font-['Inter'] mt-2 whitespace-nowrap">
          Join hundreds of solo creators and micro-business owners who are saving time and growing their businesses with Aisha.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-[70px] px-[10px] py-[5px] mt-4 w-full">
        {/* See plans button */}
        <button className="w-full sm:w-[286px] h-[60px] bg-[#001407] rounded-[24px] flex justify-center items-center hover:bg-opacity-90 transition-colors">
          <span className="text-[#D2FF00] text-[24px] font-medium font-['Roboto']">
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
          <span className="text-[#001407] text-[24px] font-medium font-['Roboto']">
            View dashboard
          </span>
        </button>
      </div>
    </section>
  );
}
