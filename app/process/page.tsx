import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Understanding your business, audience, and growth objectives",
      description: "Every successful digital system starts with clarity. We review your current online presence, identify target audience segments, analyze market positioning, and pinpoint your core customer acquisition bottlenecks.",
      activities: [
        "Business model and offer review",
        "Target audience and market positioning analysis",
        "Current website and ad performance audit",
        "Defining key performance indicators (KPIs)"
      ]
    },
    {
      number: "02",
      title: "Build",
      subtitle: "Engineering your high-performance digital assets",
      description: "Once the strategy is locked in, we move into execution. We design and develop your website, landing pages, or advertising campaigns adhering to top-tier technical standards, fast loading speeds, and conversion-focused UX.",
      activities: [
        "Custom responsive website/landing page development",
        "Meta ad creative design and copywriting",
        "Tracking pixel and analytics installation",
        "Integration of lead capture and WhatsApp flows"
      ]
    },
    {
      number: "03",
      title: "Launch",
      subtitle: "Deploying your solution live with rigorous verification",
      description: "Before going live, we perform thorough quality assurance checks. We verify mobile responsiveness, test form submissions and tracking pixels, ensure domain settings are secure, and deploy your digital system to the world.",
      activities: [
        "Comprehensive mobile and desktop QA testing",
        "Form submission and notification routing tests",
        "Meta pixel and Conversions API verification",
        "Live domain deployment and SSL check"
      ]
    },
    {
      number: "04",
      title: "Optimize",
      subtitle: "Reviewing performance and refining for maximum return",
      description: "Digital growth is an ongoing process of refinement. We monitor live campaign data, user traffic patterns, and conversion metrics to continuously improve performance and scale what works.",
      activities: [
        "Continuous performance monitoring and analysis",
        "Ad creative and audience split testing",
        "Conversion rate optimization (CRO) adjustments",
        "Regular reporting and strategy reviews"
      ]
    }
  ];

  return (
    <div className="space-y-24 py-16">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          How We Work
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          A Proven 4-Step Framework for <span className="text-sky-400">Predictable Results</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          We take the guesswork out of digital growth with a structured, transparent process designed to take your project from initial concept to live execution.
        </p>
      </section>

      {/* Steps List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative overflow-hidden"
          >
            <span className="absolute top-4 right-6 text-6xl font-black text-slate-800/40 select-none">
              {step.number}
            </span>

            {/* Left Column: Number & Title */}
            <div className="md:col-span-1 space-y-3 relative z-10">
              <span className="text-sky-400 font-mono text-sm tracking-widest font-bold">STEP {step.number}</span>
              <h2 className="text-2xl font-bold text-white">{step.title}</h2>
              <p className="text-xs text-sky-300 font-medium">{step.subtitle}</p>
            </div>

            {/* Middle Column: Description & Activities */}
            <div className="md:col-span-2 space-y-6 relative z-10">
              <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
              
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Activities & Deliverables</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {step.activities.map((activity, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2 bg-slate-950/40 border border-slate-800/50 p-2.5 rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm sm:text-base">
          Request a free ad audit or contact our team to begin Step 1 of your digital growth journey.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/free-ad-audit" variant="primary">
            Get a Free Ad Audit
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
