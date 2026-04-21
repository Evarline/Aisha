"use client";

import { useState } from "react";
import { Sidebar } from "@/components/conversations/Sidebar";
import { TopNav } from "@/components/conversations/TopNav";
import { ChatList } from "@/components/conversations/ChatList";
import { ChatWindow } from "@/components/conversations/ChatWindow";
import { AnalyticsPanel } from "@/components/conversations/AnalyticsPanel";
import { BottomNav } from "@/components/conversations/BottomNav";
import { SmartInsightsModal } from "@/components/conversations/SmartInsightsModal";
import { DUMMY_CHATS } from "@/components/conversations/data";

export default function ConversationsDashboardPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  const handleSelectChat = (chatId: number) => {
    setSelectedChat(chatId);
  };

  const handleBackToInbox = () => {
    setSelectedChat(null);
  };

  const currentChat = DUMMY_CHATS.find((chat) => chat.id === selectedChat);

  return (
    <div className="flex h-screen w-full overflow-hidden text-sm bg-white font-sans text-black min-w-0">
      {/* Column 1: Main Sidebar (Hidden on mobile, 15% desktop) */}
      <Sidebar />
      <div className={`flex-1 flex flex-col h-screen overflow-hidden min-w-0 ${selectedChat === null ? "pb-[70px]" : ""} md:pb-0`}>
        {/* Top Navbar */}
        <TopNav 
          onNotificationClick={() => setIsInsightsOpen(true)}
        />
        <div className="flex flex-1 overflow-hidden relative min-w-0">
          {/* Column 2: Chat List - Visible on mobile list view and all desktop */}
          <div className={`${selectedChat !== null ? "hidden" : "flex"} md:flex flex-col h-full`}>
            <ChatList 
              chats={DUMMY_CHATS}
              onSelectChat={handleSelectChat} 
              selectedChatId={selectedChat} 
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
            <ChatWindow currentChat={currentChat} onBackClick={handleBackToInbox} isMobileOverlay={true} />
          </div>
        )}
      </div>

      {/* Smart Insights Modal */}
      <SmartInsightsModal 
        currentChat={currentChat}
        isOpen={isInsightsOpen}
        onClose={() => setIsInsightsOpen(false)}
      />

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav 
        selectedChat={selectedChat}
      />
    </div>
  );
}
