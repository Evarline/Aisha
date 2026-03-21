"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import type { Product, ProductCategory } from "@/types/product";
import StockToggle from "@/components/products/StockToggle";
import FormSection from "@/components/products/FormSection";
import FieldLabel from "@/components/products/FieldLabel";

const CATEGORIES: ProductCategory[] = [
  "Food & Beverages",
  "Beauty & Personal Care",
  "Electronics",
  "Clothing & Apparel",
  "Home & Living",
  "Health & Wellness",
  "Agriculture",
  "Other",
];

const inputCls =
  "w-full border-[1.5px] border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-800 bg-[#F5F5F5] outline-none focus:border-[#D2FF00] focus:bg-white transition-all shadow-sm";

interface AddProductPageProps {
  initial?: Omit<Product, "id">;
  allProducts: Product[];
  isEdit: boolean;
  onSave: (data: Omit<Product, "id">) => void;
  onCancel: () => void;
}

const blank = (): Omit<Product, "id"> => ({
  name: "", category: "", price: 0, desc: "", delivery: "", inStock: true, img: null,
});

export default function AddProductPage({
  initial,
  allProducts,
  isEdit,
  onSave,
  onCancel,
}: AddProductPageProps) {
  const [form, setForm] = useState<Omit<Product, "id">>(initial ?? blank());
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof Omit<Product, "id">>(k: K, v: Omit<Product, "id">[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const loadImg = (file: File) => {
    const r = new FileReader();
    r.onload = (e) => set("img", e.target?.result as string);
    r.readAsDataURL(file);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f?.type.startsWith("image/")) loadImg(f);
  }, []);

  const validate = () => {
    if (!form.name.trim())      { alert("Please enter a product name.");       return false; }
    if (!form.category)         { alert("Please select a category.");          return false; }
    if (!form.price || form.price <= 0) { alert("Please enter a valid price."); return false; }
    if (!form.desc.trim())      { alert("Please add a short description.");    return false; }
    return true;
  };

  return (
    <div className="flex flex-col gap-5 max-w-[680px] pb-10">

      {/* ── UPLOAD IMAGE ───────────────────── */}
      <FormSection
        iconSrc="/Icons/Upload(1).svg"
        title="Product Image"
        subtitle="Upload a clear photo of your product"
      >
        {form.img ? (
          <div className="border-2 border-solid border-[#D2FF00] rounded-xl p-3 bg-[#f0f8e0]">
            <img src={form.img} alt="preview" className="max-h-44 w-full object-contain rounded-lg" />
            <button
              onClick={() => set("img", null)}
              className="mt-2 text-[11px] text-red-400 hover:text-red-600 transition-colors"
            >
              ✕ Remove image
            </button>
          </div>
        ) : (
          <div
            className={[
              "border-2 border-dashed rounded-xl flex flex-col items-center justify-center py-10 gap-2 cursor-pointer text-center transition-all bg-[#F5F5F5]",
              dragOver
                ? "border-[#D2FF00] bg-[#f0f8e0]"
                : "border-gray-200 hover:border-[#D2FF00] hover:bg-[#f0f8e0]",
            ].join(" ")}
            onClick={() => fileRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
          >
            <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-1 shadow-sm">
              <Image src="/Icons/Upload(1).svg" alt="" width={24} height={24} />
            </div>
            <p className="text-[13px] text-gray-500">
              Drag & drop or{" "}
              <strong className="font-semibold" style={{ color: "#001407" }}>
                browse file
              </strong>
            </p>
            <p className="text-[11px] text-gray-400">PNG, JPG, WEBP — max 5MB</p>
          </div>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) loadImg(f); }}
        />
      </FormSection>

      {/* ── BASIC INFO ─────────────────────── */}
      <FormSection
        iconSrc="/icons/tag.svg"
        title="Basic Info"
        subtitle="Core product details your AI will use"
      >
        <div className="grid grid-cols-2 gap-4">

          <div className="col-span-2">
            <FieldLabel required>Product Name</FieldLabel>
            <input
              className={inputCls}
              type="text"
              placeholder="e.g. Organic Honey 500g"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
            />
          </div>

          <div>
            <FieldLabel required>Category</FieldLabel>
            <select
              className={inputCls}
              value={form.category}
              onChange={(e) => set("category", e.target.value as ProductCategory)}
            >
              <option value="">Select category...</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <FieldLabel required>Price (KES)</FieldLabel>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-gray-400 pointer-events-none">
                KES
              </span>
              <input
                className={`${inputCls} pl-10`}
                type="number"
                placeholder="0.00"
                value={form.price || ""}
                onChange={(e) => set("price", parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>

          <div className="col-span-2">
            <FieldLabel required>Short Description</FieldLabel>
            <textarea
              className={`${inputCls} resize-none min-h-[80px] leading-relaxed`}
              placeholder="2–3 lines your AI will send to customers on WhatsApp..."
              value={form.desc}
              onChange={(e) => set("desc", e.target.value)}
            />
            <p className="text-[10px] text-gray-400 mt-1">
              Keep it conversational — your AI uses this exact text in chats
            </p>
          </div>

          <div>
            <FieldLabel>Delivery Time</FieldLabel>
            <input
              className={inputCls}
              type="text"
              placeholder="e.g. 2–3 business days"
              value={form.delivery}
              onChange={(e) => set("delivery", e.target.value)}
            />
          </div>

          <div>
            <FieldLabel>Stock Status</FieldLabel>
            <div
              className="flex items-center gap-3 border-[1.5px] border-gray-200 rounded-lg px-3 py-2.5 bg-[#F5F5F5] cursor-pointer hover:border-[#D2FF00] transition-all shadow-sm"
              onClick={() => set("inStock", !form.inStock)}
            >
              <StockToggle on={form.inStock} onChange={() => set("inStock", !form.inStock)} />
              <span className="text-[13px] font-medium text-gray-700">
                {form.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

        </div>
      </FormSection>

      {/* ── AI SELLING INTELLIGENCE ────────── */}
      <FormSection
        iconSrc="/icons/zap.svg"
        title="AI Selling Intelligence"
        subtitle="Train your AI to sell this product like a pro"
      >
        <div
          className="flex items-start gap-2.5 rounded-lg px-3 py-2.5 mb-5 border"
          style={{ backgroundColor: "#f0f8e0", borderColor: "#D2FF00" }}
        >
          <Image src="/icons/zap.svg" alt="" width={14} height={14} className="flex-shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed" style={{ color: "#001407" }}>
            <strong>These fields separate your AI from a basic chatbot.</strong>{" "}
            Fill them carefully — they give your AI the intelligence to pitch,
            handle questions, and close deals like a human secretary.
          </p>
        </div>

        <div className="flex flex-col gap-5">

          {/* Selling Points */}
          <div>
            <FieldLabel>Key Selling Points</FieldLabel>
            <div className="flex flex-col gap-2 mt-1">
              {(["e.g. 100% natural, no preservatives", "e.g. Award-winning taste since 2018", "e.g. Free delivery above KES 2,000"] as const).map((ph, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full text-[10px] font-extrabold flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "#001407", color: "#D2FF00" }}
                  >
                    {i + 1}
                  </div>
                  <input className={inputCls} type="text" placeholder={ph} />
                </div>
              ))}
            </div>
          </div>

          {/* Q&A */}
          <div>
            <FieldLabel>Common Q&amp;A — Top 3</FieldLabel>
            <p className="text-[10px] text-gray-400 mb-2">
              Questions customers ask most — your AI answers these instantly
            </p>
            <div className="flex flex-col gap-2">
              {([
                ["Does it expire?",              "Yes, 18 months shelf life."      ],
                ["Available in smaller sizes?",  "Yes, 250g and 1kg options."      ],
                ["...",                          "..."                             ],
              ] as const).map(([q, a], i) => (
                <div key={i} className="flex flex-col gap-2 bg-[#F5F5F5] border border-gray-200 rounded-xl p-3 shadow-sm">
                  <input
                    className="border-[1.5px] border-gray-200 rounded-lg px-3 py-2 text-[12px] bg-white outline-none focus:border-[#D2FF00] transition-all text-gray-700 shadow-sm"
                    type="text"
                    placeholder={`Q: e.g. ${q}`}
                  />
                  <input
                    className="border-[1.5px] border-gray-200 rounded-lg px-3 py-2 text-[12px] bg-white outline-none focus:border-[#D2FF00] transition-all text-gray-700 shadow-sm"
                    type="text"
                    placeholder={`A: e.g. ${a}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Upsell */}
          <div>
            <FieldLabel>Upsell Product</FieldLabel>
            <select className={inputCls}>
              <option value="">Select a product to suggest alongside this one...</option>
              {allProducts.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
            <p className="text-[10px] text-gray-400 mt-1">
              Your AI will suggest this when a customer shows interest
            </p>
          </div>

        </div>
      </FormSection>

      {/* ── ACTION BUTTONS ─────────────────── */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => { if (validate()) onSave(form); }}
          className="px-7 py-3 rounded-xl text-[13px] font-bold hover:opacity-85 transition-opacity shadow-sm"
          style={{ backgroundColor: "#001407", color: "#D2FF00" }}
        >
          {isEdit ? "Save Changes" : "Save Product"}
        </button>
        <button
          onClick={onCancel}
          className="px-5 py-3 rounded-xl text-[13px] font-medium border border-gray-200 bg-white text-gray-500 hover:bg-[#F5F5F5] hover:text-gray-800 transition-all shadow-sm"
        >
          Cancel
        </button>
      </div>

    </div>
  );
}
