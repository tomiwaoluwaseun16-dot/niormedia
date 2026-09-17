import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export default function ProcessPage() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We analyze your business model, target audience, competitive landscape, and primary growth objectives to establish clear strategic alignment."
    },
    {
      num: "02",
      title: "Strategy",
      desc: "We formulate a structured roadmap covering website architecture, conversion pathways, and advertising frameworks tailored to your market."
    },
    {
      num: "03",
      title: "Build / Campaign Setup",
      desc: "We engineer high-performance websites, landing pages, or Meta ad campaigns with meticulous attention to detail and responsiveness."
    },
    {
      num: "04",
      title: "Launch",
      desc: "We deploy your digital solution live, verifying tracking pixels, form routing, mobile responsiveness, and system integrity."
    },
    {
      num: "05",
      title: "Optimization",
      desc: "We continuously monitor campaign performance data and user interaction metrics to refine what is working and improve conversion efficiency."
    },
    {
      num: "06",
      title: "Reporting",
      desc: "We provide transparent, straightforward progress reports focusing on real business outcomes without confusing marketing vanity metrics."
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeading
        title="Our Working Process"
        subtitle="A structured 6-step framework designed to eliminate guesswork and deliver reliable digital growth systems."
        centered={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {steps.map((step, index) => (
          <div key={index} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-4xl font-extrabold text-sky-400 font-mono mb-4">{step.num}</div>
            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center bg-slate-900/40 border border-slate-800 rounded-2xl p-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">Start your project with a clear plan</h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Request a free ad audit to see how our proven process applies to your business.
        </p>
        <Button href="/free-ad-audit" variant="primary">
          Get a Free Ad Audit
        </Button>
      </div>
    </div>
  );
}
