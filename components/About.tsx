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

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Turning challenges into solutions',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating with cross-functional teams',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Adapting to new technologies quickly',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a192f, #0d1b2a, #0a192f)',
      }}
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
          <h2 className="text-4xl md:text-5xl text-slate-300 font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-teal-400">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm a passionate self-taught Frontend Developer with 2+ years of
                experience building modern, responsive web applications. I
                specialize in React, Next.js, and TypeScript, with a strong
                focus on creating accessible and performant user interfaces. I
                am also learning backend development with{' '}
                <span className="text-teal-400">Node.js</span> and{' '}
                <span className="text-teal-400">Express</span> to become a
                well-rounded full-stack developer as well.
              </p>
              <p>
                My journey started with a curiosity about web development so
                decided to pursue it professionally. Today, I've had the
                privilege of working with established company helping them bring
                their digital visions to life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300"
                style={{ backgroundColor: 'rgba(15, 32, 50, 0.5)' }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-teal-400" size={24} />
                </div>
                <h4 className="font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: 'Years Experience', value: '5+' },
                        { label: 'Projects Completed', value: '50+' },
                        { label: 'Happy Clients', value: '30+' },
                        { label: 'Lines of Code', value: '100K+' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.9 + index * 0.1 }}
                            className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700"
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div> */}
      </div>
    </section>
  );
};

export default About;
