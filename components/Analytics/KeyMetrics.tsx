"use client";

import {
  TrendingUp,
  Star,
  Package,
  CheckCircle,
} from "lucide-react";
import {
  conversationOverTimeData,
  csatMetric,
  topProductsList,
  aiResolutionRate,
} from "@/lib/mock/analyticsData";

export function KeyMetrics() {
  const maxCount = Math.max(...conversationOverTimeData.map((d) => d.count));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {/* Card 1: Conversations over Time (Minimalist Bar Chart) */}
      <div className="relative group rounded-xl p-6 bg-[#001407] text-white overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">
            Conversations over Time
          </h3>

          {/* Mini Bar Chart */}
          <div className="flex items-end justify-center gap-1.5 flex-1 min-h-[120px]">
            {conversationOverTimeData.map((data, idx) => {
              const heightPercent = (data.count / maxCount) * 100;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center flex-1 group/bar"
                >
                  <div
                    className="w-full bg-[#D2FF00] rounded-t transition-all duration-300 group-hover/bar:opacity-80 group-hover/bar:shadow-lg"
                    style={{ height: `${heightPercent}%`, minHeight: "8px" }}
                  />
                  <span className="text-xs text-gray-400 mt-2 font-medium">
                    {data.day}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <p className="text-xs text-gray-400">Weekly trend</p>
          </div>
        </div>
      </div>

      {/* Card 2: CSAT Score */}
      <div className="relative group rounded-xl p-6 bg-[#001407] text-white overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              CSAT Score
            </h3>
            <Star className="w-5 h-5 text-[#D2FF00] fill-[#D2FF00]" />
          </div>

          <div className="flex flex-col items-start flex-1 justify-center">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-bold text-[#D2FF00]">
                {csatMetric.score}
              </span>
              <span className="text-lg text-gray-400">/ {csatMetric.total}</span>
            </div>
            <p className="text-xs text-gray-400">Customer satisfaction</p>
          </div>

          {/* Star Rating Visual */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < 4 ? "text-[#D2FF00] fill-[#D2FF00]" : "text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Top Products */}
      <div className="relative group rounded-xl p-6 bg-[#001407] text-white overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Top Products
            </h3>
            <Package className="w-5 h-5 text-[#D2FF00]" />
          </div>

          {/* Product List */}
          <div className="flex flex-col gap-2 flex-1">
            {topProductsList.map((product, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D2FF00]" />
                <span className="text-sm text-gray-200">{product}</span>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <p className="text-xs text-[#D2FF00] font-semibold cursor-pointer hover:opacity-80">
              View all →
            </p>
          </div>
        </div>
      </div>

      {/* Card 4: AI Resolution Rate */}
      <div className="relative group rounded-xl p-6 bg-[#001407] text-white overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              AI Resolution Rate
            </h3>
            <CheckCircle className="w-5 h-5 text-[#D2FF00]" />
          </div>

          {/* Main Metric */}
          <div className="flex flex-col items-start flex-1 justify-center">
            <span className="text-5xl font-bold text-[#D2FF00] mb-2">
              {aiResolutionRate}%
            </span>
            <p className="text-xs text-gray-400">Issues resolved autonomously</p>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-[#D2FF00] h-2 rounded-full transition-all duration-500"
                style={{ width: `${aiResolutionRate}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
