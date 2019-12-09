import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #999;
`;

export const CardMain = styled.View`
  justify-content: center;
  align-items: center;
  height: 75%;
  width: 100%;
  background-color: #000;
  border-bottom-left-radius: 60;
  border-bottom-right-radius: 60;
  position: absolute;
`;

export const ListCards = styled.View`
  background-color: #fff;
  width: 100%;
  margin: 70%;
`;

export const CardListed = styled.View`
  width: 100%;
  height: 70;
  background-color: #000;
`;

export const ImagemCard = styled.Image`
  height: 100%;
  width: 40;
  border-radius: 4;
`;

export const DetailsCard = styled.View`
  height: 100%;
  width: 100%;
  background-color: #999;
`;

export const ButtonExplorer = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 15px;
  height: 30px;
  width: 120px;
  margin-top: 40;
`;

export const ButtonExplorerText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
