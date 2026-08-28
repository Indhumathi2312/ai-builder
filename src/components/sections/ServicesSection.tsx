"use client";

import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white text-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Getting started is easy
          </h2>
        </div>

        {/* 3 Steps Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-center items-start">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center max-w-sm mx-auto space-y-3"
            >
              {/* Soft Purple Step Number Pill */}
              <div className="inline-flex items-center justify-center bg-[#f0ebff] text-[#673de6] font-bold text-base sm:text-lg px-4 py-1 rounded-xl shadow-sm mb-1">
                {service.number}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
