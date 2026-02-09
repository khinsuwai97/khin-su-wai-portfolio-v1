'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a192f, #0d1b2a, #0a192f)',
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-300">
            Get In{' '}
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <p className="text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 h-full">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <Mail className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Email</p>
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRQMTKpHlPGKggGfGlXclJNpWJBRVnfMhVPJnDMZZHvQTTjBZRFHnVhhnFxlZnhhTVdLzk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-teal-400 font-medium"
                    >
                      khinsuwai009@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <Phone className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Phone</p>
                    <a
                      href="tel:+66629853725"
                      className="text-white hover:text-teal-400 font-medium"
                    >
                      (+66) 0629853725
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <MapPin className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">
                      Chiang Mai, Thailand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 h-full">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                Connect With Me
              </h3>
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/in/khin-su-wai-erica-3830b1114/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                    <Linkedin className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">LinkedIn</p>
                    <p className="text-white group-hover:text-teal-400 font-medium transition-colors">
                      Khin Su Wai (Erica)
                    </p>
                  </div>
                </a>
                <a
                  href="https://github.com/khinsuwai97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                    <Github className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">GitHub</p>
                    <p className="text-white group-hover:text-teal-400 font-medium transition-colors">
                      github.com/khinsuwai97
                    </p>
                  </div>
                </a>
                <a
                  href="https://wa.me/+66629853725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                    <svg
                      className="text-teal-400"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">WhatsApp</p>
                    <p className="text-white group-hover:text-teal-400 font-medium transition-colors">
                      +66 629 853 725
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
