"use client";

import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, Phone } from 'lucide-react';
import { profile } from '@/data/profile';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-neutral-500">
            Let's Build Something Amazing
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance projects and full-time opportunities.
            Whether you have a fully-fledged idea or just a spark, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10"
          >
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
                  rows={6}
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
          </motion.div>

          {/* Info & Map Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-2xl text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-neutral-400 text-sm break-all">{profile.socials.email}</p>
                </div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-2xl text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-neutral-400 text-sm">{profile.socials.whatsapp || 'Available upon request'}</p>
                </div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-2xl text-white">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-neutral-400 text-sm">Remote / Global</p>
                </div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-2xl text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Office</h4>
                  <p className="text-neutral-400 text-sm">Digital Studio</p>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative h-100 rounded-3xl overflow-hidden border border-white/10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353!3d-37.8172099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsCTAnMDIiIE8uMScgTTAgMHMy!5e0!3m2!1sen!2s!4v1633000000000!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
