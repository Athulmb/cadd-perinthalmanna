import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import { useOutletContext } from 'react-router-dom';

export default function Reviews() {
  const { setDemoOpen } = useOutletContext();

  return (
    <>
      <PageHeader 
        title="Student Reviews" 
        subtitle="Hear what our alumni have to say about their journey with us." 
        breadcrumbs="Reviews"
      />
      <div className="py-12">
        <Testimonials />
      </div>
      <div className="pb-24">
        <FaqSection onOpenDemo={() => setDemoOpen(true)} />
      </div>
    </>
  );
}
