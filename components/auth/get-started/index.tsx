"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function GetStarted() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding");
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#020A05] text-white font-sans">

      {/* ── LEFT COLUMN: Brand — desktop only ── */}
      <div
        className="hidden lg:flex relative flex-col justify-center p-12 lg:p-24 border-r-[3px] border-[#D4FF00]"
        style={{ background: "radial-gradient(ellipse at top left, rgba(20,83,45,0.30) 0%, #020A05 55%, #020A05 100%)" }}
      >
        <div className="absolute top-8 left-12 lg:top-8 lg:left-24">
          <span className="text-4xl lg:text-5xl font-bold tracking-tight">
            Aisha <span style={{ color: "#D4FF00" }}>AI</span>
          </span>
        </div>

        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">Aisha: Business&nbsp;evolved</h1>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-1" style={{ color: "#D4FF00" }}>Business: Supercharged</h1>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
            Join thousands of enterprises using Aisha for intelligent workflow automation.
          </p>
        </div>
      </div>

      {/* ── RIGHT COLUMN: Form ── */}
      <div className="relative flex items-center justify-center p-5 pt-20 sm:p-8 sm:pt-20 lg:p-12 min-h-screen lg:pt-12">

        {/* Top-left logo — mobile only */}
        <div className="absolute top-6 left-6 lg:hidden">
          <span className="text-3xl font-bold tracking-tight">
            Aisha <span style={{ color: "#D4FF00" }}>AI</span>
          </span>
        </div>

        <div
          className="w-full max-w-md rounded-2xl border border-gray-600 p-6 sm:p-8"
          style={{ background: "rgba(42,51,46,0.80)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Create Account</h2>

          <form noValidate onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-4 sm:gap-5">

            <div>
              <label className="block text-xs text-gray-300 uppercase tracking-wider mb-2">Full Name</label>
              <div className="flex items-center h-12 rounded-lg border border-gray-500 bg-black/30 px-4">
                <input type="text" placeholder="John Doe" autoComplete="off" className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none pr-3" />
                <Image src="/Icons/UserCircle.svg" alt="user icon" width={20} height={20} className="opacity-60 shrink-0" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-300 uppercase tracking-wider mb-2">Work Email</label>
              <div className="flex items-center h-12 rounded-lg border border-gray-500 bg-black/30 px-4">
                <input type="email" placeholder="john@company.com" autoComplete="off" className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none pr-3" />
                <Image src="/Icons/EnvelopeOpen.svg" alt="email icon" width={20} height={20} className="opacity-60 shrink-0" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-300 uppercase tracking-wider mb-2">Password</label>
              <div className="flex items-center h-12 rounded-lg border border-gray-500 bg-black/30 px-4">
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" autoComplete="new-password" className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none pr-3" />
                <button type="button" onClick={() => setShowPassword((v) => !v)} className="shrink-0 opacity-60 hover:opacity-100 transition-opacity" aria-label="Toggle password visibility">
                  <Image src="/Icons/Password.svg" alt="toggle password" width={20} height={20} />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-300 uppercase tracking-wider mb-2">Confirm Password</label>
              <div className="flex items-center h-12 rounded-lg border border-gray-500 bg-black/30 px-4">
                <input type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" autoComplete="new-password" className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none pr-3" />
                <button type="button" onClick={() => setShowConfirmPassword((v) => !v)} className="shrink-0 opacity-60 hover:opacity-100 transition-opacity" aria-label="Toggle confirm password visibility">
                  <Image src="/Icons/Password.svg" alt="toggle password" width={20} height={20} />
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer mt-1">
              <div className="relative mt-0.5 shrink-0">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="sr-only" />
                <div
                  className="w-4 h-4 rounded border border-gray-500 flex items-center justify-center transition-colors"
                  style={agreed ? { backgroundColor: "#D4FF00", borderColor: "#D4FF00" } : {}}
                >
                  {agreed && (
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 12 12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-400 leading-snug">
                I agree with the{" "}
                <a href="#" className="underline" style={{ color: "#D4FF00" }}>Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="underline" style={{ color: "#D4FF00" }}>Privacy Policy</a>
              </span>
            </label>

            <button type="submit" className="mt-2 w-full h-12 rounded-lg flex items-center justify-center gap-2 font-bold text-black text-sm tracking-widest bg-[#D4FF00] hover:bg-[#bce600] transition-colors">
              CONTINUE WITH AISHA
              <Image src="/Icons/ArrowRight.svg" alt="arrow right" width={18} height={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-600" />
              <span className="text-gray-400 text-sm whitespace-nowrap">or continue with</span>
              <div className="flex-1 h-px bg-gray-600" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex flex-col items-center justify-center gap-1.5 h-14 rounded-lg border border-gray-500 bg-transparent hover:bg-white/5 transition-colors">
                <Image src="/Icons/GoogleLogo.svg" alt="Google" width={20} height={20} />
                <span className="text-[10px] text-gray-400">Sign in with Google</span>
              </button>
              <button type="button" className="flex flex-col items-center justify-center gap-1.5 h-14 rounded-lg border border-gray-500 bg-transparent hover:bg-white/5 transition-colors">
                <Image src="/Images/ms-symbollockup_mssymbol_19 1.png" alt="Microsoft" width={20} height={20} />
                <span className="text-[10px] text-gray-400">Sign in with Microsoft</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold" style={{ color: "#D4FF00" }}>Login</Link>
            </p>

          </form>
        </div>
      </div>
    </main>
  );
}
