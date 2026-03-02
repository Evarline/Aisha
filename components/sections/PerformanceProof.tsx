"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    avatar: "/Images/Client.png",
    name: "Eve Mipata",
    role: "CEO,Tech Company",
    rating: 4.5,
    quote:
      "As an Independent Product Engineer, Aisha manages client inquiries, project timelines, and milestone payments. I've reduced administrative time by 80% and doubled my client capacity",
  },
  {
    avatar: "/Images/Client.png",
    name: "John Doe",
    role: "Product Engineer",
    rating: 5,
    quote:
      "As an Independent Product Engineer, Aisha manages client inquiries, project timelines, and milestone payments. I've reduced administrative time by 80% and doubled my client capacity",
  },
  {
    avatar: "/Images/Client.png",
    name: "Sarah Chen",
    role: "Product Manager",
    rating: 4.5,
    quote:
      "As an Independent Product Engineer, Aisha manages client inquiries, project timelines, and milestone payments. I've reduced administrative time by 80% and doubled my client capacity",
  },
];

function StarRating({ rating = 5 }: { rating?: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="inline-flex items-center gap-2.5 shrink-0">
      {[...Array(fullStars)].map((_, i) => (
        <Image key={`full-${i}`} src="/Icons/StarFull.svg" alt="full star" width={15} height={15} />
      ))}
      {hasHalfStar && (
        <Image key="half" src="/Icons/StarHalf.svg" alt="half star" width={15} height={15} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Image key={`empty-${i}`} src="/Icons/StarFull.svg" alt="empty star" width={15} height={15} style={{ opacity: 0.3 }} />
      ))}
    </div>
  );
}

function TestimonialCard({
  avatar, name, role, rating, quote,
}: {
  avatar: string; name: string; role: string; rating: number; quote: string;
}) {
  return (
    <div className="w-full max-w-[332px] min-h-[420px] md:min-h-[494px] p-6 md:p-[30px] rounded-[24px] border-[1.5px] border-[rgba(4,52,14,0.15)] flex flex-col items-start gap-5 md:gap-6 shrink-0 hover:shadow-[0_8px_40px_-8px_rgba(0,20,7,0.12)] transition-shadow duration-500">
      {/* Avatar */}
      <Image src={avatar} alt={name} width={100} height={103} className="shrink-0" />

      {/* Name & role */}
      <div className="flex flex-col gap-1.5 w-full">
        <div className="text-[#001407] text-lg md:text-xl font-semibold font-[family-name:var(--font-roboto)]">
          {name}
        </div>
        <div className="text-[#001407] text-lg md:text-xl font-semibold font-[family-name:var(--font-roboto)]">
          {role}
        </div>
      </div>

      {/* Stars */}
      <StarRating rating={rating} />

      {/* Quote */}
      <div className="text-[#001407] text-sm md:text-base font-normal font-[family-name:var(--font-roboto)] leading-relaxed">
        {quote}
      </div>

      {/* Badge */}
      <div className="px-2 py-2 bg-[#001407] rounded-[7px] border-2 border-[rgba(210,255,0,0.20)] inline-flex items-center justify-center">
        <span className="text-[#D2FF00] text-[11px] font-semibold font-[family-name:var(--font-roboto)]">
          SYSTEM VERIFIED
        </span>
      </div>
    </div>
  );
}

export default function PerformanceProof() {
  return (
    <section id="about" className="w-full section-padding overflow-hidden flex flex-col items-center gap-8 md:gap-10">
      {/* Header */}
      <ScrollReveal variant="fadeUp">
        <div className="w-full max-w-[1106px] flex flex-col items-center gap-5 md:gap-6 px-4 text-center">
          <h2 className="text-[#001407] text-[28px] md:text-[36px] font-bold font-[family-name:var(--font-inter)] tracking-wider">
            Performance Proof
          </h2>
          <p className="max-w-[800px] text-[rgba(0,20,7,0.70)] text-[14px] md:text-base font-normal font-[family-name:var(--font-roboto)]">
            Analyze the impact: Real narratives from partners who have unlocked operational and surgical
            efficiency through our solution
          </p>
        </div>
      </ScrollReveal>

      {/* Cards */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-12 lg:gap-[88px] px-4 md:px-10 py-5 flex-wrap">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} variant="popUp" delay={i * 0.15}>
            <TestimonialCard
              avatar={t.avatar}
              name={t.name}
              role={t.role}
              rating={t.rating}
              quote={t.quote}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
