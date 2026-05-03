'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MoreHorizontal } from 'lucide-react';

export function BottomNav() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  // 1. The 4 main items always visible on the bar
  const mainItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '/Icons/SquaresFour.svg' },
    { name: 'Conversations', href: '/conversations', icon: '/Icons/ChatsCircle.svg' },
    { name: 'Analytics', href: '/analytics', icon: '/Icons/ChartBar.svg' },
    { name: 'Products', href: '/products', icon: '/Icons/Package.svg' },
  ];

  // 2. The items hidden inside the "More" popup
  const moreItems = [
    { name: 'Settings', href: '/settings', icon: '/Icons/GearSix.svg' },
    { name: 'Help', href: '/help', icon: '/Icons/Question.svg' },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Invisible Background Overlay: Closes the popup if the user clicks anywhere else */}
      {showMore && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowMore(false)} 
        />
      )}

      {/* The actual Bottom Bar Container */}
      <div className="fixed bottom-0 left-0 w-full md:hidden bg-white border-t border-gray-200 z-50 flex justify-around items-center h-[70px] px-1">
        
        {/* Render the 4 Main Links */}
        {mainItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setShowMore(false)}
              className={`flex flex-col items-center justify-center gap-1 w-16 py-2 rounded-lg transition-all duration-200 ${
                active ? 'bg-[#001407]' : 'hover:bg-gray-100'
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  style={{
                    filter: active
                      ? 'brightness(0) invert(1) saturate(10) hue-rotate(342deg)'
                      : 'brightness(0)',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span
                className={`text-[10px] font-medium whitespace-nowrap ${
                  active ? 'text-[#D2FF00]' : 'text-[#001407]'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}

        {/* 5th Item: Render the "More" Button */}
        <div className="relative flex flex-col items-center justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`flex flex-col items-center justify-center gap-1 w-16 py-2 rounded-lg transition-all duration-200 ${
              showMore ? 'bg-[#001407]' : 'hover:bg-gray-100'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {/* ICON: Turns white when active */}
              <MoreHorizontal 
                strokeWidth={2.5} 
                className={`w-6 h-6 transition-colors ${
                  showMore ? 'text-white' : 'text-[#001407]'
                }`} 
              />
            </div>
            
            {/* TEXT: Turns neon green (#D2FF00) when active */}
            <span
              className={`text-[10px] font-medium whitespace-nowrap ${
                showMore ? 'text-[#D2FF00]' : 'text-[#001407]'
              }`}
            >
              More
            </span>
          </button>

          {/* The Pop-up Menu (Settings & Help) */}
          {showMore && (
            <div className="absolute bottom-[75px] right-2 bg-white border border-gray-200 rounded-xl shadow-2xl p-2 flex flex-col gap-1 min-w-[160px]">
              {moreItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setShowMore(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      active ? 'bg-[#001407]/5' : 'hover:bg-gray-50'
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-5 h-5 object-contain"
                      style={{
                        filter: active ? 'brightness(0)' : 'brightness(0) opacity(0.5)',
                      }}
                    />
                    <span className={`text-sm font-medium ${active ? 'text-[#001407]' : 'text-gray-600'}`}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </>
  );
}