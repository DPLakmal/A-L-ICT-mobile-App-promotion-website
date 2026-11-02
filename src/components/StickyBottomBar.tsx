import React, { useState, useEffect } from 'react';
import { Download, Play, Apple, ArrowUp } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const StickyBottomBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xl animate-fadeIn">
      <div className="glass-panel p-2.5 sm:p-3 rounded-2xl border border-indigo-500/30 shadow-2xl flex items-center justify-between gap-3 backdrop-blur-xl">
        <div className="flex items-center gap-2.5 pl-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-indigo-600/20 p-0.5 border border-indigo-500/30 shrink-0">
            <img src="/assets/app-icon.png" alt="Smartify icon" className="w-full h-full object-cover rounded-md" />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-white leading-tight">Smartify - A/L ICT</p>
            <p className="text-[10px] text-slate-400">100% Free Study Companion</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Play Store Button */}
          <a
            href={APP_CONFIG.downloads.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-100 transition-transform active:scale-95 shadow-md"
          >
            <Play className="w-3.5 h-3.5 fill-slate-900 translate-x-0.2" />
            <span>Play Store</span>
          </a>

          {/* iOS Direct IPA Button */}
          <a
            href={APP_CONFIG.downloads.ipaDirectUrl}
            download="Smartify-AL-ICT.ipa"
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95 shadow-md shadow-indigo-600/30"
          >
            <Apple className="w-3.5 h-3.5 fill-white" />
            <span>iOS (.ipa)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
