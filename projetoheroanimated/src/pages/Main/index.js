import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { Container, CardMain, ListCards, HeaderSearch } from './styles';

import Batman from '../../assets/batman.png';

export default function Main() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderSearch>
          <Text>Alisson</Text>
          <Text>Alisson</Text>
          <Text>Alisson</Text>
        </HeaderSearch>
        <Container>
          <CardMain>
            <Image source={Batman} style={{ height: 200, width: 200 }} />
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#7159c1',
                borderRadius: 15,
                height: 30,
                width: 120,
                marginTop: 40,
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FFF' }}>
                EXPLORE
              </Text>
            </TouchableOpacity>
          </CardMain>
          <ListCards />
        </Container>
      </SafeAreaView>
    </>
  );
}
