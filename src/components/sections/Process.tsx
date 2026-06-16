"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, UserCheck, Globe, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Deep dive into your world",
    desc: "We start with a thorough discovery session to understand your business goals, technical landscape, team capabilities, and growth ambitions.",
    duration: "Week 1",
    deliverable: "Technical Assessment Report",
    color: "from-sky-500 to-sky-600",
    glow: "rgba(56,189,248,0.12)",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    subtitle: "Blueprint for success",
    desc: "Our leadership team crafts a tailored GCC strategy and fractional leadership plan aligned to your business objectives and budget.",
    duration: "Week 2",
    deliverable: "Strategic Roadmap",
    color: "from-violet-500 to-violet-600",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Leadership Assignment",
    subtitle: "Your executive team",
    desc: "We match and onboard your fractional leadership team — CTO, VP Engineering, or Product Leader — within days, not months.",
    duration: "Week 2–3",
    deliverable: "Leadership Onboarding",
    color: "from-amber-500 to-amber-600",
    glow: "rgba(217,119,6,0.12)",
  },
  {
    number: "04",
    icon: Globe,
    title: "GCC Team Setup",
    subtitle: "Building your offshore team",
    desc: "We source, vet, and onboard your dedicated global engineering team — all selected to match your culture and technical requirements.",
    duration: "Weeks 3–5",
    deliverable: "Dedicated Team Ready",
    color: "from-emerald-500 to-emerald-600",
    glow: "rgba(16,185,129,0.12)",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Build & Scale",
    subtitle: "Execution at velocity",
    desc: "Your GCC team works in sprint cycles with full transparency. Regular demos, metrics, and reporting keep you in control.",
    duration: "Ongoing",
    deliverable: "Working Software",
    color: "from-cyan-500 to-cyan-600",
    glow: "rgba(6,182,212,0.12)",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Continuous Innovation",
    subtitle: "Long-term partnership",
    desc: "As your business evolves, so does your team. We continuously optimize the GCC, upskill engineers, and expand capabilities.",
    duration: "Ongoing",
    deliverable: "Quarterly Reviews",
    color: "from-rose-500 to-rose-600",
    glow: "rgba(244,63,94,0.12)",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="process" className="section-padding relative overflow-hidden bg-[#07111E]" ref={containerRef}>
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-amber-500/10 border border-amber-500/20"
          >
            <Rocket className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-medium text-amber-400">Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            From First Call to{" "}
            <span className="gradient-text">Shipping in 30 Days</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A proven 6-step process that gets you from idea to execution faster than any traditional hiring approach.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent -translate-x-px" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${i > 0 ? "lg:-mt-4" : ""}`}
                >
                  <div className={isLeft ? "lg:text-right lg:pr-8" : "lg:col-start-2 lg:pl-8"}>
                    <div
                      className="glass-card glass-card-hover rounded-2xl p-6 border border-white/[0.06]"
                      style={{ boxShadow: `0 0 40px ${step.glow}` }}
                    >
                      <div
                        className="flex items-center gap-3 mb-4"
                        style={{ flexDirection: isLeft ? "row-reverse" : "row", justifyContent: "flex-start" }}
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className={isLeft ? "text-right" : "text-left"}>
                          <span className="text-xs font-mono text-slate-400">{step.number}</span>
                          <p className="text-xs text-slate-400">{step.duration}</p>
                        </div>
                      </div>

                      <h3 className={`text-lg font-bold text-slate-100 mb-1 ${isLeft ? "lg:text-right" : ""}`}>{step.title}</h3>
                      <p className={`text-sm text-slate-400 mb-3 ${isLeft ? "lg:text-right" : ""}`}>{step.subtitle}</p>
                      <p className={`text-sm text-slate-400 leading-relaxed mb-4 ${isLeft ? "lg:text-right" : ""}`}>{step.desc}</p>

                      <div className={`inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1.5 ${isLeft ? "lg:float-right" : ""}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-xs text-slate-400">Deliverable: {step.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center dot — desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} shadow-lg ring-4 ring-[#07111E]`} />
                  </div>

                  {isLeft && <div className="hidden lg:block" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
