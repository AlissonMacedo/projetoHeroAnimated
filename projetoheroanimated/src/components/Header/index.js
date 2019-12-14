import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {HeaderSearch, InputPesquisa} from './styles';

function searchFilterFunction() {}

export default function Header() {
  return (
    <HeaderSearch>
      <Icon name="menu" color="#FFF" size={40} />

      <InputPesquisa
        placeholder="Pesquisar..."
        autoCapitalize="none"
        onChangeText={text => searchFilterFunction(text)}
      />
      <Icon name="search" color="#FFF" size={40} />
    </HeaderSearch>
  );
}
