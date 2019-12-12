import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

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
  const [state, setState] = useState({
    hero: [
      {
        id: 1,
        title: 'Batman',
        subtitle: 'Batman é foda',
        link: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
      },
      {
        id: 2,
        title: 'SuperMan',
        subtitle: 'SuperMan é foda',
        link:
          'https://www.ironstudios.com.br/imagens/produtos/13913/13913/Ampliada/superman-justice-league-sh-figuarts.jpg',
      },
      {
        id: 3,
        title: 'Mulher Maravilha',
        subtitle: 'Maravilha é foda',
        link:
          'https://swimchannel.net/wp-content/uploads/2019/03/painelevamulhermaravilhagigante_1.jpg',
      },
      {
        id: 4,
        title: 'Flash',
        subtitle: 'Flash é foda',
        link:
          'https://http2.mlstatic.com/painel-em-eva-flash-grande-liga-da-justica-D_NQ_NP_716121-MLB20708152369_052016-F.jpg',
      },
      {
        id: 5,
        title: 'Mulher Gaviao',
        subtitle: 'Gaviao é foda',
        link:
          'https://i.pinimg.com/originals/04/57/65/04576596d97c10298f92aa005fa93abd.jpg',
      },
    ],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Container>
        {/* <View style={{ backgroundColor: '#000', alignSelf: 'stretch' }}>
          <ActivityIndicator size="large" color="#FFF" />
        </View> */}
        <ScrollView style={{ alignSelf: 'stretch' }}>
          <CardMain>
            <Image source={Batman} style={{ height: 200, width: 200 }} />
            <ButtonExplorer onPress={() => navigation.navigate('Details')}>
              <ButtonExplorerText>Explorer</ButtonExplorerText>
            </ButtonExplorer>
          </CardMain>

          <ListCards>
            {state.hero.map(hero => (
              <CardListed key={hero.id}>
                <ImagemCard source={{ uri: hero.link }} resizeMode="contain" />
                <DetailsCard>
                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                      {hero.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                    }}>
                    <Text>{hero.subtitle}</Text>
                    <Text style={{ color: '#7159c1', fontWeight: 'bold' }}>
                      Read More ->
                    </Text>
                  </View>
                </DetailsCard>
              </CardListed>
            ))}
          </ListCards>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}
