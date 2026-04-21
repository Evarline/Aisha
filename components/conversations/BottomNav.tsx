"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface BottomNavProps {
  selectedChat: number | null;
}

export function BottomNav({ selectedChat }: BottomNavProps) {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  // Primary menu items (always visible or in "More")
  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: "/Icons/SquaresFour.svg" },
    { name: "Conversations", href: "/dashboard/conversations", icon: "/Icons/ChatsCircle.svg" },
    { name: "Analytics", href: "/dashboard/analytics", icon: "/Icons/ChartBar.svg" },
    { name: "Products", href: "/dashboard/products", icon: "/Icons/Package.svg" },
    { name: "Settings", href: "/dashboard/settings", icon: "/Icons/GearSix.svg" },
    { name: "Help", href: "/dashboard/help", icon: "/Icons/Question.svg" },
  ];

  // Default 4 items for mobile
  const mobileItems = [
    menuItems[0], // Dashboard
    menuItems[1], // Conversations
    menuItems[2], // Analytics
  ];

  // 5 items for slightly wider mobile (min-[400px])
  const mobileItemsWide = [
    menuItems[0], // Dashboard
    menuItems[1], // Conversations
    menuItems[2], // Analytics
    menuItems[3], // Products
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname?.startsWith(href);
  };

  // Hide bottom nav when chat is selected
  if (selectedChat !== null) {
    return null;
  }

  const moreItems = menuItems.slice(4); // Settings, Help

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200/60 z-40">
      <div className="flex items-center justify-around h-[70px] w-full px-2">
        {/* Default 4 items for narrow mobile */}
        <div className="hidden min-[400px]:contents">
          {mobileItemsWide.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center h-full px-3 py-2 rounded-lg transition-all duration-200 ${
                  active
                    ? "bg-[#001407] text-[#D2FF00]"
                    : "text-gray-500 hover:text-[#001407]"
                }`}
              >
                <div className="w-[24px] h-[24px] flex justify-center items-center mb-1 shrink-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    style={{
                      filter: active
                        ? "brightness(0) saturate(100%) invert(98%) sepia(85%) saturate(3018%) hue-rotate(342deg) brightness(98%) contrast(97%)"
                        : "brightness(0) saturate(100%) invert(40%) sepia(5%) saturate(200%) hue-rotate(180deg) brightness(95%) contrast(95%)",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <span className="text-[10px] font-medium font-['Inter'] text-center whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 3 items for very narrow mobile (< 400px) */}
        <div className="flex min-[400px]:hidden items-center justify-around w-full">
          {mobileItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center h-full px-2 py-2 rounded-lg transition-all duration-200 flex-1 ${
                  active
                    ? "bg-[#001407] text-[#D2FF00]"
                    : "text-gray-500 hover:text-[#001407]"
                }`}
              >
                <div className="w-[20px] h-[20px] flex justify-center items-center mb-0.5 shrink-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    style={{
                      filter: active
                        ? "brightness(0) saturate(100%) invert(98%) sepia(85%) saturate(3018%) hue-rotate(342deg) brightness(98%) contrast(97%)"
                        : "brightness(0) saturate(100%) invert(40%) sepia(5%) saturate(200%) hue-rotate(180deg) brightness(95%) contrast(95%)",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <span className="text-[9px] font-medium font-['Inter'] text-center whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            );
          })}

          {/* More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex flex-col items-center justify-center h-full px-2 py-2 rounded-lg transition-all duration-200 flex-1 text-gray-500 hover:text-[#001407]"
          >
            <div className="w-[20px] h-[20px] flex justify-center items-center mb-0.5 shrink-0">
              <span className="text-[18px] leading-none">⋯</span>
            </div>
            <span className="text-[9px] font-medium font-['Inter'] text-center whitespace-nowrap">
              More
            </span>
          </button>
        </div>

        {/* More Items Dropdown */}
        {showMore && (
          <div className="absolute bottom-[70px] right-2 bg-white border border-gray-200/60 rounded-lg shadow-lg z-50">
            {moreItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 text-[13px] font-['Inter'] transition-all duration-200 ${
                    active
                      ? "bg-[#001407] text-[#D2FF00]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setShowMore(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
