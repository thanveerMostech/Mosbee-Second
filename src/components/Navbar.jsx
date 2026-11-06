import React, { useState } from 'react';
import { Hexagon, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('products');

  const navLinks = [
    { id: 'suite-section', label: 'Products', key: 'products' },
    { id: 'pricing-section', label: 'Pricing', key: 'pricing' },
    { id: 'why-bundle', label: 'Why bundle', key: 'why-bundle' },
    { id: 'integrations-section', label: 'Integrations', key: 'integrations' },
    { id: 'faq-section', label: 'FAQ', key: 'faq' },
  ];

  const handleNavClick = (key) => {
    setActiveNav(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-base-black/95 backdrop-blur-md border-b border-base-white/10 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand Logo - MOSBEE only */}
        <a href="#" className="flex items-center space-x-2.5 text-lg font-bold tracking-tight text-base-white group">
          <div className="w-9 h-9 rounded-xl bg-accent-blue border border-accent-blue flex items-center justify-center text-base-white shadow-sm group-hover:bg-accent-blue/90 transition-colors">
            <Hexagon size={20} className="text-base-white" strokeWidth={2.2} />
          </div>
          <span className="tracking-wider font-extrabold text-base-white text-xl">MOSBEE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeNav === link.key;
            return (
              <a
                key={link.key}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.key)}
                className={`transition-colors py-1 text-base-white ${isActive
                    ? 'font-bold border-b-2 border-accent-blue'
                    : 'hover:text-accent-blue'
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="#demo-section"
            className="bg-accent-blue hover:bg-accent-blue/90 text-base-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 flex items-center space-x-1.5"
          >
            <span>Get started</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href="#demo-section"
            className="bg-accent-blue text-base-white text-xs px-3.5 py-1.5 rounded-lg font-medium"
          >
            Get started
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-base-white hover:bg-base-white/10 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-base-white/10 bg-base-black px-6 py-4 shadow-lg animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-3 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.key)}
                className={`py-2 px-3 rounded-lg text-base-white ${activeNav === link.key
                    ? 'bg-accent-blue font-semibold'
                    : 'hover:bg-base-white/10'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
