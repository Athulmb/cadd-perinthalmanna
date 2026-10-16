import React, { useState } from 'react';
import { BookOpen, GraduationCap, Building2, Cpu, PenTool, Layers, ShieldCheck, Wrench, BarChart3 } from 'lucide-react';
import { disciplinesData } from '../../data/disciplinesData';
import CourseBottomSheet from '../CourseBottomSheet';

export default function AboutDisciplines({ onOpenDemo }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const iconMap = {
    Palette: PenTool,
    Layers: Layers,
    Shield: ShieldCheck,
    Landmark: Building2,
    BarChart3: BarChart3,
    Building: Building2,
    Box: Cpu,
    Wrench: Wrench,
    Cpu: Cpu
  };

  return (
    <>
      <section className="py-24 sm:py-32 bg-[#F9F7F1] font-serif">
        <div className="max-w-[1400px] mx-auto px-6" data-aos="fade-up">
          
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl text-[#8A2E2C] font-normal mb-6 tracking-wide">
              Specialized Disciplines
            </h2>
            <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#2C2C2C] max-w-3xl">
              Explore our comprehensive range of industry-aligned training programs, carefully structured to build mastery in engineering, architecture, and management software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplinesData.map((discipline, idx) => {
              const IconComp = iconMap[discipline.iconName] || Building2;
              
              return (
                <div
                  key={discipline.id}
                  onClick={() => setSelectedCourse(discipline)}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 3) * 100}
                  className="group relative bg-white border border-[#D3D6CB] p-10 flex flex-col items-center text-center cursor-pointer hover:bg-[#E94B3C] transition-colors duration-500 ease-out"
                >
                  <div className="text-[#8A2E2C] group-hover:text-white transition-colors duration-500 mb-8">
                    <IconComp className="w-12 h-12 stroke-[1.5]" />
                  </div>
                  
                  <h4 className="text-2xl font-normal text-[#1A1A1A] group-hover:text-white transition-colors duration-500 leading-snug mb-4">
                    {discipline.cardTitle}
                  </h4>
                  
                  <div className="w-12 h-[1px] bg-[#D3D6CB] group-hover:bg-white/50 transition-colors duration-500 mb-6" />
                  
                  <p className="text-sm font-sans font-bold tracking-[0.2em] text-[#E94B3C] group-hover:text-white transition-colors duration-500">
                    EXPLORE <span className="ml-1">→</span>
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CourseBottomSheet
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse}
        badgeLabel={selectedCourse?.title}
        onOpenDemo={onOpenDemo}
      />
    </>
  );
}
