import React from 'react';
import { Image, SafeAreaView } from 'react-native';

import Header from '~/components/Header';
import {
  Container,
  CardMain,
  ListCards,
  ButtonExplorer,
  ButtonExplorerText,
} from './styles';

import Batman from '../../assets/batman.png';

export default function Main() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Container>
        <CardMain>
          <Image source={Batman} style={{ height: 200, width: 200 }} />
          <ButtonExplorer>
            <ButtonExplorerText>Explorer</ButtonExplorerText>
          </ButtonExplorer>
        </CardMain>
        <ListCards />
      </Container>
    </SafeAreaView>
  );
}
