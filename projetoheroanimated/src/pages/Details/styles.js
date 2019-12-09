import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CardMain = styled.View`
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
  background-color: #000;
  border-bottom-left-radius: 60;
  border-bottom-right-radius: 60;
  position: absolute;
  z-index: 1;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Heroes = styled.View`
  background: #fff;
  box-shadow: 3px 1px 8px rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 12px;
  margin-top: 300px;
`;

export const HeroName = styled.Text`
  color: #666;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

export const HeroDescription = styled.Text`
  color: #7159c1;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
`;
