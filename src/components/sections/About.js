import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%);

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(106, 154, 150, 0.15);

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    text-align: center;
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

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #6A9A96;
  line-height: 1.8;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 25px;
  }
`;

const HighlightsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    max-width: 400px;
    margin: 0 auto 25px;
  }
`;

const HighlightItem = styled(motion.li)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #2C3E50;

  @media (max-width: 768px) {
    font-size: 1rem;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #6A9A96;
    margin-right: 10px;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 12px 30px;
  background: #6A9A96;
  color: white;
  border-radius: 30px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #2C7A7B;
    transform: translateY(-2px);
  }

  svg {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 25px;
  }
`;

const About = () => {
  return (
    <AboutSection id="sobre">
      <Container>
        <Grid>
          <ImageWrapper
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/img/foto-principal.jpg" alt="Nossa Clínica" />
          </ImageWrapper>

          <Content>
            <Title
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Sobre Nossa Clínica
            </Title>

            <Description
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nossa clínica é especializada em psicanálise, oferecendo um ambiente acolhedor e seguro para o seu processo terapêutico. 
              Buscamos proporcionar um ambiente suficientemente bom, conceito fundamental da teoria winnicottiana.
            </Description>

            <HighlightsList>
              <HighlightItem whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <span>8+ Anos de Experiência</span>
              </HighlightItem>

              <HighlightItem whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>1000+ Pacientes Atendidos</span>
              </HighlightItem>

              <HighlightItem whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                <span>Abordagem Personalizada</span>
              </HighlightItem>
            </HighlightsList>

            <Button
              href="/contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agende sua Consulta
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button>
          </Content>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 