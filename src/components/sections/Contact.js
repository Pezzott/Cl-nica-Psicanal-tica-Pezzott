import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%);

  @media (max-width: 768px) {
    padding: 60px 0;
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

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #6A9A96;
  line-height: 1.8;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const InfoGroup = styled.div`
  text-align: left;
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  color: #2C3E50;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: #6A9A96;
  }
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  color: #6A9A96;
  line-height: 1.6;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BusinessHours = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

const DayTime = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 15px;
  background: #F8F9FA;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #F1FAF6;
  }

  span {
    color: #2C3E50;
    font-size: 1rem;

    &:first-child {
      font-weight: 600;
    }
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 15px 40px;
  background: #6A9A96;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 40px;
  gap: 10px;

  &:hover {
    background: #2C7A7B;
    transform: translateY(-2px);
  }

  span {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 12px 30px;
    font-size: 1rem;
  }
`;

const Contact = () => {
  const businessHours = [
    { day: 'Segunda', time: '8:00 - 21:00' },
    { day: 'Terça', time: '8:00 - 21:00' },
    { day: 'Quarta', time: '8:00 - 21:00' },
    { day: 'Quinta', time: '8:00 - 21:00' },
    { day: 'Sexta', time: '8:00 - 21:00' },
    { day: 'Sábado', time: '8:00 - 18:00' }
  ];

  return (
    <ContactSection id="contato">
      <Container>
        <Content>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Entre em Contato
          </Title>
          <Description
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Estamos aqui para ajudar você em sua jornada de autoconhecimento e desenvolvimento pessoal.
          </Description>

          <InfoContainer>
            <InfoGroup>
              <InfoTitle>
                <span>📍</span> Localização
              </InfoTitle>
              <InfoText>
                R. Aldemar Pereira de Barros, 21 - Centro<br />
                Jundiaí - SP, 13201-796
              </InfoText>
              <InfoTitle style={{ marginTop: '30px' }}>
                <span>📞</span> Contato
              </InfoTitle>
              <InfoText>
                WhatsApp: (11) 94464-5848<br />
                Email: clinicapsicanaliticapezzott@gmail.com
              </InfoText>
            </InfoGroup>

            <InfoGroup>
              <InfoTitle>
                <span>⏰</span> Horário de Atendimento
              </InfoTitle>
              <BusinessHours>
                {businessHours.map((schedule, index) => (
                  <DayTime key={index}>
                    <span>{schedule.day}</span>
                    <span>{schedule.time}</span>
                  </DayTime>
                ))}
              </BusinessHours>
            </InfoGroup>
          </InfoContainer>

          <ContactButton 
            href="https://wa.me/5511944645848"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💬</span> Agende sua Consulta
          </ContactButton>
        </Content>
      </Container>
    </ContactSection>
  );
};

export default Contact; 