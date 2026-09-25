"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { Globe, Layout, ShoppingBag, Zap, Palette, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe, Layout, ShoppingBag, Zap, Palette, Cpu
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">What I Can Build For You</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Professional digital solutions tailored to your business needs and goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = iconMap[service.icon] || Globe;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 glass rounded-3xl border border-white/10 group hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
