import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MapPin, Layers, GraduationCap, Briefcase, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

export default function CourseBottomSheet({ isOpen, onClose, course, onOpenDemo, badgeLabel }) {
  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-auto font-['Plus_Jakarta_Sans',sans-serif]"
        >
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal / Bottom Sheet Container */}
          <motion.div
            data-lenis-prevent="true"
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-white rounded-t-[28px] sm:rounded-[24px] shadow-2xl border border-[rgba(28,37,51,0.12)] overflow-hidden max-h-[90vh] sm:max-h-[85vh] flex flex-col z-10 overscroll-contain"
          >
            
            {/* Top Bar chip & Close Button. `badgeLabel` pins the chip to the canonical
                name of the record that was clicked (disciplines pass their `title`), so the
                chip, the heading below and the card can never show different names. */}
            <div className="px-6 sm:px-8 pt-5 pb-4 bg-[#F5F4F1] border-b border-[rgba(28,37,51,0.08)] flex items-center justify-between shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#E94B3C]/10 border border-[#E94B3C]/20 text-[#E94B3C] text-[11px] font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#E94B3C]" />
                {badgeLabel || course.category}
              </span>
              
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-[8px] bg-white hover:bg-slate-200 text-[#1C2533] flex items-center justify-center transition-colors cursor-pointer border border-[rgba(28,37,51,0.08)] shadow-2xs"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Sheet Content with native smooth scrolling */}
            <div 
              data-lenis-prevent="true"
              className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 overscroll-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              
              {/* Title & Description Header */}
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C2533] tracking-tight leading-tight">
                  {course.title}
                </h3>
                {(course.description || course.tagline) && (
                  <p className="text-xs sm:text-sm text-[#687282] leading-relaxed font-normal">
                    {course.description || course.tagline}
                  </p>
                )}
              </div>

              {/* Popular Areas & Tools Covered (Grouped or Badges) */}
              {(course.toolGroups || course.toolsCovered) && (course.toolGroups || course.toolsCovered).length > 0 ? (
                <div className="space-y-3 pt-1">
                  <h4 className="text-[11px] font-bold text-[#1C2533] uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#E94B3C]" />
                    <span>Popular Areas &amp; Tools Covered</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(course.toolGroups || course.toolsCovered).map((group, idx) => (
                      <div key={idx} className="bg-[#F5F4F1] p-3.5 rounded-[12px] border border-[rgba(28,37,51,0.08)] space-y-2">
                        <span className="text-xs font-bold text-[#1C2533] block">{group.category}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {group.tools.map((tool, tIdx) => (
                            <span 
                              key={tIdx}
                              className="px-2.5 py-1 rounded-[6px] bg-white border border-[rgba(28,37,51,0.10)] text-[11px] font-semibold text-[#1C2533] shadow-2xs"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : course.popularAreas && course.popularAreas.length > 0 ? (
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-[11px] font-bold text-[#1C2533] uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#E94B3C]" />
                    <span>Popular Areas &amp; Tools Covered</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.popularAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] text-xs font-bold text-[#1C2533] shadow-2xs flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E94B3C]" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Complete End-to-End Workflow Pipeline */}
              {course.workflow && course.workflow.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-[rgba(28,37,51,0.08)]">
                  <h4 className="text-[11px] font-bold text-[#1C2533] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E94B3C]" />
                    <span>Complete Industry Workflow</span>
                  </h4>
                  <div className="bg-[#F5F4F1] p-4 rounded-[14px] border border-[rgba(28,37,51,0.08)]">
                    <div className="flex flex-wrap items-center gap-2">
                      {course.workflow.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <div className="px-3 py-1.5 bg-white rounded-[8px] border border-[rgba(28,37,51,0.10)] text-xs font-bold text-[#1C2533] shadow-2xs flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-[#E94B3C] text-white text-[9px] font-black flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                          {idx < course.workflow.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-[#E94B3C] shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Key Learning Outcomes */}
              {((course.keyModules && course.keyModules.length > 0) || (course.outcomes && course.outcomes.length > 0)) && (
                <div className="space-y-2.5 pt-3 border-t border-[rgba(28,37,51,0.08)]">
                  <h4 className="text-[11px] font-bold text-[#1C2533] uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#E94B3C]" />
                    <span>Key Learning Outcomes &amp; Workflows</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(course.keyModules || course.outcomes.map(o => typeof o === 'string' ? o : `${o.title} — ${o.description}`)).map((module, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2 bg-[#F5F4F1] p-3 rounded-[10px] border border-[rgba(28,37,51,0.08)] shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-[#1C2533] leading-snug">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Opportunities */}
              {course.careerPaths && course.careerPaths.length > 0 && (
                <div className="space-y-2.5 pt-3 border-t border-[rgba(28,37,51,0.08)]">
                  <h4 className="text-[11px] font-bold text-[#1C2533] uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#E94B3C]" />
                    <span>Career Opportunities</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.careerPaths.map((path, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 rounded-[6px] bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Local SEO Badge */}
              {course.seoLocation && (
                <div className="p-3 rounded-[10px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.08)] text-[#687282] text-xs font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E94B3C] shrink-0" />
                  <span className="leading-relaxed">{course.seoLocation}</span>
                </div>
              )}

            </div>

            {/* Bottom Sticky Action Bar */}
            <div className="p-4 sm:p-5 bg-[#F5F4F1] border-t border-[rgba(28,37,51,0.08)] flex items-center justify-between gap-4 shrink-0">
              <div>
                <p className="text-xs font-bold text-[#1C2533] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E94B3C]" />
                  <span>CADD Centre Perinthalmanna</span>
                </p>
                <p className="text-[11px] text-[#687282]">Admissions &amp; Placement Guidance Open</p>
              </div>

              <Button
                onClick={() => {
                  onClose();
                  if (onOpenDemo) onOpenDemo();
                }}
                variant="primary"
                size="md"
              >
                Enquire Now
              </Button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
