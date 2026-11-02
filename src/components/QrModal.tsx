import React, { useState } from 'react';
import { X, Smartphone, Apple, Play, Download, Copy, Check } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { APP_CONFIG } from '../config/appConfig';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [platform, setPlatform] = useState<'playstore' | 'ios' | 'apk'>('playstore');

  if (!isOpen) return null;

  const currentUrl =
    platform === 'playstore'
      ? APP_CONFIG.downloads.playStoreUrl
      : platform === 'ios'
      ? `${window.location.origin}${APP_CONFIG.downloads.ipaDirectUrl}`
      : `${window.location.origin}${APP_CONFIG.downloads.apkDirectUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl glass-panel border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-white mb-1">Scan to Download</h3>
        <p className="text-xs text-slate-400 mb-6">
          Open your phone's camera and scan the QR code to install directly.
        </p>

        {/* Platform Tabs */}
        <div className="flex items-center justify-center p-1 rounded-xl bg-slate-900 border border-slate-800 mb-6 text-xs font-semibold">
          <button
            onClick={() => setPlatform('playstore')}
            className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              platform === 'playstore' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Play Store</span>
          </button>
          <button
            onClick={() => setPlatform('ios')}
            className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              platform === 'ios' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            <Apple className="w-3.5 h-3.5" />
            <span>iOS (.ipa)</span>
          </button>
          <button
            onClick={() => setPlatform('apk')}
            className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              platform === 'apk' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Direct APK</span>
          </button>
        </div>

        {/* QR Code Container */}
        <div className="inline-block p-4 rounded-2xl bg-white shadow-xl shadow-indigo-500/10 mb-6">
          <QRCodeSVG value={currentUrl} size={180} level="M" />
        </div>

        {/* Copy Link Input */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="flex-1 bg-transparent px-3 text-slate-300 font-mono text-[11px] truncate focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium flex items-center gap-1 transition-colors shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
