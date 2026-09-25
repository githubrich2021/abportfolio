"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 to-transparent blur-2xl rounded-full group-hover:opacity-100 transition-opacity duration-500 opacity-50" />
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
            <img
              src="/images/Richmond.jpg"
              alt="Richmond Abenney"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {profile.about.title}
          </h2>
          <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
            {profile.about.description}
          </p>
          <p className="text-lg text-neutral-500 mb-10 leading-relaxed italic">
            "{profile.about.story}"
          </p>

          <div className="grid grid-cols-2 gap-4">
            {profile.about.stats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="text-sm text-neutral-500 mb-1">{stat.label}</div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
