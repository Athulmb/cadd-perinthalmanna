import React from 'react';
import { Globe, Award, CheckCircle2 } from 'lucide-react';

export default function AboutLegacy() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 stagger-container">
          
          {/* Legacy Card */}
          <div className="stagger-item group relative overflow-hidden rounded-[24px] bg-[#080D14] p-8 sm:p-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E94B3C]/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#E94B3C] mb-8 group-hover:scale-110 group-hover:bg-[#E94B3C] group-hover:text-white transition-all duration-300">
                <Globe className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                CADD Centre Legacy & Network
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-10 text-lg">
                Backed by a legacy spanning back to <strong className="text-white">1988</strong>, we bring industry-focused technical training in CAD, engineering, architecture, and design to students and professionals.
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E94B3C] flex items-center justify-center text-white font-black text-lg shadow-[0_0_15px_rgba(233,75,60,0.4)]">
                  '88
                </div>
                <p className="text-sm text-slate-400 font-medium">
                  Empowering learners with industry-relevant skills since 1988.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="stagger-item group relative overflow-hidden rounded-[24px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.05)] p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[rgba(28,37,51,0.10)] flex items-center justify-center text-[#E94B3C] mb-8 group-hover:scale-110 group-hover:bg-[#E94B3C] group-hover:text-white transition-all duration-300 shadow-sm">
                <Award className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1C2533] mb-4">
                Beyond Software Training
              </h3>
              
              <p className="text-[#687282] leading-relaxed mb-10 text-lg">
                Our focus goes beyond simply learning software tools. We help students develop the practical skills, confidence, and domain knowledge needed to prepare for real-world career opportunities.
              </p>

              <div className="pt-6 border-t border-[rgba(28,37,51,0.08)]">
                <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-[rgba(28,37,51,0.05)] shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#E94B3C]" />
                  <span className="text-sm font-bold text-[#1C2533]">Practical, career-oriented education & hands-on projects</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
