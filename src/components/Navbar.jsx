import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // All our heroes are now dark, so we always use white text before scrolling
  const useDarkText = false;
  const textColorClass = useDarkText ? 'text-[#1C2533]' : 'text-white';
  const textDimClass = useDarkText ? 'text-[#687282] hover:text-[#1C2533]' : 'text-white/90 hover:text-white';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 pointer-events-auto transition-[background-color,backdrop-filter,box-shadow,padding] duration-300 ease-out ${
          scrolled
            ? 'bg-[#080D14]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3 sm:py-3.5'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center group cursor-pointer focus:outline-none shrink-0"
            aria-label="CADD Centre Perinthalmanna Home"
          >
            <img
              src={useDarkText ? "/logo-color.png" : "/CADD.png"}
              alt="CADD Centre Perinthalmanna"
              className="h-10 sm:h-12 lg:h-[54px] w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            <Link
              to="/"
              className={`text-[13.5px] font-medium transition-colors ${
                location.pathname === '/' ? textColorClass : textDimClass
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-[13.5px] font-medium transition-colors ${
                location.pathname === '/about' ? textColorClass : textDimClass
              }`}
            >
              About Us
            </Link>
            <Link
              to="/courses"
              className={`text-[13.5px] font-medium transition-colors ${
                location.pathname === '/courses' ? textColorClass : textDimClass
              }`}
            >
              Courses
            </Link>
            <Link
              to="/blog"
              className={`text-[13.5px] font-medium transition-colors ${
                location.pathname === '/blog' ? textColorClass : textDimClass
              }`}
            >
              Blog
            </Link>

            {/* Dark Translucent Contact Us Button */}
            <button
              type="button"
              onClick={onOpenDemo}
              className={`${
                useDarkText 
                  ? 'bg-white hover:bg-[#F5F4F1] border border-[#1C2533]/10 hover:border-[#1C2533]/30 text-[#1C2533]' 
                  : 'bg-[#071724]/90 hover:bg-[#071724] border border-white/25 hover:border-white/50 text-white'
              } text-[13.5px] font-medium px-4.5 py-2 rounded-[8px] transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenDemo}
              className={`${
                useDarkText 
                  ? 'bg-white border-[#1C2533]/20 text-[#1C2533]' 
                  : 'bg-[#071724]/90 border-white/20 text-white'
              } border text-[11px] font-medium px-3 py-1.5 rounded-[6px]`}
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-[6px] border ${
                useDarkText 
                  ? 'bg-white border-[#1C2533]/20 text-[#1C2533]' 
                  : 'bg-[#071724]/90 border-white/20 text-white'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu (Always dark for simplicity and contrast) */}
      {mobileMenuOpen && (
        <div className="fixed top-16 inset-x-4 z-40 bg-[#071724]/95 backdrop-blur-lg border border-white/20 rounded-[14px] p-4 flex flex-col gap-3 md:hidden shadow-2xl">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-white/90 hover:text-white py-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-white/90 hover:text-white py-1"
          >
            About Us
          </Link>
          <Link
            to="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-white/90 hover:text-white py-1"
          >
            Courses
          </Link>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-white/90 hover:text-white py-1"
          >
            Blog
          </Link>
        </div>
      )}
    </>
  );
}
