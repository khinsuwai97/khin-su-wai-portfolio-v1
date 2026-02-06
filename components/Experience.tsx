'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Github, Linkedin, Twitter, Mail, MapPin, Phone,
    Download, Menu, X, Send, Briefcase, Calendar,
    ExternalLink, Code2, Lightbulb, Users, Zap, Heart
} from 'lucide-react';

import Image from "next/image";

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            title: 'Junior Frontend Developer',
            company: 'XENOptics Co.,LTD, THAILAND',
            location: 'Chiang Mai, Thailand',
            period: 'Oct 2023 - present',
            description: 'As a frontend developer, I am currently working on a Network Management System (NMS) and Element Management System (EMS) designed to monitor and manage machines across a network. My responsibilities include building user-friendly interfaces,good performance of UI and real time machine statuses using the ATOMIC DESIGN PATTERN.I collaborate closely with backend teams to integrate APIs. I use technologies such as React, TypeScript, Redux for state management,Hero UI, Tailwind CSS and MUI in my current project.',
            technologies: ['React', 'JavaScript(ES6+)', 'TypeScript', 'Tailwind CSS', 'MaterialUI', "HeroUI", 'Redux', 'GitLab', "Python"],
            achievements: [
                // 'Improved page load performance by 60%',
                // 'Mentored 5 junior developers',
                // 'Led migration to TypeScript',
            ],
        },
        // {
        //     title: 'Frontend Developer',
        //     company: 'Digital Agency',
        //     location: 'New York, NY',
        //     period: '2020 - 2022',
        //     description: 'Developed responsive web applications for various clients in e-commerce and healthcare.',
        //     technologies: ['React', 'Redux', 'SCSS', 'Material-UI', 'Jest'],
        //     achievements: [
        //         'Built 15+ client projects on time',
        //         'Implemented automated testing',
        //         'Optimized SEO for 200% traffic increase',
        //     ],
        // },
    ];

    return (
        <section id="experience" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0a192f' }}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-slate-300 font-bold mb-4">
                        Where <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">I've Worked</span>
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 80 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    />
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + index * 0.2 }}
                            className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                    <div className="flex items-center gap-2 text-teal-400 font-medium mb-1">
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                        <span className="text-slate-500">•</span>
                                        <span className="text-slate-400">{exp.location}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <Calendar size={16} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-slate-300 mb-4">{exp.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {exp.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-teal-500/10 text-teal-400 text-sm rounded-full border border-teal-500/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* <div className="space-y-2">
                                <h4 className="font-semibold text-white text-sm mb-2">Key Achievements:</h4>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-teal-400 mt-1">▹</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Experience;