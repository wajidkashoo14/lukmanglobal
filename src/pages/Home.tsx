import SEO from '@/components/SEO';
import { specialities, hospitals, additionalServices } from '@/data/medical';
import { waURL, WaIcon } from '@/components/WaButton';
import {
  ArrowRight, CheckCircle2, ShieldCheck, ChevronRight,
  Activity, HeartPulse, Weight, Eye, Smile, Zap, Search,
  Star, MapPin, Building2, Stethoscope, Phone, Users, Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const icons: Record<string, any> = {
  Activity, Stethoscope, Smile, Weight, HeartPulse, Eye,
  Zap, Search, Shield: ShieldCheck, ClipboardCheck: CheckCircle2,
};

const doctors = [
  { name:'Dr. Rajesh Verma',  title:'Director — Spine & Neurosurgery', hospital:'Medanta, Gurugram',       exp:'26 yrs', trained:'University of Toronto · AIIMS', procedures:'4,200+', flag:'🏥', specialty:'Spine Surgery',    quote:'Every patient deserves the same standard of care I would give my own family.' },
  { name:'Dr. Priya Nair',    title:'Sr. Consultant Oncologist',        hospital:'Max Healthcare, Delhi',   exp:'22 yrs', trained:'MD Anderson · Tata Memorial',   procedures:'8,000+', flag:'🎗️', specialty:'Cancer Care',       quote:'Precision oncology means tailoring every protocol to the individual — not just the diagnosis.' },
  { name:'Dr. Anil Mehta',    title:'Head of Cardiac Sciences',         hospital:'Fortis FMRI, Gurugram',   exp:'30 yrs', trained:'Cleveland Clinic · AIIMS',      procedures:'6,500+', flag:'❤️', specialty:'Heart Surgery',     quote:'We have performed procedures that most centres in the world will never attempt.' },
  { name:'Dr. Sunita Arora',  title:'Director — Reproductive Medicine', hospital:'Artemis Hospital, Gurgaon',exp:'18 yrs',trained:"King's College London · AIIMS", procedures:'3,100+', flag:'👶', specialty:'IVF & Fertility',   quote:'Our laboratory achieves success rates that rival the very best clinics in Europe and the USA.' },
];

const testimonials = [
  { name:'James O.',          country:'United Kingdom', flag:'🇬🇧', condition:'Knee Replacement', quote:'I waited two years on the NHS list. My Indian surgeon had performed over 3,000 knee replacements. Life-changing.', outcome:'Walking pain-free in 3 weeks' },
  { name:'Sarah M.',          country:'Nigeria',        flag:'🇳🇬', condition:'Stage III Cancer',  quote:'I chose India not for the cost — I chose it because the oncology team was demonstrably better. I am now in complete remission.', outcome:'Complete remission' },
  { name:'Michael T.',        country:'United States',  flag:'🇺🇸', condition:'Spine Surgery',     quote:'The Medanta surgeon trained at the same institutions as my Houston doctor. The expertise was identical. The experience was far superior.', outcome:'Full recovery in 6 weeks' },
];

const outcomes = [
  { value:'5,000+', label:'International patients treated', sublabel:'across 35+ countries' },
  { value:'95%',    label:'Patient satisfaction rate',      sublabel:'verified post-treatment' },
  { value:'150+',   label:'Partner specialist doctors',     sublabel:'all internationally trained' },
  { value:'12 yrs', label:'Of clinical excellence',        sublabel:'established 2013' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="LukmanGlobal — India's Premier Medical Tourism Partner"
        description="Connect with India's most respected specialists for Spine, Cancer, IVF, Cardiac and more. JCI-accredited hospitals, internationally trained doctors, outcomes that match the world's best. Serving patients from USA, UK, Nigeria, Mauritius & Southeast Asia."
        keywords="medical tourism India, best oncologist India, spine surgeon India, IVF specialist India, JCI hospital India, international patient care India"
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grain"
        style={{background:'linear-gradient(160deg,#0a1a14 0%,#163d2b 55%,#0f2a1e 100%)', minHeight:'92vh', display:'flex', alignItems:'center'}}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-15%] right-[-8%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-[0.07]"
            style={{background:'radial-gradient(circle,#e8b830 0%,transparent 70%)'}}/>
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full opacity-[0.05]"
            style={{background:'radial-gradient(circle,#60bf8a 0%,transparent 70%)'}}/>
        </div>
        <div className="absolute inset-0 opacity-[0.025]"
          style={{backgroundImage:'linear-gradient(rgba(96,191,138,1) 1px,transparent 1px),linear-gradient(90deg,rgba(96,191,138,1) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 sm:py-20 md:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.75,ease:[0.22,1,0.36,1]}}
              className="lg:col-span-7 text-center lg:text-left">

              <div className="inline-flex items-center gap-2.5 mb-6 sm:mb-7 px-4 py-2 rounded-full border"
                style={{borderColor:'rgba(232,184,48,0.3)',background:'rgba(232,184,48,0.08)'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e8b830] animate-pulse"/>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em]" style={{color:'#e8b830'}}>
                  Serving patients from 35+ countries since 2013
                </span>
              </div>

              <h1 className="font-serif text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.4rem] leading-[1.06] tracking-[-0.02em] text-white mb-5 sm:mb-6">
                World-Class Care.<br/>
                <em className="italic" style={{color:'#96d9b0'}}>India's Finest</em><br/>
                <span style={{color:'rgba(255,255,255,0.65)'}}>Doctors.</span>
              </h1>

              <p className="text-[15px] sm:text-base md:text-lg leading-[1.8] mb-7 sm:mb-8 max-w-lg mx-auto lg:mx-0" style={{color:'rgba(255,255,255,0.55)'}}>
                We connect you with India's most respected specialists — doctors trained at{' '}
                <strong style={{color:'rgba(255,255,255,0.8)'}}>Harvard, Cleveland Clinic and Johns Hopkins</strong>{' '}
                — for treatment that matches the world's best.
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7 sm:mb-9">
                {[['🇺🇸','USA'],['🇬🇧','UK'],['🇳🇬','Nigeria'],['🇲🇺','Mauritius'],['🇰🇭','Cambodia'],['🇮🇩','Indonesia']].map(([flag,country])=>(
                  <span key={country} className="flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full"
                    style={{background:'rgba(255,255,255,0.07)',color:'rgba(255,255,255,0.5)',border:'1px solid rgba(255,255,255,0.1)'}}>
                    {flag} {country}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 sm:mb-10">
                <Link to="/contact"
                  className="group flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:brightness-110"
                  style={{background:'#2d7a52',color:'white',boxShadow:'0 4px 24px rgba(45,122,82,0.4)'}}>
                  Speak to a Specialist <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform"/>
                </Link>
                <a href={waURL('Hi, I need expert guidance for my medical treatment in India.')} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[15px] text-white border transition-all hover:bg-white/10"
                  style={{borderColor:'rgba(255,255,255,0.2)'}}>
                  <WaIcon size="md"/> WhatsApp Now
                </a>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['JCI Accredited Hospitals','NABH Certified','HIPAA Compliant','ISO 9001:2015'].map(badge=>(
                  <div key={badge} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                    style={{background:'rgba(150,217,176,0.12)',color:'#96d9b0',border:'1px solid rgba(150,217,176,0.2)'}}>
                    <CheckCircle2 className="h-3 w-3"/> {badge}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:0.75,delay:0.15,ease:[0.22,1,0.36,1]}}
              className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{background:'#fdf9f4',border:'1px solid rgba(255,255,255,0.08)'}}>
                <div className="px-6 sm:px-8 pt-7 pb-5" style={{borderBottom:'1px solid #ede9e3'}}>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'#edfaf3'}}>
                      <Stethoscope className="h-4 w-4" style={{color:'#1e5538'}}/>
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em]" style={{color:'#286847'}}>Free Second Opinion</p>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl" style={{color:'#0f2a1e'}}>Talk to an Expert Today</h2>
                  <p className="text-[13px] mt-1 leading-relaxed" style={{color:'#787168'}}>Our coordinators respond within 4 hours — no charges, ever.</p>
                </div>
                <div className="px-6 sm:px-8 py-5 sm:py-6 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[{p:'Your Name',t:'text'},{p:'WhatsApp Number',t:'tel'}].map(({p,t})=>(
                      <input key={p} type={t} placeholder={p}
                        className="w-full h-12 px-4 rounded-xl text-[14px] font-medium outline-none transition-all"
                        style={{background:'#f5efe6',border:'1.5px solid #e8e2da',color:'#1c1a18',fontFamily:'var(--font-sans)'}}
                        onFocus={e=>{e.target.style.borderColor='#286847';e.target.style.background='#fff'}}
                        onBlur={e=>{e.target.style.borderColor='#e8e2da';e.target.style.background='#f5efe6'}}/>
                    ))}
                  </div>
                  <select className="w-full h-12 px-4 rounded-xl text-[14px] font-medium outline-none transition-all appearance-none"
                    style={{background:'#f5efe6',border:'1.5px solid #e8e2da',color:'#44403a',fontFamily:'var(--font-sans)'}}
                    onFocus={e=>e.target.style.borderColor='#286847'} onBlur={e=>e.target.style.borderColor='#e8e2da'}>
                    <option value="">Select Speciality</option>
                    {specialities.map(s=><option key={s.id}>{s.name}</option>)}
                  </select>
                  <textarea placeholder="Briefly describe your condition…" rows={3}
                    className="w-full px-4 py-3 rounded-xl text-[14px] font-medium outline-none resize-none transition-all"
                    style={{background:'#f5efe6',border:'1.5px solid #e8e2da',color:'#1c1a18',fontFamily:'var(--font-sans)'}}
                    onFocus={e=>{e.target.style.borderColor='#286847';e.target.style.background='#fff'}}
                    onBlur={e=>{e.target.style.borderColor='#e8e2da';e.target.style.background='#f5efe6'}}/>
                  <button className="w-full h-12 rounded-xl font-semibold text-[14px] text-white transition-all hover:brightness-110 active:scale-[0.99]"
                    style={{background:'linear-gradient(135deg,#1e5538 0%,#286847 100%)',boxShadow:'0 4px 20px rgba(30,85,56,.3)'}}>
                    Request Free Consultation
                  </button>
                  <div className="flex items-center justify-around pt-1">
                    {[['🔒','100% Private'],['⚡','4hr Response'],['✅','Zero Cost']].map(([icon,label])=>(
                      <div key={label} className="text-center">
                        <div className="text-base mb-0.5">{icon}</div>
                        <p className="text-[10px] font-semibold" style={{color:'#787168'}}>{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 54" className="w-full h-[40px] sm:h-[54px]" preserveAspectRatio="none">
            <path d="M0,54 C240,0 480,54 720,27 C960,0 1200,54 1440,27 L1440,54 Z" fill="#fdf9f4"/>
          </svg>
        </div>
      </section>

      {/* ── OUTCOME STATS ─────────────────────────────────────── */}
      <section className="py-10 sm:py-14" style={{background:'#fdf9f4'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{background:'#e8e2da',boxShadow:'0 1px 24px rgba(15,42,30,0.06)'}}>
            {outcomes.map((o,i)=>(
              <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
                className="flex flex-col justify-center px-5 sm:px-8 py-6 sm:py-8" style={{background:'#fdf9f4'}}>
                <p className="font-serif text-3xl sm:text-4xl tracking-tight mb-1.5" style={{color:'#1e5538'}}>{o.value}</p>
                <p className="text-[13px] sm:text-[14px] font-semibold leading-snug mb-1" style={{color:'#1c1a18'}}>{o.label}</p>
                <p className="text-[11px]" style={{color:'#787168'}}>{o.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALISTS ───────────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-28" style={{background:'#fdf9f4'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 shrink-0" style={{background:'#d4a017'}}/>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color:'#d4a017'}}>Clinical Excellence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight mb-4" style={{color:'#0f2a1e'}}>
              Internationally Trained<br/><em className="italic" style={{color:'#286847'}}>Specialists You Can Trust</em>
            </h2>
            <p className="text-[15px] sm:text-base leading-[1.8]" style={{color:'#5c5750'}}>
              Every doctor in our network has trained at or been credentialled by the world's leading medical institutions. Your care is in exceptional hands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {doctors.map((doc,i)=>(
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:0.5}}
                className="card-lift rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col"
                style={{background:'#fff',border:'1px solid #e8e2da',boxShadow:'0 2px 16px rgba(15,42,30,0.05)'}}>
                <div className="relative h-32 sm:h-36 flex items-center justify-center"
                  style={{background:'linear-gradient(135deg,#0f2a1e 0%,#1e5538 100%)'}}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl sm:text-4xl"
                    style={{background:'rgba(255,255,255,0.12)',backdropFilter:'blur(8px)'}}>
                    {doc.flag}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider"
                    style={{background:'rgba(232,184,48,0.2)',color:'#e8b830',border:'1px solid rgba(232,184,48,0.3)'}}>
                    {doc.specialty}
                  </div>
                </div>
                <div className="flex-1 p-4 sm:p-5 flex flex-col">
                  <h3 className="font-serif text-[1rem] sm:text-[1.05rem] leading-tight mb-0.5" style={{color:'#0f2a1e'}}>{doc.name}</h3>
                  <p className="text-[11px] sm:text-[12px] font-semibold mb-1" style={{color:'#286847'}}>{doc.title}</p>
                  <p className="text-[11px] flex items-center gap-1 mb-3 sm:mb-4" style={{color:'#787168'}}>
                    <MapPin className="h-3 w-3 shrink-0"/> {doc.hospital}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-xl" style={{background:'#faf8f5'}}>
                    <div>
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold mb-0.5" style={{color:'#968d83'}}>Experience</p>
                      <p className="text-[13px] sm:text-[14px] font-bold" style={{color:'#1c1a18'}}>{doc.exp}</p>
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold mb-0.5" style={{color:'#968d83'}}>Procedures</p>
                      <p className="text-[13px] sm:text-[14px] font-bold" style={{color:'#1c1a18'}}>{doc.procedures}</p>
                    </div>
                  </div>
                  <p className="text-[11px] mb-3 leading-relaxed" style={{color:'#787168'}}>
                    <span className="font-semibold" style={{color:'#44403a'}}>Trained: </span>{doc.trained}
                  </p>
                  <p className="text-[12px] italic leading-relaxed flex-1" style={{color:'#5c5750'}}>"{doc.quote}"</p>
                  <Link to="/contact"
                    className="mt-4 flex items-center justify-center gap-1.5 h-10 rounded-xl text-[12px] font-semibold transition-all hover:brightness-110"
                    style={{background:'#edfaf3',color:'#1e5538',border:'1px solid #d0f0e0'}}>
                    Consult This Doctor <ArrowRight className="h-3.5 w-3.5"/>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10 text-center">
            <Link to="/hospitals" className="inline-flex items-center gap-2 text-[13px] font-semibold transition-all hover:gap-3" style={{color:'#286847'}}>
              View our full network of 150+ specialists <ChevronRight className="h-4 w-4"/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-24 relative overflow-hidden grain"
        style={{background:'linear-gradient(160deg,#0a1a14 0%,#163d2b 100%)'}}>
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] opacity-[0.05] pointer-events-none"
          style={{background:'radial-gradient(circle,#e8b830 0%,transparent 65%)'}}/>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="ornament mb-5 max-w-xs mx-auto" style={{color:'rgba(232,184,48,0.4)'}}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color:'#d4a017'}}>Patient Stories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] tracking-tight">
              Outcomes That<br/><em className="italic" style={{color:'#96d9b0'}}>Speak for Themselves</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {testimonials.map((t,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden"
                style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',backdropFilter:'blur(12px)'}}>
                <div className="h-1" style={{background:'linear-gradient(90deg,#286847,#e8b830)'}}/>
                <div className="flex-1 p-5 sm:p-7 flex flex-col">
                  <div className="flex gap-1 mb-4 sm:mb-5">
                    {[...Array(5)].map((_,j)=><Star key={j} className="h-3.5 w-3.5 fill-current" style={{color:'#e8b830'}}/>)}
                  </div>
                  <p className="text-[14px] sm:text-[15px] leading-[1.75] mb-5 sm:mb-6 flex-1" style={{color:'rgba(255,255,255,0.7)'}}>&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-2 mb-4 sm:mb-5 px-3 py-2 rounded-xl"
                    style={{background:'rgba(96,191,138,0.12)',border:'1px solid rgba(96,191,138,0.2)'}}>
                    <CheckCircle2 className="h-4 w-4 shrink-0" style={{color:'#60bf8a'}}/>
                    <span className="text-[12px] font-semibold" style={{color:'#96d9b0'}}>{t.outcome}</span>
                  </div>
                  <div className="flex items-center gap-3 pt-4" style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
                    <span className="text-2xl">{t.flag}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-white">{t.name}</p>
                      <p className="text-[11px]" style={{color:'rgba(255,255,255,0.4)'}}>{t.country} · {t.condition}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/success-stories"
              className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:bg-white/10"
              style={{color:'white',border:'1px solid rgba(255,255,255,0.2)'}}>
              Read all patient stories <ArrowRight className="h-4 w-4"/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SPECIALITIES ──────────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-28" style={{background:'#fdf9f4'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 shrink-0" style={{background:'#d4a017'}}/>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color:'#d4a017'}}>Treatment Areas</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight" style={{color:'#0f2a1e'}}>
                Areas of<br/><em className="italic" style={{color:'#286847'}}>Clinical Excellence</em>
              </h2>
            </div>
            <Link to="/specialties" className="flex items-center gap-1.5 text-[13px] font-semibold shrink-0 transition-all hover:gap-2.5" style={{color:'#286847'}}>
              All specialities <ChevronRight className="h-4 w-4"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {specialities.map((spec,i)=>{
              const Icon = icons[spec.icon]||Activity;
              return (
                <motion.div key={spec.id} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}}>
                  <Link to={`/specialties#${spec.id}`} className="block h-full group">
                    <div className="card-lift h-full rounded-2xl sm:rounded-3xl overflow-hidden" style={{background:'#fff',border:'1px solid #e8e2da'}}>
                      <div className="h-1.5" style={{background:spec.discount?'linear-gradient(90deg,#d4a017,#e8b830)':'linear-gradient(90deg,#1e5538,#2d7a52)'}}/>
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                            style={{background:'#edfaf3',border:'1px solid #d0f0e0'}}>
                            <Icon className="h-5 w-5" style={{color:'#1e5538'}}/>
                          </div>
                          {spec.discount && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                              style={{background:'#fef9e7',color:'#b8860b',border:'1px solid rgba(184,134,11,0.2)'}}>50% Off</span>
                          )}
                        </div>
                        <h3 className="font-serif text-[1rem] sm:text-[1.05rem] mb-2 leading-snug" style={{color:'#0f2a1e'}}>{spec.name}</h3>
                        <p className="text-[13px] leading-relaxed line-clamp-2 mb-5" style={{color:'#787168'}}>{spec.overview}</p>
                        <div className="flex items-center justify-between pt-4" style={{borderTop:'1px solid #ede9e3'}}>
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" style={{background:'#edfaf3'}}>
                              <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{color:'#2d7a52'}}/>
                            </div>
                            <div>
                              <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide" style={{color:'#968d83'}}>Success Rate</p>
                              <p className="text-[13px] sm:text-[14px] font-bold" style={{color:'#1e5538'}}>{spec.successRate}%</p>
                            </div>
                          </div>
                          <span className="flex items-center gap-1 text-[12px] font-semibold transition-all group-hover:gap-2" style={{color:'#286847'}}>
                            Learn more <ChevronRight className="h-3.5 w-3.5"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOSPITAL NETWORK ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-24" style={{background:'#faf8f5',borderTop:'1px solid #e8e2da'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 shrink-0" style={{background:'#d4a017'}}/>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color:'#d4a017'}}>Our Network</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.1] tracking-tight" style={{color:'#0f2a1e'}}>
                Partnered with India's<br/><em className="italic" style={{color:'#286847'}}>Most Respected Hospitals</em>
              </h2>
            </div>
            <Link to="/hospitals" className="flex items-center gap-1.5 text-[13px] font-semibold shrink-0" style={{color:'#286847'}}>
              View all hospitals <ChevronRight className="h-4 w-4"/>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {hospitals.map((hosp,i)=>(
              <motion.div key={hosp.id} initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.07}}
                className="card-lift rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col gap-4"
                style={{background:'#fff',border:'1px solid #e8e2da',boxShadow:'0 2px 12px rgba(15,42,30,0.04)'}}>
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{background:'#edfaf3',border:'1px solid #d0f0e0'}}>
                    <Building2 className="h-4 w-4 sm:h-5 sm:w-5" style={{color:'#1e5538'}}/>
                  </div>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {hosp.accreditation.split(' & ').map(a=>(
                      <span key={a} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md" style={{background:'#0f2a1e',color:'#96d9b0'}}>{a}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-[1rem] sm:text-[1.05rem] mb-1 leading-snug" style={{color:'#0f2a1e'}}>{hosp.name}</h3>
                  <p className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide mb-3" style={{color:'#968d83'}}>
                    <MapPin className="h-3 w-3 shrink-0"/> {hosp.location} · {hosp.beds} beds
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{color:'#787168'}}>{hosp.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3" style={{borderTop:'1px solid #ede9e3'}}>
                  {hosp.specialties.slice(0,3).map(s=>(
                    <span key={s} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{background:'#edfaf3',color:'#1e5538',border:'1px solid #d0f0e0'}}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ───────────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-28" style={{background:'#fdf9f4'}}>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="h-px w-10" style={{background:'#d4a017'}}/>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color:'#d4a017'}}>Your Journey</span>
              <div className="h-px w-10" style={{background:'#d4a017'}}/>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight" style={{color:'#0f2a1e'}}>
              We Handle <em className="italic" style={{color:'#286847'}}>Everything</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed max-w-xl mx-auto" style={{color:'#787168'}}>
              From your first inquiry to your final follow-up back home — your dedicated coordinator manages every detail.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
            {[
              {n:'01',icon:'📋',title:'Share Your Case',       desc:'Send us your medical reports. We review them within 4 hours and connect you with the most suitable specialist.'},
              {n:'02',icon:'👨‍⚕️',title:'Expert Medical Opinion',desc:'Receive detailed second opinions from our specialists — before you travel. No commitment required.'},
              {n:'03',icon:'✈️',title:'Seamless Arrival',      desc:'We arrange your medical visa, airport pickup and accommodation near the hospital.'},
              {n:'04',icon:'🌟',title:'Treatment & Beyond',    desc:'World-class care with your coordinator by your side. Post-treatment tele-follow-up continues at home.'},
            ].map((step,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 relative"
                style={{background:'#fff',border:'1px solid #e8e2da',boxShadow:'0 2px 12px rgba(15,42,30,0.04)'}}>
                <div className="absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{background:'#edfaf3',color:'#286847',border:'1px solid #d0f0e0'}}>{step.n}</div>
                <div className="text-2xl sm:text-3xl mb-4">{step.icon}</div>
                <h3 className="font-serif text-[1rem] sm:text-[1.05rem] mb-2 pr-8" style={{color:'#0f2a1e'}}>{step.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{color:'#787168'}}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a href={waURL('Hi! I want to get started with my medical treatment in India.')} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 rounded-full text-[14px] font-semibold text-white transition-all hover:brightness-110 wa-pulse"
              style={{background:'#25d366',boxShadow:'0 4px 20px rgba(37,211,102,0.3)'}}>
              <WaIcon size="md"/> Get Started on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── ACCOMMODATION ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-24 relative overflow-hidden grain"
        style={{background:'linear-gradient(135deg,#0f2a1e 0%,#163d2b 60%,#1e5538 100%)'}}>
        <div className="absolute inset-0 pointer-events-none"
          style={{backgroundImage:'radial-gradient(circle at 85% 50%,rgba(232,184,48,0.06) 0%,transparent 60%)'}}/>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-start lg:items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 shrink-0" style={{background:'rgba(232,184,48,0.5)'}}/>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color:'#d4a017'}}>Full Concierge</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.08] tracking-tight mb-5">
                Comfortable Stay,<br/><em className="italic" style={{color:'#96d9b0'}}>Completely Arranged</em>
              </h2>
              <p className="text-[15px] leading-[1.8] mb-7 sm:mb-8" style={{color:'rgba(255,255,255,0.55)'}}>
                We arrange accommodation for every patient and their family — from budget-friendly guest houses to premium serviced apartments near your hospital.
              </p>
              <ul className="space-y-2.5 sm:space-y-3 mb-7 sm:mb-8">
                {['Near-hospital furnished apartments','Airport pickup and hospital transfers','Multilingual patient coordinator assigned','Optional daily meals arrangement','Family companion rooms available','Post-discharge recovery stays'].map(item=>(
                  <li key={item} className="flex items-center gap-3 text-[14px]" style={{color:'rgba(255,255,255,0.7)'}}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{background:'rgba(96,191,138,0.2)',border:'1px solid rgba(96,191,138,0.3)'}}>
                      <CheckCircle2 className="h-3 w-3" style={{color:'#60bf8a'}}/>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:brightness-110"
                style={{background:'rgba(255,255,255,0.12)',color:'white',border:'1px solid rgba(255,255,255,0.2)'}}>
                Enquire About Accommodation <ArrowRight className="h-4 w-4"/>
              </Link>
            </div>
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',backdropFilter:'blur(16px)'}}>
              <div className="p-5 sm:p-7">
                <h3 className="font-serif text-xl text-white mb-5">Accommodation Options</h3>
                {[
                  {type:'Budget Guest House',  price:'₹800–1,500/night',   note:'Basic amenities, near hospital',  dot:'#60bf8a'},
                  {type:'Serviced Apartment',  price:'₹2,000–4,000/night', note:'Full kitchen, housekeeping',       dot:'#e8b830'},
                  {type:'Premium Hotel Suite', price:'₹4,500–8,000/night', note:'Hospital shuttle, room service',   dot:'#96d9b0'},
                ].map((opt,i)=>(
                  <div key={i} className="flex items-center justify-between py-4 gap-4"
                    style={{borderBottom:i<2?'1px solid rgba(255,255,255,0.08)':'none'}}>
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{background:opt.dot}}/>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-white truncate">{opt.type}</p>
                        <p className="text-[11px]" style={{color:'rgba(255,255,255,0.4)'}}>{opt.note}</p>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold whitespace-nowrap shrink-0" style={{color:'#96d9b0'}}>{opt.price}</p>
                  </div>
                ))}
                <Link to="/contact"
                  className="mt-5 flex items-center justify-center gap-2 h-12 rounded-xl text-[13px] font-semibold text-white transition-all hover:brightness-110"
                  style={{background:'linear-gradient(135deg,#1e5538,#2d7a52)',boxShadow:'0 4px 20px rgba(30,85,56,0.4)'}}>
                  Book Accommodation <ArrowRight className="h-4 w-4"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY INDIA ─────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-28" style={{background:'#fdf9f4'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 shrink-0" style={{background:'#d4a017'}}/>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color:'#d4a017'}}>Why India</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight mb-6" style={{color:'#0f2a1e'}}>
                The World Comes<br/>to India for <em className="italic" style={{color:'#286847'}}>A Reason</em>
              </h2>
              <p className="text-[15px] leading-[1.8] mb-8" style={{color:'#5c5750'}}>
                India's top hospitals match the clinical outcomes of the Mayo Clinic and Cleveland Clinic — with doctors who trained at those very institutions. What India offers that no Western country can is this same excellence <em>without</em> a 14-month waiting list.
              </p>
              <Link to="/success-stories"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white transition-all hover:brightness-110"
                style={{background:'#1e5538',boxShadow:'0 4px 20px rgba(30,85,56,0.25)'}}>
                Read patient outcomes <ArrowRight className="h-4 w-4"/>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {icon:Award,       title:'Global-Standard Doctors',  desc:'Surgeons trained at Harvard, Johns Hopkins, Mayo Clinic and the Cleveland Clinic — practising in India.'},
                {icon:CheckCircle2,title:'Zero Waiting Lists',        desc:'Treatment begins within days of your arrival. No 12–18 month waiting lists unlike NHS or public systems.'},
                {icon:Users,       title:'Dedicated Coordinator',     desc:'A single point of contact manages your entire journey — from visa to discharge to follow-up care.'},
                {icon:ShieldCheck, title:'JCI Accredited Care',       desc:'Every partner hospital holds international accreditation, meeting the same standards as top US hospitals.'},
              ].map((item,i)=>(
                <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
                  className="rounded-2xl p-5 sm:p-6"
                  style={{background:'#fff',border:'1px solid #e8e2da',boxShadow:'0 2px 12px rgba(15,42,30,0.04)'}}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{background:'#edfaf3',border:'1px solid #d0f0e0'}}>
                    <item.icon className="h-5 w-5" style={{color:'#1e5538'}}/>
                  </div>
                  <h3 className="font-serif text-[1rem] mb-2 leading-snug" style={{color:'#0f2a1e'}}>{item.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{color:'#787168'}}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE SERVICES ─────────────────────────────────────── */}
      <section className="py-10 sm:py-14" style={{background:'#faf8f5',borderTop:'1px solid #e8e2da'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 sm:mb-7">
            <h2 className="font-serif text-xl sm:text-2xl" style={{color:'#0f2a1e'}}>More Specialities</h2>
            <Link to="/specialties" className="text-[12px] font-semibold flex items-center gap-1" style={{color:'#286847'}}>
              View all <ChevronRight className="h-3.5 w-3.5"/>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {additionalServices.map((svc,i)=>(
              <motion.div key={svc.id} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*0.04}}
                className="rounded-xl p-4 sm:p-5 transition-all cursor-pointer group hover:border-[#d0f0e0]"
                style={{background:'#fff',border:'1px solid #e8e2da'}}>
                <p className="text-[13px] font-semibold mb-1 leading-snug group-hover:text-[#1e5538] transition-colors" style={{color:'#1c1a18'}}>{svc.name}</p>
                <p className="text-[11px] leading-relaxed" style={{color:'#968d83'}}>{svc.treatments[0]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden grain pb-24 md:pb-16"
        style={{background:'linear-gradient(160deg,#0a1a14 0%,#163d2b 60%,#1e5538 100%)'}}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-[0.06]"
            style={{background:'radial-gradient(circle,#e8b830 0%,transparent 70%)'}}/>
        </div>
        <div className="container relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="ornament mb-6 max-w-xs mx-auto" style={{color:'rgba(232,184,48,0.3)'}}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color:'rgba(232,184,48,0.7)'}}>Begin Your Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.06] tracking-tight mb-6">
            Your Recovery<br/><em className="italic" style={{color:'#96d9b0'}}>Starts Here</em>
          </h2>
          <p className="text-[15px] sm:text-base leading-[1.8] mb-8 sm:mb-10 max-w-xl mx-auto" style={{color:'rgba(255,255,255,0.5)'}}>
            Speak with a patient coordinator today. No obligations, no charges — just expert guidance on the best path forward for your health.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-8">
            <Link to="/contact"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-[14px] font-semibold text-white transition-all hover:brightness-110"
              style={{background:'linear-gradient(135deg,#1e5538,#2d7a52)',boxShadow:'0 4px 24px rgba(30,85,56,0.5)'}}>
              Free Consultation Request
            </Link>
            <a href={waURL("Hi! I'd like to speak with a patient coordinator about my treatment options.")} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-[14px] font-semibold text-white border transition-all hover:bg-white/10"
              style={{borderColor:'rgba(255,255,255,0.2)'}}>
              <WaIcon size="md"/> WhatsApp a Coordinator
            </a>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[13px]" style={{color:'rgba(255,255,255,0.35)'}}>
            <Phone className="h-3.5 w-3.5"/>
            <span>Or call: <a href="tel:+919876543210" className="font-semibold" style={{color:'rgba(255,255,255,0.6)'}}>+91-98765-43210</a></span>
          </div>
        </div>
      </section>
    </>
  );
}
