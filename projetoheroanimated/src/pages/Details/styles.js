import styled from 'styled-components/native';

export const Container = styled.ScrollView`
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
  height: 350px;
  width: 100%;
  background-color: #000;
  border-bottom-left-radius: 30;
  border-bottom-right-radius: 30;
  overflow: hidden;
`;

export const Image = styled.Image`
  height: 350px;
  width: 100%;
`;

export const Heroes = styled.View`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  margin-top: -65px;
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

export const HeroInfo = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #666;
  font-size: 22px;
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  color: #999;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 20px;
`;
