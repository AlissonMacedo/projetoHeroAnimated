import React from 'react';
import { View, Button } from 'react-native';
import { Container } from './styles';

function Main({ navigation }) {
  return (
    <>
      <Container>
        <View>
          <Button
            onPress={() => navigation.navigate('Details')}
            title="Go to Details"
          />
        </View>
      </Container>
    </>
  );
}

Main.navigationOptions = {
  title: 'Teste',
};

export default Main;
