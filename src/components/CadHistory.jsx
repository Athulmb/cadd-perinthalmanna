import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, PenTool, Cpu, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CadHistory() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const historySteps = [
    {
      year: "1960s",
      title: "The Dawn of CAD",
      desc: "Replacing manual drafting with the first automated 2D line drawing systems, fundamentally changing engineering.",
      icon: <PenTool className="w-5 h-5" />
    },
    {
      year: "1980s",
      title: "3D Modeling",
      desc: "The leap into the third dimension. Wireframes evolved into solid models, allowing for complex architectural designs.",
      icon: <Compass className="w-5 h-5" />
    },
    {
      year: "2000s",
      title: "The BIM Era",
      desc: "Building Information Modeling (BIM) turned drawings into intelligent, data-rich architectural databases.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      year: "Today",
      title: "Generative & AI",
      desc: "Generative design and VR simulation. We teach the workflows that are shaping the future of global infrastructure.",
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E94B3C]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Visual - Left (Sticky Wrapper) */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-32 relative h-[50vh] sm:h-[60vh] lg:h-[calc(100vh-160px)] max-h-[800px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(28,37,51,0.05)] group">
              <img 
                src="/interior_render.jpg" 
                alt="Modern CAD rendering" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
              
              {/* Inner Gradients for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2533]/90 via-[#1C2533]/20 to-transparent opacity-80" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-[16px] p-6 max-w-sm shadow-xl">
                  <h3 className="text-2xl font-bold text-[#1C2533] mb-2">Pioneering Education</h3>
                  <p className="text-sm text-[#687282] leading-relaxed">
                    Over three decades of adapting to technological shifts to provide world-class engineering education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Content - Right */}
          <div className="lg:col-span-6 flex flex-col pt-4 lg:pt-8 pb-12">
            
            {/* Header Content */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#F5F4F1] border border-[rgba(28,37,51,0.05)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E94B3C] animate-pulse" />
                <span className="text-[11px] font-bold text-[#1C2533] uppercase tracking-widest">
                  Roots & Evolution
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1C2533] leading-[1.1] tracking-tight mb-6">
                The Evolution of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94B3C] to-[#D4382A]">Design Technology</span>
              </h2>
              
              <p className="text-lg text-[#687282] leading-relaxed max-w-xl">
                From the first 2D drafting systems to today's data-rich Building Information Modeling, we have evolved alongside the industry to impart the most advanced design workflows.
              </p>
            </div>

            {/* Timeline Cards */}
            <div ref={cardsRef} className="flex flex-col gap-6">
              {historySteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-[rgba(28,37,51,0.08)] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-[20px] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 group cursor-default relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E94B3C]/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150 -z-10" />
                  
                  <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 relative z-10">
                    <div className="w-14 h-14 rounded-[14px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.05)] flex items-center justify-center text-[#E94B3C] group-hover:scale-110 group-hover:bg-[#E94B3C] group-hover:text-white transition-all duration-300 shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[11px] font-black text-[#E94B3C] tracking-widest uppercase bg-[#E94B3C]/10 px-2.5 py-1 rounded-[6px]">
                          {step.year}
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-[#1C2533] mb-2 group-hover:text-[#E94B3C] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-base text-[#687282] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Spacer at the bottom to ensure the last card can scroll past fully before the section ends */}
            <div className="h-12 lg:h-24" />
          </div>

        </div>
      </div>
    </section>
  );
}
