import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Globe, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap,
  Building2,
  Cpu,
  PenTool,
  Layers,
  ShieldCheck,
  Wrench,
  BarChart3
} from 'lucide-react';
import { disciplinesData } from '../data/disciplinesData';
import CourseBottomSheet from './CourseBottomSheet';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPageDetails({ onOpenDemo }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Fade up elements with class 'fade-up'
      gsap.utils.toArray('.fade-up').forEach((elem) => {
        gsap.fromTo(
          elem,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // Stagger elements with class 'stagger-item'
      gsap.utils.toArray('.stagger-container').forEach((container) => {
        const items = container.querySelectorAll('.stagger-item');
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              once: true,
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const iconMap = {
    Palette: PenTool,
    Layers: Layers,
    Shield: ShieldCheck,
    Landmark: Building2,
    BarChart3: BarChart3,
    Building: Building2,
    Box: Cpu,
    Wrench: Wrench,
    Cpu: Cpu
  };

  return (
    <div ref={containerRef} className="font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Vision Statement Area */}
      <section className="py-24 sm:py-32 bg-[#F5F4F1]">
        <div className="max-w-[1000px] mx-auto px-6 text-center fade-up">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-[#E94B3C]" />
            <span className="text-[12px] font-bold text-[#E94B3C] uppercase tracking-[0.18em]">
              About CADD Centre
            </span>
            <span className="w-8 h-[1px] bg-[#E94B3C]" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C2533] leading-[1.15] tracking-tight mb-8">
            A Global Learning Vision. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94B3C] to-[#D4382A]">
              Closer to Perinthalmanna.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#687282] leading-relaxed max-w-3xl mx-auto">
            Empowering engineering, architecture, and design professionals with world-class CAD/BIM education, certified curriculums, and direct industry mentorship.
          </p>
        </div>
      </section>

      {/* 2. Legacy & Philosophy (Split Cards) */}
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

      {/* 3. Specialized Disciplines (Bento Grid Style) */}
      <section className="py-20 sm:py-32 bg-white border-t border-[rgba(28,37,51,0.05)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 fade-up">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-[#E94B3C]" />
                <span className="text-[12px] font-bold text-[#E94B3C] uppercase tracking-[0.18em]">
                  Specialized Disciplines
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C2533] tracking-tight">
                Explore Industry Training in Perinthalmanna
              </h2>
            </div>
            <div className="md:text-right flex items-center gap-2 text-sm font-bold text-[#687282] bg-[#F5F4F1] px-5 py-3 rounded-full">
              <GraduationCap className="w-5 h-5 text-[#E94B3C]" />
              Industry-recognized certification
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 stagger-container">
            {disciplinesData.map((discipline, idx) => {
              const IconComp = iconMap[discipline.iconName] || Building2;
              
              // Make the first item span 2 columns on large screens for a bento box look
              const isLarge = idx === 0;

              return (
                <div
                  key={discipline.id}
                  onClick={() => setSelectedCourse(discipline)}
                  className={`stagger-item group relative overflow-hidden bg-white border border-[rgba(28,37,51,0.08)] rounded-[20px] p-6 sm:p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                    isLarge ? 'sm:col-span-2 lg:col-span-2 bg-[#F5F4F1]' : ''
                  }`}
                >
                  <div className="flex flex-col h-full justify-between gap-8 relative z-10">
                    <div className="w-12 h-12 rounded-[12px] bg-white border border-[rgba(28,37,51,0.08)] shadow-sm flex items-center justify-center text-[#E94B3C] group-hover:scale-110 group-hover:bg-[#E94B3C] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    <div>
                      <h4 className={`font-bold text-[#1C2533] group-hover:text-[#E94B3C] transition-colors ${
                        isLarge ? 'text-2xl sm:text-3xl' : 'text-xl'
                      }`}>
                        {discipline.cardTitle}
                      </h4>
                      {isLarge && (
                        <p className="mt-3 text-[#687282] text-sm leading-relaxed max-w-sm">
                          Master the most requested skills in {discipline.cardTitle.toLowerCase()} and start drafting real-world architectures.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative faint background icon */}
                  <div className="absolute -bottom-6 -right-6 text-[rgba(28,37,51,0.02)] group-hover:text-[#E94B3C]/5 transition-colors duration-500">
                    <IconComp className="w-40 h-40" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Course Details Bottom Sheet */}
      <CourseBottomSheet
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse}
        badgeLabel={selectedCourse?.title}
        onOpenDemo={onOpenDemo}
      />
    </div>
  );
}
