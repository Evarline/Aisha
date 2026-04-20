"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomNavProps {
  activeView: "inbox" | "chat";
  onViewChange: (view: "inbox" | "chat") => void;
  selectedChat: number | null;
}

export function BottomNav({ activeView, onViewChange, selectedChat }: BottomNavProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: "/Icons/SquaresFour.svg" },
    { name: "Conversations", href: "/dashboard/conversations", icon: "/Icons/ChatsCircle.svg" },
    { name: "Analytics", href: "/dashboard/analytics", icon: "/Icons/ChartBar.svg" },
    { name: "Products", href: "/dashboard/products", icon: "/Icons/Package.svg" },
    { name: "Settings", href: "/dashboard/settings", icon: "/Icons/GearSix.svg" },
    { name: "Help", href: "/dashboard/help", icon: "/Icons/Question.svg" },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname?.startsWith(href);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200/60 z-50 overflow-x-auto">
      <div className="flex items-center justify-start h-[70px] min-w-max px-2">
        {menuItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-[60px] h-full px-2 transition-all duration-200 ${
                active
                  ? "text-[#D2FF00] bg-[#001407]/10"
                  : "text-gray-500 hover:text-[#001407]"
              }`}
            >
              <div className="w-[24px] h-[24px] flex justify-center items-center mb-0.5 shrink-0">
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
                    e.currentTarget.parentElement!.innerHTML +=
                      '<div class="w-2 h-2 bg-current rounded-full mx-auto"></div>';
                  }}
                />
              </div>
              <span className="text-[9px] font-medium font-['Inter'] text-center whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
