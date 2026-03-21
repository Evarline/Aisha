import React from "react";
import Image from "next/image";
import type { Product } from "@/types/product";

interface DeleteModalProps {
  product: Product;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteModal({ product, onConfirm, onCancel }: DeleteModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-xl w-[360px] overflow-hidden shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center gap-2.5 px-5 py-4"
          style={{ backgroundColor: "#001407" }}
        >
          <Image src="/icons/trash.svg" alt="" width={16} height={16} />
          <h4 className="text-[14px] font-bold text-white">Delete Product</h4>
        </div>

        <div className="px-5 py-4">
          <p className="text-[13px] text-gray-500 leading-relaxed">
            Delete{" "}
            <strong className="text-gray-900 font-semibold">"{product.name}"</strong>?
            Your AI will stop selling this product immediately and it cannot be undone.
          </p>
        </div>

        <div className="flex gap-2 justify-end px-5 py-3 border-t border-[#e8e6e0] bg-[#F5F5F5]">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg text-[12px] font-medium border border-[#e8e6e0] text-gray-500 hover:bg-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg text-[12px] font-bold bg-red-500 text-white hover:opacity-85 transition-all"
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
}
