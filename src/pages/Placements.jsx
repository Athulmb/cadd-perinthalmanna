import React, { useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import PlacementsHero from '../components/placements/PlacementsHero';
import PlacementSection from '../components/PlacementSection';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';

export default function Placements() {
  const { setDemoOpen } = useOutletContext();
  const placementShowRef = useRef(null);

  const handleScrollToPlacements = () => {
    if (placementShowRef.current) {
      placementShowRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#080D14] text-white min-h-screen font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Dedicated Placements Hero Section */}
      <PlacementsHero 
        onScrollToPlacements={handleScrollToPlacements}
      />

      {/* 2. The Interactive Placement Showcase from Home Page */}
      <div ref={placementShowRef} className="relative">
        <PlacementSection onOpenDemo={() => setDemoOpen(true)} />
      </div>

      {/* 3. Student Reviews & Testimonials */}
      <Testimonials />

      {/* 4. Placement FAQs & Career Guidance */}
      <div className="pb-16">
        <FaqSection onOpenDemo={() => setDemoOpen(true)} />
      </div>
    </div>
  );
}
