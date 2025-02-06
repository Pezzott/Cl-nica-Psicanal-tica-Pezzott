import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 0;
  background: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Playfair Display', serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  display: flex;
  align-items: center;
  gap: 15px;

  i {
    color: #8FBC8F;
    font-size: 1.8rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 15px;
    padding-left: 25px;
    position: relative;
    color: #666;
    line-height: 1.6;

    &::before {
      content: '•';
      color: #8FBC8F;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }
  }
`;

const HowItWorks = () => {
  return (
    <Section id="como-funciona">
      <Container>
        <Title>Como Funciona</Title>
        <Grid>
          <InfoCard>
            <CardTitle>
              <i className="fas fa-clock"></i>
              Sobre as Sessões
            </CardTitle>
            <List>
              <li>Duração de 50 minutos por sessão</li>
              <li>Frequência semanal, com horário fixo</li>
              <li>Atendimento presencial ou online via plataforma segura</li>
              <li>Primeira sessão: entrevista inicial para compreender a demanda</li>
              <li>Sigilo absoluto garantido em todas as sessões</li>
            </List>
          </InfoCard>

          <InfoCard>
            <CardTitle>
              <i className="fas fa-calendar-alt"></i>
              Política de Cancelamento
            </CardTitle>
            <List>
              <li>Aviso de cancelamento com 24h de antecedência</li>
              <li>Possibilidade de reposição dentro da mesma semana</li>
              <li>Faltas sem aviso prévio serão cobradas normalmente</li>
              <li>Férias devem ser comunicadas com antecedência</li>
            </List>
          </InfoCard>

          <InfoCard>
            <CardTitle>
              <i className="fas fa-brain"></i>
              Processo Terapêutico
            </CardTitle>
            <List>
              <li>Abordagem psicanalítica com foco no desenvolvimento emocional</li>
              <li>Ambiente seguro e acolhedor para autoconhecimento</li>
              <li>Respeito ao tempo e singularidade de cada paciente</li>
              <li>Trabalho com questões conscientes e inconscientes</li>
            </List>
          </InfoCard>

          <InfoCard>
            <CardTitle>
              <i className="fas fa-hand-holding-heart"></i>
              Nossa Abordagem
            </CardTitle>
            <List>
              <li>Baseada na teoria winnicottiana do desenvolvimento emocional</li>
              <li>Foco na integração do verdadeiro self</li>
              <li>Atenção especial ao setting terapêutico</li>
              <li>Escuta qualificada e holding terapêutico consistente</li>
            </List>
          </InfoCard>
        </Grid>
      </Container>
    </Section>
  );
};

export default HowItWorks; 