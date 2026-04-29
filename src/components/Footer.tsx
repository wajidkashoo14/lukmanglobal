import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MSG = encodeURIComponent('Hello! I need medical assistance. Please help.');

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/></svg>
              </div>
              <span className="text-lg font-extrabold">LUKMAN<span className="text-blue-400">GLOBAL</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">India's most trusted medical tourism facilitator. World-class care, affordable costs, full concierge support.</p>
            <div className="flex gap-3">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-white px-4 py-2 rounded-full text-xs font-bold transition-all">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5">Core Specialities</h3>
            <ul className="space-y-2.5">
              {['Spine Surgery','Oncology (Cancer Care)','IVF & Fertility','Cosmetic Surgery','Gynaecology','Weight Loss Surgery','Pain Management','Health Packages','Cancer Screening'].map(name => (
                <li key={name}>
                  <Link to="/specialties" className="text-sm text-slate-400 hover:text-white transition-colors">{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5">More Services</h3>
            <ul className="space-y-2.5">
              {['Cardiology & Heart Surgery','Neurology & Brain Surgery','Orthopaedics','Organ Transplant','Urology','Ophthalmology','Dermatology','Paediatrics'].map(name => (
                <li key={name}>
                  <Link to="/specialties" className="text-sm text-slate-400 hover:text-white transition-colors">{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5">Contact & Support</h3>
            <div className="space-y-4 mb-6">
              <a href="tel:+911234567890" className="flex items-start gap-3 group">
                <Phone className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">+91-1234567890</p>
                  <p className="text-slate-500 text-xs">Available 24/7</p>
                </div>
              </a>
              <a href="mailto:care@lukmanglobal.com" className="flex items-start gap-3 group">
                <Mail className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">care@lukmanglobal.com</p>
                  <p className="text-slate-500 text-xs">Reply within 4 hours</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">Sector 44, Gurugram</p>
                  <p className="text-slate-500 text-xs">Haryana – 122003, India</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl p-4">
              <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">🏨 Accommodation</p>
              <p className="text-slate-300 text-xs leading-relaxed">We arrange comfortable, affordable stays near all partner hospitals for patients & families.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} LukmanGlobal Medical Tourism. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-green-500" /> HIPAA Compliant
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-green-500" /> ISO Certified
            </div>
            <Link to="/contact" className="text-slate-400 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-slate-400 hover:text-white text-xs transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
