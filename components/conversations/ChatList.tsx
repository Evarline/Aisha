"use client";

import { useState, useEffect, useRef } from "react";
import type { Chat } from "./data";

interface ChatListProps {
  chats: Chat[];
  onSelectChat?: (chatId: number) => void;
  selectedChatId?: number | null;
}

export function ChatList({ chats, onSelectChat, selectedChatId }: ChatListProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { name: "All", count: 19 },
    { name: "Active", count: 8 },
    { name: "Pending", count: 10 },
    { name: "Urgent", count: 1 },
  ];

  const filteredChats = activeFilter === "All" 
    ? chats 
    : chats.filter((chat) => chat.status === activeFilter);

  // Reset scroll to top when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeFilter]);

  return (
    <div className="w-full md:w-[320px] md:min-w-[320px] h-full bg-white border-r border-gray-200/60 flex flex-col shrink-0 overflow-hidden transition-all duration-300 ease-in-out">
      {/* Header Container */}
      <div className="w-full shrink-0 flex items-center justify-start px-4 h-[56px] border-b border-gray-200/60 bg-white">
        <h2 className="text-[16px] font-medium text-[#001407] font-['Inter']">Manage Customer Chats</h2>
      </div>
      
      {/* Search Bar - WhatsApp Style */}
      <div className="w-full shrink-0 px-4 py-2 bg-white">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-0 border-none"
        />
      </div>
      
      {/* Filter Pills - WhatsApp Style */}
      <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveFilter(tab.name)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeFilter === tab.name 
                ? "bg-[#001407] text-[#D2FF00]" 
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>


      {/* Chat List Scrollable Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto w-full flex flex-col items-center bg-white [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <div className="flex flex-col w-full">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <div 
                key={chat.id} 
                onClick={() => onSelectChat?.(chat.id)}
                className="flex items-center w-full px-4 py-2 gap-3 cursor-pointer active:bg-gray-50 [-webkit-tap-highlight-color:transparent]"
              >
                {/* Avatar - Left Column */}
                <div className="w-12 h-12 rounded-full flex-shrink-0 bg-[#001407] overflow-hidden flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{chat.initial}</span>
                </div>

                {/* Content Wrapper - Right Column (HAS THE BORDER) */}
                <div className="flex-1 min-w-0 flex flex-col justify-center border-b border-gray-100 py-2">
                  {/* Top Line: Name & Time */}
                  <div className="flex justify-between items-center w-full mb-0.5">
                    <h3 className="font-semibold text-gray-900 text-base truncate pr-2">{chat.name}</h3>
                    <span className="text-xs text-gray-500 flex-shrink-0">{chat.time}</span>
                  </div>

                  {/* Bottom Line: Message & Status/Badge */}
                  <div className="flex justify-between items-center w-full">
                    <p className="text-sm text-gray-500 truncate pr-2 flex-1 min-w-0">{chat.sub}</p>
                    <div className="flex-shrink-0 flex items-center justify-end">
                      {chat.status === "Urgent" && (
                        <div className="bg-[#E94235] rounded px-1.5 py-0.5">
                          <span className="text-white text-xs font-medium">URGENT</span>
                        </div>
                      )}
                      {chat.status && chat.status !== "Urgent" && (
                        <span className="text-xs text-gray-500 font-medium">{chat.status}</span>
                      )}
                      {chat.badge && (
                        <div className="bg-[#001407] rounded px-1.5 py-0.5 ml-1">
                          <span className="text-[#D2FF00] text-xs font-medium">{chat.badge}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-400 text-sm">No chats yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
