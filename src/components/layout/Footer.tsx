"use client";

import { Globe, ExternalLink, Share2 } from "lucide-react";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Product Engineering", href: "#services" },
    { label: "Mobile Development", href: "#services" },
    { label: "AI & ML Solutions", href: "#services" },
    { label: "QA & Automation", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
    { label: "Data & Analytics", href: "#services" },
  ],
  Leadership: [
    { label: "Fractional CTO", href: "#fractional" },
    { label: "Fractional VP Engineering", href: "#fractional" },
    { label: "Fractional Product Head", href: "#fractional" },
    { label: "Fractional QA Director", href: "#fractional" },
    { label: "Technology Advisory", href: "#fractional" },
  ],
  Company: [
    { label: "About Us", href: "#process" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Industries", href: "#industries" },
    { label: "Process", href: "#process" },
    { label: "Careers", href: "#contact" },
    { label: "Blog", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#040C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-600/30">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-slate-200 font-semibold text-lg">Filostech</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-xs">
              Your global partner for building and scaling world-class digital products through dedicated teams and fractional leadership.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Share2, href: "#", label: "LinkedIn" },
                { icon: Globe, href: "#", label: "Website" },
                { icon: ExternalLink, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-600 hover:text-slate-200 hover:border-white/[0.16] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-slate-300 transition-colors duration-200 animated-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-sm">
            © 2025 Filostech. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-700 text-sm">
            <span>Built for global impact</span>
            <span className="mx-2">·</span>
            <a href="mailto:hello@filostech.io" className="hover:text-slate-400 transition-colors animated-underline">
              hello@filostech.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
