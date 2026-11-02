import React from 'react';
import { X, Apple, CheckCircle2, Download, ExternalLink, AlertCircle, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface IOSGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSGuideModal: React.FC<IOSGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-700/80 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
            <Apple className="w-6 h-6 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">How to Install on iPhone / iPad</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-indigo-500/20 text-indigo-300">
                .IPA Sideload
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Install directly without Apple App Store in less than 2 minutes
            </p>
          </div>
        </div>

        {/* Notice Box */}
        <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 mb-6 flex items-start gap-3 text-xs text-indigo-200">
          <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Why install via .IPA file? </strong>
            Our iOS release is currently being finalized for the official Apple App Store listing. In the meantime, you can easily install the complete verified application directly on your iOS device without jailbreaking.
          </div>
        </div>

        {/* Download Button Callout */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs text-slate-400">Step 1: Download the Application File</p>
            <p className="text-sm font-bold text-white">Smartify-AL-ICT.ipa ({APP_CONFIG.downloads.iosSize})</p>
          </div>
          <a
            href={APP_CONFIG.downloads.ipaDirectUrl}
            download="Smartify-AL-ICT.ipa"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .IPA File</span>
          </a>
        </div>

        {/* Sideload Methods */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Choose an Installation Method:
          </h4>

          {/* Method 1: Scarlet (Easiest - Direct on device) */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">1</span>
                Option A: Scarlet (No Computer Needed)
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                Recommended
              </span>
            </div>
            <ol className="text-xs text-slate-300 space-y-1.5 ml-7 list-decimal">
              <li>Open Safari on your iPhone and visit <a href="https://usescarlet.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline font-semibold">usescarlet.com</a>.</li>
              <li>Install the Scarlet app installer on your device.</li>
              <li>Open Scarlet, tap the top-right install icon, and select the downloaded <strong>Smartify-AL-ICT.ipa</strong> file.</li>
              <li>Wait 30 seconds for the app to install on your Home Screen!</li>
            </ol>
          </div>

          {/* Method 2: AltStore / Sideloadly */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs">2</span>
                Option B: AltStore or Sideloadly (Via Mac/PC)
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                100% Reliable
              </span>
            </div>
            <ol className="text-xs text-slate-300 space-y-1.5 ml-7 list-decimal">
              <li>Connect your iPhone/iPad to your computer via USB cable.</li>
              <li>Open <a href="https://sideloadly.io" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">Sideloadly</a> or AltServer.</li>
              <li>Drag and drop the <strong>Smartify-AL-ICT.ipa</strong> into the tool and click <strong>Start</strong>.</li>
              <li>On iPhone, go to <strong>Settings → General → VPN & Device Management</strong> and tap <strong>Trust</strong>.</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">Questions? Need assistance?</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
