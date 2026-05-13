"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

const FloatingDownloadButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="/Khin_Su_Wai_Resume.pdf"
          download
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="group fixed bottom-5 right-5 z-50 cursor-pointer rounded-full border border-teal-400/20 bg-teal-500 p-3 text-slate-950 shadow-2xl shadow-teal-500/30 transition-colors hover:bg-teal-400 md:bottom-8 md:right-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Download size={18} />
          </motion.div>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Download Resume
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingDownloadButton;
