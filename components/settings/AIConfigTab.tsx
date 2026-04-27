"use client";

import { useState } from "react";

const DEFAULT_HANDOFF = "Thank you for reaching out! A team member will be with you shortly.";
const DEFAULT_INSTRUCTIONS =
  "You are Aisha, a friendly AI assistant. Always be helpful and professional. If unsure, offer to connect the customer with a human agent.";

function AIToggle({ isOn, onChange }: { isOn: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={onChange}
      className={`relative inline-flex h-[17px] w-[36px] shrink-0 cursor-pointer items-center rounded-[20px] px-[6px] py-[2px] transition-colors duration-200 ease-in-out focus:outline-none ${
        isOn ? "bg-[#001407]" : "bg-gray-300"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-[13px] w-[13px] transform rounded-full shadow-sm transition-all duration-200 ease-in-out ${
          isOn ? "translate-x-[11px] bg-[#D2FF00]" : "translate-x-0 bg-white"
        }`}
        aria-hidden="true"
      />
    </button>
  );
}

export function AIConfigTab() {
  const [aiEnabled, setAiEnabled] = useState(true);
  const [aiTone, setAiTone] = useState("professional");
  const [handoffMessage, setHandoffMessage] = useState(DEFAULT_HANDOFF);
  const [customInstructions, setCustomInstructions] = useState(DEFAULT_INSTRUCTIONS);

  const handleSave = () => {
    console.log("AI Config saved:", {
      aiEnabled,
      aiTone,
      handoffMessage,
      customInstructions,
    });
    alert("AI Configuration saved successfully!");
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.25 11.6249C23.249 10.6314 22.9667 9.65858 22.4358 8.81891C21.9049 7.97923 21.147 7.30706 20.25 6.88019V6.74988C20.2491 5.78352 19.9372 4.84311 19.3603 4.0678C18.7835 3.29248 17.9724 2.72345 17.0471 2.4449C16.1217 2.16635 15.1313 2.19308 14.2223 2.52114C13.3134 2.84919 12.5341 3.46114 12 4.26644C11.4658 3.46114 10.6866 2.84919 9.7776 2.52114C8.86863 2.19308 7.8782 2.16635 6.95286 2.4449C6.02752 2.72345 5.21643 3.29248 4.63959 4.0678C4.06276 4.84311 3.75084 5.78352 3.74997 6.74988V6.88019C2.85216 7.3059 2.09359 7.97764 1.56242 8.81737C1.03124 9.65709 0.749268 10.6303 0.749268 11.6239C0.749268 12.6176 1.03124 13.5908 1.56242 14.4305C2.09359 15.2702 2.85216 15.942 3.74997 16.3677V16.4999C3.75084 17.4662 4.06276 18.4066 4.63959 19.182C5.21643 19.9573 6.02752 20.5263 6.95286 20.8049C7.8782 21.0834 8.86863 21.0567 9.7776 20.7286C10.6866 20.4006 11.4658 19.7886 12 18.9833C12.5341 19.7886 13.3134 20.4006 14.2223 20.7286C15.1313 21.0567 16.1217 21.0834 17.0471 20.8049C17.9724 20.5263 18.7835 19.9573 19.3603 19.182C19.9372 18.4066 20.2491 17.4662 20.25 16.4999V16.3677C21.1469 15.9411 21.9046 15.2693 22.4356 14.4299C22.9665 13.5906 23.2488 12.618 23.25 11.6249ZM8.24997 19.4999C7.51023 19.4998 6.79662 19.2264 6.24618 18.7322C5.69575 18.238 5.3473 17.5578 5.26778 16.8224C5.51032 16.857 5.75498 16.8745 5.99997 16.8749H6.74997C6.94888 16.8749 7.13965 16.7959 7.2803 16.6552C7.42095 16.5146 7.49997 16.3238 7.49997 16.1249C7.49997 15.926 7.42095 15.7352 7.2803 15.5945C7.13965 15.4539 6.94888 15.3749 6.74997 15.3749H5.99997C5.11456 15.3759 4.25734 15.0636 3.58008 14.4933C2.90281 13.923 2.4492 13.1314 2.29954 12.2587C2.14989 11.386 2.31384 10.4886 2.76239 9.72517C3.21093 8.96178 3.91512 8.38172 4.75028 8.08769C4.89641 8.03595 5.02292 7.94021 5.1124 7.81362C5.20189 7.68704 5.24995 7.53583 5.24997 7.38082V6.74988C5.24997 5.95423 5.56604 5.19117 6.12865 4.62856C6.69126 4.06595 7.45432 3.74988 8.24997 3.74988C9.04562 3.74988 9.80868 4.06595 10.3713 4.62856C10.9339 5.19117 11.25 5.95423 11.25 6.74988V13.1493C10.4264 12.4085 9.35765 11.9991 8.24997 11.9999C8.05106 11.9999 7.86029 12.0789 7.71964 12.2195C7.57899 12.3602 7.49997 12.551 7.49997 12.7499C7.49997 12.9488 7.57899 13.1396 7.71964 13.2802C7.86029 13.4209 8.05106 13.4999 8.24997 13.4999C9.04562 13.4999 9.80868 13.8159 10.3713 14.3786C10.9339 14.9412 11.25 15.7042 11.25 16.4999C11.25 17.2955 10.9339 18.0586 10.3713 18.6212C9.80868 19.1838 9.04562 19.4999 8.24997 19.4999ZM18 15.3749H17.25C17.0511 15.3749 16.8603 15.4539 16.7196 15.5945C16.579 15.7352 16.5 15.926 16.5 16.1249C16.5 16.3238 16.579 16.5146 16.7196 16.6552C16.8603 16.7959 17.0511 16.8749 17.25 16.8749H18C18.245 16.8745 18.4896 16.857 18.7322 16.8224C18.6699 17.3986 18.4419 17.9445 18.076 18.394C17.7101 18.8435 17.2217 19.1773 16.6701 19.3552C16.1184 19.533 15.5271 19.5472 14.9675 19.3962C14.4079 19.2451 13.9041 18.9351 13.517 18.5038C13.1298 18.0724 12.8759 17.5382 12.7859 16.9656C12.6959 16.393 12.7737 15.8066 13.0099 15.2773C13.2462 14.748 13.6306 14.2985 14.1169 13.9831C14.6031 13.6676 15.1704 13.4998 15.75 13.4999C15.9489 13.4999 16.1396 13.4209 16.2803 13.2802C16.421 13.1396 16.5 12.9488 16.5 12.7499C16.5 12.551 16.421 12.3602 16.2803 12.2195C16.1396 12.0789 15.9489 11.9999 15.75 11.9999C14.6423 11.9991 13.5736 12.4085 12.75 13.1493V6.74988C12.75 5.95423 13.066 5.19117 13.6287 4.62856C14.1913 4.06595 14.9543 3.74988 15.75 3.74988C16.5456 3.74988 17.3087 4.06595 17.8713 4.62856C18.4339 5.19117 18.75 5.95423 18.75 6.74988V7.38082C18.75 7.53583 18.7981 7.68704 18.8875 7.81362C18.977 7.94021 19.1035 8.03595 19.2497 8.08769C20.0848 8.38172 20.789 8.96178 21.2376 9.72517C21.6861 10.4886 21.8501 11.386 21.7004 12.2587C21.5507 13.1314 21.0971 13.923 20.4199 14.4933C19.7426 15.0636 18.8854 15.3759 18 15.3749ZM19.5 10.4999C19.5 10.6988 19.421 10.8896 19.2803 11.0302C19.1396 11.1709 18.9489 11.2499 18.75 11.2499H18.375C17.4799 11.2499 16.6214 10.8943 15.9885 10.2614C15.3556 9.62843 15 8.76998 15 7.87488V7.49988C15 7.30097 15.079 7.1102 15.2196 6.96955C15.3603 6.8289 15.5511 6.74988 15.75 6.74988C15.9489 6.74988 16.1396 6.8289 16.2803 6.96955C16.421 7.1102 16.5 7.30097 16.5 7.49988V7.87488C16.5 8.37216 16.6975 8.84907 17.0491 9.2007C17.4008 9.55233 17.8777 9.74988 18.375 9.74988H18.75C18.9489 9.74988 19.1396 9.8289 19.2803 9.96955C19.421 10.1102 19.5 10.301 19.5 10.4999ZM5.62497 11.2499H5.24997C5.05106 11.2499 4.86029 11.1709 4.71964 11.0302C4.57899 10.8896 4.49997 10.6988 4.49997 10.4999C4.49997 10.301 4.57899 10.1102 4.71964 9.96955C4.86029 9.8289 5.05106 9.74988 5.24997 9.74988H5.62497C6.12225 9.74988 6.59917 9.55233 6.9508 9.2007C7.30243 8.84907 7.49997 8.37216 7.49997 7.87488V7.49988C7.49997 7.30097 7.57899 7.1102 7.71964 6.96955C7.86029 6.8289 8.05106 6.74988 8.24997 6.74988C8.44888 6.74988 8.63965 6.8289 8.7803 6.96955C8.92095 7.1102 8.99997 7.30097 8.99997 7.49988V7.87488C8.99997 8.76998 8.64439 9.62843 8.01146 10.2614C7.37852 10.8943 6.52008 11.2499 5.62497 11.2499Z" fill="#001407"/>
          </svg>
          <h2 className="text-lg font-semibold text-[#001407]">AI Configuration</h2>
        </div>


        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <label className="block text-sm font-medium text-[#001407]">Aisha AI Status</label>
              <p className="mt-1 text-xs text-gray-600">Enable or disable AI-powered responses</p>
            </div>
            <AIToggle isOn={aiEnabled} onChange={() => setAiEnabled(!aiEnabled)} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#001407]">AI Tone</label>
            <select
              value={aiTone}
              onChange={(e) => setAiTone(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#001407] focus:outline-none focus:ring-2 focus:ring-[#D2FF00]"
            >
              <option value="friendly">Friendly & Casual</option>
              <option value="professional">Professional & Formal</option>
              <option value="concise">Concise & Direct</option>
              <option value="empathetic">Empathetic & Supportive</option>
            </select>
            <p className="mt-1 text-xs text-gray-600">This affects how Aisha responds to customers</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#001407]">Human Handoff Message</label>
            <textarea
              value={handoffMessage}
              onChange={(e) => setHandoffMessage(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 text-[#001407] focus:outline-none focus:ring-2 focus:ring-[#D2FF00]"
            />
            <p className="mt-1 text-xs text-gray-600">Message shown when connecting to a human agent</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#001407]">Custom Instructions</label>
            <textarea
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 font-mono text-xs text-[#001407] focus:outline-none focus:ring-2 focus:ring-[#D2FF00]"
            />
            <p className="mt-1 text-xs text-gray-600">
              Define Aisha's personality, rules, and behavior constraints. These instructions override default settings.
            </p>
          </div>

          <button
            onClick={handleSave}
            className="w-full rounded-lg bg-[#D2FF00] px-8 py-2.5 font-medium text-[#001407] transition-colors hover:bg-opacity-90 md:w-auto"
          >
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
