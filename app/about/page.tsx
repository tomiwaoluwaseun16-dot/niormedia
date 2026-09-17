import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  const values = [
    {
      title: "Practical Execution",
      description: "We focus on what actually works. No bloated tech stacks, unnecessary complexity, or vanity metrics—just robust digital systems engineered for business growth."
    },
    {
      title: "Transparent Communication",
      description: "No corporate jargon or confusion. You get clear updates, straightforward timelines, and direct access to your strategist at every stage."
    },
    {
      title: "Conversion-First Mindset",
      description: "Every website, landing page, and ad campaign we build is intentionally structured to guide visitors toward taking meaningful action."
    },
    {
      title: "Reliable Remote Partnership",
      description: "Operating seamlessly across the US, Canada, and the UK, we provide responsive, high-standard digital execution tailored to modern business needs."
    }
  ];

  return (
    <div className="space-y-24 py-16">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          About NiorMedia
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Building Digital Systems That <span className="text-sky-400">Drive Real Growth</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          NiorMedia is a specialized remote digital service business helping companies across the US, Canada, and the UK establish credibility, attract qualified traffic, and convert customers.
        </p>
      </section>

      {/* Story / Approach Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl font-bold text-white">Our Mission & Approach</h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              In today's digital economy, having a basic online presence isn't enough. Businesses need structured, high-performance systems that actively attract attention, build trust, and turn prospects into paying clients.
            </p>
            <p>
              At NiorMedia, we bridge the gap between technical web development and disciplined digital advertising. Whether you need a lightning-fast responsive website, targeted Meta ad campaigns, or a streamlined lead generation funnel, our focus remains fixed on practical execution and measurable business outcomes.
            </p>
            <p>
              We operate as a remote digital partner, collaborating with businesses internationally to deliver reliable, high-standard solutions without the overhead of traditional agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Stand For"
          subtitle="The guiding principles behind every project we build."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {values.map((value, index) => (
            <div key={index} className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-8">
              <span className="text-sky-400 font-mono text-sm mb-3 block">0{index + 1}.</span>
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Let’s Build Something Great Together
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm sm:text-base">
          Request a free ad audit or contact our team to discuss your digital growth objectives.
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
