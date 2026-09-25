"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function TechStrip() {
  const techs = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
    'PHP', 'MySQL', 'Java', 'C++', 'WordPress', 'WooCommerce',
    'Figma', 'Git', 'GitHub', 'Bootstrap'
  ];

  return (
    <div className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center px-6"
      >
        {[...techs, ...techs].map((tech, idx) => (
          <span key={idx} className="text-neutral-500 font-medium text-lg uppercase tracking-widest hover:text-white transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
