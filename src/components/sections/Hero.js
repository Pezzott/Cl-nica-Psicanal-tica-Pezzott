import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1527167598984-5c4e98c2f230?q=80&w=2070') center/cover;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Content = styled.div`
  color: white;
  max-width: 600px;
  margin-right: 20px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.primary[50]};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 40px;
  line-height: 1.8;
  opacity: 0.9;
  color: ${props => props.theme.colors.neutral[100]};
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(ScrollLink)`
  display: inline-block;
  padding: 15px 40px;
  background: ${props => props.theme.colors.primary[600]};
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  border: 2px solid ${props => props.theme.colors.primary[600]};

  &:hover {
    background: transparent;
    border-color: white;
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: 15px 40px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: white;
    color: ${props => props.theme.colors.primary[800]};
  }
`;

const FloatingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin-left: 40px;

  @media (max-width: 1024px) {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.colors.primary[800]};
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
`;

const CardText = styled.p`
  color: ${props => props.theme.colors.neutral[600]};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const StatItem = styled.div`
  h4 {
    color: ${props => props.theme.colors.accent[500]};
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 5px;
  }
  
  p {
    color: ${props => props.theme.colors.neutral[600]};
    font-size: 0.9rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="inicio">
      <Container>
        <Content>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforme Sua Vida Através da Psicoterapia
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Na Clínica Psicanalítica Pezzott, você encontra um espaço seguro e acolhedor para 
            desenvolvimento pessoal, com abordagem winnicottiana especializada que valoriza sua 
            singularidade. Utilizando os conceitos de Donald Winnicott, ofereço um acompanhamento 
            terapêutico personalizado que facilita o processo de autoconhecimento e promove cura 
            emocional, ajudando você a reconectar-se com seu verdadeiro eu.
          </Subtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PrimaryButton
              to="contato"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Agende sua Consulta
            </PrimaryButton>
            <SecondaryButton 
              href="https://wa.me/5511944645848"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </SecondaryButton>
          </ButtonGroup>
        </Content>

        <FloatingCard
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CardTitle>Por que nos escolher?</CardTitle>
          <CardText>
            Mais de 1000 vidas já foram transformadas através da abordagem winnicottiana, 
            que prioriza o cuidado individual e o desenvolvimento emocional em um ambiente 
            terapêutico seguro.
          </CardText>
          <Stats>
            <StatItem>
              <h4>8+</h4>
              <p>Anos de<br />Experiência</p>
            </StatItem>
            <StatItem>
              <h4>95%</h4>
              <p>Satisfação dos<br />Pacientes</p>
            </StatItem>
          </Stats>
        </FloatingCard>
      </Container>
    </HeroSection>
  );
};

export default Hero;