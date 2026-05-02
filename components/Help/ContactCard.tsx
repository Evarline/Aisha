"use client";

import { MessageCircle, Mail } from "lucide-react";
import { supportEmail } from "@/lib/mock/helpData";

export function ContactCard() {
  const handleWhatsAppClick = () => {
    // Open WhatsApp - can be replaced with actual WhatsApp Business API link
    window.open("https://wa.me/message/support", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${supportEmail}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Live Support Card */}
      <div className="relative group rounded-xl p-8 bg-[#001407] text-white overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6 text-[#D2FF00]" />
            <h3 className="text-xl font-bold text-white">Live Support</h3>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-8 flex-1">
            Chat with our support team instantly via WhatsApp. Get answers to your questions in real-time and receive personalized assistance.
          </p>

          {/* Button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#D2FF00] text-[#001407] font-bold py-3.5 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group/btn"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Open WhatsApp Chat</span>
          </button>

          {/* Availability Badge */}
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Available 24/7</span>
          </div>
        </div>
      </div>

      {/* Email Support Card */}
      <div className="relative group rounded-xl p-8 bg-[#001407] text-white overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-[#D2FF00]" />
            <h3 className="text-xl font-bold text-white">Email Us</h3>
          </div>

          {/* Subtitle */}
          <p className="text-sm text-gray-400 mb-4">Typical response in 1 hour</p>

          {/* Email Address */}
          <div className="flex-1 flex items-center justify-center py-8">
            <button
              onClick={handleEmailClick}
              className="text-3xl font-bold text-[#D2FF00] hover:text-[#D2FF00]/80 transition-colors duration-200 break-all text-center"
            >
              {supportEmail}
            </button>
          </div>

          {/* CTA */}
          <button
            onClick={handleEmailClick}
            className="w-full bg-[#D2FF00] text-[#001407] font-bold py-3.5 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
