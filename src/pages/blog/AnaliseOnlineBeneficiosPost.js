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

const AnaliseOnlinePost = () => {
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
            <Title>Benefícios da Análise Online</Title>
            <Meta>5 Jan 2024 • 6 min de leitura</Meta>
          </Header>

          <FeaturedImage 
            src="/img/blog/Processo-Analise.jpg" 
            alt="Benefícios da Análise Online" 
          />

          <Content>
            <p>
              A análise online tem se consolidado como uma modalidade efetiva de atendimento 
              psicanalítico, oferecendo benefícios únicos que complementam e, em alguns casos, 
              até superam o formato presencial tradicional.
            </p>

            <h2>Vantagens da Análise Online</h2>
            <p>
              O atendimento online apresenta diversas vantagens que têm contribuído para sua 
              crescente aceitação:
            </p>
            <ul>
              <li>Flexibilidade de horários e localização</li>
              <li>Eliminação do tempo de deslocamento</li>
              <li>Maior acessibilidade para pessoas com dificuldades de locomoção</li>
              <li>Continuidade do tratamento durante viagens</li>
            </ul>

            <h2>Efetividade Comprovada</h2>
            <p>
              Estudos recentes têm demonstrado que a análise online pode ser tão efetiva quanto 
              a presencial em diversos aspectos:
            </p>
            <ul>
              <li>Estabelecimento de vínculo terapêutico</li>
              <li>Profundidade do trabalho analítico</li>
              <li>Resultados terapêuticos alcançados</li>
              <li>Satisfação dos pacientes com o processo</li>
            </ul>

            <h2>Adaptações e Cuidados</h2>
            <p>
              Para garantir o sucesso do atendimento online, alguns aspectos precisam ser 
              considerados:
            </p>
            <ul>
              <li>Ambiente adequado e privativo para as sessões</li>
              <li>Conexão de internet estável</li>
              <li>Equipamentos de qualidade (câmera e microfone)</li>
              <li>Plataforma segura para videoconferência</li>
            </ul>

            <p>
              A análise online não é apenas uma alternativa ao formato presencial, mas uma 
              modalidade com características próprias que pode ser a melhor opção para muitas 
              pessoas, especialmente considerando o ritmo de vida contemporâneo e as novas 
              formas de relacionamento mediadas pela tecnologia.
            </p>
          </Content>
        </motion.div>
      </Container>
    </BlogPostSection>
  );
};

export default AnaliseOnlinePost; 