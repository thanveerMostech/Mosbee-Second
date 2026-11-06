import React from 'react';

export default function TrustTicker() {
  return (
    <div className="mt-12 py-3.5 px-6 rounded-xl bg-base-black/80 border border-base-white/10 overflow-x-auto no-scrollbar shadow-sm">
      <div className="flex items-center justify-between min-w-[840px] text-xs font-mono text-base-white/60 divide-x divide-base-white/10">
        <span className="px-4 text-accent-blue font-bold flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
          Every branch on one live ledger
        </span>
        <span className="px-4 shrink-0">GST-ready invoicing</span>
        <span className="px-4 shrink-0">Cloud, on-prem or hybrid</span>
        <span className="px-4 shrink-0">SSO, roles &amp; audit logs</span>
        <span className="px-4 text-accent-yellow font-bold shrink-0">99.9% uptime SLA</span>
        <span className="px-4 shrink-0">24/7 support</span>
        <span className="px-4 text-accent-blue font-bold shrink-0">Open REST API</span>
      </div>
    </div>
  );
}
