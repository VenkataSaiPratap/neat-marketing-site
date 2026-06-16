"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Building2, Users, Zap, Globe, TrendingUp, Shield } from "lucide-react";

const flowSteps = [
  { label: "Your Company", icon: Building2, color: "from-sky-500 to-sky-600", desc: "Strategic direction & vision" },
  { label: "Fractional Leadership", icon: Users, color: "from-violet-500 to-violet-600", desc: "Experienced tech executives" },
  { label: "Dedicated GCC Team", icon: Globe, color: "from-amber-500 to-amber-600", desc: "Your offshore extension" },
  { label: "Product Delivery", icon: Zap, color: "from-emerald-500 to-emerald-600", desc: "Faster time to market" },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "40–60% Cost Efficiency",
    desc: "Reduce engineering costs without compromising talent quality. Access senior engineers at a fraction of local hiring costs.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    icon: Globe,
    title: "Global Talent Access",
    desc: "Tap into a curated network of 500+ pre-vetted engineers, designers, and product specialists across multiple time zones.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Zap,
    title: "2× Faster Delivery",
    desc: "Dedicated teams aligned to your product roadmap ship faster. No ramp-up time, no context switching, no distractions.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Shield,
    title: "Enterprise Accountability",
    desc: "Full transparency with structured governance, KPIs, and reporting. Your GCC operates like an internal team, not a vendor.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function GCCExplained() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gcc-explained" className="section-padding relative bg-[#07111E]">
      <div className="absolute inset-0 dot-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-sky-500/10 border border-sky-500/20"
          >
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-medium text-sky-400">What Is a GCC?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            Your Team.{" "}
            <span className="gradient-text">Our Infrastructure.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A Global Capability Center is a dedicated offshore division that operates as a true extension of your company — with your culture, your tools, and your goals.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Flow Diagram */}
          <motion.div ref={ref} className="flex flex-col items-center gap-0">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full max-w-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: "backOut" }}
                  className="w-full glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">{step.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={inView ? { opacity: 1, height: 40 } : {}}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                    className="flex flex-col items-center overflow-hidden"
                  >
                    <div className="w-px flex-1 bg-gradient-to-b from-sky-500/30 to-transparent" />
                    <ArrowDown className="w-4 h-4 text-sky-600 mt-1" />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="glass-card glass-card-hover rounded-2xl p-6"
              >
                <div className={`w-10 h-10 rounded-xl ${b.bg} flex items-center justify-center mb-4`}>
                  <b.icon className={`w-5 h-5 ${b.color}`} />
                </div>
                <h3 className="font-semibold text-slate-100 mb-2 text-sm">{b.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
