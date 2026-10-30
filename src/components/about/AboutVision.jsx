import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutVision() {
  const [activeIndex, setActiveIndex] = useState(0);

  const content = [
    {
      title: "Our Mission",
      paragraphs: [
        "\"To empower individuals with world-class engineering and architectural design skills. From such knowledge, all other innovations flow, even professional success. And this is why, at CADD Centre, we have adorned our curriculum with practical, industry-standard training.\"",
        "For it is our mastery of design tools alone that enables us to shape the modern world; hence true skill will always lead to true progress. The greatest professional commandment is 'Know that quality lies in the details.' It is this knowledge alone—and most importantly, applied knowledge—that differentiates us from the rest, making our students unique among the industry's glorious creation."
      ],
      caption: "– CADD Centre Perinthalmanna Mission Statement"
    },
    {
      title: "Our Vision",
      paragraphs: [
        "\"To be the premier institution for technical education, fostering a community of lifelong learners and innovators. Our vision extends beyond the classroom, aiming to build a foundation of excellence that our students carry into their professional lives.\"",
        "By integrating traditional engineering principles with cutting-edge technology, we envision a future where our alumni are the leading architects of sustainable and groundbreaking infrastructure. Our commitment is to remain the guiding light for ambitious minds across the region."
      ],
      caption: "– CADD Centre Perinthalmanna Vision Statement"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % content.length);
    }, 8000); // Change text every 8 seconds
    
    AOS.init({ duration: 1000, once: true });
    
    return () => clearInterval(timer);
  }, [content.length]);

  return (
    <section className="bg-[#F9F7F1]">
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* Left Side: Full Height Image */}
        <div className="w-full lg:w-[45%] min-h-[400px] lg:min-h-[700px] relative overflow-hidden" data-aos="fade-right">
          <img 
            src="/images/about/mission.jpg" 
            alt="CADD Centre Mission - Empowering Innovation Through Engineering Design"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => { e.target.onerror = null; e.target.src = '/why_us.jpg'; }}
          />
        </div>
        
        {/* Right Side: Solid Maroon Background with Changing Text */}
        <div className="w-full lg:w-[55%] bg-[#8A2E2C] relative overflow-hidden flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24" data-aos="fade-left">
          
          {/* Subtle Decorative Pattern (Simulated with soft blur elements) */}
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#7A2B29] rounded-full opacity-40 blur-[50px] pointer-events-none" />
          <div className="absolute top-10 -left-20 w-64 h-64 bg-[#9A3533] rounded-full opacity-30 blur-[40px] pointer-events-none" />

          {/* Text Container with AnimatePresence for smooth crossfades */}
          <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col min-h-[450px] justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full font-serif text-white"
              >
                {/* Section Indicator */}
                <h3 className="text-[#D4D0C5] text-xs uppercase tracking-[0.25em] mb-8 font-sans font-bold">
                  {content[activeIndex].title}
                </h3>
                
                {/* Paragraphs */}
                {content[activeIndex].paragraphs.map((text, idx) => (
                  <p key={idx} className="text-[17px] md:text-[20px] leading-[1.8] mb-6 font-light drop-shadow-sm">
                    {text}
                  </p>
                ))}
                
                {/* Caption / Source */}
                <p className="text-[15px] italic text-[#D4D0C5] mt-10">
                  {content[activeIndex].caption}
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* Pagination / Progress Dots */}
            <div className="flex items-center gap-3 mt-12">
              {content.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-[3px] transition-all duration-500 ease-in-out ${
                    activeIndex === idx ? 'w-10 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`View ${content[idx].title}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
