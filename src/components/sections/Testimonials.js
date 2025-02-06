import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px 0;
  background: linear-gradient(to bottom, #fff, #f9f9f9);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 80px;
    color: #8FBC8F;
    font-family: 'Playfair Display', serif;
    opacity: 0.2;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AuthorInfo = styled.div`
  h4 {
    color: #333;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    color: #8FBC8F;
    font-size: 0.9rem;
  }
`;

const testimonials = [
  {
    text: "Cheguei à terapia sem esperança. Mas, à medida que fui caminhando e sendo confrontada, um novo mundo se revelou... Fui superando situações das quais fugia há anos, de diferentes formas. Percebi que não dava mais adiar: era hora de encarar de frente. Foi a melhor decisão que tomei. Hoje tenho uma nova visão de mim mesma - me vejo capaz, talentosa e, principalmente, aprendi a me amar e valorizar minha própria companhia.",
    author: "Valdinéia Raposo",
    duration: "Em terapia há 2 anos"
  },
  {
    text: "Iniciei minhas sessões em meados de 2022 e continuo sendo acompanhado pelo mesmo profissional até hoje. A evolução no meu modo de pensar foi impressionante - hoje reconheço uma maturidade emocional e uma confiança em mim mesmo que jamais imaginei alcançar. Cada etapa desse processo trouxe transformações significativas que impactaram positivamente minha autoestima e visão de vida.",
    author: "Gabriel Willman",
    duration: "Em terapia há 1 ano e meio"
  },
  {
    text: "Após dois anos e meio de terapia, conquistei transformações profundas: superei um divórcio difícil, suspendi completamente a medicação e hoje vivo com plena independência em meu próprio apartamento. A metodologia utilizada me deu ferramentas para reconstruir minha autoestima e encontrar força interior. Mesmo após encerrar o tratamento, mantenho os resultados com atividades físicas regulares e continuo indicando a terapia a todos - foi essencial para eu reescrever minha história com felicidade e autonomia.",
    author: "Drª Roberta Polo Gomes",
    duration: "Ex-paciente (2 anos e 6 meses de terapia)"
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.5
      }
    }
  };

  return (
    <Section id="depoimentos">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          O Que Dizem Nossos Pacientes
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Histórias reais de transformação e crescimento pessoal através da psicoterapia
        </Subtitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <AuthorInfo>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.duration}</p>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Testimonials; 