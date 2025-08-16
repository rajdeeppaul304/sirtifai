'use client';
import { Users, TrendingUp, IndianRupee, Building2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface ImpactMetric {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  label: string;
  iconColor: string;
}

const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'learners',
    icon: Users,
    value: '15,000+',
    label: 'Learners Trained',
    iconColor: 'text-blue-400'
  },
  {
    id: 'placement',
    icon: TrendingUp,
    value: '93%',
    label: 'Placement/Earning Rate',
    iconColor: 'text-green-400'
  },
  {
    id: 'income',
    icon: IndianRupee,
    value: '₹22K',
    label: 'Avg Practice Phase Income',
    iconColor: 'text-orange-400'
  },
  {
    id: 'companies',
    icon: Building2,
    value: '250+',
    label: 'Hiring Companies',
    iconColor: 'text-blue-400'
  }
];

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionH2 = motion.h2 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

export const ImpactNumbersSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-[#1F2937] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <MotionDiv 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <MotionH2 
            className="sm:text-4xl text-3xl font-semibold sm:font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Impact in Numbers
          </MotionH2>
        </MotionDiv>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_METRICS.map((metric, index) => (
            <MotionDiv 
              key={metric.id} 
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full bg-gray-100 ${metric.iconColor}`}>
                  <metric.icon size={32} />
                </div>
              </div>

              {/* Value */}
              <div className="text-3xl font-bold text-gray-900 mb-3">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
