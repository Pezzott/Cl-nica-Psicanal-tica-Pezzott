import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPostSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #6A9A96;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 20px;
  transition: color 0.3s ease;

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
`;

const Meta = styled.div`
  color: #6A9A96;
  font-size: 0.9rem;
  margin-bottom: 40px;
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 8px 20px rgba(106, 154, 150, 0.15);
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6A9A96;

  p {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.8rem;
    color: #2C3E50;
    margin: 40px 0 20px;
    font-family: 'Playfair Display', serif;
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;

    li {
      margin-bottom: 10px;
      color: #6A9A96;
    }
  }
`;

const HoldingPost = () => {
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
            <Title>O Holding na Teoria Winnicottiana</Title>
            <Meta>15 Jan 2024 • 5 min de leitura</Meta>
          </Header>

          <FeaturedImage 
            src="/img/blog/Holding-Winnicott.jpg" 
            alt="O Holding na Teoria Winnicottiana" 
          />

          <Content>
            <p>
              O conceito de holding, desenvolvido por Donald Winnicott, é um dos pilares fundamentais 
              da teoria psicanalítica contemporânea. Este termo, que literalmente significa "segurar" 
              ou "sustentar", vai muito além de seu significado físico, abrangendo todo o suporte 
              emocional necessário para o desenvolvimento psíquico saudável.
            </p>

            <h2>O que é o Holding?</h2>
            <p>
              O holding representa a capacidade da mãe (ou cuidador principal) de proporcionar um 
              ambiente suficientemente bom para o desenvolvimento emocional do bebê. Isso inclui não 
              apenas o suporte físico, mas também:
            </p>
            <ul>
              <li>Proteção contra experiências ansiogênicas</li>
              <li>Consideração da sensibilidade cutânea do bebê</li>
              <li>Consideração da rotina completa de cuidados dia e noite</li>
              <li>Acompanhamento das mudanças do desenvolvimento</li>
            </ul>

            <h2>Importância na Prática Clínica</h2>
            <p>
              Na clínica psicanalítica, o conceito de holding se traduz na capacidade do analista 
              de criar um ambiente seguro e confiável, onde o paciente pode explorar suas questões 
              emocionais mais profundas. O setting terapêutico funciona como um espaço de holding, 
              permitindo a regressão necessária para o trabalho analítico.
            </p>

            <h2>Aplicações Contemporâneas</h2>
            <p>
              Atualmente, o conceito de holding tem sido aplicado em diversos contextos além da 
              clínica individual, incluindo:
            </p>
            <ul>
              <li>Trabalho com grupos terapêuticos</li>
              <li>Intervenções em instituições de saúde mental</li>
              <li>Orientação parental</li>
              <li>Desenvolvimento de políticas de cuidado na primeira infância</li>
            </ul>

            <p>
              Compreender o holding é fundamental para qualquer profissional que trabalhe com 
              saúde mental, pois ele representa a base sobre a qual se constrói a capacidade de 
              estar só, a confiança no ambiente e o desenvolvimento emocional saudável.
            </p>
          </Content>
        </motion.div>
      </Container>
    </BlogPostSection>
  );
};

export default HoldingPost; 