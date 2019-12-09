import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Content,
  CardMain,
  Image,
  Heroes,
  HeroName,
  HeroDescription,
  HeroInfo,
  Title,
  Text,
} from './styles';

import Batman from '../../assets/flash.jpg';

export default function Details() {
  return (
    <Container>
      <Content>
        <CardMain>
          <Image source={Batman} />
        </CardMain>

        <Heroes>
          <HeroName>The Flash</HeroName>
          <HeroDescription>The Tomorrow Knight</HeroDescription>
        </Heroes>
      </Content>

      <HeroInfo>
        <Title>Biography</Title>

        <Text>
          Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne
          Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro
          Corps
        </Text>

        <Text>
          Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne
          Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro
          Corps
        </Text>

        <Text>
          Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne
          Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro
          Corps
        </Text>
      </HeroInfo>
    </Container>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  title: 'Back',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});
