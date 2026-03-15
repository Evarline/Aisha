"use client";

const AISHA_IMG = "/Images/WhatsApp%20Image%202025-09-23%20at%2016.39.32%204.png";

const DOTS = [
  { delay: "0ms",   opacity: 1 },
  { delay: "150ms", opacity: 0.7 },
  { delay: "300ms", opacity: 0.4 },
];

interface TypingIndicatorProps {
  avatarSrc?: string;
  className?: string;
}

export default function TypingIndicator({
  avatarSrc = AISHA_IMG,
  className = "",
}: TypingIndicatorProps) {
  return (
    <div className={`flex items-end gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-full border border-[#D2FF00] bg-[#04340E] overflow-hidden flex-shrink-0 shadow-[0_0_0_2px_rgba(210,255,0,0.15)]">
        <img
          src={avatarSrc}
          alt="Aisha"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative">
        <div className="flex items-center gap-[5px] px-4 py-3 bg-[#1E2320] rounded-2xl rounded-tl-none border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_12px_rgba(0,0,0,0.4)]">
          {DOTS.map(({ delay, opacity }) => (
            <span
              key={delay}
              className="block w-2 h-2 rounded-full bg-[#D2FF00] animate-typing-wave"
              style={{
                animationDelay: delay,
                willChange: "transform, opacity",
                opacity,
              }}
            />
          ))}
        </div>

        <div
          className="absolute -left-[6px] bottom-0 w-3 h-3 bg-[#1E2320]"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>
    </div>
  );
}
