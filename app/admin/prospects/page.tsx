import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminNav from '../components/AdminNav';

export default async function ProspectsPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('nior_admin_auth');

  if (!authCookie || authCookie.value !== 'true') {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <AdminNav />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-6">
        {/* Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Prospects Pipeline</h1>
            <p className="text-sm text-slate-400 mt-1">
              Manage target businesses, communication stages, and prospect details.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              disabled
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded-lg cursor-not-allowed opacity-60"
            >
              + Add Prospect (Engine Pending)
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center space-x-2 text-xs font-medium">
            <span className="bg-sky-500 text-slate-950 px-3 py-1.5 rounded-lg font-semibold">All (0)</span>
            <span className="text-slate-400 hover:text-white px-3 py-1.5 rounded-lg cursor-pointer">Uncontacted (0)</span>
            <span className="text-slate-400 hover:text-white px-3 py-1.5 rounded-lg cursor-pointer">Contacted (0)</span>
            <span className="text-slate-400 hover:text-white px-3 py-1.5 rounded-lg cursor-pointer">Replied (0)</span>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Database: Standby
          </div>
        </div>

        {/* Empty State Table Container */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/90 text-slate-400 uppercase font-mono tracking-wider border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Business Name</th>
                  <th className="px-6 py-4">Niche</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center text-slate-500">
                    <div className="max-w-xs mx-auto space-y-2">
                      <div className="text-xl">📁</div>
                      <p className="font-medium text-slate-400">No prospects recorded yet.</p>
                      <p className="text-[11px] text-slate-600">Prospects imported or researched will appear here in future phases.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
