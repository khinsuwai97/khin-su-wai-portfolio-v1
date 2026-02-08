import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import FloatingDownloadButton from '@/components/FloatingDownloadButton';
import AdditionalSkills from '@/components/AdditionalSkills';
import Projects from '@/components/Projects';
const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <FloatingDownloadButton />
    </>
  );
};

export default Page;
