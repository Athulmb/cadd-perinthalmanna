import React from 'react';
import { HelpCircle, ShieldCheck, PenTool, Layers, BookOpen, Wrench, Award } from 'lucide-react';

export const categories = [
  { id: 'all', label: 'All FAQs', icon: <HelpCircle className="w-4 h-4" /> },
  { id: 'institute', label: 'CADD Centre & Overview', icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 'autocad-civil', label: 'AutoCAD, Civil 3D & Civil', icon: <PenTool className="w-4 h-4" /> },
  { id: 'bim', label: 'BIM & Architecture', icon: <Layers className="w-4 h-4" /> },
  { id: 'interior-vis', label: 'Interior Design & 3ds Max', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'mep-mech', label: 'MEP, Mechanical & SolidWorks', icon: <Wrench className="w-4 h-4" /> },
  { id: 'eligibility-careers', label: 'Eligibility, Beginners & Careers', icon: <Award className="w-4 h-4" /> },
];
