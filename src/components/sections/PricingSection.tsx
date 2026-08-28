"use client";

import React from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "@/data/pricing";
import { CompareTableSection } from "./CompareTableSection";

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#0c0d0d] text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title & Guarantees Sub-header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Unlock the complete Hostinger AI Builder experience
          </h2>

          {/* Guarantee Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>24/7 support</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {pricingPlans.map((plan, idx) => {
            const isUnlimited = plan.id === "unlimited";
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between text-left transition-all ${
                  isUnlimited
                    ? "bg-gradient-to-b from-[#1d1836] via-[#141221] to-[#0e0d16] border-2 border-[#673de6] shadow-2xl shadow-[#673de6]/20 relative"
                    : "bg-[#18191c] border border-white/10 hover:border-white/20 shadow-xl"
                }`}
              >
                <div className="space-y-6">
                  {/* Badge & Title Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1.5">
                        {isUnlimited && <span className="text-purple-400">✦</span>}
                        <span>{plan.name}</span>
                      </h3>
                    </div>
                    {plan.badge && (
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          isUnlimited
                            ? "bg-[#673de6] text-white"
                            : "bg-purple-900/40 text-purple-300 border border-purple-500/20"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Subtitle / Description */}
                  <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
                    {plan.id === "premium" &&
                      "Launch your first website – from portfolios and resumes to blogs and link-in-bio pages"}
                    {plan.id === "unlimited" &&
                      "For growing businesses. Unlimited websites, AI tools, ecommerce, full flexibility"}
                    {plan.id === "cloud-startup" &&
                      "For businesses that need maximum performance and scalability"}
                  </p>

                  {/* Price */}
                  <div className="space-y-1">
                    <span className="text-xs text-gray-500 line-through block font-medium">
                      {plan.originalPrice}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white">
                        {plan.currentPrice}
                      </span>
                      <span className="text-sm font-semibold text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                      isUnlimited
                        ? "bg-[#673de6] hover:bg-[#5025d1] text-white shadow-lg shadow-[#673de6]/30 active:scale-[0.98]"
                        : "bg-[#18191c] hover:bg-white/10 border border-white/30 text-white active:scale-[0.98]"
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* Billing terms note */}
                  <p className="text-[11px] text-gray-400 font-normal leading-relaxed">
                    {plan.renewPrice}
                  </p>

                  {/* Features List */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <ul className="space-y-3 text-xs sm:text-sm text-gray-300 font-normal">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <svg
                            className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className={feat.includes("free for 1 year") ? "underline" : ""}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Unlimited Highlight Box */}
                  {isUnlimited && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-6 space-y-1">
                      <span className="text-xs font-bold text-purple-300 block">Why this plan?</span>
                      <p className="text-xs text-gray-300 leading-snug">
                        A complete solution for long-term projects. Everything included.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Disclaimers & Compare Matrix */}
        <div className="text-center space-y-3 pt-6 text-xs text-gray-400">
          <p>
            Unlimited features are subject to our{" "}
            <a href="#" className="underline text-gray-300 hover:text-white">
              Fair Usage Policy
            </a>
          </p>
          <p>
            All plans are paid upfront. The monthly rate reflects the total plan price divided by the number of months in your plan.
          </p>
          <div className="pt-2">
            <CompareTableSection />
          </div>
        </div>
      </div>
    </section>
  );
}
