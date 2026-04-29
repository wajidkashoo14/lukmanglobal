import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { specialities, hospitals, additionalServices } from '@/data/medical';
import {
  ArrowRight, CheckCircle2, ShieldCheck, Star, TrendingUp, Users,
  ChevronRight, Stethoscope, Activity, HeartPulse, Weight, Eye, Smile,
  Phone, Building2, MapPin, MessageCircle, Zap, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const WHATSAPP_NUMBER = '1234567890';
const WHATSAPP_MSG = encodeURIComponent('Hello! I would like a free medical quote.');

const icons: Record<string, any> = {
  Activity, Stethoscope, Smile, Weight, HeartPulse, Eye,
  Zap, Search, Shield: ShieldCheck,
};

export default function Home() {
  return (
    <>
      <SEO
        title="LukmanGlobal – Medical Tourism India | Best Hospitals, Affordable Treatment"
        description="LukmanGlobal connects international patients with India's top JCI-accredited hospitals. Specialties: Spine, Oncology, IVF, Cosmetic, Gynaecology, Weight Loss, Pain Management, Health Packages. Save up to 70% on costs. Free quote & accommodation support."
        keywords="medical tourism India, best hospitals India, spine surgery India, cancer treatment India, IVF India, cosmetic surgery India, gynaecology India, weight loss surgery India, pain management India, health checkup India, affordable treatment India, LukmanGlobal"
      />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl shadow-green-500/40 transition-all hover:scale-105 font-bold text-sm"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp Us
      </a>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 40%)'}}></div>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span> 5000+ Patients Helped Worldwide
              </div>
              <h1 className="text-4xl font-extrabold text-white leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                World-Class Healthcare<br className="hidden sm:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> at Indian Prices.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-xl">
                India's top JCI-accredited hospitals. Expert care for Spine, Cancer, IVF, Cosmetic Surgery & more. Save up to <strong className="text-white">70% on costs</strong> — with free accommodation support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
                <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-400 h-14 px-8 text-base font-bold rounded-full shadow-lg shadow-blue-500/30 w-full sm:w-auto">
                  <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 h-14 px-8 bg-green-500 hover:bg-green-400 text-white text-base font-bold rounded-full shadow-lg shadow-green-500/30 w-full sm:w-auto transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Now
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 w-full border-t border-white/10 mt-4">
                {[['5000+','Patients Helped'],['150+','Partner Hospitals'],['24/7','Expert Support']].map(([v,l]) => (
                  <div key={l} className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl md:text-3xl font-bold text-white">{v}</span>
                    <span className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-wider font-semibold text-center lg:text-left mt-1">{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 mt-8 lg:mt-0"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Get a Free Medical Opinion</h2>
                <p className="text-slate-400 text-sm mb-6">Response within 24 hours — no charges, ever.</p>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Full Name" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all" />
                  <input type="tel" placeholder="WhatsApp / Phone Number" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all" />
                  <select className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all appearance-none">
                    <option value="" className="text-slate-900">Select Treatment</option>
                    {specialities.map(s => <option key={s.id} value={s.id} className="text-slate-900">{s.name}</option>)}
                  </select>
                  <textarea placeholder="Briefly describe your condition (optional)" rows={3} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all resize-none"></textarea>
                  <Button className="w-full h-14 bg-blue-500 hover:bg-blue-400 text-white rounded-2xl font-bold text-base shadow-xl shadow-blue-500/30 transition-all">
                    Request Free Consultation
                  </Button>
                  <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <ShieldCheck className="h-3.5 w-3.5 text-green-400" /> HIPAA Secure
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-400" /> Zero Charges
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Star className="h-3.5 w-3.5 text-yellow-400" /> 4.9/5 Rating
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-center">
          <span className="text-2xl">🎉</span>
          <p className="font-bold text-base md:text-lg">
            LIMITED OFFER: Get <strong>50% OFF</strong> on all Preventive Health & Cancer Screening Packages!
          </p>
          <Button asChild size="sm" className="bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-full px-6 shrink-0">
            <Link to="/specialties#health-packages">Claim Now</Link>
          </Button>
        </div>
      </section>

      {/* Key Specialities Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Our Specialities</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              9 Core Medical Specialities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-500">
              Expert care across India's most sought-after treatments — all at a fraction of Western costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialities.map((spec, i) => {
              const Icon = icons[spec.icon] || Activity;
              return (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link to={`/specialties#${spec.id}`} className="block h-full group">
                    <div className="h-full border border-slate-100 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1 bg-white transition-all duration-300 relative overflow-hidden">
                      {spec.discount && (
                        <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                          50% OFF
                        </div>
                      )}
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{spec.name}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-5">{spec.overview}</p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <div>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">India Cost</p>
                          <p className="text-sm font-bold text-emerald-600">{spec.avgCostIndia}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Abroad Cost</p>
                          <p className="text-sm font-bold text-slate-400 line-through">{spec.avgCostAbroad}</p>
                        </div>
                        <span className="flex items-center text-[10px] font-bold text-blue-600 group-hover:text-blue-700 uppercase tracking-widest">
                          Details <ChevronRight className="ml-0.5 h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accommodation Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 10% 50%, white 0%, transparent 60%)'}}></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 border border-white/30 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                🏨 Accommodation Service
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Comfortable Stay for Every Patient & Family
              </h2>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6">
                We provide fully managed accommodation near top hospitals at <strong className="text-white">reasonable rates</strong> — including furnished apartments, guest houses, and hotel rooms for patients and their attendants.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Near-hospital accommodation','Furnished apartments & guest houses','Daily meals arrangement (optional)','24/7 concierge support','Airport to hospital transfers','Family companion rooms'].map(item => (
                  <li key={item} className="flex items-center text-sm font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-green-300 mr-3 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white mb-4">Accommodation Options</h3>
              {[
                { type: 'Budget Guest House', price: '₹800–1,500/night', note: 'Near hospital, basic amenities' },
                { type: 'Serviced Apartment', price: '₹2,000–4,000/night', note: 'Kitchen, TV, housekeeping' },
                { type: 'Premium Hotel (Hospital Partner)', price: '₹4,500–8,000/night', note: 'Hospital shuttle, doctor access' },
              ].map(opt => (
                <div key={opt.type} className="flex items-start justify-between py-4 border-b border-white/10 last:border-0">
                  <div>
                    <p className="font-bold text-white text-sm">{opt.type}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{opt.note}</p>
                  </div>
                  <span className="text-green-300 font-bold text-sm whitespace-nowrap ml-4">{opt.price}</span>
                </div>
              ))}
              <Button asChild className="w-full mt-6 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-2xl h-12">
                <Link to="/contact">Book Accommodation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Network */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Premier Network</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">India's Top Accredited Hospitals</h2>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600">
              <Link to="/hospitals" className="flex items-center gap-1">View All Hospitals <ChevronRight className="h-3.5 w-3.5" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hospitals.map(hosp => (
              <div key={hosp.id} className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Building2 className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="flex items-center gap-1 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    <ShieldCheck className="h-3 w-3" /> {hosp.accreditation}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-1">{hosp.name}</h3>
                <p className="flex items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <MapPin className="h-3 w-3 mr-1.5 text-blue-500" /> {hosp.location} &nbsp;·&nbsp; {hosp.beds} beds
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{hosp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {hosp.specialties.map(s => (
                    <span key={s} className="bg-slate-50 border border-slate-100 text-slate-500 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-tight">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">All Services</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">More Medical Specialities</h2>
            <p className="mt-3 text-slate-500 text-base max-w-2xl mx-auto">Beyond our core 9 specialties, we cover every major medical discipline.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-blue-50 hover:border-blue-200 transition-all group cursor-pointer"
              >
                <p className="font-bold text-slate-700 text-sm group-hover:text-blue-700 leading-snug">{svc.name}</p>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{svc.treatments.slice(0,2).join(', ')}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why India */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 70% 50%, #3b82f6 0%, transparent 60%)'}}></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Global Hub</span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Why Choose India for Medical Treatment?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                India has emerged as the world's leading medical tourism destination, combining cutting-edge technology with unmatched affordability and traditional hospitality.
              </p>
              <Button asChild className="bg-blue-500 hover:bg-blue-400 h-14 px-10 rounded-full font-bold">
                <Link to="/success-stories">Read Patient Success Stories</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: '60–70% Cost Savings', desc: 'Same world-class procedures at a fraction of US, UK or Australian costs.', icon: TrendingUp },
                { title: 'World-Class Doctors', desc: 'Surgeons trained at Harvard, Mayo Clinic and top international hospitals.', icon: Users },
                { title: 'Zero Waiting Lists', desc: 'Get treatment within days, not months of waiting like in Western systems.', icon: CheckCircle2 },
                { title: 'English-Speaking Staff', desc: 'Seamless communication — coordinators, nurses and doctors speak English.', icon: Star },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-all">
                    <item.icon className="h-5 w-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">How it works</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Your Journey, Seamlessly Handled</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {[
                { step: '01', title: 'Submit Query', desc: 'Share your medical reports via our form or WhatsApp.', icon: '📋' },
                { step: '02', title: 'Free Opinion', desc: 'Get quotes from multiple top hospitals within 24 hrs.', icon: '💬' },
                { step: '03', title: 'Plan Your Stay', desc: 'We help with visa, flights and accommodation booking.', icon: '✈️' },
                { step: '04', title: 'Treatment', desc: 'Receive world-class care with a dedicated coordinator.', icon: '🏥' },
                { step: '05', title: 'Follow-up', desc: 'Post-treatment support and tele-consultation back home.', icon: '❤️' },
              ].map((s, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-3xl bg-blue-50 border-2 border-blue-100 flex flex-col items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shadow-md">
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">{s.step}</span>
                  <h4 className="text-base font-extrabold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with our patient care experts today and get a free, no-obligation medical plan tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 h-14 px-10 font-bold rounded-full shadow-xl w-full sm:w-auto">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 h-14 px-10 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full shadow-xl shadow-green-500/30 w-full sm:w-auto transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp a Doctor
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-blue-200">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-semibold">Or call us: <a href="tel:+911234567890" className="text-white font-bold">+91-1234567890</a></span>
          </div>
        </div>
      </section>
    </>
  );
}
