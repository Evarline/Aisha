import React from "react";

export default function Pricing() {
  return (
    <section className="w-full py-24 px-4 md:px-8 bg-[#f5f5f5] flex flex-col items-center">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#001407] mb-4 tracking-wide">
          Find Your Perfect Plan
        </h2>
        <p className="text-lg text-gray-600">
          All plans include our core features to get you started. Upgrade anytime.
        </p>
      </div>

      {/* Toggle */}
      <div className="relative flex flex-col items-center mb-16">
        <div className="flex bg-white rounded-md border-2 border-[#001407] p-1 relative z-10 w-fit">
          <button className="px-6 py-2 rounded bg-[#001407] text-white font-semibold text-sm transition-colors">
            Monthly
          </button>
          <button className="px-6 py-2 rounded text-[#001407] font-semibold text-sm hover:bg-gray-100 transition-colors">
            Yearly
          </button>
        </div>
        <div className="absolute -right-8 -top-4 z-20">
          <span className="bg-[#001407] text-[#D2FF00] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            Save 20%
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 w-full max-w-6xl mb-16">
        
        {/* Basic Plan */}
        <div className="flex flex-col w-full max-w-sm rounded-[24px] border border-white/20 bg-white/40 backdrop-blur-md p-8 pt-10 text-center relative hover:shadow-lg transition-all duration-300 pb-8 hover:-translate-y-1">
          <h3 className="text-3xl font-bold text-[#001407] mb-2">Basic</h3>
          <div className="mb-8">
            <span className="text-4xl font-bold text-[#001407]">KES 500</span>
            <span className="text-[#001407] font-semibold">/mo</span>
          </div>
          <ul className="flex flex-col gap-4 text-left text-[#001407] font-medium mb-10 flex-grow text-lg">
            <li className="flex items-start gap-3"><span>✓</span> Up to 50 client conversations/month</li>
            <li className="flex items-start gap-3"><span>✓</span> Basic inquiry management</li>
            <li className="flex items-start gap-3"><span>✓</span> Standard local personality responses</li>
            <li className="flex items-start gap-3"><span>✓</span> Payment confirmation (20 trans.)</li>
            <li className="flex items-start gap-3"><span>✓</span> WhatsApp integration</li>
            <li className="flex items-start gap-3"><span>✓</span> Email support</li>
          </ul>
          <button className="w-full py-4 rounded-full bg-[#001407] text-[#D2FF00] font-semibold text-lg hover:bg-opacity-90 transition-colors mt-auto">
            Start free trial
          </button>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col w-full max-w-sm rounded-[24px] border-2 border-[#D2FF00] bg-[#001407] p-8 pt-10 text-center relative shadow-xl transform lg:-translate-y-4 pb-8">
          <div className="absolute top-0 right-0 overflow-hidden w-[120px] h-[120px] rounded-tr-[24px]">
            <div className="absolute top-[25px] -right-[35px] w-[160px] bg-[#D2FF00] text-[#001407] font-bold py-1 px-4 transform rotate-45 text-center text-[10px] sm:text-xs tracking-wider border-y-2 border-[#D2FF00]">
              OPTIMAL <br/> SELECTION
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-2">Premium</h3>
          <div className="mb-8">
            <span className="text-4xl font-bold text-[#D2FF00]">KES 1500</span>
            <span className="text-[#D2FF00] font-semibold">/mo</span>
          </div>
          <ul className="flex flex-col gap-4 text-left text-white font-medium mb-10 flex-grow text-lg">
            <li className="flex items-start gap-3"><span className="text-[#D2FF00]">✓</span> 300 client conversations/month</li>
            <li className="flex items-start gap-3"><span className="text-[#D2FF00]">✓</span> Advanced ghosting prevention</li>
            <li className="flex items-start gap-3"><span className="text-[#D2FF00]">✓</span> Automated follow-up sequences</li>
            <li className="flex items-start gap-3"><span className="text-[#D2FF00]">✓</span> Payment link integration (M-Pesa)</li>
            <li className="flex items-start gap-3"><span className="text-[#D2FF00]">✓</span> Shipping coordination</li>
            <li className="flex items-start gap-3"><span className="text-[#D2FF00]">✓</span> Priority AI personality training</li>
            <li className="flex items-start gap-3"><span className="text-[#D2FF00]">✓</span> Enhanced analytics dashboard</li>
            <li className="flex items-start gap-3"><span className="text-[#D2FF00]">✓</span> Phone & email support</li>
            <li className="flex items-start gap-3"><span className="text-[#D2FF00]">✓</span> Custom response templates</li>
          </ul>
          <button className="w-full py-4 rounded-full bg-[#D2FF00] text-[#001407] font-semibold text-lg hover:bg-opacity-90 transition-colors mt-auto">
            Get premium
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col w-full max-w-sm rounded-[24px] border border-white/20 bg-white/40 backdrop-blur-md p-8 pt-10 text-center relative hover:shadow-lg transition-all duration-300 pb-8 hover:-translate-y-1">
          <div className="mb-2">
            <h3 className="text-3xl font-bold text-[#001407]">Enterprise</h3>
            <p className="text-[#001407] text-sm mt-1 font-medium">For larger teams & custom workflows</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold text-[#001407]">KES 2500</span>
            <span className="text-[#001407] font-semibold">/mo</span>
          </div>
          <ul className="flex flex-col gap-4 text-left text-[#001407] font-medium mb-10 flex-grow text-lg">
            <li className="flex items-start gap-3"><span>✓</span> Unlimited conversations</li>
            <li className="flex items-start gap-3"><span>✓</span> Custom AI personality tuning</li>
            <li className="flex items-start gap-3"><span>✓</span> Multi-user access</li>
            <li className="flex items-start gap-3"><span>✓</span> Advanced reporting & insights</li>
            <li className="flex items-start gap-3"><span>✓</span> Priority onboarding</li>
            <li className="flex items-start gap-3"><span>✓</span> Dedicated account manager</li>
            <li className="flex items-start gap-3"><span>✓</span> API access (future)</li>
            <li className="flex items-start gap-3"><span>✓</span> Custom workflow automation</li>
            <li className="flex items-start gap-3"><span>✓</span> White-label options</li>
          </ul>
          <button className="w-full py-4 rounded-full bg-white/60 border-2 border-[#001407] text-[#001407] font-semibold text-lg hover:bg-white transition-colors mt-auto">
            Book a demo
          </button>
        </div>

      </div>

      {/* Footer Info */}
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 w-full max-w-4xl pt-8">
        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
          <span className="text-[#001407] text-lg font-semibold">Free Trial</span>
          <span className="text-gray-600 text-sm font-medium">
            14-day free trial with full features<br/>No credit card required
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
          <span className="text-[#001407] text-lg font-semibold">Local Payments</span>
          <span className="text-gray-600 text-sm font-medium">
            Pay via M-Pesa, bank transfer, or card<br/>Instant activation
          </span>
        </div>
      </div>
    </section>
  );
}
