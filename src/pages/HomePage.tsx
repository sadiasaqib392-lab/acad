import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Phone,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { PageRoute } from '../types';
import {
  courses,
  testimonials,
  ACADEMY_CONFIG,
} from '../data/academyData';

interface HomePageProps {
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnroll }) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 3-slide image slider with TWO images per slide
  const slides = [
    {
      id: 1,
      title: 'Sacred Recitation & Tajweed',
      subtitle: 'Master authentic pronunciation with qualified Huffaz',
      image1: {
        src: '/assets/images/hero_quran_rehal_1790269853962.jpg',
        alt: 'Holy Quran on carved wooden Rehal',
        caption: 'Holy Quran Recitation',
      },
      image2: {
        src: '/assets/images/quran_tajweed_reading_1790269867429.jpg',
        alt: 'Tajweed Quran reading with wooden pointer',
        caption: 'Makharij & Tajweed Practice',
      },
    },
    {
      id: 2,
      title: 'Qualified Scholars & Academy Pedagogy',
      subtitle: 'Guidance from Al-Azhar and Madinah University alumni',
      image1: {
        src: '/assets/images/islamic_academy_learning_1790269898921.jpg',
        alt: 'Student in Islamic academy Quran lesson',
        caption: 'Personalized 1-on-1 Lessons',
      },
      image2: {
        src: '/assets/images/teacher_scholar_male_1790269882669.jpg',
        alt: 'Certified Scholar and Quran Mentor',
        caption: 'Certified & Ijazah Scholars',
      },
    },
    {
      id: 3,
      title: 'Global Online Classes from Home',
      subtitle: 'Engaging interactive learning for children and adults',
      image1: {
        src: '/assets/images/student_quran_online.jpg',
        alt: 'Young student with headphones learning Quran online',
        caption: 'Online Digital Classroom',
      },
      image2: {
        src: '/assets/images/quran_hifz_study.jpg',
        alt: 'Illuminated Holy Quran in peaceful study room',
        caption: 'Lasting Quran Memorization',
      },
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // User-specified statistics:
  // Students: 1000+, Teachers: 150+, Courses: 10+, Countries: 24+
  const stats = [
    { label: 'Students', value: '1000+' },
    { label: 'Teachers', value: '150+' },
    { label: 'Courses', value: '10+' },
    { label: 'Countries', value: '24+' },
  ];


  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Home Page – Main Section */}
      <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#FAF8F5]/60 via-white/50 to-[#FAF8F5]/60 border-b border-slate-200/60">
        <IslamicPattern variant="light" opacity={0.6} patternType="star8" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          {/* BISMILLAH IN THE CENTER (No line in front of it) */}
          <div className="text-center w-full select-none">
            <div className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#0A3826] font-bold tracking-wider inline-block">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
          </div>

          {/* Heading Content & Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-5">
              {/* Main Heading: Premier International Islamic Online Academy */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-black leading-[1.18] tracking-tight">
                Premier International Islamic Online Academy
              </h1>

              {/* Immediately below Bismillah/Heading: 3-Day Free Trial Classes Available */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A3826] text-[#D4AF37] text-xs sm:text-sm font-bold shadow-md">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>3-Day Free Trial Classes Available</span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Learn Quran reading, Tajweed, Memorization, Translation, and Arabic from certified male and female scholars from Al-Azhar and Islamic University of Madinah. Flexible timing across all time zones.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  onClick={() => onOpenEnroll()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#0A3826] to-[#072C1E] hover:from-[#0E4B33] hover:to-[#0A3826] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-emerald-950/20 hover:shadow-xl active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>Book 3-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <a
                  href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    'As-salamu alaykum! I would like to inquire about online Quran classes and book a 3-Day Free Trial.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 whitespace-nowrap"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                  </svg>
                  <span>WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Right: Three-Slide Image Slider (Each Slide Contains TWO Images) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-emerald-900/15 shadow-2xl p-3 sm:p-4">
                {/* 2-Image pairing per slide */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {/* Image 1 of current slide */}
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 group">
                      <img
                        src={slides[currentSlide].image1.src}
                        alt={slides[currentSlide].image1.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-2 right-2 text-[10px] sm:text-xs font-bold text-white leading-tight drop-shadow-sm text-left">
                        {slides[currentSlide].image1.caption}
                      </span>
                    </div>

                    {/* Image 2 of current slide */}
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 group">
                      <img
                        src={slides[currentSlide].image2.src}
                        alt={slides[currentSlide].image2.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-2 right-2 text-[10px] sm:text-xs font-bold text-white leading-tight drop-shadow-sm text-left">
                        {slides[currentSlide].image2.caption}
                      </span>
                    </div>
                  </div>

                  {/* Caption banner below images */}
                  <div className="mt-3 p-3 rounded-xl bg-[#072C1E] text-white flex items-center justify-between gap-2 text-left">
                    <div>
                      <p className="text-xs font-bold text-[#D4AF37]">
                        {slides[currentSlide].title}
                      </p>
                      <p className="text-[11px] text-emerald-100/80 line-clamp-1">
                        {slides[currentSlide].subtitle}
                      </p>
                    </div>

                    {/* Slide Navigation Buttons */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={prevSlide}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentSlide === i ? 'w-6 bg-[#0A3826]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Statistics:
          Students: 1000+
          Teachers: 150+
          Courses: 10+
          Countries: 24+
      */}
      <section className="relative py-10 bg-white/60 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-2xl bg-white/80 border border-slate-200/70 shadow-xs hover:bg-white transition-colors"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#0A3826] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Families Choose Us
          - Heading: Why Families Choose Us
          - Sub-heading: Qualified & Experienced Teachers
          - Text: Our teachers have qualifications and Islamic studies backgrounds from recognized institutions, including Al-Azhar and the Islamic University of Madinah.
          - Buttons below: Enroll Now + WhatsApp
      */}
      <section className="relative py-20 bg-[#FAF8F5]/60">
        <IslamicPattern variant="light" opacity={0.6} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Islamic Academic Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Why Families Choose Us
          </h2>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A3826]">
              Qualified & Experienced Teachers
            </h3>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Our teachers have qualifications and Islamic studies backgrounds from recognized institutions, including Al-Azhar and the Islamic University of Madinah.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-[#0A3826] font-semibold rounded-lg">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Ijazah Certified Scholars
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-[#0A3826] font-semibold rounded-lg">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Male & Female Tutors
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-[#0A3826] font-semibold rounded-lg">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                1-on-1 Dedicated Lessons
              </span>
            </div>

            {/* Two Buttons below this section: Enroll Now & WhatsApp */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenEnroll()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <a
                href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  'As-salamu alaykum! I would like to inquire about enrolling in Quran Education.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                </svg>
                <span>WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Courses Section (Tafseer removed, Translation kept, Basic Arabic & Quranic Arabic retained) */}
      <section className="relative py-20 bg-white/60">
        <IslamicPattern variant="subtle" opacity={0.65} patternType="girih" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
            <div>
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest font-serif">
                Comprehensive Curriculum
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E] mt-1">
                Our Quran & Arabic Courses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
                Structured programs including Basic Arabic, Quranic Arabic, and Translation taught 1-on-1 by certified scholars.
              </p>
            </div>

            <a
              href={`${window.location.origin}${window.location.pathname}#/courses`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A3826] hover:text-[#072C1E] group cursor-pointer"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-[#FAF8F5] rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#0A3826]">
                      {course.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {course.level}
                    </span>
                  </div>

                  <div className="font-arabic text-lg text-[#0A3826] mb-1 font-semibold">
                    {course.arabicTitle}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {course.shortDesc}
                  </p>


                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-2">
                  <a
                    href={`${window.location.origin}${window.location.pathname}#/course/${course.slug || course.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-300 transition-colors text-center cursor-pointer"
                  >
                    View Details
                  </a>
                  <button
                    onClick={() => onOpenEnroll(course.id)}
                    className="flex-1 py-2.5 px-3 bg-[#0A3826] hover:bg-[#072C1E] text-white text-xs font-bold rounded-xl transition-colors text-center cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How Your Journey Begins
          - Sirf do buttons:
            1. Contact Academy (opens academy contact form)
            2. WhatsApp (opens academy WhatsApp chat)
            - Is ke ilawa jo b tha remove kr diya gaya hai
      */}
      <section className="relative py-20 bg-[#FAF8F5]/60">
        <IslamicPattern variant="light" opacity={0.6} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Simple & Seamless Enrollment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            How Your Journey Begins
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Getting started takes less than 2 minutes. Reach out to our academy or chat directly with us on WhatsApp to schedule your 3-Day Free Trial.
          </p>

          {/* Sirf do buttons: Contact Academy and WhatsApp */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${window.location.origin}${window.location.pathname}#/contact`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Contact Academy</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </a>

            <a
              href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                'As-salamu alaykum! I would like to begin my Quran learning journey and schedule my 3-Day Free Trial.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
              </svg>
              <span>WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
            </a>
          </div>
        </div>
      </section>

      {/* NOTE: Sections Removed from Home Page as explicitly requested:
          - Distinguished Faculty section: REMOVED
          - Begin Your Quran Learning Journey Today section: REMOVED
      */}

      {/* 7. Student Reviews / Testimonials Section
          - Heading: What Our Students & Parents Say
          - Text: Trusted by 200+ Muslim Families
      */}
      <section className="relative py-20 bg-white/60">
        <IslamicPattern variant="subtle" opacity={0.65} patternType="arabesque" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="space-y-3 mb-12">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest font-serif">
              Trusted by 200+ Muslim Families
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E]">
              What Our Students & Parents Say
            </h2>
          </div>

          <div className="relative bg-[#FAF8F5] p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
            <Quote className="w-10 h-10 text-[#C5A059]/40 mx-auto mb-4" />

            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-serif italic mb-6">
              "{testimonials[activeTestimonialIdx]?.quote}"
            </p>

            <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>

            <h4 className="text-base font-bold text-[#072C1E]">
              {testimonials[activeTestimonialIdx]?.name}
            </h4>
            <p className="text-xs text-slate-500">
              {testimonials[activeTestimonialIdx]?.role} ·{' '}
              {testimonials[activeTestimonialIdx]?.location}
            </p>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === idx
                      ? 'w-8 bg-[#0A3826]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
