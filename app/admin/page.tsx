import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import AdminNav from './components/AdminNav';

export default async function AdminOverviewPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('nior_admin_auth');

  if (!authCookie || authCookie.value !== 'true') {
    redirect('/admin/login');
  }

  const modules = [
    { title: "Lead Research", count: "0 records", href: "/admin/research", desc: "Target discovery & scraping pipelines" },
    { title: "Prospects Pipeline", count: "0 active", href: "/admin/prospects", desc: "Manage business leads & stages" },
    { title: "Ad Intelligence", count: "0 tracked", href: "/admin/advertising", desc: "Competitor ad creatives & spend" },
    { title: "Opportunities", count: "0 flagged", href: "/admin/opportunities", desc: "Digital gap & audit analysis" },
    { title: "Verification", count: "0 verified", href: "/admin/verification", desc: "Email & contact validation" },
    { title: "Outreach Hub", count: "0 sent", href: "/admin/outreach", desc: "Multi-channel messaging CRM" },
    { title: "Analytics", count: "0% rate", href: "/admin/analytics", desc: "Conversion & pipeline metrics" },
    { title: "Settings", config: "Secure", href: "/admin/settings", desc: "API keys & system parameters" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <AdminNav />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Command Center Overview</h1>
            <p className="text-sm text-slate-400 mt-1">
              Nior Media system operations, lead flow status, and workspace modules.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>System Operational • 0 Active DB Records</span>
          </div>
        </div>

        {/* Core Metrics Grid (True Zero) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Total Prospects</span>
            <div className="text-3xl font-bold text-white font-mono">0</div>
            <p className="text-[11px] text-slate-500">No database records loaded</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Active Campaigns</span>
            <div className="text-3xl font-bold text-white font-mono">0</div>
            <p className="text-[11px] text-slate-500">Outreach engines on standby</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Verified Leads</span>
            <div className="text-3xl font-bold text-white font-mono">0</div>
            <p className="text-[11px] text-slate-500">Validation checks pending</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Conversion Rate</span>
            <div className="text-3xl font-bold text-white font-mono">0.0%</div>
            <p className="text-[11px] text-slate-500">Awaiting traffic data</p>
          </div>
        </div>

        {/* Quick Access Module Cards */}
        <div className="space-y-4 pt-2">
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Workspace Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod, idx) => (
              <Link 
                key={idx}
                href={mod.href}
                className="bg-slate-900/40 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl p-5 space-y-3 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {mod.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {mod.count || mod.config}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {mod.desc}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-sky-400 flex items-center space-x-1 pt-2">
                  <span>Access Module</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
