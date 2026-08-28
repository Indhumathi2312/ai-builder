"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { mainNavItems } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || activeDropdown !== null
          ? "bg-white text-gray-900 border-b border-gray-200 shadow-md"
          : "bg-[#0c0d0d] text-white border-b border-white/10"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left Brand Logo */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#" className="flex items-center gap-2 group">
              {/* Hostinger Cube SVG Logo Mark */}
              <svg
                className={`w-6 h-6 fill-current shrink-0 transition-colors ${
                  isScrolled || activeDropdown !== null ? "text-black" : "text-white"
                }`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M7 2V15.65L2 20.65V7L7 2Z" fill="currentColor" />
                <path d="M16.9994 17L11.9994 22H3.29941L8.29941 17H16.9994Z" fill="currentColor" />
                <path d="M22 3.35V17L17 22V8.35L22 3.35Z" fill="currentColor" />
                <path d="M20.65 2L15.65 7H7L12 2H20.65Z" fill="currentColor" />
              </svg>

              {/* Logo Text: HOSTINGER | AI Builder */}
              <div className="hidden sm:flex items-center text-sm">
                <span
                  className={`font-black tracking-wider text-base transition-colors ${
                    isScrolled || activeDropdown !== null ? "text-black" : "text-white"
                  }`}
                >
                  HOSTINGER
                </span>
                <span className="text-gray-400 font-light mx-2">|</span>
                <span
                  className={`font-medium transition-colors ${
                    isScrolled || activeDropdown !== null ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  AI Builder
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              {mainNavItems.map((item, idx) => {
                const dropdownKey =
                  item.label === "Product"
                    ? "product"
                    : item.label === "What you can build"
                    ? "build"
                    : null;
                const isOpen = activeDropdown === dropdownKey;

                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => dropdownKey && setActiveDropdown(dropdownKey)}
                  >
                    <button
                      onClick={() =>
                        dropdownKey &&
                        setActiveDropdown(activeDropdown === dropdownKey ? null : dropdownKey)
                      }
                      className={`inline-flex items-center text-xs sm:text-sm font-semibold transition-colors cursor-pointer py-5 ${
                        isScrolled || activeDropdown !== null
                          ? "text-gray-800 hover:text-black"
                          : "text-gray-200 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <svg
                          className={`w-3.5 h-3.5 ml-1 transition-transform ${
                            isOpen ? "rotate-180 opacity-100" : "opacity-70"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Desktop Right Action Bar */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <button
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                isScrolled || activeDropdown !== null
                  ? "text-gray-800 hover:text-black hover:bg-gray-100"
                  : "text-gray-200 hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-4 h-4 rounded-full overflow-hidden shrink-0" viewBox="0 0 640 480">
                <path fill="#012169" d="M0 0h640v480H0z" />
                <path fill="#FFF" d="m75 0 245 180L565 0h75v55L395 240l245 185v55h-75L320 300 75 480H0v-55l245-185L0 55V0h75z" />
                <path fill="#C8102E" d="m424 281 216 163v36h-48L376 317l48-36zM216 199 0 36V0h48l216 163-48 36zm0 82L0 444v36h48l216-163-48-36zm208-82L640 36V0h-48L376 163l48 36z" />
                <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
                <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z" />
              </svg>
              <span>EN</span>
            </button>

            {/* Account Icon */}
            <button
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                isScrolled || activeDropdown !== null
                  ? "text-gray-800 hover:text-black hover:bg-gray-100"
                  : "text-gray-200 hover:text-white hover:bg-white/5"
              }`}
              aria-label="Account"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none cursor-pointer ${
                isScrolled || activeDropdown !== null ? "text-black" : "text-white"
              }`}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* --- DROPDOWN MEGA MENUS --- */}

        {/* 1. PRODUCT MEGA MENU (Screenshot 1) */}
        {activeDropdown === "product" && (
          <div className="absolute top-full left-0 right-0 mx-auto max-w-5xl px-4 z-50 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="bg-white text-gray-900 rounded-[28px] p-8 shadow-2xl border border-gray-100 grid grid-cols-12 gap-8 text-left">
              {/* Left Column: FEATURES */}
              <div className="col-span-7 space-y-4">
                <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                  FEATURES
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <a href="#sub-menu-build" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">AI website builder</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Type in a prompt and create your website</p>
                    </div>
                  </a>

                  <a href="#sub-menu-build" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">AI app builder</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Build and launch web apps without coding</p>
                    </div>
                  </a>

                  <a href="#sub-menu-build" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">1-click launch</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Get hosting, domain, and email to go live</p>
                    </div>
                  </a>

                  <a href="#sub-menu-build" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1zm12 0a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Third-party integrations</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Accept payments, manage users, and more</p>
                    </div>
                  </a>

                  <a href="#sub-menu-build" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Code editing</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Edit and fine-tune your code</p>
                    </div>
                  </a>

                  <a href="#sub-menu-build" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Built-in SEO</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Get found on Google, ChatGPT, and beyond</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: DISCOVER & Featured Card */}
              <div className="col-span-5 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                    DISCOVER
                  </h4>
                  <a href="#" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <span>✦</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Roadmap</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Discover what&apos;s coming next</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <span>🎁</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Referral program</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Invite a friend and earn up to 150 USD</p>
                    </div>
                  </a>
                </div>

                {/* Featured Banner Card */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-purple-900 to-indigo-950 p-4 flex flex-col justify-end text-white shadow-md group cursor-pointer">
                  <Image
                    src="/images/public.png"
                    alt="Remixable templates"
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                    sizes="300px"
                  />
                  <div className="relative z-10 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs">Remixable templates</span>
                      <span className="bg-purple-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full">NEW</span>
                      <span>↗</span>
                    </div>
                    <p className="text-[10px] text-gray-200">Start with an existing project and make it your own</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. WHAT YOU CAN BUILD MEGA MENU (Screenshot 2) */}
        {activeDropdown === "build" && (
          <div className="absolute top-full left-0 right-0 mx-auto max-w-5xl px-4 z-50 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="bg-white text-gray-900 rounded-[28px] p-8 shadow-2xl border border-gray-100 grid grid-cols-12 gap-8 text-left">
              {/* Left Column: GROW YOUR BUSINESS */}
              <div className="col-span-6 space-y-4">
                <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                  GROW YOUR BUSINESS
                </h4>
                <div className="space-y-3">
                  <a href="#sub-menu-templates" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <span>🛍️</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Sell online</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Build stores, marketplaces, and sales platforms – no code needed</p>
                    </div>
                  </a>

                  <a href="#sub-menu-templates" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <span>📅</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Manage bookings</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Accept appointments, bookings, and reservations from your own website or app</p>
                    </div>
                  </a>

                  <a href="#sub-menu-templates" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <span>👤</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Showcase your business</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Create sites, portfolios, and portals that promote your work</p>
                    </div>
                  </a>

                  <a href="#sub-menu-templates" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <span>📊</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Manage customers</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Build a CRM to manage leads, clients, and relationships</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: BUILD YOUR IDEA & Featured Banner */}
              <div className="col-span-6 space-y-4">
                <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                  BUILD YOUR IDEA
                </h4>
                <div className="space-y-3">
                  <a href="#sub-menu-templates" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <span>💡</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Visualize your ideas</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Turn rough concepts into interactive prototypes</p>
                    </div>
                  </a>

                  <a href="#sub-menu-templates" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <span>✓</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Validate your ideas</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Launch an MVP and test your idea before you invest more</p>
                    </div>
                  </a>

                  <a href="#sub-menu-templates" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600">
                      <span>📈</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 group-hover:text-purple-600">Monetize your ideas</h5>
                      <p className="text-[11px] text-gray-500 font-normal">Build a SaaS, subscription product, or paid tool from scratch</p>
                    </div>
                  </a>
                </div>

                {/* Featured Explore Templates Box */}
                <a href="#templates" className="block bg-[#f0ebff] hover:bg-[#e6deff] rounded-2xl p-4 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between font-bold text-xs text-gray-900">
                    <span>Explore templates</span>
                    <span>↗</span>
                  </div>
                  <p className="text-[11px] text-gray-600 pt-1">Browse templates by use case</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
