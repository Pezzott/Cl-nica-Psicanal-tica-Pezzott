import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const FooterContainer = styled.footer`
  background: #2C3E50;
  color: white;
  padding: 80px 0 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Column = styled.div`
  h3 {
    color: #8FBC8F;
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-family: 'Playfair Display', serif;
  }
`;

const About = styled.div`
  p {
    color: #ecf0f1;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background: #8FBC8F;
    transform: translateY(-3px);
  }
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 12px;
  }

  a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 1rem;

    &:hover {
      color: #8FBC8F;
    }
  }
`;

const ContactInfo = styled.div`
  p {
    color: #ecf0f1;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    span {
      color: #8FBC8F;
    }
  }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
  font-size: 0.9rem;
  color: #bdc3c7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid>
          <Column>
            <About>
              <h3>Clínica Psicanalítica Pezzott</h3>
              <p>
                Dedicados ao seu bem-estar emocional desde 2016, oferecemos um espaço 
                seguro e acolhedor para seu desenvolvimento pessoal através da 
                psicanálise winnicottiana.
              </p>
              <SocialLinks>
                <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </SocialIcon>
                <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </SocialIcon>
                <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </SocialIcon>
              </SocialLinks>
            </About>
          </Column>

          <Column>
            <h3>Links Rápidos</h3>
            <Links>
              <li>
                <ScrollLink to="sobre" smooth={true} duration={500} offset={-70}>
                  Sobre Nós
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="servicos" smooth={true} duration={500} offset={-70}>
                  Serviços
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="como-funciona" smooth={true} duration={500} offset={-70}>
                  Como Funciona
                </ScrollLink>
              </li>
              <li>
                <RouterLink to="/blog">Blog</RouterLink>
              </li>
            </Links>
          </Column>

          <Column>
            <h3>Serviços</h3>
            <Links>
              <li>
                <ScrollLink to="servicos" smooth={true} duration={500} offset={-70}>
                  Psicoterapia Individual
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="servicos" smooth={true} duration={500} offset={-70}>
                  Atendimento Online
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="servicos" smooth={true} duration={500} offset={-70}>
                  Supervisão Clínica
                </ScrollLink>
              </li>
              <li>
                <a href="https://wa.me/5511944645848" target="_blank" rel="noopener noreferrer">
                  Agende sua Consulta
                </a>
              </li>
            </Links>
          </Column>

          <Column>
            <h3>Contato</h3>
            <ContactInfo>
              <p>
                <span>📍</span> R. Aldemar Pereira de Barros, 21 - Centro<br />
                Jundiaí - SP, 13201-796
              </p>
              <p>
                <span>📞</span> (11) 94464-5848
              </p>
              <p>
                <span>✉️</span> clinicapsicanaliticapezzott@gmail.com
              </p>
              <p>
                <span>⏰</span> Seg-Sex: 8h às 20h<br />
                Sáb: 8h às 12h
              </p>
            </ContactInfo>
          </Column>
        </Grid>

        <Bottom>
          <p>© {new Date().getFullYear()} Clínica Psicanalítica Pezzott. Todos os direitos reservados.</p>
        </Bottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 