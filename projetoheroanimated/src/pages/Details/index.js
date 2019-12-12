import React from 'react';
import {TouchableOpacity} from 'react-native';

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

export default function Details({navigation}) {
  const hero = navigation.getParam('hero');

  return (
    <Container>
      <Content>
        <CardMain>
          <Image resizeMode="cover" source={{uri: hero.image.url}} />
        </CardMain>

        <Heroes>
          <HeroName>{hero.name}</HeroName>
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
      </HeroInfo>

      <AbilitiesContent>
        <Title>Abilities</Title>
        <Abilities>
          <Stats>
            <NameStats>Intelligence</NameStats>
            <RoundStats>
              <ValueStats>{hero.powerstats.intelligence}</ValueStats>
            </RoundStats>
          </Stats>

          <Stats>
            <NameStats>Speed</NameStats>
            <RoundStats>
              <ValueStats>{hero.powerstats.speed}</ValueStats>
            </RoundStats>
          </Stats>

          <Stats>
            <NameStats>Power</NameStats>
            <RoundStats>
              <ValueStats>{hero.powerstats.power}</ValueStats>
            </RoundStats>
          </Stats>
        </Abilities>
      </AbilitiesContent>
    </Container>
  );
}

Details.navigationOptions = ({navigation}) => ({
  title: 'Back',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});
