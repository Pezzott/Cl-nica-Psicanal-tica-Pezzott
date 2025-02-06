import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPostSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 80px 0 40px;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #6A9A96;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 20px;
  transition: color 0.3s ease;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

  &:hover {
    color: #2C3E50;
  }

  i {
    margin-right: 8px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
    padding: 0 10px;
  }
`;

const Meta = styled.div`
  color: #6A9A96;
  font-size: 0.9rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 30px;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 8px 20px rgba(106, 154, 150, 0.15);

  @media (max-width: 768px) {
    height: 250px;
    border-radius: 15px;
    margin-bottom: 30px;
  }
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6A9A96;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }

  p {
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  h2 {
    font-size: 1.8rem;
    color: #2C3E50;
    margin: 40px 0 20px;
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin: 30px 0 15px;
    }
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
      padding-left: 15px;
    }

    li {
      margin-bottom: 10px;
      color: #6A9A96;

      @media (max-width: 768px) {
        margin-bottom: 8px;
      }
    }
  }
`;

const AnsiedadePost = () => {
  return (
    <BlogPostSection>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header>
            <BackLink to="/blog">
              <i className="fas fa-arrow-left"></i>
              Voltar para o Blog
            </BackLink>
            <Title>Ansiedade na Era Digital</Title>
            <Meta>10 Jan 2024 • 4 min de leitura</Meta>
          </Header>

          <FeaturedImage 
            src="/img/blog/Ansiedade-era-Digital.jpg" 
            alt="Ansiedade na Era Digital" 
          />

          <Content>
            <p>
              A era digital trouxe inúmeras facilidades e possibilidades de conexão, mas também 
              novos desafios para nossa saúde mental. A ansiedade, em particular, tem se 
              manifestado de formas cada vez mais complexas em nossa relação com a tecnologia.
            </p>

            <h2>O Impacto da Hiperconexão</h2>
            <p>
              A constante exposição às redes sociais, emails e mensagens instantâneas tem 
              criado um estado de alerta permanente em nosso sistema nervoso. Alguns dos 
              efeitos mais comuns incluem:
            </p>
            <ul>
              <li>Dificuldade de concentração</li>
              <li>Sensação de urgência constante</li>
              <li>Medo de estar perdendo algo importante (FOMO)</li>
              <li>Comparação social excessiva</li>
            </ul>

            <h2>Sinais de Alerta</h2>
            <p>
              É importante reconhecer os sinais que indicam que nossa relação com o digital 
              pode estar afetando nossa saúde mental:
            </p>
            <ul>
              <li>Checagem compulsiva do celular</li>
              <li>Ansiedade ao ficar sem internet</li>
              <li>Insônia devido ao uso noturno de dispositivos</li>
              <li>Irritabilidade ao ser interrompido durante o uso</li>
            </ul>

            <h2>Estratégias de Equilíbrio</h2>
            <p>
              É possível desenvolver uma relação mais saudável com a tecnologia através de 
              algumas práticas:
            </p>
            <ul>
              <li>Estabelecer horários específicos para checagem de redes sociais</li>
              <li>Criar zonas livres de tecnologia em casa</li>
              <li>Praticar mindfulness e desconexão consciente</li>
              <li>Investir em atividades e conexões presenciais</li>
            </ul>

            <p>
              A psicoterapia pode ser um importante aliado nesse processo, ajudando a 
              desenvolver estratégias personalizadas para lidar com a ansiedade digital e 
              encontrar um equilíbrio mais saudável entre o mundo virtual e o real.
            </p>
          </Content>
        </motion.div>
      </Container>
    </BlogPostSection>
  );
};

export default AnsiedadePost; 