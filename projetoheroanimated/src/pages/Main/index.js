/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import api from '../../services/api';

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

export default function Main({navigation}) {
  const [state, setState] = useState({
    hero: [
      {
        id: 1,
        title: 'Batman',
        subtitle: 'Batman é foda',
        link:
          'https://www.fantasiascarol.com.br/fotos/extragrande/764fe1/fantasia-batman-adulto-de-luxo-com-musculo-vs-superman.jpg',
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

  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadHeroes() {
      try {
        setLoading(true);
        const response = await api.get('/search/batman');

        console.log(response.data.results);

        setHeroes(response.data.results);
        setLoading(false);
      } catch (error) {}
    }
    loadHeroes();
  }, []);

  function handleNavigate(hero) {
    navigation.navigate('Details', {hero});
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <Container>
        <CardMain>
          <Image source={Batman} style={{height: 200, width: 200}} />
          <ButtonExplorer onPress={() => navigation.navigate('Details')}>
            <ButtonExplorerText>Explorer</ButtonExplorerText>
          </ButtonExplorer>
        </CardMain>

        {loading ? (
          <ActivityIndicator color="#7159c1" size="large" />
        ) : (
          <ListCards
            data={heroes}
            key={heroes.id}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CardListed key={item.id}>
                <ImagemCard
                  source={{uri: item.image.url}}
                  resizeMode="contain"
                />
                <DetailsCard>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                      {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                    }}
                  >
                    <Text>{item.appearance.race}</Text>
                    <TouchableOpacity onPress={() => handleNavigate(item)}>
                      <Text style={{color: '#7159c1', fontWeight: 'bold'}}>
                        View hero ->
                      </Text>
                    </TouchableOpacity>
                  </View>
                </DetailsCard>
              </CardListed>
            )}
          />
        )}
      </Container>
    </SafeAreaView>
  );
}
