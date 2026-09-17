export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Terms of Service</h1>
        <p className="text-sm text-slate-400">Last updated: September 17, 2026</p>
      </div>

      <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using the NiorMedia website (niormedia.online) and engaging our remote digital services, you agree to comply with and be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Services</h2>
          <p>
            NiorMedia provides digital services including website design and development, Meta ads management, lead generation, WhatsApp marketing integration, landing pages, and SEO/Google Business optimization as outlined on our website. Project scope, timelines, and deliverables are established via mutual agreement prior to project commencement.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Client Responsibilities</h2>
          <p>
            To ensure timely project execution, clients agree to provide necessary access, feedback, branding assets, and information in a professional and timely manner.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Limitation of Liability</h2>
          <p>
            NiorMedia provides professional digital marketing and development services based on industry best practices. While we implement strategies designed to maximize traffic and conversions, we do not guarantee specific revenue outcomes, sales figures, or exact advertising returns due to varying market conditions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">5. Contact Information</h2>
          <p>
            For any questions concerning these Terms, please contact us at{' '}
            <a href="mailto:hello@niormedia.online" className="text-sky-400 hover:underline">hello@niormedia.online</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
