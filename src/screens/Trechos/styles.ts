import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Cards = styled.ScrollView``;

export const CardsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10px;
`;

export const Card = styled.TouchableOpacity`
  background-color: #ececec;

  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px 25px;
  margin-top: 20px;

  shadow-color: #000;
  shadow-offset: {
    width: 0,
    height: 2,
  };
  shadow-opacity: 0.20;
  shadow-radius: 4;
  elevation: 6;
`;

export const CardText = styled.Text``;

export const CardIcon = styled(Icon)`
  color: #287dd2;
`;
