'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export default function FreeAdAuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    platform: 'Meta Ads',
    monthlySpend: 'Under $1,000',
    primaryGoal: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SectionHeading
        title="Request Your Free Ad Audit"
        subtitle="Let our team review your current digital advertising setup, identify conversion leaks, and provide practical recommendations to improve your return on ad spend."
        centered={true}
      />

      {submitted ? (
        <div className="mt-12 bg-slate-900/80 border border-emerald-500/40 rounded-2xl p-10 text-center">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Audit Request Received!</h3>
          <p className="text-slate-300 max-w-md mx-auto mb-8">
            Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our team will review your website and ad setup and get back to you within 24–48 hours.
          </p>
          <Button href="/" variant="primary">
            Return to Homepage
          </Button>
        </div>
      ) : (
        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="john@yourbusiness.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Website URL *</label>
              <input
                type="text"
                required
                placeholder="https://yourbusiness.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Primary Ad Platform</label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="Meta Ads">Meta Ads (Facebook & Instagram)</option>
                  <option value="Google Ads">Google Ads</option>
                  <option value="Both">Both Meta & Google</option>
                  <option value="Not running ads yet">Not running ads yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Estimated Monthly Ad Spend</label>
                <select
                  value={formData.monthlySpend}
                  onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="Under $1,000">Under $1,000 / mo</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000 / mo</option>
                  <option value="$5,000 - $15,000">$5,000 - $15,000 / mo</option>
                  <option value="$15,000+">$15,000+ / mo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">What is your primary growth goal? *</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us what you want to achieve (e.g., lower cost per lead, get more online inquiries, scale e-commerce sales)..."
                value={formData.primaryGoal}
                onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg transition-colors shadow-lg shadow-sky-500/20 cursor-pointer"
            >
              Submit For Free Audit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
