"use client";

export function ChatWindow() {
  return (
    <div className="hidden md:flex flex-1 min-w-[300px] h-full bg-[#FFFFFF] flex-col shrink-0 relative overflow-hidden transition-all duration-300 ease-in-out">
      {/* Top Header Group */}
      <div className="w-full flex flex-col shrink-0 border-b border-gray-200/60 bg-[#FFFFFF]">
         {/* Top Info Header */}
         <div className="bg-[#f7f6f2] w-full py-2 px-6 flex items-center justify-between border-b border-[#E5E5E5] h-[56px]">
               <div className="flex flex-col justify-center">
                  <h2 className="text-[16px] text-[#001407] font-['Inter'] font-medium">Select Chat</h2>
                  <div className="flex gap-1.5 items-center">
                     <div className="w-[6px] h-[6px] rounded-full bg-[#D2FF00]" />
                     <span className="text-[11px] text-gray-500 font-['Inter']">Choose Conversation from the left</span>
                  </div>
               </div>

               <div className="bg-white rounded-full ring-1 ring-gray-200 shadow-sm w-[180px] h-[36px] flex items-center p-1">
                  <div className="bg-[#001407] flex items-center justify-center rounded-full flex-1 h-full shadow-sm cursor-pointer">
                     <span className="text-[#D2FF00] font-['Inter'] text-[12px] font-medium">Assign to AI</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center h-full cursor-pointer hover:bg-gray-50 rounded-full transition-colors">
                     <span className="text-[#001407] font-['Inter'] text-[12px] font-medium">Take Over</span>
                  </div>
               </div>
         </div>

         {/* AI Banner */}
         <div className="w-full flex justify-center bg-[#FFFFFF] py-2">
            <div className="bg-[#f7f6f2] border border-gray-200/60 shadow-sm rounded-[16px] w-full mx-6 h-[48px] flex items-center gap-4 px-3">
               <div className="bg-[#FFFFFF] shadow-sm rounded-[12px] px-4 h-[36px] flex items-center justify-center">
                  <span className="text-[#001407] font-['Inter'] text-[12px] font-semibold tracking-wide">AI Mode</span>
               </div>
               <span className="text-gray-500 font-['Inter'] text-[12px] font-medium">AI is handling the conversation automatically</span>
            </div>
         </div>
      </div>
      
      {/* Scrollable Chat Area */}
      <div className="flex-1 w-full overflow-y-auto flex flex-col items-center bg-[#FFFFFF] p-6 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
         <div className="bg-[#f7f6f2] border border-gray-200/60 rounded-2xl w-full max-w-2xl h-full min-h-[300px] flex items-center justify-center p-6 shadow-sm">
            <div className="bg-[#FFFFFF] shadow-sm rounded-xl py-4 px-6 flex justify-center items-center">
                <span className="text-[12px] text-gray-500 font-['Roboto'] text-center max-w-[300px] leading-relaxed">
                   Start by selecting a conversation on the left. New WhatsApp chats will appear automatically when AI detects them.
                </span>
            </div>
         </div>
      </div>

      {/* Message Input Bottom Fixed */}
      <div className="w-full shrink-0 bg-white p-4 border-t border-gray-200/60 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] flex justify-center mt-auto">
         <div className="w-full max-w-2xl flex items-center">
            <div className="bg-[#FFFFFF] ring-1 ring-gray-200 shadow-sm rounded-[12px] w-full h-[90px] flex flex-col p-3 relative justify-between focus-within:ring-2 focus-within:ring-[#001407] transition-all">
               <textarea 
                  className="text-[13px] text-[#001407] font-medium font-['Roboto'] w-full bg-transparent resize-none outline-none placeholder:text-gray-400 placeholder:font-normal"
                  placeholder="Type your message..."
                  rows={2}
               ></textarea>
               
               <div className="flex w-full justify-between items-end">
                  <div className="flex gap-4 px-1 items-center">
                     <img src="/Icons/Plus.svg" className="w-[16px] h-[16px] cursor-pointer hover:opacity-70 transition-opacity" 
                          style={{ filter: "brightness(0) saturate(100%) invert(3%) sepia(34%) saturate(6007%) hue-rotate(130deg) brightness(84%) contrast(107%)" }} />
                     <img src="/Icons/SmileyWink.svg" className="w-[16px] h-[16px] cursor-pointer hover:opacity-70 transition-opacity"
                          style={{ filter: "brightness(0) saturate(100%) invert(3%) sepia(34%) saturate(6007%) hue-rotate(130deg) brightness(84%) contrast(107%)" }} />
                  </div>
                  
                  <div className="flex gap-4 items-center">
                     <img src="/Icons/Microphone.svg" className="w-[16px] h-[16px] cursor-pointer hover:opacity-70 transition-opacity"
                          style={{ filter: "brightness(0) saturate(100%) invert(3%) sepia(34%) saturate(6007%) hue-rotate(130deg) brightness(84%) contrast(107%)" }} />
                     <div className="w-[32px] h-[32px] bg-[#001407] rounded-full shadow-sm flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                        <img src="/Icons/ArrowCircleUp.svg" className="w-[18px] h-[18px]"
                             style={{ filter: "brightness(0) saturate(100%) invert(98%) sepia(85%) saturate(3018%) hue-rotate(342deg) brightness(98%) contrast(97%)" }} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
