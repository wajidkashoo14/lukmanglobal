import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { specialities, additionalServices } from '@/data/medical';
import { CheckCircle2, ChevronRight, Activity, Stethoscope, Smile, Weight, HeartPulse, Eye, ArrowRight, ShieldCheck, Zap, Search, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const WHATSAPP_NUMBER = '919876543210';

const icons: Record<string, any> = {
  Activity, Stethoscope, Smile, Weight, HeartPulse, Eye, Zap, Search,
  Shield: ShieldCheck, ClipboardCheck: CheckCircle2,
};

export default function Specialties() {
  return (
    <>
      <SEO
        title="Medical Specialties India – Spine, Oncology, IVF, Cosmetic, Gynaecology, Weight Loss | LukmanGlobal"
        description="Explore all 9 core medical specialties: Spine Surgery, Oncology, IVF, Cosmetic Surgery, Gynaecology, Weight Loss, Pain Management, Preventive Health & Cancer Screening. Get free quote & WhatsApp consultation. 50% off health packages."
        keywords="spine surgery India, oncology treatment India, IVF India, cosmetic surgery India, gynaecology India, weight loss surgery India, pain management India, health checkup India, cancer screening India"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Medical Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            9 Core Medical Specialities
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Expert care across India's most-sought treatments at 60–80% lower cost than the USA or UK.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {specialities.map(spec => (
              <a key={spec.id} href={`#${spec.id}`} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all">
                {spec.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Action Bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-4 py-3 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-3 text-sm text-slate-500 shrink-0">
              <span className="font-semibold hidden sm:block">Jump to:</span>
              {specialities.map(spec => (
                <a key={spec.id} href={`#${spec.id}`} className="text-[11px] font-semibold text-slate-500 hover:text-blue-600 whitespace-nowrap px-2 py-1 rounded-lg hover:bg-blue-50 transition-all">
                  {spec.name.split(' ')[0]}
                </a>
              ))}
            </div>
            <div className="flex gap-2 shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full">
                <Link to="/contact">Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-16 md:space-y-24">
            {specialities.map((spec, i) => {
              const Icon = icons[spec.icon] || Activity;
              const waMsg = encodeURIComponent(`Hi! I need information about ${spec.name} treatment. Please help.`);
              return (
                <motion.div
                  key={spec.id}
                  id={spec.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-32"
                >
                  {spec.discount && (
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center py-3 rounded-2xl mb-6 font-bold text-sm">
                      🎉 Special Offer: <strong>50% OFF</strong> on {spec.name} — Limited time!
                    </div>
                  )}

                  <div className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{spec.name}</h2>
                          <p className="text-blue-100 text-base leading-relaxed">{spec.overview}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-2xl text-sm transition-all shadow-lg shadow-green-500/30"
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            WhatsApp Now
                          </a>
                          <Button asChild className="bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-2xl text-sm h-12">
                            <Link to="/contact">Get Free Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Treatments */}
                        <div className="lg:col-span-2">
                          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-5">Treatments & Procedures</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {spec.treatments.map((treatment, k) => (
                              <div key={k} className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl p-4 hover:border-blue-200 hover:shadow-md transition-all group">
                                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform"></div>
                                <span className="text-sm font-semibold text-slate-700">{treatment}</span>
                              </div>
                            ))}
                          </div>

                          {/* Benefits */}
                          <div className="mt-8">
                            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 mb-4">Why choose India?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {spec.benefits.map((benefit, j) => (
                                <div key={j} className="flex items-start gap-3">
                                  <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                  </div>
                                  <span className="text-sm font-medium text-slate-600 leading-relaxed">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Cost Comparison + Actions */}
                        <div className="space-y-5">
                          {/* Cost Comparison Card */}
                          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">Cost Comparison</h3>
                            <div className="space-y-4">
                              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-1">India (LukmanGlobal)</p>
                                <p className="text-2xl font-extrabold text-emerald-700">{spec.avgCostIndia}</p>
                                <p className="text-xs text-emerald-600 mt-1">All-inclusive estimate</p>
                              </div>
                              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">USA / UK / Australia</p>
                                <p className="text-xl font-bold text-slate-400 line-through">{spec.avgCostAbroad}</p>
                                <p className="text-xs text-slate-400 mt-1">Typical cost abroad</p>
                              </div>
                              <div className="bg-blue-600 rounded-xl p-4 text-center">
                                <p className="text-white text-xs font-bold uppercase tracking-wider">You Save Up To</p>
                                <p className="text-white text-3xl font-extrabold mt-1">70%</p>
                              </div>
                            </div>
                          </div>

                          {/* Success Rate */}
                          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-center">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Success Rate</p>
                            <p className="text-4xl font-extrabold text-blue-600">{spec.successRate}%</p>
                            <p className="text-xs text-slate-400 mt-1">At our partner hospitals</p>
                          </div>

                          {/* CTA Buttons */}
                          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl h-12 text-sm">
                            <Link to="/contact">Get Free Quote for {spec.name.split(' ')[0]}</Link>
                          </Button>
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-2xl text-sm transition-all"
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Chat on WhatsApp
                          </a>
                          <a
                            href="tel:+911234567890"
                            className="flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-2xl text-sm transition-all"
                          >
                            <Phone className="w-4 h-4" /> Call Us Now
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
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">More Medical Services</h2>
            <p className="text-slate-500 mt-2">We cover all major medical specialties across India's top hospitals.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map(svc => (
              <div key={svc.id} className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all">
                <h3 className="font-bold text-slate-800 text-sm mb-2">{svc.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{svc.treatments.slice(0,3).join(' • ')}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 font-bold rounded-full h-14 px-10">
              <Link to="/contact">Get Quote for Any Speciality</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
