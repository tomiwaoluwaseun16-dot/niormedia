import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';

export default function AboutPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeading
        title="About NiorMedia"
        subtitle="A specialized remote digital service business focused on modern websites, advertising systems, lead generation, and digital growth infrastructure."
        centered={true}
      />

      <div className="space-y-12 mt-12">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            NiorMedia is an independent, remote digital service business built to help businesses in the United States, Canada, and the United Kingdom get discovered, attract high-intent customers, and convert their online traffic into real business outcomes.
          </p>
          <p className="text-slate-300 leading-relaxed">
            We reject bloated tech stacks, confusing marketing jargon, and fabricated claims. Instead, we focus on engineering clean, reliable digital systems that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">Our Core Focus</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Website Design & Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Meta Ads Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Lead Generation Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                WhatsApp Marketing & Conversion
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Conversion Landing Pages
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                SEO & Google Business Optimization
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">How We Operate</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Operating fully remotely allows us to collaborate efficiently with businesses across North America and the UK, delivering high-performance work without unnecessary overhead.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              We maintain transparent communication, disciplined execution, and a strict commitment to honesty in every project we take on.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center bg-slate-900/40 border border-slate-800 rounded-2xl p-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">Let’s discuss your growth objectives</h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Get in touch or request a free ad audit to see how we can help your business attract and convert more customers.
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
