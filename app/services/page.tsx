import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';

export default function ServicesPage() {
  const servicesList = [
    {
      title: '1. Website Design & Development',
      whatItIs: 'Modern, high-performance websites built to establish professional credibility and serve as the core hub for your digital presence.',
      whatWeDo: 'We design and code clean, responsive, conversion-focused websites using modern architectures like Next.js and Tailwind CSS, ensuring fast loading speeds and flawless mobile experience.',
      whoItCanHelp: 'Growing businesses, professional service providers, and brands in the US, Canada, and the UK looking to upgrade an outdated site or launch a new digital presence.',
      deliverables: [
        'Custom Responsive Website Design',
        'Mobile & Tablet Optimization',
        'Speed & Performance Tuning',
        'Semantic SEO Structure',
        'Secure Contact & Inquiry Forms',
      ],
    },
    {
      title: '2. Meta Ads Management',
      whatItIs: 'Targeted paid advertising campaigns on Facebook and Instagram structured to capture attention and acquire prospective buyers.',
      whatWeDo: 'We build, structure, and manage Meta ad campaigns with disciplined budget allocation, precise audience targeting, and continuous creative testing.',
      whoItCanHelp: 'Businesses aiming to scale customer acquisition, increase online inquiries, or drive steady traffic from social platforms.',
      deliverables: [
        'Campaign Strategy & Setup',
        'Audience Targeting & Segmentation',
        'Ad Creative Guidance & Structure',
        'Performance Monitoring & Optimization',
        'Transparent Reporting Metrics',
      ],
    },
    {
      title: '3. Lead Generation',
      whatItIs: 'Systematic inbound pipelines designed to connect your business with active, high-intent prospects looking for your services.',
      whatWeDo: 'We integrate structured landing pages, clear calls to action, and streamlined lead capture forms to filter and capture qualified inquiries.',
      whoItCanHelp: 'Service companies, contractors, clinics, and professional practices relying on consistent client inquiries to grow.',
      deliverables: [
        'Lead Capture Funnel Architecture',
        'Conversion-Optimized Form Layouts',
        'Inquiry Routing Setup',
        'Tracking & Conversion Verification',
      ],
    },
    {
      title: '4. WhatsApp Marketing & Conversion',
      whatItIs: 'Streamlined chat-based communication channels that facilitate direct engagement and shorten sales cycles.',
      whatWeDo: 'We integrate direct WhatsApp messaging touchpoints into your website and ads, making it frictionless for interested prospects to start a conversation with your team.',
      whoItCanHelp: 'Businesses that close deals, answer inquiries, or provide consultations most effectively through direct, real-time messaging.',
      deliverables: [
        'Direct WhatsApp Click-to-Chat Integration',
        'Pre-filled Message Templates for Inquiries',
        'Mobile Conversion Flow Optimization',
      ],
    },
    {
      title: '5. Landing Pages',
      whatItIs: 'High-focus single-page web properties engineered specifically to convert ad traffic or promote specific service offerings.',
      whatWeDo: 'We build dedicated landing pages stripped of distractions, focusing entirely on a single clear message and a prominent call to action.',
      whoItCanHelp: 'Companies running ad campaigns who want to maximize conversion rates rather than sending paid traffic to a general homepage.',
      deliverables: [
        'High-Impact Single-Page Layout',
        'Compelling Value Proposition Structure',
        'Fast-Loading Static Architecture',
        'Optimized Call-to-Action Placements',
      ],
    },
    {
      title: '6. SEO / Google Business Optimization',
      whatItIs: 'Foundational search visibility practices to ensure your business gets discovered by local and organic search intent.',
      whatWeDo: 'We optimize technical site structure, metadata, semantic headings, and local business profiles to improve discoverability on search engines.',
      whoItCanHelp: 'Local and remote businesses wanting to capture organic search traffic from customers in the US, Canada, and the UK.',
      deliverables: [
        'Technical On-Page SEO Audit & Setup',
        'Meta Title & Description Optimization',
        'Google Business Profile Best Practices',
        'Semantic Heading Hierarchy',
      ],
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="Our Core Digital Services"
        subtitle="Specialized capabilities designed to help businesses get discovered, attract customers, and convert traffic."
        centered={true}
      />

      <div className="space-y-12 max-w-4xl mx-auto mt-12">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-all"
          >
            <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-800">
              {service.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">What it is</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{service.whatItIs}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">What NiorMedia does</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{service.whatWeDo}</p>
              </div>
            </div>

            <div className="mb-6 bg-slate-950/40 p-4 rounded-lg border border-slate-800/60">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Who it can help</h3>
              <p className="text-sm text-slate-300">{service.whoItCanHelp}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Typical Deliverables</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center bg-slate-900/40 border border-slate-800 rounded-2xl p-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">Not sure which service your business needs first?</h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Request a free ad audit and let our team review your current digital setup to recommend the most practical growth path.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/free-ad-audit" variant="primary">
            Get a Free Ad Audit
          </Button>
          <Button href="/contact" variant="outline">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
}
