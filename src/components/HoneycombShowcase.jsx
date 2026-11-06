import React, { useState } from 'react';
import {
  Wallet,
  Package,
  Users,
  TrendingUp,
  Network,
  BarChart3,
  FolderKanban,
  Bot,
  CheckSquare,
  CheckCircle2,
} from 'lucide-react';
import { productRegistry } from '../data/products';

export default function HoneycombShowcase() {
  const [selectedKey, setSelectedKey] = useState('erp');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const selectedProduct = productRegistry[selectedKey] || productRegistry.erp;

  const handleSelect = (key) => {
    if (key === selectedKey) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedKey(key);
      setIsTransitioning(false);
    }, 150);
  };

  const hexNodes = [
    // Row 1
    { key: 'accounts', label: 'Accounts', sub: 'Finance', Icon: Wallet },
    { key: 'erp', label: 'ERP', sub: 'Operations', Icon: Package, isPrimary: true },
    { key: 'hrms', label: 'HRMS', sub: 'People', Icon: Users },
    // Row 2
    { key: 'crm', label: 'CRM', sub: 'Sales', Icon: TrendingUp },
    // (Center Core)
    { key: 'pro', label: 'PRO', sub: 'Power Tier', Icon: BarChart3 },
    // Row 3
    { key: 'projects', label: 'Projects', sub: 'Delivery', Icon: FolderKanban },
    { key: 'chatbot', label: 'Chatbot', sub: 'Support', Icon: Bot },
    { key: 'tasks', label: 'Tasks', sub: 'Delivery', Icon: CheckSquare },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Honeycomb Cluster Architecture */}
      <div className="lg:col-span-5 bg-base-black border border-base-white/10 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between shadow-sm">
        <div className="flex items-center justify-between border-b border-base-white/10 pb-3.5 mb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse"></span>
            <span className="font-mono text-xs text-base-white font-bold uppercase tracking-wider">
              MOSBEE ARCHITECTURE
            </span>
          </div>
          <span className="font-mono text-[11px] text-base-white px-2.5 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
            <span>LIVE CLUSTER</span>
          </span>
        </div>

        <div className="text-center mb-2">
          <span className="text-[12px] font-mono text-base-white/60 font-medium">
            Tap any product node to preview live dashboard telemetry
          </span>
        </div>

        {/* Honeycomb SVG + Hexagon Nodes */}
        <div className="relative py-4 my-auto flex flex-col items-center justify-center select-none">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-0"
            viewBox="0 0 420 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="210" y1="170" x2="135" y2="72" stroke="#2563EB" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.35" />
            <line x1="210" y1="170" x2="285" y2="72" stroke="#2563EB" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.35" />
            <line x1="210" y1="170" x2="60" y2="170" stroke="#2563EB" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.35" />
            <line x1="210" y1="170" x2="360" y2="170" stroke="#2563EB" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.35" />
            <line x1="210" y1="170" x2="135" y2="268" stroke="#2563EB" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.35" />
            <line x1="210" y1="170" x2="285" y2="268" stroke="#2563EB" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.35" />
            <line x1="210" y1="170" x2="210" y2="52" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="210" cy="170" r="115" stroke="#2563EB" strokeDasharray="4 4" strokeOpacity="0.25" />
          </svg>

          {/* Hexagon Rows */}
          <div className="relative z-10 flex flex-col items-center space-y-[-16px]">
            {/* ROW 1 */}
            <div className="flex items-center space-x-2">
              {['accounts', 'erp', 'hrms'].map((key) => {
                const item = hexNodes.find((n) => n.key === key);
                const IconComponent = item.Icon;
                const isActive = selectedKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleSelect(key)}
                    className={`hex-border-wrap group relative w-[102px] h-[108px] p-[2.5px] hex-shape focus:outline-none cursor-pointer transition-all ${isActive
                        ? 'active-hex bg-accent-blue shadow-lg shadow-accent-blue/30'
                        : 'bg-base-white/20'
                      }`}
                  >
                    <div
                      className={`w-full h-full hex-shape flex flex-col items-center justify-center p-2 text-center transition-colors relative ${isActive
                          ? 'bg-accent-blue text-base-white'
                          : 'bg-base-black group-hover:bg-accent-blue/10'
                        }`}
                    >
                      {isActive && (
                        <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-base-white animate-ping"></div>
                      )}
                      <IconComponent
                        size={19}
                        className={`mb-1 transition-colors ${isActive ? 'text-base-white' : 'text-accent-blue'
                          }`}
                      />
                      <span
                        className={`font-sans font-bold text-[11px] leading-tight block ${isActive ? 'text-base-white' : 'text-base-white'
                          }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`text-[9px] font-mono ${isActive ? 'text-base-white/80 font-semibold' : 'text-base-white/60'
                          }`}
                      >
                        {item.sub}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ROW 2 with CENTER CORE */}
            <div className="flex items-center space-x-2">
              {/* CRM */}
              {(() => {
                const isActive = selectedKey === 'crm';
                return (
                  <button
                    type="button"
                    onClick={() => handleSelect('crm')}
                    className={`hex-border-wrap group relative w-[102px] h-[108px] p-[2.5px] hex-shape focus:outline-none cursor-pointer transition-all ${isActive
                        ? 'active-hex bg-accent-blue shadow-lg shadow-accent-blue/30'
                        : 'bg-base-white/20'
                      }`}
                  >
                    <div
                      className={`w-full h-full hex-shape flex flex-col items-center justify-center p-2 text-center transition-colors ${isActive
                          ? 'bg-accent-blue text-base-white'
                          : 'bg-base-black group-hover:bg-accent-blue/10'
                        }`}
                    >
                      {isActive && (
                        <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-base-white animate-ping"></div>
                      )}
                      <TrendingUp
                        size={19}
                        className={`mb-1 transition-colors ${isActive ? 'text-base-white' : 'text-accent-blue'
                          }`}
                      />
                      <span
                        className={`font-sans font-bold text-[11px] leading-tight block ${isActive ? 'text-base-white' : 'text-base-white'
                          }`}
                      >
                        CRM
                      </span>
                      <span
                        className={`text-[9px] font-mono ${isActive ? 'text-base-white/80 font-semibold' : 'text-base-white/60'
                          }`}
                      >
                        Sales
                      </span>
                    </div>
                  </button>
                );
              })()}

              {/* CENTER CORE */}
              <div className="relative w-[122px] h-[130px] p-[2.5px] bg-accent-blue hex-shape shadow-xl shadow-accent-blue/40 z-20">
                <div className="w-full h-full bg-base-black hex-shape flex flex-col items-center justify-center p-2 text-center text-base-white">
                  <Network
                    size={24}
                    className="text-accent-blue mb-1 animate-pulse"
                  />
                  <span className="text-[12px] font-extrabold text-base-white tracking-tight">
                    MOSBEE
                  </span>

                  <span className="text-[7.5px] font-mono text-base-white/60 leading-none mt-1">
                    1 Shared DB
                  </span>
                </div>
              </div>

              {/* PRO */}
              {(() => {
                const isActive = selectedKey === 'pro';
                return (
                  <button
                    type="button"
                    onClick={() => handleSelect('pro')}
                    className={`hex-border-wrap group relative w-[102px] h-[108px] p-[2.5px] hex-shape focus:outline-none cursor-pointer transition-all ${isActive
                        ? 'active-hex bg-accent-blue shadow-lg shadow-accent-blue/30'
                        : 'bg-base-white/20'
                      }`}
                  >
                    <div
                      className={`w-full h-full hex-shape flex flex-col items-center justify-center p-2 text-center transition-colors ${isActive
                          ? 'bg-accent-blue text-base-white'
                          : 'bg-base-black group-hover:bg-accent-blue/10'
                        }`}
                    >
                      {isActive && (
                        <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-base-white animate-ping"></div>
                      )}
                      <BarChart3
                        size={19}
                        className={`mb-1 transition-colors ${isActive ? 'text-base-white' : 'text-accent-blue'
                          }`}
                      />
                      <span
                        className={`font-sans font-bold text-[11px] leading-tight block ${isActive ? 'text-base-white' : 'text-base-white'
                          }`}
                      >
                        PRO
                      </span>
                      <span
                        className={`text-[9px] font-mono ${isActive ? 'text-base-white/80 font-semibold' : 'text-base-white/60'
                          }`}
                      >
                        Power Tier
                      </span>
                    </div>
                  </button>
                );
              })()}
            </div>

            {/* ROW 3 */}
            <div className="flex items-center space-x-2">
              {['projects', 'chatbot', 'tasks'].map((key) => {
                const item = hexNodes.find((n) => n.key === key);
                const IconComponent = item.Icon;
                const isActive = selectedKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleSelect(key)}
                    className={`hex-border-wrap group relative w-[102px] h-[108px] p-[2.5px] hex-shape focus:outline-none cursor-pointer transition-all ${isActive
                        ? 'active-hex bg-accent-blue shadow-lg shadow-accent-blue/30'
                        : 'bg-base-white/20'
                      }`}
                  >
                    <div
                      className={`w-full h-full hex-shape flex flex-col items-center justify-center p-2 text-center transition-colors ${isActive
                          ? 'bg-accent-blue text-base-white'
                          : 'bg-base-black group-hover:bg-accent-blue/10'
                        }`}
                    >
                      {isActive && (
                        <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-base-white animate-ping"></div>
                      )}
                      <IconComponent
                        size={19}
                        className={`mb-1 transition-colors ${isActive ? 'text-base-white' : 'text-accent-blue'
                          }`}
                      />
                      <span
                        className={`font-sans font-bold text-[11px] leading-tight block ${isActive ? 'text-base-white' : 'text-base-white'
                          }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`text-[9px] font-mono ${isActive ? 'text-base-white/80 font-semibold' : 'text-base-white/60'
                          }`}
                      >
                        {item.sub}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-3.5 border-t border-base-white/10 flex items-center justify-between">
          <span className="font-mono text-[11px] text-base-white/60">
            Unified data bus: zero synchronization sync lag.
          </span>
          <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-accent-blue font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
            <span>SYNCHRONIZED</span>
          </span>
        </div>
      </div>

      {/* Live Preview Showcase Panel */}
      <div
        id="preview-panel"
        className={`lg:col-span-7 bg-base-black border border-base-white/10 rounded-2xl overflow-hidden flex flex-col justify-between group shadow-md transition-opacity duration-300 ${isTransitioning ? 'opacity-60' : 'opacity-100'
          }`}
      >
        <div className="p-4 border-b border-base-white/10 flex flex-wrap items-center justify-between gap-2 bg-base-white/5">
          <div className="flex items-center space-x-3">
            <span
              id="preview-badge"
              className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-accent-blue text-base-white border border-accent-blue font-bold uppercase shadow-sm"
            >
              {selectedProduct.badge}
            </span>
            <span id="preview-title" className="text-base font-bold text-base-white">
              {selectedProduct.label}
            </span>
            <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-accent-blue font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
              <span id="preview-state">LIVE TELEMETRY PREVIEW</span>
            </span>
          </div>
          <div id="preview-subtag" className="font-mono text-xs text-base-white/60 font-semibold uppercase">
            {selectedProduct.subtag}
          </div>
        </div>

        <div className="relative bg-base-white/5 p-4 overflow-hidden flex items-center justify-center min-h-[290px] sm:min-h-[340px]">
          <img
            id="preview-img"
            src={selectedProduct.img}
            alt={selectedProduct.alt}
            onError={(e) => {
              if (selectedProduct.fallbackImg && e.target.src !== selectedProduct.fallbackImg) {
                e.target.src = selectedProduct.fallbackImg;
              }
            }}
            className="w-full h-auto max-h-[360px] object-cover rounded-xl border border-base-white/10 shadow-md transition-all duration-300"
          />
        </div>

        <div className="p-6 bg-base-black border-t border-base-white/10">
          <h4 id="preview-heading" className="text-base font-bold text-base-white mb-2">
            {selectedProduct.heading}
          </h4>
          <p id="preview-desc" className="text-sm text-base-white/60 mb-4">
            {selectedProduct.desc}
          </p>
          <div id="preview-bullets" className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedProduct.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-base-white/80">
                <CheckCircle2
                  size={16}
                  className="text-accent-blue shrink-0 mt-0.5"
                />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
