import Button from "@/components/Button";

export default function WorkPage() {
  const projects = [
    {
      title: "Creator Studio AI",
      category: "Full-Stack Web App & Automation",
      description: "An automated content creation pipeline generating video scripts and synthesizing voiceovers using advanced AI models.",
      metrics: "Conversion-focused lead capture structure",
      tags: ["Next.js", "FastAPI", "Tailwind CSS", "AI Integration"]
    },
    {
      title: "Apex Roofing SaaS",
      category: "Conversion Funnel & Lead Gen",
      description: "High-performance digital presence and customer acquisition funnel built for home service contractors.",
      metrics: "Appointment booking and WhatsApp integration",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      title: "ApexRift Analytics",
      category: "Predictive Data Engine",
      description: "Sports analytics platform featuring statistical prediction models and consensus probability distributions.",
      metrics: "Campaign structure designed for targeted acquisition",
      tags: ["Next.js", "Supabase", "TypeScript"]
    },
    {
      title: "UrbanNest Living",
      category: "Interactive Design Gallery",
      description: "Custom interior design style galleries and interactive budget estimators with dynamic visual layouts.",
      metrics: "Responsive property showcase and inquiry routing",
      tags: ["React", "Vite", "Tailwind CSS"]
    }
  ];

  return (
    <div className="space-y-16 py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-block bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
          CONCEPT PORTFOLIO
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Our Proven <span className="text-sky-400">Track Record</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Explore fictional concept demonstrations showing how NiorMedia can design digital systems for different business types.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:border-sky-500/50 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">{project.category}</span>
                <span className="text-xs font-medium text-slate-500 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">Concept Project — Demonstration</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-3 text-xs text-slate-300 font-medium">
                {project.metrics}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="bg-slate-950 text-slate-400 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-10 text-center space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white">Have a Project in Mind?</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Let’s discuss how we can build a custom digital solution or high-converting funnel for your brand.
        </p>
        <div className="pt-2">
          <Button href="/contact" variant="primary">
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
}
