import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { hospitals } from '@/data/medical';
import { MapPin, Star, ShieldCheck, Building2, ExternalLink, ArrowRight, Activity, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Hospitals() {
  return (
    <>
      <SEO 
        title="Top Hospitals in India for International Patients" 
        description="Connect with India's most prestigious JCI accredited hospitals including Max, Fortis, Medanta, and Apollo. Comprehensive medical care with global standards."
        keywords="best hospitals in india, jci hospitals india, max healthcare, fortis fmri, medanta hospital"
      />

      {/* Header Section */}
      <section className="bg-slate-50 py-12 md:py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
               JCI Accredited
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Partner Hospitals
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              We have partnered with only the highest-rated, internationally accredited hospitals in India to ensure our patients receive the best possible clinical outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Listing Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10">
            {hospitals.map((hosp, i) => (
              <motion.div
                key={hosp.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="flex flex-col md:flex-row h-full overflow-hidden border-slate-100 rounded-[1.5rem] md:rounded-[2rem] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group bg-white">
                  
                  {/* Hospital Icon/Standards Sidebar */}
                  <div className="w-full md:w-48 lg:w-60 bg-slate-50 flex flex-row md:flex-col items-center justify-between md:justify-center p-6 md:p-10 border-b md:border-b-0 md:border-r border-slate-100 group-hover:bg-blue-50 transition-colors">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg shadow-slate-200/50 md:mb-6 group-hover:scale-110 transition-transform">
                      <Building2 className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
                    </div>
                    <div className="text-right md:text-center">
                       <p className="hidden md:block text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mb-2">Standards</p>
                       <div className="flex gap-2 justify-center">
                          <span className="text-[9px] bg-slate-900 text-white px-2 py-1 rounded-lg font-bold tracking-widest uppercase">JCI</span>
                          <span className="text-[9px] bg-slate-900 text-white px-2 py-1 rounded-lg font-bold tracking-widest uppercase">NABH</span>
                       </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <CardContent className="flex-1 p-6 md:p-10">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4 md:mb-6">
                        <div className="flex-1 pr-4">
                          <CardTitle className="text-xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                            {hosp.name}
                          </CardTitle>
                          <div className="flex items-center text-xs md:text-sm font-bold text-slate-400 tracking-wide">
                            <MapPin className="h-3.5 w-3.5 mr-1.5 md:mr-2 text-blue-600 shrink-0" /> {hosp.location}
                          </div>
                        </div>
                        <div className="flex items-center bg-white border border-slate-100 px-2.5 py-1 md:px-3 md:py-1.5 rounded-xl text-yellow-600 text-xs font-bold shadow-sm shrink-0">
                            <Star className="h-3 w-3 mr-1.5 fill-current" /> 4.9
                        </div>
                      </div>
                      
                      <p className="text-sm md:text-base text-slate-500 mb-6 md:mb-8 leading-relaxed font-medium line-clamp-3">
                        {hosp.description}
                      </p>
                      
                      <div className="mb-8 md:mb-10">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Core Strengths</p>
                        <div className="flex flex-wrap gap-2">
                          {hosp.specialties.map(s => (
                            <span key={s} className="bg-white border border-slate-100 text-slate-600 px-3 py-1.5 rounded-xl text-[10px] md:text-[11px] font-bold tracking-tight shadow-sm hover:border-blue-200 transition-colors cursor-default">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Footer Actions */}
                      <div className="mt-auto pt-6 md:pt-8 border-t border-slate-50 flex flex-col sm:flex-row gap-4 items-center justify-between">
                         <div className="flex items-center text-[10px] md:text-xs text-emerald-600 font-bold tracking-widest uppercase">
                            <ShieldCheck className="h-4 w-4 mr-2" /> Global clinical Standards
                         </div>
                         <Button asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 h-11 md:h-12 rounded-full px-8 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-100">
                            <Link to="/contact" className="flex items-center justify-center">Book Inquiry <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
                         </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                  {[
                      { val: '350+', label: 'Hospital Network', desc: 'Largest curated network of accredited hospitals in India.' },
                      { val: '5000+', label: 'Expert Doctors', desc: 'Direct access to the most experienced medical faculty.' },
                      { val: '24/7', label: 'Patient Care', desc: 'Personal coordinators to guide you at every step of your journey.' },
                  ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 group hover:bg-white/10 transition-all duration-300">
                          <h4 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                            {item.val}
                          </h4>
                          <p className="text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-tight">
                            {item.label}
                          </p>
                          <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">
                            {item.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
}