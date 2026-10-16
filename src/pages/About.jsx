import React from 'react';
import { useOutletContext } from 'react-router-dom';
import StatsBanner from '../components/StatsBanner';
import AboutHero from '../components/about/AboutHero';
import AboutHistory from '../components/about/AboutHistory';
import AboutVision from '../components/about/AboutVision';
import AboutTestimonials from '../components/about/AboutTestimonials';
import AboutDisciplines from '../components/about/AboutDisciplines';

export default function About() {
  const { setDemoOpen } = useOutletContext();

  return (
    <>
      <AboutHero onOpenDemo={() => setDemoOpen(true)} />
      <AboutHistory />
      
      <div className="bg-[#F9F7F1]">
        <AboutVision />
        <AboutTestimonials />
        <AboutDisciplines onOpenDemo={() => setDemoOpen(true)} />
      </div>

      <div className="mb-24">
        <StatsBanner onOpenDemo={() => setDemoOpen(true)} />
      </div>
    </>
  );
}
