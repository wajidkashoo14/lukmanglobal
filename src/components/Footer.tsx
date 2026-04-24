import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/></svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">LUKMAN<span className="text-blue-600">GLOBAL</span></span>
            </Link>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Leading medical concierge connecting international patients with India's most prestigious hospitals. Quality care, transparent pricing, and comprehensive support.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Services</h3>
            <ul className="space-y-3 text-sm font-semibold text-slate-600">
              <li><Link to="/specialties" className="hover:text-blue-600 transition-colors">Specialties</Link></li>
              <li><Link to="/hospitals" className="hover:text-blue-600 transition-colors">Find Hospitals</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Patient Support</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Medical Visa</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Company</h3>
            <ul className="space-y-3 text-sm font-semibold text-slate-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm font-semibold text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-blue-600" />
                <span className="leading-relaxed">Sector 44, Gurugram, <br/> Haryana - 122003, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-600" />
                <span>+91-1234567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-600" />
                <span>care@vaidam-india.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 border-t border-slate-50 pt-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">© {new Date().getFullYear()} Vaidam India Medical Tourism. JCI & NABH Partnered.</p>
        </div>
      </div>
    </footer>
  );
}
