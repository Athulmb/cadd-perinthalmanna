import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogList({ posts = [] }) {
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const articles = filter === 'ALL' 
    ? posts 
    : posts.filter(a => (a.category || '').toUpperCase() === filter);

  // Derive unique categories from posts dynamically
  const uniqueCategories = [...new Set(posts.map(p => (p.category || 'General').toUpperCase()))];
  const tabs = ['ALL', ...uniqueCategories];

  return (
    <section className="bg-[#F9F7F1] py-24 sm:py-32 font-serif border-t border-[#D3D6CB]/30">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex justify-between items-end mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl text-[#8A2E2C] font-normal tracking-wide">
            Recent Publications
          </h2>
          <div className="hidden sm:flex gap-6 text-[11px] font-sans font-bold tracking-[0.2em] text-[#65764B] flex-wrap justify-end">
            {tabs.map((tab) => (
              <button 
                key={tab}
                onClick={() => setFilter(tab)}
                className={`transition-colors border-b pb-1 ${
                  filter === tab 
                    ? 'text-[#8A2E2C] border-[#8A2E2C]' 
                    : 'border-transparent hover:text-[#8A2E2C] hover:border-[#8A2E2C]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {articles.map((article, idx) => (
            <Link 
              to={`/blog/${article.id}`}
              key={article.id} 
              data-aos="fade-up" 
              data-aos-delay={(idx % 3) * 100}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Red Hover overlay */}
              <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-[#2C2C2C] rounded-[24px] shadow-sm group-hover:shadow-md transition-shadow duration-500">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-40"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/interior_render.jpg'; }}
                />
                <div className="absolute inset-0 bg-[#E94B3C] opacity-0 group-hover:opacity-60 transition-opacity duration-700 mix-blend-multiply" />
                
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-sans font-bold tracking-widest text-[#8A2E2C]">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <p className="text-[12px] font-sans text-[#687282] mb-3">
                  {article.date}
                </p>
                <h3 className="text-2xl font-normal text-[#1A1A1A] group-hover:text-[#E94B3C] transition-colors duration-300 leading-snug mb-4">
                  {article.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#555] font-light mb-6 flex-1">
                  {article.excerpt}
                </p>
                
                <p className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#8A2E2C] group-hover:text-[#E94B3C] transition-colors">
                  READ ESSAY <span className="ml-1">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
