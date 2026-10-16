import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function AboutHero() {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px] max-h-[900px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/interior_render.jpg" 
          alt="CADD Centre Architecture" 
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = '/why_us.jpg';
          }}
        />
      </div>
      
      {/* Dark Overlay Gradient (simulating the cinematic Zaytuna look) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center gap-6"
        >
          {/* Subtle Decorative Icon (Leaf/Laurel) */}
          <div className="text-[#C1A87D] opacity-90">
            <Leaf className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
          </div>

          {/* Majestic Serif Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-white font-serif tracking-wide leading-tight drop-shadow-2xl">
            About CADD Centre
          </h1>
        </motion.div>
      </div>

    </div>
  );
}
