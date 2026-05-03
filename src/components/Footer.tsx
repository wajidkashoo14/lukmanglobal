import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { waURL, WaIcon } from './WaButton';

export default function Footer() {
  return (
    <footer style={{background:'#0f2a1e',color:'#d8d2cb'}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                   style={{background:'#286847'}}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/>
                </svg>
              </div>
              <div>
                <div className="font-serif text-[17px] text-white">Lukman<span style={{color:'#3d9e6b'}}>Global</span></div>
                <div className="text-[9px] uppercase tracking-[0.18em]" style={{color:'#787168'}}>Medical Excellence</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{color:'#968d83'}}>
              Connecting patients from USA, UK, Nigeria, Mauritius & Southeast Asia with India's finest specialist physicians and hospitals.
            </p>
            <a href={waURL()} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2.5 rounded-full transition-all hover:brightness-110"
               style={{background:'#25d366',boxShadow:'0 2px 12px rgba(37,211,102,.3)'}}>
              <WaIcon/> Chat on WhatsApp
            </a>
          </div>

          {/* Specialities */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5" style={{color:'#60bf8a'}}>Core Specialities</h4>
            <ul className="space-y-2.5">
              {['Spine Surgery','Oncology & Cancer Care','IVF & Fertility','Cosmetic Surgery','Gynaecology','Weight Loss Surgery','Pain Management','Preventive Health Packages','Cancer Screening'].map(n=>(
                <li key={n}><Link to="/specialties" className="text-sm transition-colors hover:text-white" style={{color:'#968d83'}}>{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5" style={{color:'#60bf8a'}}>More Specialities</h4>
            <ul className="space-y-2.5">
              {['Cardiology & Heart Surgery','Neurology & Brain Surgery','Orthopaedics & Joints','Organ Transplant','Urology','Ophthalmology','Dermatology & Aesthetics','Paediatric Surgery'].map(n=>(
                <li key={n}><Link to="/specialties" className="text-sm transition-colors hover:text-white" style={{color:'#968d83'}}>{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5" style={{color:'#60bf8a'}}>Contact & Support</h4>
            <div className="space-y-4 mb-6">
              {[
                {Icon:Phone, top:'+91-98765-43210', sub:'24 / 7 Patient Support', href:'tel:+919876543210'},
                {Icon:Mail, top:'care@lukmanglobal.com', sub:'Reply within 4 hours', href:'mailto:care@lukmanglobal.com'},
                {Icon:MapPin, top:'Sector 44, Gurugram', sub:'Haryana 122003, India', href:undefined},
              ].map(({Icon,top,sub,href})=>(
                <div key={top} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                       style={{background:'rgba(40,104,71,.35)'}}>
                    <Icon className="h-4 w-4" style={{color:'#60bf8a'}}/>
                  </div>
                  <div>
                    {href
                      ? <a href={href} className="text-sm font-semibold transition-colors hover:text-white" style={{color:'#d8d2cb'}}>{top}</a>
                      : <p className="text-sm font-semibold" style={{color:'#d8d2cb'}}>{top}</p>}
                    <p className="text-xs mt-0.5" style={{color:'#787168'}}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-4" style={{background:'rgba(40,104,71,.2)',border:'1px solid rgba(61,158,107,.25)'}}>
              <p className="text-xs font-semibold mb-1" style={{color:'#60bf8a'}}>🏨 Accommodation</p>
              <p className="text-xs leading-relaxed" style={{color:'#968d83'}}>Comfortable, affordable stays arranged near all partner hospitals.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
             style={{borderTop:'1px solid rgba(255,255,255,.08)'}}>
          <p className="text-xs text-center md:text-left" style={{color:'#787168'}}>
            © {new Date().getFullYear()} LukmanGlobal Medical Tourism. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {[
              {Icon:ShieldCheck, label:'HIPAA Compliant'},
              {Icon:ShieldCheck, label:'JCI Standards'},
            ].map(({Icon,label})=>(
              <div key={label} className="flex items-center gap-1.5 text-xs" style={{color:'#787168'}}>
                <Icon className="h-3.5 w-3.5" style={{color:'#3d9e6b'}}/> {label}
              </div>
            ))}
            <div className="flex items-center gap-4">
              {['Privacy Policy','Terms of Use'].map(t=>(
                <Link key={t} to="/contact" className="text-xs transition-colors hover:text-white" style={{color:'#787168'}}>{t}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
