import React, { useEffect, useState } from 'react';
import { initSmoothScroll } from './utils/animations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollShowcase } from './components/ScrollShowcase';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { SyllabusExplorer } from './components/SyllabusExplorer';
import { FeaturesGrid } from './components/FeaturesGrid';
import { DownloadSection } from './components/DownloadSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { IOSGuideModal } from './components/IOSGuideModal';
import { QrModal } from './components/QrModal';
import { StickyBottomBar } from './components/StickyBottomBar';

export function App() {
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'si' | 'ta'>('en');

  useEffect(() => {
    // Initialize Lenis smooth momentum scrolling integrated with GSAP ScrollTrigger
    const cleanup = initSmoothScroll();
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenIosGuide={() => setIsIosModalOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenIosGuide={() => setIsIosModalOpen(true)}
          onOpenQrModal={() => setIsQrModalOpen(true)}
          lang={lang}
        />

        {/* GSAP Pinned Phone Showcase Tour */}
        <ScrollShowcase lang={lang} />

        {/* Live Interactive MCQ Simulator */}
        <InteractiveSimulator />

        {/* 12-Unit Curriculum Explorer */}
        <SyllabusExplorer lang={lang} />

        {/* Superpowers Bento Grid */}
        <FeaturesGrid lang={lang} />

        {/* Download Hub: Play Store & iOS IPA */}
        <DownloadSection
          onOpenIosGuide={() => setIsIosModalOpen(true)}
          onOpenQrModal={() => setIsQrModalOpen(true)}
          lang={lang}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Sticky Overlays */}
      <IOSGuideModal
        isOpen={isIosModalOpen}
        onClose={() => setIsIosModalOpen(false)}
      />

      <QrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />

      <StickyBottomBar />
    </div>
  );
}

export default App;
