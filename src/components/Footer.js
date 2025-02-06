import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #2C3E50;
  color: white;
  padding: 60px 0 30px;

  @media (max-width: 768px) {
    padding: 40px 0 20px;
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
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
`;

const Column = styled.div`
  h3 {
    color: #6A9A96;
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 15px;
    }
  }
`;

const About = styled(Column)`
  p {
    color: #CBD5E0;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }
`;

const Links = styled(Column)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 12px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  a {
    color: #CBD5E0;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease;

    &:hover {
      color: #6A9A96;
    }
  }
`;

const Contact = styled(Column)`
  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: #CBD5E0;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      justify-content: center;
      margin-bottom: 12px;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      color: #6A9A96;
    }
  }
`;

const Social = styled(Column)`
  .social-links {
    display: flex;
    gap: 15px;

    @media (max-width: 768px) {
      justify-content: center;
    }

    a {
      width: 36px;
      height: 36px;
      background: rgba(106, 154, 150, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background: #6A9A96;
        transform: translateY(-2px);
      }

      svg {
        width: 18px;
        height: 18px;
        color: #CBD5E0;
      }
    }
  }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(203, 213, 224, 0.1);
  padding-top: 30px;
  text-align: center;
  font-size: 0.9rem;
  color: #CBD5E0;

  @media (max-width: 768px) {
    padding-top: 20px;
    font-size: 0.85rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid>
          <About>
            <h3>Clínica Psicanalítica Pezzott</h3>
            <p>
              Oferecemos um espaço acolhedor e seguro para seu processo terapêutico,
              fundamentado nos princípios da teoria winnicottiana do desenvolvimento emocional.
            </p>
          </About>

          <Links>
            <h3>Links Rápidos</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </Links>

          <Contact>
            <h3>Contato</h3>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>São Paulo, SP</span>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>(11) 99999-9999</span>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>contato@clinicapezzott.com.br</span>
            </div>
          </Contact>

          <Social>
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </Social>
        </Grid>

        <Bottom>
          <p>&copy; {new Date().getFullYear()} Clínica Psicanalítica Pezzott. Todos os direitos reservados.</p>
        </Bottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 