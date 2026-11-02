import React, { useState } from 'react';
import { Smartphone, Download, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface NavbarProps {
  onOpenIosGuide: () => void;
  lang: 'en' | 'si' | 'ta';
  setLang: (lang: 'en' | 'si' | 'ta') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenIosGuide, lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-2xl px-4 py-3 flex items-center justify-between shadow-2xl backdrop-blur-xl">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform bg-indigo-600/20 p-0.5 border border-indigo-500/30">
              <img src="/assets/app-icon.png" alt="Smartify App Logo" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  Smartify
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  A/L ICT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">G.C.E. Advanced Level</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button onClick={() => scrollTo('features')} className="hover:text-indigo-400 transition-colors">
              Features
            </button>
            <button onClick={() => scrollTo('curriculum')} className="hover:text-indigo-400 transition-colors">
              Syllabus
            </button>
            <button onClick={() => scrollTo('simulator')} className="hover:text-indigo-400 transition-colors">
              App Simulator
            </button>
            <button onClick={() => scrollTo('downloads')} className="hover:text-indigo-400 transition-colors">
              Downloads
            </button>
            <button onClick={() => scrollTo('faq')} className="hover:text-indigo-400 transition-colors">
              FAQ
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === 'en' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('si')}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === 'si' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                සිං
              </button>
              <button
                onClick={() => setLang('ta')}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === 'ta' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                த
              </button>
            </div>

            {/* iOS Guide Trigger */}
            <button
              onClick={onOpenIosGuide}
              className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 transition-all flex items-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
              <span>iOS Guide</span>
            </button>

            {/* Download CTA */}
            <button
              onClick={() => scrollTo('downloads')}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get App</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden max-w-7xl mx-auto mt-2 p-4 rounded-2xl glass-panel border border-slate-700/60 shadow-2xl space-y-3">
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-slate-200">
            <button onClick={() => scrollTo('features')} className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60">
              Features
            </button>
            <button onClick={() => scrollTo('curriculum')} className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60">
              Syllabus Units
            </button>
            <button onClick={() => scrollTo('simulator')} className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60">
              App Simulator
            </button>
            <button onClick={() => scrollTo('downloads')} className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60">
              Download App
            </button>
            <button onClick={() => scrollTo('faq')} className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60">
              FAQ
            </button>
          </nav>

          <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center p-0.5 rounded-lg bg-slate-800 text-xs">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md ${lang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('si')}
                className={`px-2.5 py-1 rounded-md ${lang === 'si' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              >
                සිං
              </button>
              <button
                onClick={() => setLang('ta')}
                className={`px-2.5 py-1 rounded-md ${lang === 'ta' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              >
                த
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIosGuide();
              }}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-indigo-300 border border-slate-700"
            >
              iOS Install Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
