import React from 'react';
import { Sparkles, Award, ShieldCheck, Heart, BookOpen, Globe2, ArrowRight } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { PageRoute } from '../types';
import { ACADEMY_CONFIG } from '../data/academyData';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnroll: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnroll }) => {
  const pillars = [
    {
      icon: Award,
      title: 'Precision in Tajweed',
      desc: 'Recitation that honors every letter’s Makhraj and Sifah, maintaining the divine cadence as revealed to Prophet Muhammad (PBUH).',
    },
    {
      icon: BookOpen,
      title: 'Deep Comprehension',
      desc: 'Moving beyond mere pronunciation to understanding the meaning, context, and message of the verses through word-for-word Tafseer.',
    },
    {
      icon: Heart,
      title: 'Lasting Memorization',
      desc: 'Systematic Hifz methodology based on traditional 3-tier revision (Sabaq, Sabqi, and Manzil) ensuring verses are permanently retained.',
    },
    {
      icon: ShieldCheck,
      title: 'Islamic Character (Akhlaq)',
      desc: 'Instilling adab, reverence, humbleness, and moral character in every student through the mentorship of upright practicing scholars.',
    },
  ];

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 bg-[#FAF8F5] border-b border-slate-200">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Preserving Sacred Knowledge</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            About Quran Education
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A premier international institution dedicated to illuminating lives through authentic Quranic recitation, Tajweed, Translation, and comprehensive Islamic studies.
          </p>

          {/* Academy Statistics Banner: Students: 1000+, Teachers: 150+ */}
          <div className="pt-8 max-w-xl mx-auto grid grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0A3826]">
                1000+
              </div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">
                Students
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0A3826]">
                150+
              </div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">
                Teachers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 bg-white">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest font-serif">
                Our Sacred Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E]">
                Empowering Muslim Families Worldwide with Sacred Quranic Tradition
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Quran Education Academy was founded with a singular conviction: every Muslim, regardless of geographic location or age, deserves access to certified scholars who recite the Book of Allah with unbroken chains of transmission (Sanad).
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We combine centuries-old Al-Azhar and Madinah pedagogical rigor with modern interactive video classrooms, making Quranic learning effortless, engaging, and spiritually uplifting for kids, youth, and adults.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-slate-200">
                  <h4 className="font-serif font-bold text-sm text-[#072C1E] mb-1">Our Mission</h4>
                  <p className="text-xs text-slate-600">
                    To make certified 1-on-1 Quran education accessible, affordable, and flexible for every household worldwide.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-slate-200">
                  <h4 className="font-serif font-bold text-sm text-[#072C1E] mb-1">Our Vision</h4>
                  <p className="text-xs text-slate-600">
                    To nurture a generation that recites with flawless Tajweed, understands the Quranic message, and lives its values with Ihsan.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-emerald-900/15 shadow-xl">
                <img
                  src="/assets/images/islamic_academy_learning_1790269898921.jpg"
                  alt="Islamic Academy Learning"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="relative py-20 bg-[#FAF8F5]">
        <IslamicPattern variant="light" opacity={0.035} patternType="star8" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest font-serif">
              Educational Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E]">
              Our Four Educational Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The foundational cornerstones that govern every course and interaction at Quran Education Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A3826] flex items-center justify-center mb-5 group-hover:bg-[#0A3826] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#072C1E] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authentic Sanad & Ijazah Section */}
      <section className="relative py-20 bg-[#072C1E] text-white overflow-hidden">
        <IslamicPattern variant="dark" opacity={0.08} patternType="star8" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-serif">
            Unbroken Chain of Transmission
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            The Sanctity of Ijazah & Sanad Mutassil
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
            In classical Islamic pedagogy, the Holy Quran cannot be acquired merely through self-reading. It must be received orally from mouth-to-ear through an unbroken chain of qualified scholars connecting directly to the Messenger of Allah (PBUH). Our senior scholars hold authentic Sanad in the Ten Qira’at.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnroll()}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5BE48] hover:to-[#D4AF37] text-slate-900 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Experience 1-on-1 Class
            </button>
            <button
              onClick={() => onNavigate('teachers')}
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border border-white/20 cursor-pointer"
            >
              Meet Our Scholars
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
