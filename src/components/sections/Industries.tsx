"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, DollarSign, ShoppingBag, Factory, Users, Truck, GraduationCap, Home } from "lucide-react";

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    gradient: "from-rose-500 to-pink-600",
    solutions: ["Patient portals & telehealth", "Clinical workflow automation", "HIPAA-compliant platforms", "Medical device integrations", "AI-assisted diagnostics"],
    outcome: "40% faster care delivery",
    desc: "We build HIPAA-compliant digital health solutions that improve patient outcomes and operational efficiency.",
  },
  {
    icon: DollarSign,
    name: "Fintech",
    gradient: "from-emerald-500 to-teal-600",
    solutions: ["Payment infrastructure", "Fraud detection AI", "Open banking APIs", "Digital wallets", "Regulatory compliance"],
    outcome: "10× faster compliance",
    desc: "Secure, scalable financial platforms built to regulatory standards with real-time processing at enterprise scale.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & Commerce",
    gradient: "from-amber-500 to-orange-600",
    solutions: ["E-commerce platforms", "Inventory management", "Personalization engines", "Omnichannel systems", "Loyalty programs"],
    outcome: "2.5× revenue growth",
    desc: "Commerce platforms that convert browsers to buyers and build lasting customer relationships.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    gradient: "from-sky-500 to-blue-600",
    solutions: ["IoT & connected devices", "Supply chain visibility", "Predictive maintenance", "Quality management", "ERP integrations"],
    outcome: "30% cost reduction",
    desc: "Industrial-grade digital solutions that optimize production, predict failures, and streamline supply chains.",
  },
  {
    icon: Users,
    name: "HR Tech",
    gradient: "from-violet-500 to-purple-600",
    solutions: ["ATS & recruiting tools", "Employee experience apps", "Performance management", "Learning platforms", "Workforce analytics"],
    outcome: "50% faster hiring",
    desc: "Modern HR platforms that attract top talent, reduce administrative burden, and improve employee engagement.",
  },
  {
    icon: Truck,
    name: "Logistics",
    gradient: "from-cyan-500 to-sky-600",
    solutions: ["Route optimization", "Fleet management", "Last-mile delivery", "Warehouse automation", "Real-time tracking"],
    outcome: "35% ops efficiency",
    desc: "End-to-end logistics platforms that reduce costs, improve visibility, and delight customers with predictable delivery.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    gradient: "from-yellow-500 to-amber-600",
    solutions: ["LMS platforms", "Adaptive learning AI", "Virtual classrooms", "Student portals", "Assessment tools"],
    outcome: "3× engagement lift",
    desc: "EdTech solutions that make learning more effective, accessible, and measurable.",
  },
  {
    icon: Home,
    name: "Real Estate",
    gradient: "from-teal-500 to-emerald-600",
    solutions: ["Property management", "Virtual tours & 3D", "CRM for agents", "Investment analytics", "MLS integrations"],
    outcome: "45% faster closings",
    desc: "Proptech platforms that modernize the real estate experience for agents, buyers, and property managers.",
  },
];

export default function Industries() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="industries" className="section-padding relative bg-[#0B1525]">
      <div className="absolute inset-0 dot-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-emerald-500/10 border border-emerald-500/20"
          >
            <Factory className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">Industries We Serve</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            Deep Expertise Across{" "}
            <span className="gradient-text">8 Verticals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            We&apos;ve built domain expertise in the industries where digital transformation matters most.
          </motion.p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="glass-card rounded-2xl p-5 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 cursor-default group relative overflow-hidden"
            >
              {/* Hover gradient */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.07 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} pointer-events-none`}
                  />
                )}
              </AnimatePresence>

              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-5 h-5 text-white" />
              </div>

              <h3 className="font-semibold text-slate-100 mb-1 text-sm">{industry.name}</h3>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">{industry.desc.slice(0, 70)}...</p>

              <div className="inline-flex items-center gap-1 bg-white/[0.04] border border-white/[0.07] rounded-full px-2.5 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-slate-400">{industry.outcome}</span>
              </div>

              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-1.5">
                      {industry.solutions.slice(0, 3).map((s, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <div className={`w-1 h-1 rounded-full bg-gradient-to-br ${industry.gradient}`} />
                          <span className="text-xs text-slate-400">{s}</span>
                        </li>
                      ))}
                    </ul>
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
