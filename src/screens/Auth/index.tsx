import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Container, AuthText } from './styles';
import Logo from '../../assets/images/Logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Auth: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image source={Logo} />
      <AuthText>Identifique-se</AuthText>
      <Input name="token" placeholder="Token de Acesso" icon="lock" />
      <Button onPress={() => navigation.navigate('Trechos')}>Entrar</Button>
    </Container>
  );
};

export default Auth;
