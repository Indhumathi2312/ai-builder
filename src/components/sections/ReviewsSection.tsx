"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { reviewRow1, reviewRow2, ExactReviewItem } from "@/data/reviews";

export function ReviewsSection() {
  const allReviews = [...reviewRow1, ...reviewRow2];
  const [mobileActiveIdx, setMobileActiveIdx] = useState(0);

  const renderReviewCard = (review: ExactReviewItem) => (
    <div
      key={review.id}
      className="bg-[#18191c] border border-white/10 rounded-[24px] p-6 shadow-xl w-[320px] sm:w-[380px] shrink-0 text-left flex flex-col justify-between space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10 bg-gray-800">
          <Image
            src={review.avatarSrc}
            alt={review.author}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5 truncate">
            {review.hasXLogo && (
              <span className="text-xs bg-white text-black font-black px-1.5 py-0.5 rounded-sm">
                𝕏
              </span>
            )}
            <span className="truncate">{review.author}</span>
          </h4>
          <p className="text-xs text-gray-400 truncate">{review.handleOrRole}</p>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
        {review.content}
      </p>
    </div>
  );

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0c0d0d] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Don’t just take our word for it
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
            We’re proud to support creators and businesses worldwide. Here’s what some of them had to say.
          </p>
        </div>

        {/* Desktop / Tablet: Continuous Dual Infinite Marquee Rows */}
        <div className="hidden sm:flex flex-col gap-6 relative">
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0c0d0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0c0d0d] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Leftward Infinite Scroll */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="flex gap-6 shrink-0"
            >
              {[...reviewRow1, ...reviewRow1].map((rev, idx) => (
                <React.Fragment key={`${rev.id}-${idx}`}>
                  {renderReviewCard(rev)}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Rightward Infinite Scroll */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="flex gap-6 shrink-0"
            >
              {[...reviewRow2, ...reviewRow2].map((rev, idx) => (
                <React.Fragment key={`${rev.id}-${idx}`}>
                  {renderReviewCard(rev)}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile View: Single Card Carousel with Dots Pagination (Screenshot 3) */}
        <div className="sm:hidden space-y-6">
          <div className="flex justify-center px-4">
            {renderReviewCard(allReviews[mobileActiveIdx])}
          </div>

          {/* Dot Pagination Indicators */}
          <div className="flex items-center justify-center gap-1.5 pt-2 max-w-full overflow-x-auto no-scrollbar px-4">
            {allReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileActiveIdx(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  mobileActiveIdx === idx ? "w-6 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
