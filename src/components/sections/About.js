import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 0;
  background: #fff;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 30px;
    font-family: 'Playfair Display', serif;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    right: -20px;
    width: 100%;
    height: 100%;
    border: 3px solid #8FBC8F;
    border-radius: 20px;
    z-index: -1;
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
`;

const StatCard = styled(motion.div)`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  
  h4 {
    color: #8FBC8F;
    font-size: 1.8rem;
    margin-bottom: 10px;
    font-weight: 700;
  }
  
  p {
    color: #666;
    margin: 0;
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="sobre">
      <Container>
        <Grid>
          <ImageContainer
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/img/foto-principal.jpg" alt="Nossa Clínica" />
          </ImageContainer>
          <Content
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Sobre Nossa Clínica
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Fundada em 2016, a Clínica Psicanalítica Pezzott nasceu do compromisso em oferecer um espaço 
                terapêutico genuinamente acolhedor, fundamentado nos princípios da teoria winnicottiana do 
                desenvolvimento emocional.
              </p>
              <p>
                Nossa equipe é formada por psicanalistas especializados, com sólida formação teórica e 
                extensa experiência clínica. Compartilhamos a visão de que o processo analítico deve 
                proporcionar um ambiente suficientemente bom, conceito fundamental da teoria winnicottiana.
              </p>
            </motion.div>

            <StatsGrid
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <StatCard whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <h4>8+</h4>
                <p>Anos de atuação</p>
              </StatCard>
              <StatCard whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <h4>1000+</h4>
                <p>Pacientes atendidos</p>
              </StatCard>
              <StatCard whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <h4>100%</h4>
                <p>Equipe especializada</p>
              </StatCard>
              <StatCard whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <h4>95%</h4>
                <p>Satisfação dos pacientes</p>
              </StatCard>
            </StatsGrid>
          </Content>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 