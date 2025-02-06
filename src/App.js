import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import HowItWorks from './components/sections/HowItWorks';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Blog from './pages/Blog';
import Footer from './components/layout/Footer';  
import HoldingPost from './pages/blog/HoldingTeoriaWinnicottianaPost';
import AnsiedadePost from './pages/blog/AnsiedadeEraDigitalPost';
import AnaliseOnlinePost from './pages/blog/AnaliseOnlineBeneficiosPost';
import DepressaoPost from './pages/blog/DepressaoVisaoPsicoanaliticaPost';

// Componente para a página inicial
const Home = () => (
  <>
    <Hero />
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <About />
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <HowItWorks />
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
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Testimonials />
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Contact />
    </motion.div>
  </>
);

// Componente para gerenciar as transições de rota
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/holding-teoria-winnicottiana" element={<HoldingPost />} />
        <Route path="/blog/ansiedade-era-digital" element={<AnsiedadePost />} />
        <Route path="/blog/analise-online-beneficios" element={<AnaliseOnlinePost />} />
        <Route path="/blog/depressao-visao-psicanalitica" element={<DepressaoPost />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="flex-grow pt-[80px]">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
