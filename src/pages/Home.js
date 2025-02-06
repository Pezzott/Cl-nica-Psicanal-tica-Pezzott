import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Services from '../components/sections/Services';
import Approach from '../components/sections/Approach';
import Testimonials from '../components/sections/Testimonials';
import Scheduling from '../components/sections/Scheduling';
import Contact from '../components/sections/Contact';

const Home = () => {
  useEffect(() => {
    // Sempre inicia no topo ao carregar a página
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div id="top">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>
      </div>

      <motion.div
        id="experience"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Experience />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>

      <motion.div
        id="approach"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Approach />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        id="scheduling"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Scheduling />
      </motion.div>

      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </main>
  );
};

export default Home;
