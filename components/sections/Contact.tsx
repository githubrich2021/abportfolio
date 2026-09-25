"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Mail, MessageCircle, FileText, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-6 mb-12">
            <a href={profile.socials.github} className="p-4 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all group border border-white/10">
              <Globe className="group-hover:text-white text-neutral-500 transition-colors" />
            </a>
            <a href={profile.socials.linkedin} className="p-4 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all group border border-white/10">
              <Globe className="group-hover:text-white text-neutral-500 transition-colors" />
            </a>
            <a href={profile.socials.instagram} className="p-4 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all group border border-white/10">
              <Globe className="group-hover:text-white text-neutral-500 transition-colors" />
            </a>
            <a href={`https://wa.me/${profile.socials.whatsapp}`} className="p-4 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all group border border-white/10">
              <MessageCircle className="group-hover:text-white text-neutral-500 transition-colors" />
            </a>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-all"
                />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
