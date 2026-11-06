import React from 'react';
import { Hexagon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-base-black border-t border-base-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2.5 mb-4 text-lg font-bold tracking-tight text-base-white group">
              <div className="w-9 h-9 rounded-xl bg-accent-blue border border-accent-blue flex items-center justify-center text-base-white shadow-sm group-hover:bg-accent-blue/90 transition-colors">
                <Hexagon size={20} className="text-base-white" strokeWidth={2.2} />
              </div>
              <span className="tracking-wider font-extrabold text-base-white text-xl">MOSBEE</span>
            </a>
            <p className="text-sm text-base-white max-w-sm mb-6 leading-relaxed">
              One platform for operations, finance, sales, people, projects and support. Take the bundle or build your own — either way it runs on the same core.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-mono text-xs text-base-white uppercase tracking-wider mb-4 font-bold">
              Products
            </h4>
            <ul className="space-y-2 text-xs text-base-white">
              <li><a href="#suite-section" className="text-base-white hover:text-accent-blue transition-colors">ERP</a></li>
              <li><a href="#suite-section" className="text-base-white hover:text-accent-blue transition-colors">Account Management</a></li>
              <li><a href="#suite-section" className="text-base-white hover:text-accent-blue transition-colors">HRMS</a></li>
              <li><a href="#suite-section" className="text-base-white hover:text-accent-blue transition-colors">CRM</a></li>
              <li><a href="#suite-section" className="text-base-white hover:text-accent-blue transition-colors">PRO</a></li>
              <li><a href="#suite-section" className="text-base-white hover:text-accent-blue transition-colors">Chatbot</a></li>
              <li><a href="#suite-section" className="text-base-white hover:text-accent-blue transition-colors">Project Management</a></li>
              <li><a href="#suite-section" className="text-base-white hover:text-accent-blue transition-colors">Task Management</a></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="font-mono text-xs text-base-white uppercase tracking-wider mb-4 font-bold">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-base-white">
              <li><a href="#pricing-section" className="text-base-white hover:text-accent-blue transition-colors">Pricing</a></li>
              <li><a href="#integrations-section" className="text-base-white hover:text-accent-blue transition-colors">Integrations</a></li>
              <li><a href="#why-bundle" className="text-base-white hover:text-accent-blue transition-colors">Why bundle</a></li>
              <li><a href="#faq-section" className="text-base-white hover:text-accent-blue transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-mono text-xs text-base-white uppercase tracking-wider mb-4 font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-base-white">
              <li><a href="#demo-section" className="text-base-white hover:text-accent-blue transition-colors">Book a demo</a></li>
              <li><a href="#demo-section" className="text-base-white hover:text-accent-blue transition-colors">Contact sales</a></li>
              <li><a href="#why-bundle" className="text-base-white hover:text-accent-blue transition-colors">About us</a></li>
              <li><a href="#faq-section" className="text-base-white hover:text-accent-blue transition-colors">Privacy policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}

      </div>
    </footer>
  );
}
