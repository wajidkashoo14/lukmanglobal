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
import { Button } from '../components/ui/button';

const stories = [
  {
    id: 1,
    patientName: "Sarah M.",
    country: "Nigeria",
    condition: "Stage III Breast Cancer",
    treatment: "Immunotherapy & Robotic Surgery",
    hospital: "Max Healthcare, New Delhi",
    doctor: "Dr. Geeta K.",
    journey: "Sarah was diagnosed with advanced breast cancer and was seeking treatment options that were unavailable locally. She connected with our team, and within 48 hours, she had a comprehensive plan from three top Indian hospitals.",
    challenge: "Metastatic growth requiring precision oncology and advanced surgical intervention with minimal recovery time.",
    outcome: "After 6 months of targeted therapy and a successful robotic-assisted surgery, Sarah is now in complete remission. Her recovery was 40% faster than traditional methods.",
    quote: "The care I received in India wasn't just medical; it was personal. The doctors treated me like family and the technology was beyond anything I had seen.",
    date: "March 2024"
  },
  {
    id: 2,
    patientName: "Ahmed K.",
    country: "Iraq",
    condition: "Multiple Vertebral Fractures",
    treatment: "Complex Spine Reconstruction",
    hospital: "Fortis Memorial Research Institute, Gurugram",
    doctor: "Dr. Sandeep V.",
    journey: "Ahmed suffered a severe accident leaving him with limited mobility. He arrived in India seeking a second chance at walking.",
    challenge: "Intricate spinal damage requiring multi-level fusion and neuro-monitoring to prevent permanent paralysis.",
    outcome: "A 12-hour surgery performed by a team of neurosurgeons successfully stabilized his spine. Ahmed is currently undergoing physiotherapy and is already walking with minimal support.",
    quote: "They gave me my legs back. I came here in a wheelchair and I'm going home on my feet. Thank you for this miracle.",
    date: "January 2024"
  },
  {
    id: 3,
    patientName: "Elena R.",
    country: "Uzbekistan",
    condition: "Primary Infertility",
    treatment: "Advanced IVF with ICSI",
    hospital: "Artemis Hospital, Gurugram",
    doctor: "Dr. Anjali G.",
    journey: "After multiple failed attempts in her home country, Elena and her husband reached out to us for advanced fertility treatments in India.",
    challenge: "Repeated implantation failures requiring specialized embryo monitoring and hormonal optimization.",
    outcome: "Success on the first attempt using advanced ICSI techniques. Elena recently shared the news of her healthy twin pregnancy.",
    quote: "We had almost lost hope. The transparency and expertise of the fertility specialists in India made all the difference.",
    date: "December 2023"
  }
];

export default function SuccessStories() {
  return (
    <>
      <SEO 
        title="Patient Success Stories - Real Medical Journeys" 
        description="Read inspiring stories of patients from across the globe who found healing and hope through medical treatment in India with Vaidam."
        keywords="medical success stories, patient recovery india, cancer survivor stories, orthopedic surgery results"
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
               Healing Beyond Borders
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">Patient Success Stories</h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Every patient journey is a testament to the power of advanced medicine and human resilience. Discover how we've helped thousands find the right care.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6 sm:px-10">
          <div className="space-y-24">
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row gap-16 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visuals / Image Placeholder */}
                <div className="w-full lg:w-1/2">
                   <div className="relative group">
                      <div className="aspect-[4/3] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                         <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-400">
                            <div className="text-center p-10">
                               <HeartPulse className="h-16 w-16 mx-auto mb-4 opacity-20" />
                               <p className="font-bold uppercase tracking-[0.2em] text-[10px]">Patient Journey Visual Documented</p>
                               <p className="text-xs italic mt-2 opacity-60">Ethically sourced with patient consent</p>
                            </div>
                         </div>
                         {/* In a real app, an actual image would go here */}
                         <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                            <div className="flex items-center justify-between">
                               <div>
                                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">Status Update</p>
                                  <p className="text-lg font-extrabold text-slate-900">Post-Treatment Recovery</p>
                               </div>
                               <div className="flex -space-x-3">
                                  {[1,2,3].map(j => <div key={j} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">{j === 3 ? '+9' : <User className="h-4 w-4" />}</div>)}
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
                   </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                       <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-slate-200 flex items-center">
                          <MapPin className="h-3 w-3 mr-1.5 text-blue-600" /> {story.country}
                       </span>
                       <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center">
                          <CheckCircle2 className="h-3 w-3 mr-1.5" /> High Success Rate
                       </span>
                    </div>
                    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {story.patientName}'s Journey: {story.condition}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic relative group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                       <Quote className="h-8 w-8 text-blue-200 absolute -top-3 -left-3" />
                       <p className="text-lg text-slate-700 font-medium leading-relaxed relative z-10">
                          "{story.quote}"
                       </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Treatment Received</p>
                          <p className="text-sm font-bold text-slate-900">{story.treatment}</p>
                       </div>
                       <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Primary Hospital</p>
                          <p className="text-sm font-bold text-slate-900">{story.hospital}</p>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2">The Medical Challenge</p>
                          <p className="text-slate-500 font-medium leading-relaxed text-sm">
                             {story.challenge}
                          </p>
                       </div>
                       <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">The Outcome</p>
                          <p className="text-slate-500 font-medium leading-relaxed text-sm">
                             {story.outcome}
                          </p>
                       </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                           <Stethoscope className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Leading Specialist</p>
                           <p className="text-sm font-bold text-slate-900">{story.doctor}</p>
                        </div>
                     </div>
                     <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-12 text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-100">
                        <Link to="/contact">Discuss a Similar Case <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
                     </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl px-6 sm:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-blue-300 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10">
                 Private & Confidential
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-8">Ready to write your own success story?</h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                Our medical coordinators are standing by to review your case and provide expert guidance on treatment options in India.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-10 rounded-full font-bold uppercase tracking-widest text-xs">
                  <Link to="/contact">Get a Free Medical Opinion</Link>
                </Button>
                <div className="flex items-center text-slate-400">
                  <ShieldCheck className="h-5 w-5 mr-3 text-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-widest">100% HIPAA Data Protection</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-sm">
               <h3 className="text-2xl font-bold mb-8 tracking-tight">Recent Patient Feedback</h3>
               <div className="space-y-8">
                  {[
                    "Response from Vaidam was very fast. I got multiple hospital options within 24 hours.",
                    "The medical visa process which used to be confusing was handled very professionally.",
                    "The local coordinator in India made sure we never felt alone during our stay."
                  ].map((text, idx) => (
                    <div key={idx} className="flex gap-4">
                       <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                       <p className="text-slate-300 font-medium italic leading-relaxed">{text}</p>
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
