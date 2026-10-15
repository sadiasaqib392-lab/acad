import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { EnrollmentModal } from './components/EnrollmentModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { TeachersPage } from './pages/TeachersPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { BlogPage } from './pages/BlogPage';
import { FAQPage } from './pages/FAQPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [courseSlug, setCourseSlug] = useState('basic-arabic');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollCourseId, setEnrollCourseId] = useState('basic-arabic');

  // Multi-page hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      if (hash.startsWith('course/')) {
        const slug = hash.replace('course/', '');
        setCourseSlug(slug);
        setCurrentPage('course-detail');
        return;
      }

      if (hash === 'packages') {
        setCurrentPage('pricing');
        return;
      }


      const validPages: PageRoute[] = [
        'home',
        'about',
        'courses',
        'course-detail',
        'teachers',
        'how-it-works',
        'pricing',
        'admissions',
        'blog',
        'faq',
        'testimonials',
        'contact',
        'privacy',
        'terms',
      ];

      if (validPages.includes(hash as PageRoute)) {
        setCurrentPage(hash as PageRoute);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, slug?: string) => {
    if (page === 'course-detail' && slug) {
      setCourseSlug(slug);
      window.location.hash = `/course/${slug}`;
    } else {
      window.location.hash = `/${page}`;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnroll = (courseId?: string) => {
    if (courseId) {
      setEnrollCourseId(courseId);
    }
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-800 font-sans selection:bg-[#0A3826] selection:text-white relative">
      {/* Site-wide Islamic Geometric Background Pattern from user upload (/WhatsApp Image 2026-09-25 at 10.20.39 PM.jpeg) */}
      <div
        className="fixed inset-0 pointer-events-none select-none z-0 opacity-85"
        style={{
          backgroundImage: `url('/WhatsApp%20Image%202026-09-25%20at%2010.20.39%20PM.jpeg')`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center top',
          backgroundSize: '366px 178px',
        }}
        aria-hidden="true"
      />

      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Main Multi-page Body */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage === 'course-detail' ? `course-${courseSlug}` : currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {currentPage === 'home' && (
              <HomePage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'about' && (
              <AboutPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'courses' && (
              <CoursesPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'course-detail' && (
              <CourseDetailPage
                courseSlug={courseSlug}
                onNavigate={handleNavigate}
                onOpenEnroll={handleOpenEnroll}
              />
            )}
            {currentPage === 'teachers' && (
              <TeachersPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'how-it-works' && (
              <HowItWorksPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'pricing' && (
              <PricingPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'admissions' && (
              <AdmissionsPage onNavigate={handleNavigate} />
            )}
            {currentPage === 'blog' && (
              <BlogPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'faq' && (
              <FAQPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'testimonials' && (
              <TestimonialsPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'contact' && <ContactPage />}
            {currentPage === 'privacy' && (
              <LegalPage initialTab="privacy" onNavigate={handleNavigate} />
            )}
            {currentPage === 'terms' && (
              <LegalPage initialTab="terms" onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />

      {/* Floating 24/7 WhatsApp Widget */}
      <WhatsAppWidget />

      {/* WhatsApp 3-Day Free Trial Enrollment Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        initialCourseId={enrollCourseId}
      />
    </div>
  );
}
