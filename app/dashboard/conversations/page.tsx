import { Sidebar } from "@/components/conversations/Sidebar";
import { TopNav } from "@/components/conversations/TopNav";
import { ChatList } from "@/components/conversations/ChatList";
import { ChatWindow } from "@/components/conversations/ChatWindow";
import { AnalyticsPanel } from "@/components/conversations/AnalyticsPanel";

export default function ConversationsDashboardPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden text-sm bg-white font-sans text-black">
      {/* Column 1: Main Sidebar (Hidden on mobile, 15% desktop) */}
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        {/* Top Navbar */}
        <TopNav />
        <div className="flex flex-1 overflow-hidden relative">
          {/* Column 2: Chat List Column */}
          <ChatList />
          {/* Column 3: Main Chat Window */}
          <ChatWindow />
          {/* Column 4: Analytics Panel */}
          <AnalyticsPanel />
        </div>
      </div>
    </div>
  );
}
