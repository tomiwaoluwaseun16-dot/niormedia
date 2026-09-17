import Link from "next/link";
import GrowthDiagram from "@/components/visuals/GrowthDiagram";

export default function Home() {
  const featuredProjects = [
    {
      title: "Real Estate Lead Generation System",
      category: "Concept Project — Demonstration",
      description: "High-converting landing page and automated lead capture funnel designed to qualify property buyers and route inquiries instantly via WhatsApp.",
    },
    {
      title: "Dental Clinic Growth System",
      category: "Concept Project — Demonstration",
      description: "Local service website optimized for local search, patient booking conversions, and friction-free consultation requests.",
    },
    {
      title: "Home Services Lead Generation",
      category: "Concept Project — Demonstration",
      description: "Conversion-focused service landing page engineered to capture emergency and scheduled home service requests with immediate quotation workflows.",
    },
    {
      title: "E-commerce Acquisition System",
      category: "Concept Project — Demonstration",
      description: "Direct-to-consumer product acquisition funnel designed to optimize top-of-funnel traffic, reduce cart abandonment, and structure high-converting retargeting campaigns.",
    },
  ];

  return (
    <div className="flex flex-col selection:bg-sky-500 selection:text-slate-950">
      <main className="flex-grow pt-12 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <span className="inline-block px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            Digital Systems Architecture
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
            We Build High-Performance Web Systems & Growth Funnels
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10">
            NiorMedia engineers blazing-fast web applications integrated seamlessly with targeted traffic pipelines to turn visitors into paying customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/free-ad-audit"
              className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-sky-500/20"
            >
              Get a Free Ad Audit
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-800 transition-colors"
            >
              Explore Our Portfolio
            </Link>
          </div>
        </section>

        {/* Growth Engine Diagram */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <GrowthDiagram />
        </section>

        {/* Featured Concepts Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Proven Portfolio</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-3">Digital Systems Built for Scale</h2>
            <p className="text-slate-400 text-sm">Explore our featured concept projects and high-performance web applications engineered to drive real revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div>
                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-1 bg-sky-500/10 text-sky-400 text-[10px] font-mono font-bold rounded border border-sky-500/20 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">System Architecture</span>
                  <Link href="/free-ad-audit" className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors">
                    Request Similar System →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Upgrade Your Business System?</h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
              Let&apos;s analyze your current digital presence and build a tailored solution that drives real revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/free-ad-audit" className="px-6 py-3 rounded-xl bg-sky-500 text-slate-950 font-bold text-sm hover:bg-sky-400 transition-colors">
                Get a Free Ad Audit
              </Link>
              <Link href="/contact" className="px-6 py-3 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:bg-slate-700 transition-colors">
                Contact Us Directly
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
