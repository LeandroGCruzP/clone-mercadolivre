import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThernometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informaçôes sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>Sâo Paulo, Sâo Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThernometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThernometer>

        <ReputationRow>
          <div>
            <strong>1030</strong>
            <span>vendas nos últimos 2 meses</span>
          </div>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>vendas nos últimos 2 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
