"use client";

import React, { useState } from "react";
import { TopNav } from "@/components/conversations/TopNav";
import Image from "next/image";
import ProductsGrid from "@/components/products/ProductsGrid";
import AddProductPage from "@/components/products/AddProductPage";
import type { Product, ProductView } from "@/types/product";
import { Sidebar } from "@/components/conversations/Sidebar";

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Organic Honey 500g",   category: "Food & Beverages",       price: 1200, desc: "Pure raw organic honey harvested from highland bees. No additives, no preservatives.",   delivery: "2–3 days", inStock: true,  img: null },
  { id: 2, name: "Shea Body Butter",     category: "Beauty & Personal Care", price: 850,  desc: "Handcrafted shea butter blend with lavender and coconut oil. Deep moisturising.",        delivery: "1–2 days", inStock: true,  img: null },
  { id: 3, name: "Wireless Earbuds Pro", category: "Electronics",            price: 3500, desc: "Crystal clear sound with 24hr battery life. Noise cancelling, waterproof.",              delivery: "3–5 days", inStock: false, img: null },
  { id: 4, name: "Linen Throw Pillow",   category: "Home & Living",          price: 650,  desc: "Premium linen throw pillow in neutral tones. Removable cover, machine washable.",        delivery: "2–4 days", inStock: true,  img: null },
];

export default function ProductsPage() {
  const [products, setProducts]     = useState<Product[]>(MOCK_PRODUCTS);
  const [view, setView]             = useState<ProductView>("list");
  const [editTarget, setEditTarget] = useState<Product | null>(null);
  const [nextId, setNextId]         = useState(10);

  const activeCount = products.filter((p) => p.inStock).length;

  const handleAdd = () => { setEditTarget(null); setView("add"); };

  const handleEdit = (p: Product) => { setEditTarget(p); setView("edit"); };

  const handleDelete = (id: number) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));

  const handleToggleStock = (id: number) =>
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p))
    );

  const handleSave = (data: Omit<Product, "id">) => {
    if (editTarget) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editTarget.id ? { ...p, ...data } : p))
      );
    } else {
      setProducts((prev) => [...prev, { id: nextId, ...data }]);
      setNextId((n) => n + 1);
    }
    setView("list");
    setEditTarget(null);
  };

  const handleCancel = () => { setView("list"); setEditTarget(null); };

  return (
    <div className="flex h-screen w-full overflow-hidden text-sm bg-[#F5F5F5] font-sans text-black">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
      <TopNav title={view === "list" ? "Products" : view === "edit" ? "Edit Product" : "Add Product"} />

      <main className="flex-1 overflow-y-auto px-4 sm:px-6 w-full mx-auto py-6 min-w-0">
        {view === "list" && (
          <div className="flex justify-end mb-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-[#D2FF00] blur-md opacity-30 group-hover:opacity-60 transition-opacity rounded-xl"></div>
              <button
                onClick={handleAdd}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 whitespace-nowrap shadow-sm"
                style={{ backgroundColor: "#001407", color: "#D2FF00" }}
              >
                +
                Add New Product
              </button>
            </div>
          </div>
        )}
        
        {view !== "list" && (
          <div className="flex items-center gap-1.5 text-[11px] text-[#001407]/60 mb-6">
            <button onClick={handleCancel} className="hover:text-[#001407] transition-colors">Products</button>
            <Image src="/icons/chevron-right.svg" alt="chevron" width={10} height={10} className="opacity-40" />
            <span className="font-semibold text-[#001407]">
              {view === "edit" ? "Edit Product" : "Add New Product"}
            </span>
          </div>
        )}

        {view === "list" ? (
          <ProductsGrid
            products={products}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleStock={handleToggleStock}
          />
        ) : (
          <div className="flex justify-center w-full">
            <AddProductPage
              initial={
                editTarget
                  ? { name: editTarget.name, category: editTarget.category, price: editTarget.price, desc: editTarget.desc, delivery: editTarget.delivery, inStock: editTarget.inStock, img: editTarget.img }
                  : undefined
              }
              allProducts={products}
              isEdit={view === "edit"}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        )}
      </main>
      </div>
    </div>
  );
}
