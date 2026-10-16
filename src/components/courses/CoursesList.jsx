import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Layers, ArrowUpRight, GraduationCap } from 'lucide-react';
import Button from '../ui/Button';
import { fetchCourses } from '../../data/api';

// Short chip labels for the filter row; falls back to the full name when unmapped.
const DISCIPLINE_SHORT = {
  'Interior Design': 'Interior Design',
  'BIM [Building Information Modelling]': 'BIM [Building Information Modelling]',
  'MEP with BIM': 'MEP with BIM',
  'Product Design': 'Product Design',
  'Structural Design': 'Structural Design',
  'Surveying & Transportation': 'Surveying & Transportation',
  'Project Planning & Management': 'Project Planning & Management',
  'CADD': 'CADD'
};

// Compact course tile. The course NAME is the primary element; the photograph is a
// backdrop, not the content. Sized so a full row of courses is scannable at a glance.
function CourseTile({ item, onSelectCourse }) {
  return (
    <button
      type="button"
      onClick={() => onSelectCourse(item)}
      aria-label={`${item.title} — view syllabus`}
      className="group relative block w-full h-[132px] sm:h-[164px] rounded-[12px] overflow-hidden border border-white/10 bg-[#171A20] text-left cursor-pointer transition-all duration-200 hover:border-[#E94B3C]/70 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E94B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D14]"
    >
      <img
        src={item.img}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.04] transition-all duration-300"
      />

      {/* Legibility scrim: keeps the course name readable over any photograph */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080D14] via-[#080D14]/75 to-[#080D14]/15 pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[9.5px] font-bold text-[#FF7A5C] uppercase tracking-wider truncate">
            {item.category}
          </span>
          {item.duration && (
            <span className="shrink-0 text-[9px] font-semibold text-white/85 px-1.5 py-0.5 rounded-[4px] bg-white/12 border border-white/10">
              {item.duration}
            </span>
          )}
        </div>

        <h4 className="text-[12px] sm:text-[14px] font-bold text-white leading-snug line-clamp-3 sm:line-clamp-2">
          {item.title}
        </h4>

        {/* Secondary detail — revealed on hover/focus, never required to identify a course */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] transition-[grid-template-rows] duration-200">
          <div className="overflow-hidden">
            <p className="pt-1 text-[10px] text-slate-300/90 font-medium truncate">
              {item.tools}
            </p>
          </div>
        </div>
      </div>

      <span className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#E94B3C] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
        <ArrowUpRight className="w-3.5 h-3.5" />
      </span>
    </button>
  );
}

export default function CoursesList({ onOpenDemo }) {
  const navigate = useNavigate();
  const [activeDiscipline, setActiveDiscipline] = useState('all');
  
  // API State
  const [allCourses, setAllCourses] = useState([]);
  const [coursesByDiscipline, setCoursesByDiscipline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    fetchCourses().then(({ courses, disciplines }) => {
      setAllCourses(courses);
      
      const grouped = disciplines.map((name) => ({
        name,
        shortName: DISCIPLINE_SHORT[name] || name,
        courses: courses.filter((c) => c.discipline === name)
      })).filter((g) => g.courses.length > 0);
      
      setCoursesByDiscipline(grouped);
      setLoading(false);
    });
  }, []);

  const visibleGroups =
    activeDiscipline === 'all'
      ? coursesByDiscipline
      : coursesByDiscipline.filter((g) => g.name === activeDiscipline);

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center bg-[#080D14]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E94B3C]"></div>
      </div>
    );
  }

  return (
    <section
      id="features"
      className="relative py-10 sm:py-20 bg-[#080D14] text-white font-['Plus_Jakarta_Sans',sans-serif] border-t border-white/5"
    >
      <div id="portfolio" className="absolute -top-12 left-0 pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* COMPACT SECTION HEADER — the catalogue must start high on the page */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
          <div className="max-w-2xl space-y-1.5">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E94B3C]" />
              <span className="text-[10px] font-bold text-[#E94B3C] uppercase tracking-[0.2em]">
                Course Offerings
              </span>
            </div>

            <h2 className="text-2xl sm:text-[32px] font-extrabold text-white tracking-tight leading-tight">
              Find the Right Course for Your Career
            </h2>

            <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed">
              Practical, software-oriented programs in AutoCAD, Revit BIM, SolidWorks, MEP, and Project Planning tailored for real-world engineering careers.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0">
            <GraduationCap className="w-4 h-4 text-[#E94B3C]" />
            <span>
              <strong className="text-white font-bold">{allCourses.length}</strong> courses across{' '}
              <strong className="text-white font-bold">{coursesByDiscipline.length}</strong> disciplines
            </span>
          </div>
        </div>

        {/* DISCIPLINE FILTER — optional shortcut, never a prerequisite for discovery */}
        <div className="flex flex-wrap items-center gap-1.5 pb-5 mb-6 border-b border-white/10">
          <button
            type="button"
            onClick={() => setActiveDiscipline('all')}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors cursor-pointer ${
              activeDiscipline === 'all'
                ? 'bg-[#E94B3C] text-white'
                : 'bg-white/8 text-slate-300 hover:bg-white/15 hover:text-white'
            }`}
          >
            All {allCourses.length}
          </button>
          {coursesByDiscipline.map((group) => (
            <button
              key={group.name}
              type="button"
              onClick={() => setActiveDiscipline(group.name)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors cursor-pointer ${
                activeDiscipline === group.name
                  ? 'bg-[#E94B3C] text-white'
                  : 'bg-white/8 text-slate-300 hover:bg-white/15 hover:text-white'
              }`}
            >
              {group.shortName}
              <span className="ml-1.5 opacity-60">{group.courses.length}</span>
            </button>
          ))}
        </div>

        {/* THE CATALOGUE — uniform grid, grouped by discipline, nothing hidden */}
        <div className="space-y-6 sm:space-y-8">
          {visibleGroups.map((group) => (
            <div key={group.name}>
              {/* No nowrap: the long group names plus the count overflow a 320px
                  screen, so the row is allowed to wrap instead. */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                <Layers className="w-3.5 h-3.5 text-[#E94B3C] shrink-0" />
                <h3 className="text-[12px] sm:text-[13px] font-extrabold text-white uppercase tracking-[0.14em] min-w-0">
                  {group.name}
                </h3>
                <span className="text-[11px] font-semibold text-slate-500 shrink-0">
                  {group.courses.length} course{group.courses.length === 1 ? '' : 's'}
                </span>
                <span className="hidden sm:block flex-1 h-px bg-white/10" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-3.5">
                {group.courses.map((item) => (
                  <CourseTile
                    key={item.id}
                    item={item}
                    onSelectCourse={(course) => navigate(`/courses/${course.id}`)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note + enquiry CTA */}
        <div className="mt-9 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400 flex items-center gap-1.5 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 text-[#E94B3C] shrink-0" />
            Click any course to see its syllabus, tools, workflow and career outcomes.
          </p>
          <Button onClick={onOpenDemo} variant="primary" size="sm">
            Enquire About Admissions
          </Button>
        </div>

      </div>
    </section>
  );
}
