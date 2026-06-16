"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, DollarSign, Zap } from "lucide-react";

const cases = [
  {
    industry: "Healthcare",
    client: "Regional Health Network",
    title: "AI-Powered Clinical Operations Platform",
    challenge: "A 12-hospital network struggled with fragmented clinical workflows, manual reporting, and 3-hour average wait times. They needed a unified platform — fast.",
    solution: "We deployed a Fractional CTO and built a 14-person GCC team. In 8 months, we delivered an AI-powered operations platform integrating with 6 legacy EMR systems.",
    results: [
      { icon: Clock, metric: "40%", label: "Faster operations" },
      { icon: TrendingUp, metric: "95%", label: "Staff adoption rate" },
      { icon: DollarSign, metric: "$2.4M", label: "Annual savings" },
    ],
    tags: ["Fractional CTO", "GCC Team of 14", "AI/ML", "Healthcare"],
    accentColor: "text-rose-400",
    accentBg: "bg-rose-500/10",
    accentBorder: "border-rose-500/20",
    gradient: "from-rose-500/15 to-pink-600/10",
    duration: "8 months",
  },
  {
    industry: "Logistics",
    client: "National Freight Company",
    title: "Real-Time Logistics Orchestration System",
    challenge: "Manual dispatch processes, no real-time visibility, and $8M in annual inefficiencies from unoptimized routing and fleet management.",
    solution: "Our Fractional VP Engineering led a 10-person GCC team to build a real-time orchestration platform with predictive routing and AI-powered demand forecasting.",
    results: [
      { icon: DollarSign, metric: "30%", label: "Cost reduction" },
      { icon: Zap, metric: "2.8×", label: "Delivery speed" },
      { icon: TrendingUp, metric: "$2.1M", label: "Recovered revenue" },
    ],
    tags: ["Fractional VP Eng", "GCC Team of 10", "IoT", "Logistics"],
    accentColor: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    gradient: "from-cyan-500/15 to-sky-600/10",
    duration: "6 months",
  },
  {
    industry: "Commerce",
    client: "D2C Fashion Brand",
    title: "Personalized Mobile Commerce Experience",
    challenge: "A rapidly growing D2C brand with 2M+ customers had a 1.2% conversion rate, high cart abandonment, and no personalization engine.",
    solution: "A 7-person GCC team and Fractional Product Leader rebuilt the mobile app from scratch with AI-powered personalization and a redesigned checkout flow.",
    results: [
      { icon: TrendingUp, metric: "2.5×", label: "Revenue increase" },
      { icon: Zap, metric: "4.1%", label: "Conversion rate" },
      { icon: DollarSign, metric: "68%", label: "Reduced returns" },
    ],
    tags: ["Fractional Product", "GCC Team of 7", "AI/ML", "Mobile"],
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    gradient: "from-amber-500/15 to-orange-600/10",
    duration: "5 months",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section id="case-studies" className="section-padding relative bg-[#07111E]">
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-violet-500/10 border border-violet-500/20"
          >
            <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-medium text-violet-400">Case Studies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            Real Results,{" "}
            <span className="gradient-text">Real Businesses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            We measure our success by our clients&apos; outcomes. Here&apos;s what we&apos;ve delivered.
          </motion.p>
        </div>

        {/* Case Selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                active === i
                  ? `${c.accentBg} ${c.accentBorder} ${c.accentColor}`
                  : "border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-white/[0.16] bg-white/[0.03]"
              }`}
            >
              {c.industry}
            </button>
          ))}
        </div>

        {/* Active Case */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-3xl overflow-hidden border border-white/[0.07]"
          >
            {/* Gradient header */}
            <div className={`bg-gradient-to-r ${cases[active].gradient} p-8 pb-0`}>
              <div className="flex flex-wrap gap-2 mb-4">
                {cases[active].tags.map((tag) => (
                  <span key={tag} className="text-xs text-slate-300 bg-white/[0.08] rounded-full px-3 py-1 border border-white/[0.1]">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-slate-300 mb-2 block">{cases[active].client} · {cases[active].duration}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">{cases[active].title}</h3>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">The Challenge</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{cases[active].challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Our Solution</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{cases[active].solution}</p>
                  </div>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors group ${cases[active].accentColor}`}
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-6">Measured Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {cases[active].results.map((r, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className={`${cases[active].accentBg} rounded-2xl p-5 text-center border ${cases[active].accentBorder}`}
                      >
                        <r.icon className={`w-5 h-5 ${cases[active].accentColor} mx-auto mb-3`} />
                        <p className={`text-3xl font-bold ${cases[active].accentColor} mb-1`}>{r.metric}</p>
                        <p className="text-xs text-slate-300">{r.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Visual bar chart placeholder */}
                  <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex gap-2 justify-center mb-3 items-end">
                        {[38, 55, 42, 68, 50].map((h, j) => (
                          <div
                            key={j}
                            className={`w-2 rounded-full bg-gradient-to-t ${cases[active].gradient.replace("/15", "/60").replace("/10", "/40")}`}
                            style={{ height: `${h}px`, opacity: 0.5 + j * 0.1 }}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-slate-400">Platform performance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
