'use client';

import { CERTIFICATIONS } from '../../constants/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const MotionH2 = motion.h2 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionImage = motion(Image) as React.ComponentType<
  React.ComponentProps<typeof Image> & import('framer-motion').MotionProps
>;

export const CertificationsSection = () => {
  return (
    <section className="w-full bg-[#FEF7F1] pt-12 pb-0 sm:py-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - Certifications */}
        <div className="">
          {/* Header - Left Aligned */}
          <MotionDiv 
            className="text-left mb-4 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MotionP 
              className="text-orange-500 text-sm font-semibold  uppercase tracking-wider mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              RECOGNISED CERTIFICATION BLOCK
            </MotionP>
            <MotionH2 
              className="sm:text-4xl text-3xl font-semibold sm:font-bold text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Certifications That Employers Trust
            </MotionH2>
          </MotionDiv>

          {/* Mobile: Marquee logos */}
          {/* Mobile marquee (<640px). Hidden on sm and above. Wrapped to avoid overlap and provide smooth scroll. */}
          <MotionDiv 
            className="relative sm:hidden w-full overflow-hidden py-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-10 animate-marquee whitespace-nowrap will-change-transform">
              {[...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, idx) => (
                <div key={cert.id + '-' + idx} className="flex flex-row items-center flex-shrink-0">
                  <div className="w-32 h-16 flex items-center justify-center">
                    <MotionImage
                      src={cert.logo}
                      alt={cert.name + ' certification logo'}
                      width={128}
                      height={64}
                      className="h-12 w-auto object-contain"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className={`text-xl font-bold ${cert.color} hidden`}>{cert.name}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Edge fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#FEF7F1] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#FEF7F1] to-transparent" />
          </MotionDiv>

          {/* Desktop / Tablet: Static grid of logos */}
          {/* Static grid visible from sm and up */}
          <MotionDiv 
            className="hidden sm:flex flex-wrap justify-center items-center gap-12 md:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {CERTIFICATIONS.map((cert, index) => (
              <MotionDiv 
                key={cert.id} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-40 h-24 flex items-center justify-center mb-4">
                  <MotionImage
                    src={cert.logo}
                    alt={cert.name}
                    width={160}
                    height={80}
                    className="sm:h-20 h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className={`text-3xl font-bold ${cert.color} hidden`}>{cert.name}</div>
                </div>
                {cert.id === 'aws' && <div className="w-20 h-1.5 bg-orange-500 rounded-full" />}
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
