/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Header from '~/components/Header';
import {
  ImageHero,
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

export default function Main({navigation}) {
  const [heroes, setHeroes] = useState([]);
  const [heroSelected, setHeroSelected] = useState();
  const [headerImage, setHeaderImage] = useState(
    'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
  );

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

  function handleChangeHeaderImage(item) {
    setHeaderImage(item.image.url);
    setHeroSelected(item);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <Container>
        <CardMain>
          <ImageHero source={{uri: headerImage}} resizeMode="cover" />

          <ButtonExplorer onPress={() => handleNavigate(heroSelected)}>
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
              <TouchableOpacity onPress={() => handleChangeHeaderImage(item)}>
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
                      <TouchableOpacity
                        onPress={() => handleChangeHeaderImage(item)}
                      >
                        <Text style={{color: '#7159c1', fontWeight: 'bold'}}>
                          View hero{' '}
                          <Icon name="arrow-forward" color="#7159c1" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </DetailsCard>
                </CardListed>
              </TouchableOpacity>
            )}
          />
        )}
      </Container>
    </SafeAreaView>
  );
}
