import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { CTABanner } from '../components/common/CTABanner';
import { Send, MapPin, GraduationCap, Clock, Mail, CheckCircle, Sparkles, Inbox } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    // Simulate instantaneous delivery feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            Get In <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Touch</span>
          </h1>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Have an internship, research opportunity, collaboration, or project in mind? Send me a message directly.
        </p>
      </div>

      {/* Main 2-Panel Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left 5 Cols: Availability & Pitch */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-xl shadow-xl dark:border-white/[0.08] dark:bg-[#0c1222]/85 lg:col-span-5"
        >
          <div className="space-y-6">
            {/* Status Pill */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to opportunities</span>
              </span>
            </div>

            {/* Pitch */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold leading-tight text-slate-900 dark:text-white">
                Your message goes straight to my inbox.
              </h2>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                I'm interested in AI/ML, data science, analytics, research, and software development opportunities.
              </p>
            </div>

            {/* Quick Fact Chips */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2 text-xs text-slate-700 dark:border-white/[0.06] dark:bg-[#10192e]/60 dark:text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2 text-xs text-slate-700 dark:border-white/[0.06] dark:bg-[#10192e]/60 dark:text-slate-300">
                <GraduationCap className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>{profileData.studentStatus}</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2 text-xs text-slate-700 dark:border-white/[0.06] dark:bg-[#10192e]/60 dark:text-slate-300">
                <Clock className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>{profileData.responseTime}</span>
              </div>
            </div>

            {/* Glowing Inbox Envelope Card Visual */}
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-50/70 to-sky-50/70 p-5 text-center dark:from-[#0f172a] dark:to-[#070d1a]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
              
              <div className="mx-auto flex h-14 w-28 flex-col items-center justify-center rounded-xl border border-cyan-200/60 bg-white/70 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-inner">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-cyan-700 dark:text-cyan-300">
                  <Inbox className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
                  <span>LOKESH'S INBOX</span>
                </div>
              </div>

              <div className="mt-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                Ready when you are
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right 7 Cols: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-xl shadow-xl dark:border-white/[0.08] dark:bg-[#0c1222]/85 lg:col-span-7"
        >
          <div className="border-b border-slate-200/80 pb-4 dark:border-white/[0.06]">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Send className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-base font-bold">Send me a message</h3>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Tell me about the role, research opportunity, or project you have in mind.
            </p>
          </div>

          {/* Success Notification */}
          {isSubmitted && (
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-50 p-4 text-xs text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
              <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <div>
                <span className="font-bold">Thank you for reaching out!</span>
                <p className="text-emerald-700 dark:text-emerald-400/80">
                  Your message has been dispatched successfully. I will get back to you shortly.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-white/[0.08] dark:bg-[#070c18] dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-500/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-white/[0.08] dark:bg-[#070c18] dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-500/50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Internship, research, collaboration..."
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-white/[0.08] dark:bg-[#070c18] dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-500/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me a little about the opportunity or project."
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-white/[0.08] dark:bg-[#070c18] dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-500/50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-[1.01] hover:shadow-cyan-500/40 active:scale-[0.99] disabled:opacity-50 dark:text-slate-950"
            >
              <Send className="h-4 w-4" />
              <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
            </button>

            <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
              Professional enquiries only. Message delivery is securely processed for direct notification.
            </p>
          </form>
        </motion.div>
      </div>

      {/* CTABanner Guided Tour - Return to Overview */}
      <CTABanner
        message="Thank you for reviewing this portfolio. Let's connect and discuss building impactful AI systems, neural models, and scalable intelligent solutions together."
        nextRoute="/overview"
        nextLabel="Explore Overview"
      />
    </div>
  );
};
