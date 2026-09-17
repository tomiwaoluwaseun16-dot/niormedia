import React from 'react';

export default function MetaAdsFunnel() {
  return (
    <div className="w-full bg-slate-950 border border-slate-800/80 rounded-xl p-6 shadow-xl">
      <div className="text-sm font-bold text-white mb-4 flex items-center justify-between">
        <span>Meta Ads Campaign Architecture</span>
        <span className="text-xs font-mono text-sky-400 font-normal">System Schema</span>
      </div>
      <div className="space-y-3">
        <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">1. Audience & Placement Targeting</span>
          <span className="font-mono text-slate-400 text-[10px] bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Precision Filters</span>
        </div>
        <div className="text-center text-slate-600 text-xs">↓</div>
        <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">2. High-Converting Ad Creative & Hook</span>
          <span className="font-mono text-slate-400 text-[10px] bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Direct Response</span>
        </div>
        <div className="text-center text-slate-600 text-xs">↓</div>
        <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">3. Frictionless Landing Page / WhatsApp Routing</span>
          <span className="font-mono text-emerald-400 text-[10px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50">Instant Capture</span>
        </div>
      </div>
    </div>
  );
}
