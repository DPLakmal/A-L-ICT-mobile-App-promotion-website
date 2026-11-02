import React, { useState } from 'react';
import { BookOpen, Search, Check, ChevronDown, ChevronUp, Layers, GraduationCap } from 'lucide-react';
import { APP_CONFIG, SyllabusUnit } from '../config/appConfig';

interface SyllabusExplorerProps {
  lang: 'en' | 'si' | 'ta';
}

export const SyllabusExplorer: React.FC<SyllabusExplorerProps> = ({ lang }) => {
  const [selectedGrade, setSelectedGrade] = useState<'All' | 'Grade 12' | 'Grade 13'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null);

  const filteredUnits = APP_CONFIG.syllabus.filter((unit) => {
    const matchesGrade = selectedGrade === 'All' || unit.grade === selectedGrade;
    const matchesSearch =
      unit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.titleSi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesGrade && matchesSearch;
  });

  const toggleExpand = (id: number) => {
    setExpandedUnit(expandedUnit === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Official Curriculum Aligned</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            All 12 Syllabus Units. Covered to Perfection.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Every topic prescribed by the Sri Lankan National Institute of Education (NIE) for G.C.E. Advanced Level ICT is organized and ready to study.
          </p>

          {/* Search & Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Python, K-Map, OSI, SQL..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Grade Filter */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-medium">
              {(['All', 'Grade 12', 'Grade 13'] as const).map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-1.5 rounded-lg transition-all ${
                    selectedGrade === grade ? 'bg-indigo-600 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.map((unit) => {
            const isExpanded = expandedUnit === unit.id;

            return (
              <div
                key={unit.id}
                className="glass-panel-interactive rounded-3xl p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold font-mono">
                      {unit.unitNumber}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                      {unit.grade}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                    {lang === 'si' ? unit.titleSi : unit.title}
                  </h3>
                  {lang === 'si' && (
                    <p className="text-xs text-slate-400 mb-2">{unit.title}</p>
                  )}

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {unit.description}
                  </p>
                </div>

                <div>
                  {/* Collapsible Topics */}
                  {isExpanded && (
                    <div className="mb-4 pt-3 border-t border-slate-800/80 space-y-1.5 animate-fadeIn">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Key Study Competencies:
                      </span>
                      {unit.topics.map((t, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => toggleExpand(unit.id)}
                    className="w-full pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Topics' : 'View Sub-Topics'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredUnits.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p>No units match your search query "{searchQuery}". Try searching for another topic.</p>
          </div>
        )}
      </div>
    </section>
  );
};
