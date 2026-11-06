import React, { useState } from 'react';

const productsPricing = [
  { name: 'ERP', price: 1299 },
  { name: 'Account Management', price: 699 },
  { name: 'HRMS', price: 799 },
  { name: 'CRM', price: 599 },
  { name: 'PRO', price: 899 },
  { name: 'Chatbot', price: 499 },
  { name: 'Project Management', price: 599 },
  { name: 'Task Management', price: 449 },
];

export default function PricingSection({ selectedProducts, onToggleProduct, onStartPilotWithPlan }) {
  const [billingCycle, setBillingCycle] = useState('annual');

  const selectedCount = Object.values(selectedProducts).filter(Boolean).length;
  const totalPrice = productsPricing.reduce((sum, item) => {
    return selectedProducts[item.name] ? sum + item.price : sum;
  }, 0);

  const bundleMonthlyPrice = billingCycle === 'annual' ? 2499 : 2999;

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-20 relative"
      id="pricing-section"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2 font-bold">
          PRICING
        </div>
        <h2 className="text-3xl font-bold text-base-white tracking-tight mb-4">
          Take the bundle, or build your own.
        </h2>
        <p className="text-base-white/60 leading-relaxed">
          Both routes run on the same platform, the same database and the same support team — so you can start with one product and widen later without a re-implementation. Indicative list pricing per user, per month.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Complete Suite Card */}
        <div className="lg:col-span-6 h-full bg-base-black border-2 border-accent-blue rounded-2xl p-8 relative overflow-hidden shadow-xl flex flex-col justify-between">
          <div className="absolute top-0 right-0">
            <span className="inline-block bg-accent-yellow text-base-black text-xs font-mono font-extrabold px-4 py-1.5 rounded-bl-xl shadow-sm uppercase">
              Most Popular
            </span>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-base-white">Complete Suite</h3>
              <p className="text-sm text-base-white/60 mt-1">
                All eight products, one subscription, one invoice.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="inline-flex items-center space-x-2 p-1 bg-base-white/5 rounded-xl border border-base-white/10 mb-6 font-mono text-xs">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-accent-blue text-base-white font-bold shadow-sm'
                    : 'text-base-white/60 hover:text-base-white font-medium'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-accent-blue text-base-white font-bold shadow-sm'
                    : 'text-base-white/60 hover:text-base-white font-medium'
                }`}
              >
                Annual — 2 months free
              </button>
            </div>

            <div className="mb-6 pb-6 border-b border-base-white/10">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl lg:text-5xl font-extrabold text-base-white">
                  ₹{bundleMonthlyPrice.toLocaleString('en-IN')}
                </span>
                <span className="font-mono text-base-white/60 text-xs">
                  {billingCycle === 'annual'
                    ? 'per user / month, billed annually (10 months free)'
                    : 'per user / month, billed monthly'}
                </span>
              </div>
              <p className="text-xs text-base-white/60 mt-2">
                Minimum 5 users. One-time setup and data migration quoted separately after the discovery call.
              </p>
            </div>

            <ul className="space-y-3.5 mb-8 text-sm text-base-white/80">
              <li className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent-blue text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>
                  <strong className="text-base-white">Every product included:</strong> ERP, Account Management, HRMS, CRM, PRO, Chatbot, Project Management and Task Management
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent-blue text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>
                  <strong className="text-base-white">Unified dashboard</strong> across finance, sales, people and operations
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent-blue text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>
                  <strong className="text-base-white">Single sign-on</strong>, role policies and cross-module audit logs
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent-blue text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>
                  <strong className="text-base-white">Data migration</strong> from Excel, Tally, Zoho or QuickBooks
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent-blue text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>
                  <strong className="text-base-white">Named onboarding manager</strong> for the first 90 days
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent-blue text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>
                  <strong className="text-base-white">24/7 support</strong> with a 2-hour response on priority incidents
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent-blue text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>
                  <strong className="text-base-white">Quarterly business review</strong> and roadmap input
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent-blue text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>
                  <strong className="text-base-white">POS &amp; statutory compliance:</strong> GST e-invoicing, e-way bills, PF, ESI and TDS built in
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent-blue text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>
                  <strong className="text-base-white">Unlimited cross-module workflows</strong>, REST API access and real-time webhooks
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-base-white/10">
            <div className="p-4 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-base-white flex items-center justify-between mb-4 shadow-sm">
              <div>
                <span className="font-mono text-xs text-accent-blue block font-bold">
                  BUNDLE SAVINGS VS. INDIVIDUAL MODULES
                </span>
                <span className="text-xs text-base-white/60">
                  All 8 modules bought separately cost ₹5,842 / user / mo
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-base-white font-mono shrink-0 ml-3">
                Save {billingCycle === 'annual' ? '57%' : '49%'}
              </div>
            </div>

            <div className="text-xs font-mono text-base-white/60 mb-4">
              You save <strong className="text-base-white font-bold">₹{(5842 - bundleMonthlyPrice).toLocaleString('en-IN')}</strong> per user / month with the Complete Suite.
            </div>

            <a
              href="#demo-section"
              className="w-full py-4 bg-accent-blue hover:bg-accent-blue/90 text-base-white font-mono font-bold text-center block rounded-xl transition-all shadow-md shadow-accent-blue/20 active:scale-95"
            >
              Start the 14-day pilot
            </a>
            <p className="text-center font-mono text-xs text-base-white/60 mt-3 font-medium">
              Pilot runs on your own data. No card, no commitment.
            </p>
          </div>
        </div>

        {/* Build Your Own Configurator */}
        <div className="lg:col-span-6 h-full bg-base-black border border-base-white/15 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-base-white">Build your own</h3>
              <p className="text-sm text-base-white/60 mt-1">
                Tick only what you need. Add or remove products any time — you only pay the difference for the remaining term.
              </p>
            </div>

            {/* Checklist */}
            <div id="pricing-checklist" className="space-y-2.5 my-6">
              {productsPricing.map((item) => {
                const isChecked = !!selectedProducts[item.name];
                return (
                  <label
                    key={item.name}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-colors ${
                      isChecked
                        ? 'border-accent-blue bg-accent-blue/10'
                        : 'bg-base-white/5 border-base-white/10 hover:border-accent-blue/40 hover:bg-accent-blue/5'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onToggleProduct(item.name)}
                        className="h-4 w-4 rounded bg-base-black border-base-white/30 text-accent-blue focus:ring-accent-blue cursor-pointer"
                      />
                      <span className="font-mono text-base-white font-semibold text-sm">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-mono text-base-white/70 font-medium text-sm">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-base-white/10">
            <div className="p-4 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-base-white flex items-center justify-between mb-4 shadow-sm">
              <div>
                <span className="font-mono text-xs text-accent-blue block font-bold">
                  YOUR PLAN, PER USER / MONTH
                </span>
                <span id="selected-hint" className="text-xs text-base-white/60">
                  {selectedCount === 0
                    ? 'Select the products you need'
                    : `${selectedCount} product${selectedCount > 1 ? 's' : ''} selected`}
                </span>
              </div>
              <div id="calc-total" className="text-3xl font-extrabold text-base-white font-mono">
                ₹{totalPrice.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="text-xs font-mono text-base-white/60 mb-4">
              The complete suite is <strong className="text-base-white font-bold">₹2,499</strong> per user / month.
            </div>

            <a
              href="#demo-section"
              onClick={() => onStartPilotWithPlan && onStartPilotWithPlan()}
              className="w-full py-4 bg-accent-blue hover:bg-accent-blue/90 text-base-white font-mono font-bold text-center block rounded-xl transition-all shadow-md shadow-accent-blue/20 active:scale-95"
            >
              Get my custom quote
            </a>
            <p className="font-mono text-xs text-base-white/60 text-center mt-3 font-medium">
              Volume pricing above 25 users. Non-profit and education pricing available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
