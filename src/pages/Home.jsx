import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
import CoursesList from '../components/courses/CoursesList';
import PlacementSection from '../components/PlacementSection';
import HomepageEvents from '../components/events/HomepageEvents';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import { fetchEvents } from '../data/api';

export default function Home() {
  const { setDemoOpen } = useOutletContext();
  const [events, setEvents] = useState([]);

  React.useEffect(() => {
    fetchEvents().then(data => {
      setEvents(data);
    });
  }, []);
  return (
    <>
      <Hero onOpenDemo={() => setDemoOpen(true)} />
      <StatsBanner onOpenDemo={() => setDemoOpen(true)} />
      <CoursesList onOpenDemo={() => setDemoOpen(true)} />
      <PlacementSection onOpenDemo={() => setDemoOpen(true)} />
      <HomepageEvents events={events} onOpenDemo={() => setDemoOpen(true)} />
      <AboutUs onOpenDemo={() => setDemoOpen(true)} />
      <Testimonials />
      <FaqSection onOpenDemo={() => setDemoOpen(true)} />
    </>
  );
}
