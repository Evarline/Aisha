'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '/Icons/SquaresFour.svg' },
    { name: 'Conversations', href: '/conversations', icon: '/Icons/ChatsCircle.svg' },
    { name: 'Analytics', href: '/analytics', icon: '/Icons/ChartBar.svg' },
    { name: 'Products', href: '/products', icon: '/Icons/Package.svg' },
    { name: 'Settings', href: '/settings', icon: '/Icons/GearSix.svg' },
    { name: 'Help', href: '/help', icon: '/Icons/Question.svg' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-[250px] h-full z-40 py-6 px-6 overflow-y-auto" style={{ backgroundColor: '#001407' }}>
      {/* Brand Logo Area */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'white' }}>
          Aisha.ai
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 flex-1">
        {menuItems.map((item) => {
          const isActive =
            item.href === '/dashboard'
              ? pathname === '/dashboard'
              : pathname?.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-[#D2FF00]'
                  : 'hover:bg-white/10'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  style={{
                    filter: isActive
                      ? 'brightness(0) saturate(100%) invert(18%) sepia(35%) saturate(3015%) hue-rotate(99deg) brightness(98%) contrast(106%)'
                      : 'brightness(0) invert(1)',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span
                className={`text-sm font-medium whitespace-nowrap ${
                  isActive ? 'text-[#001407]' : 'text-white'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
