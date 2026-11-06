import React, { useState } from 'react';

export default function DemoSection({ initialSelectedProducts }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    suite: true,
    erp: false,
    accounts: false,
    hrms: false,
    crm: false,
    pro: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.company.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="demo-section">
      <div className="bg-base-black border border-base-white/15 rounded-2xl p-8 lg:p-12 relative overflow-hidden shadow-2xl text-base-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2 font-bold">
                GET STARTED
              </div>
              <h2 className="text-3xl font-extrabold text-base-white tracking-tight mb-4">
                See the whole suite running on your data.
              </h2>
              <p className="text-base-white/60 mb-8 leading-relaxed text-sm">
                Tell us what you run today. Within one business day you get back a fixed scope, a migration plan and a quote — for the complete bundle or just the products you need.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3 text-sm text-base-white/80">
                  <span className="material-symbols-outlined text-accent-blue text-[20px] shrink-0">
                    task_alt
                  </span>
                  <span>14-day pilot on your own data — no card required</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-base-white/80">
                  <span className="material-symbols-outlined text-accent-blue text-[20px] shrink-0">
                    task_alt
                  </span>
                  <span>Fixed implementation quote before anything is configured</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-base-white/80">
                  <span className="material-symbols-outlined text-accent-blue text-[20px] shrink-0">
                    task_alt
                  </span>
                  <span>Migration support from Excel, Tally, Zoho or QuickBooks</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-base-white/10">
              <p className="text-sm text-base-white/60">
                Prefer to talk first? Write to{' '}
                <a
                  href="mailto:hello@mosbee.io"
                  className="text-accent-blue font-mono underline hover:text-base-white transition-colors"
                >
                  hello@mosbee.io
                </a>{' '}
                — Monday to Saturday, 9am to 8pm IST.
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7 bg-base-white rounded-2xl p-6 sm:p-8 text-base-black shadow-xl border border-base-black/10">
            {submitted ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-accent-blue text-base-white flex items-center justify-center mx-auto mb-4 border border-accent-blue">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-base-black mb-2">Demo Request Received!</h3>
                <p className="text-base-black/70 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                  Thank you, <strong className="text-base-black">{formData.fullName}</strong>. An enterprise solution architect will review your requirements for{' '}
                  <strong className="text-base-black">{formData.company}</strong> and contact you at{' '}
                  <strong className="text-base-black">{formData.email}</strong> within 24 business hours.
                </p>
                <div className="p-4 bg-base-black rounded-xl border border-base-black font-mono text-xs text-base-white max-w-sm mx-auto mb-6">
                  Reference: MOS-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-base-offwhite hover:bg-base-black/10 text-base-black font-mono text-xs font-semibold transition-colors cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-base-black text-accent-yellow border border-base-black rounded-xl text-xs font-mono">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-base-black/70 mb-1 font-bold">
                      Full name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="w-full bg-base-offwhite border border-base-black/20 rounded-xl px-3.5 py-2.5 text-sm text-base-black focus:border-accent-blue focus:bg-base-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-base-black/70 mb-1 font-bold">
                      Work email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="priya@company.com"
                      className="w-full bg-base-offwhite border border-base-black/20 rounded-xl px-3.5 py-2.5 text-sm text-base-black focus:border-accent-blue focus:bg-base-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-base-black/70 mb-1 font-bold">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Industries"
                      className="w-full bg-base-offwhite border border-base-black/20 rounded-xl px-3.5 py-2.5 text-sm text-base-black focus:border-accent-blue focus:bg-base-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-base-black/70 mb-1 font-bold">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98xxx xxxxx"
                      className="w-full bg-base-offwhite border border-base-black/20 rounded-xl px-3.5 py-2.5 text-sm text-base-black focus:border-accent-blue focus:bg-base-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-base-black/70 mb-2 font-bold">
                    Which products are you interested in?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                    <label className="flex items-center space-x-2 bg-base-offwhite p-2.5 rounded-xl cursor-pointer border border-base-black/10 hover:border-accent-blue transition-colors">
                      <input
                        type="checkbox"
                        name="suite"
                        checked={formData.suite}
                        onChange={handleChange}
                        className="rounded bg-base-white border-base-black/30 text-accent-blue focus:ring-accent-blue"
                      />
                      <span className="text-base-black font-medium">Complete Suite</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-base-offwhite p-2.5 rounded-xl cursor-pointer border border-base-black/10 hover:border-accent-blue transition-colors">
                      <input
                        type="checkbox"
                        name="erp"
                        checked={formData.erp}
                        onChange={handleChange}
                        className="rounded bg-base-white border-base-black/30 text-accent-blue focus:ring-accent-blue"
                      />
                      <span className="text-base-black font-medium">ERP</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-base-offwhite p-2.5 rounded-xl cursor-pointer border border-base-black/10 hover:border-accent-blue transition-colors">
                      <input
                        type="checkbox"
                        name="accounts"
                        checked={formData.accounts}
                        onChange={handleChange}
                        className="rounded bg-base-white border-base-black/30 text-accent-blue focus:ring-accent-blue"
                      />
                      <span className="text-base-black font-medium">Accounts</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-base-offwhite p-2.5 rounded-xl cursor-pointer border border-base-black/10 hover:border-accent-blue transition-colors">
                      <input
                        type="checkbox"
                        name="hrms"
                        checked={formData.hrms}
                        onChange={handleChange}
                        className="rounded bg-base-white border-base-black/30 text-accent-blue focus:ring-accent-blue"
                      />
                      <span className="text-base-black font-medium">HRMS</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-base-offwhite p-2.5 rounded-xl cursor-pointer border border-base-black/10 hover:border-accent-blue transition-colors">
                      <input
                        type="checkbox"
                        name="crm"
                        checked={formData.crm}
                        onChange={handleChange}
                        className="rounded bg-base-white border-base-black/30 text-accent-blue focus:ring-accent-blue"
                      />
                      <span className="text-base-black font-medium">CRM</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-base-offwhite p-2.5 rounded-xl cursor-pointer border border-base-black/10 hover:border-accent-blue transition-colors">
                      <input
                        type="checkbox"
                        name="pro"
                        checked={formData.pro}
                        onChange={handleChange}
                        className="rounded bg-base-white border-base-black/30 text-accent-blue focus:ring-accent-blue"
                      />
                      <span className="text-base-black font-medium">PRO</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent-blue hover:bg-accent-blue/90 text-base-white font-mono font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-accent-blue/25 cursor-pointer"
                >
                  Request my demo
                </button>
                <p className="text-center font-mono text-[11px] text-base-black/60 font-medium">
                  14-day pilot · fixed quote · no card required
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
