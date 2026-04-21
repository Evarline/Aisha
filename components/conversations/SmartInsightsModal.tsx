"use client";

import type { Chat } from "./data";

interface SmartInsightsModalProps {
  currentChat?: Chat;
  isOpen: boolean;
  onClose: () => void;
}

export function SmartInsightsModal({ currentChat, isOpen, onClose }: SmartInsightsModalProps) {
  if (!isOpen) return null;

  // Determine VIP insight
  const getVipInsight = () => {
    if (currentChat?.badge === "VIP") {
      return `${currentChat.name} is a VIP with strong buying signals`;
    }
    return "Jane Doe is a VIP with strong buying signals";
  };

  // Determine frustration insight
  const getFrustrationInsight = () => {
    if (currentChat && currentChat.id === 4) {
      return "Customer David Kipchoge seems frustrated.";
    }
    if (currentChat && currentChat.messages.some(msg => 
      msg.sender === "user" && (msg.text.toLowerCase().includes("frustrated") || msg.text.toLowerCase().includes("ridiculous") || msg.text.toLowerCase().includes("wrong"))
    )) {
      return `Customer ${currentChat.name} seems frustrated.`;
    }
    return "Customer David Kipchoge seems frustrated.";
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end md:items-center md:justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-t-2xl md:rounded-2xl w-full md:max-w-2xl md:max-h-[80vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200/60 px-4 md:px-6 py-4 flex items-center justify-between">
          <h2 className="text-[18px] md:text-[20px] font-medium text-[#001407] font-['Inter']">
            Smart Insights
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-[24px] leading-none"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-4 md:px-6 py-4 flex flex-col gap-4">
          {/* Metrics Cards */}
          <div className="space-y-3">
            <div className="bg-[#001407] rounded-[12px] w-full min-h-[64px] flex flex-col items-center justify-center gap-1 py-3 px-3 shadow-sm">
              <span className="text-[#D2FF00] text-[12px] font-['Roboto'] font-normal text-center leading-tight">Messages handled</span>
              <span className="text-[#D2FF00] text-[18px] font-bold font-['Inter'] text-center leading-none">30</span>
            </div>

            <div className="bg-[#001407] rounded-[12px] w-full min-h-[64px] flex flex-col items-center justify-center gap-1 py-3 px-3 shadow-sm">
              <span className="text-[#D2FF00] text-[12px] font-['Roboto'] font-normal text-center leading-tight">Customer satisfaction</span>
              <span className="text-[#D2FF00] text-[18px] font-bold font-['Inter'] text-center leading-none">4.9/5.0</span>
            </div>

            <div className="bg-[#001407] rounded-[12px] w-full min-h-[64px] flex flex-col items-center justify-center gap-1 py-3 px-3 shadow-sm">
              <span className="text-[#D2FF00] text-[12px] font-['Roboto'] font-normal text-center leading-tight">Avg response time</span>
              <span className="text-[#D2FF00] text-[18px] font-bold font-['Inter'] text-center leading-none">1.2sec</span>
            </div>

            <div className="bg-[#001407] rounded-[12px] w-full min-h-[64px] flex flex-col items-center justify-center gap-1 py-3 px-3 shadow-sm">
              <span className="text-[#D2FF00] text-[12px] font-['Roboto'] font-normal text-center leading-tight">Today's revenue</span>
              <span className="text-[#D2FF00] text-[18px] font-bold font-['Inter'] text-center leading-none">KES 23,750</span>
            </div>
          </div>

          {/* Smart Insights */}
          <div className="border-t border-gray-200/60 pt-4">
            <h3 className="text-[14px] text-[#001407] font-medium font-['Inter'] mb-3">Actionable Insights</h3>
            
            <div className="space-y-2">
              {/* VIP Insight */}
              <div className="w-full flex items-start gap-2 justify-between bg-gray-50 p-3 rounded-lg border border-gray-100 hover:bg-gray-100/50 transition-colors">
                <p className="text-[12px] text-gray-700 font-['Roboto'] flex-1 leading-snug">{getVipInsight()}</p>
                <div className="bg-[#001407] shadow-sm rounded-md shrink-0 flex justify-center items-center h-[20px] px-2">
                  <span className="text-[#D2FF00] text-[10px] font-['Roboto'] font-medium text-center">VIP</span>
                </div>
              </div>

              {/* Frustration Insight */}
              <div className="w-full flex items-start gap-2 justify-between bg-red-50/30 p-3 rounded-lg border border-red-100 hover:bg-red-100/30 transition-colors">
                <p className="text-[12px] text-gray-700 font-['Roboto'] flex-1 flex flex-col leading-snug">
                  <span>{getFrustrationInsight()}</span>
                  <span className="text-[#E94235] font-medium mt-1 text-[11px]">Human agent recommended.</span>
                </p>
                <div className="w-[20px] h-[20px] shrink-0 relative flex justify-center items-center mt-0.5">
                  <img src="/Icons/Siren.svg" alt="Alert" className="w-[16px] h-[16px]"
                       style={{ filter: "brightness(0) saturate(100%) invert(43%) sepia(85%) saturate(3018%) hue-rotate(342deg) brightness(98%) contrast(97%)" }}
                       onError={(e) => { e.currentTarget.style.display='none'; }} />
                </div>
              </div>
            </div>
          </div>

          {/* Close Button - Mobile */}
          <button
            onClick={onClose}
            className="md:hidden mt-4 w-full py-3 bg-[#001407] text-[#D2FF00] rounded-lg font-medium font-['Inter'] transition-all hover:opacity-90"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
