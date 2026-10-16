import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

// Google renders a coloured initial for any reviewer without a profile photo.
// These are the account-avatar hues Google uses; the hash keeps each reviewer's
// colour stable between renders.
const GOOGLE_AVATAR_COLORS = [
  '#1A73E8', '#D93025', '#188038', '#E37400',
  '#9334E6', '#B06000', '#1967D2', '#C5221F'
];

const avatarColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) % 997;
  }
  return GOOGLE_AVATAR_COLORS[hash % GOOGLE_AVATAR_COLORS.length];
};

// Single Testimonial Card Component
function TestimonialCard({ item, isCenter = false }) {
  return (
    <div
      className={`w-full max-w-[340px] sm:max-w-[380px] lg:w-[360px] min-h-[330px] sm:min-h-[360px] bg-white rounded-[20px] p-6 sm:p-7 flex flex-col items-center justify-between text-center transition-all duration-300 select-none ${
        isCenter
          ? 'border-2 border-[#E94B3C] shadow-xl'
          : 'border border-[rgba(28,37,51,0.10)] shadow-2xs opacity-85'
      }`}
    >
      {/* Avatar with Google badge. Avatars load eagerly: the carousel remounts cards
          constantly, and lazy-loading a 64px image just makes it pop in late. */}
      <div className="relative mb-2 shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100 flex items-center justify-center">
          {item.avatar ? (
            <img
              src={item.avatar}
              alt={item.name}
              width="64"
              height="64"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <span
              className="text-2xl font-semibold text-white w-full h-full flex items-center justify-center"
              style={{ backgroundColor: avatarColor(item.name) }}
              aria-hidden="true"
            >
              {item.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center p-0.5" title="Verified Google Review">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
        </div>
      </div>

      {/* Name and Designation */}
      <div>
        <div className="flex items-center justify-center gap-1.5">
          <h3 className="text-base sm:text-lg font-bold text-[#1C2533] leading-tight">
            {item.name}
          </h3>
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
        </div>
        <p className="text-xs text-[#E94B3C] font-semibold mt-0.5">
          {item.role}
        </p>
      </div>

      {/* 5 Stars */}
      <div className="flex items-center gap-1.5 my-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < item.rating
                  ? 'fill-[#FBBC05] text-[#FBBC05]'
                  : 'fill-slate-200 text-slate-200'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-black text-[#1C2533]">{item.rating.toFixed(1)}</span>
        <span className="text-[10px] text-[#9299A3] font-medium">• {item.time}</span>
      </div>

      {/* Review Quote */}
      <p className="text-xs sm:text-[13px] text-[#687282] font-normal leading-relaxed max-w-xs line-clamp-6">
        "{item.quote}"
      </p>
    </div>
  );
}

import { fetchTestimonials } from '../data/api';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials().then((data) => {
      setTestimonials(data);
      setLoading(false);
    });
  }, []);

  const total = testimonials.length;

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setActiveIdx((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const getRelPos = (index) => {
    let diff = index - activeIdx;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  if (loading) {
    return (
      <section className="py-24 bg-[#F5F4F1] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E94B3C]"></div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="relative py-10 sm:py-24 bg-[#F5F4F1] font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <SectionHeading
            eyebrow="GOOGLE REVIEWS & TESTIMONIALS"
            title="Words of Appreciation from Our Students"
            description="Verified Google reviews from engineering and architecture students trained at CADD Centre Perinthalmanna."
            align="center"
          />
        </div>

        {/* ========================================================= */}
        {/* DESKTOP 5-CARD FAN CAROUSEL (lg:flex)                     */}
        {/* ========================================================= */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="hidden lg:flex relative w-full max-w-5xl h-[400px] lg:h-[430px] items-center justify-center"
        >
          {testimonials.map((item, idx) => {
            const rel = getRelPos(idx);
            const isCenter = rel === 0;

            let x = 0;
            let rotate = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 30;

            if (rel === 0) {
              x = 0;
              rotate = 0;
              scale = 1.0;
              opacity = 1;
              zIndex = 30;
            } else if (rel === -1) {
              x = -260;
              rotate = -6;
              scale = 0.92;
              opacity = 0.85;
              zIndex = 20;
            } else if (rel === 1) {
              x = 260;
              rotate = 6;
              scale = 0.92;
              opacity = 0.85;
              zIndex = 20;
            } else if (rel === -2) {
              x = -480;
              rotate = -12;
              scale = 0.84;
              opacity = 0.5;
              zIndex = 10;
            } else if (rel === 2) {
              x = 480;
              rotate = 12;
              scale = 0.84;
              opacity = 0.5;
              zIndex = 10;
            } else {
              opacity = 0;
              scale = 0.7;
              zIndex = 0;
            }

            if (Math.abs(rel) > 2) return null;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x,
                  rotate,
                  scale,
                  opacity,
                  zIndex
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26
                }}
                onClick={() => setActiveIdx(idx)}
                className="absolute select-none transform-gpu cursor-pointer"
              >
                <TestimonialCard item={item} isCenter={isCenter} />
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MOBILE & TABLET SINGLE ACTIVE CARD CAROUSEL (< lg:)       */}
        {/* ========================================================= */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex lg:hidden w-full max-w-sm sm:max-w-md justify-center items-center px-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIdx].id}
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="w-full flex justify-center"
            >
              <TestimonialCard item={testimonials[activeIdx]} isCenter={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PAGINATION DOTS & ARROWS */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10 z-40">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Review"
            className="w-9 h-9 rounded-[8px] bg-white shadow-2xs border border-[rgba(28,37,51,0.12)] text-[#1C2533] hover:text-[#E94B3C] hover:border-[#E94B3C]/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Indicator text & dots */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#1C2533]">
              {activeIdx + 1} <span className="text-[#9299A3] font-normal">/ {total}</span>
            </span>
            <div className="hidden sm:flex items-center gap-1">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    idx === activeIdx ? 'w-4 bg-[#E94B3C]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Review"
            className="w-9 h-9 rounded-[8px] bg-white shadow-2xs border border-[rgba(28,37,51,0.12)] text-[#1C2533] hover:text-[#E94B3C] hover:border-[#E94B3C]/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
