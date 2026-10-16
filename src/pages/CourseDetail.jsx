import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCourseById } from '../data/api';
import { ArrowLeft, CheckCircle2, BookOpen, Clock, Settings, GraduationCap, PlayCircle, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    // Fetch data simulating real API
    fetchCourseById(id).then(data => {
      setCourse(data);
      setLoading(false);
      if (data) {
        document.title = data.seoLocation || `${data.title} - CADD Centre`;
      }
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[80vh] bg-[#080D14] flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#E94B3C]"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-[#080D14] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
          <Link to="/courses" className="text-[#E94B3C] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080D14] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <div className="relative min-h-[70vh] flex items-end pt-32 pb-16 md:pb-24 border-b border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={course.img || '/why_us.jpg'} 
            alt={course.title} 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = '/why_us.jpg'; }}
          />
          {/* Gradients to blend image perfectly into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080D14] via-[#080D14]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080D14] via-[#080D14]/70 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10" data-aos="fade-up">
          <Link to="/courses" className="inline-flex items-center gap-2 text-[#D3D6CB] hover:text-white transition-colors mb-8 text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> All Programs
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-[#E94B3C] text-white rounded-sm shadow-lg">
              {course.category}
            </span>
            <span className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 text-white backdrop-blur-md rounded-sm border border-white/20">
              {course.discipline}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-extrabold mb-6 leading-[1.1] tracking-tight max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            {course.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-light border-l-4 border-[#E94B3C] pl-6">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-fit shadow-2xl">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#E94B3C]/20 flex items-center justify-center text-[#E94B3C]">
                 <Clock className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Duration</p>
                 <span className="font-semibold text-lg">{course.duration}</span>
               </div>
             </div>
             <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#0284C7]/20 flex items-center justify-center text-[#38BDF8]">
                 <Settings className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Software Tools</p>
                 <span className="font-semibold text-lg">{course.tools ? course.tools.split('·').length : 0} Premium Tools</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. Advanced Layout Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid xl:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Details */}
          <div className="xl:col-span-8 space-y-24">
            
            {/* Popular Areas Section */}
            {course.popularAreas && course.popularAreas.length > 0 && (
              <section data-aos="fade-up" className="mb-24">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px bg-white/20 flex-1"></div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold flex items-center gap-4 text-center">
                    <Star className="w-8 h-8 text-[#E94B3C]" />
                    Popular <span className="font-light text-slate-400">Areas</span>
                  </h2>
                  <div className="h-px bg-white/20 flex-1"></div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {course.popularAreas.map((area, idx) => (
                    <div key={idx} className="px-6 py-3 rounded-full bg-gradient-to-r from-[#111A24] to-[#0A0F16] border border-white/10 hover:border-[#E94B3C]/50 transition-all shadow-lg text-slate-200 font-semibold flex items-center gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-[#E94B3C] group-hover:scale-110 transition-transform" />
                      {area}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Modules with Glassmorphism */}
            <section data-aos="fade-up">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-white/20 flex-1"></div>
                <h2 className="text-3xl lg:text-4xl font-extrabold flex items-center gap-4 text-center">
                  <BookOpen className="w-8 h-8 text-[#E94B3C]" />
                  Curriculum <span className="font-light text-slate-400">Highlights</span>
                </h2>
                <div className="h-px bg-white/20 flex-1"></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {course.keyModules && course.keyModules.map((module, idx) => {
                  const [title, desc] = typeof module === 'string' && module.includes('—') ? module.split('—') : [module, ''];
                  return (
                    <div key={idx} className="group p-6 rounded-[24px] bg-gradient-to-b from-[#111A24] to-[#0A0F16] border border-white/5 hover:border-[#E94B3C]/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(233,75,60,0.15)] hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-full bg-[#E94B3C]/10 flex items-center justify-center text-[#E94B3C] mb-5 group-hover:scale-110 transition-transform">
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{title?.trim()}</h4>
                      {desc && <p className="text-slate-400 text-sm leading-relaxed">{desc?.trim()}</p>}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Workflow Pipeline */}
            {course.workflow && (
              <section data-aos="fade-up">
                <h2 className="text-3xl font-extrabold mb-10">Industry Pipeline Workflow</h2>
                <div className="relative">
                  {/* Pipeline line */}
                  <div className="absolute top-[28px] left-0 w-full h-1 bg-white/10 hidden md:block"></div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {course.workflow.map((step, idx) => (
                      <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-14 h-14 rounded-full bg-[#1A2330] border-2 border-[#E94B3C] flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(233,75,60,0.2)] mb-4 group-hover:scale-110 group-hover:bg-[#E94B3C] group-hover:text-white transition-all text-slate-300">
                          {idx + 1}
                        </div>
                        <h5 className="font-bold text-sm text-slate-300 group-hover:text-white transition-colors">{step}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Premium Tool Groups */}
            {course.toolGroups && (
               <section data-aos="fade-up">
                 <h2 className="text-3xl font-extrabold mb-10">Software Expertise Acquired</h2>
                 <div className="grid sm:grid-cols-2 gap-8">
                   {course.toolGroups.map((group, idx) => (
                     <div key={idx} className="relative p-8 rounded-[32px] bg-[#111A24] border border-white/10 overflow-hidden group">
                       <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#38BDF8]/10 rounded-full blur-[50px] group-hover:bg-[#E94B3C]/20 transition-colors" />
                       
                       <h3 className="text-2xl font-black text-white mb-6 relative z-10">{group.category}</h3>
                       <ul className="space-y-4 relative z-10">
                         {group.tools.map((tool, tIdx) => (
                           <li key={tIdx} className="text-slate-300 font-medium flex items-center gap-4 text-lg">
                             <div className="w-3 h-3 rounded bg-gradient-to-r from-[#E94B3C] to-[#FF8A7A] shadow-[0_0_10px_rgba(233,75,60,0.5)]" />
                             {tool}
                           </li>
                         ))}
                       </ul>
                     </div>
                   ))}
                 </div>
               </section>
            )}

          </div>

          {/* Sticky Sidebar */}
          <div className="xl:col-span-4" data-aos="fade-left">
            <div className="sticky top-32 p-10 rounded-[32px] bg-gradient-to-br from-[#1A2332] to-[#0D131C] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2">Kickstart Your Career</h3>
                <p className="text-slate-400 text-sm">Join thousands of students placed globally.</p>
              </div>

              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="font-bold block">100% Placement Support</span>
                    <span className="text-xs text-slate-400">Dedicated career team & interviews</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#38BDF8]/20 flex items-center justify-center shrink-0">
                    <PlayCircle className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <span className="font-bold block">Live Project Training</span>
                    <span className="text-xs text-slate-400">Work on actual industry blueprints</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="font-bold block">Global Certification</span>
                    <span className="text-xs text-slate-400">Valuable CADD Centre credential</span>
                  </div>
                </li>
              </ul>
              
              <button 
                onClick={() => window.location.href = '/contact'}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#E94B3C] to-[#D4382A] text-white text-lg font-black uppercase tracking-widest transition-all shadow-[0_15px_30px_rgba(233,75,60,0.3)] hover:shadow-[0_20px_40px_rgba(233,75,60,0.5)] hover:-translate-y-1"
              >
                Apply for Admission
              </button>

              {/* Career Paths */}
              {course.careerPaths && (
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
                     Target Career Roles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.careerPaths.map((path, idx) => (
                      <span key={idx} className="px-3 py-2 rounded-lg bg-white/5 text-xs font-bold text-slate-300">
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* SEO Location Footer */}
              {course.seoLocation && (
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                   <p className="text-[11px] text-slate-500 font-medium">
                     {course.seoLocation}
                   </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
