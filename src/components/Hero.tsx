import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Download, Smartphone, Sparkles, CheckCircle2, QrCode, Play, Apple } from 'lucide-react';
import confetti from 'canvas-confetti';
import { APP_CONFIG } from '../config/appConfig';

interface HeroProps {
  onOpenIosGuide: () => void;
  onOpenQrModal: () => void;
  lang: 'en' | 'si' | 'ta';
}

export const Hero: React.FC<HeroProps> = ({ onOpenIosGuide, onOpenQrModal, lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(badgeRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        titleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
        },
        '-=0.4'
      )
      .from(
        '.hero-subtext',
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.6'
      )
      .from(
        ctaRef.current?.children || [],
        {
          y: 20,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
        },
        '-=0.5'
      )
      .from(
        '.hero-stat-badge',
        {
          scale: 0.8,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
        },
        '-=0.4'
      );

    // Floating animation for ambient elements
    gsap.to('.ambient-float', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5,
    });
  }, { scope: containerRef });

  const triggerDownloadCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#4F46E5', '#818CF8', '#0D9488', '#F59E0B'],
    });
  };

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Pill Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sri Lanka's #1 A/L ICT Study Companion</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 font-mono">v1.0.1 Ready</span>
          </div>

          {/* Main Title */}
          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            {APP_CONFIG.tagline[lang]}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtext text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
            {APP_CONFIG.subtitle[lang]}
          </p>

          {/* Download CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Google Play Button */}
            <a
              href={APP_CONFIG.downloads.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerDownloadCelebration}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white text-slate-900 font-bold text-base hover:bg-slate-100 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-white/10 flex items-center justify-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Play className="w-4 h-4 fill-white translate-x-0.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Get it on</p>
                <p className="text-base font-extrabold leading-none">Google Play</p>
              </div>
            </a>

            {/* iOS Direct File Download Button */}
            <a
              href={APP_CONFIG.downloads.ipaDirectUrl}
              download="Smartify-AL-ICT.ipa"
              onClick={triggerDownloadCelebration}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-600 text-white font-bold text-base hover:from-indigo-500 hover:to-teal-500 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-3 border border-indigo-400/30 group"
            >
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-6 transition-transform backdrop-blur-md">
                <Apple className="w-5 h-5 fill-white" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <p className="text-[10px] uppercase font-semibold text-indigo-200 tracking-wider">Download File</p>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/20 font-mono text-white">.IPA</span>
                </div>
                <p className="text-base font-extrabold leading-none">iOS Download</p>
              </div>
            </a>

            {/* QR Code / Secondary Action */}
            <button
              onClick={onOpenQrModal}
              className="w-full sm:w-auto px-4 py-4 rounded-2xl glass-panel text-slate-300 font-semibold hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/80 flex items-center justify-center gap-2"
              title="Scan QR Code to download directly to phone"
            >
              <QrCode className="w-5 h-5 text-indigo-400" />
              <span className="text-sm">Scan QR</span>
            </button>
          </div>

          {/* Quick Notice about iOS & Direct APK */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mb-14">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Direct Android APK Available
            </span>
            <span className="text-slate-600">•</span>
            <button onClick={onOpenIosGuide} className="text-indigo-400 hover:underline flex items-center gap-1">
              <span>How to install on iOS without App Store?</span>
            </button>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Zero In-App Purchases</span>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {APP_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-badge glass-panel-interactive rounded-2xl p-4 text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  {lang === 'si' ? stat.labelSi : stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
