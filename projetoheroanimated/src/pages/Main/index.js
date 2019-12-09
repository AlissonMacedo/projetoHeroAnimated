import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

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
import Batman2 from '../../assets/batman2.jpg';

export default function Main({ navigation }) {
  const { state, setState } = useState({});

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
        <ScrollView style={{ alignSelf: 'stretch', marginTop: 5 }}>
          <ListCards>
            <CardListed>
              <ImagemCard source={Batman2} />
              <DetailsCard>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    Gundala
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                  }}>
                  <Text>Putra</Text>
                  <Text style={{ color: '#7159c1', fontWeight: 'bold' }}>
                    Read More ->
                  </Text>
                </View>
              </DetailsCard>
            </CardListed>
          </ListCards>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}
