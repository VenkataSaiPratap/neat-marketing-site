"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Total Health And Fitness", abbr: "TH" },
  { name: "Decisive Investment", abbr: "DI" },
  { name: "BYU Athletics", abbr: "BYU" },
  { name: "NorthSlope Chillers", abbr: "NS" },
  { name: "PFC", abbr: "PFC" },
];

const testimonials = [
  {
    quote: "Filostech assembled a world-class GCC team in under 30 days. They felt like an internal team from day one.",
    author: "Sarah Chen",
    role: "CTO, Nexus Health",
    avatar: "SC",
  },
  {
    quote: "The Fractional CTO brought immediate value — restructured our entire technical roadmap in the first month.",
    author: "Marcus Williams",
    role: "CEO, TerraFlow",
    avatar: "MW",
  },
  {
    quote: "60% cost reduction without sacrificing quality. Our delivery velocity tripled within a quarter.",
    author: "Priya Sharma",
    role: "VP Product, Vertex Capital",
    avatar: "PS",
  },
];

export default function TrustedBy() {
  return (
    <section className="py-20 border-t border-white/[0.05] overflow-hidden bg-[#0B1525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-slate-600 mb-10"
        >
          Trusted by innovative companies worldwide
        </motion.p>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0B1525] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0B1525] to-transparent pointer-events-none" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-6 w-max"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl whitespace-nowrap border border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300 cursor-default"
              >
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-sky-500/20 to-violet-500/20 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-sky-400">{logo.abbr[0]}</span>
                </div>
                <span className="text-sm font-medium text-slate-400">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-xs font-semibold text-white">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-200">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
