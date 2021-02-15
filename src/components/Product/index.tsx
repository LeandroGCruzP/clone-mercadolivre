import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import SellerInfo from '../SellerInfo';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Leandro Games</p>
        <p className="description">
          Receba o produto que está esperadno ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
<Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
      voluptas. Placeat similique porro, dignissimos adipisci voluptates error
      magni numquam quae nihil iusto repellat nulla assumenda corporis saepe
      unde architecto aperiam.
      <br />
      <br />
      Itens inclusos : <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
      corrupti ad, ab sit itaque accusantium vitae praesentium in architecto nam
      dolorum et explicabo autem ut nihil quisquam incidunt omnis quod. Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Veniam, quos nam in
      explicabo eaque expedita, necessitatibus quod tempora repellat fuga
      provident atque, molestias officia voluptas nulla nihil cupiditate
      repellendus consectetur?
    </p>
  </Description>
)



export default Product;
