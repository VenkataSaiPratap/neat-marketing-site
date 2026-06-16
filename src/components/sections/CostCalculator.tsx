"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, ArrowRight } from "lucide-react";

const teamRoles = [
  { id: "engineers", label: "Senior Engineers", localCost: 180000, ourCost: 72000 },
  { id: "designers", label: "UI/UX Designers", localCost: 130000, ourCost: 52000 },
  { id: "qa", label: "QA Engineers", localCost: 110000, ourCost: 42000 },
  { id: "devops", label: "DevOps Engineers", localCost: 160000, ourCost: 64000 },
  { id: "pm", label: "Product Managers", localCost: 150000, ourCost: 60000 },
];

const leadershipOptions = [
  { id: "cto", label: "Fractional CTO", fullTimeCost: 380000, ourCost: 96000 },
  { id: "vpe", label: "Fractional VP Engineering", fullTimeCost: 320000, ourCost: 72000 },
  { id: "product", label: "Fractional Product Head", fullTimeCost: 280000, ourCost: 60000 },
];

function formatCurrency(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  return `$${Math.round(n / 1000)}K`;
}

export default function CostCalculator() {
  const [teamCounts, setTeamCounts] = useState<Record<string, number>>({
    engineers: 3, designers: 1, qa: 1, devops: 1, pm: 1,
  });
  const [selectedLeadership, setSelectedLeadership] = useState<string[]>(["cto"]);

  const totals = useMemo(() => {
    const localTeam = teamRoles.reduce((sum, r) => sum + r.localCost * (teamCounts[r.id] || 0), 0);
    const ourTeam = teamRoles.reduce((sum, r) => sum + r.ourCost * (teamCounts[r.id] || 0), 0);
    const localLeadership = leadershipOptions
      .filter((l) => selectedLeadership.includes(l.id))
      .reduce((sum, l) => sum + l.fullTimeCost, 0);
    const ourLeadership = leadershipOptions
      .filter((l) => selectedLeadership.includes(l.id))
      .reduce((sum, l) => sum + l.ourCost, 0);
    const localTotal = localTeam + localLeadership;
    const ourTotal = ourTeam + ourLeadership;
    const savings = localTotal - ourTotal;
    const savingsPct = localTotal > 0 ? Math.round((savings / localTotal) * 100) : 0;
    return { localTotal, ourTotal, savings, savingsPct };
  }, [teamCounts, selectedLeadership]);

  return (
    <section className="section-padding relative bg-[#0B1525]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-emerald-500/10 border border-emerald-500/20"
          >
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">Cost Calculator</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            See Your Potential{" "}
            <span className="gradient-text">Cost Savings</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Estimate how much you could save by building your team with Filostech versus local hiring.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Controls */}
          <div className="glass-card rounded-2xl p-6 space-y-8 border border-white/[0.06]">
            {/* Team Composition */}
            <div>
              <h3 className="text-sm font-semibold text-slate-100 mb-5">GCC Team Composition</h3>
              <div className="space-y-4">
                {teamRoles.map((role) => (
                  <div key={role.id} className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-300">{role.label}</p>
                      <p className="text-xs text-slate-400">Local: {formatCurrency(role.localCost)}/yr · Ours: {formatCurrency(role.ourCost)}/yr</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setTeamCounts(p => ({ ...p, [role.id]: Math.max(0, (p[role.id] || 0) - 1) }))}
                        className="w-7 h-7 rounded-lg border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-white/[0.2] transition-all cursor-pointer"
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span className="text-slate-100 font-semibold w-5 text-center">{teamCounts[role.id] || 0}</span>
                      <button
                        onClick={() => setTeamCounts(p => ({ ...p, [role.id]: (p[role.id] || 0) + 1 }))}
                        className="w-7 h-7 rounded-lg border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-white/[0.2] transition-all cursor-pointer"
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="text-sm font-semibold text-slate-100 mb-4">Fractional Leadership</h3>
              <div className="space-y-3">
                {leadershipOptions.map((opt) => (
                  <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      onClick={() => setSelectedLeadership(p =>
                        p.includes(opt.id) ? p.filter(x => x !== opt.id) : [...p, opt.id]
                      )}
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                        selectedLeadership.includes(opt.id)
                          ? "bg-amber-500 border-amber-500"
                          : "border-white/[0.15] hover:border-white/[0.3] bg-white/[0.03]"
                      }`}
                    >
                      {selectedLeadership.includes(opt.id) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">{opt.label}</p>
                      <p className="text-xs text-slate-400">Full-time: {formatCurrency(opt.fullTimeCost)} · Fractional: {formatCurrency(opt.ourCost)}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Savings highlight */}
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 mb-1">Estimated Annual Savings</p>
                  <p className="text-4xl font-bold text-emerald-400">{formatCurrency(totals.savings)}</p>
                  <p className="text-sm text-slate-400 mt-1">{totals.savingsPct}% reduction vs. local hiring</p>
                </div>
              </div>
            </div>

            {/* Cost breakdown */}
            <div className="glass-card rounded-2xl p-6 space-y-4 border border-white/[0.06]">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Annual Cost Comparison</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-500/5 border border-red-500/10 rounded-xl">
                  <span className="text-sm text-slate-400">Local In-House Team</span>
                  <span className="text-base font-bold text-slate-200">{formatCurrency(totals.localTotal)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-500/5 border border-emerald-500/15 rounded-xl">
                  <span className="text-sm text-slate-400">With Filostech (GCC + Fractional)</span>
                  <span className="text-base font-bold text-emerald-400">{formatCurrency(totals.ourTotal)}</span>
                </div>
              </div>

              {/* Bar visualization */}
              <div className="space-y-2 pt-2">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Local</span><span>{formatCurrency(totals.localTotal)}</span>
                  </div>
                  <div className="h-2.5 bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.06]">
                    <div className="h-full bg-red-500/40 rounded-full w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Filostech</span><span>{formatCurrency(totals.ourTotal)}</span>
                  </div>
                  <div className="h-2.5 bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.06]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      animate={{ width: totals.localTotal > 0 ? `${(totals.ourTotal / totals.localTotal) * 100}%` : "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 text-center">* Estimates based on US market rates. Actual savings may vary.</p>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-amber-500 text-white font-semibold py-3.5 rounded-xl hover:bg-amber-600 transition-all duration-200 shadow-lg shadow-amber-600/25 text-sm w-full"
            >
              Get a Precise Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
