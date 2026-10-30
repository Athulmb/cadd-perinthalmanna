import React from 'react';
import { ArrowUpRight, ArrowDown, Award, Briefcase, Building2, CheckCircle2, Users, FileCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlacementsHero({ onScrollToPlacements }) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#080D14] text-white font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Background Gradients & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-[#E94B3C]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#085C9B]/20 rounded-full blur-[130px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E94B3C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E94B3C]"></span>
              </span>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                CAREER &amp; PLACEMENT CELL
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              From Classroom to Corporate. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94B3C] via-[#FF7A6B] to-[#FFA699]">
                Proven Placement Record.
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              At CADD Centre Perinthalmanna, technical learning translates directly into real careers. Over 1,500+ engineers, BIM modelers, and interior designers placed across premier architectural consultancies, manufacturing firms, and construction contractors.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onScrollToPlacements}
                className="bg-[#E94B3C] hover:bg-[#D4382A] text-white px-7 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-[0_8px_24px_rgba(233,75,60,0.35)] hover:shadow-[0_12px_28px_rgba(233,75,60,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                View Placed Students
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Micro trust row */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Interview Prep</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Portfolio Structuring</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct HR Referrals</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Metrics Grid (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {/* Stat 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121A24]/90 border border-white/10 backdrop-blur-md shadow-xl hover:border-[#E94B3C]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#E94B3C]/15 text-[#E94B3C] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                1,500+
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Students Successfully Placed
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121A24]/90 border border-white/10 backdrop-blur-md shadow-xl hover:border-[#E94B3C]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                120+
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Hiring Corporate Partners
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121A24]/90 border border-white/10 backdrop-blur-md shadow-xl hover:border-[#E94B3C]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                94%
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Placement Placement Rate
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121A24]/90 border border-white/10 backdrop-blur-md shadow-xl hover:border-[#E94B3C]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                37+
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Years of Brand Heritage
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
