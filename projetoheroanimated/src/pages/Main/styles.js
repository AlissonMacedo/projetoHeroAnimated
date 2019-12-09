import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #999;
`;

export const HeaderSearch = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10;
  margin-right: 10;
  justify-content: space-around;
  background-color: #fff;
  height: 40;
  width: 100%;
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

export const ListCards = styled.View`
  background-color: #fff;
  width: 100%;
  flex: 1;
`;
