import React from 'react';
import { ArrowUpRight, CheckCircle2, Users, Star, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoursesHero({ onOpenDemo }) {
  return (
    <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#080D14] text-white font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E94B3C]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#085C9B]/20 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E94B3C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E94B3C]"></span>
              </span>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Admissions Open 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Master Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94B3C] to-[#FF8A7A]">
                Engineering Career
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl mb-10">
              Comprehensive, industry-aligned training programs in CAD, BIM, Interior Design, and Project Management. Elevate your skills and become a highly sought-after professional globally.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <button
                onClick={onOpenDemo}
                className="bg-[#E94B3C] hover:bg-[#D4382A] text-white px-8 py-4 rounded-xl text-[15px] font-bold inline-flex items-center gap-2 shadow-[0_8px_24px_rgba(233,75,60,0.4)] hover:shadow-[0_12px_28px_rgba(233,75,60,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                Explore Curriculum
                <ArrowUpRight className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4 text-sm font-semibold text-slate-300">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#080D14] bg-indigo-500 flex items-center justify-center text-xs font-bold">AJ</div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#080D14] bg-rose-500 flex items-center justify-center text-xs font-bold">SR</div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#080D14] bg-emerald-500 flex items-center justify-center text-xs font-bold">MK</div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#080D14] bg-amber-500 flex items-center justify-center text-[10px] font-bold text-black">10k+</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center text-[#F59E0B] gap-0.5 mb-0.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-xs">4.9/5 from 10k+ Students</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-semibold text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E94B3C]" /> ISO 19650 Standards</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E94B3C]" /> 100% Placement Support</span>
            </div>
          </motion.div>

          {/* Right Content - Abstract Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center mt-16 lg:mt-0"
          >
            {/* Main Image Plate */}
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#E94B3C]/10 border border-white/10">
              <div className="absolute inset-0 bg-[#080D14]/20 mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D14] via-transparent to-transparent z-10" />
              <img src="/interior_render.jpg" alt="Engineering Training" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src = '/why_us.jpg'; }} />
              
              {/* Glassmorphism Overlays */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#080D14]/60 backdrop-blur-xl border border-white/10 z-20 flex items-center gap-4 hover:bg-[#080D14]/80 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#E94B3C] flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">40+ Premium Programs</h4>
                  <p className="text-slate-400 text-sm">International Certifications</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 lg:-right-8 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-4 z-30 hidden sm:flex"
            >
               <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-emerald-400" />
               </div>
               <div>
                  <h4 className="text-white font-bold text-xl leading-tight">10,000+</h4>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Careers Built</p>
               </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
      
    </div>
  );
}
