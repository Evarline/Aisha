"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/", sectionId: "" },
  { label: "Features", href: "#features", sectionId: "features" },
  { label: "Testimonials", href: "#about", sectionId: "about" },
  { label: "Pricing", href: "#pricing", sectionId: "pricing" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Track which section is in view ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);

    const scrollPos = window.scrollY + 140;

    const sections = navLinks
      .filter((l) => l.sectionId)
      .map((l) => ({
        id: l.sectionId,
        el: document.getElementById(l.sectionId),
      }))
      .filter((s) => s.el)
      // Sort by actual DOM position top-to-bottom so iteration is correct
      .map((s) => ({
        ...s,
        top: s.el!.getBoundingClientRect().top + window.scrollY,
      }))
      .sort((a, b) => a.top - b.top);

    // Walk from bottom section upward; first one whose top <= scrollPos wins
    let active = "";
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].top <= scrollPos) {
        active = sections[i].id;
        break;
      }
    }
    setActiveSection(active);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── Smooth scroll to section ── */
  const scrollToSection = (sectionId: string) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* ── Close mobile menu on resize ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex h-[70px] md:h-[90px] w-full items-center justify-center transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f5f5]/95 backdrop-blur-md shadow-[0px_4px_20px_-2px_rgba(0,20,7,0.08)]"
          : "bg-[#f5f5f5] shadow-[0px_4px_4px_0px_rgba(0,20,7,0.02)]"
      } border-b-2 border-[rgba(245,245,245,0.02)]`}
    >
      <div className="flex w-full max-w-[1360px] items-center justify-between px-5 md:px-[40px]">
        {/* ── Logo — clickable to home ── */}
        <Link href="/" className="flex items-center no-underline">
          <span className="text-[28px] md:text-[43.689px] font-bold font-[family-name:var(--font-nunito)] tracking-tight text-[#001407] transition-opacity hover:opacity-80">
            Aisha AI
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center gap-8 text-[18px] lg:text-[20px] font-normal font-[family-name:var(--font-inter)] text-[#001407]">
          {navLinks.map((link) => {
            const isActive =
              link.sectionId === activeSection ||
              (link.sectionId === "" && activeSection === "");
            return (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.sectionId)}
                className="relative py-3 hover:opacity-80 transition-opacity group cursor-pointer bg-transparent border-none"
              >
                {/* Top indicator line – Deep Forest with Electric Lime stroke */}
                <span
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isActive ? "opacity-100 bg-[#051109] shadow-[0_0_0_1px_#D4FF00]" : "opacity-0 bg-transparent"
                  }`}
                />
                {/* Bottom indicator line – Deep Forest with Electric Lime stroke */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isActive ? "opacity-100 bg-[#051109] shadow-[0_0_0_1px_#D4FF00]" : "opacity-0 bg-transparent"
                  }`}
                />
                <span
                  className={`transition-colors duration-200 text-[18px] lg:text-[20px] font-[family-name:var(--font-inter)] ${
                    isActive ? "text-[#051109] font-medium" : "text-[#001407]"
                  }`}
                >
                  {link.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* ── CTA Buttons (Desktop) ── */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="flex items-center justify-center px-5 py-3 text-[20px] lg:text-[24px] font-medium font-[family-name:var(--font-roboto)] text-[#001407] hover:bg-black/5 rounded-full transition-colors"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Login
          </Link>
          <button className="flex h-[44px] lg:h-[50px] w-[160px] lg:w-[200px] shrink-0 items-center justify-center overflow-clip rounded-[24px] bg-[#001407] px-6 lg:px-[38px] py-[15px] hover:opacity-90 transition-opacity cursor-pointer">
            <span
              className="font-medium leading-normal text-white text-[18px] lg:text-[24px] font-[family-name:var(--font-roboto)]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Get started
            </span>
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-[6px] cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-[#001407] rounded-full origin-center"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={
              mobileOpen
                ? { opacity: 0, scaleX: 0 }
                : { opacity: 1, scaleX: 1 }
            }
            className="block w-6 h-[2px] bg-[#001407] rounded-full origin-center"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
            }
            className="block w-6 h-[2px] bg-[#001407] rounded-full origin-center"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-[70px] left-0 right-0 bg-[#f5f5f5]/98 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,20,7,0.15)] border-t border-[rgba(0,20,7,0.05)] md:hidden"
          >
            <nav className="flex flex-col items-center gap-2 py-6 px-6">
              {navLinks.map((link, i) => {
                const isActive =
                  link.sectionId === activeSection ||
                  (link.sectionId === "" && activeSection === "");
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="w-full"
                  >
                    <button
                      onClick={() => { scrollToSection(link.sectionId); setMobileOpen(false); }}
                      className={`relative block w-full text-center py-3 text-[18px] font-[family-name:var(--font-inter)] rounded-xl transition-all duration-200 cursor-pointer bg-transparent border-none ${
                        isActive
                          ? "text-[#051109] font-semibold"
                          : "text-[#001407]/70 hover:bg-black/5"
                      }`}
                    >
                      {/* Top Deep Forest line with Electric Lime stroke */}
                      {isActive && (
                        <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#051109] shadow-[0_0_0_1px_#D4FF00]" />
                      )}
                      {/* Bottom Deep Forest line with Electric Lime stroke */}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#051109] shadow-[0_0_0_1px_#D4FF00]" />
                      )}
                      {link.label}
                    </button>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="flex flex-col items-center gap-3 pt-4 w-full"
              >
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-[18px] font-medium font-[family-name:var(--font-roboto)] text-[#001407] hover:opacity-70 transition-opacity"
                >
                  Login
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-full max-w-[280px] h-[48px] flex items-center justify-center rounded-[24px] bg-[#001407] hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <span className="font-medium text-white text-[18px] font-[family-name:var(--font-roboto)]">
                    Get started
                  </span>
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
