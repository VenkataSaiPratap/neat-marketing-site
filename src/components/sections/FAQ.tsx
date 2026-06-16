"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What exactly is a Global Capability Center (GCC)?",
    a: "A GCC is a dedicated offshore division that operates as a true extension of your company. Unlike traditional outsourcing, a GCC team works exclusively for you, using your tools, following your processes, and aligning to your culture. Think of it as building a satellite office — with all the talent benefits of global hiring and none of the operational complexity.",
  },
  {
    q: "How quickly can you assemble a GCC team?",
    a: "For standard team compositions, we can have your dedicated GCC team operational within 3–5 weeks. This includes role definition, candidate selection, technical assessments, cultural fit evaluation, and onboarding. For specialized roles (AI/ML, embedded systems, etc.), timeline may extend to 6–8 weeks to ensure quality.",
  },
  {
    q: "What's included in the Fractional Leadership model?",
    a: "Fractional leaders are experienced technology executives who work with your company on a part-time or advisory basis. They participate in strategy sessions, team reviews, architecture decisions, and board/investor communications — everything a full-time executive would do, focused on the highest-leverage activities. Engagements typically run 10–25 hours per week.",
  },
  {
    q: "Can you work alongside our existing internal team?",
    a: "Absolutely. In fact, this is the most common model. Your GCC team integrates directly into your existing engineering organization — same Slack, same Jira, same standups. Our Fractional Leadership works with your existing managers and executives. The goal is seamless extension, not replacement.",
  },
  {
    q: "What technologies and tech stacks do you support?",
    a: "We work across the full technology spectrum: JavaScript/TypeScript (React, Next.js, Node.js, Vue), Python (Django, FastAPI), Java (Spring Boot), Go, .NET, mobile (iOS Swift, Android Kotlin, React Native, Flutter), cloud platforms (AWS, Azure, GCP), AI/ML (PyTorch, TensorFlow, LangChain), data engineering (dbt, Spark, Airflow), and more.",
  },
  {
    q: "How do you ensure quality and cultural alignment?",
    a: "Our multi-stage vetting process includes technical assessment, system design evaluation, communication screening, and cultural fit interviews. GCC teams are onboarded with your company's values, processes, and tools. We also assign a dedicated Client Success Manager and conduct monthly health reviews to proactively address any issues.",
  },
  {
    q: "What are typical contract terms and engagement models?",
    a: "We offer flexible engagement models: 3-month pilot (to validate the model), 6-month standard, and 12-month partnerships with preferred pricing. Fractional Leadership engagements are typically month-to-month with 30 days notice. All engagements include defined SLAs, reporting cadences, and clear escalation paths.",
  },
  {
    q: "How does pricing compare to traditional alternatives?",
    a: "On average, clients save 40–65% compared to equivalent US/UK-based hiring or premium agency rates. A senior GCC engineer typically costs $6,000–8,000/month all-in (vs. $15,000–18,000/month for US equivalent). A Fractional CTO engagement starts at $8,000/month (vs. $35,000–40,000/month for a full-time hire).",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding relative bg-[#0B1525]">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-sky-500/10 border border-sky-500/20"
          >
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-medium text-sky-400">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            Questions We{" "}
            <span className="gradient-text">Always Answer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400"
          >
            Everything you need to know before starting a conversation.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card rounded-2xl border overflow-hidden transition-all duration-300 ${
                open === i ? "border-sky-500/25" : "border-white/[0.06]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
              >
                <span className={`text-sm font-medium transition-colors duration-200 ${open === i ? "text-slate-100" : "text-slate-400"}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  open === i ? "bg-sky-500/15 text-sky-400" : "bg-white/[0.04] text-slate-600"
                }`}>
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-white/[0.06] mb-4" />
                      <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
