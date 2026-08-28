import React from "react";
import { topBannerData } from "@/data/navigation";

export function TopBanner() {
  return (
    <div className="h-banner h-banner--sticky bg-[#673de6] text-white py-1.5 px-4 text-xs font-medium z-[9999]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
        <span>{topBannerData.text}</span>
        <a
          href={topBannerData.linkHref}
          className="underline font-bold hover:text-purple-200 transition-colors inline-flex items-center gap-1"
        >
          {topBannerData.linkText}
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
