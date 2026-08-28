"use client";

import React, { useState } from "react";
import { footerColumns } from "@/data/footer";

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <footer className="bg-[#0c0d0d] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-12 border-t border-white/10 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-400 font-medium text-xs sm:text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Hostinger
          </a>
          <span>›</span>
          <span className="text-white font-semibold">AI Builder</span>
        </div>

        {/* Desktop / Tablet Grid (5 columns on LG, 3-2 on MD) */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {footerColumns.map((col) => (
            <div key={col.title} className="space-y-4 text-left">
              <h4 className="font-bold text-white text-xs tracking-wider uppercase">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile View Accordions (Screenshot 1) */}
        <div className="md:hidden space-y-4 border-t border-white/10 pt-4">
          {footerColumns.map((col) => {
            const isOpen = !!openSections[col.title];
            return (
              <div key={col.title} className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleSection(col.title)}
                  className="w-full flex items-center justify-between font-bold text-white text-xs tracking-wider uppercase py-2 cursor-pointer"
                >
                  <span>{col.title}</span>
                  <span className="text-base font-normal text-gray-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <ul className="pt-3 space-y-2 text-xs text-gray-400 text-left pl-2">
                    {col.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="hover:text-white transition-colors">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Social Icons Section */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Branding */}
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2V15.65L2 20.65V7L7 2Z" />
              <path d="M16.9994 17L11.9994 22H3.29941L8.29941 17H16.9994Z" />
              <path d="M22 3.35V17L17 22V8.35L22 3.35Z" />
              <path d="M20.65 2L15.65 7H7L12 2H20.65Z" />
            </svg>
            <span className="font-bold text-sm text-white tracking-wide">
              HOSTINGER <span className="text-gray-400 font-normal">| AI Builder</span>
            </span>
          </div>

          {/* Social Icons Grid (8 icons) */}
          <div className="flex flex-wrap items-center gap-5 text-gray-400 justify-center">
            {/* LinkedIn */}
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* X */}
            <a href="#" className="hover:text-white transition-colors" aria-label="X">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Reddit */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Reddit">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.188-.491.957 0 1.73.774 1.73 1.73 0 .734-.457 1.36-1.1 1.61.043.27.067.547.067.83 0 3.24-3.834 5.87-8.563 5.87-4.73 0-8.563-2.63-8.563-5.87 0-.273.022-.54.062-.803a1.728 1.728 0 0 1-1.077-1.597c0-.956.773-1.73 1.73-1.73.473 0 .899.191 1.213.504 1.196-.865 2.868-1.43 4.708-1.493l.937-4.394 3.25.683c.036.657.575 1.185 1.246 1.185z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="hover:text-white transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.67 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.34 1.53-1.37 2.53-.05 1.2.53 2.39 1.51 3.03.95.63 2.21.67 3.2.14 1.07-.56 1.71-1.71 1.72-2.91.04-4.83.01-9.66.02-14.49z" />
              </svg>
            </a>
            {/* Discord */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Discord">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Legal Policy Links Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400 pt-4">
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              NPRD request policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy of Hostinger
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Refund policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of service
            </a>
          </div>
        </div>

        {/* Bottom Copyright & VAT Statement */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400 border-t border-white/10 pt-6">
          <p className="text-left leading-relaxed">
            © 2004–2026 Hostinger – United Kingdom – Premium Web Hosting, Cloud, VPS, AI Website Builder &amp; Domain Registration Services.
          </p>
          <p className="shrink-0 text-gray-400">
            Prices are listed without VAT
          </p>
        </div>
      </div>
    </footer>
  );
}
