import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.neutral[50]} 0%, ${props => props.theme.colors.neutral[100]} 100%);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary[800]};
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.neutral[600]};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${props => props.theme.colors.primary[500]};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: ${props => props.theme.colors.neutral[100]};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  
  img {
    width: 35px;
    height: 35px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary[700]};
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.neutral[600]};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1rem;
  color: ${props => props.theme.colors.neutral[700]};

  &:before {
    content: '✓';
    color: ${props => props.theme.colors.secondary[500]};
    margin-right: 10px;
    font-weight: bold;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 25px;
  background: transparent;
  color: ${props => props.theme.colors.primary[600]};
  border: 2px solid ${props => props.theme.colors.primary[600]};
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary[600]};
    color: white;
  }
`;

const Services = () => {
  const services = [
    {
      icon: "🧠",
      title: "Psicoterapia Individual",
      description: "Atendimento personalizado baseado na teoria winnicottiana, focado no seu desenvolvimento emocional.",
      features: [
        "Sessões de 50 minutos",
        "Abordagem psicanalítica",
        "Ambiente acolhedor e seguro",
        "Horários flexíveis"
      ]
    },
    {
      icon: "💻",
      title: "Atendimento Online",
      description: "Sessões remotas com a mesma qualidade do atendimento presencial, no conforto da sua casa.",
      features: [
        "Plataforma segura",
        "Flexibilidade de horários",
        "Suporte técnico",
        "Mesma efetividade do presencial"
      ]
    },
    {
      icon: "👥",
      title: "Supervisão Clínica",
      description: "Supervisão especializada para profissionais e estudantes de psicologia.",
      features: [
        "Discussão de casos",
        "Orientação teórica",
        "Desenvolvimento profissional",
        "Grupos reduzidos"
      ]
    }
  ];

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
    <ServicesSection id="servicos">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nossos Serviços
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Oferecemos uma variedade de serviços terapêuticos adaptados às suas necessidades,
            com foco no seu bem-estar e desenvolvimento pessoal.
          </Subtitle>
        </Header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={itemVariants}
              >
                <ServiceIcon>
                  <span style={{ fontSize: '2rem' }}>{service.icon}</span>
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <Feature key={idx}>{feature}</Feature>
                  ))}
                </ServiceFeatures>
                <CTAButton href="https://wa.me/5511999999999">
                  Agende uma Consulta
                </CTAButton>
              </ServiceCard>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </ServicesSection>
  );
};

export default Services;
