import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import BlogHero from '../components/blog/BlogHero';
import BlogFeatured from '../components/blog/BlogFeatured';
import BlogList from '../components/blog/BlogList';
import HomepageEvents from '../components/events/HomepageEvents';
import Testimonials from '../components/Testimonials';
import { fetchBlogs, fetchEvents } from '../data/api';

export default function Blog() {
  const { setDemoOpen } = useOutletContext();
  const [blogs, setBlogs] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadBlogs = async () => {
      const data = await fetchBlogs();
      // Reverse array so newest is first (assuming newest is added last) or assume backend is sorted
      setBlogs(data.reverse()); 
      
      const eventsData = await fetchEvents();
      setEvents(eventsData);
      
      setLoading(false);
    };
    loadBlogs();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const interval = setInterval(() => {
        setFeaturedIndex((prev) => (prev + 1) % blogs.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [blogs.length]);

  if (loading) return <div className="bg-[#080D14] min-h-screen flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="bg-[#080D14] min-h-screen">
      <BlogHero />
      {blogs.length > 0 && (
        <div key={blogs[featuredIndex].id} className="animate-in fade-in duration-1000">
          <BlogFeatured featuredPost={blogs[featuredIndex]} />
        </div>
      )}
      <BlogList posts={blogs} />
      <HomepageEvents events={events} onOpenDemo={() => setDemoOpen(true)} />
      <Testimonials />
    </div>
  );
}
