"use client";

import { StatCards } from "@/components/Dashboard/StatCards";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";

export default function DashboardMainPage() {
  return (
    <div className="flex flex-col w-full min-h-full p-6 md:p-8 gap-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-[#001407] tracking-tight">
          Main Dashboard
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Real-time overview of your business conversations and performance
        </p>
      </div>

      {/* Stat Cards */}
      <StatCards />

      {/* Recent Activity & KPIs */}
      <RecentActivity />
    </div>
  );
}
