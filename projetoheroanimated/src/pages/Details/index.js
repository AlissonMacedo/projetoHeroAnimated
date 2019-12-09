import React from 'react';
import { View, Text } from 'react-native';

import Header from '~/components/Header';
import {
  Container,
  Content,
  CardMain,
  Image,
  Heroes,
  HeroName,
  HeroDescription,
} from './styles';

import Batman from '../../assets/batman.png';

export default function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <CardMain>
          <Image source={Batman} />
        </CardMain>

        <Heroes>
          <HeroName>BATMAN</HeroName>
          <HeroDescription>The Tomorrow Knight</HeroDescription>
        </Heroes>
      </Content>
    </Container>
  );
}
