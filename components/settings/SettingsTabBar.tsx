interface SettingsTabBarProps {
  activeTab: "business" | "whatsapp" | "ai";
  setActiveTab: (tab: "business" | "whatsapp" | "ai") => void;
}

export function SettingsTabBar({ activeTab, setActiveTab }: SettingsTabBarProps) {
  const tabs = [
    { id: "business", label: "Business Profile" },
    { id: "whatsapp", label: "WhatsApp Integration" },
    { id: "ai", label: "AI Configuration" },
  ] as const;

  return (
    <div className="sticky top-[56px] z-20 w-full bg-[#001407] border-b border-gray-800">
      <div className="flex items-center px-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.id
                ? "text-[#D2FF00] border-b-[#D2FF00]"
                : "text-gray-400 border-b-transparent hover:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
