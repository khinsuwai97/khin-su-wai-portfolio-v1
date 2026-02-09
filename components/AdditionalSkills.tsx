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

const AdditionalSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Jest / Testing', level: 85 },
        { name: 'Figma', level: 75 },
      ],
    },
    // {
    //   title: 'Soft Skills',
    //   skills: [
    //     { name: 'Problem Solving', level: 95 },
    //     { name: 'Team Work', level: 90 },
    //     { name: 'Communication', level: 88 },
    //   ],
    // },
  ];

  const additionalSkills = [
    'Responsive Design',
    'Web Accessibility',
    'Performance Optimization',
    'SEO',
    'Agile/Scrum',
    'CI/CD',
    'Node.js',
    'MongoDB',
    'Firebase',
    'Framer Motion',
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a192f, #0d1b2a, #0a192f)',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        ref={ref}
      >
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div> */}

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-slate-700"
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-start gap-3">
                {additionalSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 rounded-lg text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              {/* <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-teal-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1,
                          duration: 1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {/* <h3 className="text-2xl font-bold mb-6 text-center">
            Additional{' '}
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h3> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalSkills;
