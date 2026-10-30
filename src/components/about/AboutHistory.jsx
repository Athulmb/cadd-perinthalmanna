import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightSmall, Trees } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutHistory() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % 3);
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));

  return (
    <section id="history" className="bg-[#F9F7F1] py-24 sm:py-32 font-serif text-[#1A1A1A]">

      {/* Top Section */}
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center" data-aos="fade-up">
        <div className="text-[#8A2E2C] mb-6">
          <Trees className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1.5]" />
        </div>
        <h2 className="text-4xl md:text-[44px] text-[#8A2E2C] mb-8 font-normal tracking-wide">
          Roots & Evolution
        </h2>
        <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#2C2C2C] max-w-[850px]">
          <strong className="font-semibold">CADD Centre Perinthalmanna</strong> aims to educate and prepare morally committed,
          intellectual, and highly skilled professionals who are grounded in traditional engineering
          principles and conversant with the cultural currents and critical ideas shaping modern technology.
        </p>
      </div>

      {/* Image Slider */}
      <div className="max-w-[1400px] mx-auto px-6 mt-20 mb-12" data-aos="fade-up" data-aos-delay="200">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          <button onClick={prevSlide} className="text-[#555] hover:text-black transition-colors hidden sm:block">
            <ArrowLeft className="w-8 h-8 stroke-[1]" />
          </button>
          <div className="flex gap-6 w-full overflow-hidden justify-center">
            <img src="/why_us.jpg" alt="Students learning" className="w-full sm:w-[48%] aspect-[4/3] object-cover shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = '/interior_render.jpg'; }} />
            <img src="/images/cad_bim_hero_bg.jpg" alt="Students in lab" className="hidden sm:block w-[48%] aspect-[4/3] object-cover shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = '/interior_render.jpg'; }} />
          </div>
          <button onClick={nextSlide} className="text-[#555] hover:text-black transition-colors hidden sm:block">
            <ArrowRight className="w-8 h-8 stroke-[1]" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-3 mt-10">
          {[0, 1, 2, 3, 4].map((dot) => (
            <button key={dot} onClick={() => setActiveSlide(dot)} className={`h-1.5 rounded-full transition-all ${activeSlide === dot ? 'w-6 bg-[#65764B]' : 'w-1.5 bg-[#D4D0C5]'}`} aria-label={`Go to slide ${dot + 1}`} />
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24" data-aos="fade-up" data-aos-delay="100">
        <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#2C2C2C] mb-8 text-left sm:text-justify">
          In 1988, CADD Centre was established on the foundation of a thriving community committed to studying design excellence. Combining this vigor of learning with the best practices in academia, the institution opened its doors with a mission to produce highly capable learners who are conversant in both past and present, through a traditional hands-on education.
        </p>
        <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#2C2C2C] text-left sm:text-justify">
          CADD Centre seeks to recapture this tradition through comprehensive diploma and professional programs, with a curriculum that draws both on classic engineering standards and on modern technological advancements. Its aim is to cultivate young men and women committed to excellence, innovation, and service.
        </p>
      </div>

      {/* The 3 Cards Section - Framer Motion Layout Animations */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1: Student Achievements */}
        <motion.div
          onClick={() => navigate('/placements')}
          className="relative bg-[#65764B] aspect-square overflow-hidden cursor-pointer p-10 flex flex-col"
          initial="idle"
          whileHover="hover"
          data-aos="fade-up" data-aos-delay="100"
        >
          <motion.img
            variants={{ idle: { opacity: 0.65, scale: 1 }, hover: { opacity: 0.15, scale: 1.05 } }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            src="/images/about/student-achievements.jpg"
            alt="Student Achievements"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            onError={(e) => { e.target.onerror = null; e.target.src = '/images/why-choose-us.jpg'; }}
          />
          <motion.div
            variants={{ idle: { opacity: 0.8 }, hover: { opacity: 0 } }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
          />
          <motion.h3
            variants={{ idle: { top: "65%" }, hover: { top: "12%" } }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-10 text-3xl sm:text-4xl text-white font-normal leading-snug m-0 z-10"
          >
            Student<br />Achievements
          </motion.h3>
          <motion.div
            variants={{ idle: { opacity: 0.8 }, hover: { opacity: 1 } }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-10 left-10 z-10 flex items-center gap-2 text-white text-[11px] font-sans font-bold tracking-[0.2em]"
          >
            LEARN MORE <ArrowRightSmall className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Card 2: Accreditation */}
        <motion.div
          onClick={() => navigate('/courses')}
          className="relative bg-[#8A2E2C] aspect-square overflow-hidden cursor-pointer p-10 flex flex-col"
          initial="idle"
          whileHover="hover"
          data-aos="fade-up" data-aos-delay="200"
        >
          <motion.img
            variants={{ idle: { opacity: 0.65, scale: 1 }, hover: { opacity: 0.15, scale: 1.05 } }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            src="/images/about/accreditation.jpg"
            alt="Accreditation"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            onError={(e) => { e.target.onerror = null; e.target.src = '/why_us.jpg'; }}
          />
          <motion.div
            variants={{ idle: { opacity: 0.8 }, hover: { opacity: 0 } }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
          />
          <motion.h3
            variants={{ idle: { top: "70%" }, hover: { top: "12%" } }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-10 text-3xl sm:text-4xl text-white font-normal leading-snug m-0 z-10"
          >
            Accreditation
          </motion.h3>
          <motion.div
            variants={{ idle: { opacity: 0.8 }, hover: { opacity: 1 } }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-10 left-10 z-10 flex items-center gap-2 text-white text-[11px] font-sans font-bold tracking-[0.2em]"
          >
            LEARN MORE <ArrowRightSmall className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Card 3: Employment */}
        <motion.div
          onClick={() => navigate('/placements')}
          className="relative bg-[#1C2533] aspect-square overflow-hidden cursor-pointer p-10 flex flex-col"
          initial="idle"
          whileHover="hover"
          data-aos="fade-up" data-aos-delay="300"
        >
          <motion.img
            variants={{ idle: { opacity: 0.65, scale: 1 }, hover: { opacity: 0.15, scale: 1.05 } }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            src="/images/about/employment.jpg"
            alt="Employment"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            onError={(e) => { e.target.onerror = null; e.target.src = '/interior_render.jpg'; }}
          />
          <motion.div
            variants={{ idle: { opacity: 0.8 }, hover: { opacity: 0 } }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
          />
          <motion.h3
            variants={{ idle: { top: "70%" }, hover: { top: "12%" } }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-10 text-3xl sm:text-4xl text-white font-normal leading-snug m-0 z-10"
          >
            Employment
          </motion.h3>
          <motion.div
            variants={{ idle: { opacity: 0.8 }, hover: { opacity: 1 } }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-10 left-10 z-10 flex items-center gap-2 text-white text-[11px] font-sans font-bold tracking-[0.2em]"
          >
            LEARN MORE <ArrowRightSmall className="w-4 h-4" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
