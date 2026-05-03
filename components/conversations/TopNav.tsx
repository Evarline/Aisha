'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function TopNav() {
  const [searchValue, setSearchValue] = useState('');
  const pathname = usePathname();

  // Get the current page name from pathname
  const getPageName = () => {
    if (pathname === '/dashboard') return 'Dashboard';
    if (pathname?.startsWith('/conversations')) return 'Conversations';
    if (pathname?.startsWith('/analytics')) return 'Analytics';
    if (pathname?.startsWith('/products')) return 'Products';
    if (pathname?.startsWith('/settings')) return 'Settings';
    if (pathname?.startsWith('/help')) return 'Help';
    return '';
  };

  const pageName = getPageName();

  return (
    <div className="sticky top-0 h-[60px] bg-white border-b border-gray-200 z-30 flex items-center px-6 relative">
      {/* Left: Page Name (Desktop) or Brand Logo (Mobile Only) */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="md:hidden">
          <span className="text-lg font-bold" style={{ color: '#001407' }}>
            Aisha Ai
          </span>
        </div>
        <div className="hidden md:block">
          <span className="text-lg font-semibold" style={{ color: '#001407' }}>
            {pageName}
          </span>
        </div>
      </div>

      {/* Center: Global Search (Absolutely centered) */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-3">
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 w-[300px] xl:w-[400px]">
          {/* Magnifying Glass SVG */}
          <svg
            className="w-4 h-4 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: '#001407' }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search products, settings, chats..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            style={{ color: '#001407' }}
          />
        </div>
      </div>

      {/* Right: Notifications & Profile (Margin left auto to push to right) */}
      <div className="flex items-center gap-6 ml-auto">
        {/* Notification Button */}
        <button className="relative flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full transition-colors">
          <img
            src="/Icons/Notification.svg"
            alt="Notifications"
            className="w-5 h-5 object-contain"
            style={{ filter: 'brightness(0)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </button>

        {/* Profile Avatar */}
        <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors overflow-hidden">
          <img
            src="/Icons/Profile.svg"
            alt="Profile"
            className="w-7 h-7 object-contain"
            style={{ filter: 'brightness(0)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </button>
      </div>
    </div>
  );
}
