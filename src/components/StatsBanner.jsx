import React, { useEffect } from 'react';
import { Compass, Lightbulb, Globe2, ThumbsUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StatsBanner({ onOpenDemo }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "Industry-Oriented Learning",
      desc: "Master the tools, workflows, and standards actively used across modern engineering and architectural firms.",
      icon: Compass
    },
    {
      title: "Practical Training",
      desc: "Build comprehensive hands-on knowledge through rigorous exercises, live projects, and application-based learning.",
      icon: Lightbulb
    },
    {
      title: "Career-Focused Programs",
      desc: "Develop specialized skills precisely aligned with today’s highly competitive design and construction career opportunities.",
      icon: Globe2
    },
    {
      title: "Experienced Guidance",
      desc: "Learn directly from seasoned trainers and industry mentors who deeply understand professional requirements.",
      icon: ThumbsUp
    }
  ];

  return (
    <section className="bg-[#8A2E2C] text-white py-24 sm:py-32 font-serif overflow-hidden relative">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9C3533] rounded-full blur-[80px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7A2B29] rounded-full blur-[80px] opacity-50 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Image / Statement */}
        <div className="w-full lg:w-[45%]" data-aos="fade-right">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[#D4D0C5]" />
            <span className="text-[#D4D0C5] text-xs font-sans font-bold uppercase tracking-[0.2em]">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.1] mb-8">
            Industry Skills. <br />
            <span className="italic text-[#D3D6CB]">Career Confidence.</span>
          </h2>
          
          <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#D4D0C5] font-light max-w-xl mb-12">
            At CADD Centre Perinthalmanna, we focus on more than software training. Our comprehensive programs combine live project-based learning with practical industry workflows to cultivate true professional competence.
          </p>

          <button 
            onClick={onOpenDemo}
            className="group relative inline-flex items-center justify-center bg-white text-[#8A2E2C] px-8 py-4 font-sans font-bold text-[11px] tracking-[0.2em] transition-transform hover:-translate-y-1"
          >
            EXPLORE PROGRAMS
          </button>
        </div>

        {/* Right Side: Features Grid */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 lg:gap-y-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="w-12 h-12 rounded-full bg-[#9A3533] flex items-center justify-center mb-6 text-white">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#D4D0C5] text-[15px] leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
