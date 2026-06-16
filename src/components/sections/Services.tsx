"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, TestTube2, Cloud, BarChart3, Palette, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code2,
    title: "Product Engineering",
    subtitle: "Full-Stack Development",
    desc: "End-to-end product engineering for SaaS platforms, enterprise applications, and customer portals. We architect for scale from day one.",
    tags: ["SaaS Platforms", "Enterprise Apps", "Customer Portals", "APIs"],
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "hover:border-sky-500/25",
    size: "lg",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation",
    desc: "Deploy AI solutions that transform workflows and unlock competitive advantages — from intelligent assistants to predictive analytics.",
    tags: ["AI Assistants", "Chatbots", "Workflow Automation", "Predictive Analytics"],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "hover:border-violet-500/25",
    size: "lg",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "iOS · Android · Cross-platform",
    desc: "Native and cross-platform mobile apps built for performance and user delight.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/25",
    size: "sm",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    subtitle: "AWS · Azure · GCP",
    desc: "Cloud-native infrastructure, CI/CD pipelines, and platform engineering that scales.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/25",
    size: "sm",
  },
  {
    icon: TestTube2,
    title: "QA & Automation",
    subtitle: "Quality Engineering",
    desc: "Comprehensive test automation and quality engineering that eliminates production incidents.",
    tags: ["Test Automation", "Performance Testing", "Security QA"],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/25",
    size: "sm",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    subtitle: "Business Intelligence",
    desc: "Data pipelines, dashboards, and analytics platforms that drive informed decisions.",
    tags: ["Data Pipelines", "BI Dashboards", "Real-time Analytics"],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "hover:border-amber-500/25",
    size: "sm",
  },
  {
    icon: Palette,
    title: "Product Design & UX",
    subtitle: "Design Systems",
    desc: "Human-centered design that balances aesthetics with business outcomes.",
    tags: ["UX Research", "UI Design", "Design Systems", "Prototyping"],
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "hover:border-rose-500/25",
    size: "sm",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const isLarge = service.size === "lg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={cn(
        "glass-card glass-card-hover rounded-2xl p-6 border border-white/[0.06] transition-all duration-300 group",
        service.border
      )}
    >
      <div className={`w-11 h-11 rounded-xl ${service.bg} flex items-center justify-center mb-4`}>
        <service.icon style={{ width: 22, height: 22 }} className={service.color} />
      </div>

      <div className="mb-1">
        <span className={`text-xs font-medium ${service.color} opacity-80`}>{service.subtitle}</span>
      </div>
      <h3 className={cn("font-semibold text-slate-100 mb-3", isLarge ? "text-xl" : "text-base")}>
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.desc}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-slate-500 bg-white/[0.04] rounded-full px-2.5 py-1 border border-white/[0.06]"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#contact"
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-200 group-hover:gap-2.5",
          service.color
        )}
      >
        Learn more
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative bg-[#07111E]">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
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
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-sky-500/10 border border-sky-500/20"
          >
            <Code2 className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-medium text-sky-400">Full-Spectrum Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Ship & Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A complete suite of product engineering services, all under one roof. No fragmented vendors, no coordination overhead.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <ServiceCard service={services[0]} index={0} />
          </div>
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <ServiceCard service={services[1]} index={1} />
          </div>
          {services.slice(2).map((s, i) => (
            <ServiceCard key={i} service={s} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
