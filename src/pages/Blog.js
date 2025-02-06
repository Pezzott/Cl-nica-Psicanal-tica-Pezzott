import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogSection = styled.section`
  padding: 100px 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%);
  transition: all 0.6s ease-in-out;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  transition: all 0.6s ease-in-out;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  color: #2C3E50;
  transition: all 0.6s ease-in-out;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: #6A9A96;
  transition: all 0.6s ease-in-out;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(106, 154, 150, 0.15);
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 15px 45px rgba(106, 154, 150, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);

    &::before {
      opacity: 1;
    }
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to top, rgba(106, 154, 150, 0.1), transparent);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${BlogCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const BlogContent = styled.div`
  padding: 25px;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  color: #2C3E50;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
`;

const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: #4A5568;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2C7A7B;
  font-size: 0.9rem;
`;

const ReadMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #2C7A7B;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    color: #234E52;
  }

  i {
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateX(5px);
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "O Holding na Teoria Winnicottiana",
    excerpt: "Explore o conceito fundamental de holding de Winnicott e sua importância no desenvolvimento emocional...",
    image: "/img/blog/Holding-Winnicott.jpg",
    date: "4 Fev 2025",
    readTime: "5 min",
    slug: "holding-teoria-winnicottiana"
  },
  {
    id: 2,
    title: "Ansiedade na Era Digital",
    excerpt: "Como lidar com a ansiedade em um mundo cada vez mais conectado e acelerado...",
    image: "/img/blog/Ansiedade-era-Digital.jpg",
    date: "3 Fev 2025",
    readTime: "4 min",
    slug: "ansiedade-era-digital"
  },
  {
    id: 3,
    title: "Benefícios da Análise Online",
    excerpt: "Descubra como a psicoterapia online pode ser tão efetiva quanto o atendimento presencial...",
    image: "/img/blog/Processo-Analise.jpg",
    date: "2 Fev 2025",
    readTime: "6 min",
    slug: "analise-online-beneficios"
  },
  {
    id: 4,
    title: "Depressão: Uma Visão Psicanalítica",
    excerpt: "Compreenda a depressão através da perspectiva psicanalítica e descubra caminhos para o tratamento...",
    image: "/img/blog/Capa-Holding.jpg",
    date: "1 Fev 2025",
    readTime: "7 min",
    slug: "depressao-visao-psicanalitica"
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animação dos cards (Framer Motion)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <BlogSection>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            Blog da Clínica Psicanalítica Pezzott
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          >
            Artigos e reflexões sobre psicologia, desenvolvimento emocional e bem-estar mental
          </Subtitle>
        </Header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} variants={itemVariants}>
                <BlogImage>
                  <img src={post.image} alt={post.title} />
                </BlogImage>
                <BlogContent>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <BlogMeta>
                    <span>{post.date} • {post.readTime} de leitura</span>
                    <ReadMoreButton to={`/blog/${post.slug}`}>
                      Ler mais <i className="fas fa-arrow-right" />
                    </ReadMoreButton>
                  </BlogMeta>
                </BlogContent>
              </BlogCard>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </BlogSection>
  );
};

export default Blog;
