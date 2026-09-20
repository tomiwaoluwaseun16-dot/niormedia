'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Overview', href: '/admin' },
  { name: 'Lead Research', href: '/admin/research' },
  { name: 'Prospects', href: '/admin/prospects' },
  { name: 'Ad Intelligence', href: '/admin/advertising' },
  { name: 'Opportunities', href: '/admin/opportunities' },
  { name: 'Verification', href: '/admin/verification' },
  { name: 'Outreach', href: '/admin/outreach' },
  { name: 'Analytics', href: '/admin/analytics' },
  { name: 'Settings', href: '/admin/settings' },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded border border-cyan-800/50">
            Private Command Center
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
