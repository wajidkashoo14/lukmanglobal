import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '../components/ui/input';
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <>
      <SEO 
        title="Contact Us - Free Medical Consultation" 
        description="Get a free medical opinion and treatment plan from India's top doctors. Contact Vaidam India for medical visa assistance and hospitalization guidance."
        keywords="contact vaidam india, medical consultation online, free medical opinion india"
      />

      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-6 sm:px-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
               Support 24/7
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">Contact Our Experts</h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Ready to take the next step towards your recovery? Fill out the form below and our medical coordinators will get back to you within 24 hours.
            </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="space-y-16">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">Global Patient Support</h2>
                  <div className="space-y-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-300">
                        <Phone className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Direct Line</p>
                        <p className="text-xl font-bold text-slate-800 tracking-tight">+91-1234567890</p>
                        <p className="text-sm text-slate-500 font-medium mt-1">Available on WhatsApp & Skype</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-300">
                        <Mail className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Email Desk</p>
                        <p className="text-xl font-bold text-slate-800 tracking-tight">care@vaidam-india.com</p>
                        <p className="text-sm text-slate-500 font-medium mt-1">Average response time: 4 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-300">
                        <MapPin className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Headquarters</p>
                        <p className="text-slate-800 font-bold leading-relaxed tracking-tight">Sector 44, Gurugram, <br/> Haryana - 122003, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">Service Guarantees</h3>
                  <ul className="space-y-5">
                    {[
                      '100% HIPAA Compliant Data',
                      'Zero Service Charges for Patients',
                      'Response within 24-48 Hours',
                      'Direct Medical Visa Support'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-sm font-bold text-slate-600">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {!submitted ? (
                  <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl shadow-slate-200/60 transition-all duration-300 group">
                    <div className="mb-10">
                      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Free Consultation Request</h2>
                      <p className="text-slate-500 font-medium">Connect with top JCI-accredited hospitals in minutes.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                          <Input placeholder="John Doe" required className="h-14 rounded-2xl bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 font-bold" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                          <Input type="email" placeholder="john@example.com" required className="h-14 rounded-2xl bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 font-bold" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Phone Number</label>
                          <Input type="tel" placeholder="+1 234 567 890" required className="h-14 rounded-2xl bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 font-bold" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Specialty</label>
                          <Input placeholder="e.g. Oncology, Heart" required className="h-14 rounded-2xl bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 font-bold" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Medical Case Details</label>
                        <textarea 
                          className="flex min-h-[160px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-bold ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/20 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                          placeholder="Briefly describe your condition or symptoms..."
                          required
                        ></textarea>
                      </div>

                      <div className="flex items-center gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                         <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0" />
                         <p className="text-[10px] text-blue-800 font-bold leading-relaxed tracking-wide">
                            YOUR DATA IS SECURED UNDER HIPAA STANDARDS. WE NEVER SHARE YOUR PRIVATE INFORMATION UNLESS NECESSARY FOR MEDICAL REVIEW.
                         </p>
                      </div>

                      <Button type="submit" className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-extrabold uppercase tracking-[0.2em] text-xs shadow-xl shadow-blue-200/50 flex items-center justify-center gap-3">
                        Submit Request <ArrowRight className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center p-16 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 text-center"
                  >
                    <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mb-10 shadow-lg shadow-emerald-100">
                       <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Request Received!</h2>
                    <p className="text-lg text-slate-500 mb-10 max-w-md font-medium leading-relaxed">
                       Thank you for reaching out. A dedicated patient care manager will contact you via WhatsApp/Email shortly to begin your journey.
                    </p>
                    <div className="space-y-6 w-full max-w-xs mb-10">
                        <div className="flex items-center justify-between text-xs py-4 border-b border-slate-50">
                            <span className="text-slate-400 font-bold uppercase tracking-widest">Case ID</span>
                            <span className="font-bold text-slate-800">#VMD-98421</span>
                        </div>
                        <div className="flex items-center justify-between text-xs py-4 border-b border-slate-50">
                            <span className="text-slate-400 font-bold uppercase tracking-widest">Response Time</span>
                            <span className="font-bold flex items-center text-emerald-600 uppercase tracking-widest">
                                <Clock className="h-3 w-3 mr-2" /> Under 4 Hours
                            </span>
                        </div>
                    </div>
                    <Button variant="ghost" className="text-blue-600 font-bold uppercase tracking-widest text-xs hover:bg-blue-50 px-8 h-12 rounded-full" onClick={() => setSubmitted(false)}>
                        Send Another Query
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto max-w-4xl px-6 sm:px-10">
            <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">General Questions</h2>
            <div className="space-y-6">
                {[
                    { q: "Is there any charge for Vaidam services?", a: "No, Vaidam does not charge patients for its services. We are supported by our partner hospitals, ensuring patients get the best care without any added costs." },
                    { q: "How do I get a medical visa for India?", a: "Once you decide on a hospital, we help you get a Visa Invitation Letter from them. You then apply at your local Indian Embassy. We guide you through the entire paperwork process." },
                    { q: "Can I choose my own doctor?", a: "Yes, we provide profiles of top surgeons in each specialty. You can review their experience and choose who you want to be treated by, or ask our experts for recommendations." }
                ].map((faq, i) => (
                    <Card key={i} className="border border-slate-100 shadow-sm rounded-2xl group hover:border-blue-200 transition-all duration-300">
                        <CardHeader className="p-8">
                            <CardTitle className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">{faq.q}</CardTitle>
                        </CardHeader>
                        <CardContent className="px-8 pb-8 pt-0">
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
