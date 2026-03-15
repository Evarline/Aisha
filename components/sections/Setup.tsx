"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    image: "/Images/Register Business(1).png",
    imageWidth: 100,
    imageHeight: 117,
    number: "01",
    title: "Register Business",
    description:
      "Full legal registration ensures you can focus on growing your business",
  },
  {
    image: "/Images/Connect(1).png",
    imageWidth: 176,
    imageHeight: 117,
    number: "02",
    title: "Connect and customize",
    description:
      "Link your WhatsApp Business & customize Aisha\u2019s features",
  },
  {
    image: "/Images/Automate(3).png",
    imageWidth: 108,
    imageHeight: 117,
    number: "03",
    title: "Automate",
    description:
      "Let Aisha do the heavy lifting. It manages logistics while you create",
  },
  {
    image: "/Images/Focus and grow(1).png",
    imageWidth: 150,
    imageHeight: 117,
    number: "04",
    title: "Focus and grow",
    description:
      "Reclaim 10+ hours/week to focus on your craft. Scale your revenue with data-driven surgical insights.",
  },
];

export default function Setup() {
  return (
    <section className="w-full section-padding flex flex-col items-center gap-4">
      {/* Header */}
      <ScrollReveal variant="fadeUp">
        <div className="flex flex-col items-center gap-6 px-4 py-2.5 text-center">
          <h2 className="text-[#04340E] text-[28px] md:text-[36px] font-bold font-[family-name:var(--font-inter)]">
            From Setup to Scale in 4 Precise Steps
          </h2>
          <p className="text-[rgba(4,52,14,0.60)] text-[14px] md:text-[15px] font-medium font-[family-name:var(--font-roboto)] max-w-[600px]">
            See how AISHA is built, trained, and unleashed—all in a process
            that&apos;s as smart as she is
          </p>
        </div>
      </ScrollReveal>

      {/* Steps container */}
      <div className="w-full flex flex-col items-center gap-5 px-4 md:px-10 py-5 overflow-hidden">
        {/* Top connector line — hidden on mobile */}
        <div className="hidden md:flex items-center justify-center h-10 overflow-hidden">
          <div className="w-5 h-5 bg-[#D2FF00] rounded-full border-[3px] border-[#001407] shrink-0" />
          <div
            className="flex-1 max-w-[787px] h-[1px] shrink-0"
            style={{
              background:
                "repeating-linear-gradient(to right, rgba(0,20,7,0.50) 0px, rgba(0,20,7,0.50) 8px, transparent 8px, transparent 13px)",
            }}
          />
          <div className="w-5 h-5 bg-[#D2FF00] rounded-full border-[3px] border-[#001407] shrink-0" />
        </div>

        {/* Step cards */}
        <div className="w-full flex flex-col md:flex-row items-stretch gap-6 md:gap-4 xl:gap-6 px-0 md:px-4 py-5">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.number}
              variant="popUp"
              delay={i * 0.12}
              className="w-full md:flex-1"
            >
              <div className="w-full h-auto md:min-h-[450px] p-6 md:p-[30px] rounded-[24px] border border-[rgba(4,52,14,0.10)] flex flex-col items-center gap-6 md:gap-[30px] hover:shadow-[0_8px_40px_-8px_rgba(0,20,7,0.12)] transition-shadow duration-500">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={step.imageWidth}
                  height={step.imageHeight}
                  quality={100}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
                <div className="w-[91px] h-[30px] bg-[#001407] rounded-full flex items-center justify-center">
                  <span className="text-[#D2FF00] text-base font-semibold font-[family-name:var(--font-roboto-slab)]">
                    {step.number}
                  </span>
                </div>
                <div className="text-[#001407] text-xl md:text-2xl font-bold font-[family-name:var(--font-roboto-slab)] text-center">
                  {step.title}
                </div>
                <div className="text-[#001407] text-sm md:text-base font-medium font-[family-name:var(--font-roboto-slab)] text-center">
                  {step.description}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom connector line — hidden on mobile */}
        <div className="hidden md:flex items-center justify-center h-10 overflow-hidden">
          <div className="w-5 h-5 bg-[#D2FF00] rounded-full border-[3px] border-[#001407] shrink-0" />
          <div
            className="flex-1 max-w-[787px] h-[1px] shrink-0"
            style={{
              background:
                "repeating-linear-gradient(to right, rgba(0,20,7,0.50) 0px, rgba(0,20,7,0.50) 8px, transparent 8px, transparent 13px)",
            }}
          />
          <div className="w-5 h-5 bg-[#D2FF00] rounded-full border-[3px] border-[#001407] shrink-0" />
        </div>

        {/* CTA Button */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <Link href="/get-started" className="w-[230px] h-[60px] px-10 py-4 bg-[#001407] rounded-[24px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
            <span className="text-[#D2FF00] text-xl md:text-2xl font-medium font-[family-name:var(--font-roboto)]">
              Start free trial
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
