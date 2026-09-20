import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminNav from '../components/AdminNav';

export default async function AdminModulePage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('nior_admin_auth');

  if (!authCookie || authCookie.value !== 'true') {
    redirect('/admin/login');
  }

  const titleMap: Record<string, { title: string, desc: string, badge: string }> = {
    research: { title: "Lead Research Engine", desc: "Target business discovery, scraping pipelines, and initial validation feeds.", badge: "Discovery Pipeline" },
    advertising: { title: "Ad Intelligence & Meta Library", desc: "Monitor competitor creatives, active ad spend patterns, and regional scaling.", badge: "Ad Intelligence" },
    opportunities: { title: "Opportunity Qualification", desc: "Analyze business digital gaps, conversion bottlenecks, and audit readiness.", badge: "Audit & Analysis" },
    verification: { title: "Contact & Data Verification", desc: "Validate email deliverability, phone numbers, and decision-maker direct lines.", badge: "Data Hygiene" },
    outreach: { title: "Multi-Channel Outreach Hub", desc: "Manage automated email sequences, WhatsApp follow-ups, and direct messaging.", badge: "Outreach CRM" },
    analytics: { title: "Command Center Analytics", desc: "Track conversion rates, pipeline velocity, reply ratios, and system performance.", badge: "Metrics & Reporting" },
    settings: { title: "System Settings & Configurations", desc: "Manage API keys, environment parameters, team permissions, and workspace preferences.", badge: "Core Config" }
  };

  const current = titleMap["verification"] || { title: "Admin Module", desc: "Workspace section.", badge: "System" };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <AdminNav />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">{current.title}</h1>
            <p className="text-sm text-slate-400 mt-1">{current.desc}</p>
          </div>
          <span className="text-xs uppercase tracking-wider font-semibold text-sky-400 bg-sky-950/50 px-3 py-1 rounded border border-sky-800/50 self-start sm:self-auto">
            {current.badge}
          </span>
        </div>

        {/* Zero-State Container */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
          <div className="w-12 h-12 bg-slate-900 border border-slate-800 text-sky-400 rounded-xl flex items-center justify-center mx-auto text-lg font-bold shadow-inner">
            ⚡
          </div>
          <div className="space-y-1 max-w-sm mx-auto">
            <h2 className="text-base font-semibold text-white">No active records in this module</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              This workspace is fully structured and awaiting data integration from upcoming functional phases.
            </p>
          </div>
          <div className="pt-2">
            <span className="inline-block text-[11px] font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
              Status: Standby / 0 items recorded
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
