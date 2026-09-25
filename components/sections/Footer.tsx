"use client";

import React from 'react';
import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-montserrat font-bold text-xl tracking-tighter mb-2">
            {profile.brand}
          </div>
          <p className="text-neutral-500 text-sm max-w-xs">
            Developer, Designer, and Digital Solutions Creator building high-impact digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-center md:text-right text-neutral-500 text-xs">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p className="mt-1 italic">Built with passion, creativity & code.</p>
        </div>
      </div>
    </footer>
  );
}
