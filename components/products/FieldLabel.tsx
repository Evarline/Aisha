import React from "react";

interface FieldLabelProps {
  children: React.ReactNode;
  required?: boolean;
}

export default function FieldLabel({ children, required }: FieldLabelProps) {
  return (
    <label className="block text-[10px] font-bold uppercase tracking-[0.6px] text-gray-400 mb-1.5">
      {children}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
  );
}
