import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import FloatingDownloadButton from '@/components/FloatingDownloadButton';
import AdditionalSkills from '@/components/AdditionalSkills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';

const Page = () => {
  return (
    <PageLoader>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingDownloadButton />
    </PageLoader>
  );
};

export default Page;
