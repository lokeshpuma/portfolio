import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { CTABanner } from '../components/common/CTABanner';
import { GlassCard } from '../components/common/GlassCard';
import { MagneticButton } from '../components/common/MagneticButton';
import { Send, MapPin, GraduationCap, Clock, CheckCircle, Mail, Sparkles, Inbox } from 'lucide-react';

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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_12px_#06b6d4]" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            Get In <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Touch</span>
          </h1>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Have an engineering opportunity, research collaboration, or AI/ML project in mind? Send me a direct message.
        </p>
      </div>

      {/* Main 2-Panel Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left 5 Cols: Availability & Pitch */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 h-full"
        >
          <GlassCard className="flex flex-col justify-between h-full p-6 md:p-8" enableTilt={false}>
            <div className="space-y-6">
              {/* Status Pill */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700 backdrop-blur-md dark:border-emerald-400/30 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open to Opportunities</span>
                </span>
              </div>

              {/* Pitch */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-3xl">
                  Let's build something intelligent.
                </h2>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  I'm actively seeking AI/ML Engineer, Data Science, and Machine Learning opportunities to design and deploy high-impact models.
                </p>
              </div>

              {/* Quick Fact Chips */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/50 px-4 py-2.5 text-xs text-slate-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                  <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/50 px-4 py-2.5 text-xs text-slate-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                  <GraduationCap className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{profileData.studentStatus}</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/50 px-4 py-2.5 text-xs text-slate-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                  <Clock className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{profileData.responseTime}</span>
                </div>
              </div>

              {/* Glowing Glass Inbox Envelope Visual */}
              <div className="relative mt-6 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.06] via-blue-500/[0.04] to-purple-500/[0.04] p-6 text-center backdrop-blur-xl dark:border-white/10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
                
                <div className="mx-auto flex h-14 w-32 flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/70 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-mono font-bold text-cyan-700 dark:text-cyan-300">
                    <Inbox className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>LOKESH'S INBOX</span>
                  </div>
                </div>

                <div className="mt-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Direct Notification Channel
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right 7 Cols: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 h-full"
        >
          <GlassCard className="h-full p-6 md:p-8" enableTilt={false}>
            <div className="border-b border-white/10 pb-4 dark:border-white/[0.06]">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                <Send className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-base font-bold">Send me a message</h3>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Tell me about the engineering role, research opportunity, or project you have in mind.
              </p>
            </div>

            {/* Success Notification */}
            {isSubmitted && (
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-800 backdrop-blur-md dark:border-emerald-400/30 dark:text-emerald-300">
                <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <span className="font-bold">Thank you for reaching out!</span>
                  <p className="text-emerald-700 dark:text-emerald-400/80">
                    Your message has been dispatched successfully. I will get back to you promptly.
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
                    className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-sm backdrop-blur-xl transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder-slate-500"
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
                    className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-sm backdrop-blur-xl transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="AI Engineer role, research, collaboration..."
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-sm backdrop-blur-xl transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder-slate-500"
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
                  className="w-full resize-none rounded-2xl border border-white/20 bg-white/60 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-sm backdrop-blur-xl transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder-slate-500"
                />
              </div>

              <MagneticButton intensity={0.15} className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-[1.01] hover:shadow-cyan-500/40 active:scale-[0.99] disabled:opacity-50 dark:text-slate-950"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                </button>
              </MagneticButton>

              <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                Direct submission. Message delivery is securely processed with instant dispatch.
              </p>
            </form>
          </GlassCard>
        </motion.div>
      </div>

      {/* CTABanner Guided Tour */}
      <CTABanner
        message="Thank you for reviewing this portfolio. Let's connect and discuss building impactful AI systems, neural models, and scalable intelligent solutions together."
        nextRoute="/overview"
        nextLabel="Explore Overview"
      />
    </div>
  );
};
