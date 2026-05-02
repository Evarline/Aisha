'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '/Icons/SquaresFour.svg' },
    { name: 'Conversations', href: '/conversations', icon: '/Icons/ChatsCircle.svg' },
    { name: 'Products', href: '/products', icon: '/Icons/Package.svg' },
    { name: 'Settings', href: '/settings', icon: '/Icons/GearSix.svg' },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname?.startsWith(href);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden bg-white border-t border-gray-200 z-50 flex justify-around items-center h-[70px]">
      {menuItems.map((item) => {
        const active = isActive(item.href);

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
              active
                ? 'bg-[#001407]'
                : 'hover:bg-gray-100'
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
    </div>
  );
}
