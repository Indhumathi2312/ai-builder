"use client";

import React, { useState } from "react";
import { compareFeaturesData } from "@/data/pricing";

export function CompareTableSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto pt-10">
      <div className="text-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#18191c] hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all cursor-pointer shadow-lg"
        >
          <span>{isOpen ? "Hide full feature comparison" : "Compare all features"}</span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mt-8 bg-[#18191c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-[#0c0d0d] text-white border-b border-white/10">
                <tr>
                  <th className="p-4 sm:p-6 font-bold text-base">Feature</th>
                  <th className="p-4 sm:p-6 font-bold text-base text-center">Premium</th>
                  <th className="p-4 sm:p-6 font-bold text-base text-center text-purple-400">
                    Business AI
                  </th>
                  <th className="p-4 sm:p-6 font-bold text-base text-center">Cloud Startup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {compareFeaturesData.map((categoryGroup, idx) => (
                  <React.Fragment key={idx}>
                    <tr className="bg-white/5 font-bold text-white">
                      <td colSpan={4} className="p-4 bg-[#0c0d0d]/50 text-purple-300 uppercase tracking-wider text-xs">
                        {categoryGroup.category}
                      </td>
                    </tr>
                    {categoryGroup.features.map((feat, fIdx) => (
                      <tr key={fIdx} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-medium text-gray-200">{feat.name}</td>
                        <td className="p-4 text-center">
                          {typeof feat.premium === "boolean" ? (
                            feat.premium ? (
                              <span className="text-emerald-400 font-bold">✓</span>
                            ) : (
                              <span className="text-gray-600">—</span>
                            )
                          ) : (
                            feat.premium
                          )}
                        </td>
                        <td className="p-4 text-center font-semibold text-white bg-purple-500/5">
                          {typeof feat.business === "boolean" ? (
                            feat.business ? (
                              <span className="text-emerald-400 font-bold">✓</span>
                            ) : (
                              <span className="text-gray-600">—</span>
                            )
                          ) : (
                            feat.business
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feat.cloud === "boolean" ? (
                            feat.cloud ? (
                              <span className="text-emerald-400 font-bold">✓</span>
                            ) : (
                              <span className="text-gray-600">—</span>
                            )
                          ) : (
                            feat.cloud
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
