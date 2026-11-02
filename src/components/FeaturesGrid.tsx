import React from 'react';
import { Smartphone, Download, Globe, Shield, Moon, WifiOff, FileCheck, HelpCircle } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface FeaturesGridProps {
  lang: 'en' | 'si' | 'ta';
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ lang }) => {
  const highlights = [
    {
      icon: Globe,
      title: 'Trilingual Learning',
      titleSi: 'භාෂා ත්‍රිත්වයෙන්ම හැදෑරීම',
      desc: 'Native support for Sinhala, English, and Tamil medium students. Switch question or app language instantly.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: WifiOff,
      title: 'Full Offline Access',
      titleSi: 'අන්තර්ජාලය නොමැතිව පරිහරණය',
      desc: 'All short notes, syllabus summaries, and downloaded past papers remain accessible completely offline.',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      icon: Moon,
      title: 'True OLED Dark Theme',
      titleSi: 'රාත්‍රී කාලයට සුදුසු අඳුරු තේමාව',
      desc: 'Specially engineered dark and light modes designed to prevent eye fatigue during late-night exam cram sessions.',
      color: 'from-purple-500 to-indigo-700',
    },
    {
      icon: FileCheck,
      title: 'Integrated PDF Reader',
      titleSi: 'විභාග ප්‍රශ්න පත්‍ර PDF කියවනය',
      desc: 'Read past papers with sharp vector rendering, high-speed zooming, and side-by-side marking schemes.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Shield,
      title: '100% Free & No Ads',
      titleSi: 'නොමිලේ, වෙළඳ දැන්වීම් රහිතව',
      desc: 'Zero subscriptions, zero paywalls, and no intrusive ads. Dedicated solely to helping Sri Lankan students excel.',
      color: 'from-emerald-500 to-cyan-600',
    },
    {
      icon: Smartphone,
      title: 'Smooth 60fps Experience',
      titleSi: 'සුමට වේගවත් ක්‍රියාකාරිත්වය',
      desc: 'Built with Flutter for high performance, smooth page transitions, and quick loading on any Android or iOS device.',
      color: 'from-rose-500 to-pink-600',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">
            Built for High Achievers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
            Why Sri Lankan Students Choose Smartify
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Thoughtfully built with student feedback to eliminate exam anxiety and make revision efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel-interactive rounded-3xl p-7 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {lang === 'si' ? item.titleSi : item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-slate-400">
                  <span>Smartify Verified Advantage</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
