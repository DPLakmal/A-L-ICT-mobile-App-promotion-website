import React from 'react';
import { Download, Play, Apple, Smartphone, QrCode, ShieldCheck, ArrowDownToLine, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { APP_CONFIG } from '../config/appConfig';

interface DownloadSectionProps {
  onOpenIosGuide: () => void;
  onOpenQrModal: () => void;
  lang: 'en' | 'si' | 'ta';
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenIosGuide, onOpenQrModal, lang }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#4F46E5', '#0D9488', '#F59E0B'],
    });
  };

  return (
    <section id="downloads" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Instant Download Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Start Acing A/L ICT Today
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Download Smartify for your smartphone and prepare with thousands of G.C.E. A/L students across Sri Lanka.
          </p>
        </div>

        {/* Dual Cards: Android & iOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Card 1: Android Card */}
          <div className="glass-panel-interactive rounded-3xl p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Play className="w-6 h-6 fill-emerald-400 translate-x-0.5" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Google Play Store
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Android Application</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Available directly on Google Play Store with automatic updates, or download the verified standalone APK.
              </p>

              <div className="space-y-2 text-xs text-slate-400 mb-8 font-mono">
                <p>• Size: {APP_CONFIG.downloads.androidSize}</p>
                <p>• Requires: {APP_CONFIG.downloads.requirements.android}</p>
                <p>• Latest Version: {APP_CONFIG.version}</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={APP_CONFIG.downloads.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className="w-full py-3.5 px-6 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 fill-slate-900 translate-x-0.5" />
                <span>Download on Google Play</span>
              </a>

              <a
                href={APP_CONFIG.downloads.apkDirectUrl}
                download="Smartify-AL-ICT.apk"
                onClick={triggerConfetti}
                className="w-full py-3 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Direct APK Download (.apk)</span>
              </a>
            </div>
          </div>

          {/* Card 2: iOS Card */}
          <div className="glass-panel-interactive rounded-3xl p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Apple className="w-6 h-6 fill-indigo-400" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Direct .IPA File
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">iOS (iPhone & iPad)</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Download the verified iOS .IPA file for direct installation. Sideload on your device in 2 minutes without jailbreaking.
              </p>

              <div className="space-y-2 text-xs text-slate-400 mb-8 font-mono">
                <p>• Size: {APP_CONFIG.downloads.iosSize}</p>
                <p>• Requires: {APP_CONFIG.downloads.requirements.ios}</p>
                <p>• App Store: In Review Process</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={APP_CONFIG.downloads.ipaDirectUrl}
                download="Smartify-AL-ICT.ipa"
                onClick={triggerConfetti}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-600 text-white hover:from-indigo-500 hover:to-teal-500 font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download iOS (.ipa)</span>
              </a>

              <button
                onClick={onOpenIosGuide}
                className="w-full py-3 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-indigo-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>View Step-by-Step iOS Install Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* QR Code Action Bar */}
        <div className="text-center">
          <button
            onClick={onOpenQrModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
          >
            <QrCode className="w-4 h-4 text-indigo-400" />
            <span>Generate Phone Download QR Code</span>
          </button>
        </div>
      </div>
    </section>
  );
};
