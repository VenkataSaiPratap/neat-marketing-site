"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Calendar, CheckCircle } from "lucide-react";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#07111E]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, rgba(217,119,6,0.04) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 bg-amber-500/10 border border-amber-500/20"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-medium text-amber-400">Free Strategy Session</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-slate-100">Build Your Next</span>
              <br />
              <span className="gradient-text">Product With a Team</span>
              <br />
              <span className="text-slate-100">That Feels In-House</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-10 leading-relaxed"
            >
              Fractional leadership. Dedicated engineering teams. Enterprise-grade execution.
              Your free strategy session is a 45-minute conversation — no decks, no pitches.
            </motion.p>

            {/* What to expect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {[
                "Deep dive into your technology challenges",
                "Tailored GCC team composition recommendation",
                "Fractional leadership fit assessment",
                "Cost savings estimate for your situation",
                "Clear 30-day activation roadmap",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-400 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Mail, label: "hello@filostech.io", href: "mailto:hello@filostech.io" },
                { icon: Phone, label: "+1 (888) 123-4567", href: "tel:+18881234567" },
              ].map(({ icon: Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-sky-400 transition-colors group"
                >
                  <Icon className="w-4 h-4" />
                  <span className="animated-underline">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 text-center border border-emerald-500/20 bg-emerald-500/5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">You&apos;re confirmed!</h3>
                <p className="text-slate-400 mb-6">
                  We&apos;ll reach out within 2 business hours to schedule your strategy session.
                  Check your email for a calendar invite.
                </p>
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 text-sm text-slate-500">
                  In the meantime, explore our{" "}
                  <a href="#case-studies" className="text-sky-400 hover:text-sky-300">case studies</a>{" "}
                  to see what we&apos;ve built.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-white/[0.07] space-y-5">
                <h3 className="text-xl font-bold text-slate-100 mb-2">Book Your Free Strategy Session</h3>
                <p className="text-sm text-slate-500 mb-2">45 minutes. No obligation. Real recommendations.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-2" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="Alex Johnson"
                      className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-2" htmlFor="email">Work Email *</label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="alex@company.com"
                      className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-2" htmlFor="company">Company *</label>
                  <input
                    id="company"
                    required
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm(p => ({ ...p, company: e.target.value }))}
                    placeholder="Your company name"
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-2" htmlFor="interest">Primary Interest</label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={(e) => setForm(p => ({ ...p, interest: e.target.value }))}
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all duration-200 appearance-none"
                  >
                    <option value="" className="bg-slate-900">Select an option...</option>
                    <option value="gcc" className="bg-slate-900">Global Capability Center</option>
                    <option value="fractional" className="bg-slate-900">Fractional Leadership</option>
                    <option value="both" className="bg-slate-900">Both GCC + Fractional</option>
                    <option value="advisory" className="bg-slate-900">Technology Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-2" htmlFor="challenge">Tell us about your challenge (optional)</label>
                  <textarea
                    id="challenge"
                    rows={3}
                    placeholder="What are you trying to build or solve?"
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 bg-amber-500 text-white font-semibold py-3.5 rounded-xl hover:bg-amber-600 transition-all duration-200 shadow-lg shadow-amber-600/25 text-sm cursor-pointer"
                >
                  Book Your Free Strategy Session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p className="text-xs text-slate-600 text-center">
                  No spam. No sales pressure. Just an honest conversation.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
