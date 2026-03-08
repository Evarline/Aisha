"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const imgWhatsAppImage20250923At163932RemovebgPreview13 = "https://www.figma.com/api/mcp/asset/f4fb0fa1-7d38-4df9-86b5-ef6823304c88";
const imgAisha = "/Images/WhatsApp%20Image%202025-09-23%20at%2016.39.32%204.png";
const imgWallpaper = "https://www.figma.com/api/mcp/asset/be9f6aca-a4b6-4728-8333-544487f5cd99";
const imgVector13 = "https://www.figma.com/api/mcp/asset/9e9c0cb7-caf3-4597-93db-5bd609653bb2";
const imgVector15 = "https://www.figma.com/api/mcp/asset/526a8170-e893-4189-90b3-54743d4fe9fa";
const imgUserFocus = "https://www.figma.com/api/mcp/asset/b28f335c-4fd5-40b5-aceb-808cba8c7874";
const imgBatteryHigh = "https://www.figma.com/api/mcp/asset/dd7aee02-7972-4afc-b5cb-9d75f03429d9";
const imgWifiMedium = "https://www.figma.com/api/mcp/asset/5a307e5e-82f0-49ad-a5c0-1f8e5f8c6553";
const imgVector = "https://www.figma.com/api/mcp/asset/c3f5e882-50b2-46a6-950f-3953f055bc6c";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/62f15364-6446-4be0-b0ee-835df66016d4";
const imgEllipse14 = "https://www.figma.com/api/mcp/asset/96b10aff-8073-4e4d-9cf7-9d6fb8fa4526";
const imgDotsThreeOutlineVertical = "https://www.figma.com/api/mcp/asset/646a4fdb-4b01-43bb-8b28-95dbfee8d1a0";
const imgPhone = "https://www.figma.com/api/mcp/asset/23f0e1b2-cad0-451d-b987-70f989d946c9";
const imgVector1 = "https://www.figma.com/api/mcp/asset/14bac92c-93c8-464f-bf6e-c3029b796db7";
const imgPaperclip = "https://www.figma.com/api/mcp/asset/9feb017a-793a-4db0-b22c-3961f951ac38";
const imgSmiley = "https://www.figma.com/api/mcp/asset/5cf038c7-ccd0-4dae-8b54-400f9e17bbbb";
const imgPaperPlaneTilt = "https://www.figma.com/api/mcp/asset/7837c5c0-26dd-4a1d-b4a5-852b2ba5718a";
const img941 = "https://www.figma.com/api/mcp/asset/73ac21d0-858f-4d5b-9960-2a53e74625cc";
const imgIconsRight = "https://www.figma.com/api/mcp/asset/7e9eaa1b-16da-468a-8c97-665fb47e4a49";
const imgDynamicIsland = "https://www.figma.com/api/mcp/asset/15ec94df-a64d-4fdf-b5a1-31e160de0e76";

