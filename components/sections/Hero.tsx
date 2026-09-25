"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layout, Palette } from 'lucide-react';
import { profile } from '@/data/profile';
import { skills } from '@/data/skills';

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I Build Digital Experiences That Turn Ideas Into Reality.";

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      if (!isDeleting) {
        setDisplayText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          isDeleting = true;
          timer = setTimeout(type, 2000); // Pause at the end
        } else {
          timer = setTimeout(type, 100);
        }
      } else {
        setDisplayText(fullText.slice(0, i));
        i--;
        if (i < 0) {
          isDeleting = false;
          timer = setTimeout(type, 500); // Pause before restarting
        } else {
          timer = setTimeout(type, 50); // Delete faster than typing
        }
      }
    };

    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  // Selected top technologies to display as icons/logos
  const featuredTech = [
    ...skills.development.slice(4, 6), // React, Next.js
    ...skills.design.slice(0, 1),       // Figma
    ...skills.cms.slice(0, 1),          // WordPress
  ].map(s => s.name);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden w-full">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid -z-10 opacity-40" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neutral-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-neutral-800/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            TECHNOLOGY • DESIGN • DEVELOPMENT
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500 min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse ml-1">|</span>
          </h1>

          <p className="text-lg text-neutral-400 mb-8 max-w-lg leading-relaxed">
            {profile.about.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-neutral-200 transition-all duration-300"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>

          {/* Tech Logos Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Expertise in</p>
            <div className="flex flex-wrap gap-6 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {featuredTech.map((tech) => (
                <div key={tech} className="flex items-center gap-2 text-sm font-medium text-neutral-400">
                   <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">
                     {tech[0]}
                   </div>
                   {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Visual Technology Element - Terminal-like interface */}
          <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/20 p-1 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-neutral-900 px-4 py-2 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-neutral-500 font-mono ml-4">bash — zsh</div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed space-y-3">
              <div className="flex gap-3">
                <span className="text-green-400">➜</span>
                <span className="text-neutral-300">npm run build-portfolio</span>
              </div>
              <div className="text-neutral-500 pl-6">
                Checking dependencies... <span className="text-white">✓</span><br />
                Optimizing assets... <span className="text-white">✓</span><br />
                Generating static pages... <span className="text-white">✓</span><br />
                Minifying CSS & JS... <span className="text-white">✓</span><br />
                <span className="text-blue-400">Build successful!</span>
              </div>
              <div className="flex gap-3">
                <span className="text-green-400">➜</span>
                <span className="text-neutral-300">cat brand.txt</span>
              </div>
              <div className="text-white pl-6 italic">
                "Designing the future of the web, one pixel at a time."
              </div>
              <div className="flex gap-3 animate-pulse">
                <span className="text-green-400">➜</span>
                <span className="w-2 h-5 bg-white" />
              </div>
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl"
          >
            <Code2 className="text-white" size={24} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-10 -left-10 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl"
          >
            <Layout className="text-white" size={24} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -right-20 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl"
          >
            <Palette className="text-white" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
