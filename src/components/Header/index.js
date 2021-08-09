import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// styles
import { Container, Logo, Top, Title } from './styles';

// logo
import logo from '../../assets/Nubank_Logo.png';

function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Marcos</Title>
      </Top>
      <Icon name='keyboard-arrow-down' size={20} color='#FFF'/>
    </Container>
  )
};

export default Header;