import SEO from '@/components/SEO';
import { Quote, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { waURL, WaIcon } from '@/components/WaButton';

const stories = [
  { id:1, name:'James O.', country:'United Kingdom', flag:'🇬🇧', condition:'Bilateral Knee Replacement', hospital:'Fortis Memorial, Gurugram', date:'January 2024',
    quote:'I waited 2 years on the NHS list. In India, I was treated within 2 weeks of arriving. My surgeon had performed over 3,000 knee replacements. Life-changing.',
    outcome:'Walking without pain within 3 weeks. 80% cost reduction vs UK private.',
    treatment:'Orthopedics', savings:'Saved $38,000' },
  { id:2, name:'Sarah M.', country:'Nigeria', flag:'🇳🇬', condition:'Stage III Breast Cancer', hospital:'Max Healthcare, New Delhi', date:'March 2024',
    quote:'I chose India not for the cost — I chose it because the oncology team here was demonstrably better. I was right. I am now in complete remission.',
    outcome:'Complete remission after 6-month immunotherapy protocol.',
    treatment:'Oncology', savings:'Saved $62,000' },
  { id:3, name:'Priya & Rajan S.', country:'Mauritius', flag:'🇲🇺', condition:'Unexplained Infertility (5 years)', hospital:'Artemis Hospital, Gurugram', date:'October 2023',
    quote:'After two failed IVF cycles at home, we conceived on our first cycle in India. The embryology lab here operates to a standard I had never seen.',
    outcome:'Healthy baby girl born March 2024. First successful cycle.',
    treatment:'IVF & Fertility', savings:'Saved $18,000' },
  { id:4, name:'Michael T.', country:'United States', flag:'🇺🇸', condition:'L4-L5 Disc Herniation', hospital:'Medanta, Gurugram', date:'July 2024',
    quote:'My surgeon in Houston quoted $110,000. The Medanta spine surgeon had trained at the same institutions. Everything here cost under $8,000. Extraordinary.',
    outcome:'Full activity restored in 6 weeks. Robotic-assisted minimally invasive surgery.',
    treatment:'Spine Surgery', savings:'Saved $104,000' },
  { id:5, name:'Lina W.', country:'Cambodia', flag:'🇰🇭', condition:'Morbid Obesity (BMI 47)', hospital:'Apollo Hospitals, Delhi', date:'May 2024',
    quote:'The LukmanGlobal team arranged everything — visa, accommodation, hospital. All I had to do was show up and trust the process. The results speak for themselves.',
    outcome:'38kg lost in 10 months. Type 2 diabetes went into full remission.',
    treatment:'Weight Loss Surgery', savings:'Saved $29,000' },
  { id:6, name:'Emma K.', country:'Indonesia', flag:'🇮🇩', condition:'Endometriosis & Ovarian Cysts', hospital:'Kokilaben Hospital, Mumbai', date:'February 2024',
    quote:'I was nervous about travelling for surgery. My coordinator was in contact every single day. The laparoscopic team were exceptional.',
    outcome:'Pain-free within 2 weeks. Now expecting her first child.',
    treatment:'Gynaecology', savings:'Saved $22,000' },
];

export default function SuccessStories() {
  return (
    <>
      <SEO
        title="Patient Success Stories – Real Recoveries from USA, UK, Nigeria, Mauritius | LukmanGlobal"
        description="Read real patient stories from USA, UK, Nigeria, Mauritius, Cambodia and Indonesia. Cancer remission, spine surgery, IVF success and more at India's top hospitals."
        keywords="patient success stories India, medical recovery India, cancer survivor India, IVF success India, spine surgery recovery"
      />

      {/* Hero */}
      <section className="bg-[var(--brand-forest)] noise relative overflow-hidden py-16 sm:py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'radial-gradient(circle at 70% 50%, var(--brand-gold) 0%, transparent 55%)'}}/>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 rounded-full text-white/45 text-xs font-medium tracking-wide mb-6">
            Healing Beyond Borders
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-white leading-[1.08] mb-5">
            Stories of<br/><em className="font-serif-italic text-[var(--brand-gold-lt)]">Remarkable Recovery</em>
          </h1>
          <p className="text-sm sm:text-base text-white/40 max-w-xl mx-auto leading-relaxed">
            Real patients. Real outcomes. From the USA, UK, Nigeria, Mauritius, Cambodia and Indonesia — all treated at India's most respected hospitals.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="py-12 sm:py-16 md:py-20 bg-[var(--brand-ivory)] pb-24 md:pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {stories.map((story, i) => (
              <motion.div key={story.id} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}>
                <div className="h-full bg-white border border-[var(--brand-warm)] rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[var(--brand-forest)]/6 transition-all flex flex-col">
                  <div className="h-1.5 w-full" style={{background:'linear-gradient(90deg, var(--brand-forest), var(--brand-gold))'}}/>
                  <div className="p-5 sm:p-7 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{story.flag}</span>
                        <div>
                          <p className="font-bold text-[var(--brand-ink)] text-sm sm:text-base">{story.name}</p>
                          <p className="text-[11px] text-[var(--brand-ink)]/40">{story.country}</p>
                        </div>
                      </div>
                      <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        {story.savings}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[var(--brand-warm)] text-[var(--brand-forest)] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{story.treatment}</span>
                      <span className="text-[11px] text-[var(--brand-ink)]/40 flex items-center gap-1"><MapPin className="h-3 w-3"/> {story.hospital}</span>
                      <span className="text-[11px] text-[var(--brand-ink)]/30 flex items-center gap-1"><Calendar className="h-3 w-3"/> {story.date}</span>
                    </div>

                    {/* Condition */}
                    <p className="text-xs font-semibold text-[var(--brand-ink)]/50 mb-4">
                      <strong className="text-[var(--brand-ink)]/70">Condition:</strong> {story.condition}
                    </p>

                    {/* Quote */}
                    <div className="bg-[var(--brand-warm)] rounded-2xl p-4 sm:p-5 flex-1 mb-4">
                      <Quote className="h-6 w-6 text-[var(--brand-gold)]/50 mb-2"/>
                      <p className="text-xs sm:text-sm text-[var(--brand-ink)]/65 leading-relaxed italic mb-3">"{story.quote}"</p>
                      <div className="border-t border-[var(--brand-warm)] pt-3 mt-3">
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[var(--brand-gold)] font-bold mb-1">Outcome</p>
                        <p className="text-xs sm:text-sm text-[var(--brand-ink)]/60 font-medium leading-snug">{story.outcome}</p>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-2.5 mt-auto">
                      <Link to="/contact"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[var(--brand-forest)] hover:bg-[var(--brand-forest-2)] text-white font-semibold py-2.5 rounded-xl text-xs transition-all">
                        Similar Treatment <ArrowRight className="h-3.5 w-3.5"/>
                      </Link>
                      <a href={waURL(`Hi! I read about ${story.name}'s story and want to enquire about ${story.treatment}.`)} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 bg-[#25d366] hover:bg-green-500 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition-all">
                        <WaIcon size="sm"/> Chat
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="mt-14 bg-[var(--brand-forest)] noise rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:'radial-gradient(circle at 80% 20%, var(--brand-gold) 0%, transparent 60%)'}}/>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3">Begin Your Own Recovery Story</h2>
              <p className="text-white/45 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
                Join thousands of patients from USA, UK, Nigeria, Mauritius and Southeast Asia who found healing at India's finest hospitals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact"
                  className="flex items-center justify-center gap-2 shimmer-gold text-white font-semibold px-8 py-4 rounded-full text-sm w-full sm:w-auto">
                  Get Your Free Medical Plan
                </Link>
                <a href={waURL('Hi! I want to plan my medical treatment in India.')} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all w-full sm:w-auto">
                  <WaIcon size="lg"/> WhatsApp Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
