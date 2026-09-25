"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

const SkillCategory = ({ title, items }: { title: string, items: { name: string, level: string }[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold mb-2 text-neutral-300">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            {skill.name}
            <span className="text-[10px] text-neutral-500 opacity-60 uppercase tracking-tighter ml-1">{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          A curated set of technologies and tools I use to bring digital solutions to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <SkillCategory title="Development" items={skills.development} />
        <SkillCategory title="CMS & E-Commerce" items={skills.cms} />
        <SkillCategory title="Design" items={skills.design} />
        <SkillCategory title="Tools" items={skills.tools} />
      </div>
    </section>
  );
}
