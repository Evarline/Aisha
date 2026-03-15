"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#020A05] text-white font-sans antialiased">

      {/* ── LEFT COLUMN: Brand — desktop only ── */}
      <div
        className="hidden lg:flex flex-col justify-center p-12 lg:p-24 relative border-r-[2px] border-[#D4FF00]/90"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(0,77,26,0.25) 0%, #020A05 50%, #020A05 100%)",
          boxShadow: "inset -2px 0 20px rgba(212,255,0,0.08)",
        }}
      >
        {/* Logo - top left */}
        <div className="absolute top-8 left-12 lg:top-8 lg:left-24">
          <span className="text-4xl lg:text-5xl font-bold tracking-tight">
            Aisha <span style={{ color: "#D4FF00" }}>AI</span>
          </span>
        </div>

        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter">
            Aisha: Business&nbsp;evolved
          </h1>
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter mt-1" style={{ color: "#D4FF00" }}>
            Business:&nbsp;Supercharged
          </h1>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
            Join thousands of enterprises using Aisha for intelligent workflow automation.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 w-80 h-64 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom left, rgba(0,77,26,0.18) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="flex items-center justify-center p-5 sm:p-8 lg:p-12 relative min-h-screen lg:min-h-0 pt-20 lg:pt-0">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Mobile logo - top left */}
        <div className="absolute top-6 left-6 lg:hidden">
          <span className="text-3xl font-bold tracking-tight">
            Aisha <span style={{ color: "#D4FF00" }}>AI</span>
          </span>
        </div>

        <div
          className="relative w-full max-w-md rounded-2xl border border-white/5 p-6 sm:p-8 lg:p-10 shadow-2xl"
          style={{ background: "rgba(17,25,20,0.70)", backdropFilter: "blur(24px)" }}
        >

          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Welcome back!</h2>
            <p className="text-sm text-gray-400">Enter your details to access your workspace</p>
          </div>

          <form noValidate className="flex flex-col gap-4 sm:gap-5">

            <div>
              <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-semibold">Work Email</label>
              <div className="flex items-center h-12 bg-black/40 border border-white/10 rounded-lg transition-all duration-300 focus-within:border-[#D4FF00] focus-within:ring-1 focus-within:ring-[#D4FF00]/50 px-4">
                <input type="email" placeholder="john@company.com" className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 outline-none pr-3" />
                <Mail size={16} className="text-gray-600 shrink-0" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-semibold">Password</label>
              <div className="flex items-center h-12 bg-black/40 border border-white/10 rounded-lg transition-all duration-300 focus-within:border-[#D4FF00] focus-within:ring-1 focus-within:ring-[#D4FF00]/50 px-4">
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 outline-none pr-3" />
                <button type="button" onClick={() => setShowPassword((v) => !v)} className="text-gray-600 hover:text-gray-300 transition-colors shrink-0" aria-label="Toggle password visibility">
                  {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div
                  onClick={() => setRememberMe((v) => !v)}
                  className="w-4 h-4 rounded border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
                  style={rememberMe ? { backgroundColor: "#D4FF00", borderColor: "#D4FF00" } : {}}
                >
                  {rememberMe && (
                    <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 12 12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors select-none">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-white transition-colors">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-lg flex items-center justify-center gap-2 font-bold text-black text-sm tracking-widest mt-2 transition-all duration-200 hover:-translate-y-0.5 bg-[#D4FF00] hover:bg-[#bce600] hover:shadow-[0_4px_25px_rgba(212,255,0,0.30)]"
            >
              SIGN IN TO AISHA
              <ArrowRight size={16} />
            </button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-gray-500 uppercase tracking-widest whitespace-nowrap">or continue with</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex flex-col items-center justify-center py-3 gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <Image src="/Icons/GoogleLogo.svg" alt="Google" width={20} height={20} />
                <span className="text-xs font-medium text-gray-300">Google</span>
                <span className="text-[10px] text-gray-500 text-center leading-tight">Google Workspace</span>
              </button>
              <button type="button" className="flex flex-col items-center justify-center py-3 gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <Image src="/Images/ms-symbollockup_mssymbol_19 1.png" alt="Microsoft" width={20} height={20} />
                <span className="text-xs font-medium text-gray-300">Microsoft</span>
                <span className="text-[10px] text-gray-500 text-center leading-tight">Microsoft 365</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-500">
              New to Aisha?{" "}
              <Link href="/get-started" className="font-semibold hover:underline" style={{ color: "#D4FF00" }}>Create account</Link>
            </p>

          </form>
        </div>
      </div>
    </main>
  );
}
