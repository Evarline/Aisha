"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Globe, ChevronDown, ArrowRight } from "lucide-react";

export default function BusinessForm() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#020A05] text-white font-sans antialiased">

      {/* ── LEFT COLUMN: Brand Ecosystem ── */}
      <div
        className="hidden lg:flex flex-col justify-center p-12 lg:p-24 relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#004d1a]/25 via-[#020A05] to-[#020A05] border-r-[2px] border-[#D4FF00]/90"
        style={{
          boxShadow: "2px 0 20px rgba(212,255,0,0.15)",
        }}
      >
        {/* Logo - top left */}
        <div className="absolute top-8 left-12 lg:top-8 lg:left-24">
          <span className="text-4xl lg:text-5xl font-bold tracking-tight">
            Aisha AI
          </span>
        </div>

        {/* Headline Typography */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter">
            Aisha: Business evolved
          </h1>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter mt-1"
            style={{ color: "#D4FF00" }}
          >
            Business: Supercharged
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-lg mt-6 max-w-md">
            Join thousands of enterprises using Aisha for intelligent workflow Automation
          </p>
        </div>
      </div>

      {/* ── RIGHT COLUMN: Glass Interface ── */}
      <div className="flex items-center justify-center p-6 lg:p-12 relative min-h-screen py-12 pt-20 lg:pt-12">

        {/* Mobile logo - top left */}
        <div className="absolute top-6 left-6 lg:hidden">
          <span className="text-3xl font-bold tracking-tight">
            Aisha AI
          </span>
        </div>

        {/* The Card */}
        <div className="w-full max-w-md bg-[#111914]/70 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 lg:p-10 shadow-2xl">

          {/* Header */}
          <h2 className="text-3xl font-bold text-center tracking-tight mb-8 text-white">
            Complete Business Profile
          </h2>

          {/* Form */}
          <form className="space-y-4" autoComplete="off" onSubmit={handleSubmit}>

            {/* Business Name */}
            <div>
              <label className="text-[11px] text-gray-300 capitalize mb-1.5 block font-medium">
                Business name
              </label>
              <div className="relative flex items-center h-12 bg-black/40 border border-white/10 rounded-lg transition-all duration-300 focus-within:border-[#D4FF00] focus-within:ring-1 focus-within:ring-[#D4FF00]/50 px-4">
                <input
                  type="text"
                  placeholder="Acme Corporation"
                  autoComplete="off"
                  className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 outline-none"
                />
              </div>
            </div>

            {/* Website URL */}
            <div>
              <label className="text-[11px] text-gray-300 capitalize mb-1.5 block font-medium">
                Website URL
              </label>
              <div className="relative flex items-center h-12 bg-black/40 border border-white/10 rounded-lg transition-all duration-300 focus-within:border-[#D4FF00] focus-within:ring-1 focus-within:ring-[#D4FF00]/50 px-4">
                <input
                  type="text"
                  placeholder="https://acme.com"
                  autoComplete="off"
                  className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 outline-none pr-3"
                />
                <Globe size={16} className="text-gray-500 shrink-0" />
              </div>
            </div>

            {/* Business Email */}
            <div>
              <label className="text-[11px] text-gray-300 capitalize mb-1.5 block font-medium">
                Business email
              </label>
              <div className="relative flex items-center h-12 bg-black/40 border border-white/10 rounded-lg transition-all duration-300 focus-within:border-[#D4FF00] focus-within:ring-1 focus-within:ring-[#D4FF00]/50 px-4">
                <input
                  type="email"
                  placeholder="contact@acme.com"
                  autoComplete="off"
                  className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-[11px] text-gray-300 capitalize mb-1.5 block font-medium">
                Phone number
              </label>
              <div className="relative flex items-center h-12 bg-black/40 border border-white/10 rounded-lg transition-all duration-300 focus-within:border-[#D4FF00] focus-within:ring-1 focus-within:ring-[#D4FF00]/50 px-4">
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  autoComplete="off"
                  className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 outline-none"
                />
              </div>
            </div>

            {/* Business Type */}
            <div>
              <label className="text-[11px] text-gray-300 capitalize mb-1.5 block font-medium">
                Business type
              </label>
              <div className="relative flex items-center h-12 bg-black/40 border border-white/10 rounded-lg transition-all duration-300 focus-within:border-[#D4FF00] focus-within:ring-1 focus-within:ring-[#D4FF00]/50 px-4">
                <select
                  className="flex-1 bg-transparent text-white text-sm appearance-none outline-none pr-3 cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#111914] text-gray-600">
                    Select business type
                  </option>
                  <option value="technology" className="bg-[#111914] text-white">
                    Technology
                  </option>
                  <option value="finance" className="bg-[#111914] text-white">
                    Finance
                  </option>
                  <option value="healthcare" className="bg-[#111914] text-white">
                    Healthcare
                  </option>
                  <option value="retail" className="bg-[#111914] text-white">
                    Retail
                  </option>
                  <option value="manufacturing" className="bg-[#111914] text-white">
                    Manufacturing
                  </option>
                  <option value="consulting" className="bg-[#111914] text-white">
                    Consulting
                  </option>
                  <option value="education" className="bg-[#111914] text-white">
                    Education
                  </option>
                  <option value="real-estate" className="bg-[#111914] text-white">
                    Real Estate
                  </option>
                  <option value="other" className="bg-[#111914] text-white">
                    Other
                  </option>
                </select>
                <ChevronDown size={16} className="text-gray-500 shrink-0 pointer-events-none" />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-[11px] text-gray-300 capitalize mb-1.5 block font-medium">
                Location
              </label>
              <div className="relative flex items-center h-12 bg-black/40 border border-white/10 rounded-lg transition-all duration-300 focus-within:border-[#D4FF00] focus-within:ring-1 focus-within:ring-[#D4FF00]/50 px-4">
                <select
                  className="flex-1 bg-transparent text-white text-sm appearance-none outline-none pr-3 cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#111914] text-gray-600">
                    Select location
                  </option>
                  <option value="us" className="bg-[#111914] text-white">
                    United States
                  </option>
                  <option value="uk" className="bg-[#111914] text-white">
                    United Kingdom
                  </option>
                  <option value="ca" className="bg-[#111914] text-white">
                    Canada
                  </option>
                  <option value="au" className="bg-[#111914] text-white">
                    Australia
                  </option>
                  <option value="de" className="bg-[#111914] text-white">
                    Germany
                  </option>
                  <option value="fr" className="bg-[#111914] text-white">
                    France
                  </option>
                  <option value="in" className="bg-[#111914] text-white">
                    India
                  </option>
                  <option value="sg" className="bg-[#111914] text-white">
                    Singapore
                  </option>
                  <option value="other" className="bg-[#111914] text-white">
                    Other
                  </option>
                </select>
                <ChevronDown size={16} className="text-gray-500 shrink-0 pointer-events-none" />
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              type="submit"
              className="w-full bg-[#D4FF00] hover:bg-[#bce600] text-black font-bold h-12 rounded-lg flex justify-center items-center gap-2 mt-12 transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(212,255,0,0.3)]"
            >
              Launch workspace
              <ArrowRight size={16} />
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}
