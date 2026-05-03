import SEO from '@/components/SEO';
import { hospitals } from '@/data/medical';
import { waURL, WaIcon } from '@/components/WaButton';
import { ArrowRight, MapPin, ShieldCheck, Building2, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const standards = [
  { icon:'🏆', title:'JCI Accreditation',      desc:'International Joint Commission — the gold standard for global hospital quality and patient safety.' },
  { icon:'🎓', title:'Internationally Trained', desc:'Surgical faculty who trained at Harvard, Cleveland Clinic, MD Anderson and King\'s College London.' },
  { icon:'🔬', title:'Latest Technology',       desc:'Robotic surgery suites, proton therapy, AI-assisted diagnostics and minimally invasive platforms.' },
  { icon:'🌍', title:'International Patient Units', desc:'Dedicated teams managing overseas patients: visas, interpreters, tele-follow-up and accommodation.' },
];

const vetProcess = [
  { step:'01', title:'Clinical Outcome Audit', desc:'We review three years of surgical outcomes, complication rates and mortality data for each hospital.' },
  { step:'02', title:'Accreditation Verification', desc:'We independently verify all JCI, NABH and ISO certifications before any partnership is formed.' },
  { step:'03', title:'Patient Experience Review', desc:'We interview patients treated at each hospital and review post-care satisfaction scores.' },
  { step:'04', title:'International Patient Infrastructure', desc:'We assess visa support, translator availability, international billing and dedicated coordinator access.' },
];

export default function Hospitals() {
  return (
    <>
      <SEO
        title="India's Top JCI-Accredited Hospitals — Max, Fortis, Medanta, Apollo | LukmanGlobal"
        description="We partner exclusively with India's highest-rated internationally accredited hospitals — Max Healthcare, Fortis FMRI, Medanta, Apollo, Kokilaben and Artemis. Selected for clinical excellence, patient safety and outstanding outcomes."
        keywords="best hospitals India, JCI hospitals India, Max Healthcare, Fortis, Medanta, Apollo Hospitals, Kokilaben, international patients India"
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grain py-16 sm:py-20 md:py-28"
        style={{background:'linear-gradient(160deg,#0a1a14 0%,#163d2b 55%,#0f2a1e 100%)'}}>
        <div className="absolute inset-0 pointer-events-none"
          style={{backgroundImage:'radial-gradient(circle at 75% 40%,rgba(61,158,107,.15) 0%,transparent 60%)'}}/>
        <div className="absolute inset-0 opacity-[0.025]"
          style={{backgroundImage:'linear-gradient(rgba(96,191,138,1) 1px,transparent 1px),linear-gradient(90deg,rgba(96,191,138,1) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>

        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{background:'rgba(232,184,48,.6)'}}/>
              <span className="text-[11px] font-semibold uppercase tracking-[.2em]" style={{color:'#d4a017'}}>JCI & NABH Accredited</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-5 leading-[1.06] tracking-tight">
              India's Premier<br/><em className="italic" style={{color:'#96d9b0'}}>Partner Hospitals</em>
            </h1>
            <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-8" style={{color:'rgba(255,255,255,.55)'}}>
              We partner exclusively with the highest-rated, internationally accredited hospitals — selected for clinical excellence, patient safety records and consistent outcomes for international patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-full transition-all hover:brightness-110 text-[#0f2a1e]"
                style={{background:'#fff',boxShadow:'0 4px 20px rgba(255,255,255,.15)'}}>
                Get Hospital Recommendation <ArrowRight className="h-4 w-4"/>
              </Link>
              <a href={waURL('Hi! I need help choosing the right hospital in India for my treatment.')}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-full transition-all hover:brightness-110 text-white"
                style={{background:'#25d366',boxShadow:'0 4px 16px rgba(37,211,102,.3)'}}>
                <WaIcon size="lg"/> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none" style={{display:'block'}}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#fdf9f4"/>
          </svg>
        </div>
      </section>

      {/* ── HOSPITALS GRID ──────────────────────────────────── */}
      <section className="py-12 sm:py-16 md:py-20" style={{background:'#fdf9f4'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          <div className="max-w-xl mb-10 sm:mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 shrink-0" style={{background:'#d4a017'}}/>
              <span className="text-[11px] font-semibold uppercase tracking-[.2em]" style={{color:'#d4a017'}}>Our Network</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight" style={{color:'#0f2a1e'}}>
              Hospitals We<br/><em className="italic" style={{color:'#286847'}}>Trust With Your Care</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7">
            {hospitals.map((h,i)=>(
              <motion.div key={h.id}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08,duration:.45}}
                className="group rounded-2xl sm:rounded-3xl overflow-hidden card-lift"
                style={{background:'#fff',border:'1px solid #e8e2da',boxShadow:'0 2px 12px rgba(15,42,30,.04)'}}>

                <div className="h-1.5" style={{background:'linear-gradient(90deg,#1e5538,#3d9e6b)'}}/>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                      style={{background:'#edfaf3',border:'1px solid #d0f0e0'}}>
                      <Building2 className="h-6 w-6 sm:h-7 sm:w-7" style={{color:'#1e5538'}}/>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-full"
                        style={{background:'#edfaf3',color:'#1e5538',border:'1px solid #d0f0e0'}}>
                        <ShieldCheck className="h-3 w-3"/> {h.accreditation}
                      </span>
                      <span className="text-[10px] font-medium" style={{color:'#968d83'}}>{h.beds} beds</span>
                    </div>
                  </div>

                  <h2 className="font-serif text-xl md:text-2xl mb-1.5 group-hover:text-[#286847] transition-colors" style={{color:'#0f2a1e'}}>
                    {h.name}
                  </h2>
                  <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide mb-4" style={{color:'#968d83'}}>
                    <MapPin className="h-3 w-3 shrink-0" style={{color:'#286847'}}/> {h.location}
                  </p>
                  <p className="text-[13px] sm:text-sm leading-relaxed mb-5" style={{color:'#5c5750'}}>{h.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {h.specialties.map(s=>(
                      <span key={s} className="text-[10px] font-semibold px-2.5 py-1 rounded-xl"
                        style={{background:'#edfaf3',color:'#1e5538',border:'1px solid #d0f0e0'}}>{s}</span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-5" style={{borderTop:'1px solid #ede9e3'}}>
                    <Link to="/contact"
                      className="flex-1 flex items-center justify-center text-[13px] font-semibold text-white py-3 rounded-xl transition-all hover:brightness-110"
                      style={{background:'#1e5538'}}>
                      Get Consultation
                    </Link>
                    <a href={waURL(`Hi! I want to know more about receiving treatment at ${h.name}.`)}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-[13px] font-semibold text-white py-3 rounded-xl transition-all hover:brightness-110"
                      style={{background:'#25d366'}}>
                      <WaIcon size="sm"/> WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR VETTING PROCESS ─────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-24" style={{background:'#faf8f5',borderTop:'1px solid #e8e2da'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="h-px w-8" style={{background:'#d4a017'}}/>
              <span className="text-[11px] font-semibold uppercase tracking-[.2em]" style={{color:'#d4a017'}}>Our Standards</span>
              <div className="h-px w-8" style={{background:'#d4a017'}}/>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight mb-4" style={{color:'#0f2a1e'}}>
              How We Select<br/><em className="italic" style={{color:'#286847'}}>Every Partner Hospital</em>
            </h2>
            <p className="text-[15px] max-w-xl mx-auto leading-relaxed" style={{color:'#787168'}}>
              Every hospital in our network undergoes a rigorous, multi-stage vetting process before any partnership is formed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
            {vetProcess.map((step,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 relative"
                style={{background:'#fff',border:'1px solid #e8e2da',boxShadow:'0 2px 12px rgba(15,42,30,.04)'}}>
                <div className="absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{background:'#edfaf3',color:'#286847',border:'1px solid #d0f0e0'}}>{step.step}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 pr-7"
                  style={{background:'#edfaf3',border:'1px solid #d0f0e0'}}>
                  <Award className="h-5 w-5" style={{color:'#1e5538'}}/>
                </div>
                <h3 className="font-serif text-[1.05rem] mb-2 pr-8 leading-snug" style={{color:'#0f2a1e'}}>{step.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{color:'#787168'}}>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Standards */}
          <div className="rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14"
            style={{background:'linear-gradient(135deg,#0f2a1e,#1e5538)'}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8" style={{background:'rgba(232,184,48,.6)'}}/>
                  <span className="text-[11px] font-semibold uppercase tracking-[.2em]" style={{color:'#d4a017'}}>What We Require</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4 leading-snug">
                  Every Hospital Must Meet<br/><em className="italic" style={{color:'#96d9b0'}}>These Standards</em>
                </h2>
                <p className="text-[14px] leading-relaxed" style={{color:'rgba(255,255,255,.5)'}}>
                  We refuse to refer patients to any hospital that does not meet our full criteria. Our reputation depends on your outcome — so we treat hospital selection with the same diligence as a clinical decision.
                </p>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white transition-all hover:brightness-110"
                  style={{background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.2)'}}>
                  Get a Hospital Match <ArrowRight className="h-4 w-4"/>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {standards.map((item,k)=>(
                  <div key={k} className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl"
                    style={{background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.1)'}}>
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-white mb-1">{item.title}</p>
                      <p className="text-[12px] leading-relaxed" style={{color:'rgba(255,255,255,.5)'}}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 pb-24 sm:pb-16 relative overflow-hidden grain"
        style={{background:'linear-gradient(135deg,#0a1a14,#163d2b)'}}>
        <div className="container relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-[1.06] tracking-tight">
            Let Us Match You<br/><em className="italic" style={{color:'#96d9b0'}}>to the Right Hospital</em>
          </h2>
          <p className="text-[15px] leading-relaxed mb-8 max-w-xl mx-auto" style={{color:'rgba(255,255,255,.5)'}}>
            Share your condition with us and we'll recommend the hospital best suited to your specific treatment — with reasons, outcomes data and a cost estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] font-semibold text-white transition-all hover:brightness-110"
              style={{background:'linear-gradient(135deg,#1e5538,#2d7a52)',boxShadow:'0 4px 24px rgba(30,85,56,.5)'}}>
              Get Hospital Recommendation <ArrowRight className="h-4 w-4"/>
            </Link>
            <a href={waURL('Hi! I need help choosing the right hospital in India for my condition.')}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-[14px] font-semibold text-white border transition-all hover:bg-white/10"
              style={{borderColor:'rgba(255,255,255,.2)'}}>
              <WaIcon size="md"/> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
