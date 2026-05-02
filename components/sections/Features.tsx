"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: "/Icons/ChatCircleDots.svg",
    title: "WhatsApp Automation",
    description:
      "Auto-respond to inquiries, calculate totals, and send payment links directly through WhatsApp",
  },
  {
    icon: "/Icons/Shield.svg",
    title: "Ghosting Prevention",
    description:
      "Detect when client go silent and send gentle follow-ups to recover lost sales",
  },
  {
    icon: "/Icons/CashRegister.svg",
    title: "Transactional Support",
    description:
      "Automated order calculations, payment processing, and shipping coordination - so you can focus on your business, not paperwork",
  },
  {
    icon: "/Icons/Heart.svg",
    title: "Local personality",
    description:
      "Warm, authentic communication with local phrases that build trust with your customers",
  },
  {
    icon: "/Icons/ChartLineUp.svg",
    title: "Smart Analytics",
    description:
      "Track conversions, response times, and customer engagement all in one dashboard",
  },
  {
    icon: "/Icons/ClockClockwise.svg",
    title: "24/7 Availability",
    description:
      "Never miss a customer inquiry, even when you're sleeping or taking personal time",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full px-5 md:px-11 py-16 md:py-[88px] bg-[#F5F5F5] overflow-hidden flex flex-col justify-start items-center gap-10 md:gap-[50px]"
    >
      {/* Header */}
      <ScrollReveal variant="fadeUp">
        <div className="max-w-[1190px] w-full overflow-hidden flex flex-col justify-start items-center gap-4 md:gap-6">
          <h2 className="text-[#001407] text-[18px] md:text-[24px] font-extrabold font-[family-name:var(--font-inter)] tracking-[2.4px] text-center">
            Aisha: Designed for creators like you, since your vision deserves precision
          </h2>
          <p className="text-[rgba(0,19,7,0.70)] text-[13px] md:text-[15px] font-medium font-[family-name:var(--font-roboto)] tracking-[3.2px] text-center">
            Experience the power of Aisha surgical features
          </p>
        </div>
      </ScrollReveal>

      {/* Cards Grid — responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
      <StaggerContainer
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-5 md:gap-y-10 max-w-[1300px] mx-auto"
        staggerChildren={0.1}
      >
        {features.map((feature) => (
          <StaggerItem key={feature.title} variant="fadeUp">
            <FeatureCard {...feature} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative group rounded-xl p-5 md:p-6 bg-[#001407] text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#D2FF00]/20 h-full flex flex-col">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Soft Background Glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#D2FF00] opacity-5 blur-2xl rounded-full group-hover:opacity-15 transition-all duration-300" />

      <div className="relative z-10 flex flex-col h-full gap-3 md:gap-4">
        {/* Icon Box */}
        <div className="w-10 h-10 relative bg-[#D2FF00] overflow-hidden rounded-lg flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg group-hover:shadow-[#D2FF00]/30 transition-all duration-300">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={icon}
            alt={title}
            width={20}
            height={20}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-left text-white text-[16px] md:text-[18px] font-semibold font-[family-name:var(--font-roboto)] leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p
          className="self-stretch text-gray-300 text-[13px] md:text-[14px] font-medium font-[family-name:var(--font-roboto)] leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
