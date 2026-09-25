"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow Solutions',
    text: 'Richmond is a rare talent who truly understands the intersection of design and development. He didn\'t just build a website; he built a growth engine for our business.',
    avatar: 'SJ',
    color: 'bg-blue-500/20'
  },
  {
    name: 'Marcus Chen',
    role: 'Founder, Nexus Creative',
    text: 'The attention to detail in the UI/UX was incredible. Richmond turned our vague ideas into a pixel-perfect reality. His technical expertise is matched only by his creative vision.',
    avatar: 'MC',
    color: 'bg-purple-500/20'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director, Aura Digital',
    text: 'Working with RiG_Designs was a seamless experience. The site is blazing fast, looks premium, and has significantly increased our conversion rates. Highly recommended!',
    avatar: 'ER',
    color: 'bg-emerald-500/20'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          Client Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 max-w-2xl mx-auto"
        >
          Kind words from the partners and clients I've had the pleasure of working with.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ y: -10 }}
            className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col"
          >
            <div className="absolute -top-4 -left-4 p-3 bg-white text-black rounded-2xl shadow-xl">
              <Quote size={20} />
            </div>

            <div className="flex-grow">
              <p className="text-neutral-300 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className={`w-12 h-12 rounded-full ${testimonial.color} border border-white/20 flex items-center justify-center font-bold text-white`}>
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-xs text-neutral-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
