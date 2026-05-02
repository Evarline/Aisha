"use client";

import { productQueryData } from "@/lib/mock/analyticsData";
import { ArrowUpRight } from "lucide-react";

export function AiVsHumanChart() {
  // Calculate total queries and average conversion
  const totalQueries = productQueryData.reduce((sum, item) => sum + item.queries, 0);
  const avgConversion =
    productQueryData.reduce((sum, item) => sum + item.conversionRate, 0) /
    productQueryData.length;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-full">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#001407] mb-2">
          Product Query Deep Dive
        </h2>
        <p className="text-sm text-gray-600">
          Performance metrics across your product catalog
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Total Queries
            </p>
            <p className="text-2xl font-bold text-[#001407]">
              {totalQueries.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold">+8%</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Avg Conversion Rate
          </p>
          <p className="text-2xl font-bold text-[#D2FF00]">
            {Math.round(avgConversion)}%
          </p>
        </div>
      </div>

      {/* Premium Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-4 text-xs font-semibold text-[#001407] uppercase tracking-wide">
                Product Name
              </th>
              <th className="text-right py-4 px-4 text-xs font-semibold text-[#001407] uppercase tracking-wide">
                Queries
              </th>
              <th className="text-right py-4 px-4 text-xs font-semibold text-[#001407] uppercase tracking-wide">
                Conversion %
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {productQueryData.map((product, idx) => (
              <tr
                key={product.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 group"
              >
                {/* Product Name */}
                <td className="text-left py-5 px-4 text-sm font-medium text-[#001407] group-hover:text-[#D2FF00] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#D2FF00]" />
                    <span>{product.productName}</span>
                  </div>
                </td>

                {/* Queries */}
                <td className="text-right py-5 px-4 text-sm font-semibold text-gray-900">
                  {product.queries.toLocaleString()}
                </td>

                {/* Conversion Rate */}
                <td className="text-right py-5 px-4 text-sm font-semibold">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#D2FF00] to-[#D2FF00] rounded-full transition-all duration-300"
                        style={{ width: `${product.conversionRate}%` }}
                      />
                    </div>
                    <span className="text-[#001407] font-bold min-w-[3rem] text-right">
                      {product.conversionRate}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
        <p className="text-xs text-gray-500">
          Data updated daily at 12:00 AM UTC
        </p>
        <button className="text-xs font-semibold text-[#001407] hover:text-[#D2FF00] transition-colors">
          Export Report →
        </button>
      </div>
    </div>
  );
}
