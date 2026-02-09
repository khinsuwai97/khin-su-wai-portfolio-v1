'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Github,
  ExternalLink,
} from 'lucide-react';

import Image from 'next/image';
import corporationX from '../public/images/corporationX.png';
import elysianStays from '../public/images/elysianStays.png';
import moviesHub from '../public/images/moviesHub.png';
import movieHubs from '../public/images/movies-hub.png';
import omniFood from '../public/images/omni-food.png';
import quizzical from "../public/images/quizzical.png";
import taskflowBoard from "../public/images/taskflow-board.png";
import trendyShop from "../public/images/trendy-shop.png";
// import trendyShoe from "../public/images/trendyShoe.png"
import trendyShoe from "../public/images/trendy.png";
import khinSuWaiPortfolio from '../public/images/khin-su-wai-old-porfolio.png';


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Movies Hub',
      description:
        'Movies Hub website is to search and filter your favorite movies and series,keep upadated with trending,check movie details and add your favorite to watchlist including dark mode and light mode.',
      technologies: ["React", "Next.js", 'TypeScript', 'Tailwind CSS', 'Zustand', "Swr", "MUI"],
      github: 'https://github.com/khinsuwai97/movies-hub',
      demo: 'https://movies-hub-coral.vercel.app/',
      image: movieHubs,
    },
    {
      title: 'Trendy-e-commerce-shoes',
      description:
        "Trendy-e-commerce-shoes website is to search and buy shoes that you like, filter products according to price and other sort categories, check details of shoes and different sizes, add your shoes that you like to cart.",
      technologies: ['React', 'Tailwind CSS', 'Auth0-react', 'React-Router-Dom', "Context API"],
      github: 'https://github.com/khinsuwai97/Trendy-e-commerce-shoes-website',
      demo: 'https://trendy-e-commerce-shoes-website.pages.dev/',
      image: trendyShoe,
    },
    {
      title: 'Elysian Stays',
      description:
        "Elysian Stays is a hotel/cabin management application built with React, TypeScript, and Vite. The application provides functionality for managing bookings, cabins, guests, and hotel operations with a focus on elegant UI and dark mode support.",
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'React-Router-Dom', "Context API"],
      github: 'https://github.com/khinsuwai97/elysian-stays',
      demo: 'https://elysian-stays.netlify.app/',
      image: elysianStays,
      note: "Since it is a booking application, it will not be mobile responsive to provide a better user experience on larger screens."
    },
    {
      title: 'Task Management App',
      description:
        'A modern, responsive Kanban board application built with Next.js, TypeScript, and Redux Toolkit. Organize your tasks efficiently with drag-and-drop functionality and a beautiful, intuitive interface.',
      technologies: ["React", "Next.js", 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', '@hello-pangea/dnd'],
      github: 'https://github.com/khinsuwai97/taskflow-board',
      demo: 'https://taskflow-board-app.netlify.app/',
      image: taskflowBoard,
    },
    {
      title: 'CorporationX Consulting',
      description:
        'CorporationX Consulting is a responsive consulting website built with React and Tailwind CSS. Features include a responsive navigation bar, interactive hero section, and a clean design that enhances user experience.',
      technologies: ['React', 'Framer-Motion', 'Tailwind CSS', ' React-Scroll'],
      github: 'https://github.com/khinsuwai97/consulting-service-website',
      demo: 'https://consulting-service-website.pages.dev/',
      image: corporationX,
    },
    {
      title: 'My Old Portfolio Website',
      description:
        'My old portfolio website showcases my skills and projects in a clean, responsive design that enhances user experience including dark mode support.',
      technologies: ["React", "Next.js", 'Next Theme', 'Tailwind CSS', ' React-Scroll'],
      github: 'https://github.com/khinsuwai97/khin-su-wai-portfolio',
      demo: 'https://khin-su-wai-portfolio.vercel.app/',
      image: khinSuWaiPortfolio,
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
            experience.Want to see more? Please visit my <a href="https://github.com/khinsuwai97" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">GitHub</a>.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-teal-500/50 transition-all flex flex-col md:flex-row"
                whileHover={{ scale: 1.02 }}
              >
                {/* Image - full width on mobile, left half on desktop */}
                {/* md:w-1/2 h-64 md:min-h-80 */}
                <div className="relative w-full md:w-1/2 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover object-top z-10"
                  />
                </div>

                {/* Content - below image on mobile, right side on desktop */}
                <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-500/10 text-teal-400 text-sm rounded-full border border-teal-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-start items-center gap-3">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium rounded-md transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 border border-teal-500 text-teal-400 hover:bg-teal-500/10 text-xs font-medium rounded-md transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Code
                      <Github size={14} />
                    </motion.a>
                  </div>
                  <span className="text-xs text-slate-500 mt-4">{`${project.note ? `Note: ${project.note}` : ''}`}</span>
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
