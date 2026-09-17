'use client';

import { useState } from 'react';
import Button from "@/components/Button";

export default function FreeAdAuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was a problem submitting your request. Please try again or reach out via WhatsApp.');
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4">
        <div className="inline-block bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-full">
          No-Obligation Review
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Request Your <span className="text-sky-400">Free Ad Audit</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Let our team review your current Meta ad campaigns, landing page setup, or customer acquisition funnel and provide actionable feedback.
        </p>
      </div>

      {submitted ? (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-10 text-center space-y-6">
          <div className="w-16 h-16 bg-sky-500/10 border border-sky-500/30 text-sky-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Audit Request Received!</h2>
            <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
              Thank you for reaching out. Our team will review your submission and get back to you within 24–48 hours with your custom insights.
            </p>
          </div>
          <div className="pt-4">
            <Button href="/" variant="primary">
              Return Home
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 sm:p-10">
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
                  placeholder="e.g. Sarah Jenkins"
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
                  placeholder="sarah@yourbusiness.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="business" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  placeholder="e.g. Apex Roofing & Renovation"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Website URL *
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  required
                  placeholder="https://yourbusiness.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="challenge" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                What is your biggest current advertising or lead generation challenge? *
              </label>
              <textarea
                id="challenge"
                name="challenge"
                rows={4}
                required
                placeholder="Tell us about your current ad spend, traffic quality, or lead conversion bottlenecks..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold py-3.5 px-6 rounded-lg transition-colors text-sm tracking-wide disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Submitting Request...' : 'Request Free Ad Audit'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
