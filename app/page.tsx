import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import ValueContrast from "@/components/sections/ValueContrast";
import Features from "@/components/sections/Features";
import DashboardDemo from "@/components/sections/DashboardDemo";
import Setup from "@/components/sections/Setup";
import PerformanceProof from "@/components/sections/PerformanceProof";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    /*
      Landing Page Container from Figma:
      - Background: #f5f5f5 (off-white)
      - Auto Layout: Vertical (flex-col)
      - Gap: 0 (no gap between children - sections stack directly)
      - Alignment: items-start
    */
    <div className="flex min-h-screen flex-col items-start bg-[#f5f5f5] overflow-x-hidden w-full">

      {/* Header Section - 90px height, full width */}
      <Header />

      {/* Main Content Area - Vertical Auto Layout, 0 gap between sections */}
      <div className="flex w-full flex-col items-start pt-[90px]">

        <Hero />

        <SocialProof />
        <ValueContrast />
        <Features />
        <DashboardDemo />
        <Setup />
        <PerformanceProof />
        <Pricing />
        <FinalCTA />
        <Footer />
    </div>
    </div>

  );
}
