import React from 'react';

export default function WhatsAppFlow() {
  return (
    <div className="w-full bg-slate-950 border border-slate-800/80 rounded-xl p-6 shadow-xl">
      <div className="text-sm font-bold text-white mb-4 flex items-center justify-between">
        <span>WhatsApp Lead Routing Flow</span>
        <span className="text-xs font-mono text-emerald-400 font-normal">Automated Chat</span>
      </div>
      <div className="space-y-3 font-mono text-xs">
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg max-w-[85%] text-slate-300">
          <p className="text-[10px] text-slate-400 mb-1 font-semibold">User clicks ad or button:</p>
          &quot;Hi NiorMedia, I need a high-converting website for my business.&quot;
        </div>
        <div className="bg-emerald-950/30 border border-emerald-900/40 p-3 rounded-lg max-w-[85%] ml-auto text-emerald-300">
          <p className="text-[10px] text-emerald-400/80 mb-1 font-semibold">Automated Instant Response:</p>
          &quot;Hello! We can build your system in under 2 weeks. What is your current website or project scope?&quot;
        </div>
      </div>
    </div>
  );
}
