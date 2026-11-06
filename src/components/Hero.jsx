import React from 'react';

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Eyebrow Pill */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-xs font-mono text-base-white tracking-wide text-center shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-ping"></span>
          <span className="font-semibold text-base-white/90">
            ERP · Accounts · HRMS · CRM · PRO · Chatbot · Projects · Tasks
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-base-white tracking-tight mb-6 leading-tight">
        Run the whole business from{' '}
        <span className="text-accent-yellow">
          one core.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-base-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
        Mosbee puts operations, finance, sales, people, projects and customer support on a single database and a single login. Take the complete suite at a bundle price — or buy only the products you need and add the rest whenever you are ready.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <a
          href="#pricing-section"
          className="w-full sm:w-auto px-6 py-3.5 bg-accent-blue hover:bg-accent-blue/90 text-base-white font-semibold text-sm rounded-xl transition-all active:scale-95 flex items-center justify-center space-x-2 shadow-md shadow-accent-blue/25"
        >
          <span>Get the complete suite</span>
          <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
        </a>
        <a
          href="#suite-section"
          className="w-full sm:w-auto px-6 py-3.5 bg-base-white/5 hover:bg-base-white/10 border border-base-white/20 text-base-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center space-x-2 shadow-sm"
        >
          <span>Explore the products</span>
          <span className="material-symbols-outlined text-[18px]">grid_view</span>
        </a>
      </div>

      {/* Trust Checkpoints */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-base-white/60">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-accent-blue text-[18px]">check_circle</span>
          <span>
            <strong className="text-base-white">14-day pilot</strong> with your own data
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-accent-blue text-[18px]">check_circle</span>
          <span>
            <strong className="text-base-white">Setup &amp; migration</strong> included
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-accent-blue text-[18px]">check_circle</span>
          <span>
            <strong className="text-base-white">Cancel</strong> any time
          </span>
        </div>
      </div>
    </div>
  );
}
