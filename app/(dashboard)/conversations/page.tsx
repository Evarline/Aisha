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

      {/* Smart Insights Modal */}
      <SmartInsightsModal 
        currentChat={currentChat}
        isOpen={isInsightsOpen}
        onClose={() => setIsInsightsOpen(false)}
      />
    </div>
  );
}
