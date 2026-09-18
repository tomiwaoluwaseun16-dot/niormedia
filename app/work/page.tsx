import Link from 'next/link';

export default function WorkPage() {
  const conceptProjects = [
    {
      title: "Real Estate Lead System",
      category: "Lead Generation & Conversion Funnel",
      description: "A high-converting digital infrastructure designed for real estate agencies to capture, qualify, and route high-value property buyer inquiries seamlessly.",
      features: [
        "Property-specific landing page templates",
        "Automated qualification questionnaire flow",
        "Instant WhatsApp & CRM lead routing integration"
      ]
    },
    {
      title: "Dental Clinic Growth System",
      category: "Appointment Booking & Local Acquisition",
      description: "An automated patient acquisition framework built to drive local appointment bookings and streamline patient intake for modern dental practices.",
      features: [
        "Frictionless online appointment booking widget",
        "Automated SMS and WhatsApp reminder sequences",
        "Geo-targeted local service visibility structure"
      ]
    },
    {
      title: "Home Services Lead System",
      category: "Instant Quote & Service Funnel",
      description: "A streamlined digital system tailored for home service contractors to capture emergency or scheduled quote requests instantly from mobile and desktop traffic.",
      features: [
        "Interactive multi-step cost estimator form",
        "Instant SMS dispatch for immediate contractor response",
        "Optimized mobile-first service layout"
      ]
    },
    {
      title: "E-commerce Growth System",
      category: "Storefront Optimization & Conversion",
      description: "A high-performance e-commerce architecture designed to optimize product discovery, reduce cart abandonment, and maximize average order value.",
      features: [
        "Lightning-fast product catalog presentation",
        "Streamlined single-page checkout flow",
        "Automated post-purchase retention sequences"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
          Portfolio & Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Our Concept <span className="text-sky-400">Demonstrations</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Explore the digital systems and high-converting architectures NiorMedia designs and builds for modern businesses.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {conceptProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-sky-400">0{index + 1}</span>
                <span className="inline-block bg-slate-950 border border-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full font-medium">
                  Concept Project — Demonstration
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-xs font-semibold text-sky-300 uppercase tracking-wider">{project.category}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Included Architecture:</span>
              <ul className="space-y-2">
                {project.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2 shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Build Your Custom Digital System?</h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Let’s discuss how we can engineer a tailored growth system for your business.
        </p>
        <div>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-colors shadow-lg shadow-sky-500/20"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
