"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import { ExternalLink, Globe, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Work</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          A selection of projects that demonstrate my technical capabilities and design approach.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden bg-neutral-900">
              {/* Placeholder image with overlay */}
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600 group-hover:scale-110 transition-transform duration-500">
                {project.title}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
                {project.category}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 text-[10px] font-medium bg-white/5 rounded border border-white/10 text-neutral-400">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span key="more" className="px-2 py-1 text-[10px] font-medium bg-white/5 rounded border border-white/10 text-neutral-400">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/5 backdrop-blur-md rounded-3xl border border-white/20"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-bold bg-white/10 rounded-full text-neutral-400">
                    {selectedProject.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{selectedProject.title}</h2>

                <div className="aspect-video rounded-2xl bg-neutral-900 mb-8 border border-white/10 flex items-center justify-center text-neutral-600">
                  Project Image Placeholder
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-white">Overview</h4>
                      <p className="text-neutral-400 leading-relaxed">{selectedProject.longDescription}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-white">The Problem</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">{selectedProject.caseStudy.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-white">The Objective</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">{selectedProject.caseStudy.objective}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-white">The Solution</h4>
                      <p className="text-neutral-400 leading-relaxed">{selectedProject.caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-white">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        {selectedProject.caseStudy.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                      <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="px-2 py-1 text-[10px] font-medium bg-white/5 rounded border border-white/10 text-neutral-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                      <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Project Details</h4>
                      <div className="space-y-4 text-sm">
                        <div>
                          <span className="text-neutral-500 block">My Role</span>
                          <span className="text-white font-medium">{selectedProject.caseStudy.role}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">Challenges</span>
                          <span className="text-neutral-400">{selectedProject.caseStudy.challenges}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">Results</span>
                          <span className="text-neutral-400">{selectedProject.caseStudy.results}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-semibold text-sm">
                          <Globe size={18} /> GitHub
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a href={selectedProject.liveUrl} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors">
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
