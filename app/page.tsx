import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import Link from "next/link";

export default function Home() {
  const servicesList = [
    {
      title: "Website Design & Development",
      description: "Fast, modern, high-converting websites built to represent your brand professionally and turn visitors into clients.",
      href: "/services",
    },
    {
      title: "Meta Ads Management",
      description: "Targeted Facebook and Instagram advertising campaigns managed to drive qualified leads and sales with measurable ROI.",
      href: "/services",
    },
    {
      title: "Lead Generation",
      description: "End-to-end digital acquisition systems designed to capture, track, and convert prospective clients consistently.",
      href: "/services",
    },
    {
      title: "WhatsApp Marketing & Conversion",
      description: "Streamline customer communication and close deals faster by integrating direct WhatsApp workflows into your sales funnel.",
      href: "/services",
    },
    {
      title: "Landing Pages",
      description: "High-impact, single-page funnels engineered specifically for ad traffic, product launches, and campaign conversions.",
      href: "/services",
    },
    {
      title: "SEO & Google Business Optimization",
      description: "Improve your local search visibility, rank higher on Google Maps, and attract organic customers in your service areas.",
      href: "/services",
    },
  ];

  const whyNiorMediaPoints = [
    {
      title: "Strategy Before Execution",
      description: "We analyze your business model, target audience, and market positioning before building anything, ensuring every dollar and hour invested has a clear purpose.",
    },
    {
      title: "Conversion-Focused Websites",
      description: "Our websites are not just digital brochures; they are engineered with deliberate UX and clear calls to action designed to maximize conversion rates.",
    },
    {
      title: "Data-Driven Advertising",
      description: "We manage ad campaigns based on real performance metrics, continuously optimizing targeting, ad creative, and bidding to lower acquisition costs.",
    },
    {
      title: "Clear Communication",
      description: "No agency jargon or hidden surprises. You get straightforward updates, transparent reporting, and direct access via email and WhatsApp.",
    },
    {
      title: "Practical Digital Solutions",
      description: "We focus on implementing reliable, high-impact digital systems that solve real business growth challenges without unnecessary complexity.",
    },
  ];

  const workSteps = [
    {
      step: "01",
      title: "Discover",
      description: "We review your current online presence, business objectives, and customer acquisition bottlenecks to define the right growth strategy.",
    },
    {
      step: "02",
      title: "Build",
      description: "We develop your high-converting website, landing pages, or advertising campaigns according to top-tier technical and design standards.",
    },
    {
      step: "03",
      title: "Launch",
      description: "We deploy your digital assets live, ensuring tracking pixels, forms, and domains are fully verified and functioning seamlessly.",
    },
    {
      step: "04",
      title: "Optimize",
      description: "We monitor ongoing campaign performance, user traffic, and conversion data to continuously refine results.",
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            Remote Digital Service Business
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Digital Systems Built to <span className="text-sky-400">Grow Your Business.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            NiorMedia builds websites, advertising campaigns and digital growth systems designed to help businesses attract and convert more customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/free-ad-audit" variant="primary" className="w-full sm:w-auto text-base">
              Get a Free Ad Audit
            </Button>
            <Button href="/work" variant="outline" className="w-full sm:w-auto text-base">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Core Services"
          subtitle="Specialized digital solutions engineered to get your business discovered, trusted, and chosen."
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{service.description}</p>
              </div>
              <Link href={service.href} className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1">
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="secondary">
            View All Services & Details
          </Button>
        </div>
      </section>

      {/* Why NiorMedia Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 sm:p-12">
        <SectionHeading
          title="Why NiorMedia"
          subtitle="We focus on fundamentals that drive actual business outcomes."
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyNiorMediaPoints.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="text-sky-400 font-bold text-sm tracking-widest uppercase">0{index + 1}</div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How We Work"
          subtitle="A clear, structured 4-step framework from initial discovery to active optimization."
          centered={true}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workSteps.map((item, index) => (
            <div key={index} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 relative">
              <span className="text-4xl font-extrabold text-slate-800/80 absolute top-4 right-4 select-none">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h3>
              <p className="text-sm text-slate-400 relative z-10 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/process" variant="outline">
            Explore Full Process
          </Button>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Concept Project Demonstrations"
          subtitle="Examples of digital systems we design and build for various business types."
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PortfolioCard
            businessType="Real Estate Lead Generation"
            objective="Capture high-intent home buyer and seller leads through dedicated landing pages and targeted traffic."
            solution="Engineered a lightning-fast property valuation funnel paired with Meta ad integration."
            deliverables={["High-converting lead capture page", "Automated email notification setup", "Meta ad creative templates"]}
          />
          <PortfolioCard
            businessType="Dental Clinic Digital Growth"
            objective="Increase patient appointment bookings and improve local map search visibility."
            solution="Built a clean, mobile-optimized booking website and optimized Google Business profile structure."
            deliverables={["Responsive clinic website", "Google Business Profile optimization", "WhatsApp direct consultation link"]}
          />
        </div>
        <div className="mt-10 text-center">
          <Button href="/work" variant="secondary">
            View All Concept Projects
          </Button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-10 sm:p-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Ready to Build Your Digital Growth System?
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
          Request a free ad audit or contact us directly to discuss how we can help your business get discovered and convert more customers online.
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
