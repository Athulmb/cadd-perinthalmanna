import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "At CADD Centre I learned at least as much from the embodied character of my instructors — how they taught, how they treated students, the humility and integrity they brought to engineering — as I did from the amazing software we studied.",
      author: "Mohammed Safwan (B.Tech Civil, Class of 2023)"
    },
    {
      quote: "The rigorous training in BIM and structural design completely transformed my approach to architecture. It wasn't just about learning tools; it was about understanding the philosophy of sustainable design.",
      author: "Amina Fathima (M.Arch, Class of 2022)"
    },
    {
      quote: "The personalized mentorship and industry-focused curriculum equipped me with the confidence to lead major construction projects immediately after graduation. An unparalleled educational experience.",
      author: "Rahul Krishnan (Project Manager, L&T)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Change text every 5 seconds as requested
    
    AOS.init({ duration: 1000, once: true });
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="bg-[#F9F7F1] py-24 sm:py-32 font-serif overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative" data-aos="fade-up">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center text-[#8A2E2C] font-normal mb-16 sm:mb-20">
          What Our Alumni Say
        </h2>

        {/* Testimonial Container */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center min-h-[250px] sm:min-h-[200px]">
          
          {/* Giant Decorative Quotes */}
          <div className="absolute top-0 left-0 md:-left-10 text-[100px] sm:text-[140px] text-[#D3D6CB] font-serif leading-none select-none opacity-70 transform -translate-y-4 sm:-translate-y-8">
            &ldquo;
          </div>
          <div className="absolute bottom-0 right-0 md:-right-10 text-[100px] sm:text-[140px] text-[#D3D6CB] font-serif leading-none select-none opacity-70 transform translate-y-8 sm:translate-y-12">
            &rdquo;
          </div>

          {/* Changing Quote Content */}
          <div className="relative z-10 w-full px-8 sm:px-16 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <p className="text-[19px] sm:text-[22px] md:text-[26px] leading-[1.7] italic text-[#5F6A48] font-light">
                  "{testimonials[activeIndex].quote}"
                </p>
                <p className="text-[13px] sm:text-[14px] text-[#1A1A1A] mt-8">
                  {testimonials[activeIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-[4px] rounded-full transition-all duration-500 ease-in-out ${
                activeIndex === idx ? 'w-8 bg-[#65764B]' : 'w-2 bg-[#D3D6CB] hover:bg-[#A3A896]'
              }`}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
