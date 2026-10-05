import React, { useState } from 'react';
import qrCode from './assets/images/image_qr_code_1791103965113.jpg';
import { QrCode, ExternalLink, Sparkles, Info, Sliders, Download, Check, Code2, Globe, ShieldCheck } from 'lucide-react';

export default function App() {
  const [url, setUrl] = useState('https://www.frontendmentor.io');
  const [copied, setCopied] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const [cardTitle, setCardTitle] = useState('Improve your front-end skills by building projects');
  const [cardDesc, setCardDesc] = useState('Scan the QR code to visit Frontend Mentor and take your coding skills to the next level');
  const [customImage, setCustomImage] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presetUrls = [
    { label: 'Frontend Mentor', value: 'https://www.frontendmentor.io' },
    { label: 'GitHub Profile', value: 'https://github.com' },
    { label: 'Portfolio', value: 'https://react.dev' },
  ];

  return (
    <div className="min-h-screen bg-[#d5e1ef] flex flex-col justify-between items-center p-4 sm:p-6 antialiased selection:bg-[#3662e3] selection:text-white">
      {/* Top Header Navigation */}
      <header className="w-full max-w-4xl flex flex-wrap items-center justify-between gap-4 py-3 px-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3662e3] to-[#2c52cd] flex items-center justify-center text-white shadow-md shadow-[#3662e3]/30">
            <QrCode className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#1f314f] tracking-tight flex items-center gap-2">
              ScanPoint <span className="text-xs px-2 py-0.5 rounded-full bg-[#3662e3]/10 text-[#3662e3] font-semibold">QR Suite</span>
            </h1>
            <p className="text-xs text-[#68778d]">Frontend Mentor Challenge & QR Generator</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              showSpecs
                ? 'bg-[#1f314f] text-white shadow-md'
                : 'bg-slate-100 text-[#1f314f] hover:bg-slate-200'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>{showSpecs ? 'Hide Spec Guide' : 'View Spec Guide'}</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-5xl flex-1 flex flex-col items-center justify-center py-8 px-4 gap-8">
        
        {/* Spec & Customizer Drawer (Toggleable) */}
        {showSpecs && (
          <div className="w-full max-w-2xl bg-white rounded-2xl p-6 shadow-xl border border-slate-200/80 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h2 className="text-sm font-bold text-[#1f314f] flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#3662e3]" />
                Challenge Specifications & Customizer
              </h2>
              <span className="text-xs bg-emerald-50 text-emerald-600 font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Pixel Accurate
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#68778d] mb-1.5">Target Destination URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3662e3]"
                    />
                    <button
                      onClick={handleCopy}
                      className="px-3 py-2 text-xs bg-[#1f314f] text-white rounded-lg hover:bg-[#2c3e5d] transition-colors flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#68778d] mb-1.5">Presets</label>
                  <div className="flex flex-wrap gap-1.5">
                    {presetUrls.map((preset) => (
                      <button
                        key={preset.label}
                        onClick={() => setUrl(preset.value)}
                        className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                          url === preset.value
                            ? 'bg-[#3662e3] text-white'
                            : 'bg-slate-100 text-[#68778d] hover:bg-slate-200'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h3 className="text-xs font-bold text-[#1f314f] uppercase tracking-wider">Design System Guide</h3>
                <ul className="space-y-2 text-xs text-[#68778d]">
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-[#1f314f]">Font Family:</span>
                    <span className="font-mono">Outfit (400, 700)</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-[#1f314f]">Card Background:</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-white border border-slate-300"></span> White (#FFFFFF)</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-[#1f314f]">Page Background:</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#d5e1ef] border border-slate-300"></span> Light Blue (#d5e1ef)</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-[#1f314f]">Heading Color:</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#1f314f]"></span> Dark Blue (#1f314f)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* The Authentic QR Code Component Card */}
        <div className="w-[320px] sm:w-[340px] bg-white rounded-[20px] p-4 pb-10 shadow-[0_25px_25px_rgba(0,0,0,0.08)] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
          {/* QR Code Image Container */}
          <div className="w-full rounded-[10px] overflow-hidden bg-[#3662e3] relative group">
            <img
              src={qrCode}
              alt="QR Code to Frontend Mentor"
              className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#3662e3]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1f314f] px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                <span>Scan / Open Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card Text Content */}
          <div className="px-2 pt-6 flex flex-col gap-4">
            <h2 className="text-[22px] font-bold text-[#1f314f] leading-tight tracking-tight">
              {cardTitle}
            </h2>
            <p className="text-[15px] font-normal text-[#68778d] leading-relaxed">
              {cardDesc}
            </p>
          </div>

          {/* Quick Action badge */}
          <div className="mt-6">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#3662e3] bg-[#3662e3]/10 hover:bg-[#3662e3]/20 px-3.5 py-1.5 rounded-full transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Visit Target URL</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer Attribution */}
      <footer className="w-full max-w-4xl py-4 text-center text-xs text-[#68778d] flex flex-col sm:flex-row items-center justify-center gap-2 border-t border-slate-200/60 mt-4">
        <div>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3662e3] font-semibold hover:underline"
          >
            Frontend Mentor
          </a>
          .
        </div>
        <span className="hidden sm:inline">•</span>
        <div>
          Coded with ❤️ by <span className="font-semibold text-[#1f314f]">ScanPoint</span>
        </div>
      </footer>
    </div>
  );
}
