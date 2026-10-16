import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import HomepageEvents from '../components/events/HomepageEvents';
import { fetchEvents } from '../data/api';

export default function Events() {
  const { setDemoOpen } = useOutletContext();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetchEvents().then(data => {
      setEvents(data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <PageHeader 
        title="Events & Seminars" 
        subtitle="Stay updated with our latest workshops, seminars, and campus events." 
        breadcrumbs="Events"
      />
      <div className="py-12 mb-24">
        <HomepageEvents events={events} onOpenDemo={() => setDemoOpen(true)} />
      </div>
    </>
  );
}
