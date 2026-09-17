import SectionHeading from '@/components/SectionHeading';
import PortfolioCard from '@/components/PortfolioCard';
import Button from '@/components/Button';

export default function WorkPage() {
  const projects = [
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
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="Featured Concept Projects"
        subtitle="Demonstration projects illustrating our technical capabilities and strategic execution across major industries in the US, Canada, and UK."
        centered={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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

      <div className="mt-20 text-center bg-slate-900/40 border border-slate-800 rounded-2xl p-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to build your custom digital system?</h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Let’s discuss how we can engineer a high-performance website or advertising system tailored to your business goals.
        </p>
        <Button href="/free-ad-audit" variant="primary">
          Get a Free Ad Audit
        </Button>
      </div>
    </div>
  );
}
