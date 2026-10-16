import React from 'react';
import { useOutletContext } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import PlacementSection from '../components/PlacementSection';

export default function Placements() {
  const { setDemoOpen } = useOutletContext();

  return (
    <>
      <PageHeader 
        title="Placements" 
        subtitle="Your launchpad to a successful career. We ensure our students find the right opportunities." 
        breadcrumbs="Placements"
      />
      <div className="py-12 mb-24">
        <PlacementSection onOpenDemo={() => setDemoOpen(true)} />
      </div>
    </>
  );
}
