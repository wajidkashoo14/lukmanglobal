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

      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
               Medical Excellence
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">Specialized Care</h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              India's top hospitals offer a wide range of specialized medical treatments with high success rates and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6 sm:px-10">
          <div className="space-y-32">
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
                  className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
                >
                  <div className="lg:col-span-5">
                    <div className="sticky top-28">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">{spec.name}</h2>
                      <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
                        {spec.overview}
                      </p>
                      <div className="space-y-6 mb-10">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Why choose India?</h3>
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
                      <Button asChild className="bg-blue-600 hover:bg-blue-700 px-10 h-14 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-blue-100">
                         <Link to="/contact">Discuss My Case</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7">
                    <div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-14 border border-slate-100">
                      <h3 className="text-2xl font-bold text-slate-800 mb-10 tracking-tight">Treatments & Procedures</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {spec.treatments.map((treatment, k) => (
                          <Card key={k} className="border border-slate-100 shadow-sm bg-white rounded-2xl group hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                            <CardHeader className="p-6">
                              <CardTitle className="text-base font-bold text-slate-700 flex items-center justify-between">
                                {treatment}
                                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                              </CardTitle>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div>
                          <p className="text-sm font-bold text-slate-800 tracking-tight uppercase">Customized Quote</p>
                          <p className="text-xs text-slate-400 mt-1 font-medium tracking-wide">Get a certified cost analysis within 24 hours.</p>
                        </div>
                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full font-bold h-12 px-8 uppercase tracking-widest text-[10px]">Get Pricing</Button>
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
      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-12">Quick Links to Specialized Care</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {specialities.map(spec => (
              <Button key={spec.id} variant="secondary" className="rounded-full px-6 bg-white border" asChild>
                <a href={`#${spec.id}`}>{spec.name}</a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
