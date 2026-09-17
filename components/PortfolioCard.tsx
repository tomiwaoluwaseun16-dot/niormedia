interface PortfolioCardProps {
  businessType: string;
  objective: string;
  solution: string;
  deliverables: string[];
}

export default function PortfolioCard({
  businessType,
  objective,
  solution,
  deliverables,
}: PortfolioCardProps) {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
      <div>
        <div className="inline-block bg-sky-950/80 text-sky-400 text-xs font-semibold px-3 py-1 rounded-full border border-sky-800/50 mb-4">
          Concept Project — Demonstration
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{businessType}</h3>
        <p className="text-sm text-slate-400 mb-4"><strong className="text-slate-300">Objective:</strong> {objective}</p>
        <p className="text-sm text-slate-400 mb-4"><strong className="text-slate-300">Solution:</strong> {solution}</p>
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Example Deliverables:</p>
          <ul className="space-y-1">
            {deliverables.map((item, index) => (
              <li key={index} className="text-sm text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
