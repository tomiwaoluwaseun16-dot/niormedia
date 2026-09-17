import React from 'react';

export default function AuditFlow() {
  return (
    <div className="w-full bg-slate-950 border border-slate-800/80 rounded-xl p-6 shadow-xl">
      <div className="text-sm font-bold text-white mb-4 flex items-center justify-between">
        <span>Free Ad Audit Diagnostic Architecture</span>
        <span className="text-xs font-mono text-sky-400 font-normal">3-Step Review</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
          <div className="text-sky-400 font-mono font-bold mb-1">01</div>
          <div className="text-white font-semibold">URL & Asset Input</div>
          <div className="text-[10px] text-slate-400 mt-1">Website & active ad check</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
          <div className="text-sky-400 font-mono font-bold mb-1">02</div>
          <div className="text-white font-semibold">Funnel Diagnosis</div>
          <div className="text-[10px] text-slate-400 mt-1">Identify drop-off points</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
          <div className="text-sky-400 font-mono font-bold mb-1">03</div>
          <div className="text-white font-semibold">Action Strategy</div>
          <div className="text-[10px] text-slate-400 mt-1">Delivered direct to inbox</div>
        </div>
      </div>
    </div>
  );
}
