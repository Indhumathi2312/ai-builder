"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNavItems } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] bg-white text-gray-900 flex flex-col justify-between"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            {/* Hostinger Logo Symbol in Black */}
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-black fill-current"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M7 2V15.65L2 20.65V7L7 2Z" fill="currentColor" />
                <path d="M16.9994 17L11.9994 22H3.29941L8.29941 17H16.9994Z" fill="currentColor" />
                <path d="M22 3.35V17L17 22V8.35L22 3.35Z" fill="currentColor" />
                <path d="M20.65 2L15.65 7H7L12 2H20.65Z" fill="currentColor" />
              </svg>
            </div>

            {/* Close X Button */}
            <button
              onClick={onClose}
              className="p-1 text-gray-800 hover:text-black focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items List */}
          <div className="flex-1 px-6 py-6 overflow-y-auto space-y-1">
            {mainNavItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-4 text-sm font-medium text-gray-800 hover:text-black border-b border-gray-100 transition-colors"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="px-6 py-5 border-t border-gray-100 bg-white flex items-center justify-between text-xs font-semibold text-gray-800">
            {/* Left: Language Selector */}
            <button className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer">
              <svg className="w-5 h-5 rounded-full overflow-hidden shrink-0 shadow-sm" viewBox="0 0 640 480">
                <path fill="#012169" d="M0 0h640v480H0z" />
                <path fill="#FFF" d="m75 0 245 180L565 0h75v55L395 240l245 185v55h-75L320 300 75 480H0v-55l245-185L0 55V0h75z" />
                <path fill="#C8102E" d="m424 281 216 163v36h-48L376 317l48-36zM216 199 0 36V0h48l216 163-48 36zm0 82L0 444v36h48l216-163-48-36zm208-82L640 36V0h-48L376 163l48 36z" />
                <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
                <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z" />
              </svg>
              <span>EN</span>
            </button>

            {/* Right: My Account */}
            <button className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>My account</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
