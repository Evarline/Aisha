"use client";

import { useState } from "react";
import { ChatList } from "@/components/conversations/ChatList";
import { ChatWindow } from "@/components/conversations/ChatWindow";
import { AnalyticsPanel } from "@/components/conversations/AnalyticsPanel";
import { SmartInsightsModal } from "@/components/conversations/SmartInsightsModal";
import { DUMMY_CHATS } from "@/components/conversations/data";

export default function ConversationsDashboardPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [showMobileAnalytics, setShowMobileAnalytics] = useState(false);

  const handleSelectChat = (chatId: number) => {
    setSelectedChat(chatId);
  };

  const handleBackToInbox = () => {
    setSelectedChat(null);
  };

  const currentChat = DUMMY_CHATS.find((chat) => chat.id === selectedChat);

  return (
    <div className="flex flex-col flex-1 h-full w-full min-w-0 overflow-hidden">
      <div className="flex flex-1 overflow-hidden relative min-w-0">
          {/* Column 2: Chat List - Visible on mobile list view and all desktop */}
          <div className={`${selectedChat !== null ? "hidden" : "flex"} md:flex flex-col h-full min-w-0`}>
            <ChatList 
              chats={DUMMY_CHATS}
              onSelectChat={handleSelectChat} 
              selectedChatId={selectedChat}
              onAnalyticsClick={() => setShowMobileAnalytics(true)}
              onSmartInsightsClick={() => setIsInsightsOpen(true)}
            />
          </div>
          
          {/* Column 3: Main Chat Window (Desktop only, mobile uses overlay below) */}
          <div className="hidden md:flex md:flex-col md:flex-1 md:h-full">
            <ChatWindow currentChat={currentChat} onBackClick={undefined} isMobileOverlay={false} />
          </div>
          
          {/* Column 4: Analytics Panel (Hidden on mobile and tablet) */}
          <AnalyticsPanel currentChat={currentChat} />
        </div>

      {/* Fixed Overlay Chat View - Mobile Only */}
      {selectedChat !== null && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
          <ChatWindow 
            currentChat={currentChat} 
            onBackClick={handleBackToInbox} 
            isMobileOverlay={true}
            onAnalyticsClick={() => setShowMobileAnalytics(true)}
          />
        </div>
      )}

      {/* Mobile Analytics Modal - Mobile Only */}
      {showMobileAnalytics && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white md:hidden overflow-hidden">
          {/* Mobile Analytics Header */}
          <div className="flex-none w-full h-[60px] border-b border-gray-200 flex items-center justify-between px-4 gap-3">
            <div className="flex-1">
              <h2 className="text-[16px] text-[#001407] font-medium">Live Analytics</h2>
              <p className="text-[11px] text-gray-500">Real time performance</p>
            </div>
            <button
              onClick={() => setShowMobileAnalytics(false)}
              className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 transition-colors flex-shrink-0 whitespace-nowrap"
            >
              <span className="text-xs font-medium text-[#E94235]">Stop</span>
            </button>
          </div>
          {/* Mobile Analytics Panel Content */}
          <div className="flex-1 overflow-y-auto w-full">
            <AnalyticsPanel currentChat={currentChat} />
          </div>
        </div>
      )}

      {/* Smart Insights Modal */}
      <SmartInsightsModal 
        currentChat={currentChat}
        isOpen={isInsightsOpen}
        onClose={() => setIsInsightsOpen(false)}
      />
    </div>
  );
}
