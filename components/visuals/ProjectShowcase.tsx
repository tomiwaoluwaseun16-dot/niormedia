import React from 'react';

interface ProjectShowcaseProps {
  title: string;
  category: string;
  description: string;
  tech: string;
  highlights: string[];
  children?: React.ReactNode;
}

export default function ProjectShowcase({
  title,
  category,
  description,
  tech,
  highlights,
  children,
}: ProjectShowcaseProps) {
  return (
    <div className="border-b border-slate-800/80 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">{category}</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">{title}</h2>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
            {tech}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
          <div className="space-y-2 text-xs text-slate-400 font-mono">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
