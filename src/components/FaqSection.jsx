import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Plus,
  X,
  Search,
  BookOpen,
  Layers,
  PenTool,
  ShieldCheck,
  Wrench,
  BarChart3,
  CheckCircle2,
  Award,
  UserCheck,
  Sparkles,
  Tag,
  Compass
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import useAutoCarousel from '../hooks/useAutoCarousel';
import { fetchFaqs } from '../data/api';

export default function FaqSection({ onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // API State
  const [categories, setCategories] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFaqs().then((data) => {
      setCategories(data.categories);
      setFaqData(data.faqs);
      setLoading(false);
    });
  }, []);

  // Complete 29 SEO-Optimized FAQs for Perinthalmanna & Malappuram
  
  // Natural SEO keywords tag cloud
  const popularSearchTags = [
    "CADD Centre in Perinthalmanna, Malappuram",
    "CAD Training Centre in Perinthalmanna",
    "Best CAD Institute in Perinthalmanna",
    "AutoCAD Training Institute in Perinthalmanna",
    "CAD & CADD Training Centre in Malappuram",
    "Best AutoCAD Course in Perinthalmanna",
    "Best BIM Course in Perinthalmanna",
    "Best Interior Design Course in Perinthalmanna",
    "Best MEP Course in Perinthalmanna",
    "Best 3ds Max Course in Perinthalmanna",
    "Best SolidWorks Course in Perinthalmanna",
    "Best Product Design Course in Perinthalmanna",
    "Best Project Planning & Management Course in Perinthalmanna",
    "Best BIM Training Institute in Malappuram",
    "Best AutoCAD Training Institute in Malappuram",
    "Best Interior Designing Training Institute in Malappuram",
    "Best MEP Training Institute in Malappuram",
    "Best SolidWorks Training Institute in Malappuram",
    "Best 3ds Max Training Institute in Malappuram",
    "Best Product Design Institute in Malappuram",
    "Best Project Planning & Management Training Institute in Malappuram"
  ];

  // Generate Schema.org FAQPage structured data
  const jsonLdData = useMemo(() => {
    if (!faqData || faqData.length === 0) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  }, [faqData]);

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Mobile shows one question per slide instead of a tall accordion stack.
  const { railProps, index: slide, goTo } = useAutoCarousel(filteredFaqs.length, { paused: true });

  // Reset slide index and expand state on category/search change
  useEffect(() => {
    goTo(0);
    setIsExpanded(false);
  }, [activeCategory, searchQuery, goTo]);

  const visibleDesktopFaqs = (isExpanded || filteredFaqs.length <= 8)
    ? filteredFaqs
    : filteredFaqs.slice(0, 8);

  if (loading) {
    return (
      <section className="py-24 bg-[#F5F4F1] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E94B3C]"></div>
      </section>
    );
  }

  return (
    <section id="faq" className="relative py-10 sm:py-24 bg-[#F5F4F1] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Schema.org JSON-LD Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="CAD &amp; CADD Training in Perinthalmanna, Malappuram"
            description="Find clear answers about courses, AutoCAD &amp; BIM training, software coverage, eligibility, and career placement assistance at CADD Centre Perinthalmanna."
            align="center"
          />

          {/* Search Input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#9299A3] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AutoCAD, BIM, MEP, Interior, Placement..."
              className="w-full pl-9 pr-8 py-2.5 rounded-[8px] bg-white border border-[rgba(28,37,51,0.12)] text-xs sm:text-sm text-[#1C2533] placeholder-[#9299A3] shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#E94B3C]/20 focus:border-[#E94B3C] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#9299A3] hover:text-[#1C2533] cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 2-COLUMN MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Sidebar: Vertical Category Tabs */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIdx(0);
                  }}
                  className={`w-full px-4 py-3 rounded-[12px] flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#1C2533] border border-[#E94B3C]/40 shadow-xs font-bold'
                      : 'bg-white/60 hover:bg-white text-[#687282] hover:text-[#1C2533] border border-[rgba(28,37,51,0.08)] font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`p-1 rounded-[6px] transition-colors ${
                      isActive ? 'bg-[#E94B3C]/10 text-[#E94B3C]' : 'text-[#9299A3]'
                    }`}>
                      {cat.icon}
                    </span>
                    <span className="text-xs sm:text-sm">
                      {cat.id === 'all' ? `All FAQs (${faqData.length})` : cat.label}
                    </span>
                  </div>

                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                    isActive ? 'text-[#E94B3C] translate-x-0.5' : 'text-[#9299A3]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* MOBILE / TABLET: one question per slide */}
          <div className="lg:hidden">
            {filteredFaqs.length > 0 ? (
              <>
                <div
                  {...railProps}
                  className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-1 items-stretch"
                >
                  {filteredFaqs.map((item) => (
                    <div key={item.id} className="snap-center shrink-0 w-full">
                      <div className="h-full bg-white rounded-[16px] border border-[rgba(28,37,51,0.10)] shadow-2xs p-5 flex flex-col">
                        <p className="text-sm font-bold text-[#1C2533] leading-snug">
                          {item.question}
                        </p>

                        <div className="pt-3 mt-3 border-t border-[rgba(28,37,51,0.08)] text-xs text-[#687282] leading-relaxed space-y-3 flex-1">
                          <p>{item.answer}</p>
                        </div>

                        <div className="pt-3 mt-1 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            <span>Authorized Certification &amp; Placements</span>
                          </div>

                          <Button onClick={onOpenDemo} variant="link" size="sm">
                            Enquire Course
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slide controls */}
                {filteredFaqs.length > 1 && (
                  <div className="flex items-center justify-center gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() => goTo((slide - 1 + filteredFaqs.length) % filteredFaqs.length)}
                      aria-label="Previous question"
                      className="w-8 h-8 rounded-[8px] bg-white border border-[rgba(28,37,51,0.12)] text-[#1C2533] hover:text-[#E94B3C] hover:border-[#E94B3C]/40 flex items-center justify-center cursor-pointer active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                    </button>

                    <span className="text-xs font-bold text-[#1C2533]">
                      {slide + 1} <span className="text-[#9299A3] font-normal">/ {filteredFaqs.length}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => goTo((slide + 1) % filteredFaqs.length)}
                      aria-label="Next question"
                      className="w-8 h-8 rounded-[8px] bg-white border border-[rgba(28,37,51,0.12)] text-[#1C2533] hover:text-[#E94B3C] hover:border-[#E94B3C]/40 flex items-center justify-center cursor-pointer active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-[16px] p-8 text-center border border-[rgba(28,37,51,0.10)] shadow-2xs">
                <p className="text-sm font-semibold text-[#687282]">No matching questions found for "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-3 text-xs font-bold text-[#E94B3C] hover:underline cursor-pointer"
                >
                  Reset Search &amp; Category Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Desktop Accordion Questions List */}
          <div className="hidden lg:block lg:col-span-8 space-y-2.5">
            {filteredFaqs.length > 0 ? (
              <>
                {visibleDesktopFaqs.map((item, idx) => {
                  const isOpen = openIdx === idx;

                  return (
                    <div
                      key={item.id}
                      className={`transition-all duration-200 rounded-[16px] overflow-hidden ${
                        isOpen
                          ? 'bg-white border border-[#E94B3C]/40 shadow-xs p-5'
                          : 'bg-white border border-[rgba(28,37,51,0.10)] hover:border-[rgba(28,37,51,0.2)] p-4 sm:p-5 shadow-2xs'
                      }`}
                    >
                      {/* Question Header Row */}
                      <button
                        type="button"
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                      >
                        <span className={`text-xs sm:text-sm leading-snug transition-colors ${
                          isOpen ? 'font-bold text-[#1C2533]' : 'font-semibold text-[#1C2533] group-hover:text-[#E94B3C]'
                        }`}>
                          {item.question}
                        </span>

                        <div className={`p-1 rounded-[6px] shrink-0 transition-colors ${
                          isOpen ? 'text-[#E94B3C] bg-[#E94B3C]/10' : 'text-[#9299A3] group-hover:text-[#1C2533]'
                        }`}>
                          {isOpen ? (
                            <X className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </button>

                      {/* Expanded Answer Body */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                          >
                            <div className="pt-3 mt-3 border-t border-[rgba(28,37,51,0.08)] text-xs sm:text-sm text-[#687282] leading-relaxed space-y-3">
                              <p>{item.answer}</p>

                              <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-xs">
                                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                                  <span>Authorized International Certification &amp; Practical Training Included</span>
                                </div>

                                <Button onClick={onOpenDemo} variant="link" size="sm">
                                  Enquire Course
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* See More / Show Fewer Button for Desktop */}
                {filteredFaqs.length > 8 && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="w-full py-3.5 px-4 rounded-[14px] bg-white hover:bg-[#FDFBF7] border border-[rgba(28,37,51,0.12)] hover:border-[#E94B3C]/40 text-xs sm:text-sm font-bold text-[#1C2533] hover:text-[#E94B3C] flex items-center justify-center gap-2.5 transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer group"
                    >
                      <span className="flex items-center gap-2">
                        {isExpanded ? (
                          <>Show Fewer Questions</>
                        ) : (
                          <>
                            See More Questions <span className="px-2 py-0.5 rounded-full bg-[#E94B3C]/10 text-[#E94B3C] text-[11px] font-bold">+{filteredFaqs.length - 8} More</span>
                          </>
                        )}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#9299A3] group-hover:text-[#E94B3C] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : 'rotate-0'
                      }`} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-[16px] p-8 text-center border border-[rgba(28,37,51,0.10)] shadow-2xs">
                <p className="text-sm font-semibold text-[#687282]">No matching questions found for "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-3 text-xs font-bold text-[#E94B3C] hover:underline cursor-pointer"
                >
                  Reset Search &amp; Category Filters
                </button>
              </div>
            )}
          </div>

        </div>

        {/* POPULAR SEARCHES & KEYWORDS CLOUD */}
        <div className="mt-12 pt-8 border-t border-[rgba(28,37,51,0.08)] max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-3.5 text-[#687282]">
            <Tag className="w-3.5 h-3.5 text-[#E94B3C]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C2533]">
              Popular Training Searches in Perinthalmanna &amp; Malappuram
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularSearchTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-white border border-[rgba(28,37,51,0.08)] text-[11px] font-medium text-[#687282] hover:text-[#E94B3C] hover:border-[#E94B3C]/30 transition-colors shadow-2xs cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
