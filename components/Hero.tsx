'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Github, Linkedin, Mail, Phone, MessageCircle,
    Download, Menu, X, Send, Briefcase, Calendar, Sparkles,
    ExternalLink, Code2, Lightbulb, Users, Zap, Heart
} from 'lucide-react';

import Image from "next/image";

const Hero = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
        { icon: Phone, href: 'tel:+1234567890', label: 'Phone' },
        { icon: MessageCircle, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-4 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full inline-flex items-center gap-2"
                        >
                            <Sparkles className="w-4 h-4 text-teal-400" />
                            <span className="text-teal-400 text-sm font-medium"> Available for new opportunities</span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl text-slate-300 font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Khin Su Wai
                            <br />
                            {/* <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                                Frontend Developer
                            </span> */}
                        </motion.h1>
                        <motion.p
                            className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text font-bold text-transparent text-3xl mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Frontend Developer
                        </motion.p>

                        <motion.p
                            className="md:text-xl text-lg text-slate-300 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Hi, I'm Khin Su Wai. A self-taught Frontend Developer based in Chiang Mai, Thailand.
                            I build accessible, pixel-perfect digital experiences for the web. Specialized in React, Next.js, and TypeScript.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.button
                                className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 shadow-lg shadow-teal-500/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={20} />
                                Download Resume
                            </motion.button>

                            <motion.button
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 border-2 border-teal-500 text-teal-400 rounded-lg font-medium hover:bg-teal-500/10"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="flex gap-3 md:gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 md:p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-teal-400"
                                    whileHover={{ y: -4 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 md:w-5.5 md:h-5.5" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative order-first md:order-last"
                    >
                        <div className="relative w-full aspect-square max-w-50 md:max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-full blur-2xl animate-pulse" />
                            <div className="relative w-full h-full bg-slate-800 rounded-full border-4 border-teal-500/30 overflow-hidden flex items-center justify-center">
                                <div className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                                    Your Photo
                                </div>
                            </div>
                            <motion.div
                                className="absolute -top-4 -right-4 md: bg-teal-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg md:flex hidden"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                React
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-4 -left-4 bg-teal-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg md:flex hidden"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                            >
                                TypeScript
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:flex hidden"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-teal-500 rounded-full flex justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-teal-500 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};


export default Hero;