import React from 'react';
import { Check, Clock, BookOpen, FileText, Sparkles, Trophy, ChevronRight, Award } from 'lucide-react';

interface PhoneMockupProps {
  activeScreen?: 'quizzes' | 'lessons' | 'shortnotes' | 'pastpapers';
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ activeScreen = 'quizzes', className = '' }) => {
  return (
    <div className={`relative mx-auto w-[290px] sm:w-[320px] md:w-[340px] aspect-[9/18.5] rounded-[48px] p-3 bg-slate-900 border-[7px] border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(79,70,229,0.35)] ring-1 ring-white/10 ${className}`}>
      {/* Outer Phone Accents */}
      {/* Dynamic Island / Speaker notch */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-full z-30 flex items-center justify-between px-3">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
        <div className="w-2 h-2 rounded-full bg-indigo-900/40" />
      </div>

      {/* Screen Container */}
      <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-slate-950 flex flex-col text-slate-100 select-none border border-white/5">
        {/* Status Bar */}
        <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-medium text-slate-400 z-20">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px]">5G</span>
            <div className="w-4 h-2 rounded-xs border border-slate-400 p-0.5">
              <div className="w-full h-full bg-emerald-400 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Screen Content Depending on activeScreen */}
        <div className="flex-1 overflow-hidden relative p-4 flex flex-col">
          {activeScreen === 'quizzes' && (
            <div className="flex flex-col h-full animate-fadeIn">
              {/* App Header */}
              <div className="flex items-center justify-between mb-4 mt-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Unit 04: Digital Logic</span>
                  <h3 className="text-sm font-bold text-white">Question 08/25</h3>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-semibold">
                  <Clock className="w-3 h-3" />
                  <span>14:32</span>
                </div>
              </div>

              {/* Question Box */}
              <div className="glass-panel p-3.5 rounded-2xl mb-3 border border-indigo-500/20 bg-indigo-950/20">
                <p className="text-xs text-slate-200 leading-snug font-medium">
                  Which logic gate produces an output of <span className="font-mono text-indigo-300">0</span> only when both inputs are <span className="font-mono text-indigo-300">1</span>?
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2 flex-1">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs flex items-center justify-between text-slate-300">
                  <span>A. NOR Gate</span>
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-700" />
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/60 text-xs flex items-center justify-between text-white font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span>B. NAND Gate</span>
                  </span>
                  <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs flex items-center justify-between text-slate-300">
                  <span>C. XOR Gate</span>
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-700" />
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs flex items-center justify-between text-slate-300">
                  <span>D. XNOR Gate</span>
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-700" />
                </div>
              </div>

              {/* Bottom Result Pill */}
              <div className="mt-auto p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-[11px] text-emerald-300">
                <span className="font-semibold">Correct! +4 Points</span>
                <span className="text-[10px] text-slate-400">Next Question →</span>
              </div>
            </div>
          )}

          {activeScreen === 'lessons' && (
            <div className="flex flex-col h-full animate-fadeIn">
              <div className="mb-3 mt-2">
                <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">Curriculum Explorer</span>
                <h3 className="text-sm font-bold text-white">Grade 12 & 13 Lessons</h3>
              </div>

              <div className="space-y-2 flex-1 overflow-hidden">
                <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/30 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-xs">
                    03
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate">Data Representation</p>
                    <p className="text-[10px] text-slate-400">Number systems & 2's complement</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </div>

                <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs">
                    06
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate">Computer Networks</p>
                    <p className="text-[10px] text-slate-400">OSI layers & IP subnetting</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </div>

                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                    09
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate">Python Programming</p>
                    <p className="text-[10px] text-slate-400">Data structures & algorithms</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </div>
              </div>

              <div className="mt-auto p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                <span className="text-[10px] text-slate-400">12 of 12 Units Ready</span>
                <span className="font-semibold text-teal-400">Open Unit →</span>
              </div>
            </div>
          )}

          {activeScreen === 'shortnotes' && (
            <div className="flex flex-col h-full animate-fadeIn">
              <div className="mb-3 mt-2">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Quick Revision</span>
                <h3 className="text-sm font-bold text-white">A/L ICT Short Notes</h3>
              </div>

              <div className="space-y-2 flex-1">
                <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-amber-400">Python Syntax Cheat-Sheet</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">High Yield</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-300">def binary_search(arr, x):</p>
                  <p className="text-[10px] text-slate-400 mt-1">Recursive & Iterative search algorithms</p>
                </div>

                <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-indigo-400">Logic Gate Truth Tables</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Unit 4</span>
                  </div>
                  <p className="text-[10px] text-slate-300">De Morgan's Laws: (A · B)' = A' + B'</p>
                  <p className="text-[10px] text-slate-400 mt-1">Full Boolean algebra simplification summary</p>
                </div>
              </div>

              <div className="mt-auto p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] text-amber-300">
                <span className="text-[10px] text-slate-400">Offline Reading Supported</span>
                <span className="font-semibold">Save Offline</span>
              </div>
            </div>
          )}

          {activeScreen === 'pastpapers' && (
            <div className="flex flex-col h-full animate-fadeIn">
              <div className="mb-3 mt-2">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">G.C.E. A/L Archive</span>
                <h3 className="text-sm font-bold text-white">Past Papers (2015-2024)</h3>
              </div>

              <div className="space-y-2 flex-1">
                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">2024 A/L ICT Examination</p>
                    <p className="text-[10px] text-slate-400">Paper I (MCQ) & Paper II (Structured)</p>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 px-2 py-1 rounded bg-emerald-500/20">
                    PDF
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">2023 A/L ICT Examination</p>
                    <p className="text-[10px] text-slate-400">With Official Marking Scheme</p>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 px-2 py-1 rounded bg-slate-800">
                    PDF
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">2022 A/L ICT Examination</p>
                    <p className="text-[10px] text-slate-400">With Official Marking Scheme</p>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 px-2 py-1 rounded bg-slate-800">
                    PDF
                  </span>
                </div>
              </div>

              <div className="mt-auto p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] text-emerald-300">
                <span className="text-[10px] text-slate-400">Marking Schemes Included</span>
                <span className="font-semibold">Open Reader</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom App Navigation Bar (Matches Flutter BubbleBottomBar) */}
        <div className="pt-2 pb-5 px-3 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-around">
          <div className={`p-1.5 rounded-xl flex items-center gap-1 ${activeScreen === 'quizzes' ? 'bg-indigo-600/30 text-indigo-400' : 'text-slate-500'}`}>
            <Award className="w-4 h-4" />
          </div>
          <div className={`p-1.5 rounded-xl flex items-center gap-1 ${activeScreen === 'lessons' ? 'bg-teal-600/30 text-teal-400' : 'text-slate-500'}`}>
            <BookOpen className="w-4 h-4" />
          </div>
          <div className={`p-1.5 rounded-xl flex items-center gap-1 ${activeScreen === 'shortnotes' ? 'bg-amber-600/30 text-amber-400' : 'text-slate-500'}`}>
            <FileText className="w-4 h-4" />
          </div>
          <div className={`p-1.5 rounded-xl flex items-center gap-1 ${activeScreen === 'pastpapers' ? 'bg-emerald-600/30 text-emerald-400' : 'text-slate-500'}`}>
            <Clock className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
