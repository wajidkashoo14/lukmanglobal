import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle2, 
  ArrowRight, 
  Quote, 
  User, 
  MapPin, 
  Stethoscope, 
  Calendar,
  MessageSquare,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

// Stories data remains the same...
const stories = [
  {
    id: 1,
    patientName: "Sarah M.",
    country: "Nigeria",
    condition: "Stage III Breast Cancer",
    treatment: "Immunotherapy & Robotic Surgery",
    hospital: "Max Healthcare, New Delhi",
    doctor: "Dr. Geeta K.",
    journey: "Sarah was diagnosed with advanced breast cancer and was seeking treatment options that were unavailable locally.",
    challenge: "Metastatic growth requiring precision oncology and advanced surgical intervention.",
    outcome: "After 6 months of targeted therapy, Sarah is now in complete remission. Her recovery was 40% faster.",
    quote: "The care I received in India wasn't just medical; it was personal. The doctors treated me like family.",
    date: "March 2024"
  },
  // ... rest of your stories
];

export default function SuccessStories() {
  return (
    <>
      <SEO 
        title="Patient Success Stories - Real Medical Journeys" 
        description="Read inspiring stories of patients from across the globe who found healing and hope through medical treatment in India."
        keywords="medical success stories, patient recovery india, cancer survivor stories, orthopedic surgery results"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-12 md:py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
               Healing Beyond Borders
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Patient Success Stories
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              Every patient journey is a testament to the power of advanced medicine and human resilience. Discover how we've helped thousands find the right care.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="space-y-16 md:space-y-32">
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col lg:items-center gap-8 md:gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Visuals / Image Placeholder */}
                <div className="w-full lg:w-1/2">
                   <div className="relative group">
                      <div className="aspect-video md:aspect-[4/3] bg-slate-100 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl md:shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                         <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-400">
                            <div className="text-center p-6 md:p-10">
                               <HeartPulse className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 opacity-20" />
                               <p className="font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">Patient Journey Visual</p>
                            </div>
                         </div>
                         
                         {/* Floating Info Card on Image */}
                         <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/20 shadow-lg">
                            <div className="flex items-center justify-between gap-4">
                               <div>
                                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-0.5 md:mb-1">Status</p>
                                  <p className="text-sm md:text-lg font-extrabold text-slate-900">Post-Treatment Recovery</p>
                               </div>
                               <div className="flex -space-x-2 md:-space-x-3 shrink-0">
                                  {[1,2,3].map(j => (
                                    <div key={j} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                                      {j === 3 ? '+9' : <User className="h-3 w-3 md:h-4 md:w-4" />}
                                    </div>
                                  ))}
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                   </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                       <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-slate-200 flex items-center">
                          <MapPin className="h-3 w-3 mr-1.5 text-blue-600" /> {story.country}
                       </span>
                       <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-[9px] md:text-[10px] font-bold uppercase tracking-widest flex items-center">
                          <CheckCircle2 className="h-3 w-3 mr-1.5" /> Verified Outcome
                       </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {story.patientName}'s Journey: <span className="text-slate-500">{story.condition}</span>
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 italic relative group transition-all">
                       <Quote className="h-6 w-6 md:h-8 md:w-8 text-blue-200 absolute -top-2 -left-2 md:-top-3 md:-left-3" />
                       <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed relative z-10">
                          "{story.quote}"
                       </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                       <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Treatment Received</p>
                          <p className="text-xs md:text-sm font-bold text-slate-900">{story.treatment}</p>
                       </div>
                       <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Primary Hospital</p>
                          <p className="text-xs md:text-sm font-bold text-slate-900">{story.hospital}</p>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">The Medical Challenge</p>
                          <p className="text-slate-500 font-medium leading-relaxed text-sm">
                             {story.challenge}
                          </p>
                       </div>
                       <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">The Outcome</p>
                          <p className="text-slate-500 font-medium leading-relaxed text-sm">
                             {story.outcome}
                          </p>
                       </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-6 items-center justify-between">
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <Stethoscope className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Leading Specialist</p>
                            <p className="text-sm font-bold text-slate-900">{story.doctor}</p>
                        </div>
                      </div>
                      <Button asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-12 text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-100">
                        <Link to="/contact">Similar Case Inquiry <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
                      </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-blue-300 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10">
                  Private & Confidential
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 md:mb-8">Ready to write your own success story?</h2>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-8 md:mb-10">
                 Our medical coordinators are standing by to review your case and provide expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 h-14 px-10 rounded-full font-bold uppercase tracking-widest text-xs">
                  <Link to="/contact">Get Free Opinion</Link>
                </Button>
                <div className="flex items-center text-slate-400 shrink-0">
                  <ShieldCheck className="h-5 w-5 mr-3 text-blue-500" />
                  <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">HIPAA Protected</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 backdrop-blur-sm">
               <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 tracking-tight">Recent Patient Feedback</h3>
               <div className="space-y-6 md:space-y-8">
                  {[
                    "Response from team was very fast. Multiple options within 24 hours.",
                    "The medical visa process was handled very professionally.",
                    "The local coordinator made sure we never felt alone."
                  ].map((text, idx) => (
                    <div key={idx} className="flex gap-4">
                       <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-emerald-500 shrink-0" />
                       <p className="text-sm md:text-base text-slate-300 font-medium italic leading-relaxed">{text}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}