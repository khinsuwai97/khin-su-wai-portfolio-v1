'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
} from 'lucide-react';

import Image from 'next/image';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    // Close mobile menu first, then scroll after layout settles
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    }, 300); // Wait for menu close animation to finish
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
      }}
    >
      <div className="px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl cursor-pointer font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={'/icon-512.svg'}
              alt="log photo"
              width={45}
              height={45}
            />
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-teal-400 font-medium cursor-pointer"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-teal-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 bg-navy-900">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-2 px-4 text-slate-300 hover:text-teal-400 hover:bg-slate-800 rounded-lg"
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
