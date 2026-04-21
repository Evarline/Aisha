"use client";

import { useState } from "react";

interface TopNavProps {
  title?: string;
  onBackClick?: () => void;
  onNotificationClick?: () => void;
}

export function TopNav({ title = "Conversations", onBackClick, onNotificationClick }: TopNavProps) {
  return (
    <div className="py-2 sticky top-0 z-40 bg-white/70 backdrop-blur-lg border-b border-gray-200/50 shadow-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 select-none transition-all">
      <div className="flex justify-start items-center gap-3 min-w-0">
         {onBackClick && (
           <button 
             onClick={onBackClick}
             className="md:hidden p-2 -ml-2 text-[#001407] hover:bg-gray-100 rounded-lg transition-colors"
           >
             <span className="text-[18px]">← Back</span>
           </button>
         )}
         {!onBackClick && (
           <button className="md:hidden p-2 -ml-2 text-[#001407] hover:bg-gray-100 rounded-lg transition-colors">
             <img src="/Icons/List.svg" alt="Menu" className="w-[24px] h-[24px]" style={{ filter: 'brightness(0)' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-5 h-[2px] bg-black mb-1"></div><div class="w-5 h-[2px] bg-black mb-1"></div><div class="w-5 h-[2px] bg-black"></div>'; }} />
           </button>
         )}
         <h1 className="text-[20px] md:text-[24px] text-[#001407] font-medium tracking-tight truncate min-w-0 font-['Roboto']">{title}</h1>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6 justify-end shrink-0">
        <button 
          onClick={onNotificationClick}
          className="md:hidden text-sm font-semibold text-[#001407] hover:text-[#001407]/70 transition-colors px-2 py-1 rounded-lg hover:bg-gray-100"
        >
          Live Analytics
        </button>
        <div className="w-[36px] h-[36px] rounded-full overflow-hidden flex items-center justify-center shrink-0 transition-transform duration-300 ease-out hover:-translate-y-1 hidden md:flex">
          <img src="/Icons/UserCircle.svg" alt="User" className="w-[28px] h-[28px] object-contain"
               style={{ filter: 'brightness(0)' }}
               onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-black/20"></div>' }} />
        </div>
      </div>
    </div>
  );
}
