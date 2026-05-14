'use client';

import { Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId.toLowerCase()}`);
    if (!element) return;

    const offset = 88;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className="border-t border-slate-800/80 py-12 md:py-16"
      style={{ backgroundColor: '#0a192f' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent mb-4">
              {'Khin Su Wai'}
            </div>
            <p className="text-slate-400 mb-6">
              Frontend Engineer specializing in building exceptional digital
              experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-slate-400 hover:text-teal-400 cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Download</h3>
            <div className="space-y-3 text-slate-400">
              <p>
                <a
                  href="/Khin_Su_Wai_Resume.pdf"
                  download
                  className="hover:text-teal-400"
                >
                  Resume
                </a>
              </p>
              <p>
                <a
                  href="/Khin_Su_Wai_Cover_Letter.pdf"
                  download
                  className="hover:text-teal-400"
                >
                  Cover Letter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; 2026 Khin Su Wai. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            Crafted with{' '}
            <Heart size={16} className="text-red-500 fill-current" /> creativity
            & passion
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
