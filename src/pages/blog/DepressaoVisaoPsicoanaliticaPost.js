import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPostSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
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
  color: #8FBC8F;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #7CAF7C;
  }

  i {
    margin-right: 8px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
`;

const Meta = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 40px;
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 40px;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;

  p {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin: 40px 0 20px;
    font-family: 'Playfair Display', serif;
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;

    li {
      margin-bottom: 10px;
    }
  }
`;

const DepressaoPost = () => {
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
            <Title>Entendendo a Depressão: Uma Perspectiva Psicanalítica</Title>
            <Meta>10 Jan 2024 • 8 min de leitura</Meta>
          </Header>

          <FeaturedImage 
            src="/img/blog/depressao.jpg" 
            alt="Depressão" 
          />

          <Content>
            <p>
              A depressão é uma condição complexa que afeta milhões de pessoas em todo o mundo. 
              Na perspectiva psicanalítica, ela vai além de um simples desequilíbrio químico, 
              envolvendo aspectos profundos da psique humana.
            </p>

            <h2>O Olhar Psicanalítico sobre a Depressão</h2>
            <p>
              A psicanálise compreende a depressão como um processo que envolve:
            </p>
            <ul>
              <li>Perda de objeto e luto não elaborado</li>
              <li>Conflitos internos não resolvidos</li>
              <li>Questões relacionadas à autoestima</li>
              <li>Padrões de relacionamento disfuncionais</li>
            </ul>

            <h2>Sinais e Sintomas</h2>
            <p>
              É importante reconhecer os sinais da depressão, que podem se manifestar de diferentes formas:
            </p>
            <ul>
              <li>Tristeza persistente e perda de interesse</li>
              <li>Alterações no sono e apetite</li>
              <li>Dificuldade de concentração</li>
              <li>Pensamentos negativos recorrentes</li>
              <li>Isolamento social</li>
            </ul>

            <h2>O Processo Terapêutico</h2>
            <p>
              O tratamento psicanalítico da depressão envolve:
            </p>
            <ul>
              <li>Compreensão profunda das origens do sofrimento</li>
              <li>Elaboração de conflitos internos</li>
              <li>Fortalecimento da identidade</li>
              <li>Desenvolvimento de recursos internos</li>
            </ul>

            <h2>Importância do Acolhimento</h2>
            <p>
              O ambiente terapêutico seguro e acolhedor é fundamental para o processo de cura. 
              É neste espaço que o paciente pode:
            </p>
            <ul>
              <li>Expressar seus sentimentos sem julgamentos</li>
              <li>Reconhecer e elaborar suas dores</li>
              <li>Desenvolver novas perspectivas</li>
              <li>Reconstruir sua autoestima</li>
            </ul>

            <p>
              A depressão é uma condição tratável, e a busca por ajuda profissional é um passo 
              fundamental para a recuperação. A psicanálise oferece um caminho de autoconhecimento 
              e transformação, permitindo não apenas a superação dos sintomas, mas também um 
              crescimento pessoal significativo.
            </p>
          </Content>
        </motion.div>
      </Container>
    </BlogPostSection>
  );
};

export default DepressaoPost; 