export default function Hero() {
  return (
    <section className="flex justify-center w-full px-5 md:px-[40px] py-12 md:py-[88px] overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[20px] lg:h-[444px] items-center w-full max-w-[1360px]">

        {/* Hero Left */}
        <ScrollReveal variant="fadeUp" duration={0.8}>
          <div className="flex flex-col gap-6 md:gap-[40px] items-center lg:items-start justify-center flex-1 min-w-0">
            <div
              className="font-extrabold leading-[1.1] text-[#001407] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-center lg:text-left"
              style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
            >
              <p className="mb-0">Your 24/7 WhatsApp</p>
              <p className="mb-0">sales Assistant</p>
            </div>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p
                className="font-medium leading-normal text-[#001407] text-[16px] md:text-[20px] max-w-[611px] text-center lg:text-left"
                style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
              >
                Karibu to effortless client care, Aisha handles the hustle and lets you&nbsp; focus on what you love
              </p>
            </ScrollReveal>
            <ScrollReveal variant="popUp" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-[50px] items-center">
                <button
                  className="bg-[#001407] flex h-[52px] md:h-[60px] items-center justify-center overflow-clip px-8 md:px-[38px] py-[15px] rounded-[24px] shrink-0 w-full sm:w-[230px] hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <span
                    className="font-medium leading-normal text-[#d2ff00] text-[18px] md:text-[24px]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    Start free trial
                  </span>
                </button>
                <button
                  className="bg-[#f5f5f5] border-[#001407] border-[3.6px] border-solid flex h-[52px] md:h-[60px] items-center justify-center overflow-clip px-5 md:px-[21px] py-[15px] rounded-[24px] shrink-0 w-full sm:w-[230px] hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <span
                    className="font-medium leading-normal text-[#001407] text-[18px] md:text-[24px]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    See how it works
                  </span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Visual Ecosystem — fluid, percentage-based, device-agnostic */}
        <ScrollReveal variant="zoomIn" delay={0.3} duration={1} className="w-full lg:flex-1 mt-0 flex items-center justify-center">
          {/*
            Reference canvas: 680 × 440 px
            All child positions expressed as percentages of those dimensions.
            The container uses aspect-[680/440] so height always matches width proportionally.
          */}
          <div
            className="relative w-full max-w-[680px] mx-auto pointer-events-none select-none"
            style={{ aspectRatio: "680 / 440", overflowX: "clip", overflowY: "visible" }}
          >

            {/* Arc SVG — left=29.9%, top=17.3%, w=37.8%, h=38.2% */}
            <svg
              viewBox="0 0 259 170"
              className="absolute overflow-visible"
              style={{ left: "29.9%", top: "17.3%", width: "37.8%", height: "38.2%" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <path
                d="M0.676758 168.768C59.9807 58.0585 213.169 -98.9905 257.677 86.4382"
                stroke="#D2FF00" strokeOpacity="0.25" strokeWidth="4"
                strokeDasharray="2 3" fill="none" filter="url(#arc-glow)"
              />
              <path
                d="M0.676758 168.768C59.9807 58.0585 213.169 -98.9905 257.677 86.4382"
                stroke="#001407" strokeOpacity="0.35" strokeWidth="0.7"
                strokeDasharray="2 3" fill="none"
              />
            </svg>

            {/* 3D Phone Mockup — left=34.1%, top=2.7%, w=24.8%, h=78.3% */}
            <div className="absolute" style={{ left: "34.1%", top: "2.7%", width: "24.8%", height: "78.3%" }}>
              <div className="absolute inset-0 rounded-[15.6%]">
                {/* Side buttons */}
                <div className="absolute flex items-center justify-center" style={{ right: "-0.76%", top: "23.2%", width: "1.27%", height: "9.07%" }}>
                  <div className="flex-none rotate-180">
                    <div className="overflow-clip relative rounded-bl-[0.5%] rounded-tl-[0.5%] w-full h-full">
                      <div className="absolute bg-[#373737] inset-0 rounded-bl-[0.5%] rounded-tl-[0.5%]" />
                    </div>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center" style={{ right: "-0.76%", top: "46.9%", width: "1.27%", height: "8.19%" }}>
                  <div className="flex-none rotate-180">
                    <div className="overflow-clip relative rounded-bl-[0.5%] rounded-tl-[0.5%] w-full h-full">
                      <div className="absolute bg-[#373737] inset-0 rounded-bl-[0.5%] rounded-tl-[0.5%]" />
                    </div>
                  </div>
                </div>
                <div className="absolute overflow-clip rounded-bl-[0.5%] rounded-tl-[0.5%]" style={{ left: "-0.76%", top: "14.5%", width: "1.27%", height: "3.02%" }}>
                  <div className="absolute bg-[#373737] inset-0" />
                </div>
                <div className="absolute overflow-clip rounded-bl-[0.5%] rounded-tl-[0.5%]" style={{ left: "-0.76%", top: "20.4%", width: "1.27%", height: "5.46%" }}>
                  <div className="absolute bg-[#373737] inset-0" />
                </div>
                <div className="absolute overflow-clip rounded-bl-[0.5%] rounded-tl-[0.5%]" style={{ left: "-0.76%", top: "27.5%", width: "1.27%", height: "5.46%" }}>
                  <div className="absolute bg-[#373737] inset-0" />
                </div>
                {/* Phone frame */}
                <div className="absolute inset-0 overflow-clip rounded-[15.6%]">
                  <div className="absolute bg-black inset-0 rounded-[15.6%]" />
                </div>
                <div className="absolute inset-0 overflow-clip rounded-[15.6%]">
                  <div className="absolute blur-[0.5px] border-[#7b7b7b] border border-solid inset-0 rounded-[15.6%]" />
                </div>
                <div className="absolute border-[#232323] border border-solid inset-[1%] rounded-[14.6%]" />
              </div>
              {/* Phone Screen */}
              <div className="absolute overflow-clip rounded-[14.6%]" style={{ inset: "0.5%" }}>
                <div className="absolute bg-[#000100] inset-0 rounded-[14.6%]" />
                <div className="absolute inset-[1%] overflow-clip rounded-[13%]">
                  <div className="absolute bg-black inset-0" />
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWallpaper} />
                  {/* Status Bar */}
                  <div className="absolute flex items-center justify-between" style={{ left: "8.6%", right: "6.9%", top: "2.4%", padding: "0.5% 0" }}>
                    <div className="relative shrink-0" style={{ width: "8.5%", height: "1.5%" }}>
                      <img alt="" className="absolute block max-w-none size-full" src={img941} />
                    </div>
                    <div className="relative shrink-0" style={{ width: "19.7%", height: "1.6%" }}>
                      <img alt="" className="absolute block max-w-none size-full" src={imgIconsRight} />
                    </div>
                  </div>
                  {/* Dynamic Island */}
                  <div className="absolute -translate-x-1/2" style={{ left: "50%", top: "1.7%", width: "29.5%", height: "3.8%" }}>
                    <img alt="" className="absolute block max-w-none size-full" src={imgDynamicIsland} />
                  </div>
                  {/* Home Indicator */}
                  <div className="absolute bottom-0 left-0 right-0" style={{ height: "2.6%" }}>
                    <div className="absolute -translate-x-1/2 left-1/2 bg-white rounded-full" style={{ bottom: "1%", width: "36.9%", height: "60%" }} />
                  </div>
                  {/* WhatsApp Chat Screen */}
                  <div className="absolute flex items-center justify-center" style={{ left: "-1.3%", top: "-4.3%", width: "100.5%", height: "100.5%" }}>
                    <div className="flex-none rotate-[-0.11deg] w-full h-full">
                      <div className="bg-[#f4f1e1] overflow-clip relative w-full h-full">
                        {/* Header */}
                        <div className="absolute backdrop-blur-[4px] bg-[rgba(255,255,255,0.8)] border border-[rgba(4,52,14,0.1)] border-solid overflow-clip" style={{ left: "1%", top: "4.8%", width: "99.2%", height: "11.9%" }}>
                          <div className="absolute" style={{ left: "19.4%", top: "13.5%", width: "6%", height: "6%" }}>
                            <img alt="" className="absolute block max-w-none size-full" src={imgUserFocus} />
                          </div>
                          <div className="absolute" style={{ left: "88.5%", top: "16.6%", width: "6%", height: "6%" }}>
                            <img alt="" className="absolute block max-w-none size-full" src={imgBatteryHigh} />
                          </div>
                          <div className="absolute" style={{ left: "71.3%", top: "16.4%", width: "6%", height: "6%" }}>
                            <img alt="" className="absolute block max-w-none size-full" src={imgWifiMedium} />
                          </div>
                          <div className="absolute inset-[10.79%_14.85%_72.3%_80.96%]">
                            <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
                          </div>
                          <div className="absolute" style={{ left: "3.3%", top: "82.5%", width: "6%", height: "6%" }}>
                            <img alt="" className="absolute block max-w-none size-full" src={imgArrowLeft} />
                          </div>
                          <div className="absolute" style={{ left: "12.1%", top: "31.4%", width: "10.1%", height: "19.6%" }}>
                            <div className="absolute" style={{ left: "0", top: "40.7%", width: "100%", height: "53.3%" }}>
                              <img alt="" className="absolute block max-w-none size-full" src={imgEllipse14} />
                            </div>
                            <div className="absolute flex items-center justify-center" style={{ left: "25.5%", top: "30.6%", width: "61.5%", height: "46.6%" }}>
                              <div className="flex-none rotate-[0.81deg] w-full h-full">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20250923At163932RemovebgPreview13} />
                              </div>
                            </div>
                          </div>
                          <p className="absolute font-bold leading-normal text-[#04340e]" style={{ left: "24%", top: "78%", fontSize: "min(6.5px, 1.5vw)", fontFamily: "'Nunito', sans-serif" }}>AISHA</p>
                          <p className="absolute font-bold leading-normal text-[#d2ff00]" style={{ left: "24%", top: "92%", fontSize: "min(4.9px, 1.1vw)", fontFamily: "'Nunito', sans-serif" }}>Online</p>
                          <div className="absolute" style={{ left: "91.6%", top: "76.8%", width: "6%", height: "6%" }}>
                            <img alt="" className="absolute block max-w-none size-full" src={imgDotsThreeOutlineVertical} />
                          </div>
                          <div className="absolute bg-black rounded-[50%]" style={{ left: "33.3%", top: "10.5%", width: "31.5%", height: "43%" }} />
                          <p className="absolute font-bold leading-normal text-[#04340e]" style={{ left: "5.6%", top: "13.5%", fontSize: "min(6.5px, 1.5vw)", fontFamily: "'Nunito', sans-serif" }}>19:55</p>
                          <div className="absolute" style={{ left: "82.3%", top: "75.6%", width: "6%", height: "6%" }}>
                            <img alt="" className="absolute block max-w-none size-full" src={imgPhone} />
                          </div>
                        </div>
                        {/* Bottom Input Bar */}
                        <div className="absolute bg-white border border-[rgba(4,52,14,0.1)] border-solid overflow-clip" style={{ left: "0", top: "89.4%", width: "100%", height: "10.6%" }}>
                          <div className="absolute flex items-center" style={{ left: "4.8%", top: "26%", width: "78.7%", height: "48.9%" }}>
                            <div className="absolute bg-[rgba(4,52,14,0.05)] border border-[rgba(4,52,14,0.1)] border-solid overflow-clip rounded-full inset-0">
                              <p className="absolute text-[rgba(4,52,14,0.4)]" style={{ left: "16.3%", top: "30%", fontSize: "min(6.6px, 1.5vw)", fontFamily: "'Inter', sans-serif" }}>Message Aisha....</p>
                              <div className="absolute flex items-center justify-center" style={{ left: "75.9%", top: "11.9%", width: "8.6%", height: "75%", transform: "rotate(-45.88deg)" }}>
                                <img alt="" className="block max-w-none" style={{ width: "70%" }} src={imgPaperclip} />
                              </div>
                            </div>
                            <div className="relative shrink-0 ml-auto" style={{ width: "7.8%", aspectRatio: "1" }}>
                              <img alt="" className="absolute block max-w-none size-full" src={imgSmiley} />
                            </div>
                          </div>
                          <div className="absolute" style={{ left: "89.1%", top: "38.8%", width: "6%", aspectRatio: "1" }}>
                            <img alt="" className="absolute block max-w-none size-full" src={imgPaperPlaneTilt} />
                          </div>
                          <div className="absolute bg-[rgba(4,52,14,0.2)] rounded-full" style={{ left: "30.5%", top: "85.5%", width: "34.1%", height: "5.6%" }} />
                        </div>
                        {/* Chat message 1 — customer */}
                        <div className="absolute" style={{ left: "53.2%", top: "21.4%", width: "40.5%", height: "8.6%" }}>
                          <div className="absolute bg-white border border-[rgba(27,48,34,0.1)] border-solid overflow-clip rounded-[6.6px] inset-0">
                            <p className="absolute text-[#1b3022]" style={{ left: "4.4%", top: "0", width: "95%", fontSize: "min(4.9px, 1.1vw)", fontFamily: "'Inter', sans-serif" }}>Boss, those solar lamps you sell,do they come with a warranty?</p>
                            <p className="absolute text-[#04340e]" style={{ left: "73%", top: "79%", fontSize: "min(4.1px, 0.9vw)", fontFamily: "'Inter', sans-serif" }}>19:52</p>
                          </div>
                        </div>
                        {/* Chat message 1 — Aisha reply */}
                        <div className="absolute" style={{ left: "0.4%", top: "25.6%", width: "47.4%", height: "9.2%" }}>
                          <div className="absolute bg-[#04340e] overflow-clip rounded-[6.6px]" style={{ left: "7.4%", top: "0", width: "92.6%", height: "100%" }}>
                            <p className="absolute text-white" style={{ left: "4.5%", top: "4.7%", width: "96%", fontSize: "min(4.9px, 1.1vw)", fontFamily: "'Inter', sans-serif" }}>Yes, boss-1 year warranty straight from us.Solid quality,trust!💯Interested?</p>
                            <p className="absolute text-white" style={{ left: "78%", top: "77%", fontSize: "min(4.1px, 0.9vw)", fontFamily: "'Inter', sans-serif" }}>19:52</p>
                          </div>
                        </div>
                        {/* Chat message 2 — customer */}
                        <div className="absolute" style={{ left: "55.6%", top: "39%", width: "40.5%", height: "7.1%" }}>
                          <div className="absolute bg-white border border-[rgba(27,48,34,0.1)] border-solid overflow-clip rounded-[6.6px] inset-0">
                            <p className="absolute text-[#1b3022]" style={{ left: "5%", top: "7%", width: "95%", fontSize: "min(4.9px, 1.1vw)", fontFamily: "'Inter', sans-serif" }}>Eeey,how much for two lamps delivered to westlands</p>
                            <p className="absolute text-[#04340e]" style={{ left: "71%", top: "65%", fontSize: "min(4.1px, 0.9vw)", fontFamily: "'Inter', sans-serif" }}>19:54</p>
                          </div>
                        </div>
                        {/* Chat message 2 — Aisha reply */}
                        <div className="absolute" style={{ left: "-1.4%", top: "47.3%", width: "47.4%", height: "9.2%" }}>
                          <div className="absolute bg-[#04340e] overflow-clip rounded-[6.6px]" style={{ left: "7.4%", top: "0", width: "92.6%", height: "100%" }}>
                            <p className="absolute text-white" style={{ left: "4%", top: "7%", width: "96%", fontSize: "min(4.9px, 1.1vw)", fontFamily: "'Inter', sans-serif" }}>Hehe,one lamp KES 4500,so two KES 9,000.Delivery to Westlands free this week okay?</p>
                            <p className="absolute text-white" style={{ left: "78%", top: "74%", fontSize: "min(4.1px, 0.9vw)", fontFamily: "'Inter', sans-serif" }}>19:54</p>
                          </div>
                        </div>
                        {/* Chat message 3 — customer */}
                        <div className="absolute" style={{ left: "53.4%", top: "62.9%", width: "40.5%", height: "7.1%" }}>
                          <div className="absolute bg-white border border-[rgba(27,48,34,0.1)] border-solid overflow-clip rounded-[6.6px] inset-0">
                            <p className="absolute text-[#1b3022]" style={{ left: "4.4%", top: "8%", width: "95%", fontSize: "min(4.9px, 1.1vw)", fontFamily: "'Inter', sans-serif" }}>Okay,I&apos;ve placed my order.Order 456.Status?</p>
                            <p className="absolute text-[#04340e]" style={{ left: "74%", top: "65%", fontSize: "min(4.1px, 0.9vw)", fontFamily: "'Inter', sans-serif" }}>19:56</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Data Packet 1 — left=66.7%, top=34.4% */}
            <div className="absolute z-[20] bg-[#D2FF00] rounded-full animate-pulse" style={{ left: "66.7%", top: "34.4%", width: "1.03%", aspectRatio: "1", boxShadow: "0 0 4px 2px rgba(210,255,0,1), 0 0 14px 4px rgba(210,255,0,0.85), 0 0 28px 8px rgba(210,255,0,0.45)" }} />

            {/* Client card (top right) — left=67.6%, top=7.5%, w=25.7%, h=38.6% */}
            <div className="absolute border-[#b8c4b9] border overflow-clip rounded-[8%]" style={{ left: "67.6%", top: "7.5%", width: "25.7%", height: "38.6%" }}>
              <img alt="Client" className="absolute inset-0 w-full h-full object-cover" src="/Images/Client(2).png" />
            </div>

            {/* AI Logo (bottom left) — left=0%, top=40%, w=32.5%, h=65.5% */}
            <div className="absolute overflow-visible" style={{ left: "0%", top: "40%", width: "32.5%", height: "65.5%" }}>
              {/* Dark backdrop circle */}
              <div className="absolute bg-[#001407] rounded-full" style={{ left: "10.4%", top: "19.4%", width: "79.2%", height: "60.7%", boxShadow: "0 0 28px 20px rgba(0,20,7,1)" }} />
              {/* Ring 4 */}
              <div className="absolute" style={{ left: "0", top: "11.6%", width: "100%", height: "76.7%" }}>
                <img src="/Images/Ellipse%2018.svg" alt="" className="absolute size-full animate-[spin_90s_linear_infinite_reverse]" />
              </div>
              {/* Ring 3 — inline dashed */}
              <div className="absolute" style={{ left: "3.6%", top: "14.4%", width: "92.8%", height: "71.2%" }}>
                <div className="absolute border-[#D2FF00] border border-dashed h-full opacity-35 rounded-full w-full animate-[spin_70s_linear_infinite]" />
              </div>
              {/* Ring 2 */}
              <div className="absolute" style={{ left: "3.6%", top: "14.4%", width: "92.8%", height: "71.2%" }}>
                <img src="/Images/Ellipse%2017.svg" alt="" className="absolute size-full animate-[spin_55s_linear_infinite]" />
              </div>
              {/* Ring 1 */}
              <div className="absolute" style={{ left: "8.1%", top: "17.9%", width: "83.7%", height: "64.2%" }}>
                <img src="/Images/Ellipse%2016.svg" alt="" className="absolute size-full" />
              </div>
              {/* Aisha photo */}
              <div className="absolute overflow-hidden rounded-full" style={{ left: "13.6%", top: "19.8%", width: "72.4%", height: "55.5%" }}>
                <img src={imgAisha} alt="Aisha AI" className="absolute h-full object-cover object-top w-full" />
              </div>
              {/* Lime border ring */}
              <div className="absolute border-[rgba(210,255,0,0.55)] border rounded-full" style={{ left: "9%", top: "18.7%", width: "81.4%", height: "62.5%" }} />
            </div>

            {/* Right Data Packet 2 — left=61.5%, top=19.4% */}
            <div className="absolute z-[20] bg-[#D2FF00] rounded-full animate-pulse" style={{ left: "61.5%", top: "19.4%", width: "1.03%", aspectRatio: "1", animationDelay: "0.5s", boxShadow: "0 0 4px 2px rgba(210,255,0,1), 0 0 14px 4px rgba(210,255,0,0.85), 0 0 28px 8px rgba(210,255,0,0.45)" }} />

            {/* Left Data Packet 1 — left=28.5%, top=56.3% */}
            <div className="absolute z-[20] bg-[#D2FF00] rounded-full animate-pulse" style={{ left: "28.5%", top: "56.3%", width: "1.03%", aspectRatio: "1", animationDelay: "0.2s", boxShadow: "0 0 4px 2px rgba(210,255,0,1), 0 0 14px 4px rgba(210,255,0,0.85), 0 0 28px 8px rgba(210,255,0,0.45)" }} />

            {/* Left Data Packet 2 — left=30.8%, top=49% */}
            <div className="absolute z-[20] bg-[#D2FF00] rounded-full animate-pulse" style={{ left: "30.8%", top: "49%", width: "1.03%", aspectRatio: "1", animationDelay: "0.7s", boxShadow: "0 0 4px 2px rgba(210,255,0,1), 0 0 14px 4px rgba(210,255,0,0.85), 0 0 28px 8px rgba(210,255,0,0.45)" }} />

          </div>{/* end fluid canvas */}
        </ScrollReveal>
      </div>
    </section>
  );
}
