import SEO from '@/components/SEO';
import { specialities } from '@/data/medical';
import { waURL, WaIcon } from '@/components/WaButton';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';

const countries = ['USA 🇺🇸','UK 🇬🇧','Nigeria 🇳🇬','Mauritius 🇲🇺','Cambodia 🇰🇭','Indonesia 🇮🇩','Other'];

const inputStyle = {
  background:'#faf8f5', border:'1.5px solid #e8e2da',
  color:'#1c1a18', borderRadius:'0.875rem', outline:'none',
  fontFamily:'var(--font-sans)', fontSize:'14px', width:'100%', padding:'12px 16px',
};

const focusIn  = (e: React.FocusEvent<any>) => { e.target.style.borderColor='#286847'; e.target.style.background='#fff'; };
const focusOut = (e: React.FocusEvent<any>) => { e.target.style.borderColor='#e8e2da'; e.target.style.background='#faf8f5'; };

export default function Contact() {
  const [done, setDone] = useState(false);

  return (
    <>
      <SEO
        title="Free Medical Consultation — LukmanGlobal | Patients from USA, UK, Nigeria, Mauritius"
        description="Get a free medical opinion from India's top JCI-accredited specialists. Patient coordinators respond within 24 hours. Serving patients from USA, UK, Nigeria, Mauritius, Cambodia and Indonesia."
        keywords="free medical consultation India, contact LukmanGlobal, medical tourism contact, second opinion India"
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grain py-14 sm:py-20 md:py-28"
        style={{background:'linear-gradient(160deg,#0a1a14 0%,#163d2b 55%,#0f2a1e 100%)'}}>
        <div className="absolute inset-0 pointer-events-none"
          style={{backgroundImage:'radial-gradient(circle at 70% 40%,rgba(61,158,107,.15) 0%,transparent 60%)'}}/>
        <div className="absolute inset-0 opacity-[0.025]"
          style={{backgroundImage:'linear-gradient(rgba(96,191,138,1) 1px,transparent 1px),linear-gradient(90deg,rgba(96,191,138,1) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>

        <div className="relative container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold px-4 py-2 rounded-full mb-6"
            style={{background:'rgba(37,211,102,.2)',border:'1px solid rgba(37,211,102,.3)',color:'#96d9b0'}}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse"/>
            Patient Coordinators Online — Available 24/7
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-5 leading-[1.06] tracking-tight">
            Speak to a<br/><em className="italic" style={{color:'#96d9b0'}}>Medical Expert Today</em>
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8" style={{color:'rgba(255,255,255,.55)'}}>
            Share your case and receive a personalised medical plan from JCI-accredited hospitals — within 24 hours. No charges, no obligations, always.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waURL('Hi! I want a free medical opinion from LukmanGlobal. Please help.')}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-full transition-all hover:brightness-110"
              style={{background:'#25d366',color:'#fff',boxShadow:'0 4px 16px rgba(37,211,102,.35)'}}>
              <WaIcon size="lg"/> WhatsApp a Doctor Now
            </a>
            <a href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-full transition-all hover:bg-white/20"
              style={{background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.2)',color:'#fff'}}>
              <Phone className="h-4 w-4"/> +91-98765-43210
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none" style={{display:'block'}}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#fdf9f4"/>
          </svg>
        </div>
      </section>

      {/* ── MAIN FORM + SIDEBAR ─────────────────────────────── */}
      <section className="py-12 sm:py-16 md:py-20 pb-24 sm:pb-16" style={{background:'#fdf9f4'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

            {/* Form — first on mobile, right on desktop */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
                {!done ? (
                  <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
                    style={{background:'#fff',border:'1px solid #e8e2da',boxShadow:'0 8px 40px rgba(30,85,56,.07)'}}>
                    <div className="mb-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8" style={{background:'#d4a017'}}/>
                        <span className="text-[11px] font-semibold uppercase tracking-[.2em]" style={{color:'#d4a017'}}>Free Consultation</span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl mb-1.5" style={{color:'#0f2a1e'}}>Request a Medical Plan</h2>
                      <p className="text-[14px]" style={{color:'#787168'}}>Connect with top JCI-accredited specialists within 24 hours.</p>
                    </div>

                    <form onSubmit={e=>{e.preventDefault();setDone(true);}} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold uppercase tracking-[.18em]" style={{color:'#968d83'}}>Full Name</label>
                          <input type="text" placeholder="John Doe" required style={inputStyle} onFocus={focusIn} onBlur={focusOut}/>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold uppercase tracking-[.18em]" style={{color:'#968d83'}}>Email Address</label>
                          <input type="email" placeholder="john@example.com" required style={inputStyle} onFocus={focusIn} onBlur={focusOut}/>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold uppercase tracking-[.18em]" style={{color:'#968d83'}}>Phone / WhatsApp</label>
                          <input type="tel" placeholder="+1 555 000-0000" required style={inputStyle} onFocus={focusIn} onBlur={focusOut}/>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold uppercase tracking-[.18em]" style={{color:'#968d83'}}>Country</label>
                          <select style={{...inputStyle,appearance:'none' as any}}>
                            <option value="">Select country</option>
                            {countries.map(c=><option key={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold uppercase tracking-[.18em]" style={{color:'#968d83'}}>Treatment Required</label>
                        <select style={{...inputStyle,appearance:'none' as any}}>
                          <option value="">Select speciality</option>
                          {specialities.map(s=><option key={s.id}>{s.name}</option>)}
                          <option>Other (describe below)</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold uppercase tracking-[.18em]" style={{color:'#968d83'}}>Condition / Reports Summary</label>
                        <textarea placeholder="Describe your condition, diagnosis or paste a summary of your reports..." rows={4}
                          style={{...inputStyle,resize:'none' as any}} onFocus={focusIn} onBlur={focusOut}/>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold uppercase tracking-[.18em]" style={{color:'#968d83'}}>Approximate Budget (USD)</label>
                        <select style={{...inputStyle,appearance:'none' as any}}>
                          <option>Not sure / need advice</option>
                          <option>Under $3,000</option>
                          <option>$3,000 – $10,000</option>
                          <option>$10,000 – $30,000</option>
                          <option>Over $30,000</option>
                        </select>
                      </div>
                      <button type="submit"
                        className="w-full py-4 rounded-2xl font-semibold text-[15px] text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
                        style={{background:'linear-gradient(135deg,#1e5538,#286847)',boxShadow:'0 4px 20px rgba(30,85,56,.3)'}}>
                        Submit Consultation Request
                      </button>
                      <p className="text-center text-[11px]" style={{color:'#b8b0a5'}}>HIPAA compliant · Zero charges · We never share your data</p>
                    </form>
                  </div>
                ) : (
                  <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}}
                    className="rounded-2xl sm:rounded-3xl p-10 sm:p-14 text-center"
                    style={{background:'#fff',border:'1px solid #e8e2da',boxShadow:'0 8px 40px rgba(30,85,56,.07)'}}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-7"
                      style={{background:'#edfaf3',border:'2px solid #d0f0e0'}}>
                      <CheckCircle2 className="h-10 w-10" style={{color:'#1e5538'}}/>
                    </div>
                    <h2 className="font-serif text-3xl mb-3" style={{color:'#0f2a1e'}}>Request Received</h2>
                    <p className="text-[15px] leading-relaxed mb-8 max-w-sm mx-auto" style={{color:'#787168'}}>
                      Our medical coordinator will contact you within 24 hours with a personalised plan and specialist recommendations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href={waURL('Hi! I just submitted a consultation request and would like to connect directly.')}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 font-semibold text-sm text-white px-7 py-3.5 rounded-full transition-all hover:brightness-110"
                        style={{background:'#25d366'}}>
                        <WaIcon/> Chat on WhatsApp Now
                      </a>
                      <a href="tel:+919876543210"
                        className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-all hover:shadow-md"
                        style={{background:'#faf8f5',border:'1.5px solid #e8e2da',color:'#44403a'}}>
                        <Phone className="h-4 w-4" style={{color:'#286847'}}/> Call Us
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Sidebar — second on mobile */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 shrink-0" style={{background:'#d4a017'}}/>
                  <span className="text-[11px] font-semibold uppercase tracking-[.2em]" style={{color:'#d4a017'}}>Global Support</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl mb-5" style={{color:'#0f2a1e'}}>We're Here for You</h2>
              </div>

              {/* Contact details */}
              <div className="space-y-3">
                {[
                  {Icon:Phone,  label:'Direct Line',  value:'+91-98765-43210',    sub:'WhatsApp & Skype available',href:'tel:+919876543210'},
                  {Icon:Mail,   label:'Email',         value:'care@lukmanglobal.com',sub:'Average reply: 4 hours',href:'mailto:care@lukmanglobal.com'},
                  {Icon:MapPin, label:'Office',        value:'Sector 44, Gurugram', sub:'Haryana 122003, India',  href:undefined},
                ].map(({Icon,label,value,sub,href})=>(
                  <div key={label} className="flex items-start gap-4 p-4 rounded-2xl"
                    style={{background:'#fff',border:'1px solid #e8e2da'}}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{background:'#edfaf3',border:'1px solid #d0f0e0'}}>
                      <Icon className="h-5 w-5" style={{color:'#1e5538'}}/>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[.18em] mb-0.5" style={{color:'#968d83'}}>{label}</p>
                      {href
                        ? <a href={href} className="text-sm font-semibold hover:text-[#286847] transition-colors" style={{color:'#1c1a18'}}>{value}</a>
                        : <p className="text-sm font-semibold" style={{color:'#1c1a18'}}>{value}</p>}
                      <p className="text-[11px] mt-0.5" style={{color:'#968d83'}}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Countries */}
              <div className="p-5 rounded-2xl" style={{background:'#edfaf3',border:'1px solid #d0f0e0'}}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[.18em] mb-3" style={{color:'#286847'}}>We Serve Patients From</h3>
                <div className="flex flex-wrap gap-2">
                  {['🇺🇸 USA','🇬🇧 UK','🇳🇬 Nigeria','🇲🇺 Mauritius','🇰🇭 Cambodia','🇮🇩 Indonesia','🌍 & more'].map(c=>(
                    <span key={c} className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                      style={{background:'#fff',border:'1px solid #d0f0e0',color:'#1e5538'}}>{c}</span>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-5 rounded-2xl" style={{background:'#fff',border:'1px solid #e8e2da'}}>
                <h3 className="font-semibold text-sm mb-4" style={{color:'#0f2a1e'}}>Our Commitments to You</h3>
                {['100% HIPAA Compliant — your data is private','Zero charges — consultations are always free','Response within 24 hours — often within 4','Medical visa invitation letter provided','Airport pickup and hospital escort included'].map(item=>(
                  <div key={item} className="flex items-center gap-3 py-2.5 border-b last:border-0" style={{borderColor:'#ede9e3'}}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{background:'#1e5538'}}>
                      <CheckCircle2 className="h-3 w-3 text-white"/>
                    </div>
                    <span className="text-[13px]" style={{color:'#44403a'}}>{item}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp card */}
              <div className="p-5 sm:p-6 rounded-2xl relative overflow-hidden grain"
                style={{background:'linear-gradient(135deg,#0f2a1e,#1e5538)'}}>
                <p className="font-serif text-xl text-white mb-2">Prefer WhatsApp?</p>
                <p className="text-[13px] leading-relaxed mb-5" style={{color:'rgba(255,255,255,.55)'}}>
                  Send your medical reports directly on WhatsApp. Our specialists review reports within 2 hours and respond with a clinical assessment.
                </p>
                <a href={waURL('Hi! I want to share my medical reports and get a specialist opinion.')}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:brightness-110 wa-pulse"
                  style={{background:'#25d366',boxShadow:'0 2px 12px rgba(37,211,102,.3)'}}>
                  <WaIcon/> Open WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
