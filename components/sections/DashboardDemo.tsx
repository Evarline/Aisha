"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const navItems = [
  {
    label: "Dashboard",
    icon: "/Icons/SquaresFour.svg",
    active: true,
  },
  {
    label: "Conversations",
    icon: "/Icons/ChatsCircle.svg",
    active: false,
  },
  {
    label: "Orders",
    icon: "/Icons/ShoppingCartSimple.svg",
    active: false,
  },
  {
    label: "Analytics",
    icon: "/Icons/ChartBar.svg",
    active: false,
  },
  {
    label: "Link to WhatsApp",
    icon: "/Icons/WhatsappLogo.svg",
    active: false,
  },
  {
    label: "Settings",
    icon: "/Icons/GearSix.svg",
    active: false,
  },
];

const statsCards = [
  { label: "Today's conversations", value: "50", width: 192 },
  { label: "Completed orders", value: "10", width: 192 },
  { label: "Ghosting cases", value: "3", width: 192 },
  { label: "Today's Revenue", value: "KSH 23,750", width: 157 },
];

export default function DashboardDemo() {
  return (
    <section className="flex justify-center w-full overflow-hidden px-5 md:px-10 py-16 md:py-[88px]">
      <div className="flex flex-col items-center gap-[30px] w-full max-w-[1360px]">

        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center gap-[15px] px-4 md:px-10 py-2.5">
            <h2 className="text-center text-[#001407] text-[24px] md:text-[32px] font-extrabold font-[family-name:var(--font-inter)] tracking-[3.2px]">
              See Aisha In Action
            </h2>
            <p className="text-center max-w-[700px] text-[rgba(0,20,7,0.70)] text-[14px] md:text-[16px] font-medium font-[family-name:var(--font-roboto)] tracking-[2.4px]">
              Monitor live conversations, improve AISHA&apos;s responses, and watch your
              conversion metrics climb—all in real time.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="revealScale" duration={1} className="w-full">

          {/* ── Mobile & Tablet Layout (< lg) ── */}
          <div
            className="lg:hidden w-full flex flex-col bg-[#001407] overflow-hidden"
            style={{ borderRadius: 24, boxShadow: "0px 0px 10px 6px rgba(4, 52, 14, 0.20)" }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10">
              <span className="text-white text-2xl sm:text-3xl font-bold font-[family-name:var(--font-roboto)]">
                Logo
              </span>
              <img
                src="/Icons/UserCircle.svg"
                alt="User"
                className="w-9 h-9 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>

            {/* Greeting */}
            <div className="px-5 sm:px-6 pt-4 pb-2 flex items-center gap-2 min-w-0">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#a8cc00]"></span>
              </span>
              <p className="text-white/80 text-sm sm:text-base font-[family-name:var(--font-roboto)] truncate">
                &ldquo;Hi Sharleen! 👋 Aisha handled 15 chats in your absence. Karibu!&rdquo;
              </p>
            </div>

            {/* Horizontal Scrollable Nav — hidden scrollbar */}
            <div
              className="flex overflow-x-auto gap-2 px-5 sm:px-6 py-3 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 whitespace-nowrap px-3 py-2 rounded-xl shrink-0 cursor-pointer ${
                    item.active ? "bg-[#D2FF00]" : "bg-white/5 border border-white/15"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-5 h-5 object-contain shrink-0"
                    style={{
                      filter: item.active
                        ? "brightness(0) saturate(100%)"
                        : "brightness(0) invert(1)",
                    }}
                  />
                  <span
                    className={`text-sm font-[family-name:var(--font-roboto)] ${
                      item.active ? "text-[#04340E] font-medium" : "text-white/80"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Cards — stacked single column on mobile */}
            <div className="grid grid-cols-1 gap-4 px-5 sm:px-6 py-4">
              {statsCards.map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col items-center justify-between p-4 rounded-2xl"
                  style={{ outline: "2px rgba(255,255,255,0.18) solid", outlineOffset: "-2px" }}
                >
                  <span className="text-white/80 text-xs sm:text-sm text-center font-[family-name:var(--font-roboto)] leading-tight">
                    {card.label}
                  </span>
                  <span className="text-white text-xl sm:text-2xl font-[family-name:var(--font-roboto)] mt-2">
                    {card.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 px-5 sm:px-6 py-6">
              <p className="text-white/90 text-center text-sm sm:text-base font-[family-name:var(--font-roboto)] max-w-sm">
                Start your free trial to access the complete Aisha dashboard
              </p>
              <Link href="/get-started" className="flex items-center justify-center px-8 py-3 bg-[#D2FF00] rounded-[20px] hover:opacity-90 transition-opacity cursor-pointer">
                <span className="text-[#04340E] text-base sm:text-lg font-medium font-[family-name:var(--font-roboto)]">
                  Start free trial
                </span>
              </Link>
            </div>
          </div>

          {/* ── Desktop Layout (lg+) — CSS-scaled 1200×600 pixel-perfect canvas ── */}
          <div className="hidden lg:flex justify-center overflow-hidden h-[495px] xl:h-[600px]">
            <div className="shrink-0 relative w-[1200px] h-[600px] origin-top scale-[0.825] xl:scale-100">
              <div
                className="absolute inset-0 bg-[#001407] overflow-hidden"
                style={{ borderRadius: 32, boxShadow: "0px 0px 10px 6px rgba(4, 52, 14, 0.20)" }}
              >

              {/* ── Sidebar ── */}
              <div
                className="absolute left-0 top-0 flex flex-col gap-[20px] bg-[#001407] overflow-hidden"
                style={{
                  width: 258,
                  height: 600,
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 25,
                  paddingBottom: 25,
                  outline: "1px rgba(255,255,255,0.10) solid",
                  outlineOffset: "-1px",
                }}
              >
                <span style={{ color: "white", fontSize: 32, fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
                  Logo
                </span>
                <span style={{ color: "white", fontSize: 16, fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                  MAIN
                </span>
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-[28px] overflow-hidden"
                    style={{
                      alignSelf: "stretch",
                      height: 44,
                      paddingLeft: 14,
                      paddingRight: 14,
                      paddingTop: 7,
                      paddingBottom: 7,
                      borderRadius: 15,
                      background: item.active ? "#D2FF00" : "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-full h-full object-contain"
                        style={{
                          filter: item.active
                            ? "brightness(0) saturate(100%)"
                            : "brightness(0) invert(1)",
                        }}
                      />
                    </div>
                    <span style={{ color: item.active ? "#04340E" : "white", fontSize: 16, fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── Top Bar ── */}
              <div
                className="absolute flex items-center overflow-hidden"
                style={{
                  left: 258,
                  top: 0,
                  width: 942,
                  height: 70,
                  paddingLeft: 24,
                  paddingRight: 24,
                  background: "#001407",
                  gap: 24,
                  outline: "1px rgba(255,255,255,0.05) solid",
                  outlineOffset: "-1px",
                }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2FF00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#a8cc00]"></span>
                  </span>
                  <p className="flex-1 truncate" style={{ color: "white", fontSize: 16, fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                    &ldquo;Hi Sharleen! 👋 <span className="whitespace-nowrap">Aisha handled 15 chats in your absence. Karibu!&rdquo;</span>
                  </p>
                </div>
                {/* Search Bar */}
                <div
                  className="relative shrink-0 overflow-hidden"
                  style={{
                    width: 300,
                    height: 36,
                    background: "#001407",
                    borderRadius: 15,
                    outline: "2px #0C3C16 solid",
                    outlineOffset: "-1px",
                  }}
                >
                  <span className="absolute" style={{ left: 16, top: 9, color: "#A1A1A1", fontSize: 12, fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                    Search
                  </span>
                  <div className="absolute flex items-center justify-center" style={{ right: 6, top: 6, width: 24, height: 24 }}>
                    <img src="/Icons/MagnifyingGlass.svg" alt="Search" className="w-[24px] h-[24px] object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                  </div>
                </div>
                {/* Notification Bell */}
                <div className="relative shrink-0 flex items-center justify-center" style={{ width: 36, height: 36 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="absolute top-0 right-0 w-[8px] h-[8px] bg-[#D2FF00] rounded-full" />
                </div>
                {/* User Avatar */}
                <div className="shrink-0 flex items-center justify-center" style={{ width: 36, height: 36 }}>
                  <img src="/Icons/UserCircle.svg" alt="User" className="w-full h-full object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                </div>
              </div>

              {/* ── Stats Cards Row ── */}
              <div className="absolute flex items-center" style={{ left: 283, top: 142, gap: 19 }}>
                {statsCards.map((card) => (
                  <div
                    key={card.label}
                    className="flex flex-col items-center justify-between overflow-hidden"
                    style={{
                      width: card.width,
                      height: 87,
                      paddingLeft: 13,
                      paddingRight: 13,
                      paddingTop: 15,
                      paddingBottom: 15,
                      background: "#001407",
                      borderRadius: 15,
                      outline: "3px rgba(255,255,255,0.20) solid",
                      outlineOffset: "-3px",
                    }}
                  >
                    <span className="text-center" style={{ color: "white", fontSize: 16, fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                      {card.label}
                    </span>
                    <span className="text-center w-full" style={{ color: "white", fontSize: 24, fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                      {card.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── CTA Overlay Text ── */}
              <p
                className="absolute text-center"
                style={{ left: 419, top: 341, color: "white", fontSize: 20, fontFamily: "'Roboto', sans-serif", fontWeight: 400, maxWidth: 560 }}
              >
                Start your free trial to access the complete Aisha dashboard
              </p>

              {/* ── CTA Button ── */}
              <Link
                href="/get-started"
                className="absolute flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                style={{ left: 542, top: 442, paddingLeft: 32, paddingRight: 32, paddingTop: 13, paddingBottom: 13, background: "#D2FF00", borderRadius: 20, gap: 10 }}
              >
                <span style={{ color: "#04340E", fontSize: 20, fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>
                  Start free trial
                </span>
              </Link>

              </div>
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
