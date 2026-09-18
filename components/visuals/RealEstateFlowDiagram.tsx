import React from 'react';

export default function RealEstateFlowDiagram() {
  const steps = [
    { title: "Targeted Traffic", desc: "Visitors arrive through market-specific advertising, search, or direct discovery." },
    { title: "Market / Property Search", desc: "Dynamic filtering across international inventory and regional currencies." },
    { title: "Property Inquiry", desc: "Submits interest via streamlined multi-step form" },
    { title: "Lead Qualification", desc: "System auto-qualifies buyer budget and timeline" },
    { title: "WhatsApp / Contact", desc: "Instant routing to direct WhatsApp or regional CRM" },
    { title: "Agent Follow-up", desc: "Dedicated advisor engages with full context" }
  ];

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="space-y-2 text-center max-w-xl mx-auto">
        <span className="text-xs font-mono text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Conversion Architecture
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
          End-to-End Real Estate Lead Flow
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          How visitor traffic transitions smoothly from targeted advertising and discovery to qualified agent consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-4">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative group hover:border-sky-500/40 transition-colors">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 inline-block">
                Stage 0{idx + 1}
              </span>
              <h4 className="text-xs font-semibold text-white">{step.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 text-slate-600 font-mono text-xs">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
