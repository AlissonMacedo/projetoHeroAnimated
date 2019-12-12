import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;

export const CardMain = styled.View`
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background-color: #000;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const ListCards = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-self: stretch;
  margin: 5px 20px;
`;

export const CardListed = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  height: 120px;
  margin: 10px;
  padding: 10px;
`;

export const ImagemCard = styled.Image`
  height: 130px;
  width: 100px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const DetailsCard = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px 10px;
  height: 90px;
  background-color: #ccc;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
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
