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
  background: ${({ isBlogPage, isScrolled }) => {
    if (isBlogPage) {
      return isScrolled
        ? 'linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%)'
        : 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)';
    } else {
      return isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent';
    }
  }};
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 2px 15px rgba(0,0,0,0.1)' : 'none'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
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

    @media (max-width: 768px) {
      height: 40px;
      width: 40px;
    }
  }

  span {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: ${({ isBlogPage, isScrolled }) => {
      if (isBlogPage) {
        return isScrolled ? '#2C3E50' : '#fff';
      } else {
        return isScrolled ? '#2C3E50' : '#fff';
      }
    }};
    transition: color 0.3s ease-in-out;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      display: none;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ isBlogPage, isScrolled }) => {
    if (isBlogPage) {
      return isScrolled ? '#2C3E50' : '#fff';
    } else {
      return isScrolled ? '#333' : '#fff';
    }
  }};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: #8FBC8F;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${({ isBlogPage, isScrolled }) => {
      if (isBlogPage) {
        return isScrolled
          ? 'linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%)'
          : 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)';
      } else {
        return isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#2C3E50';
      }
    }};
    padding: 20px;
    gap: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLinkRouter = styled(RouterLink)`
  color: ${({ isBlogPage, isScrolled }) => {
    if (isBlogPage) {
      return isScrolled ? '#2C3E50' : '#fff';
    } else {
      return isScrolled ? '#2C3E50' : '#fff';
    }
  }};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    padding: 10px;
  }

  &:hover {
    color: ${props => props.theme.colors.primary[400]};
  }
`;

const NavLinkScroll = styled(ScrollLink)`
  color: ${({ isBlogPage, isScrolled }) => {
    if (isBlogPage) {
      return isScrolled ? '#2C3E50' : '#fff';
    } else {
      return isScrolled ? '#2C3E50' : '#fff';
    }
  }};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    padding: 10px;
  }

  &:hover {
    color: ${props => props.theme.colors.primary[400]};
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Nav isScrolled={isScrolled} isBlogPage={isBlogPage}>
      <Container>
        <Logo to="/" isScrolled={isScrolled} isBlogPage={isBlogPage} onClick={closeMenu}>
          <img src="/img/Logo.JPG" alt="Clínica Psicanalítica Pezzott" />
          <span>Clínica Psicanalítica Pezzott</span>
        </Logo>

        <MenuButton
          onClick={toggleMenu}
          isScrolled={isScrolled}
          isBlogPage={isBlogPage}
          aria-label="Menu"
        >
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`} />
        </MenuButton>

        <MenuLinks isOpen={isMenuOpen} isScrolled={isScrolled} isBlogPage={isBlogPage}>
          {isHomePage ? (
            <>
              <NavLinkScroll
                to="inicio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                isScrolled={isScrolled}
                isBlogPage={isBlogPage}
                onClick={closeMenu}
              >
                Início
              </NavLinkScroll>
              <NavLinkScroll
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                isScrolled={isScrolled}
                isBlogPage={isBlogPage}
                onClick={closeMenu}
              >
                Sobre
              </NavLinkScroll>
              <NavLinkScroll
                to="servicos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                isScrolled={isScrolled}
                isBlogPage={isBlogPage}
                onClick={closeMenu}
              >
                Serviços
              </NavLinkScroll>
              <NavLinkScroll
                to="contato"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                isScrolled={isScrolled}
                isBlogPage={isBlogPage}
                onClick={closeMenu}
              >
                Contato
              </NavLinkScroll>
            </>
          ) : (
            <>
              <NavLinkRouter to="/" isScrolled={isScrolled} isBlogPage={isBlogPage}>
                Início
              </NavLinkRouter>
              <NavLinkRouter to="/#sobre" isScrolled={isScrolled} isBlogPage={isBlogPage}>
                Sobre
              </NavLinkRouter>
              <NavLinkRouter to="/#servicos" isScrolled={isScrolled} isBlogPage={isBlogPage}>
                Serviços
              </NavLinkRouter>
              <NavLinkRouter to="/#contato" isScrolled={isScrolled} isBlogPage={isBlogPage}>
                Contato
              </NavLinkRouter>
            </>
          )}
          <NavLinkRouter to="/blog" isScrolled={isScrolled} isBlogPage={isBlogPage}>
            Blog
          </NavLinkRouter>
        </MenuLinks>
      </Container>
    </Nav>
  );
};

export default Navbar;
