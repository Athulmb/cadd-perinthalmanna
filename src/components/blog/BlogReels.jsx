import React, { useState, useEffect } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchReels } from '../../data/api';

export default function BlogReels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const [reels, setReels] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
    
    // Fetch reels from API
    fetchReels().then(data => {
      if (data && data.length > 0) {
        setReels(data);
      }
    });

    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(4);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reels.length - visibleCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const handleNext = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

  if (reels.length === 0) return null;

  return (
    <section className="bg-[#1A1A1A] py-24 sm:py-32 font-serif overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#E94B3C]" />
              <span className="text-[#E94B3C] text-xs font-sans font-bold uppercase tracking-[0.2em]">
                Video Journal
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl text-white font-normal tracking-wide leading-tight">
              Campus Happenings <br/>
              <span className="italic text-[#D3D6CB]">& Reels</span>
            </h2>
          </div>
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 hidden sm:flex">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#D4D0C5]/30 flex items-center justify-center text-[#D4D0C5] hover:text-white hover:border-white hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#D4D0C5]/30 flex items-center justify-center text-[#D4D0C5] hover:text-white hover:border-white hover:bg-white/10 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reels Slider Track */}
        <div className="overflow-hidden -mx-3 px-3">
          <div 
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ 
              width: `${(reels.length / visibleCount) * 100}%`,
              transform: `translateX(-${activeIndex * (100 / reels.length)}%)` 
            }}
          >
            {reels.map((reel) => (
              <div 
                key={reel.id} 
                className="px-3"
                style={{ width: `${100 / reels.length}%` }}
              >
                <div className="group cursor-pointer relative aspect-[9/16] overflow-hidden rounded-[24px] bg-black">
                  {/* Image */}
                  <img 
                    src={reel.image || reel.thumbnail || '/interior_render.jpg'} 
                    alt={reel.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/interior_render.jpg'; }}
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:bg-[#E94B3C] group-hover:border-[#E94B3C] group-hover:scale-110 transition-all duration-500">
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                  </div>

                  {/* Bottom Info Gradient & Text */}
                  <div className="absolute inset-x-0 bottom-0 p-6 pt-24 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#D3D6CB] mb-2">
                      {reel.views || 'New Release'}
                    </p>
                    <h3 className="text-lg text-white font-normal leading-snug group-hover:text-[#E94B3C] transition-colors duration-300">
                      {reel.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Buttons */}
        <div className="mt-10 flex justify-center items-center gap-4 sm:hidden" data-aos="fade-up">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#D4D0C5]/30 flex items-center justify-center text-[#D4D0C5] hover:text-white hover:border-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#D4D0C5]/30 flex items-center justify-center text-[#D4D0C5] hover:text-white hover:border-white hover:bg-white/10 transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
