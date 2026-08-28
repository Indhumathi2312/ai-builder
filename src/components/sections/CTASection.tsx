"use client";

import React from "react";
import { motion } from "framer-motion";
import { ctaData } from "@/data/cta";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0c0d0d] text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#2a1768] via-[#5625cf] to-[#7641f3] rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 lg:p-20 shadow-2xl text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8 border border-white/10 relative overflow-hidden"
        >
          {/* Subtle Background Glow Streak */}
          <div className="absolute inset-0 bg-radial from-white/10 to-transparent blur-3xl pointer-events-none" />

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-tight lg:leading-tight max-w-3xl mx-auto relative z-10">
            {ctaData.title}
          </h2>

          {/* Button */}
          <div className="pt-2 w-full sm:w-auto relative z-10">
            <a
              href={ctaData.buttonLink}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#18191c] font-bold text-sm sm:text-base px-9 py-3.5 rounded-xl shadow-xl transition-all cursor-pointer w-full sm:w-auto active:scale-[0.98]"
            >
              {ctaData.buttonText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
