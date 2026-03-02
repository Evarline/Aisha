import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#001407] overflow-hidden flex flex-col pt-[67px]">
      
      {/* Background Graphic (Placeholder for large image) */}
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none hidden lg:block">
        <div className="w-[390px] h-[330px] bg-gradient-to-bl from-[#D2FF00]/20 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Floating System Boundary Accent Line (Exact Figma spacing: 19px from top) */}
      <div className="absolute top-[19px] left-0 right-0 w-full hidden md:flex justify-center px-6 md:px-10 z-20">
        <div className="w-full max-w-[1360px] h-[4px] bg-[#D2FF00] shadow-[0_0_4px_#D2FF00]" />
      </div>

      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-10 pb-16 flex flex-col lg:flex-row justify-center items-start lg:gap-32 z-10">
        
        {/* Left Section (Brand & Socials) */}
        <div className="flex flex-col justify-start items-start gap-8 w-full lg:w-fit shrink-0 max-w-[368px]">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-4xl font-bold font-['Nunito'] drop-shadow-[0_0_10px_rgba(255,255,255,0.80)]">
              Aisha
            </h2>
            <p className="text-[#D8DED7] text-base font-medium font-['Roboto']">
              Join thousands of creators who chose to automate.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <a href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity flex justify-center items-center">
              <Image src="/Icons/Vector.svg" alt="Instagram" width={20} height={20} className="invert brightness-0" />
            </a>
            <a href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity flex justify-center items-center">
              <Image src="/Icons/Vector-1.svg" alt="X / Twitter" width={20} height={20} className="invert brightness-0" />
            </a>
            <a href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity flex justify-center items-center">
              <Image src="/Icons/Vector-2.svg" alt="Social 3" width={20} height={20} className="invert brightness-0" />
            </a>
            <a href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity flex justify-center items-center">
              <Image src="/Icons/FacebookLogo.svg" alt="Facebook" width={20} height={20} className="invert brightness-0" />
            </a>
            <a href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity flex justify-center items-center">
              <Image src="/Icons/LinkedinLogo.svg" alt="LinkedIn" width={20} height={20} className="invert brightness-0" />
            </a>
            <a href="#" className="w-6 h-6 relative hover:opacity-80 transition-opacity flex justify-center items-center">
              <Image src="/Icons/GithubLogo.svg" alt="Github" width={20} height={20} className="invert brightness-0" />
            </a>
          </div>
        </div>

        {/* Right Section (Links Grid) */}
        <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-center items-start gap-10 lg:gap-14 w-fit shrink-0">
          
          {/* Column 1: Data logs */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#D2FF00] text-xl font-medium font-['Roboto'] leading-[30px]">
              Data logs
            </h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">Security Audit</a></li>
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">System changelog</a></li>
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">API documentation</a></li>
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">Evolution Roadmap</a></li>
            </ul>
          </div>

          {/* Column 2: Solution */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#D2FF00] text-xl font-medium font-['Roboto'] leading-[30px]">
              Solution
            </h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">For Content Autonomy</a></li>
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">For Builders</a></li>
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">For Scalable Commerce</a></li>
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">For consultants</a></li>
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">Custom Protocols</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4 w-[128px]">
            <h3 className="text-[#D2FF00] text-xl font-medium font-['Roboto'] leading-[30px]">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">Global network</a></li>
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">Lead Architect</a></li>
              <li><a href="#" className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px] hover:text-[#D2FF00] transition-colors">The Vision</a></li>
            </ul>
          </div>

          {/* Column 4: System Status */}
          <div className="flex flex-col w-[227px] pl-0 lg:pl-4">
            <div className="flex items-center gap-[15px] mb-4">
              <h3 className="text-[#D2FF00] text-xl font-medium font-['Roboto'] leading-[30px]">
                System Status
              </h3>
              <div className="w-5 h-5 bg-[#D2FF00] rounded-full shadow-[0_0_10px_#D2FF00] border-2 border-[#D2FF00] animate-pulse" />
            </div>
            
            <div className="flex items-start">
              <div className="flex flex-col gap-2 w-[94px]">
                <span className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px]">STATUS:</span>
                <span className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px]">LATENCY:</span>
                <span className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px]">UPTIME:</span>
              </div>
              <div className="flex flex-col gap-2 w-[69px]">
                <span className="text-[#D2FF00] text-base font-medium font-['Roboto'] leading-[30px]">
                  OPTIMAL
                </span>
                <span className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px]">12ms</span>
                <span className="text-[#F4F1EA] text-base font-medium font-['Roboto'] leading-[30px]">99.99%</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full relative bg-[#001407]">
        {/* White outline line as requested from the Figma design */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[rgba(244,241,234,0.15)]" />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 relative z-10">
          
          <div className="text-center md:text-left">
            <span className="text-[#D2FF00] text-[11px] font-light font-['Roboto']">SYS_REF</span>
            <span className="text-[#F4F1EA] text-[11px] font-light font-['Roboto']">
              : 2026.01.06 // ENCRYPTED_CORE // © AISHA ARCHITECTURE
            </span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-8">
            <a href="#" className="text-[#F4F1EA] text-[11px] font-light font-['Roboto'] hover:text-[#D2FF00] transition-colors">Privacy policy</a>
            <span className="text-[#F4F1EA]/30 text-[11px]">/</span>
            <a href="#" className="text-[#F4F1EA] text-[11px] font-light font-['Roboto'] hover:text-[#D2FF00] transition-colors">Terms of service</a>
            <span className="text-[#F4F1EA]/30 text-[11px]">/</span>
            <a href="#" className="text-[#F4F1EA] text-[11px] font-light font-['Roboto'] hover:text-[#D2FF00] transition-colors">Cookie policy</a>
            <span className="text-[#F4F1EA]/30 text-[11px]">/</span>
            <a href="#" className="text-[#F4F1EA] text-[11px] font-light font-['Roboto'] hover:text-[#D2FF00] transition-colors">Contact us</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
