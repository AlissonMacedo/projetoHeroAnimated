import React from 'react';
import { Image, SafeAreaView } from 'react-native';

import Header from '~/components/Header';
import {
  Container,
  CardMain,
  ListCards,
  ButtonExplorer,
  ButtonExplorerText,
  CardListed,
  ImagemCard,
  DetailsCard,
} from './styles';

import Batman from '../../assets/batman.png';

export default function Main({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Container>
        <CardMain>
          <Image source={Batman} style={{ height: 200, width: 200 }} />
          <ButtonExplorer onPress={() => navigation.navigate('Details')}>
            <ButtonExplorerText>Explorer</ButtonExplorerText>
          </ButtonExplorer>
        </CardMain>
        <ListCards>
          <CardListed>
            <ImagemCard source={Batman} />
            <DetailsCard />
          </CardListed>
          <CardListed>
            <ImagemCard source={Batman} />
            <DetailsCard />
          </CardListed>
        </ListCards>
      </Container>
    </SafeAreaView>
  );
}
