import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/visuals/ProjectShowcase";
import MetaAdsFunnel from "@/components/visuals/MetaAdsFunnel";
import WhatsAppFlow from "@/components/visuals/WhatsAppFlow";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-slate-950">
      <Header />

      <main className="flex-grow pt-28 pb-20">
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <span className="inline-block px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            System Demonstrations
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineered Concept Work
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            Explore our architectural blueprints and functional system designs built to demonstrate NiorMedia’s digital growth capabilities.
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400 text-xs font-mono">
            <span>⚠️ Concept Project — Demonstrations of system architecture, not previous client results.</span>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Project 1: Real Estate */}
          <div className="border-b border-slate-800/80 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Project 01 / Real Estate</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Real Estate Lead Generation System</h2>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
                  Tech: Next.js + Tailwind + Meta Ads Pipeline
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Engineered for high-value property listings, this system combines rapid listing pages with targeted Meta ad funnels and direct WhatsApp routing to qualify high-net-worth buyers instantly.
                </p>
                <div className="space-y-2 text-xs text-slate-400 font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Optimized mobile layout for fast property browsing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Automated budget and preference pre-qualification</span>
                  </div>
                </div>
              </div>
              <div>
                <MetaAdsFunnel />
              </div>
            </div>
          </div>

          {/* Project 2: Dental Clinic */}
          <div className="border-b border-slate-800/80 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Project 02 / Healthcare</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Dental Clinic Growth System</h2>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
                  Tech: React UI + Booking Schema + Instant Routing
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Designed to remove friction for patient appointment bookings. Features localized service display, trust-focused layout architecture, and immediate chat appointment confirmation.
                </p>
                <div className="space-y-2 text-xs text-slate-400 font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Frictionless appointment scheduling interface</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Google Business & local schema integration</span>
                  </div>
                </div>
              </div>
              <div>
                <WhatsAppFlow />
              </div>
            </div>
          </div>

          {/* Project 3: Home Services */}
          <div className="border-b border-slate-800/80 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Project 03 / Home Services</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Home Services Lead Generation System</h2>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
                  Tech: Instant Estimator UI + WhatsApp Routing
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Built for contractors and service providers requiring immediate quote requests. Features interactive scope estimators that convert visitor traffic into structured service inquiries.
                </p>
                <div className="space-y-2 text-xs text-slate-400 font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Interactive project scope selector</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Instant dispatch to provider WhatsApp inbox</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-6 shadow-xl text-xs font-mono">
                  <div className="text-white font-bold mb-3 flex items-center justify-between">
                    <span>Interactive Estimator Preview</span>
                    <span className="text-sky-400">Active</span>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                      <span>Service Type: Roofing Repair</span>
                      <span className="text-sky-400">Selected</span>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                      <span>Property Size: Standard Residential</span>
                      <span className="text-sky-400">Selected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4: E-commerce */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Project 04 / E-commerce</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">E-commerce Growth System</h2>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
                  Tech: Headless Storefront + Conversion Funnel
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Optimized storefront architecture designed for high conversion speed. Streamlines product discovery, cart checkout friction, and retargeting pixel integration.
                </p>
                <div className="space-y-2 text-xs text-slate-400 font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Sub-second page load speeds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Streamlined mobile checkout UX</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-6 shadow-xl text-xs font-mono">
                  <div className="text-white font-bold mb-3 flex items-center justify-between">
                    <span>Storefront Performance Architecture</span>
                    <span className="text-emerald-400">Optimized</span>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                      <span>Lighthouse Performance Score</span>
                      <span className="text-emerald-400 font-bold">98/100</span>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                      <span>Conversion Drop-off Reduction</span>
                      <span className="text-sky-400 font-bold">-35%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* CTA Banner */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Your Custom Digital System?</h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
              Let&apos;s engineer a high-performance web and traffic infrastructure tailored specifically for your business model.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors"
            >
              Request a System Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
