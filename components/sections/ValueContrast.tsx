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
        className="self-stretch p-4 md:p-[30px] overflow-visible flex flex-col lg:flex-row justify-center items-center lg:items-start relative gap-6 lg:gap-0"
        stagger={0.2}
      >
        {/* Traditional card */}
        <StaggerItem variant="fadeLeft" className="w-full max-w-[600px]">
          <div className="w-full min-h-[280px] p-6 md:p-[30px] bg-white overflow-hidden flex flex-col justify-start items-center gap-[5px] rounded-t-2xl lg:rounded-t-none lg:rounded-l-none">
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
        <StaggerItem variant="fadeRight" className="w-full max-w-[600px]">
          <div className="w-full min-h-[280px] p-6 md:p-[30px] bg-[#001407] overflow-hidden flex flex-col justify-start items-center gap-[5px] rounded-b-2xl lg:rounded-b-none lg:rounded-r-none">
            <div className="text-center">
              <span className="text-white text-[24px] md:text-[32px] font-medium font-[family-name:var(--font-roboto)] leading-[48px]">
                Aisha AI Assistant<br />
              </span>
              <span className="text-[#D2FF00] text-[28px] md:text-[36px] font-bold font-[family-name:var(--font-roboto)] leading-[48px]">
                {" "}KES 500 /
              </span>
              <span className="text-[#D2FF00] text-[18px] md:text-[24px] font-medium font-[family-name:var(--font-roboto)] leading-[48px]">
                {" "}month<br />
              </span>
              <span className="text-white text-[16px] md:text-[20px] font-normal font-[family-name:var(--font-roboto)] leading-[48px]">
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
          variant="popUp"
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
