import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 font-serif">
            Experiência Comprovada em Psicanálise
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Há mais de uma década dedicado à prática psicanalítica, oferecendo um atendimento personalizado e humanizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <div className="text-4xl font-bold text-green-700 mb-2">700+</div>
            <div className="text-gray-600">Pacientes Atendidos</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <div className="text-4xl font-bold text-green-700 mb-2">94%</div>
            <div className="text-gray-600">Índice de Satisfação</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <div className="text-4xl font-bold text-green-700 mb-2">10+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <div className="text-4xl font-bold text-green-700 mb-2">5.000+</div>
            <div className="text-gray-600">Horas de Atendimento</div>
          </motion.div>
        </div>

        {/* Diferenciais */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-green-800 mb-4">Atendimento Personalizado</h4>
            <p className="text-gray-600">
              Cada paciente recebe atenção exclusiva e um plano terapêutico adaptado às suas necessidades específicas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-green-800 mb-4">Flexibilidade de Horários</h4>
            <p className="text-gray-600">
              Disponibilidade de horários flexíveis para melhor atender às necessidades da sua rotina.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-green-800 mb-4">Ambiente Acolhedor</h4>
            <p className="text-gray-600">
              Espaço tranquilo e confortável, projetado para proporcionar bem-estar durante as sessões.
            </p>
          </motion.div>
        </div>

        {/* Depoimentos */}
        <div className="mt-20">
          <h4 className="text-2xl font-bold text-green-900 text-center mb-12 font-serif">
            O Que Dizem os Pacientes
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Iniciei as sessões em meados de 2022 e continuo em acompanhamento até hoje. A evolução no meu modo de pensar foi notável, resultando em uma maior confiança em mim mesmo!"
              </p>
              <div className="text-sm text-gray-500">G.W. • Em terapia desde 2022</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Iniciei a terapia em 2021 com muita angústia, depressão e dificuldade de me perdoar e perdoar pessoas importantes na minha vida. A terapia me transformou completamente: hoje consigo perdoar acontecimentos do passado e aprendi a me olhar de uma forma totalmente diferente. Minha vida mudou significativamente."
              </p>
              <div className="text-sm text-gray-500">V.R. • Em terapia desde 2021</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "O acolhimento e a escuta atenta durante as sessões online têm sido fundamentais para meu processo de autoconhecimento. O suporte via WhatsApp entre as sessões me ajuda a manter o foco no meu desenvolvimento pessoal."
              </p>
              <div className="text-sm text-gray-500">L.C. • Em terapia desde 2023</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 