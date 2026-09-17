import Link from 'next/link';

export default function WorkPage() {
  const projects = [
    {
      title: "Apex Home Services Funnel",
      category: "Local Service Growth System",
      description: "High-converting modern landing page and automated lead capture funnel designed for home service providers to drive inbound calls.",
      metrics: "3x increase in quote conversion rates",
      tag: "Client Solution",
      gradient: "from-indigo-500/20 via-purple-500/20 to-transparent",
      border: "border-indigo-500/30",
    },
    {
      title: "PrimeCare Dental Pipeline",
      category: "WhatsApp Automation & Booking",
      description: "Integrated appointment booking pipeline connecting Meta ad traffic directly to an automated WhatsApp qualification flow.",
      metrics: "65% reduction in cost per acquisition",
      tag: "Conversion System",
      gradient: "from-sky-500/20 via-teal-500/20 to-transparent",
      border: "border-teal-500/30",
    },
    {
      title: "Metro Logistics Ad Scale",
      category: "Meta Ads & Retargeting Engine",
      description: "Full-funnel paid acquisition strategy structured to target regional shipping and commercial delivery clients.",
      metrics: "4.2x average return on ad spend",
      tag: "Growth Campaign",
      gradient: "from-sky-500/20 via-indigo-500/20 to-transparent",
      border: "border-sky-500/30",
    },
    {
      title: "Vanguard Real Estate Portal",
      category: "High-Performance Web Architecture",
      description: "Lightning-fast property showcase platform featuring interactive filters and instant WhatsApp inquiry routing.",
      metrics: "Sub-second load times & higher engagement",
      tag: "Web Infrastructure",
      gradient: "from-purple-500/20 via-sky-500/20 to-transparent",
      border: "border-purple-500/30",
    }
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-400 font-semibold text-sm tracking-widest uppercase bg-sky-950/40 px-3 py-1 rounded-full border border-sky-800/50">
            Proven Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-6">
            Digital Systems Built for Scale
          </h1>
          <p className="text-slate-400 text-lg">
            Explore our high-performance web systems, automated lead funnels, and growth campaigns engineered to convert visitors into paying clients.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl bg-slate-900/60 border ${project.border} p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between overflow-hidden group hover:border-sky-400/50 transition-all duration-300 shadow-xl`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-800/50">
                    {project.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.category.split('/')[0]}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors relative z-10">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 relative z-10">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-900/40 w-fit">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {project.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-indigo-950/60 border border-sky-800/40 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Ready to Upgrade Your Business System?
            </h2>
            <p className="text-slate-300 mb-8">
              Let's analyze your current digital presence and build a tailored solution that drives real revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/free-ad-audit" 
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-sky-500/20"
              >
                Get a Free Ad Audit
              </Link>
              <Link 
                href="/contact" 
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl border border-slate-700 transition-colors"
              >
                Contact Us Directly
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}