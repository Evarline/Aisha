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
  const [mobileView, setMobileView] = useState<"inbox" | "chat">("inbox");
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  const handleSelectChat = (chatId: number) => {
    setSelectedChat(chatId);
    if (window.innerWidth < 768) {
      setMobileView("chat");
    }
  };

  const handleBackToInbox = () => {
    setMobileView("inbox");
    setSelectedChat(null);
  };

  const currentChat = DUMMY_CHATS.find((chat) => chat.id === selectedChat);

  return (
    <div className="flex h-screen w-full overflow-hidden text-sm bg-white font-sans text-black min-w-0">
      {/* Column 1: Main Sidebar (Hidden on mobile, 15% desktop) */}
      <Sidebar />
      <div className={`flex-1 flex flex-col h-screen overflow-hidden min-w-0 ${selectedChat === null ? "pb-[70px] md:pb-0" : ""}`}>
        {/* Top Navbar */}
        <TopNav 
          onBackClick={mobileView === "chat" ? handleBackToInbox : undefined}
          onNotificationClick={() => setIsInsightsOpen(true)}
        />
        <div className="flex flex-1 overflow-hidden relative min-w-0">
          {/* Column 2: Chat List Column - Hidden on mobile when chat selected */}
          <div className={`${mobileView === "chat" ? "hidden" : "flex"} md:flex flex-col h-full`}>
            <ChatList 
              chats={DUMMY_CHATS}
              onSelectChat={handleSelectChat} 
              selectedChatId={selectedChat} 
            />
          </div>
          
          {/* Column 3: Main Chat Window - Hidden on mobile until chat selected */}
          <div className={`${mobileView === "chat" ? "flex" : "hidden"} md:flex flex-col flex-1 h-full`}>
            <ChatWindow currentChat={currentChat} onBackClick={mobileView === "chat" ? handleBackToInbox : undefined} />
          </div>
          
          {/* Column 4: Analytics Panel (Hidden on mobile and tablet) */}
          <AnalyticsPanel currentChat={currentChat} />
        </div>
      </div>

      {/* Smart Insights Modal */}
      <SmartInsightsModal 
        currentChat={currentChat}
        isOpen={isInsightsOpen}
        onClose={() => setIsInsightsOpen(false)}
      />

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav 
        activeView={mobileView} 
        onViewChange={setMobileView}
        selectedChat={selectedChat}
      />
    </div>
  );
}
