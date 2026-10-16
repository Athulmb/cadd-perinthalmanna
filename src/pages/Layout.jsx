import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import DemoModal from '../components/DemoModal';
import SmoothScroll from '../components/motion/SmoothScroll';

export default function Layout() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#080D14] text-white font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#0284C7]/30 selection:text-[#38BDF8] overflow-clip">
        <Navbar onOpenDemo={() => setDemoOpen(true)} />
        
        <main>
          <Outlet context={{ setDemoOpen }} />
        </main>

        <Footer onOpenDemo={() => setDemoOpen(true)} />
        <FloatingContact />
        <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </SmoothScroll>
  );
}
