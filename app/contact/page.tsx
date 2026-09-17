'use client';

import { useState } from 'react';
import Button from "@/components/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mzezbere', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was a problem sending your message. Please try again or email us directly.');
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4">
        <div className="inline-block bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-full">
          Get in Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Contact <span className="text-sky-400">NiorMedia</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind, a question about our services, or want to discuss your digital growth? Reach out to our team today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="md:col-span-1 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-8">
          <div>
            <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">Direct Email</h2>
            <a href="mailto:hello@niormedia.online" className="text-white font-medium hover:text-sky-400 transition-colors text-sm">
              hello@niormedia.online
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">Operations</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Remote digital operations partnering with businesses across the US, Canada, and the UK.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">Response Time</h2>
            <p className="text-sm text-slate-300">
              We typically respond within 24 hours on business days.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-2 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 sm:p-10">
          {submitted ? (
            <div className="text-center space-y-6 py-8">
              <div className="w-16 h-16 bg-sky-500/10 border border-sky-500/30 text-sky-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Message Sent Successfully!</h2>
                <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for contacting NiorMedia. We have received your message and will get back to you shortly.
                </p>
              </div>
              <div className="pt-4">
                <Button href="/" variant="primary">
                  Return Home
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. David Miller"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="david@business.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Subject / Service Inquiry *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="e.g. Website Design & Development Inquiry"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold py-3.5 px-6 rounded-lg transition-colors text-sm tracking-wide disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
