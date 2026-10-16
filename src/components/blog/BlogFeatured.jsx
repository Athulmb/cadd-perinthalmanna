import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogFeatured({ featuredPost }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!featuredPost) return null;

  return (
    <section className="bg-[#F9F7F1] pb-24 sm:pb-32">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row">
        
        {/* Left Side: Large Featured Image */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative" data-aos="fade-right">
          <img 
            src={featuredPost.image} 
            alt={featuredPost.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = '/why_us.jpg'; }}
          />
        </div>
        
        {/* Right Side: Featured Article Content (Maroon) */}
        <div className="w-full lg:w-1/2 bg-[#8A2E2C] relative overflow-hidden flex flex-col justify-center p-10 md:p-16 lg:p-24" data-aos="fade-left">
          
          {/* Subtle Decorative Pattern */}
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#7A2B29] rounded-full opacity-40 blur-[40px] pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-xl text-white font-serif">
            
            <h3 className="text-[#D4D0C5] text-xs uppercase tracking-[0.25em] mb-8 font-sans font-bold">
              Featured Article • {featuredPost.category}
            </h3>
            
            <h2 className="text-4xl sm:text-5xl font-normal leading-[1.2] mb-6 drop-shadow-sm">
              {featuredPost.title}
            </h2>
            
            <p className="text-[17px] md:text-[19px] leading-[1.8] mb-10 font-light text-[#D4D0C5]">
              "{featuredPost.excerpt}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4D0C5]/30">
                <img 
                  src="/CADD.png" 
                  alt="Author" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <p className="text-[15px] font-bold font-sans tracking-wide">{featuredPost.author}</p>
                <p className="text-[13px] text-[#D4D0C5] font-sans italic">{featuredPost.date}</p>
              </div>
            </div>
            
            <Link to={`/blog/${featuredPost.id}`} className="mt-12 group inline-flex items-center gap-2 text-[11px] font-sans font-bold tracking-[0.2em] hover:text-[#D3D6CB] transition-colors border-b border-transparent hover:border-[#D3D6CB] pb-1">
              READ FULL ESSAY <span>→</span>
            </Link>
            
          </div>

        </div>
      </div>
    </section>
  );
}
