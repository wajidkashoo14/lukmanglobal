import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { specialities, hospitals } from '@/data/medical';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  TrendingUp, 
  Users, 
  Search, 
  ChevronRight,
  Stethoscope,
  Activity,
  HeartPulse,
  Weight,
  Eye,
  Smile,
  Phone,
  Building2,
  MapPin
} from 'lucide-react';
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

export default function Home() {
  return (
    <>
      <SEO 
        title="Leading Medical Tourism in India" 
        description="Vaidam India connects you with India's best hospitals for Oncology, Orthopaedics, IVF and more. Get free quotes and expert guidance for your medical journey."
        keywords="medical tourism India, best hospitals in India, oncology treatment india, affordable surgery india"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left items-center lg:items-start"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span> Trusted Medical Partner
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                World-Class Healthcare, <br className="hidden sm:block"/>
                <span className="text-blue-600 italic font-medium">Made Accessible.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-500 max-w-xl">
                Connect with India's top JCI-accredited hospitals and surgeons. Save up to 70% on medical costs with comprehensive concierge support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-base font-bold rounded-full shadow-lg shadow-blue-200 uppercase tracking-widest w-full sm:w-auto">
                  Find Best Hospitals <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full border-slate-200 hover:bg-slate-50 uppercase tracking-widest w-full sm:w-auto">
                  View Treatments
                </Button>
              </div>

              {/* Responsive Stats Bar */}
              <div className="grid grid-cols-3 gap-4 md:gap-10 pt-6 w-full border-t border-slate-200 lg:border-none mt-8 lg:mt-0">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">5000+</span>
                  <span className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-wider font-bold text-center lg:text-left">Patients Assisted</span>
                </div>
                <div className="flex flex-col items-center lg:items-start border-x border-slate-200 px-4">
                  <span className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">150+</span>
                  <span className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-wider font-bold text-center lg:text-left">Partner Hospitals</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">24/7</span>
                  <span className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-wider font-bold text-center lg:text-left">Care Support</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative mt-8 lg:mt-0"
            >
              <div className="w-full bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-slate-100 shadow-2xl shadow-slate-200/60 relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 md:mb-8 tracking-tight">Get a Free Medical Opinion</h2>
                <div className="space-y-5 md:space-y-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" placeholder="e.g. Robert Smith" className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Treatment</label>
                      <select className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-blue-500 font-medium appearance-none">
                        <option>Oncology</option>
                        <option>Orthopaedic</option>
                        <option>IVF</option>
                        <option>Cardiac</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                      <input type="tel" placeholder="+1 (555) 000" className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-blue-500 font-medium" />
                    </div>
                  </div>
                  <Button className="w-full h-14 md:h-16 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-base shadow-xl shadow-emerald-200/50 transition-all mt-4 uppercase tracking-widest">
                    Request Consultation
                  </Button>
                  <p className="text-center text-[10px] text-slate-400 mt-6 px-4 leading-relaxed font-medium">
                    By submitting, you agree to our Terms & Privacy Policy. Your data is protected by HIPAA health standards.
                  </p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-60 md:h-60 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-600">Treatments</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Browse Medical Specialities</p>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600">
               Providing world-class care across 20+ departments with specialized medical experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {specialities.map((spec, i) => {
              const Icon = icons[spec.icon] || Activity;
              return (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-slate-100 rounded-3xl transition-all hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-2 bg-white overflow-hidden group">
                    <CardHeader className="p-6 md:p-8">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                        <Icon className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">{spec.name}</CardTitle>
                      <CardDescription className="text-sm md:text-base text-slate-500 mt-2 leading-relaxed line-clamp-3">{spec.overview}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8 pt-0">
                      <ul className="space-y-3 mb-8">
                        {spec.treatments.slice(0, 3).map(t => (
                          <li key={t} className="flex items-center text-sm font-semibold text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 shrink-0"></span> {t}
                          </li>
                        ))}
                      </ul>
                      <Button variant="ghost" className="p-0 text-blue-600 hover:text-blue-700 hover:bg-transparent font-bold uppercase tracking-widest text-xs h-fit" asChild>
                         <Link to="/specialties" className="flex items-center">Explore More <ChevronRight className="ml-1 h-3 w-3" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hospital Network */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
                <div className="max-w-2xl text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 shadow-sm">
                       Premier Network
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">India's Top Accredited Hospitals</h2>
                </div>
                <Button asChild variant="ghost" className="mt-6 md:mt-0 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors self-center md:self-auto">
                    <Link to="/hospitals" className="flex items-center">Explore Network <ChevronRight className="ml-2 h-3.5 w-3.5" /></Link>
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {hospitals.map(hosp => (
                    <Card key={hosp.id} className="bg-white border-slate-100 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 group">
                        <CardHeader className="p-8 md:p-10 pb-4">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <div className="flex items-center bg-slate-50 px-2.5 py-1 rounded-lg text-emerald-600 text-[10px] font-bold uppercase tracking-widest border border-slate-100">
                                    <ShieldCheck className="h-3 w-3 mr-1.5" /> JCI
                                </div>
                            </div>
                            <CardTitle className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">{hosp.name}</CardTitle>
                            <CardDescription className="flex items-center text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest italic leading-none"><MapPin className="h-3 w-3 mr-2 text-blue-600 shrink-0" /> {hosp.location}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 md:p-10 pt-4">
                            <p className="text-sm text-slate-500 font-medium mb-8 line-clamp-2 leading-relaxed">{hosp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {hosp.specialties.slice(0, 3).map(s => (
                                    <span key={s} className="bg-slate-50 border border-slate-100 text-slate-400 px-3 py-1.5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-tight">{s}</span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose India - Improved Grid */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="order-2 lg:order-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                          {[
                              { title: 'Affordable Care', desc: 'Medical procedures at 30-70% lower costs than USA or UK without compromising quality.', icon: Users },
                              { title: 'World-Class Doctors', desc: 'Highly skilled surgeons with significant international training and research experience.', icon: Activity },
                              { title: 'Advanced Tech', desc: 'Access to robotic surgery, proton therapy, and the latest precision genomics.', icon: TrendingUp },
                              { title: 'No Waiting', desc: 'Get immediate attention for critical surgeries and specialized treatments.', icon: CheckCircle2 },
                          ].map((item, i) => (
                              <div key={i} className="flex flex-col group text-center sm:text-left items-center sm:items-start">
                                  <div className="mb-5 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"><item.icon className="h-6 w-6" /></div>
                                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="order-1 lg:order-2 text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                          Global Hub
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight tracking-tight">Why Choose India for Your Medical Treatment?</h3>
                      <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-10 leading-relaxed font-medium">
                          India has emerged as the global hub for medical tourism, combining cutting-edge technology with traditional hospitality. Patients from across the globe choose India for complex transplants, cardiac surgeries, and oncology treatments.
                      </p>
                      <Button asChild className="bg-blue-600 h-14 px-10 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-blue-100 w-full sm:w-auto">
                        <Link to="/success-stories">Read Success Stories</Link>
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      {/* Process Section - Stacked for Mobile */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-10">
            <div className="text-center mb-12 md:mb-20">
                <h2 className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4">Our Workflow</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Patient Journey Seamlessly Handled</h3>
            </div>
            
            <div className="relative">
                {/* Visual Connector for Desktop */}
                <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-white/10 -z-0"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-6">
                    {[
                        { step: '01', title: 'Submit Query', desc: 'Share your medical reports and requirements with us via our secure form.' },
                        { step: '02', title: 'Free Opinion', desc: 'Get expert opinion and quotes from multiple top-tier hospitals within 24-48 hours.' },
                        { step: '03', title: 'Plan Travel', desc: 'We assist with medical visa, flight bookings, and local logistics for a smooth stay.' },
                        { step: '04', title: 'Treatment', desc: 'Get personalized care at the hospital with a dedicated coordinator by your side.' },
                        { step: '05', title: 'Follow-up', desc: 'Comprehensive post-operative care and tele-consultation after you return home.' },
                    ].map((s, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xl md:text-2xl mb-6 md:mb-8 group-hover:bg-blue-600 transition-all duration-500 shadow-xl group-hover:shadow-blue-500/20">
                                <span className="text-blue-400 group-hover:text-white">{s.step}</span>
                            </div>
                            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-tight">{s.title}</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium px-4 sm:px-0">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container relative mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-6 md:text-5xl">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Connect with our patient care experts today and get a free, no-obligation medical plan tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 w-full sm:w-auto h-14 px-10 text-lg font-bold">
                    <Link to="/contact">Request Callback</Link>
                </Button>
                <div className="flex items-center text-white">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                        <p className="text-[10px] uppercase tracking-wider font-semibold opacity-80">Call Us Anytime</p>
                        <p className="text-lg md:text-xl font-bold">+91-1234567890</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}