import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { ACADEMY_CONFIG } from '../data/academyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formulate the pre-filled message for WhatsApp
  const generateWhatsAppMessage = () => {
    const text =
      `*Assalamu Alaykum! Contact Inquiry - Quran Education*\n\n` +
      `*Name:* ${formData.name || 'Not specified'}\n` +
      `*Phone/WhatsApp:* ${formData.phone || 'Not specified'}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message || 'No additional message'}\n\n` +
      `_Sent from Quran Education Academy contact page. Please reply at your earliest._`;

    return encodeURIComponent(text);
  };

  // Direct trigger to WhatsApp
  const handleOpenWhatsApp = () => {
    const url = `${ACADEMY_CONFIG.whatsappUrl}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  // On form submit, automatically prepare and dispatch data to WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Automatically launch WhatsApp with the submitted details
      handleOpenWhatsApp();
    }, 500);
  };

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <section className="relative pt-12 pb-20 bg-[#FAF8F5] border-b border-slate-200">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>24/7 Global Academic Assistance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Contact Quran Education
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding courses, tutor assignment, fee packages, or trial scheduling? Our academic support team is active 24/7 across all international time zones.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-20 bg-white">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#072C1E] text-white p-7 sm:p-9 rounded-3xl shadow-xl relative overflow-hidden space-y-6">
                <IslamicPattern variant="dark" opacity={0.08} />

                <div>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    Official Academy Contact
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    Get in Touch with Us
                  </h3>
                  <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
                    Direct phone lines, email support, and round-the-clock WhatsApp counseling.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Direct Academy Phone: +92 309 6000449 */}
                  <a
                    href={`tel:${ACADEMY_CONFIG.phoneRaw}`}
                    className="flex items-center gap-4 text-emerald-100/90 hover:text-white transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-emerald-900/60 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-900 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-emerald-300/80 block">Direct Academy Phone</span>
                      <span className="font-mono text-base font-bold text-white tracking-wide">
                        {ACADEMY_CONFIG.phone}
                      </span>
                    </div>
                  </a>

                  {/* Email: info@quraneducation.uk */}
                  <a
                    href={`mailto:${ACADEMY_CONFIG.email}`}
                    className="flex items-center gap-4 text-emerald-100/90 hover:text-white transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-emerald-900/60 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-900 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-emerald-300/80 block">Email Inquiries</span>
                      <span className="text-xs font-semibold text-white break-all">
                        {ACADEMY_CONFIG.email}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp Support with "Click to Chat" Button */}
                  <div className="flex items-start gap-4 text-emerald-100/90 pt-1">
                    <div className="w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                      </svg>
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <span className="text-[11px] text-emerald-300/80 block">WhatsApp Support</span>
                      <span className="font-mono text-base font-bold text-[#25D366] block">
                        {ACADEMY_CONFIG.whatsapp}
                      </span>
                      {/* Click to Chat button */}
                      <a
                        href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                          'As-salamu alaykum! I am reaching out from the Quran Education contact page.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-[11px] font-bold shadow-xs transition-colors"
                      >
                        <span>Click to Chat</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-emerald-100/90 pt-2 border-t border-emerald-800/60">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-900/60 flex items-center justify-center text-[#D4AF37]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-emerald-300/80 block">Working Hours</span>
                      <span className="text-xs font-semibold text-white">
                        {ACADEMY_CONFIG.workingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#072C1E]">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>Serving Muslim Families Globally:</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  United Kingdom, United States, Canada, Australia, United Arab Emirates, Saudi Arabia, and Pakistan.
                </p>
              </div>
            </div>

            {/* Contact Form with Automatic WhatsApp Submission */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#072C1E] mb-2">
                  Send Your Inquiry
                </h3>
                <p className="text-xs text-slate-600">
                  Fill out the form below. When you click Submit, your message will automatically be sent to our WhatsApp support team (+92 318 7779954) for immediate assistance.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h4 className="text-xl font-bold font-serif text-[#072C1E]">
                    JazakAllah Khair! Form Submitted
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your details have been prepared for WhatsApp chat. If WhatsApp did not open automatically, click the button below to complete sending your message.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleOpenWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-bold text-xs shadow-md hover:bg-[#20BD5A] transition-all cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                      </svg>
                      <span>Open in WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3.5 bg-white text-slate-700 rounded-xl font-semibold text-xs border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Fill Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ahmad Tariq"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp / Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +92 318 7779954"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. family@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      >
                        <option>Course Inquiry</option>
                        <option>3-Day Free Trial Booking</option>
                        <option>Teacher Assignment Question</option>
                        <option>Tuition & Monthly Package</option>
                        <option>Other Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we assist you with online Quran learning?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                    />
                  </div>

                  {/* Submit Button (Dispatches directly to WhatsApp) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending to WhatsApp...</span>
                      ) : (
                        <>
                          <span>Submit & Send to WhatsApp</span>
                          <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Requirement 11:
                  - Add contact buttons below the contact form, similar to the existing contact form on the previous academy website.
                  - Add the relevant Messenger links for each social media account.
              */}
              <div className="pt-6 border-t border-slate-200">
                <span className="text-xs font-bold text-[#072C1E] uppercase tracking-wider block mb-3 text-center sm:text-left">
                  Instant Communication Channels:
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {/* WhatsApp */}
                  <a
                    href={ACADEMY_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-[#25D366] hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group"
                  >
                    <svg className="w-5 h-5 fill-[#25D366] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                      <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                    </svg>
                    <span className="text-[11px] font-bold">WhatsApp</span>
                  </a>

                  {/* Facebook Messenger */}
                  <a
                    href={ACADEMY_CONFIG.socialLinks.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-blue-600 hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group"
                  >
                    <svg className="w-5 h-5 fill-blue-600 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.518 3.735 7.206V22l3.376-1.854c.91.252 1.88.388 2.889.388 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.042 12.443l-2.656-2.833-5.185 2.833 5.703-6.057 2.723 2.833 5.118-2.833-5.703 6.057z" />
                    </svg>
                    <span className="text-[11px] font-bold">Messenger</span>
                  </a>

                  {/* Direct Phone */}
                  <a
                    href={`tel:${ACADEMY_CONFIG.phoneRaw}`}
                    className="p-3 bg-white hover:bg-[#0A3826] hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group"
                  >
                    <Phone className="w-5 h-5 text-emerald-700 group-hover:text-white transition-colors" />
                    <span className="text-[11px] font-bold">Phone Call</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${ACADEMY_CONFIG.email}`}
                    className="p-3 bg-white hover:bg-[#072C1E] hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group"
                  >
                    <Mail className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" />
                    <span className="text-[11px] font-bold">Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
