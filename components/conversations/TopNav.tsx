"use client";

interface TopNavProps {
  title?: string;
}

export function TopNav({ title = "Conversation" }: TopNavProps) {
  return (
    <div className="py-2 sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200/50 shadow-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 select-none transition-all">
      <div className="flex justify-start items-center gap-3 min-w-0">
         <button className="lg:hidden p-2 -ml-2 text-[#001407] hover:bg-gray-100 rounded-lg transition-colors">
            <img src="/Icons/List.svg" alt="Menu" className="w-[24px] h-[24px]" style={{ filter: 'brightness(0)' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-5 h-[2px] bg-black mb-1"></div><div class="w-5 h-[2px] bg-black mb-1"></div><div class="w-5 h-[2px] bg-black"></div>'; }} />
         </button>
         <h1 className="text-[20px] md:text-[24px] text-[#001407] font-medium tracking-tight truncate min-w-0 font-['Roboto']">{title}</h1>
      </div>
      
      <div className="flex justify-center flex-1 px-4 lg:px-8 min-w-0">
         <div className="flex bg-white ring-1 ring-gray-200 shadow-inner rounded-full items-center px-4 py-2 w-full max-w-xl transition-all hover:shadow-md focus-within:shadow-md focus-within:ring-gray-300 min-w-0">
            <input type="text" placeholder="Search" className="text-[14px] text-black/70 flex-1 font-['Inter'] font-normal bg-transparent outline-none w-full min-w-0" />
            <img src="/Icons/MagnifyingGlass.svg" alt="Search" className="w-[20px] h-[20px] shrink-0"
                  style={{ filter: 'brightness(0)' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} />
         </div>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6 justify-end shrink-0">
        <button className="hidden text-[13px] font-medium text-[#001407] hover:text-[#001407]/70 transition-colors px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
          View Analytics
        </button>
        <div className="relative cursor-pointer w-[40px] h-[40px] flex items-center justify-center shrink-0 transition-transform duration-300 ease-out hover:-translate-y-1">
          <img src="/Icons/Bell.svg" alt="Notifications" className="w-[24px] h-[24px] object-contain"
               style={{ filter: 'brightness(0)' }}
               onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <div className="absolute top-[8px] right-[8px] w-[8px] h-[8px] bg-[#D2FF00] rounded-full z-10 animate-pulse"></div>
        </div>
        <div className="w-[36px] h-[36px] rounded-full overflow-hidden flex items-center justify-center shrink-0 transition-transform duration-300 ease-out hover:-translate-y-1">
          <img src="/Icons/UserCircle.svg" alt="User" className="w-[28px] h-[28px] object-contain"
               style={{ filter: 'brightness(0)' }}
               onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-black/20"></div>' }} />
        </div>
      </div>
    </div>
  );
}
