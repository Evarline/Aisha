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
    <header className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          {isForm ? (
            <>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-1">
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
                <span className="font-semibold" style={{ color: "#001407" }}>
                  {view === "edit" ? "Edit Product" : "Add New Product"}
                </span>
              </div>
              <h1 className="text-[20px] font-extrabold text-gray-900 tracking-tight">
                {view === "edit" ? "Edit Product" : "Add New Product"}
              </h1>
            </>
          ) : (
            <>
              <h1 className="text-[20px] font-extrabold text-gray-900 tracking-tight">
                Products
              </h1>
              <p className="text-[12px] text-gray-400 mt-0.5">
                {total} product{total !== 1 ? "s" : ""} &middot; {active} active
              </p>
            </>
          )}
        </div>

        {!isForm && (
          <button
            onClick={onAdd}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-opacity hover:opacity-85 whitespace-nowrap"
            style={{ backgroundColor: "#001407", color: "#D2FF00" }}
          >
            <Image
              src="/icons/plus.svg"
              alt="add"
              width={14}
              height={14}
            />
            Add Product
          </button>
        )}
      </div>
    </header>
  );
}
