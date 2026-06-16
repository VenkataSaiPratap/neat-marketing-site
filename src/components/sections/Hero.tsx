"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const metrics = [
  { value: 3, suffix: "", label: "Products Delivered" },
  { value: 20, suffix: "+", label: "Engineers Available" },
  { value: 3, suffix: "", label: "Industries Served" },
  { value: 60, suffix: "%", label: "Cost Savings" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const step = target / (2000 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const NetworkNode = ({ x, y, delay, size = 4 }: { x: number; y: number; delay: number; size?: number }) => (
  <motion.div
    className="absolute rounded-full bg-sky-400/20"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
    animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.5, 1] }}
    transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const NetworkLine = ({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) => (
  <motion.line
    x1={`${x1}%`} y1={`${y1}%`}
    x2={`${x2}%`} y2={`${y2}%`}
    stroke="rgba(56,189,248,0.07)"
    strokeWidth="1"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 2, delay, ease: "easeOut" }}
  />
);

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const nodes = [
    { x: 15, y: 20, delay: 0 }, { x: 82, y: 15, delay: 0.5 },
    { x: 8, y: 55, delay: 1 }, { x: 90, y: 50, delay: 0.3 },
    { x: 25, y: 80, delay: 0.8 }, { x: 75, y: 78, delay: 1.2 },
    { x: 50, y: 12, delay: 0.6 }, { x: 45, y: 88, delay: 0.9 },
    { x: 60, y: 35, delay: 0.4 }, { x: 35, y: 45, delay: 1.1 },
    { x: 70, y: 65, delay: 0.7 }, { x: 20, y: 65, delay: 1.3 },
    { x: 55, y: 58, delay: 0.2 },
  ];

  const lines = [
    { x1: 15, y1: 20, x2: 50, y2: 12, delay: 0.5 },
    { x1: 50, y1: 12, x2: 82, y2: 15, delay: 0.7 },
    { x1: 82, y1: 15, x2: 90, y2: 50, delay: 0.9 },
    { x1: 90, y1: 50, x2: 75, y2: 78, delay: 1.1 },
    { x1: 75, y1: 78, x2: 45, y2: 88, delay: 1.3 },
    { x1: 45, y1: 88, x2: 25, y2: 80, delay: 1.5 },
    { x1: 25, y1: 80, x2: 8, y2: 55, delay: 1.7 },
    { x1: 8, y1: 55, x2: 15, y2: 20, delay: 1.9 },
    { x1: 60, y1: 35, x2: 55, y2: 58, delay: 0.6 },
    { x1: 35, y1: 45, x2: 55, y2: 58, delay: 0.8 },
    { x1: 55, y1: 58, x2: 70, y2: 65, delay: 1.0 },
    { x1: 20, y1: 65, x2: 35, y2: 45, delay: 1.2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07111E]">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <div className="absolute inset-0 grid-pattern" />

        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {lines.map((line, i) => <NetworkLine key={i} {...line} />)}
        </svg>
        {nodes.map((node, i) => (
          <NetworkNode key={i} {...node} size={i % 3 === 0 ? 6 : 4} />
        ))}

        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-orb animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-orb-amber animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
            filter: "blur(50px)",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 bg-sky-500/10 border border-sky-500/20"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-xs font-medium text-sky-400">Global Capability Centers + Fractional Leadership</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-[1.05] tracking-tight mb-6 max-w-5xl mx-auto"
        >
          <span className="text-slate-100">Your Global Capability</span>
          <br />
          <span className="text-slate-100">Center.</span>{" "}
          <span className="gradient-text">Your Fractional</span>
          <br />
          <span className="gradient-text">Leadership Team.</span>{" "}
          <span className="text-slate-100">One Partner.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From fractional technology leadership to fully managed engineering teams, we help
          businesses launch, scale, and transform digital products faster and more efficiently.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-amber-500 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-amber-600 transition-all duration-200 shadow-lg shadow-amber-600/30 magnetic-btn"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#gcc-explained"
            className="group flex items-center gap-2 border border-white/15 text-slate-300 hover:text-slate-100 bg-white/[0.04] font-medium px-6 py-3.5 rounded-xl hover:border-white/30 hover:bg-white/[0.08] transition-all duration-200 magnetic-btn"
          >
            See How We Work
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06] max-w-3xl mx-auto"
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-[#07111E] px-6 py-6 flex flex-col items-center gap-1 hover:bg-white/[0.04] transition-colors duration-200"
            >
              <span className="text-3xl font-bold text-amber-400">
                <AnimatedCounter target={m.value} suffix={m.suffix} />
              </span>
              <span className="text-xs text-slate-300 text-center">{m.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-sky-500/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
