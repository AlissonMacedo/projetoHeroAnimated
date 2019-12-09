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
  AbilitiesContent,
  Abilities,
  Stats,
  NameStats,
  RoundStats,
  ValueStats,
} from './styles';

import Flash from '../../assets/flash.jpg';

export default function Details() {
  return (
    <Container>
      <Content>
        <CardMain>
          <Image resizeMode="cover" source={Flash} />
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

      <AbilitiesContent>
        <Title>Abilities</Title>
        <Abilities>
          <Stats>
            <NameStats>Intelligence</NameStats>
            <RoundStats>
              <ValueStats>44</ValueStats>
            </RoundStats>
          </Stats>

          <Stats>
            <NameStats>Speed</NameStats>
            <RoundStats>
              <ValueStats>100</ValueStats>
            </RoundStats>
          </Stats>

          <Stats>
            <NameStats>Power</NameStats>
            <RoundStats>
              <ValueStats>85</ValueStats>
            </RoundStats>
          </Stats>
        </Abilities>
      </AbilitiesContent>
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
