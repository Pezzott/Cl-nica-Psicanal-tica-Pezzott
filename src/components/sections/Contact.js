import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
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
  color: #333;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactInfo = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  margin: 0 auto;
`;

const InfoGroup = styled.div`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: #8FBC8F;
  }
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 15px 30px;
  background: #8FBC8F;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 20px;
  gap: 10px;

  &:hover {
    background: #7CAF7C;
    transform: translateY(-2px);
  }

  span {
    font-size: 1.2rem;
  }
`;

const BusinessHours = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const DayTime = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 8px;

  span {
    color: #666;
    font-size: 0.9rem;

    &:first-child {
      font-weight: 600;
    }
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
        <Header>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Entre em Contato
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Estamos aqui para ajudar você em sua jornada de autoconhecimento e desenvolvimento pessoal.
          </Subtitle>
        </Header>

        <ContactInfo
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <InfoGroup>
            <InfoTitle>
              <span>📍</span> Localização
            </InfoTitle>
            <InfoText>
              R. Aldemar Pereira de Barros, 21 - Centro<br />
              Jundiaí - SP, 13201-796
            </InfoText>
          </InfoGroup>

          <InfoGroup>
            <InfoTitle>
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

          <ContactButton 
            href="https://wa.me/5511944645848"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💬</span> Agende sua Consulta
          </ContactButton>
        </ContactInfo>
      </Container>
    </ContactSection>
  );
};

export default Contact; 