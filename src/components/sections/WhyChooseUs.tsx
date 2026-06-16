"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const criteria = [
  "Time to hire",
  "Cost efficiency",
  "Scalability",
  "Tech leadership",
  "Accountability",
  "Domain expertise",
  "Long-term value",
  "Cultural fit",
];

const models = [
  {
    name: "Traditional Agency",
    color: "text-slate-400",
    values: ["6–12 weeks", "High markup", "Rigid scope", "None included", "Low", "Generalist", "Short-term", "Varies"],
    icons: [false, false, false, false, false, null, false, null],
    highlight: false,
  },
  {
    name: "Freelancers",
    color: "text-slate-400",
    values: ["Days", "Low cost", "Fragmented", "None", "Very low", "Niche only", "None", "None"],
    icons: [null, true, false, false, false, null, false, false],
    highlight: false,
  },
  {
    name: "In-House Team",
    color: "text-slate-400",
    values: ["3–6 months", "Very high", "Slow & costly", "Required hire", "High", "Deep", "High", "Strong"],
    icons: [false, false, false, false, true, true, true, true],
    highlight: false,
  },
  {
    name: "Our Model",
    color: "text-amber-400",
    highlight: true,
    values: ["< 30 days", "60% savings", "On-demand", "Included", "Full", "Deep + broad", "Long-term", "Embedded"],
    icons: [true, true, true, true, true, true, true, true],
  },
];

function Icon({ value }: { value: boolean | null }) {
  if (value === true) return <Check className="w-4 h-4 text-emerald-400 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-red-500/60 mx-auto" />;
  return <Minus className="w-4 h-4 text-slate-700 mx-auto" />;
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative bg-[#0B1525]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-amber-500/10 border border-amber-500/20"
          >
            <Check className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-medium text-amber-400">Why Choose Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            The Smarter Way to{" "}
            <span className="gradient-text">Build & Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Compare our model to the traditional alternatives and see why leading companies choose Filostech.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[700px]">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-px mb-px">
              <div className="p-4" />
              {models.map((m, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-t-xl text-center border border-b-0 ${
                    m.highlight
                      ? "bg-amber-500/10 border-amber-500/30"
                      : "bg-white/[0.03] border-white/[0.06]"
                  }`}
                >
                  <span className={`text-sm font-semibold ${m.color}`}>{m.name}</span>
                  {m.highlight && (
                    <div className="mt-1">
                      <span className="text-xs bg-amber-500/20 text-amber-400 rounded-full px-2 py-0.5">Recommended</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {criteria.map((criterion, rowIdx) => (
              <div
                key={rowIdx}
                className={`grid grid-cols-5 gap-px ${rowIdx === criteria.length - 1 ? "mb-0" : "mb-px"}`}
              >
                <div className={`p-4 flex items-center ${rowIdx % 2 === 0 ? "bg-white/[0.02]" : "bg-white/[0.04]"}`}>
                  <span className="text-sm text-slate-400">{criterion}</span>
                </div>
                {models.map((m, colIdx) => (
                  <div
                    key={colIdx}
                    className={`p-4 text-center flex flex-col items-center justify-center gap-1
                      ${rowIdx % 2 === 0 ? "bg-white/[0.02]" : "bg-white/[0.04]"}
                      ${m.highlight
                        ? `border-x border-amber-500/25 ${rowIdx === criteria.length - 1 ? "border-b rounded-b-xl" : ""}`
                        : `border-x border-white/[0.06] ${rowIdx === criteria.length - 1 ? "border-b rounded-b-xl" : ""}`
                      }
                    `}
                  >
                    <Icon value={m.icons[rowIdx]} />
                    <span className={`text-xs mt-1 ${m.highlight ? "text-amber-300 font-medium" : "text-slate-400"}`}>
                      {m.values[rowIdx]}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm mb-4">Ready to experience the difference?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-600 transition-all duration-200 shadow-lg shadow-amber-600/25 text-sm"
          >
            Start the Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
