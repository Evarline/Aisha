import { Sidebar } from "@/components/conversations/Sidebar";
import { TopNav } from "@/components/conversations/TopNav";
import { BottomNav } from "@/components/conversations/BottomNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden text-sm bg-gray-50 font-sans min-w-0" style={{ color: '#001407' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Right-side Content Wrapper */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0 pb-[70px] md:pb-0">
        {/* Top Navigation */}
        <TopNav />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto min-w-0 relative">
          {children}
        </main>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      <BottomNav />
    </div>
  );
}
