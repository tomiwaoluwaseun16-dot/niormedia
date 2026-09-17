import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import PortfolioCard from '@/components/PortfolioCard';

export default function Home() {
  const services = [
    {
      title: "Website Design & Development",
      description: "High-performance, modern websites engineered to look exceptional and convert visitors into qualified leads."
    },
    {
      title: "Meta Ads Management",
      description: "Data-driven advertising campaigns across Facebook and Instagram tailored to drive profitable customer acquisition."
    },
    {
      title: "Lead Generation",
      description: "Systematic acquisition funnels designed to deliver consistent, high-intent prospective clients directly to your business."
    },
    {
      title: "WhatsApp Marketing & Conversion",
      description: "Direct conversational sales channels that build instant rapport and close high-value deals efficiently."
    },
    {
      title: "Landing Pages",
      description: "Laser-focused, lightning-fast conversion pages optimized specifically for paid advertising and campaign traffic."
    },
    {
      title: "SEO & Google Business Optimization",
      description: "Establish dominant local and organic search presence so high-intent buyers discover your brand first."
    }
  ];

  const whyNiorMedia = [
    {
      title: "Strategy before execution",
      desc: "We analyze your market, audience, and unit economics before writing a single line of code or launching an ad."
    },
    {
      title: "Conversion-focused websites",
      desc: "Every layout is built to guide user attention smoothly toward high-value business actions and inquiries."
    },
    {
      title: "Data-driven advertising",
      desc: "Campaign management rooted in real performance metrics, rigorous testing, and continuous budget optimization."
    },
    {
      title: "Clear communication",
      desc: "No confusing technical jargon or misleading metrics—just transparent updates and reliable execution."
    },
    {
      title: "Practical digital solutions",
      desc: "Robust digital infrastructure designed to solve real business bottlenecks and compound growth over time."
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand your business model, target audience, and primary growth objectives."
    },
    {
      num: "02",
      title: "Build",
      desc: "Create the website, landing page, or targeted advertising system with meticulous precision."
    },
    {
      num: "03",
      title: "Launch",
      desc: "Deploy the digital solution live with full tracking, responsive checks, and system integrity."
    },
    {
      num: "04",
      title: "Optimize",
      desc: "Review live performance data and systematically refine what is working to scale results."
    }
  ];

  const portfolioProjects = [
    {
      businessType: "Real Estate Lead Generation",
      objective: "Capture and pre-qualify high-net-worth home buyers in competitive urban markets.",
      solution: "Engineered a high-speed conversion funnel paired with targeted Meta ad sequences.",
      deliverables: ["Custom Conversion Landing Page", "Meta Ad Creative & Copy Setup", "Automated Lead Routing System"]
    },
    {
      businessType: "Dental Clinic Digital Growth",
      objective: "Increase monthly bookings for high-value cosmetic and restorative dental procedures.",
      solution: "Rebuilt the practice's digital presence and optimized local search visibility.",
      deliverables: ["Modern Responsive Website", "Google Business Profile Optimization", "Streamlined Appointment Booking Flow"]
    },
    {
      businessType: "Home Services Lead Generation",
      objective: "Generate consistent emergency service inquiries for regional contractors.",
      solution: "Designed an ultra-fast mobile-first landing experience with instant click-to-call mechanics.",
      deliverables: ["Mobile-Optimized Landing Page", "WhatsApp Direct Inquiry Integration", "Local Ad Campaign Structure"]
    },
    {
      businessType: "E-commerce Growth",
      objective: "Improve online store conversion rates and scale customer acquisition profitability.",
      solution: "Optimized storefront UX architecture and implemented structured retargeting campaigns.",
      deliverables: ["UX/UI Storefront Audit & Refinement", "Meta Catalog Ad Setup", "Conversion Tracking Architecture"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#090a0f] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              Remote Digital Growth Agency • US • CA • UK
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Digital Systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white">
                Built to Grow
              </span> <br />
              Your Business.
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              NiorMedia builds websites, advertising campaigns and digital growth systems designed to help businesses attract and convert more customers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button href="/free-ad-audit" variant="primary" className="w-full sm:w-auto text-base px-8 py-4">
                Get a Free Ad Audit
              </Button>
              <Button href="/work" variant="outline" className="w-full sm:w-auto text-base px-8 py-4">
                View Our Work
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-slate-800/80 shadow-2xl backdrop-blur-xl">
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-sky-500 text-slate-950 text-xs font-bold rounded-full uppercase tracking-wider">
                V1 Ready
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Core Capabilities</h3>
              <p className="text-sm text-slate-400 mb-6">Engineered for businesses seeking predictable digital expansion.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300 p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  High-Conversion Web Systems
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300 p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  Meta Advertising Management
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300 p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  Lead Generation & Funnels
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          title="Core Digital Services"
          subtitle="Specialized digital infrastructure designed to attract traffic, engage prospects, and maximize customer conversion."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 font-bold mb-6 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>
              <div className="pt-4 border-t border-slate-900 flex items-center text-xs font-semibold text-sky-400 group-hover:text-sky-300">
                Explore service details →
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary">
            View All Service Details
          </Button>
        </div>
      </section>

      {/* 3. WHY NIORMEDIA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Why NiorMedia
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Our approach is built on disciplined engineering, honest communication, and measurable commercial alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyNiorMedia.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-950/80 border border-slate-800/80 flex flex-col justify-between ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div>
                <div className="text-sky-400 font-mono text-xs font-bold mb-4">PRINCIPLE 0{index + 1}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW WE WORK SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          title="How We Work"
          subtitle="A clear, structured 4-step framework designed to take your digital growth initiatives from concept to live optimization."
          centered={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {processSteps.map((step, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-950/40 border border-slate-800/80 relative">
              <div className="text-5xl font-extrabold text-sky-500/20 mb-6 font-mono">{step.num}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/process" variant="outline">
            Read Full Process Breakdown
          </Button>
        </div>
      </section>

      {/* 5. PORTFOLIO PREVIEW SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          title="Featured Concept Projects"
          subtitle="Demonstration projects illustrating our technical capabilities across major industries in the US, Canada, and UK."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard
              key={index}
              businessType={project.businessType}
              objective={project.objective}
              solution={project.solution}
              deliverables={project.deliverables}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/work" variant="secondary">
            View All Concept Projects
          </Button>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center">
        <div className="p-12 sm:p-16 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#090a0f] border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-sky-500/5 blur-3xl pointer-events-none"></div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 relative z-10">
            Ready to Build Your Digital Growth System?
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
            Request your free ad audit today and discover how NiorMedia can help your business attract and convert more qualified customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button href="/free-ad-audit" variant="primary" className="text-base px-8 py-4">
              Get a Free Ad Audit
            </Button>
            <Button href="/contact" variant="outline" className="text-base px-8 py-4">
              Contact NiorMedia
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
