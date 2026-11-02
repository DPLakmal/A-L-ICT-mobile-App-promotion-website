import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Eye, Database, Bell, RefreshCw, Mail, UserCheck, HelpCircle } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Top Back Navigation */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-slate-700/80 text-sm font-semibold transition-all hover:scale-[1.02]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header Hero */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-indigo-500/30 mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Google Play Developer Policy Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            This Privacy Policy explains how <strong>{APP_CONFIG.name}</strong> ("we", "our", or "the Application"), developed by <strong>Pubudu Lakmal</strong>, collects, uses, and safeguards information when you use our mobile application (Package ID: <span className="font-mono text-indigo-300">com.entroop.alict</span>) and associated services.
          </p>
          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
            <span><strong>Effective Date:</strong> November 2, 2026</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> November 2, 2026</span>
            <span>•</span>
            <span><strong>Target Audience:</strong> G.C.E. A/L Students & Educators</span>
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                1
              </div>
              <h2 className="text-xl font-bold text-white">Introduction & Overview</h2>
            </div>
            <p className="mb-3">
              <strong>{APP_CONFIG.name}</strong> is an educational mobile application created to assist students preparing for the Sri Lankan General Certificate of Education Advanced Level (G.C.E. A/L) Information and Communication Technology (ICT) examination.
            </p>
            <p>
              We prioritize user trust and student privacy. This application is designed to collect only the minimal data necessary to provide study progress tracking, profile synchronization, and authentic examination revision materials.
            </p>
          </section>

          {/* Section 2 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-xl font-bold text-white">Information We Collect</h2>
            </div>
            <p className="mb-4">
              We collect information in the following ways depending on how you interact with the app:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-indigo-400" />
                  A. Information You Provide (Optional Account Sign-In)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  When you sign in using <strong>Google Sign-In</strong> or Firebase Authentication, we receive basic public profile information provided by Google, including:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-xs sm:text-sm text-slate-400">
                  <li>Your name (displayed in your personal dashboard greeting)</li>
                  <li>Your email address (used for secure account identification)</li>
                  <li>Your profile photo URL (used to display your avatar in the app profile)</li>
                  <li>Firebase User UID (unique identifier to associate your quiz scores and bookmarks)</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                  <Database className="w-4 h-4 text-teal-400" />
                  B. Educational Progress & Local Preferences
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To give you a seamless educational experience, the application stores your study data:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-xs sm:text-sm text-slate-400">
                  <li>MCQ quiz scores, answer attempts, and quiz history</li>
                  <li>Language preference (English, Sinhala, or Tamil) stored locally on your device via SharedPreferences</li>
                  <li>Dark/Light display theme preference</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-amber-400" />
                  C. Device & Technical Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  When accessing cloud-hosted PDF past papers and syllabus content, standard non-identifying technical data (such as app version, operating system version, and general error crash logs) may be automatically processed by Google Play Services and Firebase to ensure app stability.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <p className="mb-3">We use the collected information strictly for educational and application functionality purposes, including to:</p>
            <ul className="list-disc ml-6 space-y-2 text-xs sm:text-sm">
              <li>Authenticate your account and synchronize your quiz results across your devices.</li>
              <li>Provide personalized study feedback and track syllabus completion.</li>
              <li>Display exam papers, short notes, and curriculum lessons in your preferred language medium.</li>
              <li>Maintain, troubleshoot, and optimize the speed and reliability of the mobile application.</li>
              <li>Prevent unauthorized abuse or fraudulent access to application servers.</li>
            </ul>
            <p className="mt-4 text-xs sm:text-sm text-emerald-400 font-semibold">
              ✓ We NEVER sell, rent, monetize, or trade your personal or educational data to any third-party advertisers or data brokers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold">
                4
              </div>
              <h2 className="text-xl font-bold text-white">Third-Party Service Providers</h2>
            </div>
            <p className="mb-3">
              We partner with trusted service providers to facilitate app infrastructure. These third parties only have access to the data required to perform specific infrastructure tasks under strict confidentiality:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="font-bold text-white text-sm mb-1">Google Play Services & Firebase</h4>
                <p className="text-xs text-slate-400">
                  Used for account authentication (Firebase Auth), real-time database synchronization (Cloud Firestore), and distribution.
                </p>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-indigo-400 underline mt-2 inline-block"
                >
                  Google Privacy Policy →
                </a>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="font-bold text-white text-sm mb-1">Google Sign-In API</h4>
                <p className="text-xs text-slate-400">
                  Used to allow one-tap sign-in with your existing Google Account credentials.
                </p>
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-indigo-400 underline mt-2 inline-block"
                >
                  Google API Services User Data Policy →
                </a>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center font-bold">
                5
              </div>
              <h2 className="text-xl font-bold text-white">Data Retention, Security & Deletion</h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <p>
                <strong>Security:</strong> All communications between the mobile application and backend services (Firebase and Google APIs) are encrypted in transit using industry-standard TLS/SSL encryption protocols.
              </p>
              <p>
                <strong>Data Retention:</strong> We retain your quiz history and profile data only for as long as your account remains active.
              </p>
              <p>
                <strong>User Rights & Account Deletion:</strong> You have the right to request deletion of your account and associated quiz progress at any time. To request deletion of your personal data, email us at <a href="mailto:dplakmal.dev@gmail.com" className="text-indigo-400 underline">dplakmal.dev@gmail.com</a> with the subject "Data Deletion Request", and all account records will be permanently removed within 30 days.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">
                6
              </div>
              <h2 className="text-xl font-bold text-white">Children's Privacy</h2>
            </div>
            <p className="text-xs sm:text-sm">
              Our application is designed for secondary school and collegiate students preparing for the Sri Lankan G.C.E. Advanced Level examination (typically aged 16 and above). We do not knowingly collect personal identifiable information from children under 13. If you believe a child under 13 has provided personal information to our application, please contact us immediately, and we will take prompt steps to delete such data.
            </p>
          </section>

          {/* Section 7 */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                7
              </div>
              <h2 className="text-xl font-bold text-white">Changes to This Privacy Policy</h2>
            </div>
            <p className="text-xs sm:text-sm">
              We may update this Privacy Policy from time to time to reflect changes in our practices or regulatory requirements. Any updates will be posted directly on this webpage with a revised "Last Updated" date. We encourage users to periodically review this page to stay informed.
            </p>
          </section>

          {/* Section 8: Contact */}
          <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/40 bg-indigo-950/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Contact Us</h2>
            </div>
            <p className="text-xs sm:text-sm mb-4">
              If you have any questions, suggestions, or concerns regarding this Privacy Policy or your data, please contact the developer:
            </p>
            <div className="space-y-1 text-xs sm:text-sm text-slate-300 font-mono">
              <p>• <strong>Developer:</strong> Pubudu Lakmal</p>
              <p>• <strong>Application:</strong> Smartify - A/L ICT (com.entroop.alict)</p>
              <p>• <strong>Email:</strong> <a href="mailto:dplakmal.dev@gmail.com" className="text-indigo-400 underline font-sans">dplakmal.dev@gmail.com</a></p>
              <p>• <strong>GitHub:</strong> <a href="https://github.com/DPLakmal/A-L-ICT-Mobile-Application-V2" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline font-sans">github.com/DPLakmal/A-L-ICT-Mobile-Application-V2</a></p>
            </div>
          </section>
        </div>

        {/* Back to Home Button at Bottom */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02]"
          >
            ← Return to Smartify Home
          </button>
        </div>
      </div>
    </div>
  );
};
