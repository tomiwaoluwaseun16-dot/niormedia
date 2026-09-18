import React from 'react';

export default function RealEstateMobileMockup() {
  return (
    <div className="max-w-xs mx-auto bg-slate-950 border-4 border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
      <div className="bg-slate-900 px-6 pt-3 pb-2 flex items-center justify-between border-b border-slate-800">
        <span className="text-[10px] font-mono text-slate-400">9:41</span>
        <div className="w-16 h-3 bg-slate-950 rounded-full"></div>
        <span className="text-[10px] font-mono text-sky-400">5G</span>
      </div>

      <div className="p-4 space-y-4 bg-slate-950 text-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-sky-500 flex items-center justify-center font-bold text-slate-950 text-[10px]">
              VE
            </div>
            <span className="font-serif text-xs font-semibold tracking-wider">VANGUARD ESTATES</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs text-slate-400">
            ☰
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[9px] font-mono text-slate-500 uppercase block">Active Market</span>
            <span className="text-xs font-medium text-slate-200">🇬🇧 London, United Kingdom</span>
          </div>
          <span className="text-[10px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 font-mono">£ GBP</span>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden space-y-3 pb-3">
          <div className="h-32 bg-gradient-to-tr from-slate-950 to-slate-900 relative flex items-center justify-center border-b border-slate-800">
            <span className="absolute top-2 left-2 bg-slate-950/80 border border-slate-800 text-[9px] text-sky-400 px-2 py-0.5 rounded-full font-mono">
              Kensington, London
            </span>
            <span className="text-slate-600 text-[11px] font-serif">Mobile Viewport</span>
          </div>

          <div className="px-3 space-y-1">
            <span className="text-[10px] text-sky-400 font-medium">United Kingdom</span>
            <h4 className="text-sm font-semibold text-white font-serif">Kensington Heritage Residence</h4>
            <p className="text-[10px] text-slate-400 font-mono">4 Bed • 4 Bath • 340 m²</p>
            <div className="text-xs font-bold text-slate-100 pt-0.5">£ 4,200,000</div>
          </div>

          <div className="px-3 pt-1 space-y-2">
            <div className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 text-center py-2 rounded-xl text-xs font-semibold transition-colors">
              Instant Property Inquiry
            </div>
            <div className="w-full bg-slate-950 border border-slate-800 text-sky-400 text-center py-2 rounded-xl text-xs font-medium">
              WhatsApp Concierge
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
