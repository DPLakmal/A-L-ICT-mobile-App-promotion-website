import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BookOpen, FileText, Clock, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { APP_CONFIG } from '../config/appConfig';

interface ScrollShowcaseProps {
  lang: 'en' | 'si' | 'ta';
}

type ScreenType = 'quizzes' | 'lessons' | 'shortnotes' | 'pastpapers';

export const ScrollShowcase: React.FC<ScrollShowcaseProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScreen, setActiveScreen] = useState<ScreenType>('quizzes');

  const screens: { id: ScreenType; title: string; subtitle: string; icon: any; color: string; bullets: string[] }[] = [
    {
      id: 'quizzes',
      title: 'Real-Time MCQ Exam Engine',
      subtitle: 'Simulate the actual G.C.E. A/L ICT Examination environment with timed questions and instant feedback.',
      icon: Award,
      color: 'from-indigo-500 to-indigo-600',
      bullets: [
        'Over 1,000+ past paper & model MCQ questions',
        'Unit-by-unit focused practice or mixed mock exams',
        'Automatic scoring with detailed step-by-step logic explanations',
      ],
    },
    {
      id: 'lessons',
      title: 'Complete 12-Unit Curriculum',
      subtitle: 'Strictly structured following the National Institute of Education (NIE) Sri Lanka G.C.E. A/L ICT syllabus.',
      icon: BookOpen,
      color: 'from-teal-500 to-teal-600',
      bullets: [
        'Structured breakdown of both Grade 12 & Grade 13 topics',
        'Clear diagrams for logic circuits, networking & database models',
        'Curated examples for Python algorithms and SQL queries',
      ],
    },
    {
      id: 'shortnotes',
      title: 'High-Yield Short Notes & Cheatsheets',
      subtitle: 'Condense complex syllabus areas into fast, memorable revision notes before your school term tests or finals.',
      icon: FileText,
      color: 'from-amber-500 to-amber-600',
      bullets: [
        'Formula sheets for 2s complement and floating-point math',
        'Truth tables for all Boolean logic laws and Karnaugh maps',
        'Quick syntax references for Python, HTML, CSS & PHP',
      ],
    },
    {
      id: 'pastpapers',
      title: '10+ Years Past Papers & Marking Schemes',
      subtitle: 'Study real G.C.E. A/L exam papers with official marking guidelines directly inside the app.',
      icon: Clock,
      color: 'from-emerald-500 to-emerald-600',
      bullets: [
        'Integrated PDF reader with fast pinch-to-zoom support',
        'Paper 1 (MCQ) and Paper 2 (Structured Essay) complete archive',
        'Marking points breakdown to understand how examiners award marks',
      ],
    },
  ];

  useGSAP(() => {
    // Pin showcase section while scrolling through cards
    const cards = gsap.utils.toArray<HTMLElement>('.showcase-card');

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          setActiveScreen(screens[index].id);
        },
        onEnterBack: () => {
          setActiveScreen(screens[index].id);
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section id="features" ref={containerRef} className="relative py-24 md:py-36 bg-slate-950/60 border-y border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive App Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Designed Exclusively for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-400">A/L ICT Success</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4">
            Everything you need to master Grade 12 and 13 ICT, from quick flash reviews to complete past paper simulations.
          </p>
        </div>

        {/* Two-Column Scrollable Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Interactive Cards */}
          <div className="lg:col-span-7 space-y-12">
            {screens.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeScreen === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveScreen(item.id)}
                  className={`showcase-card cursor-pointer p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                    isActive
                      ? 'glass-panel border-indigo-500/40 shadow-2xl shadow-indigo-900/20 translate-x-1.5'
                      : 'bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                        Feature 0{index + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.subtitle}
                  </p>

                  <div className="space-y-2.5">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1">
                      <span>Click to preview on device</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Smartify Mobile v1.0
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Phone Frame Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-center">
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-teal-500/20 blur-2xl rounded-[60px] opacity-75" />
              
              <PhoneMockup activeScreen={activeScreen} />

              {/* Floating Pill helper */}
              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Viewing: <strong className="text-white capitalize">{activeScreen} Module</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
