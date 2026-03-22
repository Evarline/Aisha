import React from "react";
import Image from "next/image";

interface FormSectionProps {
  iconSrc: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function FormSection({ iconSrc, title, subtitle, children }: FormSectionProps) {
  return (
    <div className="bg-white border border-[#e8e6e0] rounded-xl p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md min-w-0">
      <div className="flex items-center gap-2.5 mb-5 pb-3.5 border-b border-[#e8e6e0] min-w-0">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "#001407" }}
        >
          <Image src={iconSrc} alt="" width={14} height={14} />
        </div>
        <div className="min-w-0">
          <h3 className="text-[14px] font-bold text-gray-900 truncate">{title}</h3>
          <p className="text-[11px] text-gray-400 mt-0.5 truncate">{subtitle}</p>
        </div>
      </div>
      <div className="min-w-0">
        {children}
      </div>
    </div>
  );
}
