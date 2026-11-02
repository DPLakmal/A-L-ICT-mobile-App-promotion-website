import React, { useState } from 'react';
import { Smartphone, CheckCircle, RefreshCw, Trophy, Sparkles, Award } from 'lucide-react';

export const InteractiveSimulator: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const sampleQuestions = [
    {
      unit: 'Unit 03: Data Representation',
      question: "What is the 8-bit Two's Complement representation of the decimal integer -13?",
      options: [
        'A. 1111 0011',
        'B. 1111 0010',
        'C. 1000 1101',
        'D. 0000 1101',
      ],
      correct: 0,
      explanation:
        "+13 in 8-bit binary is 0000 1101. Inverting bits yields 1111 0010 (1's complement). Adding 1 gives 1111 0011.",
    },
    {
      unit: 'Unit 06: Computer Networks',
      question: 'Which of the following IP addresses belongs to a Class C private network range?',
      options: [
        'A. 10.150.0.1',
        'B. 172.16.25.1',
        'C. 192.168.1.100',
        'D. 169.254.1.1',
      ],
      correct: 2,
      explanation:
        'RFC 1918 defines 192.168.0.0 to 192.168.255.255 as the private Class C range used for local area networks.',
    },
    {
      unit: 'Unit 09: Python Programming',
      question: 'What is the output of the following Python snippet: [x**2 for x in range(4) if x % 2 != 0]?',
      options: [
        'A. [0, 4]',
        'B. [1, 9]',
        'C. [1, 4, 9]',
        'D. [0, 1, 4, 9]',
      ],
      correct: 1,
      explanation:
        'range(4) yields 0, 1, 2, 3. The odd values are 1 and 3. Squaring them yields 1**2 = 1 and 3**2 = 9 → [1, 9].',
    },
  ];

  const currentQ = sampleQuestions[selectedQuestion];

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === currentQ.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (selectedQuestion < sampleQuestions.length - 1) {
      setSelectedQuestion(selectedQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Reset
      setSelectedQuestion(0);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setScore(0);
    }
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive Live Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Try Smartify Right in Your Browser
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Experience how fast, intuitive, and educational the practice questions feel before downloading to your phone.
          </p>
        </div>

        {/* Live Simulator Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/30 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                {currentQ.unit}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Question {selectedQuestion + 1} of {sampleQuestions.length}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 font-mono">
                Score: <strong className="text-emerald-400">{score}</strong> / {sampleQuestions.length}
              </div>
              <button
                onClick={() => {
                  setSelectedQuestion(0);
                  setSelectedAnswer(null);
                  setIsAnswered(false);
                  setScore(0);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Restart Quiz"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question Body */}
          <div className="py-6">
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed mb-6">
              {currentQ.question}
            </p>

            {/* Answer Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-slate-700';

                if (isAnswered) {
                  if (idx === currentQ.correct) {
                    btnStyle = 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300 shadow-md shadow-emerald-900/20';
                  } else if (idx === selectedAnswer) {
                    btnStyle = 'bg-rose-950/40 border-rose-500/60 text-rose-300';
                  } else {
                    btnStyle = 'bg-slate-900/40 border-slate-800/40 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectAnswer(idx)}
                    className={`p-4 rounded-2xl border text-left text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswered && idx === currentQ.correct && (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {isAnswered && (
              <div className="mt-6 p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-xs sm:text-sm text-indigo-200 leading-relaxed animate-fadeIn flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold">Examiner Explanation: </strong>
                  <span>{currentQ.explanation}</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Smartify Live Question Simulator
            </span>
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isAnswered
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              {selectedQuestion < sampleQuestions.length - 1 ? 'Next Question →' : 'Restart Mini Quiz'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
