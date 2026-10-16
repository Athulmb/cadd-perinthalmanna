import React, { useEffect } from 'react';
import { PenTool } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-40 font-serif overflow-hidden min-h-[65vh] flex items-center justify-center">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/why-choose-us.jpg" 
          alt="Blog Journal Background" 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = '/why_us.jpg'; }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/70" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <div data-aos="fade-up">
          <div className="text-[#D4D0C5] mb-8 flex justify-center">
            <PenTool className="w-12 h-12 stroke-[1.5]" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[72px] text-white font-normal tracking-wide leading-[1.1] mb-8">
            The Journal & <br /> <span className="italic text-[#D3D6CB]">Reflections</span>
          </h1>
          
          <p className="text-[18px] md:text-[20px] leading-[1.8] text-[#D4D0C5] max-w-2xl mx-auto font-light">
            Insights, architectural deep-dives, and academic discourse from the faculty and students of CADD Centre Perinthalmanna.
          </p>
        </div>

      </div>
    </section>
  );
}
