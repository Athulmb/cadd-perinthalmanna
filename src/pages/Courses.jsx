import React, { useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import CoursesHero from '../components/courses/CoursesHero';
import CoursesList from '../components/courses/CoursesList';
import PlacementSection from '../components/PlacementSection';

export default function Courses() {
  const { setDemoOpen } = useOutletContext();
  
  // Reference for smooth scrolling from hero button
  const listRef = useRef(null);

  const handleExplore = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#080D14] text-white min-h-screen font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Custom Hero Section */}
      <CoursesHero onOpenDemo={handleExplore} />
      
      {/* 2. The interactive course list catalog */}
      <div ref={listRef} className="bg-[#080D14] pb-24">
        <CoursesList onOpenDemo={() => setDemoOpen(true)} />
      </div>

      {/* 3. Placement Section */}
      <PlacementSection />
    </div>
  );
}
