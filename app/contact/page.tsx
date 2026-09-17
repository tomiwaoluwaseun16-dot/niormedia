import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export default function ContactPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SectionHeading
        title="Contact NiorMedia"
        subtitle="Get in touch with our team for website development, advertising, and digital growth inquiries."
        centered={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Direct Email</h3>
            <p className="text-slate-400 text-sm mb-6">For project inquiries and general communication:</p>
            <a href="mailto:hello@niormedia.online" className="text-sky-400 font-semibold hover:underline text-lg">
              hello@niormedia.online
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-500">We respond to all verified business inquiries within 24 hours.</p>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">WhatsApp Support</h3>
            <p className="text-slate-400 text-sm mb-6">Connect with us instantly via WhatsApp:</p>
            <a 
              href="https://wa.me/18259276543" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sky-400 font-semibold hover:underline text-lg inline-block"
            >
              +1 825 927 6543
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800">
            <Button href="https://wa.me/18259276543" variant="secondary" className="w-full justify-center">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
