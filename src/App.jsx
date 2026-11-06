import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HoneycombShowcase from './components/HoneycombShowcase';
import TrustTicker from './components/TrustTicker';
import SuiteSection from './components/SuiteSection';
import PricingSection from './components/PricingSection';
import WhyBundle from './components/WhyBundle';
import IntegrationsSection from './components/IntegrationsSection';
import FaqSection from './components/FaqSection';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

/**
 * ============================================================================
 * SWAP-READY PAGE BACKGROUND ASSETS (Container-Level Only)
 * Every section uses a distinct visual asset. Replace any URL below to swap.
 * ============================================================================
 */
const BACKGROUND_ASSETS = {
  // 1. HERO SECTION (Local Video from C:\Program Files\Downloads\gemini_generated_video_8d7e3737.mp4)
  heroVideoMp4: '/images/gemini_generated_video_8d7e3737.mp4',
  heroVideoFallbackMp4:
    'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-9970-large.mp4',
  heroPosterImg: '/images/erp.webp',

  // 2. CONNECTED CORE / HONEYCOMB SHOWCASE (Image)
  // Depicts: Global interconnected network topology & unified data bus
  coreArchitectureBgImg:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',

  // 3. SUITE SECTION -> Excluded completely (no wrapper, no background)

  // 4. PRICING & MODULAR CONFIGURATOR (Image)
  // Depicts: Executive financial planning, analytics & modular ROI strategy
  pricingBgImg:
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80',

  // 5. WHY THE BUNDLE WINS (Image)
  // Depicts: Synchronized cross-department enterprise operations floor
  whyBundleBgImg:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',

  // 6. INTEGRATIONS SECTION -> Uses Gemini_Generated_Image_jc16tpjc16tpjc16.png inside IntegrationsSection.jsx

  // 7. FAQ SECTION (Image)
  // Depicts: Dependable enterprise onboarding & 24/7 customer advisory team
  faqBgImg:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80',

  // 8. DEMO / 14-DAY PILOT SECTION (Image)
  // Depicts: Executive boardroom walkthrough & live pilot deployment session
  demoBgImg:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80',
};

export default function App() {
  const [selectedProducts, setSelectedProducts] = useState({
    ERP: false,
    'Account Management': false,
    HRMS: false,
    CRM: false,
    PRO: false,
    Chatbot: false,
    'Project Management': false,
    'Task Management': false,
  });

  const handleToggleProduct = (productName) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };

  const handleAddToPlan = (productName) => {
    const keyMap = {
      'Accounts & POS': 'Account Management',
      Accounts: 'Account Management',
      Projects: 'Project Management',
      Tasks: 'Task Management',
    };
    const mappedName = keyMap[productName] || productName;
    setSelectedProducts((prev) => ({
      ...prev,
      [mappedName]: true,
    }));
    const pricingEl = document.getElementById('pricing-section');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartPilotWithPlan = () => {
    const demoEl = document.getElementById('demo-section');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-base-black text-base-white font-sans antialiased selection:bg-accent-blue selection:text-base-white flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative overflow-hidden bg-base-black flex-grow">
        {/* 1. HERO STAGE — Black (#0A0A0A) + Video Background */}
        <div className="hero-stage-wrapper relative w-full overflow-hidden bg-base-black border-b border-base-white/10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={BACKGROUND_ASSETS.heroPosterImg}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 opacity-60"
          >
            <source src={BACKGROUND_ASSETS.heroVideoMp4} type="video/mp4" />
            <source src={BACKGROUND_ASSETS.heroVideoFallbackMp4} type="video/mp4" />
          </video>
          {/* Dark gradient overlay on top of the video for crisp Hero text legibility */}
          <div className="section-bg-overlay-hero-dark absolute inset-0 pointer-events-none z-0"></div>
          <div className="hero-ambient-glow-left absolute left-[5%] top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none z-0"></div>
          <div className="hero-ambient-glow-right absolute right-[5%] bottom-0 w-[550px] h-[420px] rounded-full pointer-events-none z-0"></div>

          <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-16 lg:pt-24 lg:pb-24">
            <Hero />
            <HoneycombShowcase />
            <TrustTicker />
          </section>
        </div>

        {/* 2. SUITE SECTION — White/Off-White (#F5F5F5) Band (Alternating between Dark Hero & Dark WhyBundle) */}
        <div className="suite-stage-wrapper relative w-full bg-base-offwhite border-b border-base-black/10">
          <SuiteSection onAddToPlan={handleAddToPlan} />
        </div>

        {/* 4. WHY BUNDLE STAGE — Black (#0A0A0A) Band */}
        <div
          className="why-bundle-stage-wrapper relative w-full bg-base-black bg-cover bg-center bg-no-repeat border-b border-base-white/10"
          style={{ backgroundImage: `url('${BACKGROUND_ASSETS.whyBundleBgImg}')` }}
        >
          <div className="section-bg-overlay-dark absolute inset-0 pointer-events-none z-0"></div>
          <div className="relative z-10">
            <WhyBundle />
          </div>
        </div>

        {/* 5. INTEGRATIONS SECTION — White/Off-White (#FFFFFF / #F5F5F5) Showcase with Alternating Black & White Product Cards */}
        <div className="integrations-stage-wrapper relative w-full bg-base-white border-b border-base-black/10">
          <IntegrationsSection />
        </div>

        {/* 6. PRICING STAGE — Black (#0A0A0A) Band */}
        <div
          className="pricing-stage-wrapper relative w-full bg-base-black bg-cover bg-center bg-no-repeat border-b border-base-white/10"
          style={{ backgroundImage: `url('${BACKGROUND_ASSETS.pricingBgImg}')` }}
        >
          <div className="section-bg-overlay-dark absolute inset-0 pointer-events-none z-0"></div>
          <div className="section-dot-grid absolute inset-0 pointer-events-none z-0"></div>
          <div className="relative z-10">
            <PricingSection
              selectedProducts={selectedProducts}
              onToggleProduct={handleToggleProduct}
              onStartPilotWithPlan={handleStartPilotWithPlan}
            />
          </div>
        </div>

        {/* 7. FAQ STAGE — White/Off-White (#FFFFFF / #F5F5F5) Band */}
        <div
          className="faq-stage-wrapper relative w-full bg-base-white bg-cover bg-center bg-no-repeat border-b border-base-black/10"
          style={{ backgroundImage: `url('${BACKGROUND_ASSETS.faqBgImg}')` }}
        >
          <div className="section-bg-overlay-light-edge absolute inset-0 pointer-events-none z-0"></div>
          <div className="relative z-10">
            <FaqSection />
          </div>
        </div>

        {/* 8. DEMO / PILOT STAGE — Black (#0A0A0A) Band */}
        <div
          className="demo-stage-wrapper relative w-full bg-base-black bg-cover bg-center bg-no-repeat border-b border-base-white/10"
          style={{ backgroundImage: `url('${BACKGROUND_ASSETS.demoBgImg}')` }}
        >
          <div className="section-bg-overlay-cta absolute inset-0 pointer-events-none z-0"></div>
          <div className="relative z-10">
            <DemoSection initialSelectedProducts={selectedProducts} />
          </div>
        </div>
      </main>

      {/* Footer — Near-Black (#0A0A0A) */}
      <Footer />
    </div>
  );
}
