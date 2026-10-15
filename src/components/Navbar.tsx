import React, { useState, useEffect } from 'react';
import { Phone, Mail, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { PageRoute } from '../types';
import { ACADEMY_CONFIG } from '../data/academyData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnroll,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items specified by user:
  // Home, About, Courses, How It Works, Packages, Blog, FAQ, Contact, Enroll
  const navLinks: { label: string; page: PageRoute; isAction?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Courses', page: 'courses' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Packages', page: 'pricing' },
    { label: 'Blog', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
    { label: 'Enroll', page: 'admissions', isAction: true },
  ];

  // Open pages in new tab as requested, or dispatch navigation
  const handleNavClick = (page: PageRoute, isAction?: boolean) => {
    if (isAction) {
      onOpenEnroll();
      return;
    }
    // Open in a new tab as explicitly required: "All pages should open in a new tab when clicked"
    const targetUrl = `${window.location.origin}${window.location.pathname}#/${page}`;
    window.open(targetUrl, '_blank');
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-[#072C1E] text-emerald-100/90 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${ACADEMY_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono tracking-wider font-semibold">{ACADEMY_CONFIG.phone}</span>
            </a>

            <a
              href={`mailto:${ACADEMY_CONFIG.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{ACADEMY_CONFIG.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
            <button
              onClick={() => onOpenEnroll()}
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-semibold hover:bg-[#D4AF37]/30 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>3 Days Free Trial</span>
            </button>

            <a
              href={`${window.location.origin}${window.location.pathname}#/testimonials`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-medium hidden sm:inline"
            >
              Student Reviews
            </a>

            <span className="text-emerald-800 hidden sm:inline" aria-hidden="true">
              |
            </span>

            <a
              href={ACADEMY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] font-bold hover:underline inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
              </svg>
              <span>WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar: Logo on Left, Nav in Center, Enroll button on Right */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-emerald-950/5'
            : 'bg-[#FAF8F5]/95 backdrop-blur-sm py-3 sm:py-3.5 border-b border-slate-200/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <div className="shrink-0 flex items-center">
            <a
              href={`${window.location.origin}${window.location.pathname}#/home`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none transition-transform hover:opacity-95"
              aria-label="Quran Education Home"
            >
              <Logo size="md" variant="dark" />
            </a>
          </div>

          {/* Navigation Menu in Center (Desktop) - No hamburger menu on desktop */}
          <nav className="hidden lg:flex items-center justify-center gap-3.5 xl:gap-5 flex-1 px-4">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <a
                  key={link.label}
                  href={`${window.location.origin}${window.location.pathname}#/${link.page}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (link.isAction) {
                      e.preventDefault();
                      onOpenEnroll();
                    }
                  }}
                  className={`relative text-xs xl:text-sm font-semibold tracking-wide transition-colors py-1 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#0A3826] font-bold'
                      : 'text-slate-700 hover:text-[#0A3826]'
                  } ${link.isAction ? 'text-[#0A3826] font-bold underline underline-offset-4 decoration-[#D4AF37]' : ''}`}
                >
                  {link.label}
                  {isActive && !link.isAction && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button on Right: 3 Days Free Trial & Enroll */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenEnroll()}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0A3826] to-[#072C1E] hover:from-[#0E4B33] hover:to-[#0A3826] text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-md shadow-emerald-950/15 hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>3 Days Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Buttons ONLY (< lg) - Desktop hamburger is strictly removed */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnroll()}
              className="px-3 py-1.5 bg-[#0A3826] text-white rounded-lg text-[11px] font-bold tracking-wider uppercase shadow-xs whitespace-nowrap"
            >
              Trial
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0A3826] focus:outline-none rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-emerald-950/10 shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 text-left">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`${window.location.origin}${window.location.pathname}#/${link.page}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (link.isAction) {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    onOpenEnroll();
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className={`text-left text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-colors ${
                  currentPage === link.page
                    ? 'bg-emerald-50 text-[#0A3826] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnroll();
              }}
              className="w-full py-3 bg-[#0A3826] text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>3 Days Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>

            <a
              href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                'As-salamu alaykum! I would like to inquire about online Quran classes and 3-Day Free Trial.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
              </svg>
              <span>WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
