"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/lib/mock/helpData";

export function FaqSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#001407] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-gray-600">
          Find answers to common questions about Aisha AI features and setup
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-3">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors duration-150 group"
            >
              {/* Question & Category */}
              <div className="flex flex-col items-start gap-1.5 flex-1">
                <h3 className="text-sm font-semibold text-[#001407] group-hover:text-[#D2FF00] transition-colors text-left">
                  {item.question}
                </h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Chevron Icon */}
              <ChevronDown
                className={`w-5 h-5 text-gray-400 ml-4 flex-shrink-0 transition-transform duration-300 ${
                  expandedId === item.id ? "rotate-180 text-[#D2FF00]" : ""
                }`}
              />
            </button>

            {/* Accordion Body */}
            {expandedId === item.id && (
              <div className="border-t border-gray-200 bg-gray-50 animate-in fade-in duration-300">
                <div className="p-5 text-sm text-gray-700 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <div className="bg-gradient-to-r from-[#001407]/5 to-[#D2FF00]/5 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-[#001407] mb-1">
              Still have questions?
            </h3>
            <p className="text-sm text-gray-600">
              Our support team is ready to help you get the most out of Aisha
            </p>
          </div>
          <button className="flex-shrink-0 bg-[#001407] hover:bg-[#001407]/90 text-[#D2FF00] font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
