'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function FreeAdAuditPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mzezbere', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or reach out via email.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Request Your Free Ad Audit
        </h1>
        <p className="text-slate-400 text-lg">
          Complete the details below to receive a comprehensive performance review of your current advertising systems.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-slate-900 border border-sky-500/50 text-center space-y-4">
          <div className="w-12 h-12 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-white">Audit Request Received</h3>
          <p className="text-slate-300">
            Thank you. Your request has been securely transmitted to NiorMedia. We will review your details and contact you shortly.
          </p>
          <div className="pt-4">
            <Button href="/" variant="primary">
              Return Home
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-950/80 p-8 rounded-2xl border border-slate-800">
          {error && (
            <div className="p-4 bg-red-950/50 border border-red-800 text-red-200 text-sm rounded-lg">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name *</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="John Smith" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Business Name *</label>
              <input 
                type="text" 
                name="businessName" 
                required 
                placeholder="Your Business Name" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Business Email *</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="john@yourbusiness.com" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">WhatsApp / Phone *</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="+1 (555) 000-0000" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Website URL *</label>
              <input 
                type="url" 
                name="website" 
                required 
                placeholder="https://yourbusiness.com" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Country *</label>
              <select 
                name="country" 
                required 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm"
              >
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Business Type *</label>
              <input 
                type="text" 
                name="businessType" 
                required 
                placeholder="e.g. E-commerce, Real Estate, Home Services" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Current Monthly Advertising Budget</label>
              <select 
                name="monthlyBudget" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm"
              >
                <option value="Not currently running ads">Not currently running ads</option>
                <option value="Under $1,000 / mo">Under $1,000 / mo</option>
                <option value="$1,000 - $5,000 / mo">$1,000 - $5,000 / mo</option>
                <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                <option value="$15,000+ / mo">$15,000+ / mo</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">What does your business sell? *</label>
            <input 
              type="text" 
              name="whatYouSell" 
              required 
              placeholder="Briefly describe your core products or services" 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">What is your biggest marketing challenge? *</label>
            <textarea 
              name="biggestChallenge" 
              rows={4} 
              required 
              placeholder="Tell us what you want to achieve (e.g., lower cost per lead, get more online inquiries, scale e-commerce sales)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 text-sm resize-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full py-4 text-base font-semibold justify-center"
            >
              {submitting ? 'Submitting Request...' : 'Request My Free Audit'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
