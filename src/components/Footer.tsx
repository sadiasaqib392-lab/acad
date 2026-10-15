import React from 'react';
import { Logo } from './Logo';
import { PageRoute } from '../types';
import { ACADEMY_CONFIG } from '../data/academyData';
import { IslamicPattern } from './IslamicPattern';

interface FooterProps {
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnroll }) => {
  // Navigation links for Line 2:
  // Home · About · Courses · How It Works · Packages · Blog · FAQ · Contact
  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Courses', page: 'courses' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Packages', page: 'pricing' },
    { label: 'Blog', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <footer className="bg-[#072C1E] text-slate-300 py-10 px-4 sm:px-8 border-t-2 border-[#D4AF37]/40 relative overflow-hidden">
      <IslamicPattern variant="dark" opacity={0.08} />
      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        {/* LINE 1: Logo & Smaller Academy Name on Left, Enrollment Button on Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-emerald-900/60">
          <a
            href={`${window.location.origin}${window.location.pathname}#/home`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none transition-transform hover:opacity-95"
          >
            <Logo size="sm" variant="light" isFooter={true} />
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenEnroll()}
              className="py-2.5 px-6 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5BE48] hover:to-[#D4AF37] text-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              3 Days Free Trial
            </button>
          </div>
        </div>

        {/* LINE 2: All Navigation Links in ONE Single Line */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs text-emerald-100/90 font-medium py-1">
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              <a
                href={`${window.location.origin}${window.location.pathname}#/${link.page}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="text-emerald-700/60 select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* LINE 3: Social Media Account Icons & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-emerald-900/60 text-xs text-emerald-200/70">
          {/* Copyright */}
          <p className="text-center sm:text-left text-xs">
            © {new Date().getFullYear()} Quran Education. All rights reserved.
          </p>

          {/* Social Media Account Logos & Clickable Links */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={ACADEMY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-8 h-8 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
              </svg>
            </a>

            {/* Facebook Messenger */}
            <a
              href={ACADEMY_CONFIG.socialLinks.messenger}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on Facebook Messenger"
              className="w-8 h-8 rounded-full bg-blue-500/20 hover:bg-blue-600 text-blue-400 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.518 3.735 7.206V22l3.376-1.854c.91.252 1.88.388 2.889.388 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.042 12.443l-2.656-2.833-5.185 2.833 5.703-6.057 2.723 2.833 5.118-2.833-5.703 6.057z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={ACADEMY_CONFIG.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="w-8 h-8 rounded-full bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={ACADEMY_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Account"
              className="w-8 h-8 rounded-full bg-pink-500/20 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-pink-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href={ACADEMY_CONFIG.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="w-8 h-8 rounded-full bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href={ACADEMY_CONFIG.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile"
              className="w-8 h-8 rounded-full bg-slate-700/40 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
