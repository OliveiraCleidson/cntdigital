import React from 'react';
import { Image, Text } from 'react-native';
import {
  Card,
  CardIcon,
  Cards,
  CardsContainer,
  CardText,
  Container,
} from './styles';

import Logo from '../../assets/images/Logo.png';

const Trechos: React.FC = () => {
  return (
    <Container>
      <Image source={Logo} />
      <Cards>
        <CardsContainer>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
          <Card>
            <CardIcon name="road" size={90} />
            <CardText>Trecho 1</CardText>
          </Card>
        </CardsContainer>
      </Cards>
    </Container>
  );
};

export default Trechos;
