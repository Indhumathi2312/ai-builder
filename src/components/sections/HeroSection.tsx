"use client";

import React from "react";
import { motion } from "framer-motion";
import { heroData } from "@/data/hero";
import { PromptInput } from "@/components/ui/PromptInput";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0d0d] text-white pt-10 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Horizons Stepped Vertical Purple Gradient Columns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-end opacity-70">
        <div className="w-[1200px] h-[650px] bg-gradient-to-t from-[#673de6] via-[#5025d1]/40 to-transparent blur-[80px] rounded-t-[200px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-7 z-10">
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#18191c] hover:bg-[#28292d] border border-white/10 px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-200 hover:text-white transition-all shadow-md group"
          >
            <span>Website Builder and Horizons are now AI Builder</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white max-w-3xl mx-auto"
        >
          {heroData.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base lg:text-lg text-purple-100/90 max-w-xl mx-auto font-normal leading-relaxed"
        >
          {heroData.subtitle}
        </motion.p>

        {/* White Card Prompt Input UI */}
        <PromptInput />

        {/* Trustpilot Combo Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-200"
        >
          <span className="font-bold text-white">Excellent</span>
          {/* 5 Green Square Stars */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-emerald-500 flex items-center justify-center rounded-[2px]">
                <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            ))}
          </div>

          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-white transition-colors"
          >
            71,707 reviews on
          </a>

          <div className="flex items-center gap-1 font-bold text-white">
            <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Trustpilot</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
