import React from 'react';
import { motion } from 'framer-motion';
import { navigationLinks } from '../../constants/navigation';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white/90 backdrop-blur-lg fixed w-full top-0 z-50">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-2"
      >
        <img
          src="img/Logo.jpg"
          alt="Logo Clínica Pezzott"
          className="w-12 h-12 rounded-full"
        />
        <h1 className="text-2xl font-bold text-green-800 font-serif">
          Clínica Psicanalítica Pezzott
        </h1>
      </motion.div>
      <nav className="space-x-6">
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-green-700 transition-colors duration-300 font-medium"
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header; 