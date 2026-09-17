import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Free Ad Audit', href: '/free-ad-audit' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 mb-4">
              <span className="text-sky-400">Nior</span>Media
            </Link>
            <p className="text-sm text-slate-400 max-w-xs mb-4">
              Digital systems built to grow businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-slate-300">Email:</span>{' '}
                <a href="mailto:hello@niormedia.online" className="text-sky-400 hover:underline">
                  hello@niormedia.online
                </a>
              </p>
              <p>
                <span className="text-slate-300">WhatsApp:</span>{' '}
                <a 
                  href="https://wa.me/18259276543" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sky-400 hover:underline"
                >
                  +1 825 927 6543
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NiorMedia. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Remote Digital Service Business</p>
        </div>
      </div>
    </footer>
  );
}
