/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

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
          <ImageHero source={Batman} resizeMode="cover" />
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
