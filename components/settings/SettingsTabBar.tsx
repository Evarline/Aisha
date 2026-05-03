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
    <div className="w-full bg-[#001407] border-b border-gray-800\">
      <div className="flex items-center px-3 md:px-6 overflow-x-auto [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden\">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 md:px-4 py-3 text-xs md:text-sm font-medium whitespace-nowrap border-b-2 transition-colors shrink-0 ${
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
