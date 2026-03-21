"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: "/Icons/SquaresFour.svg" },
    { name: "Conversations", href: "/dashboard/conversations", icon: "/Icons/ChatsCircle.svg" },
    { name: "Products", href: "/dashboard/products", icon: "/Icons/Package.svg" },
    { name: "Orders", href: "/dashboard/orders", icon: "/Icons/ShoppingCartSimple.svg" },
    { name: "Transactions", href: "/dashboard/transactions", icon: "/Icons/HandCoins.svg" },
    { name: "Analytics", href: "/dashboard/analytics", icon: "/Icons/ChartBar.svg" },
    { name: "Settings", href: "/dashboard/settings", icon: "/Icons/GearSix.svg" },
    { name: "Security", href: "/dashboard/security", icon: "/Icons/ShieldCheck.svg" },
    { name: "Help", href: "/dashboard/help", icon: "/Icons/Question.svg" },
  ];

  return (
    <aside className="hidden md:flex md:w-[200px] lg:w-[15%] lg:min-w-[200px] h-full bg-[#001407] flex-col py-6 px-6 overflow-y-auto shrink-0 select-none transition-all duration-300 ease-in-out [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
      <div className="mb-4 mt-2 px-0 flex flex-col items-start justify-center pb-2">
        <h1 className="text-[32px] font-bold text-white tracking-wide font-['Roboto']">Aisha AI</h1>
      </div>
      
      <div className="text-[16px] font-normal text-white mb-4 mt-2 font-['Roboto']">MAIN</div>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = 
            item.href === "/dashboard" 
              ? pathname === "/dashboard" 
              : pathname?.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-5 px-[14px] py-[7px] h-[44px] rounded-[15px] transition-colors cursor-pointer ${
                isActive ? "bg-[#D2FF00]" : "hover:bg-white/5"
              }`}
            >
              <div className="w-[24px] h-[24px] flex justify-center items-center relative shrink-0">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-full h-full object-contain max-w-none" 
                  style={{ filter: isActive ? 'brightness(0) saturate(100%) invert(18%) sepia(35%) saturate(3015%) hue-rotate(99deg) brightness(98%) contrast(106%)' : 'brightness(0) invert(1)' }}
                  onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-2 h-2 bg-current rounded-full mx-auto"></div>';
                  }}
                />
              </div>
              <span className={`text-[16px] font-['Roboto'] ${isActive ? "text-[#04340e] font-normal" : "text-white font-normal"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
