"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { heroData } from "@/data/hero";

export function PromptInput() {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      alert(`AI Builder generating project for: "${prompt}"`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-3xl mx-auto"
    >
      <form onSubmit={handleSubmit}>
        <div className="bg-white text-gray-900 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 shadow-2xl flex flex-col justify-between min-h-[170px] sm:min-h-[190px] border border-white/20 transition-all text-left">
          {/* Text Area Input */}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={heroData.inputPlaceholder}
            rows={2}
            className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none resize-none text-base sm:text-lg font-normal"
          />

          {/* Bottom Button Action */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#18191c] hover:bg-[#2c2d30] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md cursor-pointer"
            >
              <span>{heroData.buttonLabel}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
