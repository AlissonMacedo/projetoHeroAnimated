import styled from 'styled-components/native';

import {TextInput} from 'react-native';

export const HeaderSearch = styled.View`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  height: 60px;
  padding: 0 20px;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const InputPesquisa = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  font-size: 30px;
  margin-left: 10px;
  color: #fff;
  padding: 0 30px;
  height: 35px;
`;
