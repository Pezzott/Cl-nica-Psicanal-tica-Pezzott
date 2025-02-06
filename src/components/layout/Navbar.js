import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  /*
    Para a Home:
      - se não rolado: fundo transparente;
      - se rolado: fundo branco.
    Para o Blog:
      - se não rolado: degradê escuro;
      - se rolado: degradê claro.
  */
  background: ${({ isBlogPage, isScrolled }) => {
    if (isBlogPage) {
      return isScrolled
        ? 'linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%)'
        : 'linear-gradient(135deg, #6A9A96 0%, #8BB7AC 100%)';
    } else {
      return isScrolled ? 'white' : 'transparent';
    }
  }};

  /* Transição idêntica para Home e Blog */
  transition: background 0.6s ease-in-out, box-shadow 0.6s ease-in-out;

  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 2px 15px rgba(0,0,0,0.15)' : 'none'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;

  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  span {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: ${({ isBlogPage, isScrolled }) => {
      if (isBlogPage) {
        return isScrolled ? '#2C3E50' : '#fff';
      } else {
        return isScrolled ? '#333' : '#fff';
      }
    }};
    transition: color 0.6s ease-in-out;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const NavLinkRouter = styled(RouterLink)`
  color: ${({ isBlogPage, isScrolled }) => {
    if (isBlogPage) {
      return isScrolled ? '#2C3E50' : '#fff';
    } else {
      return isScrolled ? '#333' : '#fff';
    }
  }};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.6s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #8FBC8F;
  }
`;

const NavLinkScroll = styled(ScrollLink)`
  color: ${({ isBlogPage, isScrolled }) => {
    if (isBlogPage) {
      return isScrolled ? '#2C3E50' : '#fff';
    } else {
      return isScrolled ? '#333' : '#fff';
    }
  }};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.6s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #8FBC8F;
  }
`;

const BlogLink = styled(RouterLink)`
  color: ${({ isBlogPage, isScrolled }) => {
    if (isBlogPage) {
      return isScrolled ? '#2C3E50' : '#fff';
    } else {
      return isScrolled ? '#333' : '#fff';
    }
  }};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.6s ease-in-out;

  &:hover {
    color: #8FBC8F;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname.includes('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    setIsScrolled(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isBlogPage]);

  const renderNavLink = (to, text) => {
    if (isHomePage) {
      return (
        <NavLinkScroll
          to={to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          isScrolled={isScrolled}
          isBlogPage={isBlogPage}
        >
          {text}
        </NavLinkScroll>
      );
    } else {
      return (
        <NavLinkRouter
          to={`/#${to}`}
          isScrolled={isScrolled}
          isBlogPage={isBlogPage}
        >
          {text}
        </NavLinkRouter>
      );
    }
  };

  return (
    <Nav isScrolled={isScrolled} isBlogPage={isBlogPage}>
      <Container>
        <Logo to="/" isScrolled={isScrolled} isBlogPage={isBlogPage}>
          <img src="/img/Logo.JPG" alt="Clínica Psicanalítica Pezzott" />
          <span>Clínica Psicanalítica Pezzott</span>
        </Logo>

        <MenuLinks>
          {renderNavLink('inicio', 'Início')}
          {renderNavLink('sobre', 'Sobre')}
          {renderNavLink('como-funciona', 'Como Funciona')}
          {renderNavLink('servicos', 'Serviços')}
          <BlogLink to="/blog" isScrolled={isScrolled} isBlogPage={isBlogPage}>
            Blog
          </BlogLink>
          {renderNavLink('contato', 'Contato')}
        </MenuLinks>
      </Container>
    </Nav>
  );
};

export default Navbar;
