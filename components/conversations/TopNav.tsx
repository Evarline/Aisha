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
         <h1 className="text-[20px] md:text-[24px] text-[#001407] font-medium tracking-tight truncate min-w-0 font-['Roboto']">{title}</h1>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6 justify-end shrink-0">
        <button 
          onClick={onNotificationClick}
          className="md:hidden text-sm font-semibold text-[#001407] hover:text-[#001407]/70 transition-colors px-2 py-1 rounded-lg hover:bg-gray-100"
        >
          Live Analytics
        </button>
        <button className="hidden md:flex relative rounded-lg p-2 transition-colors hover:bg-gray-100">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5313 16.4969C19.3438 16.1344 18.75 14.4031 18.75 11C18.75 9.00544 18.0597 7.09879 16.8252 5.66523C15.5906 4.23166 13.8579 3.34375 12 3.34375C10.1421 3.34375 8.40938 4.23166 7.17481 5.66523C5.94024 7.09879 5.25 9.00544 5.25 11C5.25 14.4094 4.65625 16.1406 4.46875 16.5031C4.36328 16.709 4.31445 16.9376 4.3256 17.1675C4.33676 17.3975 4.41764 17.6193 4.55872 17.809C4.6998 17.9987 4.89503 18.1493 5.11719 18.2457C5.33934 18.342 5.58301 18.3809 5.82812 18.3594H9.45469C9.63281 19.2344 10.1328 20.0328 10.8328 20.6204C11.5328 21.208 12.4078 21.5438 13.3125 21.5438C14.2172 21.5438 15.0922 21.208 15.7922 20.6204C16.4922 20.0328 16.9922 19.2344 17.1703 18.3594H18.1875C18.4316 18.3809 18.6752 18.342 18.8961 18.2457C19.1172 18.1493 19.3124 17.9987 19.4535 17.809C19.5946 17.6193 19.6755 17.3975 19.6866 17.1675C19.6978 16.9376 19.6489 16.709 19.5434 16.5031C19.5376 16.491 19.5313 16.4969 19.5313 16.4969ZM13.3125 19.8438C12.8266 19.8438 12.3523 19.6938 11.9774 19.4142C11.6024 19.1346 11.3437 18.7458 11.2344 18.3125H15.3906C15.2812 18.7458 15.0225 19.1346 14.6475 19.4142C14.2726 19.6938 13.7984 19.8438 13.3125 19.8438ZM5.25 17.6594C5.98438 16.2281 6.75 13.1938 6.75 11C6.75 9.2054 7.43393 7.48565 8.5936 6.2753C9.75326 5.06496 11.3325 4.34375 12 4.34375C12.6675 4.34375 14.2467 5.06496 15.4064 6.2753C16.5661 7.48565 17.25 9.2054 17.25 11C17.25 13.2031 18.0156 16.2281 18.75 17.6594H5.25Z" fill="#001407"/>
          </svg>
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500" />
        </button>
        <div className="w-[36px] h-[36px] rounded-full overflow-hidden flex items-center justify-center shrink-0 transition-transform duration-300 ease-out hover:-translate-y-1 hidden md:flex">
          <img src="/Icons/Vector(2).svg" alt="User" className="w-[28px] h-[28px] object-contain"
               style={{ filter: 'brightness(0)' }}
               onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-black/20"></div>' }} />
        </div>
      </div>
    </div>
  );
}
