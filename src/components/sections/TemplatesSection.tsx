"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { templateCategories, templateCards } from "@/data/templates";

export function TemplatesSection() {
  const [activeCategory, setActiveCategory] = useState("All templates");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCards =
    activeCategory === "All templates"
      ? templateCards
      : templateCards.filter((card) => card.category === activeCategory);

  return (
    <section id="templates" className="py-16 sm:py-24 bg-white text-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Pick a template. Make it yours.
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
            Choose a professionally designed template, customize it with AI or visual edits, and get your website online faster.
          </p>
        </div>

        {/* Main Card Wrapper */}
        <div className="bg-white border border-gray-200 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-sm">
          {/* Desktop Filter Pills */}
          <div className="hidden md:flex items-center gap-2 overflow-x-auto no-scrollbar pb-6">
            {templateCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#18191c] text-white shadow-sm"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <button className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center gap-1 cursor-pointer">
              <span>More</span>
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Mobile / Tablet Dropdown Selector */}
          <div className="md:hidden pb-6">
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm pr-10 cursor-pointer"
              >
                {templateCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Responsive Template Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Image Card Frame */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl border border-gray-200 overflow-hidden bg-gray-50 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Template Title */}
                  <span className="text-xs sm:text-sm font-medium text-gray-700 mt-2.5 group-hover:text-black transition-colors">
                    {card.title}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-3 pt-10 pb-4 text-xs font-bold text-gray-700">
            <button
              onClick={() => setCurrentPage(1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 1 ? "bg-[#18191c] text-white" : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 2 ? "bg-[#18191c] text-white" : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 3 ? "bg-[#18191c] text-white" : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              3
            </button>
            <span className="text-gray-400">...</span>
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-700">
              24
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom AI Prompt Banner Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-5 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed">
                Can&apos;t find the template you need? Describe your idea or share an existing website URL, and AI will create it for you.
              </p>
            </div>
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm transition-all text-center whitespace-nowrap cursor-pointer active:scale-[0.98]"
            >
              Create with AI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
