import React, { useState } from 'react';

const faqs = [
  {
    q: 'Can I buy only some of the products?',
    a: 'Yes. Every product is available on its own — ERP, Account Management, HRMS, CRM, PRO, Chatbot, Project Management and Task Management. If you buy one, you still get the shared Mosbee core, the same login, the same API and the same support team. Add another product mid-term and you only pay the difference for the remaining period.',
  },
  {
    q: 'What exactly does the bundle include?',
    a: 'All eight products on a single subscription, plus the shared layer: the unified dashboard, cross-module reporting, single sign-on, role policies, workflow automation between modules, data migration, a named onboarding manager, 24/7 support and a quarterly business review.',
  },
  {
    q: 'How long does implementation take?',
    a: 'A single module usually goes live in one to three weeks. The full suite typically takes six to ten weeks, depending on data volume, number of locations and how many processes need custom fields. You get a fixed scope and a fixed implementation quote before we start.',
  },
  {
    q: 'Do we have to leave our current software first?',
    a: 'No. We import master data and open balances from Excel, Tally, Zoho or QuickBooks and run both systems in parallel for two cycles so every figure is verified before cutover. Nothing goes live until you have signed off on the numbers.',
  },
  {
    q: 'Is it GST, e-invoice and payroll compliant?',
    a: 'Yes. GST invoices, returns and e-invoice/e-way bill are handled natively, and payroll covers PF, ESI, TDS and payslip self-service with statutory reports built in. Multi-branch and multi-state GST registration is supported.',
  },
  {
    q: 'Where does it run — cloud, on-premise or hybrid?',
    a: 'All three. Cloud is the fastest route and gets updates continuously. On-premise suits teams with strict data-residency rules. Hybrid keeps payroll and reporting in-house while the rest runs in the cloud.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20" id="faq-section">
      {/* Executive Testimonials (White BG, Blue Quote Marks, No Yellow) */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <div className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2 font-bold">
            CUSTOMER STORIES
          </div>
          <h2 className="text-3xl font-bold text-base-black tracking-tight">
            Trusted by operations-first teams.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-base-white border border-base-black/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-accent-blue text-[36px] leading-none mb-3 block select-none">
                format_quote
              </span>
              <p className="text-sm text-base-black/80 leading-relaxed mb-6">
                &ldquo;Replacing four disconnected tools with Mosbee cut our month-end reconciliation from five days to four hours. Sales, inventory and GST billing finally read from the exact same ledger.&rdquo;
              </p>
            </div>
            <div className="border-t border-base-black/10 pt-4">
              <div className="font-bold text-sm text-base-black">Rajesh Menon</div>
              <div className="font-mono text-xs text-base-black/60">VP Operations · Apex Manufacturing</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-base-white border border-base-black/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-accent-blue text-[36px] leading-none mb-3 block select-none">
                format_quote
              </span>
              <p className="text-sm text-base-black/80 leading-relaxed mb-6">
                &ldquo;We started with HRMS and Accounts, then switched on CRM and ERP two months later without migrating a single record. One login and one support team made all the difference.&rdquo;
              </p>
            </div>
            <div className="border-t border-base-black/10 pt-4">
              <div className="font-bold text-sm text-base-black">Ananya Deshmukh</div>
              <div className="font-mono text-xs text-base-black/60">Chief Financial Officer · Verve Retail Group</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <div className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2 font-bold">
          FAQ
        </div>
        <h2 className="text-3xl font-bold text-base-black tracking-tight">
          The questions every buyer asks.
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-base-black/10 rounded-2xl bg-base-white overflow-hidden shadow-sm transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="faq-toggle w-full p-5 text-left flex items-center justify-between text-base font-semibold text-base-black hover:text-accent-blue transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className="material-symbols-outlined text-accent-blue transition-transform text-[22px]">
                  {isOpen ? 'remove' : 'add'}
                </span>
              </button>
              {isOpen && (
                <div className="faq-content px-5 pb-5 text-sm text-base-black/70 border-t border-base-black/10 pt-4 leading-relaxed animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
