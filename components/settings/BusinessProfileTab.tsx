"use client";

import { useState } from "react";

const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;
const DAY_LABELS: Record<(typeof DAYS)[number], string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

const INPUT_CLASSES = "w-full rounded-lg border border-gray-300 px-4 py-2 text-[#001407] focus:outline-none focus:ring-2 focus:ring-[#D2FF00]";
const LABEL_CLASSES = "block text-sm font-medium text-[#001407]";

function TimeInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#D2FF00]"
    />
  );
}

function OperatingToggle({ isOpen, onChange }: { isOpen: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOpen}
      onClick={onChange}
      className={`relative inline-flex h-[17px] w-[36px] shrink-0 cursor-pointer items-center rounded-[20px] px-[6px] py-[2px] transition-colors duration-200 ease-in-out focus:outline-none ${
        isOpen ? "bg-[#001407]" : "bg-gray-300"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-[13px] w-[13px] transform rounded-full shadow-sm transition-all duration-200 ease-in-out ${
          isOpen ? "translate-x-[11px] bg-[#D2FF00]" : "translate-x-0 bg-white"
        }`}
        aria-hidden="true"
      />
    </button>
  );
}

export function BusinessProfileTab() {
  const [businessName, setBusinessName] = useState("Aisha Store");
  const [industry, setIndustry] = useState("Retail");
  const [about, setAbout] = useState("Your premium e-commerce business description goes here.");
  const [email, setEmail] = useState("contact@aisha.store");
  const [website, setWebsite] = useState("https://aisha.store");
  const [address, setAddress] = useState("123 Business Street, Nairobi, Kenya");

  const [operatingHours, setOperatingHours] = useState({
    monday: { open: "09:00", close: "18:00", closed: false },
    tuesday: { open: "09:00", close: "18:00", closed: false },
    wednesday: { open: "09:00", close: "18:00", closed: false },
    thursday: { open: "09:00", close: "18:00", closed: false },
    friday: { open: "09:00", close: "18:00", closed: false },
    saturday: { open: "10:00", close: "16:00", closed: false },
    sunday: { open: "00:00", close: "00:00", closed: true },
  });

  const updateHours = (day: (typeof DAYS)[number], updates: Partial<(typeof operatingHours)[typeof day]>) => {
    setOperatingHours({
      ...operatingHours,
      [day]: { ...operatingHours[day], ...updates },
    });
  };

  const handleSave = () => {
    console.log("Settings saved:", {
      businessName,
      industry,
      about,
      email,
      website,
      address,
      operatingHours,
    });
    alert("Settings saved successfully!");
  };

  return (
    <div className="mx-auto max-w-4xl">
      <section className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-[#001407]">General Information</h2>

        <div className="space-y-4">
          <div>
            <label className={`${LABEL_CLASSES} mb-1`}>Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={INPUT_CLASSES}
            />
          </div>

          <div>
            <label className={`${LABEL_CLASSES} mb-1`}>Industry / Business Type</label>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className={`${INPUT_CLASSES} bg-white`}>
              <option>Retail</option>
              <option>E-commerce</option>
              <option>Services</option>
              <option>SaaS</option>
              <option>Technology</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className={`${LABEL_CLASSES} mb-1`}>About the Business</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              rows={3}
              className={`${INPUT_CLASSES} resize-none`}
            />
          </div>
        </div>
      </section>

      <section className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-[#001407]">Contact & Location</h2>

        <div className="space-y-4">
          <div>
            <label className={`${LABEL_CLASSES} mb-1`}>Business Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={INPUT_CLASSES} />
          </div>

          <div>
            <label className={`${LABEL_CLASSES} mb-1`}>Website URL</label>
            <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} className={INPUT_CLASSES} />
          </div>

          <div>
            <label className={`${LABEL_CLASSES} mb-1`}>Physical Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className={INPUT_CLASSES} />
          </div>
        </div>
      </section>

      <section className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-[#001407]">Operating Hours</h2>

        <div className="space-y-3">
          {DAYS.map((day) => (
            <div key={day} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0">
              <span className="w-20 text-sm font-medium text-[#001407]">{DAY_LABELS[day]}</span>

              {operatingHours[day].closed ? (
                <span className="text-sm text-gray-500">Closed</span>
              ) : (
                <div className="flex items-center gap-2">
                  <TimeInput value={operatingHours[day].open} onChange={(open) => updateHours(day, { open })} />
                  <span className="text-gray-400">to</span>
                  <TimeInput value={operatingHours[day].close} onChange={(close) => updateHours(day, { close })} />
                </div>
              )}

              <OperatingToggle
                isOpen={!operatingHours[day].closed}
                onChange={() => updateHours(day, { closed: !operatingHours[day].closed })}
              />
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={handleSave}
        className="w-full rounded-lg bg-[#D2FF00] px-8 py-2.5 font-medium text-[#001407] transition-colors hover:bg-opacity-90 md:w-auto"
      >
        Save Changes
      </button>
    </div>
  );
}
