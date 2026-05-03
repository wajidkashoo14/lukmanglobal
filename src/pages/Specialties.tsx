import SEO from '@/components/SEO';
import { specialities, additionalServices } from '@/data/medical';
import { waURL, WaIcon } from '@/components/WaButton';
import { ArrowRight, CheckCircle2, ChevronRight, Phone, Star, Award, Users, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const emojis: Record<string,string> = {
  spine:'🦴', oncology:'🎗️', ivf:'👶', cosmetic:'✨',
  gynaecology:'💜', 'weight-loss':'⚡', 'pain-management':'🩺',
  'health-packages':'🔬', 'cancer-screening':'🧬',
};

/* Discharge & follow-up per specialty */
const clinicalMeta: Record<string, {discharge:string; language:string; team:string}> = {
  spine:             { discharge:'3–7 days',  language:'English, Hindi, Arabic', team:'Spine surgeon, neuro-physio, pain specialist' },
  oncology:          { discharge:'Per protocol', language:'English, Hindi, French', team:'Oncologist, radiologist, pathologist, MDT' },
  ivf:               { discharge:'Same day',  language:'English, Hindi, Arabic', team:'Fertility specialist, embryologist, counsellor' },
  cosmetic:          { discharge:'1–3 days',  language:'English, Hindi, Arabic', team:'Plastic surgeon, anaesthesiologist, nurse' },
  gynaecology:       { discharge:'2–4 days',  language:'English, Hindi, Arabic', team:'Gynaecologist, laparoscopic surgeon, counsellor' },
  'weight-loss':     { discharge:'3–5 days',  language:'English, Hindi, Arabic', team:'Bariatric surgeon, dietitian, psychologist' },
  'pain-management': { discharge:'Same day',  language:'English, Hindi, Arabic', team:'Interventional pain specialist, physio' },
  'health-packages': { discharge:'Same day',  language:'English, Hindi, French, Arabic', team:'GP, diagnostics team, specialist reviewer' },
  'cancer-screening':{ discharge:'Same day',  language:'English, Hindi, French, Arabic', team:'Oncologist, radiologist, MDT panel' },
};

const whyIndia: Record<string,string[]> = {
  spine:             ['Robotic-assisted and navigation-guided spinal surgery','Surgeons with 20+ years performing complex deformity correction','Same-day MRI review and surgical planning','Dedicated neuro-physiotherapy from day one'],
  oncology:          ['Multidisciplinary tumor boards for every case','Proton beam, CyberKnife and CAR T-Cell Therapy available','Genomic profiling and precision oncology protocols','Internationally trained oncologists from MD Anderson & Tata Memorial'],
  ivf:               ['Up to 65% clinical pregnancy rates — among the highest globally','World-class embryology labs with time-lapse imaging','PGT-A screening for chromosomally normal embryo selection','Compassionate multilingual support throughout every cycle'],
  cosmetic:          ['Board-certified plastic surgeons with international fellowships','Latest laser, ultrasound and robotic-assisted aesthetic technologies','Full anaesthesiology support in accredited surgical theatres','Discreet, private recovery suites with nurse-led aftercare'],
  gynaecology:       ['Minimally invasive laparoscopic and robotic techniques','Dedicated women\'s health units with female-led surgical teams','Experienced gynaec-oncology specialists for complex cancers','Fertility-sparing surgical options wherever clinically appropriate'],
  'weight-loss':     ['Bariatric surgeons with 3,000+ procedures performed','Full pre-operative metabolic and psychological assessment','Multidisciplinary team: surgeon, dietitian, psychologist, physiotherapist','Long-term follow-up and nutritional support programme included'],
  'pain-management': ['Interventional pain specialists using fluoroscopy and ultrasound guidance','Full range: nerve blocks, spinal cord stimulation, radiofrequency ablation','Holistic approach combining medication, physiotherapy and psychology','Chronic pain assessed and treated as a primary diagnosis'],
  'health-packages': ['NABL-accredited laboratories with international quality standards','Same-day results with specialist review and counselling included','Comprehensive panels: cardiac, metabolic, hormonal, hepatic and renal','Home sample collection available across major cities'],
  'cancer-screening':['Full-body cancer marker panels reviewed by oncologists','Mammography, colonoscopy, low-dose CT and dermatoscopy available','Results interpreted by specialist MDT within 24 hours','Personalised risk-stratification report with follow-up plan'],
};

const patientVoice: Record<string,string> = {
  oncology:          '"I chose India not for the cost — because the oncology team was demonstrably better. I am now in complete remission."',
  ivf:               '"After two failed cycles at home, we conceived on our first cycle here. The embryology lab was unlike anything we had seen."',
  spine:             '"My surgeon had performed over 4,000 procedures. The outcome was beyond what I was promised at home."',
  cosmetic:          '"The surgical team was meticulous and the recovery suite was impeccable. I felt safe throughout."',
  gynaecology:       '"My coordinator was in contact every day. The laparoscopic team were truly exceptional."',
  'weight-loss':     '"38kg lost in 10 months. My diabetes went into full remission. The follow-up team kept me on track."',
  'pain-management': '"After 3 years of chronic pain, the nerve block procedure gave me my life back in a single visit."',
  'health-packages': '"Comprehensive, fast, and the specialist consultation included made all the difference."',
  'cancer-screening':'"Detected early. The oncologist\'s detailed report gave me — and my family — complete clarity."',
};

export default function Specialties() {
  return (
    <>
      <SEO
        title="Medical Specialities — Clinical Excellence Across Every Discipline | LukmanGlobal"
        description="Expert care across Spine Surgery, Oncology, IVF, Cosmetic Surgery, Gynaecology, Weight Loss, Pain Management, Preventive Health and Cancer Screening. Internationally trained specialists at India's top JCI-accredited hospitals."
        keywords="spine surgery India, oncology India, IVF India, cosmetic surgery India, gynaecology India, weight loss surgery India, pain management India, health checkup India, cancer screening India"
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grain py-16 sm:py-20 md:py-28"
        style={{background:'linear-gradient(160deg,#0a1a14 0%,#163d2b 55%,#0f2a1e 100%)'}}>
        <div className="absolute inset-0 pointer-events-none"
          style={{backgroundImage:'radial-gradient(circle at 80% 40%,rgba(61,158,107,.15) 0%,transparent 60%)'}}/>
        <div className="absolute inset-0 opacity-[0.025]"
          style={{backgroundImage:'linear-gradient(rgba(96,191,138,1) 1px,transparent 1px),linear-gradient(90deg,rgba(96,191,138,1) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>

        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 shrink-0" style={{background:'rgba(232,184,48,.6)'}}/>
              <span className="text-[11px] font-semibold uppercase tracking-[.2em]" style={{color:'#d4a017'}}>Clinical Specialities</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-5 leading-[1.06] tracking-tight">
              Expert Care Across<br/><em className="italic" style={{color:'#96d9b0'}}>Every Discipline</em>
            </h1>
            <p className="text-[15px] sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8" style={{color:'rgba(255,255,255,.55)'}}>
              Every patient receives a personalised treatment plan from internationally trained specialists — supported by our full concierge team from first inquiry to final recovery.
            </p>
            <div className="flex flex-wrap gap-2">
              {specialities.map(s=>(
                <a key={s.id} href={`#${s.id}`}
                  className="text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border transition-all hover:bg-white hover:text-[#0f2a1e]"
                  style={{color:'#96d9b0',borderColor:'rgba(96,191,138,.3)',background:'rgba(30,85,56,.5)'}}>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none" style={{display:'block'}}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#fdf9f4"/>
          </svg>
        </div>
      </section>

      {/* ── STICKY NAV ───────────────────────────────────────── */}
      <div className="sticky top-[68px] z-40 scrollbar-hide overflow-x-auto"
        style={{background:'rgba(253,249,244,.97)',backdropFilter:'blur(12px)',borderBottom:'1px solid #ede9e3',boxShadow:'0 2px 12px rgba(30,85,56,.06)'}}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-1 py-2.5 whitespace-nowrap">
            {specialities.map(s=>(
              <a key={s.id} href={`#${s.id}`}
                className="text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-2 rounded-lg transition-all hover:text-[#1e5538] hover:bg-[#edfaf3] shrink-0"
                style={{color:'#787168'}}>
                {s.name.split(' ')[0]}
              </a>
            ))}
            <div className="ml-auto flex gap-2 shrink-0 pl-3 border-l" style={{borderColor:'#ede9e3'}}>
              <a href={waURL()} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-semibold text-white px-3 py-2 rounded-full"
                style={{background:'#25d366'}}>
                <WaIcon size="sm"/> WhatsApp
              </a>
              <Link to="/contact" className="text-[11px] font-semibold text-white px-4 py-2 rounded-full" style={{background:'#1e5538'}}>
                Consult
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── SPECIALITY SECTIONS ──────────────────────────────── */}
      <div className="py-10 sm:py-14 md:py-16" style={{background:'#fdf9f4'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="space-y-10 sm:space-y-14 md:space-y-16">
            {specialities.map((spec,i)=>{
              const waMsg = `Hi! I'd like to learn more about ${spec.name} treatment at your partner hospitals in India.`;
              const clinicalPoints = whyIndia[spec.id] || spec.benefits;
              const meta = clinicalMeta[spec.id];
              const voice = patientVoice[spec.id] || '"The specialist and the care team were extraordinary."';
              return (
                <motion.div key={spec.id} id={spec.id}
                  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45}}
                  className="scroll-mt-28 rounded-2xl sm:rounded-3xl overflow-hidden"
                  style={{background:'#fff',border:'1px solid #e8e2da',boxShadow:'0 4px 24px rgba(15,42,30,.05)'}}>

                  {/* Top bar */}
                  <div className="h-1.5 w-full"
                    style={{background:spec.discount?'linear-gradient(90deg,#d4a017,#e8b830)':'linear-gradient(90deg,#1e5538,#3d9e6b)'}}/>

                  {/* Header */}
                  <div className="p-5 sm:p-7 md:p-10"
                    style={{background:'linear-gradient(135deg,#fdf9f4,#f5faf7)',borderBottom:'1px solid #e8e2da'}}>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 md:gap-8">
                      <div className="flex items-center gap-4 sm:block">
                        <span className="text-4xl sm:text-5xl shrink-0">{emojis[spec.id]||'🏥'}</span>
                        {spec.discount && (
                          <div className="sm:hidden px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex"
                            style={{background:'#fef9e7',color:'#b8860b',border:'1px solid rgba(184,134,11,.2)'}}>
                            50% Off Health Checks
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h2 className="font-serif text-2xl sm:text-3xl" style={{color:'#0f2a1e'}}>{spec.name}</h2>
                          {spec.discount && (
                            <div className="hidden sm:inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                              style={{background:'#fef9e7',color:'#b8860b',border:'1px solid rgba(184,134,11,.2)'}}>
                              50% Off Health Checks
                            </div>
                          )}
                        </div>
                        <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{color:'#5c5750'}}>{spec.overview}</p>
                      </div>
                      <div className="flex sm:flex-col gap-2.5 sm:gap-3 shrink-0">
                        <a href={waURL(waMsg)} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-[13px] sm:text-sm font-semibold text-white px-4 sm:px-5 py-3 rounded-full transition-all hover:brightness-110 flex-1 sm:flex-none"
                          style={{background:'#25d366',boxShadow:'0 2px 10px rgba(37,211,102,.3)'}}>
                          <WaIcon/> WhatsApp
                        </a>
                        <Link to="/contact"
                          className="flex items-center justify-center text-[13px] sm:text-sm font-semibold text-white px-4 sm:px-5 py-3 rounded-full transition-all hover:brightness-110 flex-1 sm:flex-none"
                          style={{background:'#1e5538',boxShadow:'0 2px 10px rgba(30,85,56,.25)'}}>
                          Consult Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-7 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

                      {/* Left — treatments + clinical strengths */}
                      <div className="lg:col-span-3 space-y-7 sm:space-y-8">
                        {/* Procedures */}
                        <div>
                          <h3 className="text-[11px] font-semibold uppercase tracking-[.18em] mb-4 sm:mb-5" style={{color:'#286847'}}>
                            Procedures & Treatments
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                            {spec.treatments.map((t,k)=>(
                              <div key={k} className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl"
                                style={{background:'#faf8f5',border:'1px solid #ede9e3'}}>
                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{background:'#2d7a52'}}/>
                                <span className="text-[13px] sm:text-sm font-medium" style={{color:'#2e2b27'}}>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Clinical strengths */}
                        <div>
                          <h3 className="text-[11px] font-semibold uppercase tracking-[.18em] mb-4 sm:mb-5" style={{color:'#286847'}}>
                            Our Clinical Strengths
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                            {clinicalPoints.map((b,j)=>(
                              <div key={j} className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl"
                                style={{background:'#faf8f5',border:'1px solid #ede9e3'}}>
                                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                  style={{background:'#edfaf3',border:'1px solid #d0f0e0'}}>
                                  <CheckCircle2 className="h-3 w-3" style={{color:'#286847'}}/>
                                </div>
                                <span className="text-[13px] leading-relaxed" style={{color:'#44403a'}}>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right — clinical sidebar, zero pricing */}
                      <div className="lg:col-span-2 space-y-4">

                        {/* Success rate */}
                        <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #e8e2da'}}>
                          <div className="px-5 sm:px-6 py-4 flex items-center gap-3"
                            style={{background:'linear-gradient(135deg,#0f2a1e,#1e5538)'}}>
                            <Award className="h-5 w-5 shrink-0" style={{color:'#e8b830'}}/>
                            <p className="text-[11px] font-semibold uppercase tracking-[.18em]" style={{color:'#96d9b0'}}>
                              Clinical Outcomes
                            </p>
                          </div>
                          <div className="p-5 sm:p-6 space-y-3" style={{background:'#fff'}}>
                            <div className="text-center py-4 rounded-xl" style={{background:'#edfaf3',border:'1px solid #d0f0e0'}}>
                              <p className="font-serif text-4xl sm:text-5xl mb-1" style={{color:'#1e5538'}}>{spec.successRate}%</p>
                              <p className="text-[11px] font-semibold uppercase tracking-wider" style={{color:'#286847'}}>Success Rate</p>
                              <p className="text-[11px] mt-1" style={{color:'#968d83'}}>at JCI-accredited partner hospitals</p>
                            </div>

                            {/* Clinical meta */}
                            {meta && (
                              <div className="space-y-2.5">
                                <div className="flex items-start gap-3 p-3 rounded-xl" style={{background:'#faf8f5',border:'1px solid #ede9e3'}}>
                                  <Clock className="h-4 w-4 shrink-0 mt-0.5" style={{color:'#286847'}}/>
                                  <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{color:'#968d83'}}>Avg. Discharge</p>
                                    <p className="text-[13px] font-semibold" style={{color:'#1c1a18'}}>{meta.discharge}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-xl" style={{background:'#faf8f5',border:'1px solid #ede9e3'}}>
                                  <Users className="h-4 w-4 shrink-0 mt-0.5" style={{color:'#286847'}}/>
                                  <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{color:'#968d83'}}>Care Team</p>
                                    <p className="text-[12px] leading-snug" style={{color:'#44403a'}}>{meta.team}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-xl" style={{background:'#faf8f5',border:'1px solid #ede9e3'}}>
                                  <Shield className="h-4 w-4 shrink-0 mt-0.5" style={{color:'#286847'}}/>
                                  <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{color:'#968d83'}}>Languages</p>
                                    <p className="text-[12px] leading-snug" style={{color:'#44403a'}}>{meta.language}</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Patient voice */}
                        <div className="rounded-2xl p-4 sm:p-5" style={{background:'#faf8f5',border:'1px solid #ede9e3'}}>
                          <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_,k)=><Star key={k} className="h-3.5 w-3.5 fill-current" style={{color:'#d4a017'}}/>)}
                          </div>
                          <p className="text-[13px] italic leading-relaxed mb-3" style={{color:'#5c5750'}}>{voice}</p>
                          <p className="text-[11px] font-semibold" style={{color:'#968d83'}}>— Verified LukmanGlobal Patient</p>
                        </div>

                        {/* CTA stack */}
                        <div className="space-y-2.5 sm:space-y-3">
                          <Link to="/contact"
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:brightness-110"
                            style={{background:'linear-gradient(135deg,#1e5538,#286847)',boxShadow:'0 4px 16px rgba(30,85,56,.3)'}}>
                            Get Free Consultation <ArrowRight className="h-4 w-4"/>
                          </Link>
                          <a href={waURL(waMsg)} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:brightness-110"
                            style={{background:'#25d366',boxShadow:'0 2px 12px rgba(37,211,102,.25)'}}>
                            <WaIcon/> Chat on WhatsApp
                          </a>
                          <a href="tel:+919876543210"
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:shadow-md"
                            style={{background:'#fff',border:'1.5px solid #e8e2da',color:'#44403a'}}>
                            <Phone className="h-4 w-4" style={{color:'#286847'}}/> Call Us Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MORE SERVICES ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20 pb-24 sm:pb-20" style={{background:'#0f2a1e',borderTop:'1px solid rgba(255,255,255,.06)'}}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="h-px w-8" style={{background:'rgba(232,184,48,.5)'}}/>
              <span className="text-[11px] font-semibold uppercase tracking-[.2em]" style={{color:'#d4a017'}}>Beyond Our Core Specialities</span>
              <div className="h-px w-8" style={{background:'rgba(232,184,48,.5)'}}/>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white mb-2">More Disciplines We Cover</h2>
            <p className="text-[13px] sm:text-sm" style={{color:'#96d9b0'}}>Every major discipline, across 150+ partner hospitals and specialists.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {additionalServices.map((s,i)=>(
              <motion.div key={s.id} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*.04}}
                className="p-4 sm:p-5 rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
                style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)'}}>
                <p className="font-semibold text-[13px] sm:text-sm text-white mb-1 leading-snug">{s.name}</p>
                <p className="text-[11px] leading-relaxed" style={{color:'#96d9b0'}}>{s.treatments.slice(0,2).join(' · ')}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <Link to="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-full transition-all hover:brightness-110 text-[#0f2a1e]"
              style={{background:'#fff',boxShadow:'0 4px 20px rgba(0,0,0,.2)'}}>
              Speak to a Specialist <ArrowRight className="h-4 w-4"/>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
