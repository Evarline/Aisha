"use client";

export function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "/Icons/SquaresFour.svg", active: false },
    { name: "Conversations", icon: "/Icons/ChatsCircle.svg", active: true },
    { name: "Products", icon: "/Icons/Package.svg", active: false },
    { name: "Orders", icon: "/Icons/ShoppingCartSimple.svg", active: false },
    { name: "Transactions", icon: "/Icons/HandCoins.svg", active: false },
    { name: "Analytics", icon: "/Icons/ChartBar.svg", active: false },
    { name: "Settings", icon: "/Icons/GearSix.svg", active: false },
    { name: "Security", icon: "/Icons/ShieldCheck.svg", active: false },
    { name: "Help", icon: "/Icons/Question.svg", active: false },
  ];

  return (
    <aside className="hidden md:flex md:w-[200px] lg:w-[15%] lg:min-w-[200px] h-full bg-[#001407] flex-col py-6 px-6 overflow-y-auto shrink-0 select-none shadow-[4px_0px_4px_0px_#04340e] transition-all duration-300 ease-in-out [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
      <div className="mb-4 mt-2 px-0 flex flex-col items-start justify-center pb-2">
        <h1 className="text-[32px] font-bold text-white tracking-wide font-['Roboto']">Aisha AI</h1>
      </div>
      
      <div className="text-[16px] font-normal text-white mb-4 mt-2 font-['Roboto']">MAIN</div>
      
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-5 px-[14px] py-[7px] h-[44px] rounded-[15px] transition-colors cursor-pointer ${
              item.active ? "bg-[#D2FF00]" : "hover:bg-white/5"
            }`}
          >
            <div className="w-[24px] h-[24px] flex justify-center items-center relative shrink-0">
              <img 
                src={item.icon} 
                alt={item.name} 
                className="w-full h-full object-contain max-w-none" 
                style={{ filter: item.active ? 'brightness(0) saturate(100%) invert(18%) sepia(35%) saturate(3015%) hue-rotate(99deg) brightness(98%) contrast(106%)' : 'brightness(0) invert(1)' }} 
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-2 h-2 bg-current rounded-full mx-auto"></div>';
                }}
              />
            </div>
            <span className={`text-[16px] font-['Roboto'] ${item.active ? "text-[#04340e] font-normal" : "text-white font-normal"}`}>
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
