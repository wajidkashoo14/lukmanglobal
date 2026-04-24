import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { specialities } from '@/data/medical';
import { CheckCircle2, ChevronRight, Activity, Stethoscope, Smile, Weight, HeartPulse, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const icons: Record<string, any> = {
  Activity,
  Stethoscope,
  Smile,
  Weight,
  HeartPulse,
  Eye,
};

export default function Specialties() {
  return (
    <>
      <SEO 
        title="Medical Specialties & Treatments" 
        description="Explore advanced medical treatments in India. Specialized care for Oncology, IVF, Bariatric, Orthopaedic, and more with international standards."
        keywords="oncology india, ivf in india, bariatric surgery india, cosmetic surgery india"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-12 md:py-24 border-b border-slate-100">
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
               Medical Excellence
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Specialized Care
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              India's top hospitals offer a wide range of specialized medical treatments with high success rates and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Detail Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="space-y-20 md:space-y-32">
            {specialities.map((spec, i) => {
              const Icon = icons[spec.icon] || Activity;
              return (
                <motion.div 
                  key={spec.id}
                  id={spec.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
                >
                  {/* Info Sidebar */}
                  <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-28">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 md:mb-8 mx-auto lg:mx-0">
                        <Icon className="h-7 w-7 md:h-8 md:w-8 text-blue-600" />
                      </div>
                      <div className="text-center lg:text-left">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">{spec.name}</h2>
                        <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 md:mb-10 font-medium">
                          {spec.overview}
                        </p>
                      </div>

                      <div className="space-y-6 mb-10">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 text-center lg:text-left">Why choose India?</h3>
                        <ul className="grid grid-cols-1 gap-4">
                          {spec.benefits.map((benefit, j) => (
                            <li key={j} className="flex items-start text-slate-700 group">
                              <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 mr-4 group-hover:bg-emerald-500 transition-colors">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 group-hover:text-white" />
                              </div>
                              <span className="text-sm font-semibold leading-6">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-center lg:justify-start">
                        <Button asChild className="bg-blue-600 hover:bg-blue-700 px-10 h-14 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-blue-100 w-full sm:w-auto">
                           <Link to="/contact">Discuss My Case</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Treatments Grid */}
                  <div className="lg:col-span-7">
                    <div className="bg-slate-50 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-14 border border-slate-100">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 md:mb-10 tracking-tight text-center lg:text-left">Treatments & Procedures</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {spec.treatments.map((treatment, k) => (
                          <Card key={k} className="border border-slate-100 shadow-sm bg-white rounded-2xl group hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                            <CardHeader className="p-4 md:p-6">
                              <CardTitle className="text-sm md:text-base font-bold text-slate-700 flex items-center justify-between">
                                {treatment}
                                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 transition-colors shrink-0 ml-2" />
                              </CardTitle>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                      
                      {/* Quote Box */}
                      <div className="mt-8 md:mt-12 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8">
                        <div className="text-center sm:text-left">
                          <p className="text-sm font-bold text-slate-800 tracking-tight uppercase">Customized Quote</p>
                          <p className="text-xs text-slate-400 mt-1 font-medium tracking-wide">Get a certified cost analysis within 24 hours.</p>
                        </div>
                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full font-bold h-12 px-8 uppercase tracking-widest text-[10px] w-full sm:w-auto">
                          Get Pricing
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Bottom Navigation */}
      <section className="py-16 md:py-20 bg-slate-50 border-t">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 md:mb-12">Quick Links to Specialized Care</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {specialities.map(spec => (
              <Button key={spec.id} variant="secondary" className="rounded-full px-4 md:px-6 bg-white border text-xs md:text-sm font-medium" asChild>
                <a href={`#${spec.id}`}>{spec.name}</a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}