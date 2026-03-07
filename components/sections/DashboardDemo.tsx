"use client";

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
    <section
      className="flex justify-center w-full overflow-hidden px-5 md:px-10 py-16 md:py-[88px]"
    >
      <div className="flex flex-col items-center gap-[30px] w-full max-w-[1360px]">

        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
        <div
          className="flex flex-col items-center gap-[15px] px-4 md:px-10 py-2.5"
        >
          <h2
            className="text-center text-[#001407] text-[24px] md:text-[32px] font-extrabold font-[family-name:var(--font-inter)] tracking-[3.2px]"
          >
            See Aisha In Action
          </h2>
          <p
            className="text-center max-w-[700px] text-[rgba(0,20,7,0.70)] text-[14px] md:text-[16px] font-medium font-[family-name:var(--font-roboto)] tracking-[2.4px]"
          >
            Monitor live conversations, improve AISHA&apos;s responses, and watch your
            conversion metrics climb—all in real time.
          </p>
        </div>
        </ScrollReveal>

        {/* Dashboard Mockup — scaled to fit within the section */}
        <ScrollReveal variant="revealScale" duration={1}>
        {/*
          Responsive scale trick:
          - Outer div: flex + overflow-hidden + explicit height matching (600 × scale)
          - Inner canvas: shrink-0 at full 1200×600, scaled visually via transform
          - justify-center keeps the canvas horizontally centered before/after scaling
        */}
        <div className="w-full overflow-hidden flex justify-center items-start h-[192px] sm:h-[312px] md:h-[420px] lg:h-[495px] xl:h-[600px]">
          <div
            className="shrink-0 relative w-[1200px] h-[600px] origin-top scale-[0.32] sm:scale-[0.52] md:scale-[0.7] lg:scale-[0.825] xl:scale-100"
          >
            <div
              className="absolute inset-0 bg-[#001407] overflow-hidden"
              style={{
                borderRadius: 32,
                boxShadow: "0px 0px 10px 6px rgba(4, 52, 14, 0.20)",
              }}
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
              {/* Logo */}
              <span
                style={{
                  color: "white",
                  fontSize: 32,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 700,
                }}
              >
                Logo
              </span>

              {/* Section label */}
              <span
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                }}
              >
                MAIN
              </span>

              {/* Nav items */}
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
                  {/* Icon */}
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
                  {/* Label */}
                  <span
                    style={{
                      color: item.active ? "#04340E" : "white",
                      fontSize: 16,
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 400,
                    }}
                  >
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
                paddingRight: 70,
                background: "#001407",
                gap: 63,
                outline: "1px rgba(255,255,255,0.05) solid",
                outlineOffset: "-1px",
              }}
            >
              {/* Greeting */}
              <p
                className="flex-1"
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                }}
              >
                &ldquo;Hi Sharleen! 👋<br />
                <span className="whitespace-nowrap">Aisha handled 15 chats in your absence. Karibu!&rdquo;</span>
              </p>

              {/* Search bar */}
              <div
                className="relative shrink-0 overflow-hidden"
                style={{
                  width: 340,
                  height: 36,
                  background: "#001407",
                  borderRadius: 15,
                  outline: "2px #0C3C16 solid",
                  outlineOffset: "-1px",
                }}
              >
                <span
                  className="absolute"
                  style={{
                    left: 16,
                    top: 9,
                    color: "#A1A1A1",
                    fontSize: 12,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Search
                </span>
                <div
                  className="absolute flex items-center justify-center"
                  style={{ right: 6, top: 6, width: 24, height: 24 }}
                >
                  <img
                    src="/Icons/MagnifyingGlass.svg"
                    alt="Search"
                    className="w-[24px] h-[24px] object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>

              {/* User Avatar */}
              <div
                className="shrink-0 flex items-center justify-center"
                style={{ width: 40, height: 40 }}
              >
                <img
                  src="/Icons/UserCircle.svg"
                  alt="User"
                  className="w-full h-full object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            </div>

            {/* ── Stats Cards Row ── */}
            <div
              className="absolute flex items-center"
              style={{ left: 283, top: 142, gap: 19 }}
            >
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
                  <span
                    className="text-center"
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {card.label}
                  </span>
                  <span
                    className="text-center w-full"
                    style={{
                      color: "white",
                      fontSize: 24,
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {card.value}
                  </span>
                </div>
              ))}
            </div>

            {/* ── CTA Overlay Text ── */}
            <p
              className="absolute text-center"
              style={{
                left: 419,
                top: 341,
                color: "white",
                fontSize: 20,
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                maxWidth: 560,
              }}
            >
              Start your free trial to access the complete Aisha dashboard
            </p>

            {/* ── CTA Button ── */}
            <button
              className="absolute flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
              style={{
                left: 542,
                top: 442,
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 13,
                paddingBottom: 13,
                background: "#D2FF00",
                borderRadius: 20,
                gap: 10,
              }}
            >
              <span
                style={{
                  color: "#04340E",
                  fontSize: 20,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                }}
              >
                Start free trial
              </span>
            </button>

          </div>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
}
