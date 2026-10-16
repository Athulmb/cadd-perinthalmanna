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

export const faqData = [
    {
      id: 1,
      category: 'institute',
      question: 'What makes your CADD Centre in Perinthalmanna a leading CAD training centre?',
      answer: 'Our CADD Centre in Perinthalmanna, Malappuram provides industry-focused training in CAD, BIM, MEP, Interior Design, Structural Design, Product Design, 3D Visualization, and Project Planning & Management. Training combines software skills, practical exercises, project workflows, and career-oriented learning.'
    },
    {
      id: 2,
      category: 'institute',
      question: 'Why choose your CAD Institute in Perinthalmanna, Malappuram?',
      answer: 'Students and professionals choose our CAD training institute in Perinthalmanna to develop practical skills in industry-relevant design and engineering software. Our programs are suitable for beginners, engineering students, graduates, designers, architects, and working professionals.'
    },
    {
      id: 3,
      category: 'autocad-civil',
      question: 'What CAD courses are available in Perinthalmanna?',
      answer: 'Our CAD programs include AutoCAD, AutoCAD Architecture, AutoCAD Civil 3D, AutoCAD Mechanical, AutoCAD Electrical, and MicroStation. Course selection depends on your educational background and career specialization.'
    },
    {
      id: 4,
      category: 'autocad-civil',
      question: 'What is the best AutoCAD course in Perinthalmanna?',
      answer: 'The right AutoCAD course in Perinthalmanna depends on your career objective. General AutoCAD is suitable for technical drafting, while AutoCAD Architecture, Civil 3D, Mechanical, and Electrical are designed for specific engineering and design disciplines.'
    },
    {
      id: 5,
      category: 'bim',
      question: 'Do you offer the best BIM courses in Perinthalmanna?',
      answer: 'We offer career-focused BIM training in Perinthalmanna covering Revit Architecture, Revit Structure, Revit MEP, Navisworks, Dynamo, BIM 360, Autodesk Construction Cloud, and COBie. Programs are designed to develop practical BIM modeling and coordination skills.'
    },
    {
      id: 6,
      category: 'bim',
      question: 'Is there a BIM training institute in Malappuram for engineering students?',
      answer: 'Yes. Students looking for BIM training in Malappuram can choose programs based on their specialization, including Architecture, Civil & Structural Engineering, and MEP. Training focuses on BIM modeling, documentation, coordination, and industry workflows.'
    },
    {
      id: 7,
      category: 'mep-mech',
      question: 'Do you provide MEP courses in Perinthalmanna?',
      answer: 'Yes. Our MEP courses in Perinthalmanna cover HVAC, electrical systems, plumbing, fire protection, Revit MEP, Navisworks, BIM coordination, and related MEP workflows.'
    },
    {
      id: 8,
      category: 'interior-vis',
      question: 'What is included in the Interior Design course in Perinthalmanna?',
      answer: 'The Interior Design course in Perinthalmanna covers tools and workflows such as AutoCAD, 3ds Max, SketchUp, V-Ray, Corona Renderer, Enscape, Lumion, and Photoshop, along with 2D planning, 3D modeling, materials, lighting, rendering, and presentation.'
    },
    {
      id: 9,
      category: 'mep-mech',
      question: 'Do you offer Product Design and SolidWorks training in Malappuram?',
      answer: 'Yes. Our Product Design and SolidWorks training in Malappuram focuses on 2D drafting, 3D part modeling, assembly design, sheet metal, surface modeling, engineering drawings, and manufacturing documentation.'
    },
    {
      id: 10,
      category: 'interior-vis',
      question: 'Is 3ds Max training available in Perinthalmanna?',
      answer: 'Yes. Our 3ds Max training in Perinthalmanna focuses on 3D modeling, materials and textures, lighting, V-Ray and Corona rendering, environment creation, visualization, and professional presentation workflows.'
    },
    {
      id: 11,
      category: 'institute',
      question: 'Do you provide Project Planning & Management training?',
      answer: 'Yes. Our Project Planning & Management courses in Perinthalmanna include Primavera P6 and Microsoft Project, covering WBS, scheduling, resource management, baseline management, progress tracking, delay analysis, and project reporting.'
    },
    {
      id: 12,
      category: 'eligibility-careers',
      question: 'Who can join CAD, BIM and MEP training in Perinthalmanna?',
      answer: 'Our courses are suitable for students, fresh graduates, engineers, architects, interior designers, mechanical professionals, electrical engineers, civil professionals, and working professionals who want to develop or upgrade their technical skills.'
    },
    {
      id: 13,
      category: 'eligibility-careers',
      question: 'Do you provide practical and live project-based training?',
      answer: 'Yes. Our training emphasizes practical exercises and live project-based workflows, helping learners understand how CAD, BIM, MEP, design, and project management software are applied in real-world projects.'
    },
    {
      id: 14,
      category: 'eligibility-careers',
      question: 'Do you provide placement and career support?',
      answer: 'Career guidance and placement support are provided according to the selected program and applicable eligibility. Students receive guidance related to resume preparation, interview preparation, portfolio development, and career opportunities.'
    },
    {
      id: 15,
      category: 'institute',
      question: 'Where is the CADD & CAD Training Centre located?',
      answer: 'Our training centre is located at Livehi Arcade, Calicut Road, Above BeautyMark Gold, Perinthalmanna, Kerala 679321, making it easily accessible to students and engineering professionals from Perinthalmanna and across Malappuram.'
    },
    {
      id: 16,
      category: 'institute',
      question: 'How can I choose the right CAD or BIM course for my career?',
      answer: 'The best course depends on your qualification, engineering or design stream, current software knowledge, and career goal. Our team can help you identify a suitable course based on your professional interests and specialization.'
    },
    {
      id: 17,
      category: 'institute',
      question: 'Why should I choose a CAD, BIM or MEP course in Perinthalmanna?',
      answer: 'Choosing a specialized CAD, BIM, or MEP course in Perinthalmanna can help you develop technical software skills relevant to architecture, construction, engineering, manufacturing, and project management. A practical, industry-oriented learning approach can also help you build stronger project and portfolio skills.'
    },
    {
      id: 18,
      category: 'institute',
      question: 'Which is the best CAD and BIM training centre in Perinthalmanna?',
      answer: 'Our training centre provides industry-focused training in CAD, BIM, MEP, structural design, interior design, civil engineering, mechanical design, and project management, with practical and live project-based learning.'
    },
    {
      id: 19,
      category: 'autocad-civil',
      question: 'Is AutoCAD Civil 3D training available in Perinthalmanna?',
      answer: 'Yes. The AutoCAD Civil 3D course covers surveying, surface modeling, alignments, profiles, road and corridor design, grading, pipe networks, quantity takeoff, and civil engineering documentation.'
    },
    {
      id: 20,
      category: 'autocad-civil',
      question: 'Is MicroStation training available in Perinthalmanna?',
      answer: 'Yes. MicroStation training covers 2D engineering drafting, surveying and mapping, topographic mapping, road and highway design, site development, geometric design, and infrastructure documentation.'
    },
    {
      id: 21,
      category: 'eligibility-careers',
      question: 'Are the courses suitable for beginners?',
      answer: 'Yes. Courses are structured to help beginners, students, graduates, and working professionals develop software skills progressively from fundamentals to industry workflows.'
    },
    {
      id: 22,
      category: 'autocad-civil',
      question: 'Which course is best for civil engineering students?',
      answer: 'Depending on your career goal, suitable options include AutoCAD, Civil 3D, Revit Structure, STAAD.Pro, ETABS, SAFE, Tekla Structures, and BIM for Architecture & Engineering.'
    },
    {
      id: 23,
      category: 'bim',
      question: 'Which BIM course is best for architecture students?',
      answer: 'Revit Architecture and BIM for Architecture are suitable choices for students interested in architectural BIM modeling, documentation, coordination, and construction workflows.'
    },
    {
      id: 24,
      category: 'mep-mech',
      question: 'Which courses are suitable for mechanical engineers?',
      answer: 'Mechanical professionals can choose from AutoCAD Mechanical, SolidWorks, Creo, CATIA, and Product Design programs based on their career objectives.'
    },
    {
      id: 25,
      category: 'mep-mech',
      question: 'Which courses are available for electrical and MEP engineers?',
      answer: 'Training options include AutoCAD Electrical, Revit MEP, MEP with BIM, HVAC, Electrical Systems, Plumbing, Fire Protection, and BIM Coordination.'
    },
    {
      id: 26,
      category: 'eligibility-careers',
      question: 'Do you provide certificates after course completion?',
      answer: 'Yes. Course completion certificates are provided according to the selected training program and applicable certification requirements.'
    },
    {
      id: 27,
      category: 'eligibility-careers',
      question: 'Can working professionals join CAD and BIM courses?',
      answer: 'Yes. Training programs offer flexible batch schedules suitable for students, fresh graduates, engineers, designers, architects, and working professionals looking to upgrade their technical skills.'
    },
    {
      id: 28,
      category: 'bim',
      question: 'What are the career opportunities after completing a BIM course?',
      answer: 'Graduates can pursue high-demand roles such as BIM Modeler, BIM Coordinator, Revit Technician, BIM Engineer, and Construction Coordinator across India and the Middle East.'
    },
    {
      id: 29,
      category: 'interior-vis',
      question: 'What are the career opportunities after completing an interior design course?',
      answer: 'Students can build exciting careers as Interior Designers, 3D Architectural Visualizers, Space Planners, Residential & Commercial CAD Detailers, or start their own design practice.'
    }
  ];
