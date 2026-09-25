"use client";

import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    period: 'Education',
    title: 'Technology & Computing Studies',
    desc: 'Academic foundation in computer science and digital systems.',
    type: 'education',
  },
  {
    period: 'Projects',
    title: 'Web Development & Software Systems',
    desc: 'Developed multiple full-stack applications focusing on real-world utility.',
    type: 'project',
  },
  {
    period: 'Design',
    title: 'Graphic & Digital Design',
    desc: 'Creating visual identities and UI/UX layouts for diverse clients.',
    type: 'design',
  },
  {
    period: 'Freelance',
    title: 'Digital Solutions Delivery',
    desc: 'Providing end-to-end web and brand solutions for independent clients.',
    type: 'work',
  },
  {
    period: 'Present',
    title: 'Continuous Growth',
    desc: 'Focused on mastering emerging technologies and building scalable digital products.',
    type: 'current',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          My Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 max-w-2xl mx-auto"
        >
          A timeline of my evolution as a technology professional, moving from academic foundations to delivering scalable digital products.
        </motion.p>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <div className="space-y-12">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Content Card */}
              <div className="w-full md:w-[45%] pl-12 md:pl-0">
                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/10 rounded-full text-neutral-400 group-hover:text-white transition-colors">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:translate-x-0 flex items-center justify-center z-10">
                <div className="w-10 h-10 rounded-full bg-neutral-950 border-2 border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-white/50">
                  <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
              </div>

              {/* Empty spacer for the other side on desktop */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
