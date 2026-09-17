'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export default function FreeAdAuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

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
        form.reset();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-[#090a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Request Your Free Ad Audit" 
          subtitle="Get a professional review of your current advertising and digital marketing setup. No fluff, just practical insights to help you attract and convert more customers."
          centered={true}
        />

        {submitted ? (
          <div className="bg-sky-950/40 border border-sky-800/60 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Audit Request Received!</h3>
            <p className="text-slate-300 mb-6">
              Thank you for reaching out. We have received your details and will review your information. We will get back to you shortly via email or WhatsApp.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="secondary">
              Submit Another Request
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {error && (
              <div className="bg-red-950/50 border border-red-800 text-red-300 p-4 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-2">Business Name *</label>
                <input 
                  type="text" 
                  id="businessName" 
                  name="businessName" 
                  required 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="Acme Growth"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="john@acmegrowth.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">WhatsApp / Phone *</label>
                <input 
                  type="text" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-300 mb-2">Website URL *</label>
                <input 
                  type="url" 
                  id="website" 
                  name="website" 
                  required 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-slate-300 mb-2">Business Type *</label>
                <input 
                  type="text" 
                  id="businessType" 
                  name="businessType" 
                  required 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="e.g., E-commerce, Local Service, SaaS"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-2">Country *</label>
                <select 
                  id="country" 
                  name="country" 
                  required 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="">Select country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">Current Monthly Ad Budget (Optional)</label>
                <select 
                  id="budget" 
                  name="budget" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="Not currently running ads">Not currently running ads</option>
                  <option value="Less than $1,000 / mo">Less than $1,000 / mo</option>
                  <option value="$1,000 - $5,000 / mo">$1,000 - $5,000 / mo</option>
                  <option value="$5,000 - $10,000 / mo">$5,000 - $10,000 / mo</option>
                  <option value="$10,000+ / mo">$10,000+ / mo</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="productSell" className="block text-sm font-medium text-slate-300 mb-2">What does your business sell? *</label>
              <textarea 
                id="productSell" 
                name="productSell" 
                rows={3} 
                required 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="Briefly describe your products or services..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="biggestChallenge" className="block text-sm font-medium text-slate-300 mb-2">What is your biggest marketing challenge? *</label>
              <textarea 
                id="biggestChallenge" 
                name="biggestChallenge" 
                rows={3} 
                required 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="e.g., High cost per acquisition, low website conversion rate..."
              ></textarea>
            </div>

            <div>
              <Button type="submit" variant="primary" className="w-full py-4 text-base">
                {loading ? 'Submitting Request...' : 'Request My Free Audit'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
