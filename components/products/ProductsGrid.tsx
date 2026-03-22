"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import DeleteModal from "@/components/products/DeleteModal";
import StockToggle from "@/components/products/StockToggle";

interface ProductsGridProps {
  products: Product[];
  onAdd: () => void;
  onEdit: (p: Product) => void;
  onDelete: (id: number) => void;
  onToggleStock: (id: number) => void;
}

export default function ProductsGrid({
  products,
  onAdd,
  onEdit,
  onDelete,
  onToggleStock,
}: ProductsGridProps) {
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);

  if (products.length === 0) {
    return <EmptyState onAdd={onAdd} />;
  }

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onEdit={() => onEdit(p)}
            onDelete={() => setDeleteTarget(p)}
            onToggleStock={() => onToggleStock(p.id)}
          />
        ))}
      </div>

      {deleteTarget && (
        <DeleteModal
          product={deleteTarget}
          onConfirm={() => { onDelete(deleteTarget.id); setDeleteTarget(null); }}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </>
  );
}

function ProductCard({
  product,
  onEdit,
  onDelete,
  onToggleStock,
}: {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
  onToggleStock: () => void;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg flex flex-col min-w-0">
      <div className="w-full h-40 bg-[#F5F5F5] flex items-center justify-center relative overflow-hidden">
        {product.img ? (
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-1.5 text-gray-300">
            <Image src="/icons/image-placeholder.svg" alt="" width={28} height={28} className="opacity-30" />
            <span className="text-[10px]">No image</span>
          </div>
        )}
        <span
          className={[
            "absolute top-2.5 right-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide",
            product.inStock ? "bg-[#001407] text-[#D2FF00]" : "bg-red-100 text-red-700",
          ].join(" ")}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="p-3.5 flex flex-col flex-1 min-w-0">
        <span
          className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide mb-2 self-start truncate max-w-full"
          style={{ backgroundColor: "#001407", color: "#D2FF00" }}
        >
          {product.category}
        </span>

        <h3 className="text-[13px] font-bold text-gray-900 mb-1 truncate">
          {product.name}
        </h3>

        <p className="text-[11px] text-gray-500 leading-relaxed mb-2.5 line-clamp-2">
          {product.desc}
        </p>

        <p className="text-[17px] font-extrabold text-gray-900 mb-3 truncate">
          KES {product.price.toLocaleString()}
          <span className="text-[10px] font-normal text-gray-400 ml-1">/ unit</span>
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-auto flex-wrap gap-2">
          <StockToggle on={product.inStock} onChange={onToggleStock} showLabel />
          <div className="flex gap-1.5">
            <button
              onClick={onEdit}
              className="px-2.5 py-1 rounded-md text-[11px] font-semibold border border-gray-200 text-gray-500 hover:bg-[#F5F5F5] hover:text-gray-800 transition-all"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="px-2.5 py-1 rounded-md text-[11px] font-semibold border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[360px] gap-3 text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
        style={{ backgroundColor: "#001407" }}
      >
        <Image src="/icons/package.svg" alt="" width={28} height={28} />
      </div>
      <h2 className="text-[18px] font-bold text-gray-900">
        Your AI has nothing to sell yet
      </h2>
      <p className="text-[13px] text-gray-400 max-w-[260px] leading-relaxed">
        Add your first product and watch the orders come in
      </p>
      <button
        onClick={onAdd}
        className="relative group flex items-center gap-2 mt-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-opacity hover:opacity-90 mt-4"
        style={{ backgroundColor: "#001407", color: "#D2FF00" }}
      >
        <div className="absolute -inset-0.5 bg-[#D2FF00] blur-md opacity-30 group-hover:opacity-60 transition-opacity rounded-xl"></div>
        <div className="relative flex items-center gap-2">
          <Image src="/icons/plus.svg" alt="" width={14} height={14} />
          Add Your First Product
        </div>
      </button>
    </div>
  );
}
