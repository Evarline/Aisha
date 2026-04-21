"use client";

import { useState } from "react";
import type { Chat } from "./data";

interface ChatListProps {
  chats: Chat[];
  onSelectChat?: (chatId: number) => void;
  selectedChatId?: number | null;
}

export function ChatList({ chats, onSelectChat, selectedChatId }: ChatListProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = [
    { name: "All", count: 19 },
    { name: "Active", count: 8 },
    { name: "Pending", count: 10 },
    { name: "Urgent", count: 1 },
  ];

  const filteredChats = activeFilter === "All" 
    ? chats 
    : chats.filter((chat) => chat.status === activeFilter);

  return (
    <div className="w-full md:w-[320px] md:min-w-[320px] h-full bg-white border-r border-gray-200/60 flex flex-col shrink-0 overflow-hidden transition-all duration-300 ease-in-out">
      {/* Header Container */}
      <div className="w-full shrink-0 flex items-center justify-start px-4 h-[56px] border-b border-gray-200/60 bg-white">
        <h2 className="text-[16px] font-medium text-[#001407] font-['Inter']">Manage Customer Chats</h2>
      </div>
      
      {/* Search Bar - Mobile: Prominent and Full Width */}
      <div className="w-full shrink-0 px-4 py-3 bg-white border-b border-gray-200/60">
        <div className="flex bg-gray-100 rounded-full items-center px-4 py-2.5 transition-all hover:ring-1 hover:ring-gray-300 focus-within:ring-1 focus-within:ring-gray-400">
          <input 
            type="text" 
            placeholder="Search chats..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-[14px] text-gray-900 flex-1 font-['Inter'] font-normal bg-transparent outline-none w-full"
          />
          <img 
            src="/Icons/MagnifyingGlass.svg" 
            alt="Search" 
            className="w-[18px] h-[18px] shrink-0"
            style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(0%) saturate(500%) hue-rotate(0deg) brightness(95%) contrast(90%)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
      </div>
      
      {/* Filter Tabs Container - Light Mode Pills with Horizontal Scroll */}
      <div className="w-full shrink-0 bg-white h-auto flex items-center px-4 py-3 border-b border-gray-200/60 gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveFilter(tab.name)}
            className={`flex flex-col items-center justify-center px-4 py-2 rounded-full whitespace-nowrap shrink-0 transition-all duration-200 ${
              activeFilter === tab.name 
                ? "bg-[#001407] text-white shadow-sm" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="text-[13px] font-semibold font-['Inter']">
              {tab.name}
            </span>
            <span className={`text-[11px] font-['Inter'] font-medium ${
              activeFilter === tab.name ? "text-white" : "text-gray-600"
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>


      {/* Chat List Scrollable Area */}
      <div className="flex-1 overflow-y-auto w-full flex flex-col items-center bg-white [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
        <div className="flex flex-col w-full">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <div 
                key={chat.id} 
                onClick={() => onSelectChat?.(chat.id)}
                className={`flex flex-col justify-center items-center h-[68px] cursor-pointer transition-all duration-300 ease-out px-4 border-b border-gray-100 min-w-0 ${
                  selectedChatId === chat.id 
                    ? "bg-gray-50 shadow-sm" 
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex gap-[12px] w-full items-center h-full min-w-0">
                  {/* Avatar */}
                  <div className="w-[36px] h-[36px] flex items-center justify-center shrink-0 relative bg-[#001407] rounded-full">
                    <span className="text-white text-[13px] font-medium z-10 font-['Roboto']">{chat.initial}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0 justify-center h-full">
                    <div className="flex items-center gap-2 w-full min-w-0">
                      <h3 className="text-[14px] font-medium text-[#001407] font-['Roboto'] truncate">{chat.name}</h3>
                      {selectedChatId === chat.id && <div className="w-[6px] h-[6px] bg-[#D2FF00] rounded-full shrink-0 shadow-[0_0_4px_rgba(210,255,0,0.6)]"></div>}
                    </div>
                    <p className="text-xs text-gray-500 font-normal font-['Roboto'] w-full truncate">{chat.sub}</p>
                  </div>

                  {/* Metadata (Time/Status) */}
                  <div className="flex flex-col items-end justify-center h-full shrink-0 gap-1">
                    <span className="text-[10px] text-gray-500 font-medium font-['Roboto'] whitespace-nowrap">{chat.time}</span>
                    <div className="flex items-center justify-end gap-1">
                      {chat.status === "Urgent" && (
                        <div className="bg-[#E94235] flex items-center justify-center rounded-[6px] px-1.5 py-0.5">
                          <span className="text-white text-[9px] font-medium font-['Roboto']">URGENT</span>
                        </div>
                      )}
                      {chat.status && chat.status !== "Urgent" && (
                        <span className="text-[10px] font-medium text-gray-500 font-['Roboto']">{chat.status}</span>
                      )}
                      {chat.badge && (
                        <div className="bg-[#001407] flex items-center justify-center rounded-[8px] px-2 py-0.5">
                          <span className="text-[#D2FF00] text-[10px] font-medium font-['Roboto']">{chat.badge}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-400 text-sm font-['Roboto']">No chats yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
