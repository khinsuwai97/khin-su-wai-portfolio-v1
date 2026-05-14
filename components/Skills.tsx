"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Material-UI",
        "Redux Toolkit",
        "HeroUI",
        "React Testing Library",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "WebSocket",
        "REST APIs",
        "Figma",
        " Vercel",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #0d1b2a, #0a192f)" }}
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
            Skills &
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              {" "}
              Expertise
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.35 }}
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-slate-700"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-start gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: categoryIndex * 0.08 + index * 0.03 }}
                    whileHover={{ scale: 1.06, y: -3 }}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 rounded-lg text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
