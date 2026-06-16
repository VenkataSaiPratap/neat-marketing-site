"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Code2, Package, CheckCircle2, ArrowRight } from "lucide-react";

const leaders = [
  {
    role: "Fractional CTO",
    icon: Code2,
    gradient: "from-sky-500 to-sky-700",
    glow: "shadow-sky-500/20",
    border: "border-sky-500/30",
    activeBg: "bg-sky-500/10",
    description: "Strategic technology vision and executive leadership without the $400K+ price tag.",
    outcomes: [
      "Architect scalable, future-proof systems",
      "Reduce technical debt systematically",
      "Align engineering to business objectives",
      "Mentor and build high-performing teams",
      "Drive digital transformation initiatives",
    ],
    availability: "10–20 hrs/week",
    impact: "3–4× ROI vs. full-time hire",
    timeToValue: "< 2 weeks",
  },
  {
    role: "Fractional VP Engineering",
    icon: Users,
    gradient: "from-violet-500 to-violet-700",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/30",
    activeBg: "bg-violet-500/10",
    description: "Engineering leadership focused on delivery, culture, and operational excellence.",
    outcomes: [
      "Accelerate delivery velocity",
      "Implement engineering best practices",
      "Scale engineering organization",
      "Build hiring pipelines",
      "Create accountability frameworks",
    ],
    availability: "15–25 hrs/week",
    impact: "50% faster time-to-market",
    timeToValue: "< 1 week",
  },
  {
    role: "Fractional Product Leader",
    icon: Package,
    gradient: "from-amber-500 to-amber-700",
    glow: "shadow-amber-500/20",
    border: "border-amber-500/30",
    activeBg: "bg-amber-500/10",
    description: "Product strategy and roadmap ownership that turns vision into shipped features.",
    outcomes: [
      "Define and prioritize product roadmap",
      "Establish OKRs and success metrics",
      "Bridge business and engineering",
      "Lead discovery and user research",
      "Drive product-led growth strategies",
    ],
    availability: "10–20 hrs/week",
    impact: "2× feature delivery rate",
    timeToValue: "< 1 week",
  },
  {
    role: "Fractional QA Director",
    icon: CheckCircle2,
    gradient: "from-emerald-500 to-emerald-700",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/30",
    activeBg: "bg-emerald-500/10",
    description: "Quality engineering leadership that eliminates production incidents and technical debt.",
    outcomes: [
      "Build automated testing frameworks",
      "Reduce bug escape rate to near zero",
      "Implement shift-left quality practices",
      "Define QA standards and processes",
      "Train engineering teams on quality",
    ],
    availability: "10–15 hrs/week",
    impact: "80% fewer production bugs",
    timeToValue: "< 2 weeks",
  },
];

export default function FractionalLeadership() {
  const [active, setActive] = useState(0);

  return (
    <section id="fractional" className="section-padding relative bg-[#0B1525]">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-violet-500/10 border border-violet-500/20"
          >
            <Users className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-medium text-violet-400">Fractional Leadership</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            Executive Talent,{" "}
            <span className="gradient-text">Fractional Cost</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Access world-class technology leadership on a flexible engagement model. Get the expertise you need, when you need it.
          </motion.p>
        </div>

        {/* Role Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {leaders.map((l, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-card rounded-xl p-4 text-left transition-all duration-300 border ${
                active === i
                  ? `${l.border} ${l.activeBg}`
                  : "border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${l.gradient} flex items-center justify-center mb-3 shadow-lg ${active === i ? l.glow : ""}`}>
                <l.icon style={{ width: 18, height: 18 }} className="text-white" />
              </div>
              <p className={`text-sm font-medium transition-colors duration-200 ${active === i ? "text-slate-100" : "text-slate-500"}`}>
                {l.role}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Active Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl p-8 lg:p-10 border border-white/[0.06]"
          >
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <div className={`inline-flex items-center gap-3 bg-gradient-to-br ${leaders[active].gradient} rounded-xl px-4 py-2 mb-6 shadow-lg`}>
                  {(() => {
                    const Icon = leaders[active].icon;
                    return <Icon className="w-5 h-5 text-white" />;
                  })()}
                  <span className="text-white font-semibold">{leaders[active].role}</span>
                </div>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">{leaders[active].description}</p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Availability", value: leaders[active].availability },
                    { label: "Impact", value: leaders[active].impact },
                    { label: "Time to Value", value: leaders[active].timeToValue },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/[0.04] rounded-xl p-3 text-center border border-white/[0.06]">
                      <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                      <p className="text-sm font-semibold text-slate-100">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-600 transition-all duration-200 text-sm shadow-lg shadow-amber-600/25"
                >
                  Hire a {leaders[active].role.split(" ")[1]}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">Key Outcomes</h4>
                <ul className="space-y-3">
                  {leaders[active].outcomes.map((outcome, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${leaders[active].gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-400 text-sm">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
