export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Privacy Policy</h1>
        <p className="text-sm text-slate-400">Last updated: September 17, 2026</p>
      </div>

      <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Introduction</h2>
          <p>
            NiorMedia (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as a remote digital service business providing website development, advertising, and digital growth systems. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at niormedia.online or contact us for services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
          <p>
            When you submit an inquiry, request a free ad audit, or communicate with us via email or WhatsApp, we may collect personal information including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Your name and business name</li>
            <li>Email address and telephone/WhatsApp number</li>
            <li>Website URL and business details</li>
            <li>Information regarding your marketing challenges and advertising budget</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. How We Use Your Information</h2>
          <p>
            We use the information we collect solely to respond to your inquiries, deliver requested consultations and ad audits, communicate regarding active projects, and improve our services. We do not sell or rent your personal information to third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Cookies and Analytics</h2>
          <p>
            Our website may use standard analytics tools (such as Google Analytics) to understand site traffic and user interaction, helping us improve visitor experience and service delivery.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">5. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, you can reach us at{' '}
            <a href="mailto:hello@niormedia.online" className="text-sky-400 hover:underline">hello@niormedia.online</a> or via WhatsApp at <a href="https://wa.me/18259276543" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">+1 825 927 6543</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
