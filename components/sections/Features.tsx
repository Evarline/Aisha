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
      "Never miss a customer inquiry, even when you&apos;re sleeping or taking personal time",
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
        stagger={0.1}
      >
        {features.map((feature) => (
          <StaggerItem key={feature.title} variant="zoomIn">
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
    <div className="w-full h-auto min-h-[200px] md:min-h-[235px] px-6 md:px-[30px] py-12 md:py-[72px] bg-[#001407] shadow-[0px_4px_0.5px_1px_white_inset] overflow-hidden rounded-[30px] outline-2 outline-white -outline-offset-2 flex flex-col justify-center items-start gap-5 md:gap-[21px] hover:scale-[1.02] transition-transform duration-300">
      {/* Icon Box */}
      <div className="w-10 h-10 relative bg-[#D2FF00] overflow-hidden rounded-[10px] flex items-center justify-center shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-left text-white text-[20px] md:text-[24px] font-semibold font-[family-name:var(--font-roboto)]">
        {title}
      </h3>

      {/* Description */}
      <p
        className="self-stretch text-white text-[14px] md:text-[16px] font-semibold font-[family-name:var(--font-roboto)] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
