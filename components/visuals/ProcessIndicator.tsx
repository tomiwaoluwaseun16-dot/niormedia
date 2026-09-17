import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessIndicatorProps {
  steps: Step[];
  columns?: 3 | 4 | 6;
}

export default function ProcessIndicator({ steps, columns = 4 }: ProcessIndicatorProps) {
  const gridColsClass = 
    columns === 6 ? 'lg:grid-cols-3 xl:grid-cols-6' :
    columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-4 sm:gap-6`}>
      {steps.map((step, idx) => (
        <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 relative hover:border-slate-700 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-sky-500/10 text-sky-400 rounded-md border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
              {step.number}
            </span>
          </div>
          <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
          <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
