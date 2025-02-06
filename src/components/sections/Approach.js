import React from 'react';
import { motion } from 'framer-motion';

const Approach = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 font-serif">
            Abordagem Psicanalítica
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A psicanálise é um método terapêutico que busca compreender os processos psíquicos profundos, 
            proporcionando autoconhecimento e transformação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-bold text-green-800 mb-4">Para Quem é Indicada?</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Pessoas que buscam autoconhecimento e desenvolvimento pessoal</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Indivíduos lidando com ansiedade, depressão ou conflitos emocionais</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Quem deseja compreender padrões de comportamento e relacionamentos</p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-green-800 mb-4">Benefícios</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Maior compreensão de si mesmo e de suas relações</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Desenvolvimento de recursos internos para lidar com desafios</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Melhoria na qualidade dos relacionamentos e da vida em geral</p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-green-50 p-8 rounded-xl"
          >
            <h4 className="text-xl font-bold text-green-800 mb-6">Como Funciona o Processo?</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-700 font-bold">1</span>
                </div>
                <div>
                  <h5 className="font-bold text-green-800 mb-2">Primeira Sessão</h5>
                  <p className="text-gray-600">
                    Momento de conhecer você, entender suas expectativas e estabelecer uma relação de confiança.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-700 font-bold">2</span>
                </div>
                <div>
                  <h5 className="font-bold text-green-800 mb-2">Processo Terapêutico</h5>
                  <p className="text-gray-600">
                    Sessões semanais onde você poderá falar livremente sobre seus pensamentos, sentimentos e experiências.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-700 font-bold">3</span>
                </div>
                <div>
                  <h5 className="font-bold text-green-800 mb-2">Desenvolvimento</h5>
                  <p className="text-gray-600">
                    Ao longo do processo, você desenvolverá maior compreensão de si mesmo e ferramentas para lidar com seus desafios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-700 font-bold">4</span>
                </div>
                <div>
                  <h5 className="font-bold text-green-800 mb-2">Acompanhamento Contínuo</h5>
                  <p className="text-gray-600">
                    Suporte adicional via WhatsApp para momentos específicos entre as sessões, permitindo aprofundar reflexões e receber orientação quando necessário, sem custo adicional.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg">
              <h5 className="font-bold text-green-800 mb-4">Importante Saber</h5>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Sessões com duração de 50 minutos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Frequência semanal recomendada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Sigilo absoluto garantido</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach; 