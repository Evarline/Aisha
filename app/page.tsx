import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";

export default function Home() {
  return (
    /* 
      Landing Page Container from Figma:
      - Background: #f5f5f5 (off-white)
      - Auto Layout: Vertical (flex-col)
      - Gap: 0 (no gap between children - sections stack directly)
      - Alignment: items-start
    */
    <div className="flex min-h-screen flex-col items-start bg-[#f5f5f5]">
      
      {/* Header Section - 90px height, full width */}
      <Header />
      
      {/* Main Content Area - Vertical Auto Layout, 0 gap between sections */}
      <main className="flex w-full flex-col items-start pt-[90px]">
        
        <Hero />
        
        <SocialProof />
      </main>
    </div>
  );
}

