"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export default function ValueContrast() {
  return (
    <div className="w-full px-5 md:px-10 py-16 md:py-[88px] relative overflow-hidden flex flex-col justify-start items-center gap-5">
      <ScrollReveal variant="fadeUp">
        <div className="overflow-hidden flex flex-col justify-start items-center gap-6 md:gap-8 text-center">
          <h2 className="text-[#001407] text-[24px] md:text-[32px] font-bold font-[family-name:var(--font-inter)]">
            Unlock Incredible Value for Creators
          </h2>
          <p className="text-[rgba(0,20,7,0.70)] text-[16px] md:text-[20px] font-medium font-[family-name:var(--font-roboto)]">
            See how Aisha stacks up against a traditional secretary
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer
        className="self-stretch p-4 md:p-[30px] overflow-visible flex flex-col lg:flex-row justify-center items-center lg:items-stretch relative gap-6 lg:gap-8"
        staggerChildren={0.2}
      >
        {/* Traditional card */}
        <StaggerItem variant="fadeLeft" className="w-full max-w-[600px] flex">
          <div className="w-full min-h-[280px] p-6 md:p-[30px] bg-white overflow-hidden flex flex-col justify-start items-center gap-[5px] rounded-[24px] shadow-sm">
            <div className="w-full md:w-[318px] text-center">
              <span className="text-[#001407] text-[24px] md:text-[32px] font-medium font-[family-name:var(--font-roboto)] leading-[45px]">
                Traditional secretary<br />
              </span>
              <span className="text-[#001407] text-[24px] md:text-[32px] font-normal font-[family-name:var(--font-roboto)] leading-[48px]">
                KES 10,000+ /
              </span>
              <span className="text-[#001407] text-[16px] md:text-[20px] font-medium font-[family-name:var(--font-roboto)] leading-[48px]">
                {" "}month<br />
              </span>
              <span className="text-[#001407] text-[16px] md:text-[20px] font-normal font-[family-name:var(--font-roboto)] leading-[48px]">
                8-hour work day limitations<br />
                Training required<br />
                Additional benefits costs<br />
                Limited scalability
              </span>
            </div>
          </div>
        </StaggerItem>

        {/* Aisha card */}
        <StaggerItem variant="fadeRight" className="w-full max-w-[600px] flex">
          <div className="relative group w-full min-h-[280px] p-6 md:p-[30px] bg-[#001407] overflow-hidden flex flex-col justify-center items-center gap-[5px] rounded-2xl shadow-lg shadow-[#D2FF00]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#D2FF00]/30">
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Soft background glow for the Aisha card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2FF00] opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D2FF00] opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-all duration-300\" />

            <div className="text-center relative z-10 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white text-[24px] md:text-[32px] font-medium font-[family-name:var(--font-roboto)] leading-[48px]">
                Aisha AI Assistant<br />
              </span>
              <span className="text-[#D2FF00] text-[28px] md:text-[36px] font-bold font-[family-name:var(--font-roboto)] leading-[48px]">
                {" "}KES 500 /
              </span>
              <span className="text-[#D2FF00] text-[18px] md:text-[24px] font-medium font-[family-name:var(--font-roboto)] leading-[48px]">
                {" "}month<br />
              </span>
              <span className="text-gray-200 text-[16px] md:text-[20px] font-normal font-[family-name:var(--font-roboto)] leading-[48px] group-hover:text-gray-100 transition-colors duration-300">
                24/7 availability<br />
                No training needed<br />
                instant setup<br />
                90% cost saving
              </span>
            </div>
          </div>
        </StaggerItem>

        {/* VS badge */}
        <ScrollReveal
          variant="revealScale"
          delay={0.5}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <img
            src="/Images/VS_Wrapper(1).svg"
            alt="VS"
            width={79}
            height={78}
          />
        </ScrollReveal>
      </StaggerContainer>
    </div>
  );
}
