import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#080D14] text-white min-h-screen font-['Plus_Jakarta_Sans',sans-serif] pt-32 pb-24 overflow-hidden relative">
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#E94B3C]/10 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#E94B3C]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-xs font-bold text-[#E94B3C] uppercase tracking-[0.2em]">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Let's build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94B3C] to-[#FF8A7A]">future.</span>
          </h1>
          <p className="text-lg text-slate-400">
            Have questions about our programs, admissions, or placements? Our career counselors are ready to guide you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info (Left) */}
          <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
            <div className="p-8 rounded-3xl bg-[#0F1722] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E94B3C]/10 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#E94B3C]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Campus</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      CADD Centre Perinthalmanna<br />
                      Jubilee Road, Up Hill<br />
                      Perinthalmanna, Kerala 679322
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#E94B3C]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                    <p className="text-slate-400 text-sm">
                      +91 944 600 0000<br />
                      +91 483 273 0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#E94B3C]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-slate-400 text-sm">
                      info@caddpmna.com<br />
                      admissions@caddpmna.com
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <div className="p-8 md:p-10 rounded-3xl bg-[#0F1722] border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#080D14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E94B3C] focus:ring-1 focus:ring-[#E94B3C] transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#080D14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E94B3C] focus:ring-1 focus:ring-[#E94B3C] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-[#080D14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E94B3C] focus:ring-1 focus:ring-[#E94B3C] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-[#080D14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E94B3C] focus:ring-1 focus:ring-[#E94B3C] transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Course of Interest</label>
                  <select className="w-full bg-[#080D14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E94B3C] focus:ring-1 focus:ring-[#E94B3C] transition-all appearance-none" defaultValue="">
                    <option value="" disabled>Select a program</option>
                    <option value="bim">Master Certificate in BIM</option>
                    <option value="interior">Executive Diploma in Interior Design</option>
                    <option value="mep">MEP with BIM Engineering</option>
                    <option value="mechanical">Advanced Mechanical Product Design</option>
                    <option value="other">Other / General Enquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Your Message</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-[#080D14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E94B3C] focus:ring-1 focus:ring-[#E94B3C] transition-all resize-none"
                    placeholder="Tell us about your career goals..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#E94B3C] hover:bg-[#D4382A] text-white px-8 py-4 rounded-xl text-[15px] font-bold inline-flex justify-center items-center gap-2 shadow-[0_8px_24px_rgba(233,75,60,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
