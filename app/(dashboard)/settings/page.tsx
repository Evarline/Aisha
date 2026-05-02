"use client";

import { useState } from "react";
import { SettingsTabBar } from "@/components/settings/SettingsTabBar";
import { BusinessProfileTab } from "@/components/settings/BusinessProfileTab";
import { WhatsAppIntegrationTab } from "@/components/settings/WhatsAppIntegrationTab";
import { AIConfigTab } from "@/components/settings/AIConfigTab";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"business" | "whatsapp" | "ai">("business");

  return (
    <div className="flex flex-col flex-1 h-full w-full min-w-0 bg-[#F5F5F5]">

      {/* Sticky Tab Bar */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <SettingsTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          {/* Active Tab Component Here */}
          {activeTab === "business" && <BusinessProfileTab />}
          {activeTab === "whatsapp" && <WhatsAppIntegrationTab />}
          {activeTab === "ai" && <AIConfigTab />}
        </div>
      </div>
    </div>
  );
}
