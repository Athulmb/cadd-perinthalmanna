import React, { useState } from 'react';
import { 
  Building2, Wrench, Cpu, Layers, ShieldCheck, PenTool, Box, Landmark, BarChart3, 
  ArrowUpRight
} from 'lucide-react';
import { disciplinesData } from '../../data/disciplinesData';
import DisciplineModal from '../DisciplineModal';

const iconMap = {
  Building: Building2, 
  Wrench, 
  Cpu, 
  Layers, 
  Shield: ShieldCheck, 
  Palette: PenTool, 
  Box, 
  Landmark, 
  BarChart3
};

export default function CoursesDisciplines({ onOpenDemo }) {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDisciplines = disciplinesData.filter((d) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'civil' && ['surveying-transportation', 'bim', 'structural-design', 'interior-design'].includes(d.id)) return true;
    if (activeFilter === 'mech' && ['mechanical-cadd', 'product-design'].includes(d.id)) return true;
    if (activeFilter === 'elec' && ['electrical-cadd', 'mep'].includes(d.id)) return true;
    if (activeFilter === 'mgmt' && ['ppm'].includes(d.id)) return true;
    return true;
  });

  return (
    <section className="py-24 sm:py-32 bg-[#0A111A] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Explore Disciplines
            </h2>
            <p className="text-[16px] md:text-[18px] text-slate-400 max-w-2xl">
              Filter through our specialized engineering and design programs to find the perfect path for your career.
            </p>
          </div>
          
          {/* Elegant Filter Tabs */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'civil', label: 'Civil & BIM' },
              { id: 'mech', label: 'Mechanical' },
              { id: 'elec', label: 'Electrical' },
              { id: 'mgmt', label: 'Management' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`text-[13px] font-semibold tracking-wider uppercase transition-all pb-2 border-b-2 ${
                  activeFilter === tab.id
                    ? 'text-[#E94B3C] border-[#E94B3C]'
                    : 'text-slate-500 border-transparent hover:text-white hover:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDisciplines.map((discipline, idx) => {
            const IconComp = iconMap[discipline.iconName] || Building2;
            return (
              <div
                key={discipline.id}
                onClick={() => setSelectedDiscipline(discipline)}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
                className="group relative bg-[#0F1722] border border-white/5 rounded-2xl p-10 flex flex-col items-start cursor-pointer hover:border-[#E94B3C]/50 hover:bg-[#121B27] transition-all duration-300 ease-out shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-[#E94B3C] mb-8 group-hover:scale-110 group-hover:bg-[#E94B3C]/10 transition-all duration-300">
                  <IconComp className="w-7 h-7 stroke-[1.5]" />
                </div>
                
                <h4 className="text-xl font-bold text-white leading-snug mb-4 group-hover:text-[#E94B3C] transition-colors">
                  {discipline.cardTitle}
                </h4>
                
                <p className="text-sm font-semibold tracking-[0.15em] text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center gap-2 mt-auto">
                  EXPLORE <ArrowUpRight className="w-4 h-4" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      <DisciplineModal
        discipline={selectedDiscipline}
        isOpen={!!selectedDiscipline}
        onClose={() => setSelectedDiscipline(null)}
        onEnquire={() => {
          setSelectedDiscipline(null);
          onOpenDemo(selectedDiscipline?.title);
        }}
      />
    </section>
  );
}
