"use client";

import React from "react";
import Image from "next/image";
import type { ProductView } from "@/types/product";

interface ProductsHeaderProps {
  view: ProductView;
  total: number;
  active: number;
  onAdd: () => void;
  onBack: () => void;
}

export default function ProductsHeader({
  view,
  total,
  active,
  onAdd,
  onBack,
}: ProductsHeaderProps) {
  const isForm = view === "add" || view === "edit";

  return (
    <header className="flex-shrink-0 bg-white/70 backdrop-blur-lg border-b border-gray-200/50 px-4 sm:px-6 py-4 shadow-sm sticky top-0 z-50">
      <div className="flex items-start justify-between min-w-0">
        <div className="min-w-0">
          {isForm ? (
            <>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-1 flex-wrap">
                <button
                  onClick={onBack}
                  className="hover:text-gray-700 transition-colors"
                >
                  Products
                </button>
                <Image
                  src="/icons/chevron-right.svg"
                  alt="chevron"
                  width={10}
                  height={10}
                  className="opacity-40"
                />
                <span className="font-semibold truncate" style={{ color: "#001407" }}>
                  {view === "edit" ? "Edit Product" : "Add New Product"}
                </span>
              </div>
              <h1 className="text-[20px] font-extrabold text-gray-900 tracking-tight truncate">
                {view === "edit" ? "Edit Product" : "Add New Product"}
              </h1>
            </>
          ) : (
            <>
              <h1 className="text-[20px] font-extrabold text-gray-900 tracking-tight truncate">
                Products
              </h1>
              <p className="text-[12px] text-gray-400 mt-0.5 truncate">
                {total} product{total !== 1 ? "s" : ""} &middot; {active} active
              </p>
            </>
          )}
        </div>

        {!isForm && (
          <div className="relative group shrink-0 ml-4">
            <div className="absolute -inset-0.5 bg-[#D2FF00] blur-md opacity-30 group-hover:opacity-60 transition-opacity rounded-xl"></div>
            <button
              onClick={onAdd}
              className="relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 whitespace-nowrap"
              style={{ backgroundColor: "#001407", color: "#D2FF00" }}
            >
              <Image
                src="/icons/plus.svg"
                alt="add"
                width={14}
                height={14}
              />
              <span className="hidden sm:inline">Add Product</span>
              <span className="sm:hidden">Add</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
