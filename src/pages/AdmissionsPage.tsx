import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  CheckCircle2,
  PhoneCall,
  Clock,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { PageRoute } from '../types';
import { courses, ACADEMY_CONFIG } from '../data/academyData';

interface AdmissionsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    age: '',
    country: '',
    whatsappNumber: '',
    email: '',
    courseId: 'basic-arabic',
    preferredTime: 'Evening (5:00 PM - 9:00 PM)',
    teacherPreference: 'Any Qualified Scholar',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getCourseTitle = () => {
    const selected = courses.find((c) => c.id === formData.courseId || c.slug === formData.courseId);
    return selected ? selected.title : 'Quran Course';
  };

  const generateWhatsAppMessage = () => {
    const courseTitle = getCourseTitle();
    const text =
      `*Assalamu Alaykum! Admissions Application at Quran Education*\n\n` +
      `*Student Name:* ${formData.studentName || 'Not specified'}\n` +
      `*Parent Name:* ${formData.parentName || 'Self'}\n` +
      `*Age:* ${formData.age || 'N/A'}\n` +
      `*Course:* ${courseTitle}\n` +
      `*Country/City:* ${formData.country || 'Not specified'}\n` +
      `*WhatsApp Phone:* ${formData.whatsappNumber || 'Not specified'}\n` +
      `*Preferred Schedule:* ${formData.preferredTime}\n` +
      `*Teacher Preference:* ${formData.teacherPreference}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      (formData.message ? `*Notes:* ${formData.message}\n` : '') +
      `\n_Please review my application and schedule my 3-Day Free Trial. JazakAllah Khair!_`;

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
      handleOpenWhatsApp();
    }, 700);
  };

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <section className="relative pt-12 pb-20 bg-[#FAF8F5] border-b border-slate-200">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Open Enrollment • Worldwide Admissions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Admissions & 3-Day Free Trial
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Begin your Quranic journey with no obligation. Submit your enrollment details below, or send them directly to our admissions team on WhatsApp for instantaneous scheduling.
          </p>
        </div>
      </section>

      {/* Main Admissions Content */}
      <section className="relative py-20 bg-white">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
            {/* Left Form */}
            <div className="lg:col-span-8 bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#072C1E] mb-2">
                Online Enrollment Form
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Fill in the details below. You can also open and submit directly in WhatsApp with 1 click.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h4 className="text-xl font-bold font-serif text-[#072C1E]">
                    JazakAllah Khair! Admissions Form Received
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our academic coordinator has received your details and will connect with you via WhatsApp at{' '}
                    <span className="font-semibold text-emerald-800">
                      {formData.whatsappNumber || 'your number'}
                    </span>{' '}
                    to assign your scholar and schedule your first trial class.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleOpenWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold text-xs shadow-md hover:bg-[#20BD5A] transition-all cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                      </svg>
                      <span>Open Application on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 bg-white text-slate-700 rounded-xl font-semibold text-xs border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Submit Another Student
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Student Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maryam Fatima"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Parent / Guardian Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Asif Raza"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Student Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 7 years"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Country & City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. London, United Kingdom / Lahore, Pakistan"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +44 7911 123456"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. student@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.courseId}
                      onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] font-medium"
                    >
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.title} ({course.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      >
                        <option>Morning (8:00 AM - 12:00 PM)</option>
                        <option>Afternoon (1:00 PM - 5:00 PM)</option>
                        <option>Evening (5:00 PM - 9:00 PM)</option>
                        <option>Night (9:00 PM - Midnight)</option>
                        <option>Weekend Only</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Teacher Preference
                      </label>
                      <select
                        value={formData.teacherPreference}
                        onChange={(e) => setFormData({ ...formData, teacherPreference: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      >
                        <option>Any Qualified Scholar</option>
                        <option>Female Scholar (Recommended for Sisters & Kids)</option>
                        <option>Senior Male Scholar / Qari</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Notes or Prior Experience
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Has completed Noorani Qaida, wants to start Para 1 Nazra..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 px-4 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit & Schedule Free Trial</span>
                          <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenWhatsApp}
                      className="py-3.5 px-5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                      </svg>
                      <span>Instant WhatsApp Application</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Information Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-7 rounded-3xl bg-[#072C1E] text-white space-y-4">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Direct Counseling Line
                </span>
                <h4 className="text-xl font-serif font-bold text-white">
                  Speak Directly with an Academic Counselor
                </h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Have questions regarding fee structure, scheduling, or curriculum for multiple children? Our advisors are active on WhatsApp 24/7.
                </p>

                <a
                  href={ACADEMY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20BD5A] transition-colors w-full justify-center shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                  </svg>
                  <span>Chat: {ACADEMY_CONFIG.phone}</span>
                </a>
              </div>

              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-slate-200 space-y-3">
                <h4 className="text-sm font-serif font-bold text-[#072C1E]">
                  The 3-Day Free Trial Guarantee:
                </h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>3 complimentary 1-on-1 private lessons</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>No credit card or upfront payment needed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Test your assigned scholar’s teaching style</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Receive detailed assessment of student level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
