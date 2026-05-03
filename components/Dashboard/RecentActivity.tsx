"use client";

import { kpiData, recentActivityFeed, dashboardMetrics } from "@/lib/mock/dashboardData";
import { ArrowRight } from "lucide-react";

export function RecentActivity() {
  const aiRatio = dashboardMetrics.aiHandledRatio;
  const humanRatio = 100 - aiRatio;

  // SVG Donut Chart Data
  const circumference = 2 * Math.PI * 70; // radius 70
  
  // FIXED MATH: Calculate exactly how much gap each circle needs
  const aiStrokeDashoffset = circumference * (1 - aiRatio / 100);
  const humanStrokeDashoffset = circumference * (1 - humanRatio / 100);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-full">
      {/* Top KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-8 border-b border-gray-200">
        {/* Revenue */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            {kpiData.revenue.label}
          </p>
          <p className="text-3xl font-bold text-[#001407]">
           {kpiData.revenue.value}
          </p>
          <p className="text-xs text-gray-400 mt-1">This month</p>
        </div>

        {/* Avg Response Time */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            {kpiData.avgResponseTime.label}
          </p>
          <p className="text-3xl font-bold text-[#001407]">
            {kpiData.avgResponseTime.value}
          </p>
          <p className="text-xs text-gray-400 mt-1">Average per inquiry</p>
        </div>

        {/* AI vs Human Ratio */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            {kpiData.aiRatio.label}
          </p>
          <p className="text-3xl font-bold text-[#00]">
            {kpiData.aiRatio.value}
          </p>
          <p className="text-xs text-gray-400 mt-1">Automation rate</p>
        </div>
      </div>

      {/* Donut Chart Centerpiece */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h3 className="text-lg font-semibold text-[#001407] mb-8 text-center">
          AI vs Human Chat Distribution
        </h3>

        {/* SVG Donut Chart */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="transform -rotate-90"
          >
            {/* Background Circle */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="16"
            />

            {/* Human Segment (Gray) - Drawn FIRST and Rotated! */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="16"
              strokeDasharray={circumference}
              strokeDashoffset={humanStrokeDashoffset}
              style={{
                transform: `rotate(${(aiRatio / 100) * 360}deg)`,
                transformOrigin: "50% 50%",
              }}
              className="transition-all duration-500"
            />

            {/* AI Segment (Deep) */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#001407"
              strokeWidth="16"
              strokeDasharray={circumference}
              strokeDashoffset={aiStrokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-[#001407]">{aiRatio}%</p>
            <p className="text-xs text-gray-500 font-medium mt-1">Handled by AI</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-8 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#001407]" />
            <span className="text-sm text-gray-700 font-medium">
              AI ({aiRatio}%)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <span className="text-sm text-gray-700 font-medium">
              Human ({humanRatio}%)
            </span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full bg-[#001407] hover:bg-[#001407]/90 text-[#D2FF00] font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group shadow-sm hover:shadow-md">
        <span>Quick link to conversations</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Recent Activity Feed (Optional Extra Context) */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-[#001407] uppercase tracking-wide mb-4">
          Recent Activity
        </h4>
        <div className="space-y-3">
          {recentActivityFeed.map((item) => (
            <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${
                  item.status === "completed"
                    ? "bg-green-500"
                    : item.status === "pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}