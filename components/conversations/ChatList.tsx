"use client";

export function ChatList() {
  const tabs = [
    { name: "Active", count: 8, active: true },
    { name: "Pending", count: 10, active: false },
    { name: "Urgent", count: 1, active: false },
    { name: "VIP", count: 1, active: false },
  ];

  const chats = [
    { id: 1, initial: "JD", name: "Jane Doe", sub: "Waiting for the delivery", time: "10 mins ago", status: "Active" },
    { id: 2, initial: "SC", name: "Sarah Chen", sub: "Thank you for your help", time: "30 mins ago", status: "Pending" },
    { id: 3, initial: "JD", name: "Jane Doe", sub: "Waiting for the delivery", time: "1hr ago", badge: "VIP" },
    { id: 4, initial: "SE", name: "Sarah Chen", sub: "Time Sensitive delivery", time: "2 hrs ago", warning: true }
  ];

  return (
    <div className="w-full lg:w-[320px] lg:min-w-[320px] h-full bg-[#f7f6f2] border-r border-[#E5E5E5] flex flex-col shrink-0 overflow-hidden transition-all duration-300 ease-in-out">
      {/* Header Container */}
      <div className="w-full shrink-0 flex items-center justify-start px-5 h-[56px] border-b border-[#E5E5E5] bg-[#f7f6f2]">
        <h2 className="text-[16px] font-medium text-[#001407] font-['Inter']">Manage Customer Chats</h2>
      </div>
      
      {/* Tabs Container */}
      <div className="w-full shrink-0 bg-[#001407] h-[48px] flex items-center justify-between px-2">
        {tabs.map((tab) => (
            <div key={tab.name} className="flex flex-col items-center justify-center h-full cursor-pointer flex-1">
              <span className={`text-[12px] font-semibold font-['Inter'] leading-tight ${tab.active ? "text-[#D2FF00]" : "text-white/70"}`}>{tab.name}</span>
              <span className={`text-[11px] font-['Inter'] leading-tight text-white/50`}>{tab.count}</span>
            </div>
        ))}
      </div>

      {/* Chat List Scrollable Area */}
      <div className="flex-1 overflow-y-auto w-full flex flex-col items-center bg-[#f7f6f2] [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
         <div className="flex flex-col w-full">
             {chats.map((chat, idx) => (
               <div key={chat.id} className="flex flex-col justify-center items-center h-[68px] cursor-pointer hover:bg-white hover:shadow-sm transition-all duration-300 ease-out px-4 border-b border-gray-200/50 min-w-0">
                 <div className="flex gap-[12px] w-full items-center h-full min-w-0">
                    
                    {/* Avatar */}
                    <div className="w-[36px] h-[36px] flex items-center justify-center shrink-0 relative bg-[#001407] rounded-full">
                        <span className="text-white text-[13px] font-medium z-10 font-['Roboto']">{chat.initial}</span>
                    </div>
                        
                    {/* Content */}
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0 justify-center h-full">
                        <div className="flex items-center gap-2 w-full">
                            <h3 className="text-[14px] font-medium text-[#001407] font-['Roboto'] truncate">{chat.name}</h3>
                            {chat.id === 1 && <div className="w-[6px] h-[6px] bg-[#D2FF00] rounded-full shrink-0"></div>}
                            {chat.id === 4 && <div className="w-[6px] h-[6px] bg-[#E94235] rounded-full shrink-0"></div>}
                        </div>
                        <p className="text-xs text-gray-500 font-normal font-['Roboto'] w-full truncate">{chat.sub}</p>
                    </div>

                    {/* Metadata (Time/Status) */}
                    <div className="flex flex-col items-end justify-center h-full shrink-0">
                        <span className="text-[10px] text-gray-500 font-medium font-['Roboto'] whitespace-nowrap mb-1">{chat.time}</span>
                        <div className="flex items-center justify-end">
                           {chat.status && <span className="text-[10px] font-medium text-gray-500 font-['Roboto']">{chat.status}</span>}
                           {chat.badge && (
                             <div className="bg-[#001407] flex items-center justify-center rounded-[8px] px-2 py-0.5">
                                 <span className="text-[#D2FF00] text-[10px] font-medium font-['Roboto']">{chat.badge}</span>
                             </div>
                           )}
                           {chat.warning && (
                             <div className="w-[16px] h-[16px] flex items-center justify-center">
                                 <img src="/Icons/Warning.svg" alt="Warning" className="w-[14px] h-[14px]"
                                      style={{ filter: "brightness(0) saturate(100%) invert(43%) sepia(85%) saturate(3018%) hue-rotate(342deg) brightness(98%) contrast(97%)" }}
                                      onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML += '<div class=\"text-[#E94235] font-bold text-[12px]\">⚠️</div>' }} />
                             </div>
                           )}
                        </div>
                    </div>
                 </div>
               </div>
             ))}
         </div>
      </div>
    </div>
  );
}
