'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Download,
  Menu,
  X,
  Send,
  Briefcase,
  Calendar,
  ExternalLink,
  Code2,
  Lightbulb,
  Users,
  Zap,
  Heart,
} from 'lucide-react';

import Image from 'next/image';
import XenLogo from '../public/xen_logo.png';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo-ecommerce.vercel.app',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard with beautiful data visualizations and real-time updates.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Redux'],
      github: 'https://github.com/yourusername/dashboard',
      demo: 'https://demo-dashboard.vercel.app',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management with drag-and-drop functionality and team workspaces.',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth'],
      github: 'https://github.com/yourusername/taskapp',
      demo: 'https://demo-taskapp.vercel.app',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0a192f' }}
    >
      <div
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-slate-300 md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-teal-500/50 transition-all h-full flex flex-col"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center">
                  <div className="text-slate-500 text-sm">
                    Project Screenshot
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-teal-500/10 text-teal-400 text-xs rounded border border-teal-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center items-center gap-4 mt-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-teal-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white text-sm">Code</span>
                      <Github size={16} className="text-teal-300" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-teal-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white text-sm">Live Demo</span>
                      <ExternalLink size={16} className="text-teal-300" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
