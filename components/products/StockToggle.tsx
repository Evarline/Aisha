"use client";

import React from "react";

interface StockToggleProps {
  on: boolean;
  onChange: () => void;
  showLabel?: boolean;
}

export default function StockToggle({ on, onChange, showLabel = false }: StockToggleProps) {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer select-none"
      onClick={(e) => { e.stopPropagation(); onChange(); }}
    >
      <div className={`relative w-8 h-[18px] rounded-full transition-colors duration-200 flex-shrink-0 ${on ? "bg-[#001407]" : "bg-gray-200"}`}>
        <span className={`absolute top-0.5 w-3.5 h-3.5 rounded-full shadow transition-transform duration-200 ${on ? "translate-x-[16px] bg-[#D2FF00]" : "translate-x-0.5 bg-white"}`} />
      </div>
      {showLabel && (
        <span className="text-[10px] font-semibold text-gray-500">
          {on ? "Active" : "Inactive"}
        </span>
      )}
    </div>
  );
}
