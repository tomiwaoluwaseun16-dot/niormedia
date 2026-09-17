import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Website Design & Development",
      description: "Fast, modern, high-converting websites engineered to represent your brand professionally and convert casual visitors into paying customers.",
      whatWeDo: [
        "Custom, responsive web design tailored to your brand",
        "Lightning-fast performance optimization for mobile and desktop",
        "Clean semantic code structure with built-in SEO foundations",
        "Secure hosting setup and custom domain connection"
      ],
      whoItsFor: "Established businesses and service providers looking to upgrade an outdated website or launch a high-performing digital storefront.",
      deliverables: [
        "Fully responsive multi-page website",
        "Mobile-optimized navigation and touch-friendly layouts",
        "Contact form and lead capture integration",
        "SSL security and basic on-page SEO setup"
      ]
    },
    {
      number: "02",
      title: "Meta Ads Management",
      description: "Targeted Facebook and Instagram advertising campaigns managed strategically to drive qualified leads and sales with measurable return on ad spend.",
      whatWeDo: [
        "Audience research and custom targeting setup",
        "Ad creative direction and conversion copywriting",
        "Campaign structure, budgeting, and bid management",
        "Continuous performance monitoring and split testing"
      ],
      whoItsFor: "Businesses wanting a predictable, scalable stream of prospective clients or e-commerce buyers from social media platforms.",
      deliverables: [
        "Meta Pixel and Conversions API setup & verification",
        "Custom campaign structure (Prospecting & Retargeting)",
        "Ad creative concepts and copywriting frameworks",
        "Bi-weekly performance and ROI reporting"
      ]
    },
    {
      number: "03",
      title: "Lead Generation",
      description: "End-to-end digital acquisition systems designed to capture, track, and route prospective client inquiries into your sales pipeline consistently.",
      whatWeDo: [
        "Funnels designed specifically to capture high-intent contact details",
        "Lead magnet and qualification form engineering",
        "CRM and notification routing setup",
        "Conversion rate optimization across the acquisition journey"
      ],
      whoItsFor: "B2B companies, local service providers, and consultants who rely on booked calls and client inquiries to grow revenue.",
      deliverables: [
        "Dedicated lead capture funnels",
        "Instant email/WhatsApp lead notification workflows",
        "Lead tracking and data verification setup",
        "Conversion optimization recommendations"
      ]
    },
    {
      number: "04",
      title: "WhatsApp Marketing & Conversion",
      description: "Streamline customer communication and close high-value deals faster by integrating direct, frictionless WhatsApp messaging workflows into your sales funnel.",
      whatWeDo: [
        "Click-to-WhatsApp ad funnel integration",
        "Pre-filled messaging templates for incoming inquiries",
        "Business WhatsApp catalog and automated greeting setup",
        "Sales conversation flow optimization"
      ],
      whoItsFor: "Service businesses and high-ticket sellers operating in regions where customers prefer instant, direct chat communication over traditional contact forms.",
      deliverables: [
        "Optimized WhatsApp Business link integration across site",
        "Custom pre-filled inquiry message templates",
        "Click-to-WhatsApp campaign funnel setup guidance",
        "Response workflow structuring"
      ]
    },
    {
      number: "05",
      title: "Landing Pages",
      description: "High-impact, single-page digital funnels engineered specifically for paid ad traffic, product launches, and maximum conversion rates.",
      whatWeDo: [
        "Distraction-free layout focused entirely on a single offer",
        "Compelling value proposition and headline hierarchy",
        "Fast loading speeds to reduce ad traffic bounce rates",
        "Seamless call-to-action integration"
      ],
      whoItsFor: "Advertisers running targeted campaigns who need dedicated destination pages that convert traffic significantly better than standard website homepages.",
      deliverables: [
        "High-performance responsive landing page",
        "Optimized hero section and conversion layout",
        "Integrated contact or booking form",
        "Analytics event tracking configuration"
      ]
    },
    {
      number: "06",
      title: "SEO & Google Business Optimization",
      description: "Improve your local search visibility, rank higher on Google Maps, and attract organic, high-intent customers searching for your services.",
      whatWeDo: [
        "Google Business Profile setup, verification, and optimization",
        "Local keyword research and on-page metadata tuning",
        "Technical site speed and indexing audits",
        "Local citation consistency checks"
      ],
      whoItsFor: "Local service businesses, contractors, and regional companies that depend on nearby customers finding them via Google search.",
      deliverables: [
        "Fully optimized Google Business Profile",
        "Local keyword implementation across website pages",
        "Technical SEO audit and fix recommendations",
        "Local search visibility guidelines"
      ]
    }
  ];

  return (
    <div className="space-y-24 py-16">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          V1 Services Directory
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Specialized Digital Services for <span className="text-sky-400">Growth-Focused Businesses</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          We provide six core digital services designed to help you get discovered, attract qualified prospects, and convert traffic into revenue.
        </p>
      </section>

      {/* Detailed Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {/* Left Column: Title & Overview */}
            <div className="lg:col-span-1 space-y-4">
              <span className="text-4xl font-extrabold text-sky-400/40">{service.number}</span>
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              <div className="pt-2">
                <Button href="/free-ad-audit" variant="primary" className="text-xs px-4 py-2">
                  Request Service Consultation
                </Button>
              </div>
            </div>

            {/* Middle Column: What We Do & Who It's For */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">What NiorMedia Does</h3>
                <ul className="space-y-2">
                  {service.whatWeDo.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Who It Can Help</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.whoItsFor}</p>
              </div>
            </div>

            {/* Right Column: Typical Deliverables */}
            <div className="lg:col-span-1 bg-slate-950/60 border border-slate-800/60 rounded-xl p-6 space-y-4">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Typical Deliverables</h3>
              <ul className="space-y-3">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                    <svg className="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Not Sure Which Service Your Business Needs?
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm sm:text-base">
          Request a free ad audit and we will review your current online presence and recommend the most effective growth strategy.
        </p>
        <Button href="/free-ad-audit" variant="primary">
          Get a Free Ad Audit
        </Button>
      </section>
    </div>
  );
}
