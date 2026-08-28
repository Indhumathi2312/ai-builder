"use client";

import React from "react";
import { motion } from "framer-motion";

export function MixedCardsSection() {
  const gridFeatures = [
    {
      id: "feat-1",
      title: "Everything to go live",
      description: "Connect Stripe and Integrated backend to launch real, working products – no tech skills needed.",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "feat-2",
      title: "Integrated backend",
      description: "Databases, user accounts, and file storage built in – no external tools needed.",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      id: "feat-3",
      title: "Built-in AI",
      description: "Add a chatbot or smart search to your website or web app – no third party account or separate billing.",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: "feat-4",
      title: "Powerful integrations, simple setup",
      description: "Stripe is built in and ready to go. PayPal, Google AdSense, and more – all supported with simple setup so you're never stuck.",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
    },
    {
      id: "feat-5",
      title: "Build it once, earn from it",
      description: "Publish your project as a remixable template and earn commission every time someone purchases AI Builder through it.",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "feat-6",
      title: "Backed by Hostinger",
      description: "Trusted by 5M+ clients across 150+ countries. 20 years of experience.",
      icon: (
        <svg className="w-5 h-5 text-purple-400 fill-current" viewBox="0 0 24 24">
          <path d="M7 2V15.65L2 20.65V7L7 2Z" fill="currentColor" />
          <path d="M16.9994 17L11.9994 22H3.29941L8.29941 17H16.9994Z" fill="currentColor" />
          <path d="M22 3.35V17L17 22V8.35L22 3.35Z" fill="currentColor" />
          <path d="M20.65 2L15.65 7H7L12 2H20.65Z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0c0d0d] text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Hero Card: Prompt Box + Features Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#18191c] border border-white/10 rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: Purple Gradient Background with Floating Prompt Box */}
          <div className="relative bg-gradient-to-br from-[#7b46f6] via-[#673de6] to-[#431bb5] p-8 lg:p-12 flex items-center justify-center lg:col-span-6 min-h-[320px] overflow-hidden">
            {/* Background Stepped Gradient Streaks */}
            <div className="absolute inset-0 opacity-40 bg-radial from-white to-transparent blur-2xl pointer-events-none" />

            {/* Floating Prompt Card */}
            <div className="relative z-10 bg-[#18191c]/95 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl max-w-sm w-full space-y-4">
              <p className="text-gray-200 text-xs sm:text-sm font-normal leading-relaxed">
                Create a blog website for traveling. Use a mix of earthy tones, polaroid-style imagery to create exploratory vibe...
              </p>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3 text-gray-400">
                  <svg className="w-4 h-4 hover:text-white transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <svg className="w-4 h-4 hover:text-white transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <svg className="w-4 h-4 hover:text-white transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold hover:bg-gray-200 transition-colors shadow-md cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Bottom Right Pause Icon */}
            <div className="absolute bottom-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Right Column: Text & See Features Button */}
          <div className="bg-[#121316] p-8 lg:p-12 flex flex-col justify-center space-y-6 lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Turn your words into real websites and apps
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              Describe what you want – a booking page, online store, customer portal, anything. AI Builder designs it, builds it, and has it live in minutes.
            </p>
            <div className="pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-[#673de6] hover:bg-[#5025d1] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#673de6]/30 transition-all cursor-pointer active:scale-[0.98]"
              >
                See features
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Card: 6 Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#18191c] border border-white/10 rounded-[28px] sm:rounded-[36px] p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left">
            {gridFeatures.map((feat) => (
              <div key={feat.id} className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/20 flex items-center justify-center shrink-0 mb-3">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
