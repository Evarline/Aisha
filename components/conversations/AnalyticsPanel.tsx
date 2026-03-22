"use client";

export function AnalyticsPanel() {
  return (
    <div className="hidden lg:flex lg:w-[20%] lg:min-w-[240px] h-full bg-[#FFFFFF] border-l border-gray-200/60 flex-col shrink-0 transition-all duration-300 ease-in-out">
         {/* Header */}
         <div className="w-full h-[56px] border-b border-[#E5E5E5] flex flex-col justify-center px-5 shrink-0 bg-[#FFFFFF]">
            <h2 className="text-[16px] text-[#001407] font-medium font-['Inter'] leading-tight">Live Analytics</h2>
            <p className="text-[11px] text-gray-500 font-normal font-['Roboto'] leading-tight">Real time performance</p>
         </div>

         <div className="flex-1 w-full flex flex-col gap-3 px-5 py-4 overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            {/* Metrics Cards */}
            <div className="bg-[#001407] rounded-[12px] w-full min-h-[64px] flex flex-col items-center justify-center gap-1 py-3 px-3 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
               <span className="text-[#D2FF00] text-[12px] font-['Roboto'] font-normal text-center leading-tight">Messages handled</span>
               <span className="text-white text-[15px] font-medium font-['Inter'] text-center leading-none">30</span>
            </div>

            <div className="bg-[#001407] rounded-[12px] w-full min-h-[64px] flex flex-col items-center justify-center gap-1 py-3 px-3 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
               <span className="text-[#D2FF00] text-[12px] font-['Roboto'] font-normal text-center leading-tight">Customer satisfaction</span>
               <span className="text-white text-[15px] font-medium font-['Inter'] text-center leading-none">4.9/5.0</span>
            </div>

            <div className="bg-[#001407] rounded-[12px] w-full min-h-[64px] flex flex-col items-center justify-center gap-1 py-3 px-3 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
               <span className="text-[#D2FF00] text-[12px] font-['Roboto'] font-normal text-center leading-tight">Avg response time</span>
               <span className="text-white text-[15px] font-medium font-['Inter'] text-center leading-none">1.2sec</span>
            </div>

            <div className="bg-[#001407] rounded-[12px] w-full min-h-[64px] flex flex-col items-center justify-center gap-1 py-3 px-3 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
               <span className="text-[#D2FF00] text-[12px] font-['Roboto'] font-normal text-center leading-tight">Today's revenue</span>
               <span className="text-white text-[16px] font-semibold font-['Inter'] text-center leading-none">KES 23,750</span>
            </div>

            {/* Smart Insights Panel */}
            <div className="w-full flex flex-col pt-3 gap-3 border-t border-gray-200/60 mt-2">
               <div className="w-full flex items-center justify-start">
                  <h3 className="text-[14px] text-[#001407] font-medium font-['Inter']">Smart Insights</h3>
               </div>
               
               <div className="w-full flex items-start gap-2 justify-between bg-gray-50/50 p-2 rounded-lg border border-gray-100">
                  <p className="text-[12px] text-gray-600 font-['Roboto'] flex-1 leading-snug">Jane Doe is showing strong buying signals</p>
                  <div className="bg-[#001407] shadow-sm rounded-md shrink-0 flex justify-center items-center h-[20px] px-2">
                     <span className="text-[#D2FF00] text-[10px] font-['Roboto'] font-medium text-center">VIP</span>
                  </div>
               </div>

               <div className="w-full flex items-start gap-2 justify-between bg-red-50/30 p-2 rounded-lg border border-red-50">
                  <p className="text-[12px] text-gray-600 font-['Roboto'] flex-1 flex flex-col leading-snug">
                    <span>Aisha AI is rude to customer Sarah Chen.</span>
                    <span className="text-[#E94235] font-medium mt-1">Human agent needed.</span>
                  </p>
                 <div className="w-[20px] h-[20px] shrink-0 relative flex justify-center items-center mt-0.5">
                    <img src="/Icons/Siren.svg" alt="Alert" className="w-[16px] h-[16px]"
                         style={{ filter: "brightness(0) saturate(100%) invert(43%) sepia(85%) saturate(3018%) hue-rotate(342deg) brightness(98%) contrast(97%)" }}
                         onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerHTML += '<div class="w-full h-full bg-[#E94235] rounded-full"></div>' }} />
                 </div>
               </div>
            </div>
         </div>
    </div>
  );
}
