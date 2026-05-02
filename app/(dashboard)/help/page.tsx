"use client";

import { ContactCard } from "@/components/Help/ContactCard";
import { FaqSection } from "@/components/Help/FaqSection";

export default function HelpPage() {
  return (
    <div className="flex flex-col w-full min-h-full p-6 md:p-8 gap-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-[#001407] tracking-tight">
          Help & Support
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Get assistance, explore resources, and find answers to your questions
        </p>
      </div>

      {/* Contact Cards */}
      <ContactCard />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
