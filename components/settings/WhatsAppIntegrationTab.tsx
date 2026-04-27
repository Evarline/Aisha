"use client";

import { useState } from "react";
import { Zap, ShieldCheck, ArrowLeft, CheckCircle, Phone } from "lucide-react";

type IntegrationStep = "gateway" | "input" | "verification" | "success";

export function WhatsAppIntegrationTab() {
  const [currentStep, setCurrentStep] = useState<IntegrationStep>("gateway");
  const [phoneNumber, setPhoneNumber] = useState("+254712345678");
  const [pairingCode] = useState("AB12-CD34");

  const handleReset = () => {
    setCurrentStep("gateway");
    setPhoneNumber("+254712345678");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#FFFFFF] rounded-xl shadow-sm border border-gray-200 p-6">
        {/* Step 1: Gateway Selection */}
        {currentStep === "gateway" && (
          <div>
            <h2 className="text-lg font-semibold text-[#001407] mb-4">Connect WhatsApp</h2>
            <p className="text-sm text-gray-600 mb-6">Choose your preferred connection method:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Quick Connect Card */}
              <button
                onClick={() => setCurrentStep("input")}
                className="border-2 border-gray-300 rounded-lg p-6 hover:border-[#D2FF00] hover:bg-gray-50 transition-all text-left"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-[#D2FF00]" />
                  <h3 className="font-semibold text-[#001407]">Quick Connect</h3>
                </div>
                <p className="text-sm text-gray-600">Connect using a pairing code. Fast and easy setup.</p>
              </button>

              {/* Official Meta API Card */}
              <button
                onClick={() => alert("Meta API integration coming soon!")}
                className="border-2 border-gray-300 rounded-lg p-6 hover:border-[#D2FF00] hover:bg-gray-50 transition-all text-left opacity-60 cursor-not-allowed"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-gray-400" />
                  <h3 className="font-semibold text-[#001407]">Official Meta API</h3>
                </div>
                <p className="text-sm text-gray-600">100% stable. Enterprise-grade integration.</p>
                <p className="text-xs text-gray-500 mt-2">(Coming Soon)</p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Input Phone Number */}
        {currentStep === "input" && (
          <div>
            <button
              onClick={() => setCurrentStep("gateway")}
              className="flex items-center gap-2 text-[#001407] font-medium mb-6 hover:text-opacity-70"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <h2 className="text-lg font-semibold text-[#001407] mb-4">Enter Phone Number</h2>
            <p className="text-sm text-gray-600 mb-6">Enter your WhatsApp-registered phone number:</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#001407] mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+254712345678"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2FF00] text-[#001407]"
                />
              </div>

              <button
                onClick={() => setCurrentStep("verification")}
                className="w-full px-4 py-2.5 bg-[#D2FF00] text-[#001407] font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Generate Code
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Verification / Pairing Code */}
        {currentStep === "verification" && (
          <div>
            <button
              onClick={() => setCurrentStep("input")}
              className="flex items-center gap-2 text-[#001407] font-medium mb-6 hover:text-opacity-70"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <h2 className="text-lg font-semibold text-[#001407] mb-4">Link Your Phone</h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
              <p className="text-sm text-gray-600 mb-4">Your Pairing Code:</p>
              <div className="bg-[#001407] rounded-lg p-4 mb-4">
                <p className="text-4xl font-bold text-[#D2FF00] font-mono tracking-widest">{pairingCode}</p>
              </div>
              <p className="text-xs text-gray-500">Code expires in 5 minutes</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-[#001407]">
                <strong>On your phone:</strong>
              </p>
              <ol className="text-sm text-gray-700 list-decimal list-inside mt-2 space-y-1">
                <li>Open WhatsApp</li>
                <li>Go to Settings → Linked Devices</li>
                <li>Tap "Link a Device"</li>
                <li>Enter this code: <strong>{pairingCode}</strong></li>
              </ol>
            </div>

            <button
              onClick={() => setCurrentStep("success")}
              className="w-full px-4 py-2.5 bg-[#D2FF00] text-[#001407] font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Simulate Connection
            </button>
          </div>
        )}

        {/* Step 4: Success */}
        {currentStep === "success" && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>

            <h2 className="text-2xl font-semibold text-[#001407] mb-2">Connected!</h2>
            <p className="text-lg font-medium text-green-600 mb-4 flex items-center justify-center gap-2">
              <span>🟢</span> Connected to {phoneNumber}
            </p>
            <p className="text-sm text-gray-600 mb-8">
              Your WhatsApp account is now linked. All messages will be received through Aisha AI.
            </p>

            <button
              onClick={handleReset}
              className="w-full px-4 py-2.5 bg-[#FF4D4D] text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
