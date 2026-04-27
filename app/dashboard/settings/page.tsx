"use client";

import { useState } from "react";
import { Sidebar } from "@/components/conversations/Sidebar";
import { BottomNav } from "@/components/conversations/BottomNav";
import { SettingsHeader } from "@/components/settings/SettingsHeader";
import { SettingsTabBar } from "@/components/settings/SettingsTabBar";
import { BusinessProfileTab } from "@/components/settings/BusinessProfileTab";
import { WhatsAppIntegrationTab } from "@/components/settings/WhatsAppIntegrationTab";
import { AIConfigTab } from "@/components/settings/AIConfigTab";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"business" | "whatsapp" | "ai">("business");

  return (
    <div className="flex h-screen w-full overflow-hidden text-sm bg-white font-sans text-black min-w-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Settings Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0 bg-[#F5F5F5] pb-[70px] md:pb-0">
        {/* 1. Fixed Header */}
        <SettingsHeader />

        {/* 2. Fixed Dark Tab Bar (No gap, sits flush under header) */}
        <SettingsTabBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 3. Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            {/* Active Tab Component Here */}
            {activeTab === "business" && <BusinessProfileTab />}
            {activeTab === "whatsapp" && <WhatsAppIntegrationTab />}
            {activeTab === "ai" && <AIConfigTab />}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav selectedChat={null} />
    </div>
  );
}
