import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, Send, PhoneCall, ShieldCheck } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';
import { courses, ACADEMY_CONFIG } from '../data/academyData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialCourseId = 'basic-arabic',
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    age: '',
    country: '',
    whatsappNumber: '',
    email: '',
    courseId: initialCourseId,
    preferredTime: 'Evening (5:00 PM - 9:00 PM)',
    teacherPreference: 'Any Qualified Scholar',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialCourseId) {
      setFormData((prev) => ({ ...prev, courseId: initialCourseId }));
    }
  }, [initialCourseId]);

  const getCourseTitle = () => {
    const selected = courses.find((c) => c.id === formData.courseId || c.slug === formData.courseId);
    return selected ? selected.title : 'Quran Course';
  };

  const generateWhatsAppMessage = () => {
    const courseTitle = getCourseTitle();
    const text =
      `*Assalamu Alaykum! Quran Education Enrollment*\n\n` +
      `*Student Name:* ${formData.studentName || 'Not specified'}\n` +
      `*Parent Name:* ${formData.parentName || 'Self'}\n` +
      `*Age:* ${formData.age || 'N/A'}\n` +
      `*Course:* ${courseTitle}\n` +
      `*Country/City:* ${formData.country || 'Not specified'}\n` +
      `*WhatsApp Phone:* ${formData.whatsappNumber || 'Not specified'}\n` +
      `*Preferred Time:* ${formData.preferredTime}\n` +
      `*Teacher Preference:* ${formData.teacherPreference}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      (formData.message ? `*Notes:* ${formData.message}\n` : '') +
      `\n_Please confirm my 3-Day Free Trial class schedule. JazakAllah Khair!_`;

    return encodeURIComponent(text);
  };

  const handleOpenWhatsApp = () => {
    const url = `${ACADEMY_CONFIG.whatsappUrl}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Also automatically launch WhatsApp for optimal user convenience
      handleOpenWhatsApp();
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-6 border border-emerald-900/15 text-left"
      >
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-[#072C1E] via-[#0A3826] to-[#041B12] p-5 sm:p-7 text-white">
          <IslamicPattern variant="dark" opacity={0.08} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-emerald-200/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase">
              3-Day Free Trial • No Credit Card Required
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
            Enroll in Quran Education
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-md">
            Experience interactive 1-on-1 personalized lessons with certified male & female scholars from the comfort of your home.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 max-h-[78vh] overflow-y-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-xl font-bold font-serif text-[#072C1E]">
                JazakAllah Khair! Application Received
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Our academic coordinator is reviewing your schedule and will message you via WhatsApp at{' '}
                <span className="font-semibold text-emerald-800">
                  {formData.whatsappNumber || 'your phone number'}
                </span>{' '}
                to confirm your teacher and first 1-on-1 trial slot.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold text-xs shadow-md hover:bg-[#20BD5A] transition-all"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                  </svg>
                  <span>Chat on WhatsApp Directly</span>
                </button>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium text-xs hover:bg-slate-200 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ibrahim Khan"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name (if under 18)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tariq Khan"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 8 years / Adult"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Country & City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United Kingdom (London) / USA (Dallas)"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Number (with country code) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +44 7911 123456 / +92 318 7779954"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. family@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Select Desired Course <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all font-medium text-slate-800"
                >
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all text-slate-700"
                  >
                    <option>Morning (8:00 AM - 12:00 PM)</option>
                    <option>Afternoon (1:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 9:00 PM)</option>
                    <option>Night (9:00 PM - Midnight)</option>
                    <option>Weekend Only (Sat & Sun)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teacher Preference
                  </label>
                  <select
                    value={formData.teacherPreference}
                    onChange={(e) => setFormData({ ...formData, teacherPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all text-slate-700"
                  >
                    <option>Any Qualified Scholar</option>
                    <option>Female Scholar (Recommended for Sisters & Kids)</option>
                    <option>Senior Male Scholar / Qari</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes / Current Reading Level
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Beginner level, knows alphabet, wants to improve Tajweed rules..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#0A3826] to-[#072C1E] hover:from-[#0E4B33] hover:to-[#0A3826] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Scheduling Trial...</span>
                  ) : (
                    <>
                      <span>Book 3-Day Free Trial</span>
                      <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="py-3 px-5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                  </svg>
                  <span>Open in WhatsApp</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Confidential • Verified Certified Faculty • Free Class Rescheduling</span>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
