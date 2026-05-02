"use client";

import { MessageCircle, Clock, TrendingUp } from "lucide-react";
import { dashboardMetrics } from "@/lib/mock/dashboardData";

export function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Total Conversations Card */}
      <div className="relative group rounded-xl p-6 bg-[#001407] text-white overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header: Icon & Label */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Total Conversations
            </h3>
            <MessageCircle className="w-5 h-5 text-[#D2FF00]" />
          </div>

          {/* Main Metric */}
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-5xl font-bold text-[#D2FF00]">
              {dashboardMetrics.totalConversations.toLocaleString()}
            </span>
          </div>

          {/* Growth Badge */}
          <div className="flex items-center gap-2 mt-auto">
            <div className="inline-flex items-center gap-1 bg-[#D2FF00]/20 text-[#D2FF00] px-2.5 py-1 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">+5% this week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Card */}
      <div className="relative group rounded-xl p-6 bg-[#001407] text-white overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2FF00]/0 via-[#D2FF00]/10 to-[#D2FF00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header: Icon & Label */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Pending
            </h3>
            <Clock className="w-5 h-5 text-[#D2FF00]" />
          </div>

          {/* Main Metric */}
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-bold text-[#D2FF00]">
              {dashboardMetrics.pending}
            </span>
            <span className="text-sm text-gray-400">conversations</span>
          </div>

          {/* Status */}
          <div className="mt-auto pt-4">
            <p className="text-xs text-gray-400">
              Awaiting response
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
