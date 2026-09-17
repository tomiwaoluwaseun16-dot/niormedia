import React from 'react';

export default function GrowthDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-xs font-semibold text-sky-400 uppercase tracking-widest mb-2">
            NiorMedia Growth Engine
          </span>
          <h3 className="text-xl font-bold text-white">The Connected Digital System</h3>
          <p className="text-sm text-slate-400 mt-1">Every element engineered to feed into measurable lead generation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
          <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 text-center hover:border-sky-500/40 transition-colors group">
            <div className="w-8 h-8 bg-sky-500/10 text-sky-400 rounded-lg flex items-center justify-center mx-auto mb-2 font-mono text-xs font-bold group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">01</div>
            <div className="text-xs font-bold text-white">Website</div>
            <div className="text-[10px] text-slate-400 mt-1">High-Speed UI Architecture</div>
          </div>

          <div className="hidden sm:flex justify-center text-sky-500/40 animate-pulse font-mono text-sm">→</div>

          <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 text-center hover:border-sky-500/40 transition-colors group">
            <div className="w-8 h-8 bg-sky-500/10 text-sky-400 rounded-lg flex items-center justify-center mx-auto mb-2 font-mono text-xs font-bold group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">02</div>
            <div className="text-xs font-bold text-white">Traffic</div>
            <div className="text-[10px] text-slate-400 mt-1">Targeted Meta & Search Ads</div>
          </div>

          <div className="hidden sm:flex justify-center text-sky-500/40 animate-pulse font-mono text-sm">→</div>

          <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 text-center hover:border-sky-500/40 transition-colors group">
            <div className="w-8 h-8 bg-sky-500/10 text-sky-400 rounded-lg flex items-center justify-center mx-auto mb-2 font-mono text-xs font-bold group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">03</div>
            <div className="text-xs font-bold text-white">Conversion</div>
            <div className="text-[10px] text-slate-400 mt-1">Frictionless Lead Capture</div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-center space-x-2 text-[11px] text-slate-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Continuous Data Optimization & Pipeline Scale</span>
        </div>
      </div>
    </div>
  );
}
