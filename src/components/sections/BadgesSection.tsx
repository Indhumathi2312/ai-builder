"use client";

import React, { useState } from "react";
import { badgesData } from "@/data/badges";

export function BadgesSection() {
  const [activeBadge, setActiveBadge] = useState(badgesData[0].id);

  const handleScrollTo = (id: string) => {
    setActiveBadge(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-14 sm:top-16 z-40 py-3 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <div className="bg-white text-gray-900 shadow-2xl rounded-full p-1.5 inline-flex items-center gap-1 border border-gray-100 max-w-full overflow-x-auto no-scrollbar">
          {badgesData.map((badge) => {
            const isActive = activeBadge === badge.id;
            return (
              <button
                key={badge.id}
                onClick={() => handleScrollTo(badge.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#18191c] text-white shadow-md"
                    : "text-gray-800 hover:text-black hover:bg-gray-100"
                }`}
              >
                {badge.label}
              </button>
            );
          })}
          {/* Scroll Right Indicator Chevron Icon */}
          <div className="pr-2 pl-1 text-gray-400 sm:hidden">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
