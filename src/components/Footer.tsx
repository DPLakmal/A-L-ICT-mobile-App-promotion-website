import React from 'react';
import { Code, ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-indigo-600/20 p-0.5 border border-indigo-500/30">
                <img src="/assets/app-icon.png" alt="Smartify Logo" className="w-full h-full object-cover rounded-md" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">Smartify - A/L ICT</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-4">
              Empowering Sri Lankan G.C.E. Advanced Level students with interactive MCQ practice, 12-unit NIE curriculum lessons, short revision notes, and past papers.
            </p>
            <div className="flex items-center gap-2 text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Created for educational and study support purposes</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Explore App</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">MCQ Quizzes</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">12 Syllabus Units</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Revision Short Notes</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Past Papers 2015-2024</a></li>
              <li><a href="#simulator" className="hover:text-white transition-colors">Online Simulator</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Source */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Legal & Downloads</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => {
                    if (onOpenPrivacy) {
                      e.preventDefault();
                      onOpenPrivacy();
                    }
                  }}
                  className="hover:text-white transition-colors text-indigo-400 font-semibold"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={APP_CONFIG.downloads.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Google Play Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={APP_CONFIG.downloads.ipaDirectUrl}
                  download="Smartify-AL-ICT.ipa"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>iOS (.ipa) Direct File</span>
                </a>
              </li>
              <li>
                <a
                  href={APP_CONFIG.downloads.apkDirectUrl}
                  download="Smartify-AL-ICT.apk"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Direct APK Download</span>
                </a>
              </li>
              <li>
                <a
                  href={APP_CONFIG.downloads.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 text-indigo-400"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <p>© {new Date().getFullYear()} Smartify A/L ICT. Built for Sri Lankan Students.</p>
            <span>•</span>
            <a
              href="/privacy"
              onClick={(e) => {
                if (onOpenPrivacy) {
                  e.preventDefault();
                  onOpenPrivacy();
                }
              }}
              className="hover:text-slate-300 underline"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
