import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, Wrench, Cpu, Layers, Shield, Palette, Box, Landmark, BarChart3,
  Sparkles, CheckCircle2, ArrowRight, BookOpen, Layers3, Zap, Check, FileText
} from 'lucide-react';
import { disciplinesData } from '../../data/disciplinesData';

const iconMap = {
  Building: Building,
  Wrench: Wrench,
  Cpu: Cpu,
  Layers: Layers,
  Shield: Shield,
  Palette: Palette,
  Box: Box,
  Landmark: Landmark,
  BarChart3: BarChart3
};

export default function CurriculumWorkflowShowcase({ onOpenDemo }) {
  const [activeDisciplineId, setActiveDisciplineId] = useState('interior-design');
  const [activeView, setActiveView] = useState('tools'); // 'tools' | 'outcomes' | 'workflow'

  const activeDiscipline = disciplinesData.find((d) => d.id === activeDisciplineId) || disciplinesData[0];
  const IconComp = iconMap[activeDiscipline.iconName] || Building;

  return (
    <section id="tools" className="py-24 bg-[#080D14] relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E94B3C] text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Curriculum Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Software Tools & Professional Workflows
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Deep-dive into the industry-standard software packages and end-to-end production pipelines taught at CADD Centre Perinthalmanna.
          </p>
        </div>

        {/* Horizontal Discipline Selector Bar */}
        <div className="flex items-center gap-2 pb-4 overflow-x-auto no-scrollbar justify-start lg:justify-center mb-10">
          {disciplinesData.map((discipline) => {
            const isSelected = discipline.id === activeDisciplineId;
            const ItemIcon = iconMap[discipline.iconName] || Building;

            return (
              <button
                key={discipline.id}
                onClick={() => setActiveDisciplineId(discipline.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-white text-[#080D14] shadow-lg scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5'
                }`}
              >
                <ItemIcon className={`w-4 h-4 ${isSelected ? 'text-[#E94B3C]' : 'text-slate-500'}`} />
                <span>{discipline.cardTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Content Container */}
        <div className="bg-[#0F1722] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Header Bar of Selected Discipline */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E94B3C]/10 border border-[#E94B3C]/20 text-[#E94B3C] flex items-center justify-center shrink-0 shadow-lg">
                <IconComp className="w-7 h-7 stroke-[2]" />
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E94B3C]/20 text-[#E94B3C]">
                    {activeDiscipline.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">CADD Centre Perinthalmanna</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeDiscipline.title}
                </h3>
              </div>
            </div>

            {/* View Switcher (Tools / Outcomes / Workflow) */}
            <div className="flex items-center bg-[#080D14] p-1.5 rounded-2xl border border-white/10 shadow-inner self-stretch md:self-auto justify-center">
              <button
                onClick={() => setActiveView('tools')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeView === 'tools'
                    ? 'bg-[#E94B3C] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Popular Areas & Tools
              </button>
              <button
                onClick={() => setActiveView('outcomes')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeView === 'outcomes'
                    ? 'bg-[#E94B3C] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Key Learning Outcomes
              </button>
              <button
                onClick={() => setActiveView('workflow')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeView === 'workflow'
                    ? 'bg-[#E94B3C] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                End-to-End Workflow
              </button>
            </div>
          </div>

          {/* Dynamic Content Views */}
          <div className="pt-8 min-h-[320px]">
            <AnimatePresence mode="wait">
              {/* VIEW 1: POPULAR AREAS & TOOLS COVERED */}
              {activeView === 'tools' && (
                <motion.div
                  key={`tools-${activeDiscipline.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {activeDiscipline.toolsCovered.map((cat, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-[#080D14] rounded-2xl p-5 border border-white/5 shadow-lg hover:border-white/20 transition-all"
                      >
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                          <span className="w-2 h-2 rounded-full bg-[#E94B3C]" />
                          <h4 className="text-sm font-extrabold text-white">{cat.category}</h4>
                        </div>
                        <ul className="space-y-2">
                          {cat.tools.map((tool, tIdx) => (
                            <li
                              key={tIdx}
                              className="flex items-center justify-between text-xs font-bold text-slate-300 bg-white/5 hover:bg-white/10 p-2.5 rounded-xl border border-white/5 transition-colors"
                            >
                              <span>{tool}</span>
                              <span className="text-[10px] font-semibold text-[#E94B3C] bg-[#E94B3C]/10 px-2 py-0.5 rounded border border-[#E94B3C]/20">
                                Included
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* VIEW 2: KEY LEARNING OUTCOMES */}
              {activeView === 'outcomes' && (
                <motion.div
                  key={`outcomes-${activeDiscipline.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {activeDiscipline.outcomes.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#080D14] rounded-2xl p-5 border border-white/5 flex items-start gap-4 hover:border-[#E94B3C]/50 transition-colors shadow-lg"
                    >
                      <div className="w-7 h-7 rounded-xl bg-[#E94B3C]/10 text-[#E94B3C] font-extrabold text-xs flex items-center justify-center shrink-0 border border-[#E94B3C]/20">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* VIEW 3: END-TO-END WORKFLOW PIPELINE */}
              {activeView === 'workflow' && (
                <motion.div
                  key={`workflow-${activeDiscipline.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8"
                >
                  <div className="bg-[#080D14] rounded-2xl p-8 border border-white/5 shadow-lg text-center">
                    <h4 className="text-base font-extrabold text-white mb-2">
                      Professional Industry Workflow Pipeline
                    </h4>
                    <p className="text-xs text-slate-400 max-w-xl mx-auto mb-8">
                      At CADD Centre Perinthalmanna, every student masters the full lifecycle sequence practiced in top architecture, engineering, and construction firms:
                    </p>

                    {/* Step-by-Step Flow Graphic */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {activeDiscipline.workflow.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
                            <span className="w-7 h-7 rounded-full bg-[#E94B3C] text-white font-extrabold text-xs flex items-center justify-center shadow-lg">
                              {idx + 1}
                            </span>
                            <span className="text-xs font-bold text-white">{step}</span>
                          </div>
                          {idx < activeDiscipline.workflow.length - 1 && (
                            <div className="text-[#E94B3C] font-extrabold">
                              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>International CADD Centre Certification & Placement Support Included</span>
            </div>

            <button
              onClick={() => onOpenDemo(activeDiscipline.title)}
              className="w-full sm:w-auto bg-[#E94B3C] hover:bg-[#D4382A] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-[0_4px_16px_rgba(233,75,60,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquire for {activeDiscipline.cardTitle}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
