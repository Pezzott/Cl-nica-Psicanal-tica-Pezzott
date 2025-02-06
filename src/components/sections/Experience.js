import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, rgba(139, 183, 172, 0.1) 0%, rgba(106, 154, 150, 0.05) 100%);

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #6A9A96;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(106, 154, 150, 0.15);

  @media (max-width: 768px) {
    padding: 20px;
  }

  h3 {
    font-size: 2.5rem;
    color: #2C3E50;
    margin-bottom: 10px;
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #6A9A96;
    font-size: 1rem;
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(106, 154, 150, 0.15);

  @media (max-width: 768px) {
    padding: 20px;
  }

  .icon {
    width: 50px;
    height: 50px;
    background: rgba(106, 154, 150, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      margin-bottom: 15px;
    }

    svg {
      width: 24px;
      height: 24px;
      color: #6A9A96;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }
  }

  h4 {
    font-size: 1.3rem;
    color: #2C3E50;
    margin-bottom: 15px;
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  }

  p {
    color: #6A9A96;
    font-size: 1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`;

const Experience = () => {
  return (
    <ExperienceSection>
      <Container>
        <Header>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Title>Experiência Comprovada em Psicanálise</Title>
            <Subtitle>Há mais de uma década dedicado à prática psicanalítica, oferecendo um atendimento personalizado e humanizado.</Subtitle>
          </motion.div>
        </Header>

        <StatsGrid>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <StatCard>
              <h3>700+</h3>
              <p>Pacientes Atendidos</p>
            </StatCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatCard>
              <h3>94%</h3>
              <p>Índice de Satisfação</p>
            </StatCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StatCard>
              <h3>10+</h3>
              <p>Anos de Experiência</p>
            </StatCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <StatCard>
              <h3>5.000+</h3>
              <p>Horas de Atendimento</p>
            </StatCard>
          </motion.div>
        </StatsGrid>

        {/* Diferenciais */}
        <FeaturesGrid>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FeatureCard>
              <div className="icon">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4>Atendimento Personalizado</h4>
              <p>Cada paciente recebe atenção exclusiva e um plano terapêutico adaptado às suas necessidades específicas.</p>
            </FeatureCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeatureCard>
              <div className="icon">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4>Flexibilidade de Horários</h4>
              <p>Disponibilidade de horários flexíveis para melhor atender às necessidades da sua rotina.</p>
            </FeatureCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FeatureCard>
              <div className="icon">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4>Ambiente Acolhedor</h4>
              <p>Espaço tranquilo e confortável, projetado para proporcionar bem-estar durante as sessões.</p>
            </FeatureCard>
          </motion.div>
        </FeaturesGrid>

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
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 