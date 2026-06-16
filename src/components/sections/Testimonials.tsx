"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Filostech assembled a world-class GCC team of 12 engineers in under 25 days. Within 3 months, we shipped features that had been stuck on the backlog for two years. The Fractional CTO they placed transformed how we think about technology strategy.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Nexus Health Systems",
    avatar: "SC",
    gradient: "from-sky-500 to-sky-700",
    outcome: "25-day team assembly",
  },
  {
    quote: "We were burning $3M annually on a bloated agency relationship with no real accountability. Filostech replaced the entire operation with a dedicated GCC team at 40% of the cost. The quality is night and day — these engineers genuinely care about our product.",
    author: "Marcus Williams",
    role: "CEO",
    company: "TerraFlow Logistics",
    avatar: "MW",
    gradient: "from-violet-500 to-violet-700",
    outcome: "60% cost reduction",
  },
  {
    quote: "The Fractional VP Engineering Filostech provided completely rebuilt our engineering culture. Sprint velocity tripled, production incidents dropped 80%, and for the first time we have a real architecture roadmap. I wish we had done this two years earlier.",
    author: "Priya Sharma",
    role: "Co-Founder",
    company: "Vertex Capital",
    avatar: "PS",
    gradient: "from-amber-500 to-amber-700",
    outcome: "3× sprint velocity",
  },
  {
    quote: "We needed to move fast to beat a competitor to market. Filostech had our GCC team operational in 3 weeks and the Fractional Product Leader immediately got us focused on the right features. We launched 4 months ahead of our original timeline.",
    author: "James Rodriguez",
    role: "VP Product",
    company: "Luminary AI",
    avatar: "JR",
    gradient: "from-emerald-500 to-emerald-700",
    outcome: "4 months ahead of schedule",
  },
  {
    quote: "As a healthcare company, compliance is non-negotiable. Filostech delivered a HIPAA-compliant platform with the engineering rigor of a top-tier consulting firm, at a price we could actually afford as a growing company. The GCC model is the future.",
    author: "Dr. Lisa Park",
    role: "Chief Digital Officer",
    company: "MedBridge Network",
    avatar: "LP",
    gradient: "from-rose-500 to-rose-700",
    outcome: "HIPAA compliant in 6 months",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="section-padding relative bg-[#07111E] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-sky-500/10 border border-sky-500/20"
          >
            <Quote className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-medium text-sky-400">Client Stories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            Leaders Who{" "}
            <span className="gradient-text">Trust Filostech</span>
          </motion.h2>
        </div>

        {/* Testimonial */}
        <div className="relative min-h-[320px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="glass-card rounded-3xl p-8 lg:p-12 w-full border border-white/[0.07]"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center mb-8 shadow-lg opacity-80`}>
                <Quote className="w-6 h-6 text-white" />
              </div>

              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-8 font-light">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-base font-bold text-white shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-slate-400">{t.outcome}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-8 h-2 bg-amber-500" : "w-2 h-2 bg-white/[0.15] hover:bg-white/[0.3]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-xl border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-white/[0.2] transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-xl border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-white/[0.2] transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
