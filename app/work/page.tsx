import Button from "@/components/Button";
import PortfolioCard from "@/components/PortfolioCard";
import SectionHeading from "@/components/SectionHeading";

export default function WorkPage() {
  const projects = [
    {
      businessType: "Real Estate Lead Generation",
      objective: "Capture high-net-worth buyer and seller inquiries from targeted digital traffic across North America.",
      solution: "Engineered a high-speed property valuation landing page paired with automated qualification forms and WhatsApp direct messaging links.",
      deliverables: [
        "Custom property valuation lead capture page",
        "Lightning-fast mobile responsive layout",
        "WhatsApp direct inquiry integration",
        "Meta ad traffic funnel structure"
      ]
    },
    {
      businessType: "Dental Clinic Digital Growth",
      objective: "Increase patient appointment bookings for cosmetic and general dental services in local regional markets.",
      solution: "Built a professional, trustworthy multi-page website optimized for local search visibility and seamless patient consultation bookings.",
      deliverables: [
        "Multi-page responsive clinic website",
        "Google Business Profile optimization setup",
        "Online consultation booking UI",
        "Direct phone and chat click-to-action routing"
      ]
    },
    {
      businessType: "Home Services Lead Generation",
      objective: "Generate inbound quote requests for premier roofing, plumbing, and home renovation contractors.",
      solution: "Developed a conversion-focused service website featuring clear pricing frameworks, service breakdowns, and friction-free quote request forms.",
      deliverables: [
        "Structured service directory layout",
        "Multi-step quote request form UI",
        "Trust-focused project display sections",
        "Mobile-first click-to-call implementation"
      ]
    },
    {
      businessType: "E-commerce Growth",
      objective: "Scale online sales and optimize conversion funnels for specialized consumer product brands across the USA, Canada, and UK.",
      solution: "Designed high-impact product launch pages and structured acquisition funnel architecture to turn ad traffic into repeat buyers.",
      deliverables: [
        "High-conversion product landing pages",
        "Ad creative layout and copywriting structure",
        "Checkout conversion flow optimization",
        "Analytics event tracking configuration"
      ]
    }
  ];

  return (
    <div className="space-y-24 py-16">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          Portfolio & Demonstrations
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Concept Projects & <span className="text-sky-400">Digital System Designs</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Explore our demonstration projects showcasing the high standards of design, speed, and conversion architecture we deploy for businesses.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              businessType={project.businessType}
              objective={project.objective}
              solution={project.solution}
              deliverables={project.deliverables}
            />
          ))}
        </div>
      </section>

      {/* Truthfulness Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-8 text-center space-y-3">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Our Commitment to Transparency</h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            All featured projects are clearly labeled as concept demonstrations. We do not publish fabricated statistics, fake revenue figures, or unverified client testimonials. Every system we build is custom-tailored to our clients real business objectives.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Want a Custom Digital System Built for Your Business?
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm sm:text-base">
          Request a free ad audit or contact our team to discuss your project requirements today.
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
