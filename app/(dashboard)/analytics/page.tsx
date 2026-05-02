"use client";

import { KeyMetrics } from "@/components/Analytics/KeyMetrics";
import { AiVsHumanChart } from "@/components/Analytics/AiVsHumanChart";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col w-full min-h-full p-6 md:p-8 gap-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-[#001407] tracking-tight">
          Analytics
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Deep insights into conversation performance and product metrics
        </p>
      </div>

      {/* Key Metrics Cards */}
      <KeyMetrics />

      {/* Product Query Deep Dive Table */}
      <AiVsHumanChart />
    </div>
  );
}
