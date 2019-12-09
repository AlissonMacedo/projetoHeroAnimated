import React from 'react';
import { View, Text } from 'react-native';

import Header from '~/components/Header';
import { Container } from './styles';

export default function Details() {
  return (
    <Container>
      <Header />
      <View>
        <Text>Details</Text>
      </View>
    </Container>
  );
}
