import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { CTABanner } from '../components/common/CTABanner';
import { Send, MapPin, GraduationCap, Clock, Mail, CheckCircle2, Terminal } from 'lucide-react';

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
          <div className="h-5 w-[3px] bg-[var(--accent-amber)] shadow-[0_0_6px_var(--accent-glow)] rounded-[1px]" />
          <h1 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Get In Touch
          </h1>
          <span className="meta-label outline-tag px-2 py-0.5">
            TRANSMISSION CHANNEL
          </span>
        </div>
        <p className="max-w-3xl text-xs md:text-sm text-[var(--text-secondary)]">
          Have an internship, research opportunity, machine learning project, or collaboration in mind? Send a direct message.
        </p>
      </div>

      {/* Main 2-Panel Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left 5 Cols: Availability & Pitch in Bevel Panel */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col justify-between bevel-panel p-6 lg:col-span-5"
        >
          <div className="space-y-5">
            {/* Status Tag */}
            <div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[var(--accent-amber)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded-[2px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)] animate-pulse" />
                <span>ACCEPTING INQUIRIES // OPEN</span>
              </span>
            </div>

            {/* Pitch */}
            <div className="space-y-1.5">
              <h2 className="font-sans text-xl font-bold tracking-tight text-[var(--text-primary)]">
                Direct Communication Channel
              </h2>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                Seeking AI/ML engineering, data science, and deep learning roles. Let's discuss requirements, architecture, or research directions.
              </p>
            </div>

            {/* Quick Fact Chips in Bevel Style */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-2 font-mono text-xs text-[var(--text-secondary)]">
                <MapPin className="h-3.5 w-3.5 text-[var(--accent-amber)]" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-2 font-mono text-xs text-[var(--text-secondary)]">
                <GraduationCap className="h-3.5 w-3.5 text-[var(--accent-amber)]" />
                <span>{profileData.studentStatus}</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-2 font-mono tabular-nums text-xs text-[var(--text-secondary)]">
                <Clock className="h-3.5 w-3.5 text-[var(--accent-amber)]" />
                <span>RESPONSE: {profileData.responseTime}</span>
              </div>
            </div>

            {/* Terminal Channel Visual */}
            <div className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3 font-mono text-[10px] text-[var(--text-muted)] space-y-1">
              <div className="text-[var(--text-muted)]">// Direct channel telemetry</div>
              <div className="text-[var(--accent-amber)]">&gt; HOST: lokeshpuma2704@gmail.com</div>
              <div className="text-[var(--text-secondary)]">&gt; PGP / ENCRYPTED INBOX: READY _</div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[var(--border-hairline)]">
            <a
              href={`mailto:${profileData.socials.email}`}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--accent-amber)] hover:underline"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>SEND VIA EMAIL CLIENT ↗</span>
            </a>
          </div>
        </motion.div>

        {/* Right 7 Cols: Contact Form in Bevel Panel */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="bevel-panel p-6 lg:col-span-7"
        >
          {isSubmitted ? (
            <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent-amber)]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-sans text-base font-bold text-[var(--text-primary)]">
                Transmission Received
              </h3>
              <p className="max-w-md font-mono text-xs text-[var(--text-secondary)]">
                Thank you for reaching out. I have logged your message and will reply within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-4 py-2 font-mono text-xs font-bold text-[var(--accent-amber)] hover:bg-[var(--accent-amber)] hover:text-white dark:hover:text-black transition-colors"
              >
                SEND ANOTHER TRANSMISSION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[var(--border-hairline)] pb-3 flex items-center justify-between">
                <span className="meta-label">
                  INPUT PACKET // ENCRYPTED
                </span>
                <span className="font-mono text-[9px] text-[var(--accent-amber)]">SECURE DISPATCH</span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-1">
                  <label className="meta-label block">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Elena Rostova"
                    className="w-full rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-2 font-mono text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent-border)]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="meta-label block">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="elena@company.com"
                    className="w-full rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-2 font-mono text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent-border)]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="meta-label block">
                  TOPIC / PURPOSE
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. AI Internship / ML Project Collaboration"
                  className="w-full rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-2 font-mono text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent-border)]"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="meta-label block">
                  TRANSMISSION PAYLOAD *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your initiative, role requirements, or project scope..."
                  className="w-full rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-2 font-mono text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent-border)] resize-none"
                />
              </div>

              {/* Submit Button in Tactile Outline Fills on Hover */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] py-2.5 font-mono text-xs font-bold tracking-wider text-[var(--accent-amber)] transition-all hover:bg-[var(--accent-amber)] hover:text-white dark:hover:text-black disabled:opacity-50 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>DISPATCHING TRANSMISSION...</span>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    <span>DISPATCH MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* CTABanner */}
      <CTABanner
        message="Thank you for reviewing my portfolio and technical proofs. I look forward to connecting and discussing how I can deliver impact for your team."
        nextRoute="/overview"
        nextLabel="Return to Overview"
      />
    </div>
  );
};
