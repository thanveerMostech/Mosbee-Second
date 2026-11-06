import React from 'react';

const reasons = [
  {
    num: '01',
    title: 'One database',
    desc: 'Customer, supplier and employee records are entered once and shared by all eight products. No more exporting CSVs to make two systems agree.',
  },
  {
    num: '02',
    title: 'One login and one role map',
    desc: 'SSO, role policies and approval limits apply everywhere, not just inside whichever tool someone happened to open that morning.',
  },
  {
    num: '03',
    title: 'One workflow engine',
    desc: 'A CRM approval can trigger an ERP purchase order, an HR leave request and an AI customer reply — from a single rule you configure once.',
  },
  {
    num: '04',
    title: 'One invoice, one partner',
    desc: 'A single subscription, one implementation lead and one support SLA — instead of eight vendors pointing at each other when something breaks.',
  },
  {
    num: '05',
    title: 'One reporting layer',
    desc: 'Consolidated P&L, headcount, pipeline and stock in a single dashboard. The board pack builds itself instead of being assembled by hand.',
  },
  {
    num: '06',
    title: 'One AI layer',
    desc: 'The chatbot and Pro analytics learn from the same live records your team works on, so their answers match what is actually happening in the business.',
  },
];

export default function WhyBundle() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="why-bundle">
      <div className="max-w-3xl mb-16">
        <div className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2 font-bold">
          WHY THE BUNDLE WINS
        </div>
        <h2 className="text-3xl font-bold text-base-white tracking-tight mb-4">
          Buying separately is cheaper on paper. Running separately is not.
        </h2>
        <p className="text-base-white/60 leading-relaxed">
          The moment finance, sales and operations live in different systems, your team becomes the integration layer — re-typing the same customer, chasing the same stock number and reconciling the same invoice twice. The bundle removes that tax.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item) => (
          <div
            key={item.num}
            className="p-6 rounded-2xl bg-accent-blue/10 border border-base-white/10 hover:border-accent-blue hover:shadow-md transition-all group"
          >
            <div className="text-3xl font-extrabold text-accent-yellow mb-3 font-mono transition-colors">
              {item.num}
            </div>
            <h3 className="text-lg font-bold text-base-white mb-2">{item.title}</h3>
            <p className="text-sm text-base-white/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
